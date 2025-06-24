'use client';

import { Button } from '@/components/ui/button';


function AddToCartButton({ item }: { item: any }) {
  
  return (
    <Button type = "button" size='lg' className='mt-4 rounded-full text-white !px-4'>
      {"addToCart"}
    </Button>
  )
}

export default AddToCartButton