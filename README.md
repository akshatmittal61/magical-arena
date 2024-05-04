# Magical Arena

Magical Arena is a game where two players enter their details and dive into a battle where they attack each other with virtual attacks. The one with 0 health in the end dies and the other wins the game.

# Tech Stack

- [NodeJS](https://nodejs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Yarn](https://yarnpkg.com/)

# Usage

The application assumes `NodeJS` is already installed on the system.

To setup the application on local, follow these steps:

- Download the application folder, and unzip the files.
- Open a terminal in the unzipped folder

- Run `npm run demo`
- Enter the player 1 name and other properties (strength, health, attack).
- Enter the player 2 name and other properties (strength, health, attack).
- Entering `name` is optional, to skip custom name, leave the field empty, it will default to `Player 1` and `Player 2`.
- At the end of the game (when `health` of one player becomes 0), the result of the game will be displayed.

# Directory Structure

```md
│
├── .gitignore
├── arena.ts # Arena module with players and roll function
├── index.ts # Main application to initiate arena and start playing
├── player.ts # Player module with name, and other properties
├── package.json
├── README.md
├── tsconfig.json
└── utils.ts # Minor utilites to be used throughout the application
```

# Author

[Sanyam](https://www.linkedin.com/in/sanyam-lohan)
