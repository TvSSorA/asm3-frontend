export function encryptor(password: string): string {
    const shift = 3;
    
    return password.split('').map(char => {
        const code = char.charCodeAt(0);
        // Encrypt only alphabetic characters
        if (code >= 65 && code <= 90) {
            // Uppercase letters
            return String.fromCharCode(((code - 65 + shift) % 26) + 65);
        } else if (code >= 97 && code <= 122) {
            // Lowercase letters
            return String.fromCharCode(((code - 97 + shift) % 26) + 97);
        } else {
            // Non-alphabetic characters remain unchanged
            return char;
        }
    }).join('');
}