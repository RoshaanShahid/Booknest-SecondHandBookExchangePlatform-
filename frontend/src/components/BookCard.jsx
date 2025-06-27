import React from 'react';
import { Link } from 'react-router-dom';

const BookCard = ({ book }) => {
  return (
    <div className="group bg-white rounded-xl border border-border-color overflow-hidden shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-2 flex flex-col">
      <div className="aspect-3/4 overflow-hidden">
        <img 
          src={book.imageUrl} 
          alt={book.title} 
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/300x400/F8F9FA/6B7281?text=Image+Not+Found'; }}
        />
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <div className="flex justify-between items-center mb-2">
          <span className="inline-block bg-primary/10 text-primary text-xs font-semibold px-2 py-1 rounded-full capitalize">
            {book.genre}
          </span>
          <span className="text-xs font-semibold text-text-light">{book.language}</span>
        </div>
        <h3 className="font-bold text-lg text-text-dark truncate" title={book.title}>{book.title}</h3>
        <p className="text-sm text-text-light mb-3">{book.author}</p>

        <div className="mt-auto">
          <p className="text-2xl font-extrabold text-primary mb-4">${book.price.toFixed(2)}</p>
          <Link 
            to={`/checkout/${book.id}`} 
            className="w-full text-center bg-primary text-white font-bold py-2 px-4 rounded-lg hover:bg-opacity-90 transition-opacity"
          >
            Buy Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
