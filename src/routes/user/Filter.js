import React from 'react'
import {Row,Col,Cascader,DatePicker,Button,Input,Switch} from 'antd'
import FilterItem from '../../components/FilterItem/FilterItem.js'
import city from '../../utils/city'

const {RangePicker} = DatePicker;
const Search = Input.Search
const ColProps = {
  xs: 24,
  sm: 12,
  style: {
    marginBottom: 16,
  },
}
const TwoColProps = {
  ...ColProps,
  xl: 96,
}
const Filter = ({})=>{
	const handleSubmit=()=>{};
	const handleChange=()=>{};
	const handleReset=()=>{};
	const onAdd=()=>{};
	return(
	<div>
		<Row gutter={24}>
	      <Col {...ColProps} md={8} xl={4}>
	        <Search placeholder="Search Name" size="large" onSearch={handleSubmit} />
	      </Col>
	      <Col {...ColProps} md={8} xl={4}>
	          <Cascader
	            size="large"
	            style={{ width: '100%' }}
	            options={city}
	            placeholder="Please pick an address"
	            onChange={handleChange}
	          />
	      </Col>
	      <Col {...ColProps} sm={12} md={8} xl={6}>
	        <FilterItem label="Createtime">
	            <RangePicker style={{ width: '100%' }} size="large" onChange={handleChange.bind(null, 'createTime')} />
	        </FilterItem>
	      </Col>
	      <Col {...TwoColProps} xl={{ span: 10 }} md={{ span: 24 }} sm={{ span: 24 }}>
	        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
	          <div >
	            <Button type="primary" size="large" style={{ marginRight: 16 }} onClick={handleSubmit}>Search</Button>
	            <Button size="large" onClick={handleReset}>Reset</Button>
	          </div>
	          <div>
	            <Switch style={{ marginRight: 16 }} size="large" onChange={handleChange} checkedChildren={'Motion'} unCheckedChildren={'Motion'} />
	            <Button size="large" type="ghost" onClick={onAdd}>Create</Button>
	          </div>
	        </div>
      	  </Col>
    	</Row>
    </div>
	)
}

export default Filter