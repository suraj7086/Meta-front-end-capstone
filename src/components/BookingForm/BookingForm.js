import React, { useState } from "react";
import Button from "../../components/Button/Button";
import "./BookingForm.css";

const BookingForm = ({
  onFormSubmit,
  isFormSubmitted,
  availableTimes,
  dispatchOnDateChange
}) => {
  const defaultTime = availableTimes[0];
  
  const [formValues, setFormValues] = useState({
    date: "",
    time: defaultTime,
    people: "",
    occasion: "",
  });

  const handleInputChange = (e) => {
    if (e.target.name === 'date') {
      dispatchOnDateChange(e.target.value);
    }
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const minGuest = 1;
  const maxGuest = 10;

  return (
    <form onSubmit={(e) => onFormSubmit(e, formValues)}>
      <div className="booking-form">
        <div className="booking-form-item">
          <label htmlFor="date" className="booking-form-label">
            Date
          </label>
          <input
            type="date"
            id="date"
            name="date"
            value={formValues.date}
            onChange={handleInputChange}
            className={`booking-form-input ${isFormSubmitted && !formValues.date ? "error" : ""}`}
          />
        </div>
        <div className="booking-form-item">
          <label htmlFor="time" className="booking-form-label">
            Time
          </label>
          <select
            id="time"
            name="time"
            value={formValues.time}
            onChange={handleInputChange}
            className={`booking-form-select ${isFormSubmitted && !formValues.time ? "error" : ""}`}
          >
            {availableTimes.map(time => 
              <option key={time} value={time}>
                {time}
              </option>
            )}
          </select>
        </div>
        <div className="booking-form-item">
          <label htmlFor="people" className="booking-form-label">
            Number of people
          </label>
          <input
            type="number"
            id="people"
            name="people"
            min={minGuest}
            max={maxGuest}
            value={formValues.people}
            onChange={handleInputChange}
            className={`booking-form-input ${isFormSubmitted && !formValues.people ? "error" : ""}`}
          />
        </div>
        <div className="booking-form-item">
          <label htmlFor="occasion" className="booking-form-label">
            Occasion
          </label>
          <select
            id="occasion"
            name="occasion"
            value={formValues.occasion}
            onChange={handleInputChange}
            className={`booking-form-select ${isFormSubmitted && !formValues.occasion ? "error" : ""}`}
          >
            <option value="birthday">Birthday</option>
            <option value="anniversary">Anniversary</option>
            <option value="business">Business</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="booking-form-button">
          <Button title="Book a table" type="submit" />
        </div>
      </div>
    </form>
  );
};

export default BookingForm;
