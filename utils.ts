import { createInterface } from "node:readline/promises";

// function to get a random number between min and max
export const random = (min: number, max: number) =>
    Math.floor(Math.random() * (max - min + 1)) + min;

// take input from terminal
export const cin = async (question: string = "") => {
    // Create an interface for reading input from the terminal
    const readline = createInterface({
        input: process.stdin,  // Use standard input stream
        output: process.stdout // Use standard output stream
    });

    // Ask the user a question and wait for their response
    const answer = await readline.question(question);

    // Close the readline interface after getting the answer
    readline.close();
    return answer;
};

// function to implement a sleep function
export const sleep = (seconds: number) =>
    new Promise((resolve) => setTimeout(resolve, seconds * 1000));

// to check string contains number or not
export const isNumeric = (str: string): boolean => {
    return /^\d+$/.test(str);
}
