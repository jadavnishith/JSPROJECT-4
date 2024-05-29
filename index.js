/* 1.   Write a JavaScript program find palindrome  using function */

function isPalindrome(number) {
    let numStr = number.toString();
    let reversedNumStr = numStr.split('').reverse().join('');
    return numStr === reversedNumStr;
}

// Checking the number is Palindrome
console.log(isPalindrome(121));
console.log(isPalindrome(12321));
console.log(isPalindrome(12345));

/* 2.   Write a JavaScript program to check the last digit same OR not using UDF.(User Input
       Three Integer Numbers). */

// Function to check if the last digits of three integers are the same
function checkLastDigitSame(num1, num2, num3) {
    // Get the last digit of each number
    const lastDigit1 = num1 % 10;
    const lastDigit2 = num2 % 10;
    const lastDigit3 = num3 % 10;

    // Check if all last digits are the same
    if (lastDigit1 === lastDigit2 && lastDigit2 === lastDigit3) {
        return true;
    } else {
        return false;
    }
}

// Function to get user input
function getUserInput() {
    const num1 = parseInt(prompt("Enter the first integer number:"));
    const num2 = parseInt(prompt("Enter the second integer number:"));
    const num3 = parseInt(prompt("Enter the third integer number:"));
    return [num1, num2, num3];
}

// Main function
function main() {
    const [num1, num2, num3] = getUserInput();
    const result = checkLastDigitSame(num1, num2, num3);

    if (result) {
        console.log("The last digit of all three numbers is the same.");
    } else {
        console.log("The last digit of all three numbers is not the same.");
    }
}

// Call the main function
main();

/* 3.   Check Armstrong Number of Three Digits Using UDF. */

// Function to check if a number is an Armstrong number of three digits
function isArmstrongNumber(num) {
    let sum = 0;
    let temp = num;

    // Calculate the sum of the cubes of digits
    while (temp > 0) {
        const digit = temp % 10;
        sum += digit ** 3;
        temp = Math.floor(temp / 10);
    }

    // Check if the sum equals the original number
    return sum === num;
}

// Function to get user input
function getUserInput() {
    const num = parseInt(prompt("Enter a three-digit number:"));
    return num;
}

// Main function
function main() {
    const num = getUserInput();

    if (num >= 100 && num <= 999) {
        if (isArmstrongNumber(num)) {
            console.log(num + " is an Armstrong number of three digits.");
        } else {
            console.log(num + " is not an Armstrong number of three digits.");
        }
    } else {
        console.log("Please enter a valid three-digit number.");
    }
}

// Call the main function
main();

/* 4. Check Prime Number or Not Using Function. */

// Function to check if a number is prime
function isPrime(number) {
    // Check if the number is less than 2, it's not prime
    if (number < 2) {
        return false;
    }

    // Check for divisibility from 2 to square root of the number
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }

    // If no divisor is found, it's prime
    return true;
}

// Function to get user input
function getUserInput() {
    const num = parseInt(prompt("Enter a number:"));
    return num;
}

// Main function
function main() {
    const num = getUserInput();

    if (isPrime(num)) {
        console.log(num + " is a prime number.");
    } else {
        console.log(num + " is not a prime number.");
    }
}

// Call the main function
main();
