import type { Metadata } from "next";
import Head from "next/head";
import Script from "next/script";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThirdwebProvider } from "@/app/thirdweb";
import '../../public/css/style.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Toast NFT Staking",
  description: "Nft Staking Dapp for Toast Ecosystem",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="overflow-x-hidden font-body text-jacarta-500 dark:bg-jacarta-900">
      <header className="js-page-header fixed top-0 z-20 w-full backdrop-blur transition-colors">
     <Head>
        <link rel="stylesheet" href="/css/style.css" /> {/* Ensure correct path */}
        <link rel="shortcut icon" href="/img/favicon.ico" />
        <link rel="apple-touch-icon" href="/img/apple-touch-icon.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/img/apple-touch-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/img/apple-touch-icon-114x114.png" />
      </Head>
     <div className="flex items-center px-6 py-6 xl:px-24">
        {/* Logo */}
        <a href="index.html" className="shrink-0">
          <img src="https://toastecosystem.online/assets/images/favicon.png" className="max-h-7 dark:hidden" alt="NFTerra | NFT Marketplace" />
          <img src="https://toastecosystem.online/assets/images/favicon.png" className="hidden max-h-7 dark:block" alt="NFTerra | NFT Marketplace" />
        </a>

        {/* Menu / Actions */}
        <div className="js-mobile-menu invisible lg:visible fixed inset-0 z-10 ml-auto items-center bg-white opacity-0 dark:bg-jacarta-800 lg:relative lg:inset-auto lg:flex lg:bg-transparent lg:opacity-100 dark:lg:bg-transparent">
          {/* Mobile Logo / Menu Close */}
          <div className="t-0 fixed left-0 z-10 flex w-full items-center justify-between bg-white p-6 dark:bg-jacarta-800 lg:hidden">
            {/* Mobile Logo */}
            <a href="index.html" className="shrink-0">
              <img src="https://toastecosystem.online/assets/images/favicon.png" className="max-h-7 dark:hidden" alt="NFTerra | NFT Marketplace" />
              <img src="https://toastecosystem.online/assets/images/favicon.png" className="hidden max-h-7 dark:block" alt="NFTerra | NFT Marketplace" />
            </a>

            {/* Mobile Menu Close */}
            <button className="js-mobile-close group ml-2 flex h-10 w-10 items-center justify-center rounded-full border border-jacarta-100 bg-white transition-colors hover:border-transparent hover:bg-accent focus:border-transparent focus:bg-accent dark:border-transparent dark:bg-white/[.15] dark:hover:bg-accent" aria-label="close mobile menu">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" className="h-4 w-4 fill-jacarta-700 transition-colors group-hover:fill-white group-focus:fill-white dark:fill-white">
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z"></path>
              </svg>
            </button>
          </div>
          {/* Primary Nav */}
          <nav className="navbar w-full ">
            <ul className="flex flex-col lg:flex-row">
              <li className="js-nav-dropdown nav-item dropdown group relative">
                <a href="#" className="flex items-center justify-between py-3.5 font-display text-base text-jacarta-700 hover:text-accent focus:text-accent dark:text-white dark:hover:text-accent dark:focus:text-accent lg:px-5">Home</a>
              </li>
              <li className="js-nav-dropdown nav-item dropdown group relative">
                <a href="swap.toastecosystem.online" className="flex items-center justify-between py-3.5 font-display text-base text-jacarta-700 hover:text-accent focus:text-accent dark:text-white dark:hover:text-accent dark:focus:text-accent lg:px-5">Swap</a>
              </li>
              <li className="js-nav-dropdown nav-item dropdown group relative">
                <a href="toastcity.toastecosystem.online" className="flex items-center justify-between py-3.5 font-display text-base text-jacarta-700 hover:text-accent focus:text-accent dark:text-white dark:hover:text-accent dark:focus:text-accent lg:px-5">Toast City</a>
              </li>
             
            </ul>
          </nav>

          {/* Mobile Connect Wallet / Socials */}
          <div className="mt-10 w-full lg:hidden">
           
            <hr className="my-5 h-px border-0 bg-jacarta-100 dark:bg-jacarta-600" />
            {/* Socials */}
            <div className="flex items-center justify-center space-x-5">
              <a href="#" className="group">
                <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="facebook" className="h-5 w-5 fill-jacarta-300 group-hover:fill-accent dark:group-hover:fill-white" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"></path>
                </svg>
              </a>
              <a href="#" className="group">
                <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="twitter" className="h-5 w-5 fill-jacarta-300 group-hover:fill-accent dark:group-hover:fill-white" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.832-46.613 57.668 21.506-2.597 41.956-8.22 60.954-16.972-14.409 21.171-32.508 39.925-53.462 54.833z"></path>
                </svg>
              </a>
              <a href="#" className="group">
                <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="instagram" className="h-5 w-5 fill-jacarta-300 group-hover:fill-accent dark:group-hover:fill-white" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path d="M224.1 213.8c-56.26 0-102.6 46.4-102.6 102.6 0 56.26 46.4 102.6 102.6 102.6 56.26 0 102.6-46.4 102.6-102.6 0-56.26-46.4-102.6-102.6-102.6zM224.1 371.4c-81.6 0-148.4-66.8-148.4-148.4 0-81.6 66.8-148.4 148.4-148.4 81.6 0 148.4 66.8 148.4 148.4 0 81.6-66.8 148.4-148.4 148.4zM384 136c0 13.2-10.8 24-24 24s-24-10.8-24-24 10.8-24 24-24 24 10.8 24 24zM224.1 32C101.8 32 0 133.8 0 256s101.8 224 224.1 224c123.4 0 224-101.8 224-224S347.5 32 224.1 32z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Desktop Connect Wallet */}
       <div className="ml-auto flex lg:hidden">
  {/* Dark Mode */}
  <a
    href="#"
    className="js-dark-mode-trigger group ml-2 flex h-10 w-10 items-center justify-center rounded-full border border-jacarta-100 bg-white transition-colors hover:border-transparent hover:bg-accent focus:border-transparent focus:bg-accent dark:border-transparent dark:bg-white/[.15] dark:hover:bg-accent"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      className="dark-mode-light h-4 w-4 fill-jacarta-700 transition-colors group-hover:fill-white group-focus:fill-white dark:hidden"
    >
      <path fill="none" d="M0 0h24v24H0z"></path>
      <path d="M11.38 2.019a7.5 7.5 0 1 0 10.6 10.6C21.662 17.854 17.316 22 12.001 22 6.477 22 2 17.523 2 12c0-5.315 4.146-9.661 9.38-9.981z"></path>
    </svg>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      className="dark-mode-dark hidden h-4 w-4 fill-jacarta-700 transition-colors group-hover:fill-white group-focus:fill-white dark:block dark:fill-white"
    >
      <path fill="none" d="M0 0h24v24H0z"></path>
      <path d="M12 18a6 6 0 1 1 0-12 6 6 0 0 1 0 12zM11 1h2v3h-2V1zm0 19h2v3h-2v-3zM3.515 4.929l1.414-1.414L7.05 5.636 5.636 7.05 3.515 4.93zM16.95 18.364l1.414-1.414 2.121 2.121-1.414 1.414-2.121-2.121zm2.121-14.85l1.414 1.415-2.121 2.121-1.414-1.414 2.121-2.121zM5.636 16.95l1.414 1.414-2.121 2.121-1.414-1.414 2.121-2.121zM23 11v2h-3v-2h3zM4 11v2H1v-2h3z"></path>
    </svg>
  </a>

  {/* Mobile Menu Toggle */}
  <button
    className="js-mobile-toggle group ml-2 flex h-10 w-10 items-center justify-center rounded-full border border-jacarta-100 bg-white transition-colors hover:border-transparent hover:bg-accent focus:border-transparent focus:bg-accent dark:border-transparent dark:bg-white/[.15] dark:hover:bg-accent"
    aria-label="open mobile menu"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      className="h-4 w-4 fill-jacarta-700 transition-colors group-hover:fill-white group-focus:fill-white dark:fill-white"
    >
      <path fill="none" d="M0 0h24v24H0z"></path>
      <path d="M18 18v2H6v-2h12zm3-7v2H3v-2h18zm-3-7v2H6V4h12z"></path>
    </svg>
  </button>
</div>

      </div>
        </header>
        <main>
        
 
        <ThirdwebProvider>
          {children}
        </ThirdwebProvider>
        <Script src="/js/countdown.bundle.js" strategy="lazyOnload" />
      <Script src="/js/app.bundle.js" strategy="lazyOnload" />
      <Script src="/js/darkMode.bundle.js" strategy="lazyOnload" />
      
      </main>
      </body>
    </html>
  );
}
