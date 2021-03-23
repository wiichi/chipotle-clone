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
      <header className="fixed z-10 bg-white w-full border-b-2 h-16 px-2 flex justify-between items-center bg-banner-video">
          <div className="flex items-center">
              <div>
                Chipotle
              </div>

          <div className="text-yellow-700 px-4 flex items-center">
            <img src="user-outline.svg"></img>
            <Link href="/signin">SIGN IN</Link>
          </div>
          </div>
          <div className="self-center">
            <input type="text" className="border-gray-400 border-2 rounded-full p-2"></input>
          </div>
          <div>
            <button><img src="bag.svg"></img></button>
          </div>
      </header>

      <main className="bg-yellow-800 flex-grow mt-16">
        <div className="relative bg-yellow-800 h-96">

          <div className="text-white font-bold mx-auto flex flex-col items-center justify-center h-full">
            <div className="py-5 text-lg">A whole new way to Chipotle paired with your favorite salsas and sides for pickup or delivery.</div>
            <div className="w-3/6">
              <button className="p-5 transform hover:scale-95 transition-all 1s text-white font-bold text-lg bg-red-600 w-full">ORDER NOW</button>
            </div>
            <div className="text-sm py-3">Not available to order in-restaurant.</div>
          </div>

        </div>

        <div className="border-b-2 bg-white py-5 lg:px-96 px-20 flex justify-between items-center">
            <div className="text-xl font-bold text-yellow-900 uppercase">Join Chipotle Rewards. Unwrap Some Free Chipotle.</div>
            <div className="flex items-center">
                <div className="transform hover:scale-90 border-2 transition-all 1s border-yellow-900 text-yellow-900 p-1 uppercase font-bold">Create an account</div>
                <div className="px-3 font-bold">OR</div>
                <div className="text-yellow-700 font-bold underline">
                  <Link href="/signin">SIGN IN</Link>
                </div>
            </div>
        </div>

            <div className="bg-white grid lg:grid-cols-3 grid-cols-1 gap-5 py-5 px-56">
                {meals.map(m => (
                  <Link href={`/Order${m.link}`}>
                    <div className="h-36 flex lg:flex-col items-center transform hover:scale-90 justify-end">
                        <div><img className="w-44" src={m.img}></img></div>
                          <div className="font-bold text-yellow-700">{m.name}</div>
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
