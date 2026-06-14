function loadCart() {

  const cart = JSON.parse(
    localStorage.getItem("cart")
  ) || [];

  const container =
    document.getElementById("cart-items");

  const totalBox =
    document.getElementById("cart-total");

  if (cart.length === 0) {

    container.innerHTML =
      "<h2>🛒 Košík je prázdný</h2>";

    totalBox.innerHTML = "";

    return;
  }

  let total = 0;

  container.innerHTML = "";

  cart.forEach((product, index) => {

    total += Number(product.price);

    container.innerHTML += `
      <div class="product">

        <img
          src="${product.image_url}"
          style="width:200px;border-radius:10px;"
        >

        <h3>${product.name}</h3>

        <p>💰 ${product.price} Kč</p>

        <button onclick="removeFromCart(${index})">
          🗑️ Odebrat
        </button>

      </div>
    `;
  });

  totalBox.innerHTML = `
    <h2>Celkem: ${total} Kč</h2>
  `;
}

window.removeFromCart = function(index) {

  const cart = JSON.parse(
    localStorage.getItem("cart")
  ) || [];

  cart.splice(index, 1);

  localStorage.setItem(
    "cart",
    JSON.stringify(cart)
  );

  loadCart();
};

loadCart();
