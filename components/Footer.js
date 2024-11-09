import Link from 'next/link'

const Footer = () => {
<<<<<<< HEAD
  return (
    <footer className="bg-gray-800 p-4 mt-8">
      <div className="container mx-auto text-center text-white flex flex-col items-center">
        <p>© 2024 Unknown Leaf Portfolio. All rights reserved.</p>
        <p>
          <Link legacyBehavior href="/tos">
            <a className="text-blue-500 hover:text-blue-400 transition-colors">Terms of Service</a>
          </Link>
        </p>
      </div>
    </footer>
  );
};
=======
    return (
      <footer className="bg-gray-800 p-4 mt-8">
        <div className="container mx-auto text-center text-white">
          © 2024 Unknown Leaf Portfolio. All rights reserved.
        </div>
      </footer>
    );
  };
>>>>>>> 002c75382450ad7d506f37beb6002fb1a7c07adf
  
  export default Footer;
