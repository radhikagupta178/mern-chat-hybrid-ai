import { useState, React } from 'react'
import GenderCheckbox from './GenderCheckbox';
import { Link } from 'react-router-dom'
import useSignup from '../../../hooks/useSignup';

function SignUp() {
    const [inputs, setInputs] = useState({
        fullName: '',
        username: '',
        password: '',
        confirmPassword: '',
        gender: ''
    });
    const { loading, signup } = useSignup();
    const handleCheckboxChange = (gender) => {
        setInputs({ ...inputs, gender });
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        await signup(inputs);
    }
    const myStyle = {
        backgroundColor: "#2852c1",
        border: "9px",
        borderRadius: "4px",
        padding: "revert"
    }
    return (
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto'
            style={{ backgroundImage: "radial-gradient(circle, #808 0%, #00d4ff 100%)" }}>
            <div className='w-full -6 rounded-lg shadow-md bg-gray-400 bg-clip padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
                <h1 className='text-3xl font-semibold text-center text-gray-300'>
                    Sign Up <span className='text-violet-950'>NexChat</span>
                </h1>
            </div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label className='label p-2'>
                        <span className="text-base label-text text-violet-950">Full Name</span>
                    </label>
                    <input type="text" style={myStyle} placeholder="Enter name" className="input input-bordered w-full max-w-xs" value={inputs.fullName} onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}></input>
                </div>
                <div>
                    <label className='label p-2'>
                        <span className="text-base label-text text-violet-950">Username</span>
                    </label>
                    <input type="text" style={myStyle} placeholder="Enter username" value={inputs.username} onChange={(e) => setInputs({ ...inputs, username: e.target.value })} className="input input-bordered w-full max-w-xs"></input>
                </div>
                <div>
                    <label className='label p-2'>
                        <span className="text-base label-text text-violet-950">Password</span>
                    </label>
                    <input type="password" style={myStyle} placeholder="Password" value={inputs.password} onChange={(e) => setInputs({ ...inputs, password: e.target.value })} className="w-full input input-bordered h-10"></input>
                </div>
                <div>
                    <label className='label p-2'>
                        <span className="text-base label-text text-violet-950">Confirm Password</span>
                    </label>
                    <input type="password" style={myStyle} placeholder="Confirm Password" value={inputs.confirmPassword} onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })} className="w-full input input-bordered h-10"></input>
                </div>
                <GenderCheckbox onCheckboxChange={handleCheckboxChange} selectedGender={inputs.gender} />
                <Link style={{ color: "azure" }} to='../login' className='text-sm hover:underline hover: text-blue-600 mt-2 inline-block'>
                    Already have an account?
                </Link>
                <div>
                    <button className='btn btn-block btn-sm mt-2' disabled={loading}>
                        {loading ? <span className="loading loading-spinner"></span> : "Sign Up"}
                    </button>
                </div>
            </form >
        </div >
    )
}

export default SignUp