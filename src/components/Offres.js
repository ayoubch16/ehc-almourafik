import { Row, Col,Container} from 'react-bootstrap';

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";

import SwiperEquipement from './SwiperEquipement';

import ehc1 from '../image/ehc1.JPG'
import ehc2 from '../image/ehc2.JPG'
import ehc3 from '../image/ehc3.JPG'




function Offres() {
  return (
    <div className='equipement' >
      <Container>
        <h3 className='title'><b>Offres </b> EHC AL MOURAFIK</h3>
        <Swiper pagination={{
          type: "fraction",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper">
          <SwiperSlide>
            <SwiperEquipement className='m-2 p-2' title='Equipe mobile gériatrique' 
                              image={ehc3} 
                              description="Le scanner est une technique radiologique qui utilise, comme la radiographie conventionnelle, un tube qui émet des rayons X et des capteurs qui sont disposés en couronne. Ces derniers mesurent la différence d'intensité entre l'entrée et la sortie d'un faisceau de rayons X dans une région du corps." 
                              composition1="- Psychiatre"
                              composition2="- kinésithérapeute"
                              composition3="- Médecin gériatre"
                              composition4="- Nutrutioniste"
                              composition5="- Inférmier gériatre" />
          </SwiperSlide>
          <SwiperSlide>
            <SwiperEquipement className='m-2 p-2' title="Equipe d'hospitalisation à domicile" 
                              image={ehc2} 
                              description="assurer l'ensemble du processus d'hospitalisation nécessaire pour les patients, en assurant le matériel et le staff médical." 
                              composition1="- Médecins spécialistes "
                              composition2="- Infémriers H24"
                              composition3="- Équipe érapetique adaptée sur indication médicale" />
          </SwiperSlide>
          <SwiperSlide>
            <SwiperEquipement className='m-2 p-2' title="Équipe d'urgence" 
                              image={ehc1} 
                              description="  intervention d'urgence, urgence des sujets agés( confusion, agitation, chutes, troupe de conscience ....)." 
                              composition1="- Médecin urgentiste"
                              composition2="- Infirmier urgentiste"
                              composition3="- Ambulance médicalisée" />
          </SwiperSlide>
        </Swiper>
      </Container>
    </div>
  );
}
export default Offres;
