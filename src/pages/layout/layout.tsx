import { Layout, Menu } from 'antd';
import React from 'react';
import Footer from '../component/Footer';
import style from './layout.less';
import { blogBackGroundImgs, imgNum } from '../../utils/constant';

const { Header, Content } = Layout;

const Blog: React.FC = props => {
  // render() {
  return (
    <div className={style.Blog_box}>
      {/* <Layout > */}
        <Header className={style.Nav_box}>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
            {new Array(15).fill(null).map((_, index) => {
              const key = index + 1;
              return <Menu.Item key={key}>{`nav ${key}`}</Menu.Item>;
            })}
          </Menu>
        </Header>
        <Content className={style.Content_box}>
          <div className="site-layout-content" >123</div>
        </Content>
        <Footer />
      {/* </Layout> */}
    </div>

  )
  // }
}

export default Blog;