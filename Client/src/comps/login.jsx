import React, { useRef, useState } from 'react';
import { register, login } from '../utils/apiRoutes'
import { useNavigate } from 'react-router-dom';
import authService from '../utils/auth'
import Koseg from '../assets/koenigsegg.svg'
function Login(){
    const navigate = useNavigate()
    const [toggleRegister, setToggleRegister] = useState("login")
    const [userFormData, setUserFormData] = useState({ email: '', name: '', password: '' });
             if(authService.loggedIn()){
                navigate(`/`);
            }
            const handleInputChange = (event) => {
                const { name, value } = event.target;
                setUserFormData({ ...userFormData, [name]: value });
            };
         const handleSubmit = async (event) => {
                event.preventDefault()

            try {
                let response;
                if(toggleRegister === 'register'){
                    response = await register(userFormData);
                } else {
                    response = await login(userFormData);
                }

              if (!response.ok) {
                throw new Error('something went wrong!');
              }
        
              const { token, foundUser } = await response.json();
              authService.login(token);
            } catch (err) {
              console.error(err);
            }
            setUserFormData({
                name: '',
                email: '',
                password: '',
              });
          };
        const setToggle = function(e){
            const { name } = e.target
            e.preventDefault()
            setToggleRegister(name)
        }

    return(
        <div className='login-container'>
            <div className='login-flex-container'>
                <div className='login-header-container'>
                    <div className='adCircles'>
                        <span className='c1'></span>
                        <span className='c2'></span>
                        <span className='c3'></span>
                        <span className='c4'></span>
                        <span className='c5'></span>
                    </div>
                    <div className='ad-text'>
                        <h3>Your New Car Rental Awaits</h3>
                        <p>Ease of doing a car rental safely and reliably. Your Information is secure and safe.</p>
                    </div>
                    <img src={Koseg} className='img-abs'></img>
                </div>
            <form className='input-form'>
                <div className='user-registration-div'>
                    <button 
                        className={toggleRegister === "login" ? "active": null} 
                        name="login"
                        onClick={(e) => {setToggle(e)}}>SIGN IN</button>
                    <button
                        className={toggleRegister === "register" ? "active": null} name='register' 
                        onClick={(e) => {setToggle(e)}}>SIGN UP</button>
                </div>
                <div className='input-div'>
                    {toggleRegister === "register"
                    ?<div className='input-parent-div'>
                        <label>NAME</label>
                        <input 
                        type="text" 
                        name='name'
                        onChange={handleInputChange}
                        value={userFormData.name}
                        />
                    </div>
                    :null
                }
                    <div className='input-parent-div'>
                        <label>EMAIL</label>
                        <input  
                        type="text" 
                        name='email'
                        onChange={handleInputChange}
                        value={userFormData.email}/>
                    </div>
                    <div className='input-parent-div'>
                        <label>PASSWORD</label>
                        <input 
                          type='password'
                          placeholder='Your password'
                          name='password'
                          onChange={handleInputChange}
                          value={userFormData.password}
                        />
                    </div>
                    {toggleRegister === "register"
                     ? <button 
                     className='submit-btn'
                     onClick={(e) => {handleSubmit(e)}}
                     disabled={!(userFormData.email && userFormData.password && userFormData.name)}
                     >Sign Up</button>
                     : <button 
                     className='submit-btn'
                     onClick={(e) => {handleSubmit(e)}}
                      disabled={!(userFormData.password && userFormData.email)}
                     >Sign In</button>
                      }
                   
                </div>
               
            </form>
            </div>
        </div>
    )
}

export default Login;