function changerTexte() {
  document.getElementById("texte").innerText = "🔥 Tu progresses Michel !";
  document.body.style.backgroundColor = "#d4edda";
}

function afficherNom() {
  let nom = document.getElementById("inputNom").value;

  if (nom === "") {
    document.getElementById("resultat").innerText = "⚠️ Entre ton prénom";
  } else {
    document.getElementById("resultat").innerText = "Bonjour " + nom;
  }
}