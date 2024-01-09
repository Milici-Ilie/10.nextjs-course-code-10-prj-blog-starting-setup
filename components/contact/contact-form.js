import { useEffect, useState } from "react";
import classes from "./contact-form.module.css";
import Notification from "../ui/notification";

async function sendContactData(contactDetails) {
  const response = await fetch("/api/contact", {
    method: "POST",
    body: JSON.stringify(contactDetails), //here we must be sure that the names from our 'body: ...' are equals with the field names that we aspect in the API Rout Function in 'contact.js' file from [PAGE/API]: 'email, name, message'
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json(); //🔔🔔[UI NOTIFICATIONS]🔔🔔

  if (!response.ok) {
    throw new Error(data.message || "Something went wrong!");
  }
}

//🥒🥒[CONTACT API ROUTE]🥒🥒
function ContactForm() {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredName, setEnteredName] = useState("");
  const [enteredMessage, setEnteredMessage] = useState("");
  const [requestStatus, setRequestStatus] = useState(); //🔔🔔[UI NOTIFICATIONS]🔔🔔 'pending', 'succes', 'error'
  const [requestError, setRequestError] = useState(); //🔔🔔[UI NOTIFICATIONS]🔔🔔

  useEffect(() => {
    if (requestStatus === "success" || requestStatus === "error") {
      const timer = setTimeout(() => {
        setRequestStatus(null);
        setRequestError(null);
      }, 3000);
    }
  }); //🔔🔔[UI NOTIFICATIONS]🔔🔔 making the notifications to close after 3 sec

  async function sendMessageHandler(event) {
    event.preventDefault();

    setRequestStatus("pending");

    try {
      await sendContactData({
        email: enteredEmail,
        name: enteredName,
        message: enteredMessage,
      });
      setRequestStatus("success");
      setEnteredMessage("");
      setEnteredEmail("");
      setEnteredName("");
    } catch (error) {
      setRequestError(error.message);
      setRequestStatus("error");
    } //🔔🔔[UI NOTIFICATIONS]🔔🔔

    // const response = await fetch("/api/contact", {
    //   method: "POST",
    //   body: JSON.stringify({
    //     email: enteredEmail,
    //     name: enteredName,
    //     message: enteredMessage,
    //   }), //here we must be sure that the names from our 'body: ...' are equals with the field names that we aspect in the API Rout Function in 'contact.js' file from [PAGE/API]: 'email, name, message'
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // });

    // const data = await response.json(); //🔔🔔[UI NOTIFICATIONS]🔔🔔

    // if (!response.ok) {
    //   throw new Error(data.message || "Something went wrong!");
    // }
  } //🥒🥒[CONTACT API ROUTE]🥒🥒 also check the <form ... onSubmit={senMessageHandler}>...</form> from bellow

  let notification;

  if (requestStatus === "pending") {
    notification = {
      status: "pending",
      title: "Sending message...",
      message: "Your message is on its way!",
    };
  }

  if (requestStatus === "success") {
    notification = {
      status: "success",
      title: "Success!",
      message: "Message sent successfully!",
    };
  }

  if (requestStatus === "error") {
    notification = {
      status: "error",
      title: "Error",
      message: requestError,
    };
  }

  return (
    <section className={classes.contact}>
      <h1>How can I help you?</h1>
      <form className={classes.form} onSubmit={sendMessageHandler}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor="email">Your email</label>
            <input
              type="email"
              id="email"
              required
              value={enteredEmail}
              onChange={(event) => setEnteredEmail(event.target.value)}
            />
            {/* 🥒🥒[CONTACT API ROUTE]🥒🥒 */}
          </div>
          <div className={classes.control}>
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              required
              value={enteredName}
              onChange={(event) => setEnteredName(event.target.value)}
            />
          </div>
        </div>

        <div className={classes.control}>
          <label htmlFor="message">Your Message</label>
          <textarea
            id="message"
            rows="5"
            required
            value={enteredMessage}
            onChange={(event) => setEnteredMessage(event.target.value)}
          ></textarea>
        </div>

        <div className={classes.actions}>
          <button>Send Message</button>
        </div>
      </form>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      {/* 🔔🔔[UI NOTIFICATIONS]🔔🔔 */}
    </section>
  );
}

export default ContactForm;
