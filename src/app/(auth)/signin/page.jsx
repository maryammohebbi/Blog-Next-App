'use client'

import RHFTextField from '@/ui/RHFTextField'
import React from 'react'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import Button from '@/ui/Button'
import Link from 'next/link'
import { useAuth } from '@/context/AuthContext'
import SpinnerMini from '@/ui/SpinnerMini'

const schema = yup
  .object({
    email: yup.string().email('ایمیل نامعتبر است').required('ایمیل الزامی است'),
    password: yup.string().required('رمز عبور الزامی است'),
  })
  .required()

function Signin() {
  const {
    register,
    handleSubmit,
    formState: { errors, isLoading },
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onTouched',
  })

  const { signin } = useAuth()

  const onSubmit = async (values) => {
    await signin(values)
  }
  return (
    <div>
      <h1 className="text-xl font-bold text-secondary-500 text-center mb-6">
        ورود
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
        <RHFTextField
          label="ایمیل"
          name="email"
          register={register}
          errors={errors}
          isRequired
        />
        <RHFTextField
          label="رمز عبور"
          name="password"
          register={register}
          errors={errors}
          isRequired
          type="password"
        />
        {isLoading ? (
          <SpinnerMini />
        ) : (
          <Button type="submit" variant="primary" className="w-full">
            ورود
          </Button>
        )}
        <Link href="/signup" className="text-secondary-500 mt-6 text-center">
          ثبت نام
        </Link>
      </form>
    </div>
  )
}

export default Signin
