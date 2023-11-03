import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import { userService } from '../../service/service';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { SET_INFOR } from '../../redux/constant/user';
import bgLog from "../Register/bg.jpg"
import styled from 'styled-components';
const LoginPage = () => {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  const onFinish = (values) => {
    userService.login(values)
    .then((res) => {
      dispatch({
        type: SET_INFOR,
        payload: res.data.content,
      })
      //lưu thông tin vào localStorage
      localStorage.setItem("USER", JSON.stringify(res.data.content));
      toast.success("Đăng nhập thành công")
      navigate("/admin/users");
        console.log(res);
     })
     .catch((err) => {
        toast.error("Đăng nhập thất bại")
        console.log(err);
     });
    console.log('Success:', values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
 return ( 
    <div className='mt-20 centered-form'
      
      style={{
                backgroundImage: `url(${bgLog})`,
                height: '100vh',
                backgroundSize: "cover",
                backgroundPosition: "center",
                paddingTop: "30px"
            }}
    >
      <Form className="container bg-white py-6 rounded-xl p-4 ant-form"
    layout='vertical'
    name="login"
    labelCol={{
      span: 8,
    }}
    wrapperCol={{
      span: 24,
    }}
    style={{
      maxWidth: 600,
      alignItems:"center",
      padding: '20px',
      height: '60vh'
    }}
    initialValues={{
      remember: true,
    }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item
      label="Username"
      name="taiKhoan"
      rules={[
        {
          required: true,
          message: 'Please input your username!',
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Password"
      name="matKhau"
      rules={[
        {
          required: true,
          message: 'Please input your password!',
        },
      ]}
    >
      <Input.Password />
    </Form.Item>

    <Form.Item
      wrapperCol={{
        span: 24,
      }}
    >
      <Button className='bg-orange-500 hover:bg-white 
      hover:text-orange-500' 
      type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
      </Form>
    </div>
 );
};
export default LoginPage;

