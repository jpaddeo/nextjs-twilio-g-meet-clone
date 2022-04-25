import Image from 'next/image';

function Footer() {
  return (
    <footer className='flex flex-1 items-center justify-center px-8 border-t border-gray-200'>
      <a
        className='flex flex-grow items-center justify-center gap-2'
        href='https://midu.dev'
        target='_blank'
        rel='noopener noreferrer'
      >
        Powered by{' '}
        <span className='mt-2'>
          <Image
            src='https://midu.dev/logo.png'
            alt='Midudev Logo'
            width={120}
            height={35}
          />
        </span>
      </a>
    </footer>
  );
}

export default Footer;
