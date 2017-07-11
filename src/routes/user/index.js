import React from 'react'
import {connect} from 'dva'
import { routerRedux } from 'dva/router'
import Filter from './Filter'
import List from './List'

const User = ({location,dispatch,user})=>{
	const { list, pagination, currentItem, modalVisible, modalType, isMotion, selectedRowKeys } = user
	const {pageSize} = pagination;
	const listProps = {
		dataSource:list,
		pagination:pagination,
		location,
		onChange (page) {
	      const { query, pathname } = location
	      console.log(location)
	      dispatch(routerRedux.push({
	        pathname,
	        query: {
	          ...query,
	          page: page.current,
	          pageSize: page.pageSize,
	        },
	      }))
    	},
	}
	return(
		<div>
			<Filter />
			<List {...listProps}/>
		</div>
	)
}

export default connect(({user})=>({
	user
}))(User);
