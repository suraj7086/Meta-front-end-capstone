import React, { useState, useEffect } from "react";
import "./Reservations.css";
import BookingForm from "../../components/BookingForm/BookingForm";
import Popup from "../../components/Popup/Popup";
import { useNavigate } from "react-router-dom";
import pages from "../../utils/pages";
import { fetchAPI } from "../../utils/Api";

const Reservations = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [availableTimes, setAvailableTimes] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchAvailableTimes = async () => {
      const response = await fetchAPI(new Date());
      setAvailableTimes(response);
    };

    fetchAvailableTimes();
  }, []);

  const handleFormSubmit = (e, formValues) => {
    e.preventDefault();
    setIsFormSubmitted(true);

    const areAllFieldsFilled = Object.values(formValues).every(value => value);

    if (areAllFieldsFilled) {
      setIsPopupVisible(true);
    }
  };

  const handleClosePopup = () => {
    setIsPopupVisible(false);
    navigate(pages.get("home").path);
  };

  const updateTimes = (availableTimes, date) => {
    const response = fetchAPI(new Date(date));
    console.log('response',response);
    return response.length !== 0 ? response : availableTimes;
  };

  const dispatchOnDateChange = (date)=>{
   setAvailableTimes(updateTimes(availableTimes,date));
  };

  return (
    <div data-testid="reservations-component" className="reservation">
      <div className="reservation-card">
        <h1 className="reservation-title">Table reservation</h1>
        <BookingForm
          availableTimes={availableTimes}
          onFormSubmit={handleFormSubmit}
          isFormSubmitted={isFormSubmitted}
          dispatchOnDateChange ={dispatchOnDateChange}
        />
      </div>

      {isPopupVisible && (
        <Popup
          onClose={handleClosePopup}
          title="Reservation Completed!"
          description="Thank you for choosing Little Lemon! Your reservation has been successfully made. You will receive a confirmation email with the details of your reservation. We are excited to see you soon!"
        />
      )}
    </div>
  );
};

export default Reservations;
