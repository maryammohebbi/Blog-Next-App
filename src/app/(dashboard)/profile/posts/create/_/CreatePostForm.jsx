'use client'
import { useCategories } from '@/hooks/useCategories'
import ButtonIcon from '@/ui/ButtonIcon'
import RHFSelect from '@/ui/RHFSelect'
import RHFTextField from '@/ui/RHFTextField'
import { yupResolver } from '@hookform/resolvers/yup'
import Image from 'next/image'
import React, { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import * as yup from 'yup'
import { MdClose } from 'react-icons/md'
import FileInput from '@/ui/FileInput'
import Button from '@/ui/Button'

const schema = yup
  .object({
    title: yup
      .string()
      .min(5, 'حداقل 5 کاراکتر را وارد کنید')
      .required('عنوان ضروری است'),
    briefText: yup
      .string()
      .min(5, 'حداقل 10 کاراکتر وارد کنید')
      .required('توضیحات ضروری است'),
    text: yup
      .string()
      .min(5, 'حداقل 10 کاراکتر وارد کنید')
      .required('توضیحات ضروری است'),
    slug: yup.string().required('اسلاگ ضروری است'),
    readingTime: yup
      .number()
      .positive()
      .integer()
      .required('زمان مطالعه ضروری است')
      .typeError('یک عدد را وارد کنید'),
    category: yup.string().required('دسته بندی ضروری است'),
  })
  .required()

function CreatePostForm() {
  const { categories } = useCategories()
  const [coverImageUrl, setCoverImageUrl] = useState(null)
  const {
    control,
    register,
    formState: { errors },
    handleSubmit,
    reset,
    setValue,
  } = useForm({
    mode: 'onTouched',
    resolver: yupResolver(schema),
  })
  const onSubmit = (data) => {
    // console.log(data)
    const formData = new FormData()
    for (key in data) {
      formData.append(key, data[key])
    }
  }

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
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
        options={categories}
      />
      <Controller
        name="coverImage"
        control={control}
        rules={{ required: 'کاور پست الزامی است' }}
        render={({ field: { value, onChange, ...rest } }) => {
          return (
            <FileInput
              label=" کاور پست"
              name="coverImage"
              {...rest}
              value={value?.fileName}
              onChange={(event) => {
                const file = event.target.files[0]
                onChange(file)
                setCoverImageUrl(URL.createObjectURL(file))
                event.target.value = null
              }}
              isRequired
              errors={errors}
            />
          )
        }}
      />
      {coverImageUrl && (
        <div className="relative aspect-video overflow-hidden rounded-lg">
          <Image
            fill
            src={coverImageUrl}
            alt="cover-image"
            className="object-cover object-center"
          />
          <ButtonIcon
            onClick={() => {
              setCoverImageUrl(null)
              setValue('coverImage', null)
            }}
            variant="red"
            className="w-6 h-6 absolute left-1 top-1"
          >
            <MdClose />
          </ButtonIcon>
        </div>
      )}
      <Button variant="primary" type="submit" className="w-full">
        تایید
      </Button>
    </form>
  )
}

export default CreatePostForm
