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
  li.innerText = tache + " ";

  // bouton supprimer
  let btn = document.createElement("button");
  btn.innerText = "❌";

  btn.onclick = function () {
    li.remove();
  };

  li.appendChild(btn);

  document.getElementById("tachelist").appendChild(li);

  tacheInput.value = "";
}

function ajouterNote() {
  let titre = document.getElementById("noteTitre").value;
  let message = document.getElementById("noteMessage").value;

  if (titre === "" || message === "") {
    alert("⚠️ Remplis le titre et le message");
    return;
  }

  let blocNote = document.createElement("div");
  blocNote.className = "note";

  let titreNote = document.createElement("h3");
  titreNote.innerText = titre;

  let messageNote = document.createElement("p");
  messageNote.innerText = message;

  let boutonSupprimer = document.createElement("button");
  boutonSupprimer.innerText = "Supprimer";

  boutonSupprimer.onclick = function () {
    blocNote.remove();
  };

  blocNote.appendChild(titreNote);
  blocNote.appendChild(messageNote);
  blocNote.appendChild(boutonSupprimer);

  document.getElementById("listeNotes").appendChild(blocNote);

  document.getElementById("noteTitre").value = "";
  document.getElementById("noteMessage").value = "";
}