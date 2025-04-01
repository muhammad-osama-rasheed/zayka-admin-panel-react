import React, { useState } from "react";
import styles from "./CustomInput.module.css";
import { DARK_GREEN } from "../../utils/colors/Colors";
import * as Icons from "react-icons/md";

function CustomInput({
  placeholder,
  title,
  value,
  onChange,
  type,
  icon,
  iconOutline,
  bad,
  name,
}) {
  const [isFocused, setIsFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const IconComponent = isFocused ? Icons[icon] : Icons[iconOutline];
  return (
    <div
      className={styles.container}
      style={{
        borderWidth: bad ? 1 : isFocused ? 1 : 0.3,
        borderColor: bad ? "red" : isFocused ? DARK_GREEN : "#ccc",
        marginBottom: bad ? 0 : "10px",
      }}
    >
      {(isFocused || value) && (
        <label
          style={{ color: bad ? "red" : DARK_GREEN }}
          className={styles.label}
        >
          {title}
        </label>
      )}
      {IconComponent && icon && (
        <IconComponent
          color={isFocused ? DARK_GREEN : "#666666"}
          size={20}
          className="icon"
        />
      )}
      <input
        value={value}
        onChange={onChange}
        type={showPassword ? "text" : type}
        name={name}
        className={`${styles.input} ${isFocused ? styles.focused : ""}`}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholder={isFocused ? placeholder : title}
        style={{ marginLeft: icon ? "10px" : 0 }}
      />
      {type === "password" && (
        <img
          onMouseDown={() => setShowPassword(true)}
          onMouseUp={() => setShowPassword(false)}
          onMouseLeave={() => setShowPassword(false)}
          className={styles.passwordIcon}
          src={showPassword ? "/images/hide.png" : "/images/seen.png"}
          alt="icon"
          style={{ opacity: showPassword ? "0.5" : "1" }}
        />
      )}
    </div>
  );
}

export default CustomInput;
