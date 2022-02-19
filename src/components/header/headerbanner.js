import './headerbranner.css';
import {Row, Col, Image} from 'antd';

function HeaderBanner(){
  return(
      <div className="container">
        <Row>
          <Col span={8} offset={1}>
            <Image
                preview={false}
                style={{marginLeft:30,marginTop:20,width:80,height:80}}
                src={require('../../images/WhatsApp Image 2022-02-18 at 12.54.24 AM.jpeg')}
            />
          </Col>
          <Col span={4} offset={8}>
            <h1 style={{color:"white",textAlign:"center",backgroundColor:"#BA1C1D",marginTop:20}}>Connect Wallet</h1>
          </Col>
        </Row>

      </div>
  );
}

export default HeaderBanner;