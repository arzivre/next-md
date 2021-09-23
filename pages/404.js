//@ts-check
import Image from 'next/image'
import Layout from '../component/Layout'

export default function NotFoundPage() {
  return (
    <Layout title='Page Not Found'>
      <div className='flex flex-col items-center mt-20'>
        <Image
          src='/images/logo.png'
          alt='logo'
          width={70}
          height={70}
          className='bg-gray-800 rounded-xl'
        />
        <h1 className='text-6xl my-5'>Whoops!</h1>
        <h2 className='text-4xl text-gray-400 mb-5'>Page does not exists</h2>
      </div>
    </Layout>
  )
}
