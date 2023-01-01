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
      disabled: false,
    },
    {
      label: 'Portfolio',
      key: 'SubMenu',
      children: [
        {
          type: 'group',
          label: 'Item 1',
          children: [
            {
              label: 'Option 1',
              key: 'setting:1',
            },
            {
              label: 'Option 2',
              key: 'setting:2',
            },
          ],
        },
        {
          type: 'group',
          label: 'Item 2',
          children: [
            {
              label: 'Option 3',
              key: 'setting:3',
            },
            {
              label: 'Option 4',
              key: 'setting:4',
            },
          ],
        },
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
      }}
    >
      <div
        style={{
          float: 'left',
          width: '17rem',
          color: 'rgb(232 232 232)',
          fontWeight: 600,
          fontSize:20,
          letterSpacing: '2px'
        }}
      >Amien Kurniawan.</div>
      <Menu
        theme="dark"
        mode="horizontal"
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
        <Col span={12}>
        


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