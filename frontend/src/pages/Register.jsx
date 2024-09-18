import { useState, useEffect } from 'react'
import { toast } from 'react-toastify'
import { Link, useNavigate } from 'react-router-dom'
import Landscape from '../assets/images/aron-visuals.jpg'
import { ReactComponent as Logo } from '../assets/images/logo.svg'
import { FaUser, FaEnvelope, FaKey, FaCheck, FaXmark } from 'react-icons/fa6'
import { useSelector, useDispatch } from 'react-redux'
import { register, reset } from '../features/auth/authSlice.js'

function Register() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        retryPass: ''
    })
    const [passwordValidation, setPasswordValidation] = useState({
        length: false,
        // uppercase: false,
        // lowercase: false,
        number: false,
        // specialChar: false,
    });

    const {name, email, password, retryPass} = formData

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { user, isLoading, isError, isSuccess, message } = useSelector((state) => state.auth)

    useEffect(() => {
        if(isError) {
            toast.error(message)
        }
        if(isSuccess || user) {
            navigate('/')
        }
        dispatch(reset())
    }, [isError, isSuccess, user, message, navigate, dispatch])

    const validatePassword = (password) => {
        const length = password.length >= 8
        // const uppercase = /[A-Z]/.test(password)
        // const lowercase = /[a-z]/.test(password)
        const number = /\d/.test(password)
        // const specialChar = /[!@#$%^&*(),.?':{}|<>]/.test(password);

        setPasswordValidation({
            length,
            // uppercase,
            // lowercase,
            number,
            // specialChar,
        });
    };

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
        if (e.target.name === 'password') {
            validatePassword(e.target.value) // Validate the password as the user types
        }
    }

    const onSubmit = (e) => {
        e.preventDefault()
        if(password !== retryPass) {
            toast.error('Passwords Do Not Match')
        } else {
            const allValidationsPassed = Object.values(passwordValidation).every(Boolean);
            if (!allValidationsPassed) {
                toast.error('Password does not meet the required criteria');
            } else {
                // toast.success('Account created successfully');
                // Submit the form (e.g., via an API call)
                const userData = {
                    name,
                    email,
                    password
                }
                dispatch(register(userData))
            }
        }
    }
    
    return (
        <section className='flex flex-1 overflow-hidden'>
            <div className='flex flex-1 md:flex-none items-center justify-center lg:px-24 md:px-12'>
                <div className='lg:w-80'>
                    <section>
                        <Link to='/' className='flex items-center gap-2 mb-8'>
                            <Logo className='h-8 w-auto' />
                            <span className='text-2xl font-light text-amber-400'>TAGLINE</span>
                        </Link>
                        <p className='text-2xl font-medium mb-2'>Get Started</p>
                        <p className='font-light'>Welcome to Tagline, Let's Create Your Account</p>
                    </section>
                    <section className='py-10'>
                        <form onSubmit={onSubmit} className='flex flex-col gap-y-4'>
                            <div className='input input-md input-bordered flex items-center gap-2'>
                                <FaUser className='h-3.5 w-3.5 opacity-70'/>
                                <input type='text' className='grow' id='name' name='name' value={name}
                                       onChange={onChange} placeholder='Username' required/>
                            </div>
                            <div className='input input-md input-bordered flex items-center gap-2'>
                                <FaEnvelope className='h-3.5 w-3.5 opacity-70'/>
                                <input type='email' className='grow' id='email' name='email' value={email}
                                       onChange={onChange} placeholder='Email' required/>
                            </div>
                            <div className='input input-md input-bordered flex items-center gap-2'>
                                <FaKey className='h-3.5 w-3.5 opacity-70'/>
                                <input type='password' className='grow' id='password' name='password' value={password}
                                       onChange={onChange} placeholder='Password' required/>
                            </div>
                            <div className='input input-md input-bordered flex items-center gap-2'>
                                <FaKey className='h-3.5 w-3.5 opacity-70'/>
                                <input type='password' className='grow' id='retryPass' name='retryPass'
                                       value={retryPass} onChange={onChange} placeholder='Retry Password' required/>
                            </div>
                            <ul className='text-sm font-light'>
                                <li className={`flex items-center gap-1 ${passwordValidation.length ? 'text-green-500' : ''}`}>
                                    {passwordValidation.length ? <FaCheck/> : <FaXmark/>} At least 8 characters
                                </li>
                                {/*<li className={`flex items-center gap-1 ${passwordValidation.uppercase ? 'text-green-500' : ''}`}>*/}
                                {/*    {passwordValidation.uppercase ? <FaCheck /> : <FaXmark />} At least one uppercase letter*/}
                                {/*</li>*/}
                                {/*<li className={`flex items-center gap-1 ${passwordValidation.lowercase ? 'text-green-500' : ''}`}>*/}
                                {/*    {passwordValidation.lowercase ? <FaCheck /> : <FaXmark />} At least one lowercase letter*/}
                                {/*</li>*/}
                                <li className={`flex items-center gap-1 ${passwordValidation.number ? 'text-green-500' : ''}`}>
                                    {passwordValidation.number ? <FaCheck/> : <FaXmark/>} At least one number
                                </li>
                                {/*<li className={`flex items-center gap-1 ${passwordValidation.specialChar ? 'text-green-500' : ''}`}>*/}
                                {/*    {passwordValidation.specialChar ? '✔' : '✘'} At least one special character*/}
                                {/*</li>*/}
                            </ul>
                            <div className='pt-8'>
                                <button className='btn btn-primary btn-block'>Submit</button>
                            </div>
                            <div>
                                <p className='text-sm text-center font-light'>Already Have an Account? <Link to='/Login' className='font-medium text-primary'>Login</Link>
                                </p>
                            </div>
                        </form>
                    </section>

                </div>
            </div>
            <div className='hidden md:flex md:flex-1'>
                <img src={Landscape} className='object-cover object-center w-full h-full'
                     alt='mountain near green trees at night'/>
            </div>
        </section>
    )
}

export default Register