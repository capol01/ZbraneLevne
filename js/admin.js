import { supabase } from "./supabase.js";

// kontrola při načtení stránky
window.addEventListener("load", async () => {
  const { data } = await supabase.auth.getSession();

  if (data.session) {
    showAdmin();
  }
});

window.login = async function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    document.getElementById("status").innerText = "❌ " + error.message;
    return;
  }

  showAdmin();
};

function showAdmin() {
  document.getElementById("status").innerText = "✅ Přihlášeno";
  document.getElementById("admin-panel").classList.remove("hidden");
}

window.addProduct = async function () {
  const name = document.getElementById("name").value;
  const price = document.getElementById("price").value;
  const stock = document.getElementById("stock").value;
  const category = document.getElementById("category").value;
  const image = document.getElementById("image").value;

  const { error } = await supabase.from("products").insert([
    {
      name,
      price,
      stock,
      category,
      image_url: image,
      visible: true,
    },
  ]);

  if (error) {
    alert("❌ chyba: " + error.message);
  } else {
    alert("✅ produkt přidán!");
  }
};
