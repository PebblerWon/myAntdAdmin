import React from 'react'
import PhotoItem from './PhotoItem'
import PropTypes from 'prop-types'
import {connect} from 'dva'
import {Row,Col,Pagination} from 'antd'

const Photo = ({dispatch,location,photo})=>{
	console.log(photo);
	const rowProps={
		type:'flex',
		justify:'center',
		gutter:16,
	}
	const colProps={
		xs:16,
		sm:12,
		md:8,
		lg:8,
		xl:6,
		style:{
			margin:'16px auto',
			textAlign:'center'
		}
	}
	const fateData = [
		{
	    "albumId": 1,
	    "id": 1,
	    "title": "accusamus beatae ad facilis cum similique qui sunt",
	    "url": "http://placehold.it/600/92c952",
	    "thumbnailUrl": "http://placehold.it/150/92c952"
	  },
	  {
	    "albumId": 1,
	    "id": 2,
	    "title": "reprehenderit est deserunt velit ipsam",
	    "url": "http://placehold.it/600/771796",
	    "thumbnailUrl": "http://placehold.it/150/771796"
	  },
	  {
	    "albumId": 1,
	    "id": 3,
	    "title": "officia porro iure quia iusto qui ipsa ut modi",
	    "url": "http://placehold.it/600/24f355",
	    "thumbnailUrl": "http://placehold.it/150/24f355"
	  },
	  {
	    "albumId": 1,
	    "id": 4,
	    "title": "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
	    "url": "http://placehold.it/600/d32776",
	    "thumbnailUrl": "http://placehold.it/150/d32776"
	  },
	  {
	    "albumId": 1,
	    "id": 5,
	    "title": "natus nisi omnis corporis facere molestiae rerum in",
	    "url": "http://placehold.it/600/f66b97",
	    "thumbnailUrl": "http://placehold.it/150/f66b97"
	  }
	 ]
	//const photos = photo.list.map(
	const photos = fateData.map(
		(item,index)=>
			<Col {...colProps} key={item.id}>
				<PhotoItem {...item}/>
			</Col>
		)
	const paginationProps = {
		...photo.pagination,
		onChange(page){
			const {query,pathname} = location
			dispatch(routerRedux.push({
				pathname,
				query:{
					...query,
					page:page.current,
					pageSize:page.pageSize
				}
			}))
		}
	}
	return (
			<div>
				<Row {...rowProps}>
					{photos}
				</Row>
				<Pagination {...paginationProps}/>
			</div>
		)
}

Photo.PropTypes={
	photos:PropTypes.array.isRequired
}

export default connect(({photo})=>({
	photo
}))(Photo);