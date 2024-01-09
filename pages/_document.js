import Document, { Html, Head, Main, NextScript } from "next/document";

//🗾🗾[_DOCUMENT.JS]🗾🗾
class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
          <div id="notifications"></div>
        </body>
      </Html>
    ); //🗾🗾[_DOCUMENT.JS]🗾🗾 for Portals we use here the <div id='notifications'>...</div> ... now go and also check the [COMPONENTS/UI/notification.js]
  }
}

export default MyDocument;
