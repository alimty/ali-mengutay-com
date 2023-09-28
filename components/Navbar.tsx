import Link from 'next/link';


const Navbar = () => {
  console.log("Navbar rendering");  // Add this line

  return (
    <nav className="bg-dark text-white">
      <ul className="flex justify-around">
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/blog">
            <a>Blog</a>
          </Link>
        </li>
        <li>
          <Link href="/project">
            <a>Project</a>
          </Link>
        </li>
        <li>
          <Link href="/shop">
            <a>Shop</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
