function affichageVertical(chaine, longueur, vitesse) {
    let tab = [];
    for (let j = 0; j < longueur; j++) {
      tab.push(" ");
    }
  
    let compteur = Math.ceil(chaine.length / longueur);
    let chaines = [];
  
    for (let l = 0; l < compteur; l++) {
      let a = chaine.slice(l * longueur, (l + 1) * longueur);
      chaines.push(a);
    }
  
    for (let l = 0; l < chaines.length; l++) {
      for (let i = 0; i < chaines[l].length; i++) {
        setTimeout(() => {
          if (l % 2 === 0) {
            let tab_cara = [];
            for (let j = 0; j < i; j++) {
              tab_cara.push(tab[i]);
            }
            console.log(...tab_cara, chaines[l][i]);
          } else {
            
            let j = chaines[l].length - i - 2;
            let tab_cara = [];
            while (j >= 0) {
              tab_cara.push(tab[i]);
              j--;
            }
            console.log(...tab_cara, chaines[l][i]);
          }
          
        }, vitesse * (l * longueur + i));
        
      }
    }
    
    
  }
  
  let chaine = prompt("Enter a string : ");
  let longueur = prompt("Enter a length : ");
 
 
  let vitesse = prompt("Enter a display speed (in ms) :");
  try{
    affichageVertical(chaine,Number(longueur), vitesse);
  }
  catch(error){

    console.log("Something went wrong. Try again !")
  }
  