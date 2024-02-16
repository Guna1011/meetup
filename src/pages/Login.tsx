import React from "react";
import {
  Tabs,
  Tab,
  Input,
  Link,
  Button,
  Card,
  CardBody,
  CardHeader,
  CardFooter,
} from "@nextui-org/react";
import { Avatar } from "@nextui-org/react";
import { FrappeApp } from "frappe-js-sdk";
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';





export const Login = () => {
  
  const [selected, setSelected] = React.useState("login");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const navigateTo = useNavigate();

  const frappe = new FrappeApp();

  const auth = frappe.auth();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const makeLogin = (email, password) => {
    auth
      .loginWithUsernamePassword({ username: email, password: password })
      .then((response) => {
        toast.success("Welcome to Meetup " + response.full_name , {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: true,
          theme: "dark",
          });
          navigateTo('/meetup')

          
      })
      .catch((error) => toast.error(error.message,{
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: true,
        theme: "dark",
        }));
  };

  return (
    <div className="flex flex-col w-full items-center justify-center h-screen">
      <Card className="max-w-full w-[340px] h-[600px] ">
        <CardHeader className="flex flex-col justify-center">
          <h1>WELCOME TO MEETUP</h1>
        </CardHeader>
        <CardHeader className="flex flex-col justify-center">
          <Avatar
            className="w-20 h-20 text-large"
            isBordered
            radius="full"
            color="default"
          />
        </CardHeader>

        <CardBody className="overflow-hidden">
          <Tabs
            fullWidth
            size="md"
            aria-label="Tabs form"
            selectedKey={selected}
            onSelectionChange={setSelected}
          >
            <Tab key="login" title="Login">
              <form className="flex flex-col gap-4">
                <Input
                  isRequired
                  label="Email"
                  placeholder="Enter your email"
                  type="email"
                  onChange={handleEmailChange}
                />
                <Input
                  isRequired
                  label="Password"
                  placeholder="Enter your password"
                  type="password"
                  onChange={handlePasswordChange}
                />
                <p className="text-center text-small">
                  Need to create an account?{" "}
                  <Link size="sm" onPress={() => setSelected("sign-up")}>
                    Sign up
                  </Link>
                </p>

                <div className="flex gap-2 justify-end">
                  <Button
                    fullWidth
                    color="primary"
                    onPress={() => makeLogin(email, password)}
                  >
                    Login
                  </Button>
                </div>
                <p className="text-center text-small">
                  Forgot Your password?{" "}
                  <Link size="sm" onPress={() => setSelected("sign-up")}>
                    Reset Password
                  </Link>
                </p>
              </form>
            </Tab>
            <Tab key="sign-up" title="Sign up">
              <form className="flex flex-col gap-4 h-[300px]">
                <Input
                  isRequired
                  label="Name"
                  placeholder="Enter your name"
                  type="text"
                />
                <Input
                  isRequired
                  label="Email"
                  placeholder="Enter your email"
                  type="email"
                />
                <Input
                  isRequired
                  label="Password"
                  placeholder="Enter your password"
                  type="password"
                />
                <p className="text-center text-small">
                  Already have an account?{" "}
                  <Link size="sm" onPress={() => setSelected("login")}>
                    Login
                  </Link>
                </p>
                <div className="flex gap-2 justify-end">
                  <Button fullWidth color="primary" >
                    Sign up
                  </Button>
                </div>
              </form>
            </Tab>
          </Tabs>
        </CardBody>

        <CardFooter className="flex flex-col justify-items-center">
          <p>Build by Nxweb &#10084;</p>
        </CardFooter>
      </Card>
    </div>
  );
};
