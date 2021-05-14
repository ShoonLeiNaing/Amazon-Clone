import React from 'react'
import './Login.css'
import {Link} from 'react-router-dom'

function Login() {
    return (
        <div className='login'>
            <Link to='/'>
            <img className='login__logo' src="http://pngimg.com/uploads/amazon/amazon_PNG6.png"/>
            </Link>

            <div className='login__container'>
                <h1>Sign-In</h1>
                <form className='login__form'>
                    <h5>Email</h5>
                    <input type='text' />
                    <h5>Password</h5>
                    <input type='password' />
                    <button>Sign in</button>

                </form>
                <p>
                By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.
                </p>
                <button>Create your Amazon Account</button>
            </div>

        </div>
    )
}

export default Login