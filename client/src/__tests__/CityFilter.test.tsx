import { render, screen, fireEvent } from "@testing-library/react";
import { CityFilter } from "../components/CityFilter";
import { useStationsUIStore } from "../store/useStationsUIStore";

jest.mock("../store/useStationsUIStore");

describe("CityFilter", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should display the list of cities and filter stations by city", () => {
    const setCityFilter = jest.fn();
    const mockStore = {
      cityFilter: "",
      setCityFilter,
    };

    (useStationsUIStore as unknown as jest.Mock).mockImplementation((selector) => selector(mockStore));

    const cities = ["Berlin", "Munich", "Hamburg"];

    render(<CityFilter cities={cities} />);

    const input = screen.getByPlaceholderText("e.g. Berlin");
    fireEvent.change(input, { target: { value: "Berlin" } });

    expect(setCityFilter).toHaveBeenCalledWith("Berlin");
  });

  it("should clear the filter when 'Clear' button is clicked", () => {
    const setCityFilter = jest.fn();
    const mockStore = {
      cityFilter: "Berlin",
      setCityFilter,
    };

    (useStationsUIStore as unknown as jest.Mock).mockImplementation((selector) => selector(mockStore));

    render(<CityFilter cities={["Berlin", "Munich"]} />);

    const clearButton = screen.getByText("Clear");
    fireEvent.click(clearButton);

    expect(setCityFilter).toHaveBeenCalledWith("");
  });
});
