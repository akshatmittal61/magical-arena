import { createInterface } from "node:readline/promises";

// function to get a random number between min and max
export const random = (min: number, max: number) =>
    Math.floor(Math.random() * (max - min + 1)) + min;

// take input from terminal
export const cin = async (question: string = "") => {
    const readline = createInterface({
        input: process.stdin,
        output: process.stdout
    });
    const answer = await readline.question(question);
    readline.close();
    return answer;
};
