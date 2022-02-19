import {Layout, Menu} from 'antd';
import HeaderBanner from "../../components/header/headerbanner";
import './homepage.css';
import ContextBody from "../../components/content/content";
import FooterSite from "../../components/footersite/footersite";

const {Header, Footer, Content} = Layout;


function Home() {


  return (
      <Layout>
        <Header style={{backgroundColor: "black", height: 100}}><HeaderBanner/></Header>
        <Content style={{backgroundColor:"black"}}><ContextBody/></Content>
        <Footer style={{backgroundColor: "#BA1C1D"}}><FooterSite/></Footer>
      </Layout>
  );
}

export default Home;