function shiftLowerCase(character, key) {
    return String.fromCharCode("a".charCodeAt()+ ((26+character.charCodeAt() - "a".charCodeAt() + key )%26))
}

function shiftUpperCase(character, key) {
    return String.fromCharCode("A".charCodeAt() + ((26+character.charCodeAt() - "A".charCodeAt() + key )%26))
}

const caesar = function(message, key) {
    let coded = "";
    for (character of message) {
        if ((character.charCodeAt()>="a".charCodeAt()) & (character.charCodeAt() <= "z".charCodeAt())) {coded += shiftLowerCase(character, key); continue;}
        else if ((character.charCodeAt()>="A".charCodeAt()) & (character.charCodeAt() <= "Z".charCodeAt())) {coded +=shiftUpperCase(character, key); continue;}
        else {coded += character; continue}
    
    }

    return coded;
};

// Do not edit below this line
module.exports = caesar;