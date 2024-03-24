import React, { useState } from 'react';
import './login.css';
import { Link } from 'react-router-dom';

function login() {

  const [values, setValues] = useState({
    emailid: '',

    password: '',

  });


  const inputChange = (i) => {
    const { key, value } = i.target;
    setValues((previousValues) => ({
      ...previousValues,
      [key]: value,
    }));

    setIsButtonDisabled(values.password === '' || value === '');
  };


  const loginProcess = () => {

    console.log('EmailId:- ', values.emailid);
    console.log('Password:- ', values.password);

  };

  return (

    <div>
      <div className="containermain">
        <div className="screen">

          <div className="content">
            <img src='./imgs/logo1.png' className='logo' alt="Logo" />
          </div>

          <div>
            <div className="container">
              <div className="login">
                <label className="form-label llables">User Email Id</label>
                <input
                  type="email"
                  className="form-control"
                  id="emailid"
                  placeholder="Enter email id"
                  name="emailid"
                  value={values.emailid}
                  onChange={inputChange}

                />

                <div>
                  <label className="form-label llables"> Password </label>
                  
                  <input
                    type="password"
                    id="password"
                    placeholder="Enter your password"
                    name="password"
                    value={formValues.password}
                    onChange={inputChange}
                  
                  />

                </div>
                <Link to='/search'>
                  
                  <button
                    type="button"
                    className={`btn login-button ${isButtonDisabled && 'login-button-disabled'}`}
                    onClick={loginProcess}
                  >
                    LogIn
                  </button>

                </Link>
                
              </div>

              <div className="signup-user">
                Already have an account ?
                <span className="user-text">LogIn</span>
              </div>

            </div>
         
          </div>

     
        </div>
      </div>
    </div>
  );
}
export default login;