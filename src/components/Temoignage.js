import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";

import { Row, Col,Container} from 'react-bootstrap';

import Commentaire from '../components/Commentaire';
import imgcleint1 from '../image/img-cleint1.webp'
import imgcleint2 from '../image/img-cleint2.webp'
import imgcleint3 from '../image/img-cleint3.webp'


function Temoignage() {
  return (
    <div className='temoignage bg-light'>
      <Container>
        <Row>
          <Col><h3 className="title"><b>Expériences clients</b> EHC AL MOURAFIK </h3></Col>
        </Row>
      </Container>
      
        <Swiper
        slidesPerView={3}
        spaceBetween={20}
        slidesPerGroup={2}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        modules={[ Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Commentaire nom='Orville Rivière' title='title 1' image={imgcleint1} entreprise='Laneco' text='text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 '  />
        </SwiperSlide>
        <SwiperSlide>
          <Commentaire  nom='Fletcher Asselin' title='title 2' image={imgcleint2}  entreprise='Rustler Steak House' text='text2 text2 text2 text2 text2 text2 text2 text2 text2 text2 ' />
        </SwiperSlide>
        <SwiperSlide>
          <Commentaire  nom='Yvon Pirouet' title='title 3' image={imgcleint3} entreprise="Pup 'N' Taco" text='text3 text3 text3 text3 text3 text3 text3 text3 text3 text3 '  />
        </SwiperSlide>
        <SwiperSlide>
          <Commentaire  nom='Eugène Daoust' title='title 4' image={imgcleint1} entreprise='Vari-Tec' text='text4 text4 text4 text4 text4 text4 text4 text4 text4 text4 '  />
        </SwiperSlide>
        <SwiperSlide>
          <Commentaire  nom='Dominic Michaud' title='title 5' image={imgcleint2} entreprise='Mikrotechnic' text='text5 text5 text5 text5 text5 text5 text5 text5 text5 text5 ' />
        </SwiperSlide>
        <SwiperSlide>
          <Commentaire  nom='Rabican Chartré' title='title 6' image={imgcleint3} entreprise='First Rate Choice' text='text6 text6 text6 text6 text6 text6 text6 text6 text6 text6 ' />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
export default Temoignage;
