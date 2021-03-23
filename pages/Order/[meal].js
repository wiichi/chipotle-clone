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
    
    const por = [
        {name: 'CHICKEN', category: "", price: 7.35, cals: 180},
        {name: 'STEAK', category: "", price: 8.35, cals: 150},
        {name: 'BARBACOA', category: "", price: 8.35, cals: 170},
        {name: 'CARNITAS', category: "", price: 7.85, cals: 210},
        {name: 'SOFRITAS', category: "Plant-Based Protein", price: 7.35, cals: 150},
        {name: 'VEGGIE', category: "Plant-Based Protein", price: 7.35, cals: 20},
    ]

    const rice = [
        {name: 'WHITE RICE', price: 0, cals: 210},
        {name: 'BROWN RICE', price: 0, cals: 210},
        {name: 'CAULIFOWER RICE', price: 2, cals: 40},
    ]

    const beans = [
        {name: 'BLACK BEANS', price: 0, cals: 130},
        {name: 'PINTO BEANS', price: 0, cals: 130},
        {name: 'NO BEANS', price: 0, cals: 0},
    ]

    const ttf = [
        {name: 'GUACAMOLE', price: 0, cals: 230},
        {name: 'FRESH TOMATO SALSA', price: 0, cals: 25},
        {name: 'ROASTED CHILI-CORN SALSA', price: 0, cals: 80},
        {name: 'TOMATILLO-GREEN CHILI SALSA', price: 0, cals: 15},
        {name: 'TOMATILLO-RED CHILI SALSA', price: 0, cals: 30},
        {name: 'SOUR CREAM', price: 0, cals: 110},
        {name: 'FAJITA VEGGIES', price: 0, cals: 110},
        {name: 'ROMAINE LETTUCE', price: 0, cals: 5},
        {name: 'QUESO BLANCO', price: 0, cals: 120},
    ]

    const options = [
        {name: 'DOUBLE WRAP WITH TORTILLA', price: .25, cals: 320}
    ]

    const side = [
        {name: 'CHIPS', price: 1.50, cals: 540},
        {name: 'CHIPS & GUACAMOLE', price: 3.75, cals: 770},
    ]

    const drinks = [
        {name: 'ORGANIC LEMONADE', price: 2.40, cals: 110},
        {name: 'ORGANIC HIBISCUS LEMONADE', price: 2.40, cals: 110},
        {name: 'ORGANIC MANDARIN AGUA FRESCA', price: 2.40, cals: 110},
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
            <header className="fixed bg-white w-full z-10 h-16 px-2 flex justify-between items-center border-gray-300 border-b-2">
            <div className="flex">
                <div>
                    <Link href="/">
                        Chipotle
                    </Link>
                </div>

                <div className="text-yellow-700 px-4 border-gray-300 border-r-2"><Link href="/signin">SIGN IN</Link></div>
                <div className="font-bold text-yellow-700 px-4 hover:underline">
                    <Link href="/">
                        RETURN TO MENU
                    </Link>
                </div>
            </div>
            <div>
                <button><img src="/bag.svg"></img></button>
            </div>
            </header>

            <div className="flex flex-col px-8 lg:border-b-2 lg:w-3/6 mx-auto py-10">
                <div>Image</div>
                <div className="text-yellow-900 text-md uppercase font-bold">Build Your</div>
                <div className="text-yellow-900 pb-2 font-bold text-4xl">{meal}</div>
                <div className="text-yellow-900">Your choice of freshly grilled meat or sofritas wrapped in a warm flour torilla with rice, beans, or fajita veggies, and topped with guac, salsa, queso blanco, sour cream or cheese.</div>
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
                <div onClick={() => operations[ing](p,i)} className={`${selected(p) && `bg-yellow-800 text-white scale-95`} transform transition-all 1s relative flex justify-between items-center border-2 border-gray-200 py-8`}>
                    <div className="absolute">img</div>
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

           <div className="fixed w-full bottom-0 bg-gray-400 lg:py-5">
               <div className="lg:w-5/6 m-auto flex">
                <div className="hidden lg:block flex-grow">
                    <div>Your meal</div>
                    <div>Select a protein or veggie to get started</div>
                </div>
                <button className="sm:w-full sm:py-5 bg-yellow-800 lg:w-1/3 text-white font-bold text-lg">Add to cart</button>
               </div>
           </div>
        </main>
    )
}