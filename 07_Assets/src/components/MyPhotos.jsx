import React from 'react'

export default function MyPhotos() {
  return (
    <div>
      <h1 className="text-center my-10 text-2xl text-white">My Photo Gallery</h1>

      <ul className="flex flex-wrap justify-center gap-6 px-6">
        <li className="w-full sm:w-[48%] md:w-[31%] lg:w-[23%]">
          <img
            className="w-full h-64 object-cover rounded-lg hover:scale-105"
            src="https://images.pexels.com/photos/37085302/pexels-photo-37085302.jpeg"
            alt="Photo 1"
          />
        </li>

        <li className="w-full sm:w-[48%] md:w-[31%] lg:w-[23%] ">
          <img
            className="w-full h-64 object-cover rounded-lg hover:scale-105"
            src="https://images.pexels.com/photos/6424590/pexels-photo-6424590.jpeg"
            alt="Photo 2"
          />
        </li>

        <li className="w-full sm:w-[48%] md:w-[31%] lg:w-[23%]">
          <img
            className="w-full h-64 object-cover rounded-lg hover:scale-105"
            src="https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg"
            alt="Photo 3"
          />
        </li>

        <li className="w-full sm:w-[48%] md:w-[31%] lg:w-[23%]">
          <img
            className="w-full h-64 object-cover rounded-lg hover:scale-105"
            src="https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg"
            alt="Photo 4"
          />
        </li>
      </ul>
    </div>
  )
}