import React, { useState, useEffect } from 'react';
import { db as firestore } from '@/config/firebase';
import { collection, getDocs } from 'firebase/firestore';
import BlogContainer from '@/components/BlogContainer';

const BlogSelect = () => {
  const [activeBlog, setActiveBlog] = useState(null);
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const blogCollection = collection(firestore, 'blog');
      const blogSnapshot = await getDocs(blogCollection);
      const blogList = blogSnapshot.docs.map(doc => doc.data());
      setBlogs(blogList);
    };

    fetchBlogs();
  }, []);

  const handleBlogChange = (event) => {
    const selectedBlog = blogs.find(blog => blog.name === event.target.value);
    setActiveBlog(selectedBlog);
  };

  return (
    <div className="mt-2 justify-center">
      <div className='flex justify-center'>
      <select onChange={handleBlogChange} className="text-cyanforce mb-4 bg-darkgray hover:bg-sky cursor-pointer border-none focus:outline-none rounded-md">
        <option value="">Select a blog</option>
        {blogs.map((blog, index) => (
          <option key={index} value={blog.name}>
            {blog.name}
          </option>
        ))}
      </select>
      </div>
      <main className="flex-grow p-2">
        {activeBlog && <BlogContainer blog={activeBlog} />}
      </main>
    </div>
  );
};

export default BlogSelect;