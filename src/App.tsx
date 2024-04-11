
import { useState } from 'react'
import './App.css'
import Page1 from './components/Page1'
import SIgnUp from './components/SIgnUp'



function App() {
    const [stepData, setStepData] = useState(null);
  const handlestepperData = (data: any)=>{
      setStepData(data);
      console.log(stepData)
  } 
  return (
    <div>
      {stepData === 1 ? (<Page1 stepData={handlestepperData}/>):
      <SIgnUp stepData={handlestepperData}/> }
    </div>

  )
}

export default App
