import Head from "next/head";
import Script from "next/script";
import { ConnectEmbed } from "@/app/thirdweb";
import { client } from "./client";
import { chain } from "./chain";
import { Staking } from "../../components/Staking";

import '../../public/css/style.css';
export default function Home() {
  return (
    <section className="hero relative py-20 md:pt-32">
    <picture className="pointer-events-none absolute inset-x-0 top-0 -z-10 dark:hidden">
      <img src="img/gradient.jpg" alt="gradient" className="w-full"></img>
    </picture>
    <picture className="pointer-events-none absolute inset-x-0 top-0 -z-10 hidden dark:block">
      <img src="img/gradient_dark.jpg" alt="gradient dark" className="w-full"></img>
    </picture>
    
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      margin: "20px auto",
      
    }}>
    
      
     

      <ConnectEmbed
        client={client}
        chain={chain}
      />

      

      <Script src="/js/countdown.bundle.js" strategy="lazyOnload" />
      <Script src="/js/app.bundle.js" strategy="lazyOnload" />
      <Script src="/js/darkMode.bundle.js" strategy="lazyOnload" />
    </div><Staking />
 </section>
  );
}
