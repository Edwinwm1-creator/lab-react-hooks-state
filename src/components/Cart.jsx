function Cart({ items }) {
  return (
    <div>
      <h2>Shopping Cart</h2>
      {items.map((item, index) => (
       
        <p key={index}>{item} is in your cart.</p>
      ))}
    </div>
  );
}
export default Cart