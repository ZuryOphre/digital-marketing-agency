import React from 'react';

const BlogContainer = ({ blog }) => (
  <div className="flex justify-center items-center min-h-screen">
    <div className="bg-darkgray w-6/12 shadow-md mt-8 mb-8 ml-8 mr-8 rounded-lg overflow-hidden">
      <div className="flex flex-col items-center justify-center p-4">
      <div className="flex justify-center ml-4">
  <h1 className="text-cyanforce text-xl font-semibold mb-6">{blog.name}</h1>
</div>
        <img
          src={blog.imageURL}
          alt={blog.name}
          className="object-cover h-full w-5/12 rounded-lg mb-6"
        />
        <p className="text-cyanforce w-7/12 text-md mb-2 mt-4">{blog.description}</p>
        <div className="flex flex-wrap items-center justify-between">
          <p className="text-softmint text-sm  mr-2">{blog.tag}</p>
          <p className="text-cyan-300 text-sm ">{blog.author}</p>
        </div>
      </div>
    </div>
  </div>
);

export default BlogContainer;