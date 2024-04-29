// import { useState } from "react";
import PropTypes from "prop-types";

const DonateModal = ({ isOpen, setIsOpen }) => {
  DonateModal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    setIsOpen: PropTypes.func.isRequired,
  };

  // const [amount, setAmount] = useState(1);
  // const [frequency, setFrequency] = useState("monthly");

  const handleClose = () => setIsOpen(false);
  // const handleAmountChange = (event) => setAmount(event.target.value);
  // const handleFrequencyChange = (event) => setFrequency(event.target.value);

  return (
    <div className={`donate-modal${isOpen ? " open" : ""}`}>
      <div className="modal-content">
        <h2 className="d-h2">Donate Now</h2>
        <p className="d-p">
          Our work is funded by the generous donations of organisations and
          individuals. We will appreciate your support for our humanitarian
          work. You can donate towards our ongoing projects or a project of your
          choice and location.
        </p>
        {/* <form>
          <div className="donation-details">
            <label htmlFor="amount">Amount:</label>
            <input
              type="number"
              id="amount"
              name="amount"
              min="1"
              value={amount}
              onChange={handleAmountChange}
              aria-label="Donation amount"
            />
          </div>
          <div className="donation-frequency">
            <input
              type="radio"
              id="monthly"
              name="frequency"
              value="monthly"
              checked={frequency === "monthly"}
              onChange={handleFrequencyChange}
              aria-label="Monthly donation"
            />
            <label htmlFor="monthly">Monthly</label>
            <input
              type="radio"
              id="one-off"
              name="frequency"
              value="one-off"
              checked={frequency === "one-off"}
              onChange={handleFrequencyChange}
              aria-label="One-off donation"
            />
            <label htmlFor="one-off">One Off</label>
          </div> */}
          {/* <button type="submit" disabled>
            Donate Now
          </button> */}
        {/* </form> */}
        <div>
          <h3 className="d-h3">Bank Transfer Details</h3>
          <p className="d-p">
            Bank Name: First City Monument Bank (FCMB)
            <br />
            Account Name: African Human Development Centre
            <br />
            Account Number: 0715410014
          </p>
        </div>
        <button
          className="close-btn"
          aria-label="Close modal"
          onClick={handleClose}
        >
          {/* <i className="fas fa-times"></i> */}
          CLOSE
        </button>
      </div>
    </div>
  );
};

export default DonateModal;
