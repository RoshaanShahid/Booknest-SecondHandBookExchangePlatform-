import React from 'react';

const TermsPage = () => {
  return (
    <div className="bg-light-bg py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white p-8 md:p-12 rounded-xl shadow-md">
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-6 text-center">
            Terms & Conditions
          </h1>
          <div className="prose lg:prose-lg max-w-none text-text-light space-y-4">
            <p className="text-sm text-center italic">Last Updated: June 23, 2025</p>

            <h2 className="text-2xl font-bold text-primary !mt-8 !mb-2">1. Terms</h2>
            <p>
              By accessing the website at BookNest, you are agreeing to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site. The materials contained in this website are protected by applicable copyright and trademark law.
            </p>

            <h2 className="text-2xl font-bold text-primary !mt-8 !mb-2">2. Use License</h2>
            <p>
              Permission is granted to temporarily download one copy of the materials (information or software) on BookNest's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul className="list-disc list-inside">
              <li>modify or copy the materials;</li>
              <li>use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
              <li>attempt to decompile or reverse engineer any software contained on BookNest's website;</li>
              <li>remove any copyright or other proprietary notations from the materials; or</li>
              <li>transfer the materials to another person or "mirror" the materials on any other server.</li>
            </ul>
            <p>
              This license shall automatically terminate if you violate any of these restrictions and may be terminated by BookNest at any time.
            </p>

            <h2 className="text-2xl font-bold text-primary !mt-8 !mb-2">3. Disclaimer</h2>
            <p>
              The materials on BookNest's website are provided on an 'as is' basis. BookNest makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>

            <h2 className="text-2xl font-bold text-primary !mt-8 !mb-2">4. Limitations</h2>
            <p>
              In no event shall BookNest or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on BookNest's website, even if BookNest or a BookNest authorized representative has been notified orally or in writing of the possibility of such damage.
            </p>
            
            <h2 className="text-2xl font-bold text-primary !mt-8 !mb-2">5. Governing Law</h2>
            <p>
              These terms and conditions are governed by and construed in accordance with the laws of Pakistan and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;
