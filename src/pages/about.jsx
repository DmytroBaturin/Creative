import {useLocation} from "react-router-dom";
import './indexPage.scss'
import {ImageSec} from "../components/aboutComponents/image/index.jsx";
import {Info} from "../components/aboutComponents/info/index.jsx";

export const About = () => {
    const location = useLocation()
    console.log(location.pathname)

    return(
        <>
           <div className="page2">
            <Info/>
            <ImageSec/>
           </div>
        </>
    )
}
