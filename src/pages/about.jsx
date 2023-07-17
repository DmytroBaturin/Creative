import {useLocation} from "react-router-dom";
import {ImageSec} from "../components/aboutComponents/image/index.jsx";

export const About = () => {
    const location = useLocation()
    console.log(location.pathname)

    return(
        <>
           <ImageSec/>
        </>
    )
}
