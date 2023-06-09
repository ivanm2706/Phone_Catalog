import React from 'react';
import { Product } from '../../helpers/types/Product';

type Props = {
  product: {
    amount: number;
    item: Product;
  },
  onRemove: (deleteProduct: Product) => void,
  onChangeAmount: (id: string, offer: string) => void,
};

export const CardInfoInCart: React.FC<Props> = ({
  product,
  onRemove,
  onChangeAmount,
}) => {
  const hendlerRemove = () => onRemove(product.item);
  const hendlerDecr = () => {
    onChangeAmount(product.item.id, 'decr');
  };

  const hendlerIncr = () => {
    if (product.amount === 1) {
      hendlerRemove();
    } else {
      onChangeAmount(product.item.id, 'incr');
    }
  };

  return (
    <>
      {/* eslint-disable-next-line */}
      <button
        onClick={hendlerRemove}
        type="button"
        className="cart__buttonCross"
        data-cy="cartDeleteButton"
      />
      <img
        src={product.item.imageUrl}
        alt={product.item.id}
        className="cart__image"
      />
      <p className="cart__title">{product.item.name}</p>
      <div className="cart__changeAmount">
        {/* eslint-disable-next-line */}
        <button
          type="button"
          className="icon icon--minus cart__button"
          onClick={hendlerIncr}
          disabled={product.amount === 0}
        />
        <p
          className="cart__amount"
          data-cy="productQauntity"
        >
          {product.amount}
        </p>
        {/* eslint-disable-next-line */}
        <button
          type="button"
          className="icon icon--plus cart__button"
          onClick={hendlerDecr}
        />
      </div>
      <p className="cart__price">{`$${product.item.price}`}</p>
    </>
  );
};
