import LoginForm from '@/components/LoginForm'
import PlainLayout from '@/components/PlainLayout'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import React from 'react'

const page = () => {

  const cookieStore = cookies();
  const token = cookieStore.get('token');

  if(typeof token!=='undefined'){
    redirect('/')
  }

  return (
    <div>
      <PlainLayout>
        <LoginForm></LoginForm>
      </PlainLayout>
    </div>
  )
}

export default page