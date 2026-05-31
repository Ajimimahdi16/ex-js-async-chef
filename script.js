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

    const ricetta = await ricettaJson(`https://dummyjson.com/recipes/${id}`);
    
    // Recupero userId direttamente dai dati della ricetta
    const userId = ricetta.userId; 
    
    // Faccio la seconda chiamata per l'utente
    const utente = await ricettaJson(`https://dummyjson.com/users/${userId}`);
    
   
    return { 
        ...ricetta, 
        chefDetails: utente // Inserimento dati per lo chef 
    };
}


(async () => {
   try {
       const ricetta = await getChefBirthday(1);
       console.log("La ricetta dello chef:", ricetta);
   } catch (error) {
       console.error("Errore durante il recupero dei dati:", error);
   }
})();