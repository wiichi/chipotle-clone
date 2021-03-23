import Link from 'next/link';

export default () => {

    return(
        <main className="min-h-screen bg-gray-200">
            <div className="flex justify-end px-5 py-5 text-3xl text-yellow-700 font-bold">
                <Link href="/">X</Link>
            </div>
            <form className="flex flex-col items-center w-1/2 m-auto">
                <div className="text-yellow-800 font-bold text-3xl">SIGN IN</div>

                <div className="relative w-full">
                    <label className="absolute top-8 text-gray-500 text-lg">Email</label>
                    <input className="bg-transparent border-black border-b-2 py-5 w-full"></input>
                </div>
                <div className="relative w-full">
                    <label className="absolute top-8 text-gray-500 text-lg">Password</label>
                    <input className="bg-transparent border-black border-b-2 py-5 w-full"></input>
                </div>
                <div className="flex w-full justify-between py-4">
                    <div>
                        <input type="checkbox" className="bg-green-600"></input> Remember me
                    </div>
                    <div>
                        Forgot Password?
                    </div>
                </div>
                <button className="transform hover:scale-90 transition-all 1s text-white font-bold text-2xl p-3 bg-yellow-900 w-full">SIGN IN</button>
            </form>

            <div className="border-b-2 w-full py-2"></div>
        </main>
    )
}