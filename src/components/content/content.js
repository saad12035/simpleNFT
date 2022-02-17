import {Row, Col, Image} from 'antd';
import './content.css';
import SwiperCore, { Autoplay } from 'swiper';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import SimpleAccordion from "../acordian/acordian";

function ContextBody() {
  SwiperCore.use([Autoplay])
  return (
      <div>
        <Row>
          <Col span={12} offset={6}>
            <div className="hero-title" >
              <div className="row">
                <h1>COME MEET US</h1>
                <h2>lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsumlorum ipsum lorum ipsum lorum ipsum
                  lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum
                </h2>
                <Row>
                  <Col span={10} offset={2}>
                    <div className="button">
                      <h3>CONNECT WITH US</h3>
                    </div>
                  </Col>
                  <Col span={10} offset={1}>
                    <div className="button">
                      <h3>LORUM IPSUM</h3>
                    </div>
                  </Col>

                </Row>

              </div>
            </div>
          </Col>
        </Row>
        <Row style={{backgroundColor:"black"}}>
          <Col span={10} offset={2}>
            <div className="body1-text">
              <h1>Lorum ipsum</h1>
              <h2>Lorum ipsum Lorum ipsum Lorum ipsum Lorum ipsum Lorum ipsum Lorum ipsum Lorum ipsum Lorum ipsum</h2>
            </div>
          </Col>
          <Col span={10}offset={1}>
            <Image
                style={{marginTop:50,marginBottom:80}}
                src={require('../../images/ezgif-2-00c10e23d0.jpg')}
            />
          </Col>
        </Row>
        <Row style={{backgroundColor:"#E5E7EB"}}>
          <Col span={18} offset={4}>
            <div className="body2-text">
            <h1>OUR WORK</h1>
              <Swiper
                  modules={{Autoplay}}
                  autoplay={{delay:1500}}
                  spaceBetween={50}
                  slidesPerView={3}
                  loop={true}
              >
                <SwiperSlide><Image
                    src={require('../../images/BLOCKCHAIN-PARA-MEJORAR-LA-RECAUDACIÓN-DEL-IVA_Parte_1.png')}
                /></SwiperSlide>
                <SwiperSlide><Image
                    src={require('../../images/ezgif-2-00c10e23d0.jpg')}
                /></SwiperSlide>
                <SwiperSlide><Image
                    src={require('../../images/ezgif-2-00c10e23d0.jpg')}
                /></SwiperSlide><SwiperSlide><Image
                  src={require('../../images/ezgif-2-00c10e23d0.jpg')}
              /></SwiperSlide><SwiperSlide><Image
                  src={require('../../images/ezgif-2-00c10e23d0.jpg')}
              /></SwiperSlide><SwiperSlide><Image
                  src={require('../../images/ezgif-2-00c10e23d0.jpg')}
              /></SwiperSlide>
              </Swiper>
            </div>
            </Col>
        </Row>
        <Row style={{backgroundColor:"white"}}>
          <Col span={10}offset={2}>
          <div className="image-shah" >
            <h1>Lorum ipsum Lorum ipsum Lorum ipsum Lorum ipsum Lorum ipsum Lorum ipsum Lorum ipsumLorum ipsum</h1>
            <div className="button1">
              <h2>Button</h2>
            </div>

          </div>
          </Col>
          <Col span={10} >
            <div className="back">
              <Image
                  preview={false}
                  style={{width:400,height:700,marginLeft:100}}
                  src={require('../../images/wallet-buy@2x.png')}
              />
            </div>
          </Col>

        </Row>
        <Row style={{backgroundColor:"#E5E7EB"}}>
          <Col span={18} offset={4}>
            <div className="body3-text">
              <h1>GENERAL FAQS</h1>
              <hr style={{color:'red',width:200,margin:0,marginTop:-30,marginBottom:50}} className="solid"/>
              <SimpleAccordion/>
            </div>
          </Col>
        </Row>
      </div>


  );
}

export default ContextBody;