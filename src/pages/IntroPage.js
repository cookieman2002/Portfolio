
import "slick-carousel/slick/slick.css";
import "../Carousel.css"
import Slider from "react-slick";
import { Link } from "react-router-dom";
const IntroPage = () => {

   
    var settings = {
        autoplay: true,
        infinite: true,
        speed: 800,
        autoplaySpeed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <></>,
        prevArrow: <></>
      };
      const list = [
        {
          id: 1,
          name: "something",
          image: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/green-tree-frog-care-sheet-hero"
        },
        {
        id: 2,
        name: "Frontend Webudvikler",
        image: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/green-tree-frog-care-sheet-hero",
        url: "/webudvikler"
        },
        {
        id: 3,
        name: "Grafik designer",
        image: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/green-tree-frog-care-sheet-hero",
        url: "/grafik"

        },
    
        ]
    return ( <div className="flex justify-around items-center mt-5">
<div className="shadow-2xl shadow-black h-[200px] w-[400px]">
<Slider {...settings}>
      {list.map(item => (
        <Link to={item.url} className=" relative w-[90%]">
            <img className="" src={item.image} alt="" />
            <p className="text-black bg-slate-700/20 rounded-tl-2xl rounded-tr-2xl absolute  bottom-0 left-0 bg-pink bg-opacity-75  w-full z-20">
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