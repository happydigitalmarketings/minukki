export default function CartItem({item, onChangeQty, onRemove}){
  return (
    <div className="flex items-center gap-4 p-3 bg-white rounded shadow">
      <div className="w-20 h-20 bg-gray-100 flex items-center justify-center">
        {item.product.images?.[0] ? <img src={item.product.images[0]} alt={item.product.title} className="max-h-full" /> : <span className="text-gray-400">No Image</span>}
      </div>
      <div className="flex-1">
        <div className="font-semibold">{item.product.title}</div>
        <div className="text-sm text-gray-500">₹{item.price} x {item.qty} = ₹{item.price * item.qty}</div>
      </div>
      <div className="flex items-center gap-2">
        <input type="number" min="1" value={item.qty} onChange={e=>onChangeQty(Number(e.target.value))} className="w-16 border rounded px-2 py-1"/>
        <button onClick={onRemove} className="text-red-600">Remove</button>
      </div>
    </div>
  );
}
