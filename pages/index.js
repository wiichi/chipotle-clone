import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link';

export default function Home() {
  const meals = [
    {name: "BURRITO", link: '/Burrito', img: "/burrito.png"},
    {name: "BURRITO BOWL", link: '/Bowl', img: "/bowl.jpg"},
    {name: "LIFESTYLE BOWL", link: '/Lifestyle', img: "/lifestyle.png"},
    {name: "QUESADILLA", link: '/Quesadilla', img: "/order.jpg"},
    {name: "SALAD", link: '/Salad', img: "/salad.jpg"},
    {name: "TACOS", link: '/Tacos', img: "/tacos.jpg"},
    {name: "SIDES & DRINKS", link: '/Sides', img: "/chips-quac.jpg"},
  ]
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <header className="fixed z-20 bg-white w-full border-b-2 h-16 lg:h-24 px-2 flex justify-between items-center bg-banner-video">
          <div className="flex flex-grow-0 items-center">
            <div className="flex items-center">
              <img className="-16" src="/logo.svg"></img>
            </div>

            <div className="ml-4 w-44 flex items-center">
              <img src="user-outline.svg"></img>
              <Link href="/signin">SIGN IN</Link>
            </div>
          </div>

          <div className="flex flex-grow items-center justify-center w-full">
            <div className="hidden lg:block font-bold text-yellow-800 text-2xl px-2 uppercase">Order</div>
            <div className="hidden lg:block font-bold text-yellow-800 text-2xl px-2 uppercase">Catering</div>
            <div className="hidden lg:block font-bold text-yellow-800 text-2xl px-2 uppercase">Rewards</div>
            <div className="hidden lg:block font-bold text-yellow-800 text-2xl px-2 uppercase">Our values</div>
            <div className="hidden lg:block font-bold text-yellow-800 text-2xl px-2 uppercase">Nutrition</div>
            <input type="text" className="border-gray-400 border-2 rounded-full p-2"></input>
          </div>

          <div className="flex-grow-0">
            <button><img className="" src="bag.svg"></img></button>
          </div>
      </header>

      <main className="mt-16">
        <div className="relative h-full">

          <div id="banner" className="relative h-96 lg:h-600 overflow-hidden bg-banner-video text-white font-bold mx-auto flex flex-col items-center justify-end">
            <video id='video' className="absolute top-0 lg:top-8 z-0" autoPlay loop >
              <source src="/ques.mp4" type="video/mp4"></source>
            </video>
            <div className="top-10 absolute bg-gradient-to-b from-transparent to-gray-900 w-full h-full">
            
            </div>
            <div className="text-3xl text-center"><span className="underline">New</span> HAND-CRAFTED</div>
            <div className="text-lg text-center z-10">A whole new way to Chipotle paired with your favorite salsas and sides for pickup or delivery.</div>
            <div className="pt-4 w-3/6 z-10">
              <button className="p-5 transform hover:scale-95 transition-all 1s text-white font-bold text-lg bg-red-600 w-full">ORDER NOW</button>
            </div>
            <div className="text-sm pb-9 pt-3 z-10 lg:mb-24">Not available to order in-restaurant.</div>
          </div>

        </div>

        <div className="border-b-2 bg-white py-5 px-20 flex flex-col md:flex-row justify-between items-center">
            <div className="text-xl font-bold text-yellow-900 uppercase">Join Chipotle Rewards. Unwrap Some Free Chipotle.</div>
            <div className="flex items-center">
                <div className="transform hover:scale-90 border-2 transition-all 1s border-yellow-900 text-yellow-900 p-1 uppercase font-bold w-48 text-center">Create an account</div>
                <div className="font-bold mx-1 w-10 text-center">OR</div>
                <div className="text-yellow-700 font-bold underline w-16 text-center">
                  <Link href="/signin">SIGN IN</Link>
                </div>
            </div>
        </div>

            <div className="bg-white grid lg:grid-cols-3 grid-cols-1 gap-y-36 py-14 px-56">
                {meals.map(m => (
                  <Link href={`/Order${m.link}`}>
                    <div className="h-36 flex lg:flex-col items-center transform hover:scale-90 justify-center">
                        <div className="flex-shrink-0"><img className="w-72" src={m.img}></img></div>
                          <div className="font-bold text-3xl text-yellow-700">{m.name}</div>
                      </div>
                  </Link>
                ))}
            </div>
      </main>

      <footer className="bg-yellow-900 text-white">
        <div className="w-2/3 mx-auto flex flex-col lg:flex-row gap-4 lg:gap-32 font-bold py-5">
          <div>CONTACT SUPPORT</div>
          <div>CAREERS</div>
          <div>GOODS & GIFT CARDS</div>
          <div>FUNDRAISING</div>
        </div>

        <div className="mx-auto w-2/3">
          <div className="font-bold text-gray-300">
            About
          </div>
          <div className="grid grid-cols-2">
            <div>
              <div>Our Values</div>
              <div>Investors</div>
              <div>Cultivate Foundation</div>
              <div>All Locations</div>
              <div>Do not sell my information</div>
            </div>
            <div>
              <div>News and Events</div>
              <div>Health and Safety</div>
              <div>Pizzeria Locale</div>
              <div>Sustainability</div>
            </div>
          </div>
        </div>

        <div>

        </div>
      </footer>
    </div>
  )
}
