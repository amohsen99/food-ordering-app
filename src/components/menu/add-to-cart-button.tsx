'use client';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { formatCurrency } from '@/lib/formatters';
import { Checkbox } from '@/components/ui/checkbox';
import Image from 'next/image';
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from '../ui/radio-group';



function AddToCartButton({ item }: { item: any }) {

    const sizes = [
      { id: 'small', name: 'Small', price: 2 },
      { id: 'medium', name: 'Medium', price: 4 },
      { id: 'large', name: 'Large', price:6 },
    ];
    const extras = [
      { id: 'extra-cheese', name: 'Extra Cheese', price: 1.5 },
      { id: 'extra-sauce', name: 'Extra Sauce', price: 1.0 },
      { id: 'extra-toppings', name: 'Extra Toppings', price: 2.0 },
    ];
  return (
    <Dialog>
      <DialogTrigger asChild><Button>AddToCart</Button></DialogTrigger>
      <DialogContent className='sm:max-w-[425px] max-h-[80vh] overflow-y-auto'>
        <DialogHeader className='flex items-center'>
          <Image src={item.image} alt={item.name} width={200} height={200} />
          <DialogTitle>{item.name}</DialogTitle>
          <DialogDescription className='text-center'>
            {item.description}
          </DialogDescription>
        </DialogHeader>
        <div className='space-y-10'>
          <div className='space-y-4 text-center'>
            <Label htmlFor='pick-size'>Pick your size</Label>
            <PickSize item={item} sizes={sizes} />
          </div>
        </div>
         <div className='space-y-10'>
          <div className='space-y-4 text-center'>
            <Label htmlFor='pick-size'>Add Extras</Label>
            <Extras extras={extras} />
          </div>
        </div>
        <DialogFooter>
          <Button className='w-full bg-orange-500 hover:bg-orange-600 text-white'>
            Add to Cart {formatCurrency(item.basePrice)}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default AddToCartButton
function PickSize({
  sizes, item
}: {
  sizes: any; item: any
}) {
  return (
    <RadioGroup defaultValue='comfortable'>
      {sizes.map((size: any) => (
        <div key={size.id} className='flex items-center space-x-2 border border-gray-100 rounded-md p-4'>
          <RadioGroupItem className='bg-orange-500' color='orange'
            value='default'
            id={size.id}
          />
          <Label htmlFor={size.id}>
            {size.name} {formatCurrency(size.price + item.basePrice)}
          </Label>
        </div>
      ))}
    </RadioGroup>
  );
}
function Extras({
  extras,
  // selectedExtras,
  // setSelectedExtras,
}: {
  extras: any;
  // selectedExtras: Extra[];
  // setSelectedExtras: React.Dispatch<React.SetStateAction<Extra[]>>;
}) {
  // const handleExtra = (extra: Extra) => {
  //   if (selectedExtras.find((e) => e.id === extra.id)) {
  //     const filteredSelectedExtras = selectedExtras.filter(
  //       (item) => item.id !== extra.id
  //     );
  //     setSelectedExtras(filteredSelectedExtras);
  //   } else {
  //     setSelectedExtras((prev) => [...prev, extra]);
  //   }
  // };
  return extras.map((extra:any) => (
    <div
      key={extra.id}
      className='flex items-center space-x-2 border border-gray-100 rounded-md p-4'
    >
      <Checkbox
        id={extra.id}
        // onClick={() => handleExtra(extra)}
        // checked={Boolean(selectedExtras.find((e) => e.id === extra.id))}
      />
      <Label
        htmlFor={extra.id}
        className='text-sm text-accent font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
      >
        {extra.name} {formatCurrency(extra.price)}
      </Label>
    </div>
  ));
}