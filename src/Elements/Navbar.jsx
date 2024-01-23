import DekstopNavbar from "../Layout/Navbar/Desktop";


const Navbar = ({Mobile, MobileOrTablet, MobileHigh}) => {
  return (
    <>
    {Mobile ? (
      <></>
    ) : MobileOrTablet ? (
      <></>
    ) : MobileHigh ? (
     <></> 
    ) : (
      <DekstopNavbar /> 
    )}
    </>
  );
};

export default Navbar;
