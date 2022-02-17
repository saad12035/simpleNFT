import { Layout } from 'antd';
import HeaderBanner from "../../components/header/headerbanner";
import './homepage.css';
import ContextBody from "../../components/content/content";
import FooterSite from "../../components/footersite/footersite";

const { Header, Footer, Content } = Layout;

function Home(){
  return(
      <Layout>
        <Header ><HeaderBanner/></Header>
        <Content><ContextBody/></Content>
          <Footer style={{backgroundColor:"#182533"}}><FooterSite/></Footer>
      </Layout>
  );
}

export default Home;