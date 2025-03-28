# Rock Paper Scissors Lizard Spock (RPSLS)

A modern and interactive implementation of the classic "Rock Paper Scissors Lizard Spock" game. This project features both **offline** and **online multiplayer** modes, a sleek UI, and animations. It is built using **React**, **Redux**, **TypeScript**, and **Socket.IO** for real-time communication.

## Features

- **Offline Mode**: Play against the computer with randomized choices.
- **Online Multiplayer**: Play with friends in real-time by creating or joining a room.
- **Responsive Design**: Optimized for desktop and mobile devices.
- **Animations**: Smooth transitions and hover effects for an engaging user experience.
- **Loading Screen**: A Klingon-themed animated loading screen with sound effects.
- **Score Tracking**: Tracks scores for both offline and online modes.
- **Rules Display**: View game rules with a toggleable modal.
- **Service Worker**: Offline support with PWA capabilities.

---

## Installation

### Prerequisites

- Node.js (v16 or higher)
- npm prefered

### Clone the Repository

```bash
git clone https://github.com/krish2248/Rock-Paper-Scissors-Lizard-Spock
cd rpsls

---

For Client side dependencies, enter in terminal : 

cd client
npm install

For Server side dependencies, enter in terminal :

cd server
npm install

---

Usage ---> Start The Development Server

Client : 

cd client
npm start

Server :
cd server
npm run dev

---

for creating the build folder for production-read files,

enter : 
cd client
npm run build

---

Technologies Used :

Frontend

React: Component-based UI library
Redux Toolkit: State management
TypeScript: Static typing
Styled-Components: CSS-in-JS styling
Socket.IO Client: Real-time communication
SASS: CSS preprocessor

---

Backend

Node.js: JavaScript runtime
Express: Web framework
Socket.IO: Real-time communication
CORS: Cross-origin resource sharing

---

Features in Detail

Offline Mode :

Play against a computer opponent.
Randomized computer choices.
Score tracking for wins, losses, and draws.

Online Multiplayer :

Create or join a room to play with friends.
Real-time updates using Socket.IO.
Opponent status messages (e.g., "Opponent picked!" or "Opponent left the game").

---

Loading Screen :

Klingon-themed animated loading screen.
Background music and sound effects.

---

Game Rules :

Toggleable modal to display game rules.
Rules are styled for clarity and accessibility.

---

Acknowledgments : 
Inspired by the classic "Rock Paper Scissors Lizard Spock" game.
Special thanks to the open-source community for the tools and libraries used in this project.

---

Author : Krish Soni