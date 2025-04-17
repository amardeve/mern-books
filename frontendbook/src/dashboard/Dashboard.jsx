import React, { useEffect, useState } from 'react';
import { Card } from 'flowbite-react';

const Dashboard = () => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [categories, setCategories] = useState([]);
  const [authors, setAuthors] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedAuthor, setSelectedAuthor] = useState('');

  useEffect(() => {
    fetch(`${backendUrl}/all-books`)
      .then(res => res.json())
      .then(data => {
        setBooks(data);
        setFilteredBooks(data);
        setCategories([...new Set(data.map(book => book.category))]);
        setAuthors([...new Set(data.map(book => book.authorName))]);
      });
  }, []);

  useEffect(() => {
    let result = books;
    if (selectedCategory) {
      result = result.filter(book => book.category === selectedCategory);
    }
    if (selectedAuthor) {
      result = result.filter(book => book.authorName === selectedAuthor);
    }
    setFilteredBooks(result);
  }, [selectedCategory, selectedAuthor]);

  const recentBooks = [...books]
    .sort(() => 0.5 - Math.random())
    .slice(0, 6);

  return (
    <div className='p-6 space-y-8'>
      <h1 className='text-3xl font-bold'>Dashboard</h1>

      {/* Stats Cards */}
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
        <Card><h2 className='text-xl font-semibold'>Total Books</h2><p>{books.length}</p></Card>
        <Card><h2 className='text-xl font-semibold'>Categories</h2><p>{categories.length}</p></Card>
        <Card><h2 className='text-xl font-semibold'>Authors</h2><p>{authors.length}</p></Card>
      </div>

      {/* Filter Panel */}
      <div className='space-y-2'>
        <h2 className='text-2xl font-semibold'>Filter Books</h2>
        <div className='flex flex-wrap gap-4'>
          <select value={selectedCategory} onChange={e => setSelectedCategory(e.target.value)} className='p-2 border rounded'>
            <option value=''>All Categories</option>
            {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
          </select>
          <select value={selectedAuthor} onChange={e => setSelectedAuthor(e.target.value)} className='p-2 border rounded'>
            <option value=''>All Authors</option>
            {authors.map(auth => <option key={auth} value={auth}>{auth}</option>)}
          </select>
        </div>
      </div>

      {/* Recent Books */}
      <div>
        <h2 className='text-2xl font-semibold mb-4'>Recent Books</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
          {recentBooks.map((book, i) => (
            <Card key={i}>
              <img src={book.URL} alt={book.bookTitle} className='w-full h-48 object-cover rounded' />
              <h3 className='font-bold text-lg mt-2'>{book.bookTitle}</h3>
              <p className='text-sm'>by {book.authorName}</p>
              <p className='text-sm text-gray-600'>{book.category}</p>
            </Card>
          ))}
        </div>
      </div>

      {/* About Bookstore */}
      <div className='mt-10 p-6 bg-gray-100 dark:bg-gray-800 rounded'>
        <h2 className='text-2xl font-bold mb-2'>About Our Bookstore</h2>
        <p className='text-gray-700 dark:text-gray-300'>
          Welcome to our digital bookstore, where knowledge meets convenience. We provide a vast selection of books across various genres including programming, fiction, non-fiction, history, and more. Whether you're a student, professional, or a passionate reader, we aim to make literature accessible and enjoyable for everyone. Our platform is constantly updated with new releases and timeless classics—empowering you to learn, grow, and explore from anywhere in the world.
        </p>
      </div>
    </div>
  );
};

export default Dashboard;

