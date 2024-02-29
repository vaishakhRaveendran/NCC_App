import React, { useContext } from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input, Card } from "antd";
import "../assets/styles/login.css";

import { useNavigate } from "react-router";
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import AuthContext from "../context/auth/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const context = useContext(AuthContext);
  const { userType, setUserType, isLoggedIn, setIsLoggedIn } = context;
  const handleClick = async (values) => {
    try {
      const email = values.username;
      const password = values.password;
      console.log(email, password);
      await signInWithEmailAndPassword(auth, email, password)
        .then((user) => {
          console.log(user);
          setUserType(user.user.uid);
          setIsLoggedIn(true);
          localStorage.setItem("user", user.user.uid);
          navigate("/dashboard");
        })
        .catch((error) => {
          console.log(error);
          alert(error.message);
        });
    } catch (e) {
      console.log(e);
      alert(e.message);
    }
  };

  return (
    <>
      <div className="flex justify-center items-center min-h-screen">
        <Card
          title="Login"
          bordered={true}
          style={{
            width: 400,
          }}
        >
          <Form
            name="normal_login"
            className="login-form "
            initialValues={{
              remember: true,
            }}
            onFinish={handleClick}
          >
            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  message: "Please input your Username!",
                },
              ]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Username"
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your Password!",
                },
              ]}
            >
              <Input.Password
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>
            <div className="flex my-4 justify-between">
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              <a className="login-form-forgot" href="">
                Forgot password
              </a>
            </div>

            <div className="flex justify-center flex-col">
              <Button htmlType="submit" className="login-form-button">
                Log in
              </Button>
              <a href="" className="my-2 text-blue-500">
                register now!
              </a>
            </div>
          </Form>
        </Card>
      </div>
    </>
  );
};
export default Login;
