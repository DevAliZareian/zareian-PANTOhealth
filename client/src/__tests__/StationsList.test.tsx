import { render, screen, fireEvent } from "@testing-library/react";
import { StationsList } from "../components/StationsList";
import { useStationsUIStore } from "../store/useStationsUIStore";
import type { Station } from "../types/station";

jest.mock("../store/useStationsUIStore");

describe("StationsList", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should select a station when clicked", () => {
    const setSelectedStationId = jest.fn();
    const mockStore = {
      selectedStationId: null,
      setSelectedStationId,
    };

    (useStationsUIStore as unknown as jest.Mock).mockImplementation((selector) => selector(mockStore));

    const stations: Station[] = [
      { id: 1, name: "Berlin Hbf", city: "Berlin", lat: 52.5251, lng: 13.3694 },
      { id: 2, name: "Munich Hbf", city: "Munich", lat: 48.1351, lng: 11.582 },
    ];

    render(<StationsList stations={stations} />);

    const station = screen.getByText("Berlin Hbf");
    fireEvent.click(station);

    expect(setSelectedStationId).toHaveBeenCalledWith(1);
  });
});
