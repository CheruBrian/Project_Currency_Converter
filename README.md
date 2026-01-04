Currency Converter (React)
Overview

The Currency Converter is a lightweight React application built using Vite that allows users to convert an amount from one currency to another. The project focuses on core React principles such as component-based architecture, state management, controlled inputs, and clean UI styling.

This application is ideal for learning or demonstrating foundational React skills.

Features

Currency conversion using React state

Controlled input fields

Dropdown currency selection

Clean, centered, and responsive UI

Modular CSS styling

Easily extendable to use real-time exchange rate APIs

Tech Stack

React 18

Vite

JavaScript (ES6+)

CSS

HTML5

Project Structure
currency-converter/
│
├── src/
│   ├── App.jsx                 # Main React component
│   ├── currencyconverter.css   # Application styling
│   ├── main.jsx                # React entry point
│   └── assets/
│
├── public/
│
├── package.json
├── vite.config.js
└── README.md

Getting Started
Prerequisites

Ensure you have the following installed:

Node.js (v18+ recommended)

npm or yarn

Installation

Clone the repository:

git clone https://github.com/your-username/currency-converter.git


Navigate into the project directory:

cd currency-converter


Install dependencies:

npm install

Running the App (Development)

Start the Vite development server:

npm run dev


Open your browser and visit:

http://localhost:5173

How It Works (React Logic)

The application uses React state (useState) to manage:

Amount

Source currency

Target currency

Input and select elements are controlled components

Conversion logic runs whenever inputs change

UI updates automatically through React’s re-rendering



