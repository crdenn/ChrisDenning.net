import Head from 'next/head';
import Header from './Header';
import Image from 'next/image';
import Link from 'next/link';

const name = 'Chris';
export const siteTitle = "I'm not a cat";

interface LayoutProps {
    children: React.ReactNode;
    home: boolean;
  }

export default function Layout({ children, home }: LayoutProps) {
  return (
    <div className="fixed top-0 left-0 w-full bg-neutral-200">
  <Head>
  <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato6&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=EB+Garamond&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Knewave&display=swap"
          rel="stylesheet"
        />
    <link rel="icon" href="/favicon.ico" />
    <meta
      name="description"
      content="Learn how to build a personal website using Next.js"
    />
    <meta
      property="og:image"
      content={`https://og-image.vercel.app/${encodeURI(
        siteTitle,
      )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
    />
    <meta name="og:title" content={siteTitle} />
    <meta name="twitter:card" content="summary_large_image" />
  </Head>
  <Header />
  
</div>

  );
}