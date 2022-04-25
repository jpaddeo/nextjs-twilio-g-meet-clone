import Head from 'next/head';

import Header from '../components/Layout/Header.jsx';
import Footer from '../components/Layout/Footer.jsx';
import MeetingSection from '../components/MeetingSection.jsx';

export default function Home() {
  return (
    <div>
      <Head>
        <title>midumeet</title>
        <meta
          name='description'
          content='Hackaton propuesto por Miguel Angel Duran. Google Meet Clone.'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Header />
      <main className='flex flex-1 flex-col items-center justify-center min-h-screen px-16'>
        <MeetingSection />
      </main>

      <Footer />
    </div>
  );
}
