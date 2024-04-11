import React, { useState, useEffect, useRef } from 'react'
import { any, z, ZodType} from "zod";
import { useForm } from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod'
function SIgnUp(props: any) {
    const[checkVal,setCheckVal] = useState(false);
    type FormData = { //type of FormData 
        fullName: string,
        email: string,
        password: string,
        confirmPassword: string
      }
    
      const schema: ZodType<FormData> = z.object({ //Standardizing with typescript
        fullName: z.string().min(2).max(60),
        email : z.string().email(),
        password: z.string().min(5).max(20),
        confirmPassword: z.string().min(5).max(20)
      }).refine((data)=> data.password === data.confirmPassword ,{  //refinement func from library like Yup or Joyi
        message: "Passwords donot match",  //error message if validation returns false
        path: ["confirmPassword"] //path for the error message
      })
    
      const {register, handleSubmit, 
        formState:{errors}
      } = useForm<FormData>({resolver: zodResolver(schema)});
      const submitData = (data: FormData) =>{
        console.log("IT WORKED", data)
      }
      
      const checkbox = ()=>{
        if(checkVal === false){
          setCheckVal(true)
        }
        else{
          setCheckVal(false)
        }
      }

      const [stepper, setStepper] = useState(1);
      const handleButton = (e:any)=>{
            e.preventDefault();
            if(Object.keys(errors).length > 0) {
              props.stepData(stepper)
            }
            
      }
      const formRef = useRef<HTMLFormElement>(null);


      return (
        <div className=' my-4 mx-[10vw]'>
          <div className='flex items-center justify-center border-b-2 border-gray-600 py-[2vh]'>
          <img src="https://assets-global.website-files.com/65393b768d06ee4c16d24a0b/65393dc01f9388d10c80d6bd_teachable-logo-dark.svg" alt="Teachable Logo - Dark" width={125}/>
          </div>
          <div>
              <div className=' flex flex-col items-center mt-10 '>
                <h1 className='text-3xl mb-10 font-reck'>Get Started With Teachable</h1>
                <p className=' text-gray-500'>Join more than 100,000 creators who've sold over <span className=' text-black font-bold'>$1 billion</span> courses and coaching.</p>
              </div>
              <form ref={formRef} className='flex flex-col items-center mt-10 relative gap-5' onSubmit={handleSubmit(submitData)}>
                <div className='flex flex-col w-[20vw]'>
                <label htmlFor="fullname" className=' text-gray-500 text-sm ml-1'>Full Name</label>
                <input type="text" className={`border ${errors.fullName? "border-red-600":"border-gray-300"} rounded-md h-[5vh] pl-2`} {...register("fullName")}/>
                {errors.fullName && <span className=' text-red-600 text-sm ml-1' >{errors.fullName.message}</span>}
                </div>
                <div className='flex flex-col w-[20vw]'>
                <label htmlFor="email" className=' text-gray-500 text-sm ml-1'>Email Address</label>
                <input type="email" className={`border ${errors.email? "border-red-600":"border-gray-300"} rounded-md h-[5vh] pl-2`} {...register("email")}/>
                {errors.email && <span className=' text-red-600 text-sm ml-1'>{errors.email.message}</span>}
                </div>
                <div className='flex flex-col w-[20vw]'>
                <label htmlFor="email" className=' text-gray-500 text-sm ml-1'>Password</label>
                <input type="password" className={`border ${errors.password? "border-red-600":"border-gray-300"} rounded-md h-[5vh] pl-2`} {...register("password")}/>
                {errors.password && <span className=' text-red-600 text-sm ml-1'>{errors.password.message}</span>}
                </div>
                <div className='flex flex-col w-[20vw]'>
                <label htmlFor="email" className=' text-gray-500 text-sm ml-1'>Confirm Password</label>
                <input type="password" className={`border ${errors.confirmPassword? "border-red-600":"border-gray-300"} rounded-md h-[5vh] pl-2`} {...register("confirmPassword")}/>
                {errors.confirmPassword && <span className=' text-red-600 text-sm ml-1'>{errors.confirmPassword.message}</span>}
                </div>
                <div className='flex items-center justify-center gap-4'>
                <input id="link-checkbox" type="checkbox" onClick={checkbox} value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                <p className=' text-gray-500'>I agree to the <span className=' text-black underline cursor-pointer'>Terms of Use</span> and <span className=' text-black underline cursor-pointer' >Privacy Policy.</span></p>
                </div>
                {!checkVal && <p className=' text-red-600 text-sm'>Please agree to the terms and conditions.</p>}
                <button type="submit" disabled={Object.keys(errors).length > 0 || !checkVal} className=' bg-black text-white px-[2.5vw] py-[1vh] flex items-center justify-center rounded-md disabled:bg-gray-400 my-3 shadow-xl' >Create Account</button>
                <div className=' font-medium'><p>Already have an account? <span className=' capitalize underline cursor-pointer'>log in</span></p></div>
              </form>
         </div>
        </div>
      )
    }

export default SIgnUp
