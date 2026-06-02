/*In questo esercizio, utilizzerai async/await per creare la funzione getChefBirthday(id).
 Questa funzione accetta un id di una ricetta e deve:
Recuperare la ricetta da https://dummyjson.com/recipes/{id}
Estrarre la proprietà userId dalla ricetta
Usare userId per ottenere le informazioni dello chef da https://dummyjson.com/users/{userId}
Restituire la data di nascita dello chef*/

async function ricettaJson(url) {
    const res = await fetch(url);
    const obj = await res.json();
    return obj;
}

async function getChefBirthday(id) {

    const ricetta = await fetch(`https://dummyjson.com/recipes/${id}`);

    const recipe = await ricetta.json();
    
    // Faccio la seconda chiamata per l'utente
    const utente = await fetch(`https://dummyjson.com/users/${recipe.userId}`);

    const chef = await utente.json();
    
    return chef.birthDate;
}


(async () => {
   try {
       const birthday = await getChefBirthday(1);
       console.log("data di nascita dello chef ", birthday);
   } catch (error) {
       console.error("Errore durante il recupero dei dati:", error);
   }
})();