import React from 'react'
import {Card} from 'antd'
import PropTypes from 'prop-types'

const PhotoItem =({...itemProps})=>{
	const {url,title} = itemProps;
	const imgProps={
		width:'100%'
	}
	return (
		<Card bodyStyle={{ padding: 0}} style={{width:240}}>
		    <div className="custom-image">
		      <img alt={title} {...imgProps} src={url}/>
		    </div>
		    <div className="custom-card">
		      <h3>{title}</h3>
		    </div>
  		</Card>
	)
}

export default PhotoItem;