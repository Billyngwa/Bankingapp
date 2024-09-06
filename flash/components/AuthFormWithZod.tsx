import React from 'react'
import { Form, useForm } from 'react-hook-form'
import { FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from './ui/form'
import { TypeOf, z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from './ui/button'
import { Input } from './ui/input'

const formSchema =  z.object({
    userName: z.string().min(2,{message:"username must be atleast 2 chars"}),
    email: z.string(),
    password: z.string().min(4)

})

const AuthFormWithZod = () => {
  const form = useForm<any>({
    resolver:zodResolver(formSchema),
    mode:"onChange",
    defaultValues:{
      userName:"",
      password:"",
    }
  })
  const {register, control, handleSubmit} = form
    const onSubmit = (values:z.infer<typeof formSchema>) => {
  
    }
    
  return (
    <Form >
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
      <FormField
        control={control}
        name="userName"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Username</FormLabel>
            <FormControl>
              <Input placeholder="user name" {...field}/>
            </FormControl>
            <FormDescription>
              This is your public display name.
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
       <FormField
        control={control}
        name="password"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Password</FormLabel>
            <FormControl>
              <Input type='password' placeholder="password" {...field}/>
            </FormControl>
            <FormDescription>
              Your password goes here.
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
      <Button type="submit">Submit</Button>
    </form>
  </Form>
  )
}

export default AuthFormWithZod
