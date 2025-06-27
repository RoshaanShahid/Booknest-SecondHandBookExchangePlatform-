import React from 'react';

const CookiePage = () => {
  return (
    <div className="bg-light-bg py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white p-8 md:p-12 rounded-xl shadow-md">
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-6 text-center">
            Cookie Policy
          </h1>
          <div className="prose lg:prose-lg max-w-none text-text-light space-y-4">
            <p className="text-sm text-center italic">Last Updated: June 23, 2025</p>

            <h2 className="text-2xl font-bold text-primary !mt-8 !mb-2">1. What Are Cookies</h2>
            <p>
              As is common practice with almost all professional websites, this site uses cookies, which are tiny files that are downloaded to your computer, to improve your experience. This page describes what information they gather, how we use it, and why we sometimes need to store these cookies. We will also share how you can prevent these cookies from being stored; however, this may downgrade or 'break' certain elements of the site's functionality.
            </p>

            <h2 className="text-2xl font-bold text-primary !mt-8 !mb-2">2. How We Use Cookies</h2>
            <p>
              We use cookies for a variety of reasons detailed below. Unfortunately, in most cases, there are no industry standard options for disabling cookies without completely disabling the functionality and features they add to this site. It is recommended that you leave on all cookies if you are not sure whether you need them or not in case they are used to provide a service that you use.
            </p>
            <ul className="list-disc list-inside">
              <li><strong>Account related cookies:</strong> If you create an account with us, then we will use cookies for the management of the signup process and general administration. These cookies will usually be deleted when you log out; however, in some cases, they may remain afterward to remember your site preferences when logged out.</li>
              <li><strong>Login related cookies:</strong> We use cookies when you are logged in so that we can remember this fact. This prevents you from having to log in every single time you visit a new page.</li>
              <li><strong>Site preferences cookies:</strong> In order to provide you with a great experience on this site, we provide the functionality to set your preferences for how this site runs when you use it. In order to remember your preferences, we need to set cookies so that this information can be called whenever you interact with a page.</li>
            </ul>

            <h2 className="text-2xl font-bold text-primary !mt-8 !mb-2">3. Disabling Cookies</h2>
            <p>
              You can prevent the setting of cookies by adjusting the settings on your browser (see your browser Help for how to do this). Be aware that disabling cookies will affect the functionality of this and many other websites that you visit. Disabling cookies will usually result in also disabling certain functionality and features of this site. Therefore it is recommended that you do not disable cookies.
            </p>

          </div>
        </div>
      </div>
    </div>
  );
};

export default CookiePage;
