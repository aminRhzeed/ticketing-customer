import { useState, useEffect } from 'react'
import { toast } from 'react-toastify'
import { Link, useNavigate } from 'react-router-dom'
import Landscape from '../assets/images/aron-visuals.jpg'
import { ReactComponent as Logo } from '../assets/images/logo.svg'
import { FaEnvelope, FaKey } from 'react-icons/fa6'
import { useSelector, useDispatch } from 'react-redux'
import { login, reset } from '../features/auth/authSlice.js'
import Spinner from '../component/Spinner.jsx'

function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const {email, password} = formData

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


    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault()
        const userData = {
            email,
            password
        }
        dispatch(login(userData))
    }

    if(isLoading) {
        return <Spinner />
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
                        <p className='text-2xl font-medium mb-2'>Hello Again!</p>
                        <p className='font-light'>Welcome Back You Have Been Missed!</p>
                    </section>
                    <section className='py-10'>
                        <form onSubmit={onSubmit} className='flex flex-col gap-y-4'>
                            <div className='input input-md input-bordered flex items-center gap-2'>
                                <FaEnvelope className='h-3.5 w-3.5 opacity-70'/>
                                <input type='email' className='grow' id='email' name='email' value={email} onChange={onChange} placeholder='Email' required/>
                            </div>
                            <div className='input input-md input-bordered flex items-center gap-2'>
                                <FaKey className='h-3.5 w-3.5 opacity-70'/>
                                <input type='password' className='grow' id='password' name='password' value={password} onChange={onChange} placeholder='Password' required/>
                            </div>
                            <div className='pt-8'>
                                <button className='btn btn-primary btn-block'>Submit</button>
                            </div>
                            <div>
                                <p className='text-sm text-center font-light'>Don't You Have an Account? <Link to='/register' className='font-medium text-primary'>Register</Link></p>
                            </div>
                        </form>
                    </section>

                </div>
            </div>
            <div className='hidden md:flex md:flex-1'>
                <img src={Landscape} className='object-cover object-center w-full h-full' alt='mountain near green trees at night'/>
            </div>
        </section>
    )
}

export default Login