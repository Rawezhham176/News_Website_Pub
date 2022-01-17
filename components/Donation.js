import React, { useState, useRef } from "react";
import styles from "../styles/Donation.module.css";
import PayP from "../services/PayP";

const Donation = () => {
  const [value, setValue] = useState(1);
  const [msg, setMsg] = useState("");
  const [checkout, setCheckout] = useState();

  return (
    <div>
      <form className={styles.donation_from} id="donation">
        <h1 className={styles.header}>Buy me a Coffee ;)</h1>
        <div className={styles.customFieldAmountBox}>
          <label
            className={`${styles.customField} ${styles.customFieldAmount}`}
          >
            <input
              type="number"
              min="1"
              placeholder="&nbsp;"
              onChange={(event) => setValue(event.target.value)}
              required
            />
            <span className={styles.placeholder}>Enter Amount: {value}$</span>
          </label>

          <label className={styles.customField}>
            <textarea
              name=""
              id="message"
              cols="30"
              rows="10"
              onChange={(event) => setMsg(event.target.value)}
              placeholder="Write me a message"
            ></textarea>
          </label>
        </div>

        <div className={styles.paypal_box}>
          <PayP value={value} />
        </div>
      </form>
    </div>
  );
};

export default Donation;
