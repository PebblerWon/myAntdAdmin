import React from 'react'
import PropTypes from 'prop-types'
import {Icon,Switch} from 'antd'
import styles from './Layout.less'
import {config} from '../../utils'
import Menus from './Menu'

const Sider=({siderFold,navOpenKeys})=>{
	const menuProps={
		siderFold,
		navOpenKeys
	}
	return(
		<div>
			<div className={styles.logo}>
				<img src={config.logo} alt="antDesign"/>
				<span>{config.name}</span>
			</div>
			<Menus {...menuProps}></Menus>
			<div className={styles.switchtheme}>
				<span>
					<Icon type="bulb">切换主题</Icon>
				</span>
				<Switch  checkedChildren="Dark" unCheckedChildren="Light"></Switch>
			</div>
		</div>
	)
}
Sider.PropTypes={
	siderFold:PropTypes.bool,
	navOpenKeys:PropTypes.array,
}
export default Sider;