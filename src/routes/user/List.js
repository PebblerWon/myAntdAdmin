import React from 'react'
import PropTypes from 'prop-types'
import {Table,Modal} from 'antd'
import classnames from 'classnames'
import {DropOption} from '../../components/DropOption'
import {Link} from 'dva/router'

const List = ({})=>{
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
			title:'Avatar',
			dataIndex:'avatar',
			key:'avatar',
			className:'',
			render:(text)=><img src={text} alt="avatar" width={24}/>
		},{
			title:'Name',
			dataIndex:'name',
			key:'name',
			render:(text,record)=><Link to={`user/${record.id}`}>{text}</Link>,
		}, {
	        title: 'NickName',
	        dataIndex: 'nickName',
	        key: 'nickName',
	    }, {
	        title: 'Age',
	        dataIndex: 'age',
	        key: 'age',
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
	    }, {
	      title: 'Address',
	      dataIndex: 'address',
	      key: 'address',
	    }, {
	      title: 'CreateTime',
	      dataIndex: 'createTime',
	      key: 'createTime',
	    }, {
	    	title:'Operaction',
	    	key:'operaction',
	    	width:100,
	    	render:(text,record)=>{
	    		return 
	    		<DropOption 
	    			onMenuClick={e=>handleMenuClick(record,e)} 
	    			menuOptions={[
	    					{key:'1',name:'update'},
	    					{key:'2',name:'delete'},
	    				]}
	    		/>
	    	}
	    }
	]

	return(
		<div>
			<Table
				bordered
				scroll={{x:1250}}
				columns={columns}
				rowkey={record=>record.id}
			></Table>
		</div>
	)
}

export default List