import { React, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import userLogin from '../../../hooks/useLogin';

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const { loading, login } = userLogin();
    const handleSubmit = async (e) => {
        e.preventDefault();
        await login(username, password);
    }
    const myStyle = {
        backgroundColor: "#2852c1",
        border: "9px",
        padding: "revert",
        borderRadius: "4px"

    }
    return (
        <div className="flex flex-col items-center justify-center min-w-96 mx-auto" style={{
            backgroundImage: "radial-gradient(circle, #808 0%, #00d4ff 100%)"
        }
        }>
            <h1 className='w-full -6 rounded-lg shadow-md bg-gray-400 bg-cli-adding backdrop-filter backdrop-blur-lg bg-opacity-0 text-2xl'>
                <span className="titleClass">NexChat</span>
            </h1>
            <form onSubmit={handleSubmit}>
                <div className='py-4'>
                    <label className='label p-2'>
                        <span className="labelClass">Username</span>
                    </label>
                    <input type="text" placeholder="Type Here"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="input input-bordered w-full max-w-xs"
                        style={myStyle}></input>
                </div>
                <div>
                    <label className='label p-2'>
                        <span className="labelClass">Password</span>
                    </label>
                    <input type="password" placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full input input-bordered h-10"
                        style={myStyle}></input>
                </div>
                <Link to='../signup' className='text-sm hover:underline hover: text-blue-600 mt-2 inline-block'
                    style={{ color: "azure" }}>
                    {"Don't"} have an account?
                </Link>
                <div>
                    <button className='btn btn-block btn-sm mt-2' disabled={loading}>{loading ? <span className="loading loading-spinner"></span> : "Login"}</button>
                </div>
            </form >
        </div >
    )
}

export default Login