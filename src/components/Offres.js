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
import stethoscop from '../image/stethoscop.webp'
import microscop from '../image/microscop.webp'
import lit from '../image/litmedicalise.webp'



function Offres() {
  return (
    <div className='equipement' >
      <Container>
        <h3 className='title'><b>Offres </b> EHC AL MOURAFIK</h3>
        <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
          <SwiperSlide>
            <SwiperEquipement title='Scanner' image={scanner} description="Le scanner est une technique radiologique qui utilise, comme la radiographie conventionnelle, un tube qui émet des rayons X et des capteurs qui sont disposés en couronne. Ces derniers mesurent la différence d'intensité entre l'entrée et la sortie d'un faisceau de rayons X dans une région du corps."  />
          </SwiperSlide>
          <SwiperSlide>
            <SwiperEquipement title='Stethoscop' image={stethoscop} description="un instrument utilisé pour détecter et étudier les sons produits dans le corps qui sont transmis aux oreilles de l'auditeur par un tube en caoutchouc relié à une pièce généralement en forme de coupe placée sur la zone à examiner. "  />
          </SwiperSlide>
          <SwiperSlide>
            <SwiperEquipement title='Microscop' image={microscop} description=" Le microscope est un instrument qui permet d'observer des organismes ou éléments divers parfois invisibles à l'œil nu, comme les bactéries, les levures ou même des organismes unicellulaires."  />
          </SwiperSlide>
          <SwiperSlide>
            <SwiperEquipement title='Lit médicalisé' image={lit} description="Un lit médicalisé est un lit adapté aux besoins de patients dont l'état de santé demande de longues périodes alitées ou réduit son niveau de mobilité. Il permet au personnel soignant, au patient et à son entourage de prodiguer les soins avec moins d'efforts, tout en réduisant les risques de manipulations et de chutes."  />
          </SwiperSlide>
        </Swiper>
      </Container>
    </div>
  );
}
export default Offres;
