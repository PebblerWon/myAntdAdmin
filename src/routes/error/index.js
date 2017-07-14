import React from 'react'
import {Icon} from 'antd'
import styles from './index.less'
export default ()=><div className='content-inner'>
	<div className={styles.error}>
		<Icon type='frown-o'></Icon>
		<h1>404 Not Found</h1>
	</div>
</div>