import React from "react";
import styles from "./radioGroup.module.css";

const RadioGroup = ({ name, options, description, typeRadio, onChange }) => {
  return (
    <div className={`${styles.radioGroup} ${styles[typeRadio]}`}>
      {options.map((option, idx) => (
        <label key={idx} className={styles.radioOption}>

          <input type="radio" name={name} value={option} onChange={onChange} />
          <div className={styles.radioOptionText}>
            {option}
          {description && <span className={styles.descriptionRadio}>{description[idx]}</span>}
          </div>
        </label>
      ))}
    </div>
  );
};

export default RadioGroup;
