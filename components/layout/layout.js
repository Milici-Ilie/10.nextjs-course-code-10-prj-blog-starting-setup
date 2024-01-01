import { Fragment } from "react";
import MainNavigation from "./main-navigation";
//🤕🤕[DYNAMIC HEADER]🤕🤕 this file will be the 'Layout' components itself

function Layout(props) {
  return (
    <Fragment>
      <MainNavigation />
      <main>{props.children}</main>
    </Fragment>
  ); //🤕🤕[DYNAMIC HEADER]🤕🤕 we use <main>{props.children}</main> because we will wrap the entire layout of the <Component {...}/> from "_app.js" file
}

export default Layout;
