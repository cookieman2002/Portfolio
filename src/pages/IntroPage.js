
import "slick-carousel/slick/slick.css";
import "../Carousel.css"
import Slider from "react-slick";
import { Link } from "react-router-dom";
import webImage from "../assets/pexels-pixabay-270360.jpg"
const IntroPage = () => {

   
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
          name: "Netto SalgsAssistent",
          image: "https://media.lex.dk/media/4661/standard_Netto.jpg",
          url: "/SalgsAssistent"
        },
        {
        id: 2,
        name: "Frontend Webudvikler",
        image: webImage,
        url: "/webudvikler"
        },
        {
        id: 3,
        name: "Grafik designer",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Adobe_Photoshop_CC_icon.svg/1200px-Adobe_Photoshop_CC_icon.svg.png",
        url: "/grafik"

        },
    
        ]
        console.log(webImage)
    return ( <div className="flex justify-around items-center mt-5">
<div className="shadow-2xl shadow-black h-[200px] w-[400px]">
<Slider {...settings}>
      {list.map(item => (
        <Link to={item.url} className=" relative w-[90%]">
            <img className="h-96 w-[400px] object-scale-down" src={item.image} alt="" />
            <p className="text-white bg-slate-700/20 rounded-tl-2xl rounded-tr-2xl absolute  bottom-0 left-0 bg-pink bg-opacity-75  w-full z-20">
                {item.name}
            </p>
        </Link>
        ))}
    </Slider>
</div>
        <div className="flex flex-col items-center gap-5">
            <img className="rounded-full shadow-xl w-44" src="https://assets.petco.com/petco/image/upload/f_auto,q_auto/green-tree-frog-care-sheet-hero" alt="" />
            <p>something something</p>
        </div>

        


    </div> );
}
 
export default IntroPage;