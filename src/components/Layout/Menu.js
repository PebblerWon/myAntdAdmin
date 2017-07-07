import React from 'react'
import PropTypes from 'prop-types'
import{Menu,Icon} from 'antd'
import {Link} from 'dva/router'
import{arrayToTree,queryArray} from '../../utils'
import pathToRegexp from 'path-to-regexp'
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const Menus=({siderFold,navOpenKeys,changeOpenkeys})=>{
	//设置只打开当前父级菜单
	const onOpenChange = (openKeys) => {
	    const latestOpenKey = openKeys.find(key => !(navOpenKeys.indexOf(key) > -1));
	    const latestCloseKey = navOpenKeys.find(key => !(openKeys.indexOf(key) > -1));

	    let nextOpenKeys = [];
	    if (latestOpenKey) {
	      nextOpenKeys = getAncestorKeys(latestOpenKey).concat(latestOpenKey);
	    }
	    if (latestCloseKey) {
	      nextOpenKeys = getAncestorKeys(latestCloseKey);
	    }
	    changeOpenkeys(nextOpenKeys);
  	}
  	const getAncestorKeys = (key) => {
  		//表明父子关系，sub3的祖先元素为sub2
	    const map = {
	      sub3: ['sub2'],
	    };
	    return map[key] || [];
    }
	let menuProps = !siderFold ? {
    	onOpenChange,
    	openKeys: navOpenKeys,
  	} : {}
	return(
		<Menu mode={siderFold?"vertical":"inline"} {...menuProps}>
			<Menu.Item key="0">
				<Link to="/user"><Icon type="user"/>Users</Link>
			</Menu.Item>
			<Menu.Item key="1">
				<Link to="/user"><Icon type="laptop"/>Dashboard</Link>
			</Menu.Item>
			<Menu.Item key="2">
				<Link to="/user"><Icon type="camera-o"/>UI Elements</Link>
			</Menu.Item>
			<SubMenu key="3" title={<span><Icon type="mail" /><span>Recharts</span></span>}>
	          	<Menu.Item key="3_1">
					<Link to="/user"><Icon type="line-chart"/>LineChart</Link>
				</Menu.Item>
				<Menu.Item key="3_2">
					<Link to="/user"><Icon type="bar-chart"/>BarChart</Link>
				</Menu.Item>
				<Menu.Item key="3_3">
					<Link to="/user"><Icon type="area-chart"/>AreaChart</Link>
				</Menu.Item>
        	</SubMenu>
	        <SubMenu key="4" title={<span><Icon type="appstore" /><span>Test</span></span>}>
	          	<Menu.Item key="4_1">
					<Link to="/user"><Icon type="bar-chart"/>test1</Link>
				</Menu.Item>
				<Menu.Item key="4_2">
					<Link to="/user"><Icon type="area-chart"/>test2</Link>
				</Menu.Item>
	        </SubMenu>
		</Menu>
	)
}
Menus.PropTypes={
	siderFold:PropTypes.bool,
	openKeys:PropTypes.array,
	changeOpenkeys:PropTypes.func
}
export default Menus;