import React, { useRef } from 'react'
import { useState } from 'react';
import { FaRegQuestionCircle } from "react-icons/fa";
import audio1 from "../audio/1.mp3"
import audio2 from "../audio/2.mp3"
function Page1(props: any) {
    // const [helpTog, setHelpTog] = useState(false)
    const [selectedValue, setSelectedValue] = useState<string | null>(null);
    const handleChange = (value: string) => {
      setSelectedValue(value === selectedValue ? null : value);
    };
    

    const [stepper, setStepper] = useState(2);
    const handleButton = (e:any)=>{
          e.preventDefault();
          props.stepData(stepper)
    }
    // const help = ()=>{
    //     if(!helpTog){
    //         audio2Ref.current.play()
    //         setHelpTog(true)
    //     }
    //     else{
    //         audio1Ref.current.play()
    //         setHelpTog(false)
    //     }
    // }
    
    const audio1Ref = useRef<HTMLAudioElement>(null);
    const audio2Ref = useRef<HTMLAudioElement>(null);


  return (
    <div className='flex flex-col items-center text-sm my-4 mx-[5vw] '>
        <div>
            <h1 className='font-reck text-3xl mt-10'>Tell us a little more about yourself</h1>
            <p className='text-gray-500 my-10'>Your answers will help us build an experience to match your needs.</p>
        </div>
      <div className='flex flex-col gap-5 w-[40vw] ml-[9vw]'>
        <div className='flex flex-col w-full'>
            <label className=' ml-1 mb-1 font-semibold'>Do you currently run a online business ?</label> 
            <select className=' text-gray-500 border border-gray-500 px-1 py-2 rounded-md'>
                <option>No,just exploring!</option>
                <option>Yes,just started!</option>
                <option>Yes, been doing this for a while!</option>
            </select>
        </div>
        <div className='flex flex-col w-full'>
            <label className=' ml-1 mb-1 font-semibold'>I primarily identify as a:</label> 
            <select className=' text-gray-500 border border-gray-500 px-1 py-2 rounded-md'>
                <option>Freelancer or Consultant (project-based work).</option>
                <option>Partime Content Creator.</option>
                <option>Full-Time Sowftware Engineer.</option>
            </select>
        </div>
        <div className='flex flex-col w-full'>
            <label className=' ml-1 mb-1 font-semibold'>Are you already teaching or offering content online ?</label> 
            <select className=' text-gray-500 border border-gray-500 px-1 py-2 rounded-md'>
                <option>No,I'm just getting started sharing my knowledge.</option>
                <option>No,Not started ye.</option>
                <option>Yes, been doing this for a while!</option>
            </select>
        </div>
        <div className='flex flex-col w-full'>
            <label className=' ml-1 mb-1 font-semibold'>How big is your current audience (email list, social media followers, subscirbers, etc.) ?</label> 
            <select className=' text-gray-500 border border-gray-500 px-1 py-2 rounded-md'>
                <option>1-1,000 people</option>
                <option>1,000-5,000</option>
                <option>5,000-10,000</option>
            </select>
        </div>
        <div className='flex flex-col w-full'>
            <label className=' ml-1 mb-1'>Which topic is most relevant to your business or content?</label> 
            <select className=' text-gray-500 border border-gray-500 px-1 py-2 rounded-md'>
                <option>Photo & Video</option>
                <option>Coding</option>
                <option>Teaching</option>
            </select>
        </div>
        <div className='flex flex-col w-full'>
            <label className=' ml-1 mb-1 leading-1 font-semibold'>Approximately how much money do you make chargin for yourknowledge today
            (in courses, consulting, books, speaking, etc.)? We ask this so that we can provide you with relevant resources for the size and stage of your business.</label> 
            <select className=' text-gray-500 border border-gray-500 px-1 py-2 rounded-md'>
                <option>No,just exploring!</option>
                <option>Yes,just started!</option>
                <option>Yes, been doing this for a while!</option>
            </select>
        </div>
        <div className='flex flex-col gap-3'>
         <h1 className=' ml-1 mb-1 leading-1 font-semibold'>What are you hoping to do first on Teachable? (Select up to 3 to get started as quickly as possible)</h1>   
        <label className=' flex items-center gap-2 text-gray-500'>
            <input
            type="checkbox"
            value="option1"
            checked={selectedValue === 'option1'}
            onChange={() => handleChange('option1')}
            className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
            />
            Create an online course
        </label>
        <label className=' flex items-center gap-2 text-gray-500'>
            <input
            type="checkbox"
            value="option2"
            checked={selectedValue === 'option2'}
            onChange={() => handleChange('option2')}
            className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
            />
            Create a coaching program
        </label>
        <label className=' flex items-center gap-2 text-gray-500'>
            <input
            type="checkbox"
            value="option3"
            checked={selectedValue === 'option3'}
            onChange={() => handleChange('option3')}
            className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
            />
            Create a digital download (ebook, article, template, worksheet, etc.)
        </label>
        <label className=' flex items-center gap-2 text-gray-500'>
            <input
            type="checkbox"
            value="option4"
            checked={selectedValue === 'option4'}
            onChange={() => handleChange('option4')}
            className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
            />
            Create a community or forum
        </label>
        <label className=' flex items-center gap-2 text-gray-500'>
            <input
            type="checkbox"
            value="option5"
            checked={selectedValue === 'option5'}
            onChange={() => handleChange('option5')}
            className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
            />
            Create a pre-sell
        </label>
        <label className=' flex items-center gap-2 text-gray-500'>
            <input
            type="checkbox"
            value="option6"
            checked={selectedValue === 'option6'}
            onChange={() => handleChange('option6')}
            className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
            />
            I'm not sure yet
        </label>

        <label className=' flex items-center gap-2 text-gray-500'>
            <input
            type="checkbox"
            value="option7"
            checked={selectedValue === 'option7'}
            onChange={() => handleChange('option7')}
            className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
            />
            Something else (please tell us more)
        </label>
    </div>
    <div className='flex flex-col w-full'>
            <label className=' ml-1 mb-1'>How much content or training material (videos, worksheets, downloads, etc.) have you already prepared?</label> 
            <select className=' text-gray-500 border border-gray-500 px-1 py-2 rounded-md'>
                <option>None - I'm just getting started</option>
                <option>Beginner - I'm know the beginner stuffs</option>
                <option>Intermediate - I'm know the stuffs pretty well</option>
            </select>
        </div>
      </div>
      <div className='mt-10 flex justify-end'>
        <button className=' px-[2vw] py-[1vh] border border-black rounded-md ml-[43vw]'>Next</button>
      </div>
      <div className='absolute right-1 top-[50%]'>
        <button className=' px-[2vw] py-[1vh] border border-black rounded-md gap-2 flex items-center justify-center bg-black shadow-xl text-white'><FaRegQuestionCircle/>Help</button>
        <audio ref={audio1Ref} src={audio1}/>
	    <audio ref={audio2Ref} src={audio2}/>
      </div>
    </div>
  )
}

export default Page1
