function caesarCipherEncrypt(text, shift = 3) {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'; // Uppercase alphabet
    const lowerAlphabet = alphabet.toLowerCase(); // Lowercase alphabet
    let result = ''; // Variable to store the encrypted result

    // Loop through each character in the input text
    for (let char of text) {
        if (alphabet.includes(char)) { 
            // If the character is an uppercase letter
            const index = (alphabet.indexOf(char) + shift) % 26; // Calculate the shifted index within the alphabet
            result += alphabet[index]; // Append the shifted letter to the result
        } else if (lowerAlphabet.includes(char)) { 
            // If the character is a lowercase letter
            const index = (lowerAlphabet.indexOf(char) + shift) % 26; // Calculate the shifted index within the lowercase alphabet
            result += lowerAlphabet[index]; // Add the shifted letter to the result
        } else {
            // If the character is not a letter
            result += char; // Unchanged add it to the result
        }
    }

    return result; // Return the final encrypted text
}

document.getElementById('encryptButton').addEventListener('click', () => {
    const text = document.getElementById('text').value; // Get the input text from the text field


    const encryptedText = caesarCipherEncrypt(text); // Call the encryption function with the input text
    document.getElementById('result').textContent = encryptedText; // Display the encrypted text in the result area
});


function caesarCipherDecrypt(text, shift = 3) {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'; // Uppercase alphabet
    const lowerAlphabet = alphabet.toLowerCase(); // Lowercase alphabet
    let result = ''; // Variable to store the decrypted result

    // Loop through each character in the input text
    for (let char of text) {
        if (alphabet.includes(char)) { 
            // If the character is an uppercase letter
            const index = (alphabet.indexOf(char) - shift + 26) % 26; // Calculate the shifted index (with positive result)
            result += alphabet[index]; // Append the shifted letter to the result
        } else if (lowerAlphabet.includes(char)) { 
            // If the character is a lowercase letter
            const index = (lowerAlphabet.indexOf(char) - shift + 26) % 26; // Calculate the shifted index (with positive result)
            result += lowerAlphabet[index]; // Add the shifted letter to the result
        } else {
            // If the character is not a letter
            result += char; // Unchanged, add it to the result
        }
    }

    return result; // Return the final decrypted text
}

// Event listener for decryption
document.getElementById('decryptButton').addEventListener('click', () => {
    const text = document.getElementById('text').value; // Get the input text from the text field

    const decryptedText = caesarCipherDecrypt(text); // Call the decryption function with the input text
    document.getElementById('result').textContent = decryptedText; // Display the decrypted text in the result area
});

