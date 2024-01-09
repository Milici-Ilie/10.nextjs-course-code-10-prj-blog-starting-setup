import Head from "next/head"; //🎧🎧[HEAD/ META DATA]🎧🎧

import ContactForm from "../components/contact/contact-form";

function ContactPage() {
  return (
    <>
      {/* 🎧🎧[HEAD/ META DATA]🎧🎧 */}
      <Head>
        <title>Contact Me</title>
        <meta name="description" content="Send me your messages!" />
      </Head>
      <ContactForm />
    </>
  );
}

export default ContactPage;
