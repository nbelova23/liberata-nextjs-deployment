import { useEffect } from 'react';
import { useCartStore } from '../../../../store/cartStore';

export default function Cart() {
  const items = useCartStore((state) => state.items);
  const removeItem = useCartStore((state) => state.removeItem);
  const clearCart = useCartStore((state) => state.clearCart);

  useEffect(() => {
    const stored = localStorage.getItem('cart');
    if (stored) {
      useCartStore.setState({ items: JSON.parse(stored) });
    }
  }, []);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Cart</h2>

      {items.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        <div className="space-y-2">
          {items.map((item, index) => (
            <div key={index} className="p-3 border flex justify-between">
              <span>{item.name}</span>

              <button
                onClick={() => removeItem(item.id)}
                className="bg-red-500 text-white px-2 py-1 rounded"
              >
                Remove
              </button>
            </div>
          ))}

          <button
            onClick={clearCart}
            className="bg-gray-500 text-white px-3 py-1 mt-4 rounded"
          >
            Clear Cart
          </button>
        </div>
      )}
    </div>
  );
}