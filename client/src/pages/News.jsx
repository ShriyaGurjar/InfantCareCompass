import React from 'react';

const newsData = [
  {
    id: 1,
    title: "New Guidelines for Infant Care",
    description: "Learn about the latest recommendations for taking care of your child, from nutrition to daily routines.",
    image: "https://via.placeholder.com/400x200",
    link: "/news/1",
  },
  {
    id: 2,
    title: "The Benefits of Vaccination",
    description: "Explore how vaccinations can protect your child and ensure a healthy future.",
    image: "https://via.placeholder.com/400x200",
    link: "/news/2",
  },
  {
    id: 3,
    title: "Top Childcare Tips for 2024",
    description: "A comprehensive guide to the best childcare practices recommended by experts this year.",
    image: "https://via.placeholder.com/400x200",
    link: "/news/3",
  },
  {
    id: 4,
    title: "AI in First Aid for Kids",
    description: "Discover how artificial intelligence is transforming first aid practices for children.",
    image: "https://via.placeholder.com/400x200",
    link: "/news/4",
  },
];

const News = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">Latest News</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsData.map((news) => (
            <div key={news.id} className="bg-white shadow-md rounded-lg overflow-hidden">
              {/* Image */}
              <img src={news.image} alt={news.title} className="w-full h-48 object-cover" />
              
              {/* Content */}
              <div className="p-4">
                <h2 className="text-xl font-bold mb-2">{news.title}</h2>
                <p className="text-gray-600 mb-4">{news.description}</p>
                <a
                  href={news.link}
                  className="text-indigo-600 hover:text-indigo-800 font-medium"
                >
                  Read More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;