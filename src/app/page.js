import Link from 'next/link';
import banner from '../assets/venetian.jpg'


export default function Home() {
  return (
     <div   className=" bg-cover bg-center bg-no-repeat py-60"
  style={{ backgroundImage: `url(${banner.src})` }}>

<div className='w-11/12 mx-auto text-center'><h1 className='text-center text-5xl text-white'>Discover Your Perfect Aesthetic</h1>
<button className='px-4 py-3 mt-4 bg-gray-600 font-semibold text-white'><Link href="/all-tiles">Browse Now</Link></button></div>

    </div>
  );
}
