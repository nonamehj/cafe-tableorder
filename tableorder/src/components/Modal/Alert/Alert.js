import { useGlobalContext } from "../../../context";
import "./AlertStyle.css";
import { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";
const Alert = () => {
  const { isAlertOpen, closeAlertModal } = useGlobalContext();
  const [countdown, setCountdown] = useState(3);
  useEffect(() => {
    if (!isAlertOpen) return;
    const intervalId = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);
    const timeoutId = setTimeout(() => {
      closeAlertModal();
    }, 3000);

    return () => {
      clearInterval(intervalId);
      clearTimeout(timeoutId);
      setCountdown(3);
    };
  }, [closeAlertModal, isAlertOpen]);

  return (
    <div
      className={`${
        isAlertOpen
          ? "show-alert-container alert-modal-container"
          : "alert-modal-container"
      }`}
    >
      <div className="alert-modal-content">
        <div className="alert-top">
          <p className="alert-countdown">{countdown}초 뒤에 종료됩니다</p>
          <button onClick={closeAlertModal} className="alert-close-btn">
            <FaTimes />
          </button>
        </div>
        <p className="staff-call-msg">직원 호출이 접수되었습니다</p>
      </div>
    </div>
  );
};

export default Alert;
