import React from 'react';

const AboutPage = () => {
  return (
    <div className="bg-light-bg py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white p-8 md:p-12 rounded-xl shadow-md">
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-6 text-center">
            About BookNest
          </h1>
          <div className="prose lg:prose-lg max-w-none text-text-light">
            <p>
              Welcome to BookNest, the premier online community for book lovers across the nation. Our journey began with a simple idea: to create a space where books could find new homes, and where readers could connect, share, and discover. We believe that every book holds a story waiting to be read, and our mission is to make those stories accessible and affordable for everyone.
            </p>
            <p>
              At BookNest, we've built more than just a marketplace; we've cultivated a community. We provide a simple, secure, and trustworthy platform for you to buy and sell second-hand books, ensuring that beloved stories continue to be passed from one reader to another. Whether you're decluttering your shelves or searching for a hidden gem, BookNest is here to help you on your literary journey.
            </p>
            <h2 className="text-3xl font-bold text-primary mt-8">Our Vision</h2>
            <p>
              Our vision is to foster a sustainable culture of reading. By giving pre-loved books a second chance, we not only save them from landfills but also make knowledge and entertainment more attainable for all. We are dedicated to creating an intuitive and enjoyable experience for all our members, making it easier than ever to share the magic of reading.
            </p>
            <p>
              Thank you for being a part of our story.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
