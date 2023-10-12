// First, import your global styles and necessary types
import './globals.css'
import React from 'react';
import Head from 'next/head';
// Metadata for your application (this can be extended or changed based on your needs)
const metadata = {
  title: 'Ali Mengütay',
  description: 'Description for your app',
}

// Layout component
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        {/* Add any additional meta tags or links here */}
      </Head>
      <body>
        {children}
      </body>
    </html>
  );
}
