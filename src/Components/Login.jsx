import React, { useState } from 'react'
import headerPic from '../Assets/imgs/header-pic.jpg'
import logo from '../Assets/imgs/logo (2).png'
import { useForm } from 'react-hook-form'
import { getAuth, createUserWithEmailAndPassword , signInWithEmailAndPassword ,updateProfile } from 'firebase/auth'
import { Link, useNavigate } from 'react-router-dom'
import app from '../../firebase'
import { useDispatch } from 'react-redux'
import { login } from '../Redux/Auth'


export const SignIn = () => {

    const { register, handleSubmit, watch } = useForm()
    const [islearnOpen , setIslearnOpen] = useState(false) 
   const navigate = useNavigate()
  //  const dispatch = useDispatch()


    const login = async (data) => {
        const auth = getAuth(app)
        const userCredentials =  await signInWithEmailAndPassword(auth, data.email, data.password)
        const user = userCredentials.user;
      

        if (user) {
          user.getIdToken()
            .then((idToken) => {
                localStorage.setItem('token', idToken);
                navigate('/browse') 
             
            })
            .catch((error) => {
              console.error('Error getting ID token:', error);
            });
        } 
    }

    return (
<section className="relative z-0 min-h-[100vh] bg-black border border-b-[#5a5a5a] sm:border-none ">
  <div className="absolute inset-0 w-full h-full bg-cover opacity-50 -z-10">
    <img className="w-full h-full object-cover" src={headerPic} alt="" />
  </div>

  <header className="overflow-hidden m-auto bg-black sm:bg-transparent sm:w-full">
    <img
      src={logo}
      alt=""
      className="h-16 ml-2 sm:ml-5 sm:h-[60px] mdl:h-24 xl:h-[6.2rem]"
    />
  </header>

  <div className="pb-20 flex h-screen justify-center sm:items-center">
    <div className=" w-full min-h-[100vh] sm:min-h-[707px] sm:max-w-[450px] text-white bg-black sm:bg-[rgba(0,0,0,0.7)] sm:m-auto sm:px-[68px] sm:py-[40px]">
      
      <form onSubmit={handleSubmit(login)}>
        <h1 className="text-3xl font-bold ml-5 mb-7 sm:ml-0">Sign In</h1>
        <div className="flex flex-col gap-3">
          <input
            type="text"
            className="w-[90vw] m-auto p-4 rounded-md bg-[#0f0f0f] border-[#5e5e5e] border outline-none sm:w-full"
            placeholder="Email or mobile number"
            {...register("email", {
              required: true,
              validate: {
                matchPattern: (val) =>
                  /([\w\.\-_]+)?\w+@[\w-_]+(\.\w+){1,}/i.test(val) ||
                  "Please type valid email",
              },
            })}
          />

          <input
            type="password"
            className="w-[90vw] m-auto p-4 rounded-md bg-[#0f0f0f] border-[#5e5e5e] border outline-none sm:w-full"
            placeholder="Password"
            {...register("password", {
              required: true,
            })}
          />
          <button
            className="bg-[#e50914] w-[90vw] m-auto p-2 rounded-md sm:w-full"
            type="submit"
          >
            Sign In
          </button>
          <p className="text-center">Forgot password?</p>
        </div>
        <div className="flex items-center gap-2 ml-5 mt-10 sm:ml-0">
          <input
            type="checkbox"
            className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
          />
          <p>Remember me</p>
        </div>

        <div className="text-left ml-5 mt-3 sm:ml-0">
          <p className="text-[#b3b3b3]">
            New to Netflix?{" "}
            <span className="text-white hover:underline">
              <Link to="/signup">Sign up now.</Link>
            </span>
          </p>
          <p className="text-sm pr-3 mt-5 text-[#8c8c8c]">
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot.{" "}
          {!islearnOpen ?<span className="text-[#0071eb] cursor-pointer" onClick={()=>setIslearnOpen(!islearnOpen)} >Learn more.</span>  : null}  
          </p>
         {
            islearnOpen ? <p className="text-sm pr-3 mt-5 text-[#8c8c8c]" >
          The information collected by Google reCAPTCHA is subject to the Google <span className='text-[#0071eb] cursor-pointer'>Privacy Policy</span>  and <span className='text-[#0071eb] cursor-pointer'> Terms of Service</span>, and is used for providing, maintaining, and improving the reCAPTCHA service and for general security purposes (it is not used for personalized advertising by Google).
          </p> : null
         }
        </div>
      </form>

    </div>
  </div>
</section>

      

    )
}



export const SignUp = () => {
    const [islearnOpen , setIslearnOpen] = useState(false)
    const { register, handleSubmit } = useForm()
    const dispatch = useDispatch();
    const navigate= useNavigate()

    const signUp = async (data ,event) => {
      event.preventDefault()
    
     const auth = getAuth()
     const userData = await   createUserWithEmailAndPassword(auth, data.email, data.password)
     const user = userData.user

    await updateProfile( user , {
        displayName: data.name
     })



     if (user) {
        user.getIdToken()
          .then((idToken) => {
              localStorage.setItem('token', idToken);
              localStorage.setItem('userName', data.name)
              dispatch(login({
                user:{
                 email: data.email, name: data.name 
                }
                 
            }));
            navigate('/browse')
          })
          .catch((error) => {
            console.error('Error getting ID token:', error);
          });


  

    } else {
      console.log('No user is signed in.');
    }
 
   
    

    }



    return (
        <section className='bg-[rgb(0,0,0)]  relative z-0 border border-b-[#5a5a5a] sm:border-none'>
        <div className='absolute inset-0 w-full h-full bg-cover opacity-50 -z-10'>
          <img className='w-full h-full object-cover' src={headerPic} alt="" />
        </div>
        <header className='bg-black sm:bg-transparent sm:w-[100%] m-auto overflow-hidden'>
          <img src={logo} alt="" className="h-16 ml-2 sm:ml-5 sm:h-[60px] mdl:h-24 xl:h-[6.2rem]" />
        </header>
      
        <div className='pb-20 h-screen flex justify-center'>
          <div className='bg-black  min-h-[100vh] w-[100%] text-white pt-3 sm:w-[450px] sm:min-h-[707px] sm:bg-[rgba(0,0,0,0.7)] sm:m-auto sm:px-[68px] sm:py-[40px]'>
            <form onSubmit={handleSubmit(signUp)} >
              <h1 className='text-3xl font-bold ml-5 mb-7 sm:ml-0'>Sign Up</h1>
              <div className='flex flex-col gap-3'>
                <input type="text"
                  className='w-[90vw] m-auto p-4 rounded-md bg-[#0f0f0f] border-[#5e5e5e] border outline-none sm:w-full'
                  placeholder='Display Name'
                  {...register('name', {
                    required: true
                  })}
                />
      
                <input type="text"
                  className='w-[90vw] m-auto p-4 rounded-md bg-[#0f0f0f] border-[#5e5e5e] border outline-none sm:w-full'
                  placeholder='Email or mobile number'
                  {...register('email', {
                    required: true,
                    validate: {
                      matchPattern: (val) => /([\w\.\-_]+)?\w+@[\w-_]+(\.\w+){1,}/igm.test(val) || 'Please type valid email'
                    }
                  })}
                />
      
                <input type="text"
                  className='w-[90vw] m-auto p-4 rounded-md bg-[#0f0f0f] border-[#5e5e5e] border outline-none sm:w-full'
                  placeholder='Password'
                  {...register('password', {
                    required: true
                  })}
                />
                <button
                  className='bg-[#e50914] w-[90vw] m-auto p-2 rounded-md sm:w-full'
                  type='submit'
                >Sign Up</button>
                <p className='text-center'>Forgot password?</p>
              </div>
              <div className='flex gap-2 items-center ml-5 mt-10 sm:ml-0'>
                <input type="checkbox" className='w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2' />
                <p>Remember me</p>
              </div>
      
              <div className='text-left ml-5 mt-3 sm:ml-0'>
                <p className='text-[#b3b3b3]'>Already have an account? <span className='text-white hover:underline '><Link to='/signIn'>Sign In</Link></span></p>
                <p className="text-sm pr-3 mt-5 text-[#8c8c8c]">
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot.{" "}
          {!islearnOpen ?<span className="text-[#0071eb] cursor-pointer" onClick={()=>setIslearnOpen(!islearnOpen)} >Learn more.</span>  : null}  
          </p>
         {
            islearnOpen ? <p className="text-sm pr-3 mt-5 text-[#8c8c8c]" >
          The information collected by Google reCAPTCHA is subject to the Google <span className='text-[#0071eb] cursor-pointer'>Privacy Policy</span>  and <span className='text-[#0071eb] cursor-pointer'> Terms of Service</span>, and is used for providing, maintaining, and improving the reCAPTCHA service and for general security purposes (it is not used for personalized advertising by Google).
          </p> : null
         }
              </div>
            </form>
          </div>
        </div>
      </section>
      

    )
}

