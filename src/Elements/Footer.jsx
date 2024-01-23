import { NavLink, useNavigate } from "react-router-dom"
import DekstopFooter from "../Layout/Footer/Dekstop"

const Footer = ({Mobile, MobileOrTablet, MobileHigh}) => {
    return(
        <>
        {Mobile ? (
            <></>
        ) : MobileOrTablet ? (
            <></>
        ) : MobileHigh ? (
            <></>
        ) : (
            <DekstopFooter/>
        )}
        </>
    )
}

export default Footer