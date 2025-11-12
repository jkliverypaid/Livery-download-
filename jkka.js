function slowAlert(){
aterl("tarunandpardeep");}
function applyDiscount(price, discount) {
  return price - discount;
}

// Example: Apply discount on SIMRAN BUS
document.addEventListener("DOMContentLoaded", function () {
  let priceTag = document.querySelector("#pp"); 
  if (priceTag) {
    let finalPrice = applyDiscount(100, 20); 
    priceTag.innerText = "₹100 / ₹20 off → Final: ₹" + finalPrice;
  }
});

// ========== Confirm Before Download ==========
function confirmDownload(event, busName, price) {
  let agree = confirm(`Do you want to download ${busName} livery for ₹${price}?`);
  if (!agree) {
    event.preventDefault(); // stop link if cancel
  }
}

// Attach to all download buttons
document.querySelectorAll("a button").forEach((btn) => {
  btn.addEventListener("click", function (event) {
    let busName = this.parentElement.previousElementSibling?.innerText || "Bus";
    let price = this.parentElement.parentElement.querySelector(".price")?.innerText.replace("₹", "") || "??";
    confirmDownload(event, busName, price);
  });
});

// ========== Search/Filter ==========
function searchBus() {
  let input = document.getElementById("search").value.toUpperCase();
  let buses = document.querySelectorAll("div h2");
  buses.forEach((bus) => {
    let parentDiv = bus.parentElement;
    if (bus.innerText.toUpperCase().indexOf(input) > -1) {
      parentDiv.style.display = "";
    } else {
      parentDiv.style.display = "none";
    }
  });
}



