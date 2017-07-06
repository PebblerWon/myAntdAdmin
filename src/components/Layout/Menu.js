import React from 'react'
import PropTypes from 'prop-types'
import{Menu,Icon} from 'antd'
import {Link} from 'dva/router'
import{arrayToTree,queryArray} from '../../utils'
import pathToRegexp from 'path-to-regexp'
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const Menus=({siderFold,navOpenKeys})=>{
	const onOpenChange = (openKeys) => {
	    const latestOpenKey = openKeys.find(key => !(navOpenKeys.indexOf(key) > -1))
	    const latestCloseKey = navOpenKeys.find(key => !(openKeys.indexOf(key) > -1))
	    let nextOpenKeys = []
	    if (latestOpenKey) {
	      nextOpenKeys = getAncestorKeys(latestOpenKey).concat(latestOpenKey)
	    }
	    if (latestCloseKey) {
	      nextOpenKeys = getAncestorKeys(latestCloseKey)
	    }
	    changeOpenKeys(nextOpenKeys)
  	}
	let menuProps = !siderFold ? {
    	onOpenChange,
    	openKeys: navOpenKeys,
  	} : {}
	return(
		<Menu mode={siderFold?"vertical":"inline"}>
			<SubMenu key="sub1" title={<span><Icon type="mail" /><span>Navigation One</span></span>}>
	          <MenuItemGroup key="g1" title="Item 1">
	            <Menu.Item key="1">Option 1</Menu.Item>
	            <Menu.Item key="2">Option 2</Menu.Item>
	          </MenuItemGroup>
	          <MenuItemGroup key="g2" title="Item 2">
	            <Menu.Item key="3">Option 3</Menu.Item>
	            <Menu.Item key="4">Option 4</Menu.Item>
	          </MenuItemGroup>
        	</SubMenu>
	        <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>Navigation Two</span></span>}>
	          <Menu.Item key="5">Option 5</Menu.Item>
	          <Menu.Item key="6">Option 6</Menu.Item>
	          <SubMenu key="sub3" title="Submenu">
	            <Menu.Item key="7">Option 7</Menu.Item>
	            <Menu.Item key="8">Option 8</Menu.Item>
	          </SubMenu>
	        </SubMenu>
	        <SubMenu key="sub4" title={<span><Icon type="setting" /><span>Navigation Three</span></span>}>
	          <Menu.Item key="9">Option 9</Menu.Item>
	          <Menu.Item key="10">Option 10</Menu.Item>
	          <Menu.Item key="11">Option 11</Menu.Item>
	          <Menu.Item key="12">Option 12</Menu.Item>
	        </SubMenu>
		</Menu>
	)
}
Menus.PropTypes={
	siderFold:PropTypes.bool,
	openKeys:PropTypes.array,
}
export default Menus;