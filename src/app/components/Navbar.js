import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className="flex items-center justify-between flex-wrap bg-blue-300 p-6">
            <div className="flex items-center flex-shrink-0 text-black mr-6">
                <span className="font-semibold text-xl tracking-tight">Zimo Social</span>
            </div>
            <div className="w-full block pr-10 lg:flex lg:items-center lg:w-auto">
                <div className="text-sm lg:flex-grow">
                    <Link href="/" className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-white mr-4">
                        Home
                    </Link>
                    <Link href="/contact" className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-white mr-4">
                        Contact
                    </Link>
                    <Link href="/about" className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-white">
                        About
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
