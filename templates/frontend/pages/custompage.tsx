import { NextPage } from "next";
import CustomComponent from "../components/CustomComponent";

// please consider making your page static by using getStaticProps

const CustomPage: NextPage = () => {
  // your custom page here
  return (
    <>
      <CustomComponent />
    </>
  );
};

export default CustomPage;
