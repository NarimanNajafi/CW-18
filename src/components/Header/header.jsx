
import React from 'react';

function HeaderReactShoppingCart() {
    return (
        <div>
            <h2 className=" container m-auto bg-slate-900 text-white h-10 ">React shoppin Cart</h2>
        </div>

    )
}

function Category() {
    return (
        <div className=' flex m-3'>
            <p>6 Product</p>
            <div className=' ml-60'>
                <label htmlFor="order">Order</label>
                <select name="order" id="order">
                    <option value="lowest">Lowest</option>
                    <option value="highest">Highest</option>
                </select>
            </div>
            <div className=' ml-60'>
                <label htmlFor="filter">Filter</label>
                <select name="size" id="size">
                    <option value="all">All</option>
                    <option value="xs">XS</option>
                    <option value="s">S</option>
                    <option value="m">M</option>
                    <option value="l">L</option>
                    <option value="xl">Xl</option>
                    <option value="xxl">XXl</option>
                </select>
            </div>
        </div>
    )

}

function Card() {
    return (
        <div>
            <div className="card">
                <img src="" alt="" />
                <p>Frill mini dress in yellow polka dot</p>
                <div>
                    <p>$10.9</p>
                    <button className=" bg-amber-400">Add to cart</button>
                </div>
            </div>
            <div className="cart">
                <img src="" alt="" />
                <p>Midi sundress with ruched front</p>
                <div>
                    <p>$18.9</p>
                    <button className=" bg-amber-400">Add to cart</button>
                </div>
            </div>
            <div className="cart">
                <img src="" alt="" />
                <p>cami maxi dress in polka dot</p>
                <div>
                    <p>$25.9</p>
                    <button className=" bg-amber-400">Add to cart</button>
                </div>
            </div>
            <div className="cart">
                <img src="" alt="" />
                <p>Midi sundress with shirring detail</p>
                <div>
                    <p>$29.9</p>
                    <button className=" bg-amber-400">Add to cart</button>
                </div>
            </div>
            <div className="cart">
                <img src="" alt="" />
                <p>Midi tea dress in blue and red spot</p>
                <div>
                    <p>$49.9</p>
                    <button className=" bg-amber-400">Add to cart</button>
                </div>
            </div>
            <div className="cart">
                <img src="" alt="" />
                <p>Frill mini dress in yellow polka dot</p>
                <div>
                    <p>$10.9</p>
                    <button className=" bg-amber-400">Add to cart</button>
                </div>
            </div>
        </div>
    )
}

function Cart() {
    return (
        <div>
            <p>cart is empty</p>
        </div>
    )

}

function header() {
    return (
        <div>
            <HeaderReactShoppingCart/>
            <Category/>
            <Card/>
            <Cart/>
            
        </div>
    )
}

export default header