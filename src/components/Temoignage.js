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
          <Col><h1>Témoignage</h1></Col>
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
          <Commentaire />
        </SwiperSlide>
        <SwiperSlide>
          <Commentaire />
        </SwiperSlide>
        <SwiperSlide>
          <Commentaire />
        </SwiperSlide>
        <SwiperSlide>
          <Commentaire />
        </SwiperSlide>
        <SwiperSlide>
          <Commentaire />
        </SwiperSlide>
        <SwiperSlide>
          <Commentaire />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
export default Temoignage;
