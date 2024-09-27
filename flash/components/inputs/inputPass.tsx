import React from 'react'
import { Input } from '../ui/input'
Input
type inputType = "password"|"text"
const InputPass = ({type}:{type:inputType}) => {
  return (
   <>
    <Input type={type}/>
   </>
  )
}

export default InputPass
