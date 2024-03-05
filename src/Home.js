import React from "react";
// import styled from "styled-components";
import HeroSection from "./component/HeroSection";
import { FeatureProduct } from "./component/FeatureProduct";
import Services from "./component/Services";
import Trusted from "./component/Trusted";
// import { UseProductContext } from "./context/Productcontext";

function Home() {
  // const { isLoading, featuredProducts, products } = UseProductContext();
  // console.log(isLoading, featuredProducts, products);
  const data = {
    name: "Sharma Store",
  };
  return (
    <>
      <HeroSection myData={data} />
      <FeatureProduct />
      <Services />
      <Trusted />
    </>
  );
}
// const Wrapper=styled.section`
// height:100vh;
// background-color:${({theme})=>theme.colors.bg}
// `
export default Home;
