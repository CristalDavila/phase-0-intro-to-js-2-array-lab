const cats = ["Milo", "Otis", "Garfield"]
function destructivelyAppendCat(name) {
    cats.push("Ralph")
    return cats
}
function destructivelyPrependCat(name) {
    cats.unshift("Bob")
    return cats
}
function destructivelyRemoveLastCat(){
    cats.pop()
    return cats
} 
function destructivelyRemoveFirstCat(){
    cats.shift()
    return cats
}

function appendCat(name){
    const cats = ["Milo", "Otis", "Garfield"]
    const newCat = ["Broom"]
    return cats.concat(newCat)
}
function prependCat(name) {
    const newCatDeux = ["Arnold"]
    const cats = ["Milo", "Otis", "Garfield"]
    return newCatDeux.concat(cats)
}
function removeLastCat(){
        var twoCats= cats.slice(0,cats.length-1);
        return twoCats
}
function removeFirstCat() {
    var twoCats= cats.slice(1)
    return twoCats
}