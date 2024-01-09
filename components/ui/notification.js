import ReactDOM from "react-dom"; //🗾🗾[_DOCUMENT.JS]🗾🗾

import classes from "./notification.module.css";
//🔔🔔[UI NOTIFICATIONS]🔔🔔

function Notification(props) {
  const { title, message, status } = props;

  let statusClasses = "";

  if (status === "success") {
    statusClasses = classes.success;
  }

  if (status === "error") {
    statusClasses = classes.error;
  }

  const cssClasses = `${classes.notification} ${statusClasses}`;

  return (
    ReactDOM.createPortal(
      <div className={cssClasses}>
        <h2>{title}</h2>
        <p>{message}</p>
      </div>
    ),
    document.getElementById("notifications")
  ); //🗾🗾[_DOCUMENT.JS]🗾🗾 the 'notifications' will connect with the 'id=notifications' from [PAGES/_document.js] and so this will be portalled there
}

export default Notification;
