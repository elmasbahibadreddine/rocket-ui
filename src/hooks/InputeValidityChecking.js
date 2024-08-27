export const usePasswordValidityChecker = (password) => {
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    const hasMinLength = password.length >= 8;

    return hasUpperCase && hasLowerCase && hasNumber && hasSpecialChar && hasMinLength;
}


export const useFullnameValidityChecker = (fullName) => {
    // Define the validation criteria
    const isValid = () => {
        // Check if the full name contains at least two words
        const words = fullName.trim().split(/\s+/);
        if (words.length < 2) {
            return false;
        }

        // Check if each word is at least 2 characters long and contains only alphabetic characters
        for (let word of words) {
            if (word.length < 2 || !/^[a-zA-Z]+$/.test(word)) {
                return false;
            }
        }

        return true;
    };

    return isValid();
};
