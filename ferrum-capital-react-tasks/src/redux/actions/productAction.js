export function loadAction(products) {
  return {
    type: "PRODUCTS/GET_PRODUCTS",
    payload: products,
  };
}

export function addAction(productTitle) {
  return {
    type: "PRODUCTS/ADD_PRODUCTS",
    payload: productTitle,
  };
}

export function loadAsyncAction() {
  return function (dispatch) {
    var products = [
      {
        id: 1,
        image:
          "https://kontakt.az/resize/display?url=https%3A%2F%2Fkontakt.az%2Fresize%2Fdisplay%2Fresize%2F250x250%2Fwhite.png%3Fop%3Dop%3Aflat%2Bpath%3Amedia%2Fcatalog%2Fproduct%2Fn%2Fe%2Fnew_project_-_2022-02-24t141057.080.png%2Bpos%3A0.0.100.100&op=resize&fmt=webp",
        name: "Vivo Y31 4GB/64GB Ocean Blue",
        price: 499.99,
      },
      {
        id: 2,
        image:
          "https://kontakt.az/resize/display?url=https%3A%2F%2Fkontakt.az%2Fresize%2Fdisplay%2Fresize%2F250x250%2Fwhite.png%3Fop%3Dop%3Aflat%2Bpath%3Amedia%2Fcatalog%2Fproduct%2Fx%2Fi%2Fxiaomi-redmi-note-11s-1_1_1__1.png%2Bpos%3A0.0.100.100&op=resize&fmt=webp",
        name: "Xiaomi Redmi Note 11S 6/128 GB Graphite Gray",
        price: 699.99,
      },
      {
        id: 3,
        image:
          "https://kontakt.az/resize/display?url=https%3A%2F%2Fkontakt.az%2Fresize%2Fdisplay%2Fresize%2F250x250%2Fwhite.png%3Fop%3Dop%3Aflat%2Bpath%3Amedia%2Fcatalog%2Fproduct%2Fn%2Fe%2Fnew_project_-_2022-04-15t112012.131.png%2Bpos%3A0.0.100.100&op=resize&fmt=webp",
        name: "Samsung Galaxy A53 DS (SM-A536) 256GB 5G Blue",
        price: 1099.99,
      },
      {
        id: 4,
        image:
          "https://kontakt.az/resize/display?url=https%3A%2F%2Fkontakt.az%2Fresize%2Fdisplay%2Fresize%2F250x250%2Fwhite.png%3Fop%3Dop%3Aflat%2Bpath%3Amedia%2Fcatalog%2Fproduct%2Fs%2Ft%2Fstarry_blue_1__1.png%2Bpos%3A0.0.100.100&op=resize&fmt=webp",
        name: "HUAWEI Nova 9 8GB/128GB Starry Blue",
        price: 1349.99,
      },
    ];
    dispatch(loadAction(products));
  };
}

export function addAsyncAction(productTitle) {
  return function (dispatch) {
    
  };
}
