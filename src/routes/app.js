import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import{connect} from 'dva'
import * as Layout from '../components/Layout'
import { classnames, config, menu } from '../utils'


const { Header, Menu, Bread, Sider, styles} = Layout
const { iconFontJS, iconFontCSS, logo } = config
const App = ({children,dispatch,app,loading})=>{
	console.log(app)
	const {user,menuPopoverVisible,siderFold,darkTheme,isNavbar,navOpenKeys} = app
	const siderProps={
		siderFold,
		navOpenKeys,
		changeOpenkeys(openKeys){
			dispatch({type:'app/handleNavOpenKeys',payload:{navOpenKeys:openKeys}})
		}
	}
	
	const headerProps={
		user,
		siderFold,
		location,
		isNavbar,
		menuPopoverVisible,
		navOpenKeys,
		menuProps:siderProps,
		logout(){
			console.log('logout')
		},
		switchSider(){
			console.log('switchSider')
		},
		siderFold(){
			console.log('siderFold')
		},
		switchMenuPopover(){
			console.log('switchMenuPopover')
		}
	}

	function onbtnclick(e){
		e.preventDefault();
		dispatch({type:'app/test'})
	}
	return (
		<div>
	      <Helmet>
	        <title>ANTD ADMIN</title>
	        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
	        <link rel="icon" href={logo} type="image/x-icon" />
	        {iconFontJS && <script src={iconFontJS}></script>}
	        {iconFontCSS && <link rel="stylesheet" href={iconFontCSS} />}
	      </Helmet>
	      <div className={classnames(styles.layout)}>
	        <aside className={classnames(styles.sider,styles.light)}>
	          <Sider {...siderProps}/>
	        </aside> 
	        <div className={styles.main}>
	          <Header {...headerProps}/>
	          <Bread/>
	          <div className={styles.container}>
	            <div className={styles.content}>
	              {children}
	            </div>
	            <button onClick={onbtnclick}>click me</button>
	          </div>
	        </div>
	      </div>
    	</div>
    )
}
App.propTypes={
	children:PropTypes.element,
	location:PropTypes.object,
	dispatch:PropTypes.func,
}
export default connect(
	({app,loading})=>({app,loading})
)(App);