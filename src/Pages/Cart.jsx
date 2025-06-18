import React from 'react'

const Cart = () => {
  return (
    <div className="flex flex-col justify-center text-[130%]">
      <table className="table-auto w-[100%] border-collapse  text-left my-16 mx-36">
        <thead className="">
          <tr className="border-b-3 ">
            <th className="px-4 py-2">Products</th>
            <th className="px-4 py-2">Title</th>
            <th className="px-4 py-2">Price</th>
            <th className="px-4 py-2">Quantity</th>
            <th className="px-4 py-2">Total</th>
            <th className="px-4 py-2">Remove</th>
          </tr>
        </thead>
        <tbody>
          {/* Example Rows */}
          <tr className="border-b hover:bg-gray-100">
            <td className="px-4 py-2">Product 1</td>
            <td className="px-4 py-2">Title 1</td>
            <td className="px-4 py-2">$10.00</td>
            <td className="px-4 py-2">2</td>
            <td className="px-4 py-2">$20.00</td>
            <td className="px-4 py-2 text-red-500 cursor-pointer">Remove</td>
          </tr>
        </tbody>
      </table>
      <div className="flex items-center justify-between">
        <div className="flex flex-col justify-center items-center">
          {" "}
          <table className="table-auto w-[30%] border-collapse  text-left my-16 mx-36">
            <tr className="border-b-3 ">
              <td className="px-4 py-2">Subtotals</td>
              <td className="px-4 py-2">${85}</td>
            </tr>

            {/* Example Rows */}
            <tr className="border-b ">
              <td className="px-4 py-2">Shipping Fee</td>

              <td className="px-4 py-2">Free</td>
            </tr>
            <tr className="border-b ">
              <th className="px-4 py-2">Total</th>

              <td className="px-4 py-2">${85}</td>
            </tr>
          </table>
          <button className="my-10 w-64  bg-red-500 py-4 px-12 rounded-md text-white font-semibold backdrop-brightness-200">
            ADD TO CART
          </button>
        </div>
        <div className="w-[50%] flex flex-col items-end px-10">
          <p>If you have a promo code, Enter it here</p>
          <div className="relative flex w-[50%] justify-end">
            <input
              className="rounded-md w-full bg-stone-100 py-4 pl-5 pr-24"
              type="text"
              placeholder="promo code"
            />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black text-white px-5 py-2 rounded-md">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart