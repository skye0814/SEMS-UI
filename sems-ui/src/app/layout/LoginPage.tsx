import React, { useEffect, useState } from 'react';
import "../../styles/login.css";

export default function LoginPage(){
    const [type, setType] = useState("signIn");
    const handleOnClick = (text: any) => {
        if (text !== type) {
        setType(text);
        return;
        }
    };
    const containerClass = "container " + (type === "signUp" ? "right-panel-active" : "");

    useEffect(()=>{
        // Change title
        document.title = document.title + " - Login";
        document.getElementById("navbar")!.style.visibility = 'hidden';
    }, []);



    return(
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <div className={containerClass} id="container" style={{position: 'absolute', top: '50%', transform: 'translateY(-50%)'}}>
                <SignUpForm />
                <SignInForm />
                <div className="overlay-container">
                <div className="overlay">
                    <div className="overlay-panel overlay-left">
                    <h1>Welcome Back!</h1>
                    <p>
                        To keep connected with us please login with your personal info
                    </p>
                    <button
                        className="button ghost"
                        id="signIn"
                        onClick={() => handleOnClick("signIn")}
                    >
                        Sign In
                    </button>
                    </div>
                    <div className="overlay-panel overlay-right">
                    <h1>Hello, Friend!</h1>
                    <p>Enter your personal details and start journey with us</p>
                    <button
                        className="button ghost "
                        id="signUp"
                        onClick={() => handleOnClick("signUp")}
                    >
                        Sign Up
                    </button>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
}


function SignInForm() {
    const [state, setState] = React.useState({
        email: "",
        password: ""
      });
      const handleChange = (evt: any) => {
        const value = evt.target.value;
        setState({
          ...state,
          [evt.target.name]: value
        });
      };
    
      const handleOnSubmit = (evt: any)  => {
        evt.preventDefault();
    
        const { email, password } = state;
        alert(`You are login with email: ${email} and password: ${password}`);
        
        for (const key in state) {
          setState({
            ...state,
            [key]: ""
          });
        }

        window.location.href = '/admin/events-manager';
      };

    return (
        <div className="form-container sign-in-container">
          <form onSubmit={handleOnSubmit}>
            <h1>Sign in</h1>
            <div className="social-container">
              <a href="#" className="social">
                <i className="fab fa-facebook-f" />
              </a>
              <a href="#" className="social">
                <i className="fab fa-google-plus-g" />
              </a>
              <a href="#" className="social">
                <i className="fab fa-linkedin-in" />
              </a>
            </div>
            <span>or use your account</span>
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={state.email}
              onChange={handleChange}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={state.password}
              onChange={handleChange}
            />
            <a href="#">Forgot your password?</a>
            <button className='button'>Sign In</button>
          </form>
        </div>
      );
}

function SignUpForm() {
    const [state, setState] = React.useState({
      name: "",
      email: "",
      password: ""
    });
    const handleChange = (evt: any) => {
      const value = evt.target.value;
      setState({
        ...state,
        [evt.target.name]: value
      });
    };
  
    const handleOnSubmit = (evt: any) => {
      evt.preventDefault();
  
      const { name, email, password } = state;
      alert(
        `You are sign up with name: ${name} email: ${email} and password: ${password}`
      );
  
      for (const key in state) {
        setState({
          ...state,
          [key]: ""
        });
      }
    };
  
    return (
      <div className="form-container sign-up-container">
        <form onSubmit={handleOnSubmit}>
          <h1>Create Account</h1>
          <div className="social-container">
            <a href="#" className="social">
              <i className="fab fa-facebook-f" />
            </a>
            <a href="#" className="social">
              <i className="fab fa-google-plus-g" />
            </a>
            <a href="#" className="social">
              <i className="fab fa-linkedin-in" />
            </a>
          </div>
          <span>or use your email for registration</span>
          <input
            type="text"
            name="name"
            value={state.name}
            onChange={handleChange}
            placeholder="Name"
          />
          <input
            type="email"
            name="email"
            value={state.email}
            onChange={handleChange}
            placeholder="Email"
          />
          <input
            type="password"
            name="password"
            value={state.password}
            onChange={handleChange}
            placeholder="Password"
          />
          <button className='button'>Sign Up</button>
        </form>
      </div>
    );
  }
