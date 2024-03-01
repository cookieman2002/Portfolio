
import "slick-carousel/slick/slick.css";
import "../Carousel.css"
import Slider from "react-slick";
import { Link } from "react-router-dom";
import webImage from "../assets/pexels-pixabay-270360.jpg"
import ProfileImage from "../assets/m3[306].jpg"
import Cv from "../assets/Job cv.pdf"
import { useContext } from "react";
import { LangToggleContext } from "../context/LangContext";
import { ColorToggleContext } from "../context/ColorContext";

const IntroPage = () => {
const {isLang} = useContext(LangToggleContext)
const {isColor} = useContext(ColorToggleContext)
   
    var settings = {
        autoplay: true,
        infinite: true,
        speed: 800,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <></>,
        prevArrow: <></>
      };
      const list = [
        {
          id: 1,
          name: isLang.english ? "Sales assistant" : isLang.danish && "Salgsassistent",
          image: "https://media.lex.dk/media/4661/standard_Netto.jpg",
          url: "/SalgsAssistent"
        },
        {
        id: 2,
        name: isLang.english ? "Frontend Web-developer" : isLang.danish && "Frontend Webudvikler",
        image: webImage,
        url: "/webudvikler"
        },
        {
        id: 3,
        name: isLang.danish ? "Grafisk designer" : isLang.english && "Graphics Designer",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Adobe_Photoshop_CC_icon.svg/1200px-Adobe_Photoshop_CC_icon.svg.png",
        url: "/grafik"

        },
    
        ]
        
    return ( 
        <>
    <div className="flex flex-col">

    <div className="flex justify-around items-center mt-5">
<div className="shadow-2xl shadow-black h-[200px] w-[400px]">
<Slider {...settings}>
      {list.map(item => (
        <Link to={item.url} className=" relative w-[90%]">
            <img className="h-[400px] w-[900px] object-scale-down" src={item.image} alt="" />
            <p className={`${isColor.darkRed || isColor.darkBlue ? "text-white" : isColor.lightBlue || isColor.lightRed && "text-black"} bg-slate-700/20 rounded-tl-2xl rounded-tr-2xl absolute  bottom-0 left-0 bg-pink bg-opacity-75  w-full z-20`}>
                {item.name}
            </p>
        </Link>
        ))}
    </Slider>
</div>
        <div className="flex flex-col items-center gap-5">
            <img className="rounded-full shadow-xl profile_image w-44" src={ProfileImage} alt="" />
            <p className="w-48">
                {isLang.english ? "Hi my name is Magnus Larsen and i'm an Frontend web developer i specialize in HTML CSS and Javascript and work with diffrent frontend frameworks like ReactJS, AngularJS, Wordpress, vueJS and nextJS" :
 isLang.danish && "Hej mit navn er Magnus Larsen og jeg er en Frontend web-udvikler jeg specialisere i HTML, CSS og Javascript og jeg arbejder med forskellige Frontend frameworks såsom ReactJS, AngularJs, Wordpress, VueJS og NextJS"} </p>
        </div>

        </div>

        

<div>
    <a href={Cv} download={Cv} >
        <button  className="mt-72 ml-80 bg-white text-lg text-black p-6 pl-10 pr-10 rounded-full download_Button">{isLang.english ? "Download my CV" : isLang.danish && "Hent mit CV"}</button>
    </a>
</div>
    </div>
    </>
     );
}
 
export default IntroPage;