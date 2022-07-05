function bundlediscount(cartItems) {
    let bundleDcount = 0;
    let t = (cartItems.filter((item) => item.code === 'TermSheet'));
    if (t.length === 0) {
        t = [{ qty: 0 }];
    };

    let t_count = t[0].qty;

    if (t_count >= 3) {
        bundleDcount = (t_count * cartItems.find((c) => c.code === 'TermSheet').price) - (t_count * 100);

    };
    return bundleDcount;
}

function halfdiscount(cartItems) {

    let halfPriceDcount = 0;

    let b = [{ qty: 0 }]
    let b_count = 0;
    let c = 0;


    if (cartItems.length !== 0) {
        b.splice(0, 1);
        b = (cartItems.filter((item) => item.code === 'Nda'));
        if (b.length === 0) {
            b = [{ qty: 0 }];
        }
        b_count = b[0].qty;
        c = b_count % 2;
    };
    if ((b_count >= 2) && (cartItems.length !== 0)) {
        halfPriceDcount = (b_count - c) * cartItems.find((c) => c.code === 'Nda').price * 0.5;
    } else {
        halfPriceDcount = 0;
    };

    return halfPriceDcount

}

export { bundlediscount, halfdiscount };