import React from 'react'
import PropTypes from 'prop-types'
import { Menu, Icon, Popover } from 'antd'
import styles from './Header.less'
import * as Layout from './index.js'
const SubMenu = Menu.SubMenu
const Header = ({user,logout,switchSider,sidefFold,isNavbar,location,switchMenuPopover,menuPopoverVisible,menuProps}) => {
  const siderFold = true;
  console.log(user)
  return (
    <div className={styles.header}>
        {isNavbar
        ? <Popover 
          placement="bottomLeft" 
          onVisibleChange={switchMenuPopover} 
          visible={menuPopoverVisible} 
          overlayClassName={styles.popovermenu} 
          trigger="click" 
          content={<Layout.Menu {...menuProps}/>}>
          <div className={styles.button}>
            <Icon type="bars" />
          </div>
        </Popover>
        : <div className={styles.button} onClick={switchSider}>
          <Icon type={siderFold ? 'menu-unfold' : 'menu-fold'} />
        </div>}
      <div className={styles.rightWarpper}>
        <div className={styles.button}>
          <Icon type="mail" />
        </div>
        <Menu mode="horizontal">
          <SubMenu 
            style={{float: 'right'}} 
            title={<span> <Icon type="user" />{user.name}</span>}
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
