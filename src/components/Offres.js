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

import Service from '../image/ServicceMedical.jpg'




function Offres() {
  return (
    <div className='equipement' >
      <Container>
        <h3 className='title'><b>Offres </b> EHC AL MOURAFIK</h3>
        <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
          <SwiperSlide>
            <SwiperEquipement className='m-2 p-2' title='Equipe mobile gériatrique' 
                              image={Service} 
                              description="Le scanner est une technique radiologique qui utilise, comme la radiographie conventionnelle, un tube qui émet des rayons X et des capteurs qui sont disposés en couronne. Ces derniers mesurent la différence d'intensité entre l'entrée et la sortie d'un faisceau de rayons X dans une région du corps." 
                              composition1="- Psychiatre"
                              composition2="- kinésithérapeute"
                              composition3="- Médecin gériatre"
                              composition4="- Nutrutioniste"
                              composition5="- Inférmier gériatre" />
          </SwiperSlide>
          <SwiperSlide>
            <SwiperEquipement className='m-2 p-2' title="Equipe d'hospitalisation à domicile" 
                              image={Service} 
                              description="un instrument utilisé pour détecter et étudier les sons produits dans le corps qui sont transmis aux oreilles de l'auditeur par un tube en caoutchouc relié à une pièce généralement en forme de coupe placée sur la zone à examiner." 
                              composition1="- Psychiatre"
                              composition2="- kinésithérapeute"
                              composition3="- Médecin gériatre"
                              composition4="- Nutrutioniste"
                              composition5="- Inférmier gériatre" />
          </SwiperSlide>
          <SwiperSlide>
            <SwiperEquipement className='m-2 p-2' title="Équipe d'urgence" 
                              image={Service} 
                              description=" Le microscope est un instrument qui permet d'observer des organismes ou éléments divers parfois invisibles à l'œil nu, comme les bactéries, les levures ou même des organismes unicellulaires." 
                              composition1="- Psychiatre"
                              composition2="- kinésithérapeute"
                              composition3="- Médecin gériatre"
                              composition4="- Nutrutioniste"
                              composition5="- Inférmier gériatre" />
          </SwiperSlide>
        </Swiper>
      </Container>
    </div>
  );
}
export default Offres;
