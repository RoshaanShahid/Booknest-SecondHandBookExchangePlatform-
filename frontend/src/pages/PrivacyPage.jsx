import React from 'react';

const PrivacyPage = () => {
  return (
    <div className="bg-light-bg py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white p-8 md:p-12 rounded-xl shadow-md">
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-6 text-center">
            Privacy Policy
          </h1>
          <div className="prose lg:prose-lg max-w-none text-text-light space-y-4">
            <p className="text-sm text-center italic">Last Updated: June 23, 2025</p>
            
            <p>
              Your privacy is important to us. It is BookNest's policy to respect your privacy regarding any information we may collect from you across our website, and other sites we own and operate.
            </p>

            <h2 className="text-2xl font-bold text-primary !mt-8 !mb-2">1. Information We Collect</h2>
            <p>
              We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent. We also let you know why we’re collecting it and how it will be used.
            </p>
            <ul className="list-disc list-inside">
              <li><strong>Log data:</strong> When you visit our website, our servers may automatically log the standard data provided by your web browser. It may include your computer’s Internet Protocol (IP) address, your browser type and version, the pages you visit, the time and date of your visit, the time spent on each page, and other details.</li>
              <li><strong>Personal Information:</strong> We may ask for personal information, such as your: Name, Email, and Payment Information.</li>
            </ul>

            <h2 className="text-2xl font-bold text-primary !mt-8 !mb-2">2. How We Use Your Information</h2>
            <p>
              We may use the information we collect from you to personalize your experience, to improve our website, to process transactions, and to send periodic emails regarding your order or other products and services.
            </p>

            <h2 className="text-2xl font-bold text-primary !mt-8 !mb-2">3. Security of Your Personal Information</h2>
            <p>
              We take the security of your personal information seriously and use commercially acceptable means to protect it. However, remember that no method of transmission over the Internet, or method of electronic storage, is 100% secure.
            </p>

            <h2 className="text-2xl font-bold text-primary !mt-8 !mb-2">4. Links to Other Sites</h2>
            <p>
              Our website may link to external sites that are not operated by us. Please be aware that we have no control over the content and practices of these sites, and cannot accept responsibility or liability for their respective privacy policies.
            </p>

            <p>
              Your continued use of our website will be regarded as acceptance of our practices around privacy and personal information. If you have any questions about how we handle user data and personal information, feel free to contact us.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;
