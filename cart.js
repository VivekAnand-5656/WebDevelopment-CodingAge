let buyBtn = document.getElementById("buy");
let minus = document.getElementById("min");
let plus = document.getElementById("plus");
let nums = document.getElementById("nums");
let pn = document.getElementById("pId");
let price = document.getElementById("pr");
let qty = document.getElementById("qnty");
let data = document.getElementById("data");
// --------- Size ------
let size = document.getElementById("size");
let sizeM = document.getElementById("sizeM");
let sizeL = document.getElementById("sizeL");

let i = 1; 
plus.addEventListener("click", () => {
    i++;
    nums.textContent = i;
    price.textContent ="₹ "+ n * i;
})
minus.addEventListener("click", () => {

    if (i >= 1) {
        if (i == 1) {
            nums.textContent = 1;
            return;
        } else {
            i--;
            nums.textContent = i;
            price.textContent ="₹ "+ n * i;
        }
    }
})

let sizeArr = [size, sizeL, sizeM];
let slSize;
sizeArr.forEach(element => {
    element.addEventListener("click", () => {
        sizeArr.forEach(el => {
            el.style.background = "";
        })
        element.style.background = "#12ff02";
        slSize = element.textContent;
    });

});
// ------ Price Increase -------
let n = parseInt(price.textContent);

function priceIncrease() {
    return n * i;
}
// ---- Buy ------
let arr = [];

buyBtn.addEventListener("click", () => {
    let totalprice = priceIncrease();
    let obj = {
        pName: pn.textContent,
        pric: totalprice,
        size: slSize,
        quantity: i,
    }
    arr.push(obj);
    console.log(obj);
    addData();

})

function addData() {
    data.innerHTML = "";
    arr.forEach((elm) => {

        let ad = document.createElement("div");
        ad.id = "products";
        ad.innerHTML = `
                <div id="products" class="dat">
                <p id="pname">${elm.pName}</p>
                <p id="price">₹ ${elm.pric}</p>
                <p id="size">${elm.size}</p>
                <p id="qnty">${elm.quantity}</p>
            </div>`;
        data.appendChild(ad);

    });
}
