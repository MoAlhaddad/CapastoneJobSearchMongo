import React from 'react'
import {Row , col, Form, Input, Button, message} from 'antd';
import { useDispatch } from 'react-redux';
import { registerUser } from '../redux/actions/userActions';



function Register() {
     const dispatch = useDispatch()
    function register(values){

        if(values.password!==values.confirmedpassword){
                 message.error('passwords not matched')
        } else{
            console.log(values)
            dispatch(registerUser(values))
        }
    }

  return (
    <div className='register'>
        <Row justify ='center'>
            <Col lg={10} sm={24} className="bs p-5">
            <h3>Register</h3>
            <hr />
            <Form layout="vertical" onFinish={register}>
                <Form.Item 
                    label="username" 
                    name='username' 
                    rules={[{required:true}]}
                    > 

                    <Input />
                </Form.Item>

                <Form.Item 
                           label="password" 
                           name='password' 
                           rules={[{required:true}]}> 
                    <Input />
                </Form.Item>

                <Form.Item 
                           label="confirm password" 
                           name='confirm password' 
                           rules={[{required:true}]}> 
                    <Input />
                </Form.Item>
                <Button htmlType='submit'>Register</Button>
            </Form>


            </Col>

        </Row>
    </div>
  )
}

export default Register