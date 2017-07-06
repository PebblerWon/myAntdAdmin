import React from 'react'
import PropTypes from 'prop-types'
import { Menu, Icon, Popover } from 'antd'
import styles from './Header.less'

const SubMenu = Menu.SubMenu

const Header = ({}) => {
  const siderFold = true;
  return (
    <div className={styles.header}>
        <div className={styles.button}>
          <Icon type={siderFold ? 'menu-unfold' : 'menu-fold'} />
        </div>
      <div className={styles.rightWarpper}>
        <div className={styles.button}>
          <Icon type="mail" />
        </div>
        <Menu mode="horizontal">
          <SubMenu 
            style={{float: 'right'}} 
            title={<span> <Icon type="user" />whn</span>}
          >
            <Menu.Item key="logout">退出登录</Menu.Item>
          </SubMenu>
        </Menu>
      </div>
    </div>
  )
}

Header.propTypes = {
  /*menu: PropTypes.array,
  user: PropTypes.object,
  logout: PropTypes.func,
  switchSider: PropTypes.func,
  siderFold: PropTypes.bool,
  isNavbar: PropTypes.bool,
  menuPopoverVisible: PropTypes.bool,
  location: PropTypes.object,
  switchMenuPopover: PropTypes.func,
  navOpenKeys: PropTypes.array,
  changeOpenKeys: PropTypes.func,*/
}

export default Header
