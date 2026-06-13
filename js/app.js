import { supabase } from "./supabase.js";

async function loadProducts() {
  const container = document.getElementById("product-list");

  const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("visible", true);

  if (error) {
    container.innerHTML = "❌ Chyba načítání produktů";
    return;
  }

  container.innerHTML = "";

  data.forEach((product) => {
    container.innerHTML += `
      <a href="product.html?id=${product.id}" class="product-link">

        <div class="product">
          <img src="${product.image_url}" alt="${product.name}">

          <h3>${product.name}</h3>

          <p>💰 ${product.price} Kč</p>

          <p>📦 Skladem: ${product.stock} ks</p>

          <p>🏷 Kategorie: ${product.category}</p>
        </div>

      </a>
    `;
  });
}

loadProducts();
