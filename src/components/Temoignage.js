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

function Temoignage() {
  return (
    <div className='temoignage bg-light'>
      <Container>
        <Row>
          <Col><h3 className="title">Témoignage</h3></Col>
          {/* <Col className="text-end">
            <div className="mx-2 swiper-button-prev"></div>
            <div className="mx-2 swiper-button-next"></div>
          </Col> */}
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
          <Commentaire nom='nom 1' title='title 1' entreprise='entreprise 1' text='text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 '  />
        </SwiperSlide>
        <SwiperSlide>
          <Commentaire  nom='nom 2' title='title 2' entreprise='entreprise 2' text='text2 text2 text2 text2 text2 text2 text2 text2 text2 text2 ' />
        </SwiperSlide>
        <SwiperSlide>
          <Commentaire  nom='nom 3' title='title 3' entreprise='entreprise 3' text='text3 text3 text3 text3 text3 text3 text3 text3 text3 text3 '  />
        </SwiperSlide>
        <SwiperSlide>
          <Commentaire  nom='nom 4' title='title 4' entreprise='entreprise 4' text='text4 text4 text4 text4 text4 text4 text4 text4 text4 text4 '  />
        </SwiperSlide>
        <SwiperSlide>
          <Commentaire  nom='nom 5' title='title 5' entreprise='entreprise 5' text='text5 text5 text5 text5 text5 text5 text5 text5 text5 text5 ' />
        </SwiperSlide>
        <SwiperSlide>
          <Commentaire  nom='nom 6' title='title 6' entreprise='entreprise 6' text='text6 text6 text6 text6 text6 text6 text6 text6 text6 text6 ' />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
export default Temoignage;
