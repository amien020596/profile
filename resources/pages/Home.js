import react from 'react';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
const { Header, Content, Footer } = Layout;

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
          fontWeight: 800,
          fontSize:20,
          textTransform: 'uppercase',
          letterSpacing: '3px'
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
      <Breadcrumb
        style={{
          margin: '16px 0',
        }}
      >
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
      <div
        style={{
          padding: 24,
          minHeight: 380,
          background: colorBgContainer,
        }}
      >
        Content
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