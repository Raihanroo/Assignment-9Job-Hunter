import { parse } from "postcss";

const addData = (id) => {
    let myCart = {};

    const storeCart = localStorage.getItem('my-cart');
    if (storeCart) {
        myCart = JSON.parse(storeCart)

    }


    const quantity = myCart[id];
    if (quantity) {
        let newQuantity = quantity + 1;
        myCart[id] = newQuantity;
    } else {
        myCart[id] = 1;
    }


    localStorage.setItem('my-cart', JSON.stringify(myCart))
}

// get data from database

const getData = () => {
    let mycart = {};

    const storeCart = localStorage.getItem('my-cart');
    if (storeCart) {
        mycart =JSON.parse(storeCart)
    }

    return mycart;
}

// removeData base

const romoveData = (id) => {
    const storeCart = localStorage.getItem('my-cart');
    if (storeCart) {
        const myCart = JSON.parse(storeCart)
        if (id in myCart) {
            delete myCart[id]
            localStorage.setItem('my-cart', JSON.stringify(myCart))
        }
    }
}


const deleteAllData = () => {
    localStorage.removeItem('my-cart')
}

export { addData, getData, romoveData, deleteAllData }