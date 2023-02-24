import React from "react";

//Components
import OurServices from "./home/OurServices";
import TopFooter from "./home/TopFooter";
import BottomFooter from "./home/BottomFooter";
import { useContext } from "react";
import AuthContext from "../context/auth-context";
const Footer = () => {
  const authCtx = useContext(AuthContext);
  if (!authCtx.isLoggedIn) return null;

  return (
    <footer>
      <OurServices />
      <TopFooter />
      <BottomFooter />
    </footer>
  );
};

export default Footer;
