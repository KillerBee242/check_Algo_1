const inputSentence = "Welcome to Gomycode."; // Nom de la variable pour la phrase d'entrée
let characterCount = 0; // Compteur pour le nombre de caractères
let wordCount = 0; // Compteur pour le nombre de mots
let vowelCount = 0; // Compteur pour le nombre de voyelles

const vowels = ['a', 'e', 'i', 'o', 'u']; // Tableau des voyelles

for (let i = 0; i < inputSentence.length; i++) {
    characterCount++; // Incrémente le compteur de caractères

    if (inputSentence[i] === ' ') {
        wordCount++; // Incrémente le compteur de mots si un espace est trouvé
    }

    if (vowels.includes(inputSentence[i].toLowerCase())) { // Vérifie si le caractère est une voyelle
        vowelCount++; // Incrémente le compteur de voyelles
    }
}

// Ajoute un mot pour la dernière partie après l'espace
wordCount++;

// Affichage des résultats dans la console
console.log(`Number of characters: ${characterCount}`);
console.log(`Number of words: ${wordCount}`);
console.log(`Number of vowels: ${vowelCount}`);