import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <ul className="flex items-center justify-center gap-4 py-3 px-5 rounded-md bg-gray-900 text-white shadow-sm">
        <li>
          <Link href="/" className="hover:underline font-poppins font-normal text-lg">
            Home
          </Link>
        </li>
        <li className="ml-auto">
          <Link href="/blog" className="hover:underline font-poppins font-normal text-lg">
            Blog
          </Link>
        </li>
        <li>
          <Link href="/about" className="hover:underline font-poppins font-normal text-lg">
            About
          </Link>
        </li>
        <li>
          <Link href="/contact" prefetch={false} className="hover:underline font-poppins font-normal text-lg">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
