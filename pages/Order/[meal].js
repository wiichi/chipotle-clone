import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default() => {
    const router = useRouter()
    const { meal } = router.query
    const [ burrito, setBurrito ] = useState({ name: 'burrito', ingredients: []});
    const [ errormessage, setErrorMessage ] = useState({index: null, message: null})
    const operations = {
        "PROTEIN OR VEGGIE": (p, i) => addIngredient(p, i),
        "RICE": (p, i) => addIngredient(p, i),
        "BEANS": (p, i) => addIngredient(p, i),
        "TOP THINGS OFF": (p, i) => addIngredient(p, i),
        "OPTIONS": (p, i) => addIngredient(p, i),
        "SIDE": (p, i) => addIngredient(p, i),
        "DRINKS": (p, i) => addIngredient(p, i),
        }
    const img = () => {
        console.log(meal)
        if(meal == 'Burrito'){
            return '/burrito.png'
        }
        if(meal == 'Bowl'){
            return '/bowl.jpg'
        } 
        if(meal == 'Lifestyle'){
            return '/lifestyle.png'
        }
        if(meal == 'Quesadilla'){
            return '/order.jpg'
        }
        if(meal == 'Salad'){
            return '/salad.jpg'
        }
        if(meal == 'Tacos'){
            return '/tacos.jpg'
        }
        if(meal == 'Sides'){
            return '/chips-quac.jpg'
        }
    }
    
    const por = [
        {name: 'CHICKEN', category: "", price: 7.35, cals: 180, img: '/chicken.png'},
        {name: 'STEAK', category: "", price: 8.35, cals: 150, img: '/steak.png'},
        {name: 'BARBACOA', category: "", price: 8.35, cals: 170, img: "/barbacoa.png"},
        {name: 'CARNITAS', category: "", price: 7.85, cals: 210, img: "/carnitas.png"},
        {name: 'SOFRITAS', category: "Plant-Based Protein", price: 7.35, cals: 150, img: "/sofritas.png"},
        {name: 'VEGGIE', category: "Plant-Based Protein", price: 7.35, cals: 20, img: "/veggie.png"},
    ]

    const rice = [
        {name: 'WHITE RICE', price: 0, cals: 210, img: '/wrice.png'},
        {name: 'BROWN RICE', price: 0, cals: 210, img: '/brice.png'},
        {name: 'CAULIFOWER RICE', price: 2, cals: 40, img: '/crice.png'},
    ]

    const beans = [
        {name: 'BLACK BEANS', price: 0, cals: 130, img: '/bbeans.png'},
        {name: 'PINTO BEANS', price: 0, cals: 130, img: '/pbeans.png'},
        {name: 'NO BEANS', price: 0, cals: 0, img: ''},
    ]

    const ttf = [
        {name: 'GUACAMOLE', price: 0, cals: 230, img: '/guacamole.png'},
        {name: 'FRESH TOMATO SALSA', price: 0, cals: 25, img: '/freshtomatosalsa.png'},
        {name: 'ROASTED CHILI-CORN SALSA', price: 0, cals: 80, img: '/roastedchilicornsalsa.png'},
        {name: 'TOMATILLO-GREEN CHILI SALSA', price: 0, cals: 15, img: '/tomatillogreenchilisalsa.png'},
        {name: 'TOMATILLO-RED CHILI SALSA', price: 0, cals: 30, img: '/tomatilloredchilisalsa.png'},
        {name: 'SOUR CREAM', price: 0, cals: 110, img: '/sourcream.png'},
        {name: 'FAJITA VEGGIES', price: 0, cals: 110, img: '/fajitaveggies.png'},
        {name: 'ROMAINE LETTUCE', price: 0, cals: 5, img: '/romainelettuce.png'},
        {name: 'QUESO BLANCO', price: 0, cals: 120, img: '/quesoblanco.png'},
    ]

    const options = [
        {name: 'DOUBLE WRAP WITH TORTILLA', price: .25, cals: 320, img: '/doublewrap.jpg'}
    ]

    const side = [
        {name: 'CHIPS', price: 1.50, cals: 540, img: '/chips.png'},
        {name: 'CHIPS & GUACAMOLE', price: 3.75, cals: 770, img: '/chipsguacamole.png'},
    ]

    const drinks = [
        {name: 'ORGANIC LEMONADE', price: 2.40, cals: 110, img: '/lemonade.png'},
        {name: 'ORGANIC HIBISCUS LEMONADE', price: 2.40, cals: 110, img: '/hlemonade.png'},
        {name: 'ORGANIC MANDARIN AGUA FRESCA', price: 2.40, cals: 110, img: '/aguafresca.png'},
    ]
    const ingredients = {
        "PROTEIN OR VEGGIE": por,
        "RICE": rice,
        "BEANS": beans,
        "TOP THINGS OFF": ttf,
        "OPTIONS": options,
        "SIDE": side,
        'DRINKS': drinks
    }

    const addIngredient = (p, i) => {
        let found = burrito.ingredients.find(e => e.name == p.name)
        console.log('found', found)
        console.log(p)
        let add = () => found
        ? setBurrito({ ...burrito, ingredients: burrito.ingredients.filter(i => i.name != p.name) })
        : setBurrito({ ...burrito, ingredients: burrito.ingredients = [...burrito.ingredients, p]})
        let veggieSelected = burrito.ingredients.some(el => el.name == 'VEGGIE')

        if(p.name == "VEGGIE"){
            if(veggieSelected){
                add()
                return
            }
            if(burrito.ingredients.length > 0){
                console.log('cant mix with veggies')
                setErrorMessage({index: i, message: "You can't mix veggies"})
                setTimeout(() => setErrorMessage(""), 1000)
                return
            }
            add()
            return
        } else {
            if(veggieSelected){
                console.log("Cant mix with veggies")
                setErrorMessage({index: i, message:"You can't mix veggies"})
                setTimeout(() => setErrorMessage(""), 1000)
                return
            }
            add()
            console.log(burrito)
            return
        }

        }
    

    const selected = (p) => {
        // console.log(burrito.ingredients.indexOf(p))
        return burrito.ingredients.find(e => e.name == p.name)
    }

    return(
        <main>
            <header className="fixed bg-white w-full z-10 h-16 lg:h-24 px-2 flex justify-between items-center border-gray-300 border-b-2">
            <div className="flex flex-grow items-center">
                <div>
                    <Link href="/">
                      <img className="h-14" src="/logo.svg"></img>
                    </Link>
                </div>

                <div className="text-yellow-700 px-4 border-gray-300 border-r-2"><Link href="/signin">SIGN IN</Link></div>
                <div className="font-bold text-yellow-700 px-4 hover:underline">
                    <Link href="/">
                        RETURN TO MENU
                    </Link>
                </div>
            </div>
            <div className="flex-grow-0">
                <button><img className="" src="/bag.svg"></img></button>
            </div>
            </header>

            <div className="flex flex-col lg:flex-row px-8 lg:border-b-2 lg:w-4/6 mx-auto pt-40 pb-10">
                <div className="w-2/3 mx-auto lg:mx-0"><img src={img()}></img></div>
                <div>
                    <div className="text-yellow-900 text-md uppercase font-bold">Build Your</div>
                    <div className="text-yellow-900 pb-2 font-bold text-4xl">{meal}</div>
                    <div className="text-yellow-900">Your choice of freshly grilled meat or sofritas wrapped in a warm flour torilla with rice, beans, or fajita veggies, and topped with guac, salsa, queso blanco, sour cream or cheese.</div>
                </div>
            </div>

            {Object.keys(ingredients).map(ing => (<>     
            <div className="bg-yellow-50 border-t-2 border-b-2 border-gray-200 lg:bg-transparent lg:w-4/6 lg:mx-auto lg:border-none py-5 font-bold text-yellow-900 text-xl">
                {ing}
            </div>
            <div className="lg:w-5/6 text-yellow-700 mx-auto px-5 sm:hidden md:hidden">
                Choose up to two
            </div>

            <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-5 lg:w-4/6 mx-auto">
            {ingredients[ing].map((p, i) => (
                <div onClick={() => operations[ing](p,i)} className={`${selected(p) && `bg-yellow-800 text-white scale-95`} overflow-hidden transform transition-all 1s relative flex justify-between items-center border-2 border-gray-200 py-8`}>
                    <div className="absolute transform -translate-x-10"><img className="h-28" src={p.img}></img></div>
                    <div className="ml-16 flex flex-col">
                        <div className={`${selected(p) ? 'text-white' : 'text-yellow-900'} font-bold`}>{p.name}</div>
                        <div className={`text-yellow-800`}>{p.category}</div>
                        <div className={`flex gap-5 text-yellow-600 font-bold`}>
                            <div>${p.price}</div>
                            <div>{p.cals} cal</div>
                        </div>
                    </div>
                    
                    {errormessage.message && errormessage.index == i && <div className="bg-yellow-800 p-2 text-white w-44 text-center lg:absolute lg:left-1/2 lg:-translate-x-2/4 transform">
                        {errormessage.message}
                    </div>}
                    <div className="transform rotate-90 text-4xl text-gray-500 h-5">...</div>
                </div>
            ))} 
            </div>
           </>))}

           <div className="fixed w-full bottom-0 bg-gray-100 lg:py-5">
               <div className="lg:w-5/6 m-auto flex">
                <div className="hidden lg:block flex-grow">
                    <div className="uppercase font-bold">Your meal</div>
                    <div>Select a protein or veggie to get started</div>
                </div>
                <button className="sm:w-full sm:py-5 bg-yellow-800 lg:w-1/3 text-white font-bold text-lg uppercase">Add to cart</button>
               </div>
           </div>
        </main>
    )
}