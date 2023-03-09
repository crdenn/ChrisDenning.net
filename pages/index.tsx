import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Layout, { siteTitle } from '../components/layout';
import Discogs from '../components/Discogs';

const Home: NextPage = () => {
  const folderId = 290644;
  return (
    <>
      <Layout home>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        {/*
        <section className="text-2xl">
          <p>I'm not a cat, I swear!</p>
        </section>
        */}
      </Layout>

      <div className="flex min-h-screen flex-col items-center justify-center py-2 bg-neutral-200">
        <Head>
          <title>ChrisDenning.net</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
          <h1 className="text-6xl font-bold text-neutral-600 hover:scale-110 transform transition duration-300">
            CHRIS DENNING
          </h1>
          <div className="rounded-full overflow-hidden my-4">
            <Image src="/images/maynard.jpg" alt="Maynard" width={300} height={300} layout="responsive" className="hover:scale-110 transition duration-300" />
          </div>
        </main>

<Discogs folderId={290644} />


        <footer className="flex h-24 w-full items-center justify-center border-t">

        </footer>
      </div>
    </>
  );
}


export default Home
