import { getTiles } from "@/lib/data";
import Image from "next/image";
import { FaStar } from "react-icons/fa";


const AllTilesPage =async () => {
  const tiles = await getTiles();
console.log(tiles);

  return (
    <div className="w-11/12 mx-auto space-y-5 py-8">
      <h1 className="text-5xl text-gray-800 text-semibold mt-8">Catalog</h1>
      <h1 className="text-gray-500">Where everyone finds inspiration: explore and let yourself be conquered!</h1>

      <div className="grid md:grid-cols-2   lg:grid-cols-4 gap-6">
        {tiles.map(tile => {
          return (<div key={tile.id} className="shadow-xl ">
            
        <div className="relative  w-full h-48">    <Image src={tile.image} alt="banner"  fill
    className="object-cover w-full"></Image></div>
            <div className="p-5 space-y-3">
                <h1>{tile.title}</h1>
            <p>${tile.price}</p>
              <p>{tile.dimensions}</p>
              
              <div className="flex text-yellow-400"><FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar /></div>
          </div>
          
          </div>)
})}
      </div>

    </div>
  );
};

export default AllTilesPage;