
import {Col, Image} from "antd";
import {Row} from 'antd';

function FooterSite() {
  return (
      <div className="footer-container">
       <Row>
         <Col span={12} offset={6}>
           <h1 style={{color:"white",textAlign:"center",marginLeft:50}}>© Copyrights</h1>
         </Col>
       </Row>
        <div style={{marginBottom:30}}/>
        <Row>
          <Col span={12}offset={10}>
            <Image
                preview={false}
                style={{marginRight: 20, width: 60, height: 60}}
                src={require('../../images/Group 8.png')}
            />
            <Image
                preview={false}
                style={{marginRight: 20, width: 60, height: 60}}
                src={require('../../images/Group 9.png')}
            />
            <Image
                preview={false}
                style={{marginRight: 20, width: 60, height: 60}}
                src={require('../../images/Group 10.png')}
            />
            <Image
                preview={false}
                style={{marginRight: 20, width: 60, height: 60}}
                src={require('../../images/Group 11.png')}
            />
          </Col>
        </Row>
        <div style={{marginBottom:20}}/>
      </div>
  );
}

export default FooterSite;