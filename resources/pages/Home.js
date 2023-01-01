import react from 'react';
import { Breadcrumb, Layout, Menu, theme, Image, Col, Row } from 'antd';
const { Header, Content, Footer } = Layout;
import { motion } from "framer-motion"
const Home = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const menus = [
    {
      label: 'Home',
      key: 'home',
    },
    {
      label: 'Experience & Education',
      key: 'education',
    },
    {
      label: 'Portfolio',
      key: 'SubMenu',
      children: [
        {
          label: 'Option 1',
          key: 'setting:1',
        },
        {
          label: 'Option 2',
          key: 'setting:2',
        }
      ],
    }
  ];
  const container = {
    show: {
      transition: {
        staggerChildren: 0.35,
      },
    },
  };
  const item={
    hidden:{
      opacity:0,
      y:200
    },
    show:{
      opacity:1,
      y:0,
      transition:{
        ease:[0.555, 0.115, 0.330, 0.800],
        duration:1.6
      } 
    }
  }
  return (
    <Layout>
    <Header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 1,
        width: '100%',
        backgroundColor:'#f0f2f5'
      }}
    >
      <div
        style={{
          float: 'left',
          width: '17rem',
          color: 'rgb(0 0 0)',
          fontWeight: 600,
          fontSize:20,
          letterSpacing: '2px'
        }}
      >Amien Kurniawan.</div>
      <Menu
        style={{backgroundColor:'#f0f2f5'}}
        theme="dark"
        mode="horizontal"
        forceSubMenuRender={true}
        subMenuCloseDelay='100'
        defaultSelectedKeys={['Home']}
        items={menus}
      />
    </Header>
    
    <Content
      className="site-layout"
      style={{
        padding: '0 50px',
      }}
    >
      <div
        style={{
          padding: 24,
          minHeight: 380,
          background: colorBgContainer,
          color:colorBgContainer,
          fontSize:'4rem'
        }}
      >
        <motion.div
        variants={container}
        initial='hidden'
        animate='show'>      
            <motion.div variants={item}>
            <h2 >
              Hi, I'm Amien
            </h2>
            </motion.div>
         
            <motion.div variants={item}>
            <h2>
              I'm Programmer with Strong Focus on
            </h2>
            </motion.div>
            <motion.div variants={item}>
              <h2>
                Problem Solving & Passionate to
              </h2>
            </motion.div>
            <motion.div variants={item}>
              <h2>
                 Create Something Awesome.
              </h2>
            </motion.div>
        </motion.div>
      </div>
    </Content>
    <Content
      className="site-layout"
      style={{
        padding: '0 0',
      }}
    >
      <div
        style={{
          minHeight: 380,
          background: colorBgContainer,
          color:colorBgContainer,
          fontSize:'4rem'
        }}
      >
      <Row>
        <Col span={12}>
          <Image
            width={"100%"}
            preview={false}
            src={`storage/first-lake-alberta-canada.jpg`}
          />
        </Col>
        <Col span={12} style={{backgroundColor:'#f0f2f5'}}>
        <div className="outter octagon-outter1">
          <p>OCTAGON</p>
          <div className="inner octagon-inner1">
          </div>
        </div>
        <div className="outter octagon-outter2">
          <p>OCTAGON2</p>
          <div className="inner octagon-inner2">
          </div>
        </div>
        <div className="outter octagon-outter3">
          <p>OCTAGON3</p>
          <div className="inner octagon-inner3">
          </div>
        </div>
        <div className="outter octagon-outter4">
          <p>OCTAGON3</p>
          <div className="inner octagon-inner4">
          </div>
        </div>
        <div className="outter octagon-outter5">
          <p>OCTAGON3</p>
          <div className="inner octagon-inner5">
          </div>
        </div>
        </Col>
      </Row>
    </div>
      </Content>
    <Footer
      style={{
        textAlign: 'center',
      }}
    >
      Ant Design ©2018 Created by Ant UED
    </Footer>
  </Layout>
  );
};
export default Home;