import Link from 'next/link';
import banner from '../assets/venetian.jpg'
import Banner from '@/components/Banner';
import Products from '@/components/Products';
import BreakingNews from '@/components/BreakingNews';


export default function Home() {
  return (
    <div> <Banner></Banner>
      <BreakingNews></BreakingNews>
    <Products></Products>
</div>
  );
}
