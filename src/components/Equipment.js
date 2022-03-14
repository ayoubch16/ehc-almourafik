import { Row, Col,Container} from 'react-bootstrap';

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

import SwiperEquipement from './SwiperEquipement';

import scanner from '../image/scanner.webp'


function Equipment() {
  return (
    <div className='equipement' >
      <Container>
        <h3 className='title'><b>Equipment </b> EHC AL MOURAFIK</h3>
        <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
          <SwiperSlide>
            <SwiperEquipement title='material 1' description='description 1' image='scanner' />
          </SwiperSlide>
          <SwiperSlide>
            <SwiperEquipement title='material 2' description='description 2' image='scanner' />
          </SwiperSlide>
          <SwiperSlide>
            <SwiperEquipement title='material 3' description='description 3' image='scanner' />
          </SwiperSlide>
          <SwiperSlide>
            <SwiperEquipement title='material 4' description='description 4' image='scanner' />
          </SwiperSlide>
          <SwiperSlide>
            <SwiperEquipement title='material 5' description='description 5' image='scanner' />
          </SwiperSlide>
        </Swiper>
      </Container>
    </div>
  );
}
export default Equipment;
