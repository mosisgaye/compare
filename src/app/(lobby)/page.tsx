
import Alerte from '@/components/Alerte';
import Carousel from '@/components/Carousel';
import Carousole from '@/components/Carousel';
import Categories from '@/components/Categories';
import Cookies from '@/components/Cookies';
import Products from '@/components/Products';
import Review from '@/components/Review';



export default function Lobby() {
  return (
    <main className='py-20'>
      <div>
        <Carousel />
      </div>
      <div className="max-w-7xl mx-auto">
        <Categories />
        <Products />
        <Alerte />
        <Cookies />
        <Review />
  
      </div>
    </main>
  );
}
