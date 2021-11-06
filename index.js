let cats = ['Milo', 'Otis', 'Garfield']

function destructivelyAppendCat(name) {
    return cats.push(name)
}

function destructivelyPrependCat(name) {
    return cats.unshift(name)
}

function destructivelyRemoveLastCat() {
    return cats.pop()
}

function destructivelyRemoveFirstCat() {
    return cats.shift()
}

function appendCat(name) {
    let newArray = []
    newArray.push(...cats, name)
    return newArray
}

function prependCat(name) {
    let newArray = []
    newArray.push(name, ...cats)
    return newArray
}

function removeLastCat() {
    return cats.slice(0, 2)
}

function removeFirstCat() {
    return cats.slice(1, 3)
}





// const cats = ["Milo", "Otis", "Garfield"];

// function destructivelyAppendCat(name) {
//     cats.push(name);
// }

// function destructivelyPrependCat(name) {
//     cats.unshift(name)
// }

// function destructivelyRemoveLastCat() {
//     cats.pop()
// }

// function destructivelyRemoveFirstCat() {
//     cats.shift()
// }


// function appendCat(name) {
//     return [...cats, name]
// }

// function prependCat(name) {
//     return [name, ...cats]
// }

// function removeLastCat() {
//     return cats.slice(0, cats.length - 1)
// }

// function removeFirstCat() {
//     return cats.slice(1)
// }