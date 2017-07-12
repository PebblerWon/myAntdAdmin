import React from 'react'
import PropTypes from 'prop-types'
import {Table,Modal} from 'antd'
import classnames from 'classnames'
import DropOption from '../../components/DropOption'
import {Link} from 'dva/router'

const List = ({...prop})=>{
	const handleMenuClick = (record,e)=>{
		if(e.key ==="1"){
			console.log(1)
		}else if(e.key ==="2"){
			console.log(2)
		}
	}
	//table structure
	const columns = [
		{
			title:'Name',
			dataIndex:'name',
			key:'name',
			render:(text,record)=><Link to={`users/${record.id}`}>{text}</Link>,
		},{
	    	title:'Gender',
	    	dataIndex:'isMale',
	    	key:'isMale',
	    	render:(text)=><span>{text?'Male':'Female'}</span>
	    }, {
	      title: 'Phone',
	      dataIndex: 'phone',
	      key: 'phone',
	    }, {
	      title: 'Email',
	      dataIndex: 'email',
	      key: 'email',
	    },{
	    	title:'Operaction',
	    	key:'operaction',
	    	width:100,
	    	render:(text,record)=>
	    		<DropOption 
	    			onMenuClick={e=>handleMenuClick(record,e)} 
	    			menuOptions={[
	    					{key:"1",name:'Update'},
	    					{key:"2",name:'Delete'},
	    				]}
	    		/>
	    	
	    }
	]
	return(
		<div>
			<Table
				{...prop}
				bordered
				scroll={{x:1250}}
				columns={columns}
				simple
				rowKey={record=>record.id}
			></Table>
		</div>
	)
}

export default List