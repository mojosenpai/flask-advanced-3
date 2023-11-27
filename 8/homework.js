function lowerCaseorUpperCase(word) {
    let lower = 0
    let upper = 0
    for(let i = 0; i < word.length; i++) {
        if(word[i].toLowerCase() == word[i].toUpperCase()) {
            continue
        }
        else if(word[i] == word[i].toLowerCase()) {
            lower++
        }
        else {
            upper++
        }
    }
    if(lower > upper) {
        return word.toLowerCase()
    }
    else {
        return word.toUpperCase()
    }
}

console.log(lowerCaseorUpperCase('HeLLo!!!!!!!!'))