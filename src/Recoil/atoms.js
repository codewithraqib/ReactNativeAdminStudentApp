import {atom, selector} from 'recoil';

export const itemsState = atom({
  key: 'itemsState',
  default: [
    {name: 'Tea', price: 60, sku: 0},
    {name: 'Coffee', price: 80, sku: 1},
  ],
});

export const cartState = atom({
  key: 'cartState',
  default: [],
});

export const shippingState = atom({
  key: 'shippingState',
  default: [
    {name: '1 day Delivery', price: 500, selected: false},
    {name: '3 day Delivery', price: 200, selected: false},
    {name: '7 day Delivery', price: 100, selected: false},
  ],
});

export const totalState = selector({
  key: 'totalsState',
  get: ({get}) => {
    const productsTotal = get(cartState);
    // const shippingTotal = get(shippingState);

    let subTotal = 0;
    let shipping = 0;
    productsTotal &&
      productsTotal.length > 0 &&
      productsTotal.map(val => {
        subTotal = subTotal + (val.price * val.quantity || 1);
      });

    shipping = get(shippingState).filter(val => val.selected);

    return {
      subTotal,
      shipping: shipping && shipping.length > 0 && shipping[0].price,
      total:
        shipping && shipping.length > 0
          ? shipping[0].price + subTotal
          : 0 + subTotal,
    };
  },
});

export const aboutTabsState = atom({
  key: 'aboutTabsState',
  default: [
    {
      id: 0,
      name: 'Background of RCFC North II',
      active: true,
      data:
        "Background of RCFC North II Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    },
    {
      id: 1,
      name: 'Establishment of RCFC North II',
      active: false,
      data:
        "Establishment of RCFC North II Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    },
    {
      id: 2,
      name: 'Functions of RCFC North II',
      active: false,
      data:
        "Functions of RCFC North II Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    },
  ],
});
