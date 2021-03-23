import Link from 'next/link';

export default() => {
    var burrito = {por: [], rice: "", beans: "", tto: "", options: "", side: "", drinks: ""}
    const por = [
        {name: 'CHICKEN', category: "Plant-Based Protein", price: 7.35, cals: 180},
        {name: 'STEAK', category: "Plant-Based Protein", price: 8.35, cals: 150},
        {name: 'BARBACOA', category: "Plant-Based Protein", price: 8.35, cals: 170},
        {name: 'CARNITAS', category: "Plant-Based Protein", price: 7.85, cals: 210},
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

    return(
        <main>
            <header className="h-16 px-2 flex justify-between items-center border-gray-300 border-b-2">
            <div className="flex">
                <div>
                    <Link href="/">
                        Chipotle
                    </Link>
                </div>

                <div className="text-yellow-700 px-4 border-gray-300 border-r-2"><Link href="/signin">SIGN IN</Link></div>
                <div className="font-bold text-yellow-700 px-4">
                    <Link href="/">
                        RETURN TO MENU
                    </Link>
                </div>
            </div>
            <div>
                <button>Cart</button>
            </div>
            </header>

            <div className="flex flex-col px-8 border-b-2 pb-10 w-2/3 mx-auto">
                <div>Image</div>
                <div className="text-yellow-900 text-md uppercase font-bold">Build Your</div>
                <div className="text-yellow-900 pb-2 font-bold text-4xl">BURRITO</div>
                <div className="text-yellow-900">Your choice of freshly grilled meat or sofritas wrapped in a warm flour torilla with rice, beans, or fajita veggies, and topped with guac, salsa, queso blanco, sour cream or cheese.</div>
            </div>

            {Object.keys(ingredients).map(i => (<>     
            <div className="mt-5 bg-yellow-50 border-t-2 border-b-2 border-gray-200 lg:bg-transparent lg:w-2/3 lg:mx-auto lg:border-none p-5 font-bold text-yellow-900 text-xl">
                {i}
            </div>
            <div className="w-2/3 text-yellow-700 mx-auto px-5 sm:hidden md:hidden">
                Choose up to two
            </div>

            <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-5 lg:px-72">
            {ingredients[i].map(p => (
                <div className="transform hover:scale-95 transition-all 1s relative flex justify-between items-center border-2 border-gray-200 py-8">
                    <div className="absolute">img</div>
                    <div className="ml-16 flex flex-col">
                        <div className="font-bold text-yellow-900">{p.name}</div>
                        <div className="text-yellow-800">Plant-Based Protein</div>
                        <div className="flex gap-5 text-yellow-800">
                            <div>${p.price}</div>
                            <div>{p.cals} cal</div>
                        </div>
                    </div>
                    <div className="transform rotate-90 text-4xl text-gray-500">...</div>
                </div>
            ))}
                
            </div>
           </>))}
        </main>
    )
}