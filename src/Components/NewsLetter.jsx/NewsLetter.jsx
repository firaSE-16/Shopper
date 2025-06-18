import React from 'react'

const NewsLetter = () => {
  return (
    <div className="h-100 flex flex-col mx-32 mt-16 bg-gradient-to-b from-purple-200 to-slate-50 justify-around items-center p-4 gap-8 pb-16">
          
            <h1 className="mt-10 text-3xl md:text-2xl lg:text-6xl font-semibold text-slate-600 text-center  ">
              Get Exclusive Offers On Your Email
            </h1>
            <p className="mt-6 text-2xl">
              Only On Best Seller Product
            </p>
            <div className="relative w-[70%] mx-auto mt-6">
  <input
    className="w-full h-16 rounded-full pl-6 pr-36 text-lg border-[1.4px] border-slate-300 text-slate-900"
    type="email"
    placeholder="Your Email Id"
  />
  <button className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-black text-white text-xl px-12 py-5 rounded-full hover:bg-slate-800 transition duration-300">
    Subscribe
  </button>
</div>
          
        
        </div>
  )
}

export default NewsLetter