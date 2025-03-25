// import React from 'react'
// import { useLoaderData } from 'react-router-dom'

// const SingleBook = () => {
//   const {_id, bookTitle, URL,bookdescription} = useLoaderData();
//   return (
//     <div className='mt-28 px-4 lg:px-24'>
//       <img src={URL} alt="" className='h-96'/>
//       <div>
//       <h2>{bookTitle}</h2>
//       
//       </div>
      
//     </div>
//   )
// }

// export default SingleBook


import React from 'react';
import { useLoaderData } from 'react-router-dom'

const book = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1706934613i/206119058.jpg",
  description: `The Great Gatsby is a 1925 novel by American writer F. Scott Fitzgerald. Set in the Jazz Age on Long Island, the novel depicts the life of Jay Gatsby, a mysterious millionaire who is obsessed with a lost love, Daisy Buchanan. The novel explores themes of decadence, idealism, resistance to change, social upheaval, and excess, creating a portrait of the Jazz Age or the Roaring Twenties in the United States. The novel is often regarded as one of the greatest works of American literature.`,
  price: "$14.99",
  genre: "Fiction",
  publicationDate: "1925",
};



const SingleBook = () => {
  const {_id, bookTitle, URL,bookDescription} = useLoaderData();

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8  ">
        <div className="flex flex-col lg:flex-row gap-12 md:w-[80%] mx-auto mt-16 md:h-[50%]">
          {/* Book Image */}
          <div className="flex-shrink-0 w-full lg:w-1/3">
            <img
              className="w-full h-auto rounded-lg shadow-lg"
              src={URL}
              alt={book.title}
            />
          </div>

          {/* Book Details */}
          <div className="flex-1">
            <h1 className="text-4xl font-bold text-gray-800">{bookTitle}</h1>
            <p className="text-xl text-gray-600 mt-2">{book.author}</p>
            <p className="text-lg text-gray-500 mt-4">{bookDescription}</p>

            {/* Book Metadata */}
            <div className="mt-6 space-y-4">
              <div className="flex justify-between">
                <p className="font-semibold text-gray-700">Genre:</p>
                <p className="text-gray-600">{book.genre}</p>
              </div>
              <div className="flex justify-between">
                <p className="font-semibold text-gray-700">Price:</p>
                <p className="text-gray-600">{book.price}</p>
              </div>
              <div className="flex justify-between">
                <p className="font-semibold text-gray-700">Publication Date:</p>
                <p className="text-gray-600">{book.publicationDate}</p>
              </div>
            </div>

            {/* Add to Cart / Buy Now Button */}
            <div className="mt-8">
              <button className="w-full py-3 px-6 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleBook;
