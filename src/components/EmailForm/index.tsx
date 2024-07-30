import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

type Inputs = {
  email: string
  message: string
}

const EmailForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

  return (
    <main>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Email:</label>
        <br />
        <input type='email' aria-label='eamil' {...register("email", { required: true })} />
        {errors.email && <span>This field is required</span>}
        <label>Message:</label>
        <br />
        <input type='text' aria-label='message' {...register("message", { required: true })} />
        {errors.message && <span>This field is required</span>}
        <input type='submit' />
      </form>
    </main>
  )
}

export default EmailForm