import React from 'react';

const blogs = [
  {
    id: 1,
    title: 'Top 10 Parenting Tips for Newborns',
    description: 'Learn the most essential tips to take care of your newborn. From feeding schedules to sleep routines, we’ve got you covered.',
    image: 'https://via.placeholder.com/400x300', // Replace with actual image
    date: 'December 20, 2024',
    author: 'Dr. Sarah Johnson',
  },
  {
    id: 2,
    title: 'Understanding Infant Vaccinations',
    description: 'Everything you need to know about your child’s vaccination schedule and why timely vaccinations are important.',
    image: 'https://via.placeholder.com/400x300', // Replace with actual image
    date: 'December 15, 2024',
    author: 'Dr. Emily Brown',
  },
  {
    id: 3,
    title: '5 Foods to Boost Your Child’s Immunity',
    description: 'Discover the best foods to strengthen your child’s immune system and keep them healthy during seasonal changes.',
    image: 'https://via.placeholder.com/400x300', // Replace with actual image
    date: 'December 10, 2024',
    author: 'Dr. Michael Smith',
  },
];

const Blog = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        {/* Title Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Our Blog</h1>
          <p className="text-lg text-gray-600">
            Explore our latest articles and stay informed about childcare, parenting, and health tips for your little ones.
          </p>
        </div>

        {/* Blog Cards */}
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <div key={blog.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
                <p className="text-gray-600 mb-4">{blog.description}</p>
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span>By {blog.author}</span>
                  <span>{blog.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;