import Link from 'next/link';

function Header() {
  return (
    <div className='flex flex-1 items-center justify-between px-8 py-4 border-b border-b-gray-200'>
      <Link href='/'>
        <a href='/'>
          <h1>
            midu<span className='font-bold'>meet</span>
          </h1>
        </a>
      </Link>
    </div>
  );
}

export default Header;
