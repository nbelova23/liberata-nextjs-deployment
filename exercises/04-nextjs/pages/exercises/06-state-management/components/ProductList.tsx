import { useCartStore } from '../../../../store/cartStore';

const products = [
  { id: 1, name: 'Product A' },
  { id: 2, name: 'Product B' },
  { id: 3, name: 'Product C' },
];

export default function ProductList() {
  const addItem = useCartStore((state) => state.addItem);

  return (
    <div className="mb-6">
      <h2 className="text-xl font-bold mb-4">Products</h2>

      <div className="space-y-2">
        {products.map((product) => (
          <div key={product.id} className="p-3 border flex justify-between">
            <span>{product.name}</span>

            <button
              onClick={() => addItem(product)}
              className="bg-blue-500 text-white px-3 py-1 rounded"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}