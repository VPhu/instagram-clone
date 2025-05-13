import React from "react";
import styles from "./radioInput.module.css";

const RadioInput = ({ name, options, checked, description, onChange }) => {
  return (
    <div className={styles.radioGroup}>
      {options.map((option, idx) => (
        <label key={idx} className={styles.radioOption}>
          <input type="radio" checked={checked} name={name} value={option} onChange={onChange} />
          {option}
          {description && <span className="descriptionSetting">{description}</span>}
        </label>
      ))}
    </div>
  );
};

export default RadioInput;
