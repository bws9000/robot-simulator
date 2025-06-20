# Robot Simulator or Reactivity Sandbox

A minimalist robot simulation app that demonstrates frontend reactivity concepts using Node.js, WebSockets, and plain JavaScript DOM manipulation. Originally built for a different purpose, it now offers a surprisingly clear — though not sophisticated — look into how modern JavaScript frameworks update the UI in response to state changes. 

## How It Works

This project mimics how modern frameworks like React or Angular manage state and update the UI.

- The **backend** is a Node.js app with WebSocket and command-line input
- The **frontend** is a grid rendered in the browser, updated via WebSocket messages
- All updates to the robot's position/state are reflected live in the DOM

## Features

- Command-line interface to control the robot (via `stdin`)
- Realtime robot state syncing to browser using WebSocket
- Custom grid-based UI showing robot position and active zones
- No framework — just raw DOM updates for learning and experimentation

## Structure

```
robot-simulator/
├── index.js             # Node.js server + WebSocket + robot logic
├── public/
│   └── index.html       # Grid display & frontend logic
├── wsdata/
│   └── RobotData.js     # Robot state management
├── frontend/
│   └── Grid1.js         # UI update logic for the robot grid
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18+ recommended)

### Run the App

```bash
npm install
node index.js
```

### Open the frontend

Visit `http://localhost:3000` in your browser.

### Send commands

In the terminal, type:

```bash
activate
move up
move left
move right
```

The grid will update in real time.

This project is designed to:
- Visualize how state updates can drive the DOM
- Simulate how frameworks like Angular or React operate under the hood
- Explore WebSocket communication and reactive UI updates

