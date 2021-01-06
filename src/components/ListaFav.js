import api from "../services/axios";
import Slider from "react-slick";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
// import { CircularProgressbar } from 'react-circular-progressbar';
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { useParams } from "react-router-dom";

function LeftArrow(props) {
  const { onClick } = props;
  return <FiArrowLeft onClick={onClick} size={25} color="#006aff" />;
}

function RightArrow(props) {
  const { onClick } = props;
  return <FiArrowRight onClick={onClick} size={25} color="#006aff" />;
}

export default function ListaFav() {
  const [list, setList] = useState([]);
  const params = useParams();

  useEffect(() => {
    api
      .get(`user/${params.username}/follows`)
      .then((response) => setList(response.data));
  }, [params.username]);

  var settings = {
    dots: false,
    infinite: true,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,

    nextArrow: <RightArrow />,
    prevArrow: <LeftArrow />,

    //autoplay: true,
    //speed: 2000,
    //autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <Slider centerMode={true} {...settings}>
        {list.map((lista, index) => (
          <Link key={index} to={`anime/${lista.title}`}>
            <img
              className="post-img-show"
              draggable="false"
              src={`https://image.tmdb.org/t/p/original${lista.poster}`}
              alt="poster"
            />
          </Link>
        ))}
      </Slider>
    </>
  );
}
