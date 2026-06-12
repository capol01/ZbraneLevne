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
