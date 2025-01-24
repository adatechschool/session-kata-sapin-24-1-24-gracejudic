// je n'ai pas trouvé comment réécrire mes fonctions triangles pour qu'elles return 
// un résultat plutôt que de console.log donc ma fonction afficherPointe ne marche pas comme je voudrais

function afficherEtoiles(nombreEtoile) {
    
    let array = [];

    for (let i = 0; i < nombreEtoile; i++) {
        array.push('*')
    }
    return array.join('')

}


function afficherRectangleEtoiles(hauteur, largeur) {

    for (let i = 0; i < hauteur; i++) {
        console.log(afficherEtoiles(largeur))
    }

}


function afficherTriangleDroite(n) {

    for (let i = 0; i < n; i++) {
        console.log(`${afficherEtoiles(i)}\\`)
    }
}


function afficherTriangleGauche(n) {
    let myArray = [];
   
    for (let i = 0; i < n; i++) {
        myArray.push("")
    }
    
    for (let i = 0; i < n; i++) {
        myArray.pop()
        myArray.join("")
        console.log(`${myArray}/${afficherEtoiles(i)}`)
    }
}


function afficherPointeSapin(n) {
    afficherTriangleGauche(n)
    afficherTriangleDroite(n)
}

afficherPointeSapin(5)