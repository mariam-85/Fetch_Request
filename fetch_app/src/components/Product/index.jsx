import React from 'react'
import style from './index.module.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";



export default function Product({ title, price, description, images }) {
  
  function SampleNextArrow(props) {
		const { className, style, onClick } = props;
		return (
			<div
				className={className}
				style={{
					...style,
					display: 'block',
					background: 'black',
					borderRadius: '20%',
				}}
				onClick={onClick}
			/>
		);
	}

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={[className, style.prev_btn].join(' ')}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      />
    );
  }

  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };


  return (
    <div  className={style.products_card}>
      {/* <img src={images[0]} alt='pic' className={style.products_picture}></img>
      {/* <img src={images[1]} alt='pic' className={style.products_picture}></img>
      <img src={images[2]} alt='pic' className={style.products_picture}></img> */} 

<div className={style.slider_block}>
        <Slider {...settings} className={style.slider}>
          <div>
            <img src={images[0]} alt='img1' />
          </div>
          <div>
            <img src={images[1]} alt='img2' />
          </div>
          <div>
            <img src={images[2]} alt='img3' />
          </div>
        </Slider>
      </div>

      <p>Title: { title }</p>
      <p>Price: { price }</p>
      <p>Description: { description }</p>
    </div>
  )
}