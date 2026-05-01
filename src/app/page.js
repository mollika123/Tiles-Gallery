import Link from 'next/link';
import banner from '../assets/venetian.jpg'
import Banner from '@/components/Banner';
import Products from '@/components/Products';


export default function Home() {
  return (
   <div> <Banner></Banner>
    <Products></Products>
</div>
  );
}
