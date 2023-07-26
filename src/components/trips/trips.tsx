import React from "react";

export interface TripDatum {
  id: string;
  tripName: string;
  description: string;
  cost: number;
  lengthInDays: number;
  imageUrl: string;
  isBookable: boolean;
}

interface TripsProps {
  tripData: TripDatum[];
  handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Trips: React.FC<TripsProps> = ({ tripData, handleClick }) => {
  return (
    <div className="trips">
      <h3>We found {tripData.length} trips for you!</h3>{" "}
      <ul className="trip-list">
        {tripData.map(
          ({
            id,
            tripName,
            description,
            imageUrl,
            cost,
            lengthInDays,
            isBookable,
          }) => {
            return (
              <li key={id} className="trip-card">
                <h3 className="trip-name grid-col-span-2">{tripName}</h3>
                <p className="trip-description grid-col-span-2">
                  {description}
                </p>
                <img
                  className="trip-thumbnail"
                  src={imageUrl}
                  alt={`representation of ${tripName}`}
                />
                <p className="trip-duration">
                  Duration: {lengthInDays} day
                  {lengthInDays > 1 && "s"}
                </p>
                <p className="trip-price">
                  Price:{" "}
                  {cost.toLocaleString("en-GB", {
                    style: "currency",
                    currency: "GBP",
                  })}
                </p>
                <button
                  className="grid-col-span-2 trip-book-button"
                  disabled={!isBookable}
                  onClick={handleClick}
                  value={`${tripName}/${cost}`}
                >
                  {isBookable ? "book now" : "fully booked"}
                </button>
              </li>
            );
          }
        )}
      </ul>
    </div>
  );
};

export default Trips;
