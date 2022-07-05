import React from 'react'
import { halfdiscount } from '../modules/discounts';
import { bundlediscount } from '../modules/discounts';

export default function Basket(props) {
    const { cartItems } = props;

    const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);

    let bundleDcount = bundlediscount(cartItems);
    let halfPriceDcount = halfdiscount(cartItems);

    const itemsDiscount = halfPriceDcount + bundleDcount;
    const taxPrice = (itemsPrice - itemsDiscount) * 0.16;
    const totalPrice = itemsPrice - bundleDcount - itemsDiscount + taxPrice;
    return (
        <aside className='block colored col-1'>
            <h2 className='checkout'>Actualización precio</h2>
            <div>
                {cartItems.length === 0 && <div>No has agregado nada aún!</div>}
            </div>
            {cartItems.map((item) => (
                <div key={item.code} className='row basket-item'>
                    <div className='col-2'>{item.qty + ' ' + item.name}
                    </div>
                    <div className='col-1 text-right'>${item.price.toFixed(2) + ' MXN'}</div>
                </div>
            ))}
            {cartItems.length !== 0 && (
                <>
                    <hr></hr>
                    <div className='row basket-item'>
                        <div className='col-2'>Subtotal</div>
                        <div className='col-1 text-right'>${itemsPrice.toFixed(2) + ' MXN'}</div>
                    </div>
                    <div className='row basket-item text-highlight '>
                        <div className='col-2'>Descuento</div>
                        <div className='col-1 text-right'>${itemsDiscount.toFixed(2) + ' MXN'}</div>
                    </div>
                    <div className='row basket-item'>
                        <div className='col-2'>IVA</div>
                        <div className='col-1 text-right'>${taxPrice.toFixed(2) + ' MXN'}</div>
                    </div>
                    <hr></hr>
                    <div className='row basket-item'>
                        <div className='col-2'>Total</div>
                        <div className='col-1 text-right'>${totalPrice.toFixed(2) + ' MXN'}</div>
                    </div>
                    <div className='row button'>
                        <button className='checkout-button' onClick={() => alert('Gracias por comprar!')}>
                            Continuar &#10152;
                        </button>
                    </div>
                </>
            )}
        </aside>
    )
}
