import {
  faCar,
  faLocationDot,
  faSpinner,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const Booking = ({
  carModels,
  bookingOpen,
  setBookingOpen,
  selectedModel,
  setSelectedModel,
  setSuccessOpen,
}) => {
  const [bookingLoading, setBookingLoading] = useState(false);

  const handleSubmit = (event) => {
    console.log("submitted");
    event.preventDefault();
    setBookingLoading(true);
    setTimeout(() => {
      setBookingLoading(false);
      setBookingOpen(false);
      setSuccessOpen(true);
      event.target.reset();
    }, 2000);

    setTimeout(() => {
      setSuccessOpen(false);
    }, 6000);
  };

  return (
    <div className={`booking ${bookingOpen && "booking-open"}`}>
      <div className="booking__container">
        <button
          className="booking__close"
          onClick={() => {
            setBookingOpen(false);
          }}
        >
          <FontAwesomeIcon icon={faTimes} />
        </button>
        <h3 className="booking__title">Book a Car</h3>
        <form className="booking__form" onSubmit={handleSubmit}>
          <div className="form__item">
            <label htmlFor="" className="form__item__label">
              <FontAwesomeIcon icon={faCar} />
              <span>
                Select Your Model<span className="required">*</span>
              </span>
            </label>
            <select
              className="form__item__select"
              value={selectedModel}
              onChange={(event) => setSelectedModel(event.target.value)}
              required
            >
              <option value="" disabled>
                Select
              </option>
              {carModels.map((model) => (
                <option value={`${model.make} ${model.model}`} key={model.id}>
                  {model.make} {model.model}
                </option>
              ))}
            </select>
          </div>
          <div className="form__item">
            <label htmlFor="" className="form__item__label">
              <FontAwesomeIcon icon={faLocationDot} />
              <span>
                Pick-Up<span className="required">*</span>
              </span>
            </label>
            <select className="form__item__select" defaultValue="" required>
              <option value="" disabled>
                Select
              </option>
              <option value="New York">New York</option>
              <option value="London">London</option>
              <option value="Sydney">Sydney</option>
              <option value="Beijing">Beijing</option>
              <option value="Los Angeles">Los Angeles</option>
            </select>
          </div>
          <div className="form__item">
            <label htmlFor="" className="form__item__label">
              <FontAwesomeIcon icon={faLocationDot} />
              <span>
                Drop-Off<span className="required">*</span>
              </span>
            </label>
            <select className="form__item__select" defaultValue="" required>
              <option value="" disabled>
                Select
              </option>
              <option value="New York">New York</option>
              <option value="London">London</option>
              <option value="Sydney">Sydney</option>
              <option value="Beijing">Beijing</option>
              <option value="Los Angeles">Los Angeles</option>
            </select>
          </div>
          <div className="form__item">
            <label htmlFor="" className="form__item__label">
              <FontAwesomeIcon icon={faLocationDot} />
              <span>
                Pick-Up<span className="required">*</span>
              </span>
            </label>
            <input required type="date" className="form__item__input" />
          </div>
          <div className="form__item">
            <label htmlFor="" className="form__item__label">
              <FontAwesomeIcon icon={faLocationDot} />
              <span>
                Drop-Off<span className="required">*</span>
              </span>
            </label>
            <input required type="date" className="form__item__input" />
          </div>
          <div className="form__item">
            <button className="form__item__submit">
              {bookingLoading ? (
                <FontAwesomeIcon
                  icon={faSpinner}
                  className="form__item__submit__loading"
                />
              ) : (
                "Book Ride"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Booking;
