// function to get a random number between min and max
export const random = (min: number, max: number) =>
    Math.floor(Math.random() * (max - min + 1)) + min;
