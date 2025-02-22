import ContactForm from "@/components/ContactForm";
import Image from 'next/image';
import Link from 'next/link';


export default function Home() {
  return (
    <main className="flex min-h-screen mt-28 flex-col items-center justify-start w-full md:mt-24">
      <div className="text-black bg-primary mx-3 px-4 py-2 rounded-xl flex flex-row justify-start md:w-3/5 md:items-center md:justify-center md:mx-auto md:px-0">
        <span className="font-semibold md:w-fit whitespace-nowrap md:text-sm">Eagle AI Labs:</span>
        <span className="ml-1 truncate max-w-[200px] md:max-w-none md:whitespace-nowrap md:text-sm">
          Partnership and Co-Ownership of a U.S. Regulated Crypto Hedgefund. 
          This enables us to launch a new product, TradeDividends. 
          <Link href="/" className="underline ml-1 font-semibold hover:text-gray-100 focus:text-gray-100">Learn More</Link>
        </span>
      </div>


      <section className="flex flex-col my-8 w-full px-6 md:w-3/5 md:items-center md:justify-between md:mx-auto md:px-0 md:flex-row md:my-0">
        <div className="md:w-[60%]">
          <div className="flex flex-col mt-20 mb-8 max-w-[800px] md:mt-8">
            <h1 className="bg-angled-gradient text-transparent bg-clip-text text-4xl md:text-6xl leading-snug md:leading-normal text-left [word-spacing:0.5vw]">
              Pioneering the Future of Digital Asset Investment
            </h1>
            <p className="text-white mt-4 leading-relaxed">
              Eagle AI Labs is revolutionizing crypto asset management through our ground-breaking partnership 
              with a U.S.-regulated crypto hedge fund. This exclusive collaboration combines our advanced 
              AI-powered BTC prediction technology with institutional-grade investment expertise.
            </p>
          </div>

          <button className="flex text-white px-6 py-2 max-w-fit rounded-3xl bg-angled-gradient border border-transparent hover:border-primary hover:bg-none hover:bg-[unset] hover:text-primary focus:border-secondary focus:bg-none focus:bg-[unset] focus:text-secondary transition-all">
            Register your interest now
          </button>
        </div>

        <div className="mt-10 mb-6 md:w-[30%]">
          <div className="w-full h-[650px] md:h-[600px] bg-[url('/images/mimg1.png')] md:bg-[url('/images/dimg1.png')] bg-contain bg-no-repeat bg-top"></div>
        </div>
      </section>


      <section className="flex flex-col my-4 w-full px-6 md:w-3/5 md:items-center md:justify-between md:mx-auto md:px-0 md:flex-row md:my-12">
        <div className="my-4 md:w-[40%] md:my-0">
          <div className="w-full h-[255px] md:h-[450px] bg-[url('/images/mimg2.png')] md:bg-[url('/images/dimg2.png')] bg-contain bg-no-repeat bg-top"></div>
        </div>

        <div className="text-left mt-4 mb-12 flex flex-col justify-start md:w-[56%]">
          <h1 className="text-white text-3xl [word-spacing:0.5vw] md:[word-spacing:0.25vw]">A new era in crypto investment</h1>

          <p className="text-white my-4">Our partnership represents a milestone in institutional crypto adoption, featuring:</p>

          <ul className="list-disc pl-5 ml-1 text-white/70 text-sm">
            <li>Exclusive licensing of Eagle AI Labs&apos; proprietary BTC price prediction algorithms</li>
            <li>Significant equity stake in a fully regulated U.S. hedge fund</li>
            <li>Management team with proven track record of managing billions in AUM</li>
            <li>Full compliance with U.S. regulatory requirements</li>
            <li>Strategic timing aligned with anticipated favourable U.S. regulatory environment</li>
          </ul> 
        </div>
      </section>


      <section className="flex flex-col my-4 w-full px-6 md:w-3/5 md:items-center md:justify-between md:mx-auto md:px-0 md:flex-row-reverse md:my-12">
        <div className="my-4 md:w-[40%] md:my-0">
          <div className="w-full h-[310px] md:h-[450px] bg-[url('/images/mimg3.png')] md:bg-[url('/images/dimg3.png')] bg-contain bg-no-repeat bg-top"></div>
        </div>

        <div className="text-left mt-4 mb-12 flex flex-col justify-start md:w-[56%]">
          <h1 className="text-white text-3xl [word-spacing:0.5vw] md:[word-spacing:0.25vw]">Trade Dividends Rewarding our community</h1>

          <p className="text-white my-4">This institutional partnership enables the launch of our innovative Trade Dividends program:</p>

          <ul className="list-disc pl-5 ml-1 text-white/70 text-sm">
            <li>Exclusive USDC rewards for $EAI stakers</li>
            <li>Direct benefit from institutional trading success</li>
            <li>Sustainable yield generation backed by hedge fund performance</li>
          </ul> 
        </div>
      </section>


      <section className="flex flex-col my-4 w-full px-6 md:w-3/5 md:items-center md:justify-center md:mx-auto md:px-0 md:flex-column md:mt-24 md:mb-12">
        <h1 className="text-white text-3xl [word-spacing:0.5vw] md:text-4xl md:[word-spacing:0.25vw]">Limited Availability - Register now to join Wait List </h1>

        <div className="my-2 flex flex-col items-center w-full md:flex-row md:justify-between md:my-8">
          <div className="my-4 flex flex-col items-center w-full md:w-[56%] md:m-0">
            <div className="my-2 p-6 flex flex-col items-center bg-white/10 w-full border border-white/20 rounded-xl md:flex-row md:items-start">
              <Image src="/images/key.png" alt="key" width={64} height={64} className="h-16 w-16 md:mt-4" />
              
              <div className="md:pl-6">
                <h2 className="text-xl text-center mt-4 mb-2 md:text-left">Limited Access Available</h2>

                <div className="text-white/70 text-sm my-4">
                  <p className="my-2">Be among the first to access institutional-grade crypto investment opportunities. Our exclusive waitlist is now open for:</p>

                  <ul className="list-disc pl-5 ml-1 my-4">
                    <li>Early Community Members</li>
                    <li>Active $EAI Holders</li>
                  </ul>

                  <p className="mt-4">🔒 Waitlist Closes: January 31, 2025</p>
                </div>
              </div>
            </div>

            <div className="my-4 p-6 flex flex-col items-center bg-white/10 w-full border border-white/20 rounded-xl md:flex-row md:items-start">
              <Image src="/images/ribbon.png" alt="ribbon" width={64} height={64} className="h-16 w-16 md:mt-4" />
              
              <div className="md:pl-6">
                <h2 className="text-xl text-center mt-4 mb-2 md:text-left">Benefits of signing up early</h2>

                <div className="text-white/70 text-sm my-4">
                  <ul className="list-disc pl-5 ml-1 my-4">
                    <li>Priority access when the fund launches</li>
                    <li>Early information about TradeDividends</li>
                    <li>Exclusive insights from our institutional trading team</li>
                    <li>Special allocation opportunities</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 mb-8 w-full max-w-lg md:w-[40%] md:m-0">
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="px-6 bg-[url('/images/mbg2.png')] bg-[length:100%] bg-bottom bg-no-repeat w-full md:p-0 md:bg-none">
        <div className="py-20 px-8 bg-angled-gradient md:py-30 md:px-0 md:flex md:flex-col md:items-center">
          <h1 className="text-3xl text-white md:w-3/5 md:text-6xl">Coming Q1 2025</h1>

          <ul className="list-disc pl-5 ml-1 mt-4 text-base text-white/70 md:w-3/5 md:my-8">
            <li>Full fund details and officer announcements</li>
            <li>TradeDividends program specifics</li>
            <li>Institutional partnership roadmap</li>
            <li>Regulatory framework overview</li>
          </ul>
        </div>

        <footer className="mt-28 flex flex-col border-t border-white/20 items-center md:w-3/5 md:mx-auto md:mt-8 md:flex-row md:items-center md:justify-between md:py-8">
          <Image src="/images/full-logo.png" alt="big logo" width={176} height={50} className="my-8 w-3/5 h-auto md:w-2/12 md:m-0" />

          <p className="text-white/70 text-center">Copyright © 2024 Eagle AI</p>

          <div className="flex flex-row space-x-8 my-8 md:space-x-6 md:m-0">
            <Link href="/">
              <Image src="/images/tg.svg" alt="tg" width={32} height={32} className="w-8 h-8 transition-all hover:brightness-200 hover:contrast-200 focus:brightness-200 focus:contrast-200" />
            </Link>
            <Link href="/">
              <Image src="/images/x.svg" alt="x" width={32} height={32} className="w-8 h-8 transition-all hover:brightness-200 hover:contrast-200 focus:brightness-200 focus:contrast-200" />
            </Link>
            <Link href="/">
              <Image src="/images/medium.svg" alt="medium" width={32} height={32} className="w-8 h-8 transition-all hover:brightness-200 hover:contrast-200 focus:brightness-200 focus:contrast-200" />
            </Link>
          </div>
        </footer>
      </section>
    </main>
  );
}
