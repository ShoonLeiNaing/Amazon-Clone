import React,{useState} from 'react'
import './Login.css'
import {Link} from 'react-router-dom'

function Login() {
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    const signIn =(e)=>{
        e.preventDefault()
    }
    const register =(e)=>{
        e.preventDefault()
    }
    return (
        <div className='login'>
            <Link to='/'>
            <img className='login__logo' src="http://pngimg.com/uploads/amazon/amazon_PNG6.png"/>
            </Link>

            <div className='login__container'>
                <h1>Sign-In</h1>
                <form className='login__form'>
                    <h5>Email</h5>
                    <input type='text' value={email} onChange={(e)=>setEmail(e.target.value)} />
                    <h5>Password</h5>
                    <input type='password' value={password} onChange={(e)=>setPassword(e.target.value)} />
                    <button type='submit' onClick={signIn} className='login__signInButton'>Sign in</button>

                </form>
                <p>
                By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.
                </p>
                <button type='submit' onClick={register} className='login__registerButton'>Create your Amazon Account</button>
            </div>

        </div>
    )
}

export default Login
