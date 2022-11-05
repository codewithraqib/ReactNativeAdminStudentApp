import { atom, selector } from "recoil";

export const itemsState = atom({
  key: "itemsState",
  default: [
    { name: "Tea", price: 60, sku: 0 },
    { name: "Coffee", price: 80, sku: 1 },
  ],
});

export const cartState = atom({
  key: "cartState",
  default: [],
});

export const shippingState = atom({
  key: "shippingState",
  default: [
    { name: "1 day Delivery", price: 500, selected: false },
    { name: "3 day Delivery", price: 200, selected: false },
    { name: "7 day Delivery", price: 100, selected: false },
  ],
});

export const totalState = selector({
  key: "totalsState",
  get: ({ get }) => {
    const productsTotal = get(cartState);
    // const shippingTotal = get(shippingState);

    let subTotal = 0;
    let shipping = 0;
    productsTotal &&
      productsTotal.length > 0 &&
      productsTotal.map((val) => {
        subTotal = subTotal + (val.price * val.quantity || 1);
      });

    shipping = get(shippingState).filter((val) => val.selected);

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
  key: "aboutTabsState",
  default: [
    {
      id: 0,
      name: "Background of RCFC North II",
      active: true,
      data:
        "Background of RCFC North II Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    },
    {
      id: 1,
      name: "Establishment of RCFC North II",
      active: false,
      data:
        "Establishment of RCFC North II Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    },
    {
      id: 2,
      name: "Functions of RCFC North II",
      active: false,
      data:
        "Functions of RCFC North II Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    },
  ],
});

export const plantingDetailsTabsState = atom({
  key: "plantingDetailsTabsState",
  default: [
    {
      id: 0,
      name: "Herbal Gardens",
      active: true,
      data:
        "Herbal Gardens Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    },
    {
      id: 1,
      name: "Medicinal Plant Cultivators",
      active: false,
      data:
        "Medicinal Plant Cultivators Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    },
    {
      id: 2,
      name: "Medicinal Plant Sellers",
      active: false,
      data:
        "Medicinal Plant Sellers Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    },
    {
      id: 3,
      name: "Medicinal Plant Traders",
      active: false,
      data:
        "Medicinal Plant Traders Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    },
    {
      id: 4,
      name: "Medicinal Plant Buyers",
      active: false,
      data:
        "Medicinal Plant Buyers Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    },
    {
      id: 5,
      name: "Availability of Quality Planting Material and seed",
      active: false,
      data:
        "Availability of Quality Planting Material and seed Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    },
  ],
});

export const publicationsTabsState = atom({
  key: "publicationsTabsState",
  default: [
    {
      id: 0,
      name: "Pamphlets",
      active: true,
      link: "https://srdas.github.io/Papers/DSA_Book.pdf",
      data:
        "Pamphlets Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      id: 1,
      name: "Brochures",
      active: false,
      link: "https://scientistcafe.com/ids/IDS.pdf",
      data:
        "Brochures Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      id: 2,
      name: "Boooklets",
      active: false,
      link: "https://www.cs.cornell.edu/jeh/book.pdf",
      data:
        "Boooklets Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
  ],
});

export const galleryState = atom({
  key: "galleryState",
  default: [
    { src: "../images/slide1.jpeg", width: 1080, height: 780 },
    { src: "../images/slide3.jpeg", width: 720, height: 500 },
    { src: "../images/slide2.jpeg", width: 800, height: 780 },
    { src: "../images/slide3.jpeg", width: 1080, height: 600 },
    { src: "../images/slide4.jpeg", width: 680, height: 400 },
    { src: "../images/slide5.jpeg", width: 720, height: 460 },
    { src: "../images/slide1.jpeg", width: 1080, height: 700 },
    { src: "../images/slide2.jpeg", width: 680, height: 400 },
    { src: "../images/slide3.jpeg", width: 720, height: 500 },
    { src: "../images/slide1.jpeg", width: 1080, height: 700 },
    { src: "../images/slide3.jpeg", width: 1080, height: 600 },
  ],
});
