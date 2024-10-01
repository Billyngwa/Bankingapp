Input
import React from 'react'
import { FormField, FormLabel, FormControl, FormMessage } from '../ui/form'
import { Input } from '../ui/input'
import { Control, FieldPath } from 'react-hook-form'
import { z } from 'zod'
import { formSchema } from '@/lib/utils'

const validationSchema = formSchema("sign-up")
//A custom input for the form with zod validator library
interface InputInterface {
    name:FieldPath<z.infer<typeof validationSchema>>, //this is a simple source of truth for better error management
    label:string,
    placeholder:string,
    control:Control<z.infer<typeof validationSchema>>,
}

const CustomInput = ({control,name,label,placeholder}:InputInterface) => {
  return (
    <FormField
    control={control}
    name={name}
    render={({ field }) => (
      <div>
        <FormLabel className="py-8 mb-5 form-label">{label}</FormLabel>
        <div>
          <FormControl>
            <Input {...field} placeholder={placeholder} type={name==="email"?"email":name==="password"?"password":"text"}/>
          </FormControl>
          <FormMessage/>
        </div>
      </div>
    )}
  />
  )
}

export default CustomInput
