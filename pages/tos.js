import Layout from '../components/Layout';

export default function TOS() {
  return (
    <Layout>
      <div className="container mx-auto p-8">
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
        <p className="mb-4">Welcome to our website! These terms and conditions outline the rules and regulations for the use of our website.</p>
        <h2 className="text-2xl font-semibold mt-8 mb-4">1. Introduction</h2>
        <p className="mb-4">By accessing this website, we assume you accept these terms and conditions. Do not continue to use the website if you do not agree to all of the terms and conditions stated on this page.</p>
        <h2 className="text-2xl font-semibold mt-8 mb-4">2. Intellectual Property Rights</h2>
        <p className="mb-4">Other than the content you own, under these terms, I own all the intellectual property rights and materials contained in this website. You are granted limited license only for purposes of viewing the material contained on this website.</p>
        <h2 className="text-2xl font-semibold mt-8 mb-4">3. Restrictions</h2>
        <p className="mb-4">You are specifically restricted from all of the following:</p>
        <ul className="list-disc list-inside mb-4">
          <li>Publishing any website material in any other media.</li>
          <li>Selling, sublicensing, and/or otherwise commercializing any website material.</li>
          <li>Publicly performing and/or showing any website material.</li>
          <li>Using this website in any way that is or may be damaging to this website.</li>
          <li>Using this website in any way that impacts user access to this website.</li>
          <li>Using this website contrary to applicable laws and regulations, or in any way may cause harm to the website, or to any person or business entity.</li>
        </ul>
        <h2 className="text-2xl font-semibold mt-8 mb-4">4. Limitation of Liability</h2>
        <p className="mb-4">In no event shall we, nor any of our officers, directors, and employees, be held liable for anything arising out of or in any way connected with your use of this website whether such liability is under contract. We, including our officers, directors, and employees shall not be held liable for any indirect, consequential, or special liability arising out of or in any way related to your use of this website.</p>
        <h2 className="text-2xl font-semibold mt-8 mb-4">5. Changes to Terms</h2>
        <p className="mb-4">We may revise these terms and conditions at any time as we see fit, and by using this website you are expected to review these terms on a regular basis.</p>
        <h2 className="text-2xl font-semibold mt-8 mb-4">6. Contact Us</h2>
        <p className="mb-4">If you have any questions about these Terms, please contact us at <a href="mailto:tongko225@gmail.com" className="text-blue-500">tongko225@gmail.com</a>.</p>
      </div>
    </Layout>
  );
}