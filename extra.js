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


function afficherTriangleDroite(nombreEtoile) {

    return `${afficherEtoiles(nombreEtoile)}\\`
}


function afficherTriangleGauche(n) {

    let myArrayOfSpaces = [];
    
    for (let i = 0; i < n; i++) {
        myArrayOfSpaces[i] = ""
    }

    let myNumEtoile = 5 - myArrayOfSpaces.length
    myArrayOfSpaces.join('')

    return `${myArrayOfSpaces}/${afficherEtoiles(myNumEtoile)}`
}


function afficherPointeSapin(nombreEtoile) {

    for (let i = 0; i < nombreEtoile; i++) {
        console.log(`${afficherTriangleGauche(nombreEtoile-i)}|${afficherTriangleDroite(i)}`)
    }
 
}

afficherPointeSapin(5)
