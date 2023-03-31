import { React, useEffect } from "react";
import { useAppContext } from "../context/AppProvider";

function Alert({ alert }) {
  const { showAlert, tasks } = useAppContext();

  useEffect(() => {
    const timeout = setTimeout(() => {
      showAlert();
    }, 3500);
    return () => clearTimeout(timeout);
  }, []);

  const styles = `bg-${alert.style}-600 hover:bg-${alert.style}-500 transition-colors`;

  return (
    <div
      className={`mb-2 ${styles} text-center p-2 rounded text-white text-lg sm:text-xl`}
    >
      <p>{alert.message}</p>
    </div>
  );
}

export default Alert;
