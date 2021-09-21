//@ts-check
import Layout from '../component/Layout'

export default function about() {
  return (
    <Layout title='About this website'>
      <h1 className='text-5xl border-b-4 pb-5 font-bold'>About</h1>
      <div className='bg-white shadow-md rounded-lg px-10 py-6 mt-6'>
        <h3 className='text-2xl mb-5'>Project blog</h3>
        <p className='mb-3'>This is website to learn web dev</p>
      </div>
    </Layout>
  )
}
