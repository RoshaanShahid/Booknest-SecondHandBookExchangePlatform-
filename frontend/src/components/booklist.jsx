import React from 'react';
import { Link } from 'react-router-dom';

// The BookCard component is now defined locally inside BookList.jsx
// to resolve the import error.
const BookCard = ({ book }) => {
  return (
    <div className="group bg-white rounded-xl border border-border-color overflow-hidden shadow-sm transition-all duration-300 hover:shadow-xl ">
      <div className="aspect-3/4 overflow-hidden">
        <img 
          src={book.imageUrl} 
          alt={book.title} 
          className="w-full h-full object-cover transition-transform duration-300 "
          onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/300x400/F8F9FA/6B7281?text=Image+Not+Found'; }}
        />
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <div className="flex justify-between items-center mb-2">
            <span className="inline-block bg-primary/10 text-primary text-xs font-semibold px-2 py-1 rounded-full capitalize">{book.genre}</span>
            <span className="text-xs font-semibold text-text-light">{book.language}</span>
        </div>
        <h3 className="font-bold text-lg text-text-dark truncate" title={book.title}>{book.title}</h3>
        <p className="text-sm text-text-light mb-3">{book.author}</p>
        
        <div className="mt-auto">
            <p className="text-2xl font-extrabold text-primary mb-4">${book.price.toFixed(2)}</p>
            <div className="flex flex-col space-y-2">
                
                <Link
  to={`/checkout/${book.id}`}
  className="w-full text-center bg-primary text-white font-bold py-2 px-4 rounded-lg  "
>
  Buy Now
</Link>

  
            </div>
        </div>
      </div>
    </div>
  );
};


const BookList = () => {
 
  const books = {
    fiction: [
      { id: 'f1', title: "Peer-e-Kamil", author: "Umera Ahmed", price: 12.00, genre: "Fiction", language: "Urdu", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoj23nDOuQ-d07g9INvFtTrwVTs3TZtKO6zw&s" },
      { id: 'f2', title: "The Kite Runner", author: "Khaled Hosseini", price: 14.50, genre: "Fiction", language: "English", imageUrl: "https://duabookpalace.com/cdn/shop/products/dua-book-palace-online-the-kite-runner-38332466856168.jpg?v=1664271663" },
      { id: 'f3', title: "Jannat Kay Pattay", author: "Nimra Ahmed", price: 13.00, genre: "Fiction", language: "Urdu", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8y4AzZlpPPnKJXkq3_0DPmmgeIMdIfNSLYQ&s" },
      { id: 'f4', title: "1984", author: "George Orwell", price: 9.99, genre: "Fiction", language: "English", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyxBJ_RsLw7TaMV-_aEsagT4kttBKc-BEwWQ&s" },
      { id: 'f5', title: "To Kill a Mockingbird", author: "Harper Lee", price: 10.75, genre: "Fiction", language: "English", imageUrl: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1553383690l/2657.jpg" },
      { id: 'f6', title: "Raja Gidh", author: "Bano Qudsia", price: 11.00, genre: "Fiction", language: "Urdu", imageUrl: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1340797512i/9632002.jpg" },
      { id: 'f7', title: "The Great Gatsby", author: "F. Scott Fitzgerald", price: 8.99, genre: "Fiction", language: "English", imageUrl: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1490528560l/4671._SY475_.jpg" },
      { id: 'f8', title: "Moth Smoke", author: "Mohsin Hamid", price: 13.50, genre: "Fiction", language: "English", imageUrl: "https://upload.wikimedia.org/wikipedia/en/8/84/MothSmoke.jpg" },
    ],
    'non-fiction': [
      { id: 'nf1', title: "Sapiens", author: "Yuval Noah Harari", price: 18.00, genre: "Non-Fiction", language: "English", imageUrl: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1420585954l/23692271.jpg" },
      { id: 'nf2', title: "Shahab Nama", author: "Qudrat Ullah Shahab", price: 15.00, genre: "Non-Fiction", language: "Urdu", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0_pj7qVP-PARr8-_l2Y9hnQ92nK2UdlNBuw&s" },
      { id: 'nf3', title: "Educated", author: "Tara Westover", price: 16.50, genre: "Non-Fiction", language: "English", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRejqES881L91AET3QFXCw-kgB1oGr8meKGfg&s" },
      { id: 'nf4', title: "The Autobiography of Malcolm X", author: "Alex Haley", price: 14.00, genre: "Non-Fiction", language: "English", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT68GRndt0HtS1ffT47gGfZWzwBrJsJzRc9Sw&s" },
      { id: 'nf5', title: "Zavia", author: "Ashfaq Ahmed", price: 12.00, genre: "Non-Fiction", language: "Urdu", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnmaHAxxFOeEePwt2XnRnpQpBRE_geN1gNOg&s" },
      { id: 'nf6', title: "Republic", author: "Plato", price: 11.50, genre: "Non-Fiction", language: "English", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa5l-2HzoTIzETnHhT53sHLmqVoo2nigftNg&s" },
      { id: 'nf7', title: "Beyond Good and Evil", author: "Friedrich Nietzsche", price: 13.00, genre: "Non-Fiction", language: "English", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGOb2FjVRkb2eJRCRUtlV72HV-XHE2LlDjfQ&s" },
      { id: 'nf8', title: "The Incoherence of the Philosophers", author: "Al-Ghazali", price: 19.00, genre: "Non-Fiction", language: "English", imageUrl: "https://madnikutubkhana.com/wp-content/uploads/2019/04/wp-header-logo-434.png" },
    ],
    'science-fiction': [
      { id: 'sf1', title: "Dune", author: "Frank Herbert", price: 13.99, genre: "Science Fiction", language: "English", imageUrl: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1555447414l/44767458.jpg" },
      { id: 'sf2', title: "Foundation", author: "Isaac Asimov", price: 11.50, genre: "Science Fiction", language: "English", imageUrl: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1417900846l/29579.jpg" },
      { id: 'sf3', title: "Neuromancer", author: "William Gibson", price: 10.99, genre: "Science Fiction", language: "English", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmI1PX1GhLdFmOulMlpZDElvPqe6d_9gpX_g&s" },
      { id: 'sf4', title: "The Hitchhiker's Guide", author: "Douglas Adams", price: 9.75, genre: "Science Fiction", language: "English", imageUrl: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1404613595i/13.jpg" },
      { id: 'sf5', title: "Project Hail Mary", author: "Andy Weir", price: 14.00, genre: "Science Fiction", language: "English", imageUrl: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1597695864l/54493401.jpg" },
      { id: 'sf6', title: "Ender's Game", author: "Orson Scott Card", price: 11.25, genre: "Science Fiction", language: "English", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsO0-E2Dsmmt8tiu3xd9OBKodHFApugxMR4A&s" },
      { id: 'sf7', title: "The Left Hand of Darkness", author: "Ursula K. Le Guin", price: 12.50, genre: "Science Fiction", language: "English", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrxN2KS0xj4WxaEVUh-NIJtqhtMkoSpanxjQ&s" },
      { id: 'sf8', title: "Hyperion", author: "Dan Simmons", price: 15.00, genre: "Science Fiction", language: "English", imageUrl: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1225828832i/912720.jpg" },
    ],
    fantasy: [
      { id: 'fa1', title: "The Hobbit", author: "J.R.R. Tolkien", price: 14.00, genre: "Fantasy", language: "English", imageUrl: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1546071216l/5907.jpg" },
      { id: 'fa2', title: "A Game of Thrones", author: "George R.R. Martin", price: 16.25, genre: "Fantasy", language: "English", imageUrl: "https://www.georgerrmartin.com/wp-content/uploads/2013/03/GOTMTI2.jpg" },
      { id: 'fa3', title: "The Name of the Wind", author: "Patrick Rothfuss", price: 15.75, genre: "Fantasy", language: "English", imageUrl: "https://i1.sndcdn.com/artworks-000051615597-j18l1j-t500x500.jpg" },
      { id: 'fa4', title: "Amar Bail", author: "Umera Ahmed", price: 10.50, genre: "Fantasy", language: "Urdu", imageUrl: "https://duabookpalace.com/cdn/shop/products/dua-book-palace-online-amar-bail-38354248761576.jpg?v=1663839146" },
      { id: 'fa5', title: "Mistborn: The Final Empire", author: "Brandon Sanderson", price: 17.00, genre: "Fantasy", language: "English", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMc6puvtZmxjWdAFsVjhG59m-3MWqYxWabhg&s" },
      { id: 'fa6', title: "Circe", author: "Madeline Miller", price: 13.50, genre: "Fantasy", language: "English", imageUrl: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1565909496l/35959740.jpg" },
      { id: 'fa7', title: "The Lies of Locke Lamora", author: "Scott Lynch", price: 14.99, genre: "Fantasy", language: "English", imageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/b/b1/Locke_Lamora.jpg/250px-Locke_Lamora.jpg" },
      { id: 'fa8', title: "Jonathan Strange & Mr Norrell", author: "Susanna Clarke", price: 19.50, genre: "Fantasy", language: "English", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPb6E5kD2Sa3WSUmy8CTw35KvmKY_B2ow1Lw&s" },
    ],
  };

  const GenreSection = ({ title, books }) => (
    <div className="mb-16">
      <h2 className="text-3xl font-bold text-text-dark mb-8">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {books.map(book => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );

  return (
    <section className="bg-light-bg">
      <div className="container mx-auto px-4 py-16">
        <GenreSection title="Featured Fiction" books={books.fiction} />
        <GenreSection title="Top Non-Fiction" books={books['non-fiction']} />
        <GenreSection title="Popular Science Fiction" books={books['science-fiction']} />
        <GenreSection title="Essential Fantasy" books={books.fantasy} />
      </div>
    </section>
  );
};

export default BookList;
