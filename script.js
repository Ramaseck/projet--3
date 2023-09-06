document.getElementById("searchForm").addEventListener("submit",function(e){
    e.preventDefault();
    const termRecherche=document.getElementById("recherche").value;
    rechercher(termRecherche);
});
// fonction de recherche (exemple simple)
function rechercher(terme){
    const resultatsDiv = document.getElementById("resultats");
    resultatsDiv.innerHTML = `<p> Résultats de recherche pour : <strong>${terme}</strong></p>`;

}