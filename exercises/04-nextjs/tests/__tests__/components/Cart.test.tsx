import { render, screen, fireEvent } from '@testing-library/react';
import ProductList from '../../../pages/exercises/06-state-management/components/ProductList';
import Cart from '../../../pages/exercises/06-state-management/components/Cart';

test('adds item to cart when button is clicked', () => {
  render(
    <>
      <ProductList />
      <Cart />
    </>
  );

  // initially empty
  expect(screen.getByText('No items in cart')).toBeInTheDocument();

  // click "Add to Cart"
  const addButton = screen.getAllByText('Add to Cart')[0];
  fireEvent.click(addButton);

  // now item should appear
    expect(screen.getAllByText('Product A').length).toBeGreaterThan(1);
});
