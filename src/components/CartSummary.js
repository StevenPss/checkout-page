import React from 'react'
import CartBackPackImage from '../static/photo1.png'
import CartShoesImage from '../static/photo2.png'
import Counter from './Counter'

function CartSummary() {
    return (
        <div className="flex flex-col md:order-1 md:h-3/5 md:ml-20 bg-gray-100 px-5 py-10 rounded-xl">
            <div className="flex mb-8">
                <div>
                    <img className="rounded-xl h-40" src={CartBackPackImage} alt="Backpack"/>
                </div>
                <div className="flex flex-col ml-4">
                    {/**name, price & quantity */}
                    <div className="flex flex-grow flex-col text-sm">
                        <h2 className="mb-2 font-bold text-xs">Vintage Backpack</h2>
                        <p><span className="text-yellow-500 font-bold">$54.99</span><span className="line-through text-xs pl-5 font-bold">$94.99</span></p>
                        
                    </div>{/**end of name, price & quantity */}
                    <Counter/>
                </div>
            </div>

            <div className="flex mb-8">
                <div>
                    <img className="rounded-xl h-40" src={CartShoesImage} alt="Backpack"/>
                </div>
                <div className="flex flex-col ml-4">
                    {/**name, price & quantity */}
                    <div className="flex flex-grow flex-col text-sm">
                        <h2 className="mb-2 font-bold text-xs">Levi Shoes</h2>
                        <p><span className="text-yellow-500 font-bold">$74.99</span><span className="line-through text-xs pl-5 font-bold">$124.99</span></p>
                        
                    </div>{/**end of name, price & quantity */}
                    <Counter/>
                </div>
            </div>

            <div className="flex flex-col font-bold mt-10">
                <hr/>
                <div className="flex justify-between py-2">
                    <h2>Shipping</h2>
                    <h5>$19</h5>
                </div>
                <hr/>
                <div className="flex justify-between py-2">
                    <h2>Total</h2>
                    <h5>$148.98</h5>
                </div>
            </div>
            
        </div>
    )
}

export default CartSummary