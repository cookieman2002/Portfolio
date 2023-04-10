
import "slick-carousel/slick/slick.css";
import "../Carousel.css"
import Slider from "react-slick";
const IntroPage = () => {

   
    var settings = {
        // autoplay: true,
        infinite: true,
        speed: 500,
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
        name: "somethings",
        image: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/green-tree-frog-care-sheet-hero"
        },
        {
        id: 3,
        name: "other",
        image: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/green-tree-frog-care-sheet-hero"
        },
    
        ]
    return ( <div className="flex justify-around items-center">
<div className="h-[200px] w-[400px]">
<Slider {...settings}>
      {list.map(item => (
        <div className="relative w-[90%]">
            <img src={item.image} alt="" />
            <p className="text-black bg-slate-700/20 rounded-tl-2xl rounded-tr-2xl absolute  bottom-0 left-0 bg-pink bg-opacity-75  w-full z-20">
                {item.name}
            </p>
        </div>
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