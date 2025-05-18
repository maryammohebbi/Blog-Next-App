'use client'
import RHFSelect from '@/ui/RHFSelect'
import RHFTextField from '@/ui/RHFTextField'
import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

const schema = yup.object()

function CreatePostForm() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    mode: 'onTouched',
    resolver: yupResolver(schema),
  })
  return (
    <form className="form">
      <RHFTextField
        name="title"
        label="عنوان"
        errors={errors}
        register={register}
        isRequired
      />
      <RHFTextField
        name="briefText"
        label="متن کوتاه"
        errors={errors}
        register={register}
        isRequired
      />
      <RHFTextField
        name="text"
        label="متن"
        errors={errors}
        register={register}
        isRequired
      />
      <RHFTextField
        name="slug"
        label="اسلاگ"
        errors={errors}
        register={register}
        isRequired
      />
      <RHFTextField
        name="readingTime"
        label="زمان مطالعه"
        errors={errors}
        register={register}
        isRequired
      />
      <RHFSelect
        name="category"
        label="دسته بندی"
        errors={errors}
        register={register}
        isRequired
        options={[]}
      />
    </form>
  )
}

export default CreatePostForm
