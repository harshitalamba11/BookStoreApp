import React from 'react'
// import list from "../../public/list.json"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from 'axios'
import Cards from "./Cards.jsx"
import { useEffect, useState } from 'react'
function FreeBook() {
  const [Book, setBook] = useState([]);
    useEffect(() => {
        const getBook = async () => {
            try {
                const res = await axios.get("http://localhost:4000/book");
                 // Check the response structure
                const result = res.data.filter(data => data.category === "Free");
                setBook(result);
                console.log(result);
            } catch (error) {
                console.log(error);
            }
        };
        getBook();
    }, []);


  // console.log(filterData)
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]};
  return (
    <>
    <div>
                <div className="m-12 mb-8 container px-4 max- w-screen-2xl mx-12">
                    <div>
                        <h1 className='font-semibold my-2 mx-0.1 md:my-3 md:mx-3  text-2xl'>Free Offered Courses</h1>
                        <p className='mx-0.1 mb-7 md:mx-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo illum fuga error quibusdam molestias delectus reiciendis vitae eaque velit, corrupti doloribus, iste nulla nam nesciunt dignissimos aperiam est, neque rem!</p>
                    </div>

                    <div>
                        <Slider {...settings}>
                        {Book.map((item) => (
                                <Cards item={item} key={item.id} />
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
    </>
  )
}

export default FreeBook
