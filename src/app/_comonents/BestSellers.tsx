import MainHeading from '@/components/main-heading';
import Menu from '@/components/menu';

async function BestSellers() {
  const bestSellers =[
  {
    id: 1,
    name: 'Burger',
    description: 'A delicious burger with beef patty, lettuce, tomato, and cheese.',
    basePrice: 10,
    image: '/assets/images/pizza.png',
  },
  
  {
    id: 2,
    name: 'Pizza',
    description: 'A delicious pizza with tomato sauce, cheese, and pepperoni.',
    price: 12,
    image: '/assets/images/pizza.png',
  },
  {
    id: 3,
    name: 'Pasta',
    description: 'A delicious pasta with tomato sauce, cheese, and pepperoni.',
    price: 12,
    image: '/assets/images/pizza.png',
  },{
    id: 4,
    name: 'Salad',
    description: 'A delicious salad with lettuce, tomato, and cheese.',
    price: 12,
    image: '/assets/images/pizza.png',
  },
  ]

  return (
    <section>
      <div className='container'>
        <div className='text-center mb-4'>
          <MainHeading
            subTitle="Check out "
            title="Our Best Sellers"
          />
        </div>  
      <Menu items={bestSellers} />
      </div>
    </section>
  );
}

export default BestSellers;
