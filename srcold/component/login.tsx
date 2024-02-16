import React, { Component } from 'react';
import "./login.css";
import nxwebLogo from "../assets/NxwebLogo1.png";
import { FrappeApp } from 'frappe-js-sdk';
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/react";
import { EyeFilledIcon } from "./EyeFilledIcon";
import { EyeSlashFilledIcon } from "./EyeSlashFilledIcon";

const frappe = new FrappeApp();
const auth = frappe.auth();

class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      isVisible: false, // Add isVisible state for password visibility
    }
  }

  setEmptyValue = (event) => {
    const name = event.target.name
    document.getElementById(name).value = "";
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const { username, password } = this.state;

    auth
      .loginWithUsernamePassword({ username, password })
      .then((response) => {
        console.log(response);
        // Handle successful login, e.g., redirect to another page
      })
      .catch((error) => {
        console.error(error);
        // Handle login failure, e.g., display an error message
      });
  }

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  toggleVisibility = () => {
    this.setState((prevState) => ({
      isVisible: !prevState.isVisible,
    }));
  }

  render() {
    const { isVisible } = this.state;

    return (
      <main className="light text-foreground bg-background">
        <div className="login">
          <h1 className='appTitle'>MEETUP</h1>
          <center><img src={nxwebLogo} className='loginLogo' alt="React Logo" /></center>
          <form>
            <div className="flex w-full flex-wrap items-end md:flex-nowrap mb-6 md:mb-0 gap-4">
              <Input
                key="outside"
                id="username"
                name="username"
                type="email"
                value={this.state.username} // Fix state reference
                onChange={this.handleInputChange}
                label="User Name"
                labelPlacement="outside"
              />
            </div>

            <div className="flex w-full flex-wrap items-end md:flex-nowrap mb-6 md:mb-0 gap-4">
              <Input
                key="outside"
                id='password'
                name='password'
                label="Password"
                labelPlacement="outside"
                value={this.state.password} // Fix state reference
                onChange={this.handleInputChange}
                endContent={
                  <button className="focus:outline-none" type="button" onClick={this.toggleVisibility}>
                    {isVisible ? (
                      <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                    ) : (
                      <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                    )}
                  </button>
                }
                type={isVisible ? "text" : "password"}
              />
            </div>

            <center><Button className="btn" type="submit" onClick={this.handleSubmit}>LOGIN</Button></center>
          </form>
        </div>
      </main>
    )
  }
}

export default Signin;
