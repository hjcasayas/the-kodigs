import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Typography } from 'antd';

import './main-nav.styles.scss';

class MainNav extends PureComponent {
  render() {
    const { Title } = Typography;

    return (
      <div className='header'>
        <div className='header__title'>
          <Title level={2}>
            <span className='header__title'>The Kodigs</span>
          </Title>
        </div>
        <Menu mode='horizontal' theme='dark' style={{ lineHeight: '64px' }}>
          <Menu.Item>
            <Link to='/Home'>Home</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to='/counter'>Counter</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to='/todo'>Todo</Link>
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}

export default MainNav;
