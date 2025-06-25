import { Product } from '@prisma/client';
import MenuItem from './MenuItem';
import { ProductWithRelations } from '@/types/product';

async function    Menu({ items }: { items: ProductWithRelations[] }) {
  return items.length > 0 ? (
    <ul className='grid grid-cols-1 sm:grid-cols-3 gap-4'>
      {items.map((item: any) => (
        <MenuItem key={item.id} item={item} />
      ))}
    </ul>
  ) : ( 
    <p className='text-accent text-center'>{"noProductsFound"}</p>
  );
}

export default Menu;
 