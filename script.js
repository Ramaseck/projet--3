/*pour pointer tous nos lien */
const links=document.querySelectorAll("nav li")

icons.addEventListener("click",()=>{ /**quand on click sur le menu burger notre nav va s'afficher */
    nav.classList.toggle("active"); /* pour cacher la classe  active  en utilisant le croix*/

}); 
/* pour faire aire chacun de nos trois li un evénemant */
links.forEach((link) => {
    link.addEventListener("click",() => { /* lévénement s'appelle click */
            nav.classList.remove("active"); /**je t'enléve la classe active */
    });
});
