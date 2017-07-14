import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'dva'
import { Form, Icon, Input, Button, Checkbox ,Row} from 'antd';
import style from './index.css';

const FormItem = Form.Item;
const Login = ({
	login,
	dispatch,
	form:{
		  getFieldDecorator,
	    validateFieldsAndScroll,
	    validateFields
	}
})=>{
	function handleSubmit(e){
		e.preventDefault();
	    validateFields((err, values) => {
	    	if(err){
				return;
			}else{
				dispatch({type:'login/login',payload:values})
			}
	    });
  	}
  	
  	return (
  		<div className={style.form}>
      <Form onSubmit={handleSubmit}>
        <FormItem>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: '请输入您的用户名!' }],
          })(
            <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder=""/>
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: '请输入您的密码!' }],
          })(
            <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="密码" />
          )}
        </FormItem>
        <Row>
          <Button type="primary" htmlType="submit" size="large" className={style.button}>
            点击登录
          </Button>
        </Row>
      </Form></div>
    );
}

/*export default Form.create()(Login);*/

export default connect(
	({login})=>({login})
)(Form.create()(Login))