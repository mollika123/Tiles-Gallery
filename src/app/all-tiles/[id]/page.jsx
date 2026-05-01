import { getTiles } from '@/lib/data';
import Image from 'next/image';
import React from 'react';

const TilesDetailsPage = async ({params}) => {
  const { id } = await params;
  const tiles = await getTiles();
  console.log(tiles);
  const tile = tiles.find(t => t.id == id);
  console.log(tile);
  return (
    <div className='w-11/12 mx-auto py-8 shadow-2xl my-9'>
      <div className='flex justify-between gap-6 p-7'>
         <div className="flex-1 relative  w-full h-56 mt-5">    <Image src={tile.image} alt="banner"  fill
                        className="object-cover w-full"></Image>
                       
                      
        </div>
        <div className='flex-1 space-y-2'>
          <h1 className='text-2xl font-bold'>{ tile.title}</h1>
          <h1 className='text-gray-500'>{tile.description}</h1>
          <p className="text-xl text-green-400">{tile.price}{tile.currency}</p>
          <p className={tile.inStock ? "text-green-600" : "text-red-500"}>{tile.inStock ? "In Stock" : "Out of Stock"}</p>
          <hr />
          <ul>
            <li><strong>Material:</strong>{ tile.material}</li>
            <li><strong>Dimensions:</strong>{tile.dimensions }</li>
            <li><strong>Category:</strong>{tile.category }</li>
          </ul>
          <div className='flex gap-2'>
            {tile.tags?.map(tag => {
              return (<a key={tag} href={`/tags/${tag}`} className='px-2 py-1 bg-gray-500 rounded-md gap-3 text-white font-bold'>{tag }</a>
              
            )
            }
            )}
          </div>
          <button className='bg-blue-400 rounded-full text-white py-2.5 px-4'>Add to cart</button>
        </div>
       </div>
      

    </div>
  );
};

export default TilesDetailsPage;