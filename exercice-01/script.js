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

function ajouterTache() {
  let tacheInput = document.getElementById("tacheinput");
  let tache = tacheInput.value;

  if (tache === "") {
    alert("⚠️ Entre une tâche");
    return;
  }

  let li = document.createElement("li");
  li.innerText = tache;

  li.onclick = function () {
    li.remove();
  };

  document.getElementById("tachelist").appendChild(li);

  tacheInput.value = "";
}