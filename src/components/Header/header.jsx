import pic1 from "./img/1.jpg";
import pic2 from "./img/2.jpg";
import pic3 from "./img/3.jpg";
import pic4 from "./img/4.jpg";
import pic5 from "./img/5.jpg";
import pic6 from "./img/6.jpg";
function HeaderReactShoppingCart() {
  return (
    <div>
      <h2 className="m-auto bg-slate-900 text-white h-10 flex justify-start items-center pl-5">
        React shoppin Cart
      </h2>
    </div>
  );
}

function Category() {
  return (
    <div className=" flex m-3 justify-between p-5">
      <p>6 Product</p>
      <div className=" ml-60">
        <label className="mr-5" htmlFor="order">Order</label>
        <select className="border" name="order" id="order">
          <option value="lowest">Lowest</option>
          <option value="highest">Highest</option>
        </select>
      </div>
      <div className=" ml-60">
        <label htmlFor="filter" className="mr-5">Filter</label>
        <select className="border" name="size" id="size">
          <option value="all">All</option>
          <option value="xs">XS</option>
          <option value="s">S</option>
          <option value="m">M</option>
          <option value="l">L</option>
          <option value="xl">Xl</option>
          <option value="xxl">XXl</option>
        </select>

      </div>
      <p>Cart is Empty</p>
    </div>
  );
}

function Card() {
  return (
    <div>
      <div className="card ">
        <img src={pic1} alt="" />
        <p>Frill mini dress in yellow polka dot</p>
        <div>
          <p>$10.9</p>
          <button className=" bg-amber-400">Add to cart</button>
        </div>
      </div>
    </div>
  );
}

function Cart() {
  return (
    <div>
      <p>cart is empty</p>
    </div>
  );
}

function header() {
  return (
    <div className="w-full">
      <HeaderReactShoppingCart />
      <Category />
      <div className="flex justify-center items-center mb-5">
        <hr className="bg-black w-full" />
        <hr className="bg-black w-40 ml-5" />
      </div>
      <Card />
      
    </div>
  );
}

export default header;
