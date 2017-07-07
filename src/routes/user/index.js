import React from 'react'
import Filter from './Filter'
import List from './List'

const User = ({})=>{
	return(
		<div>
			<Filter />
			<List />
		</div>
	)
}

export default connect(({user})=>({
	user
}))(User);
