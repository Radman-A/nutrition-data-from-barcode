# Food Barcode Scanner

This project is a simple web application that allows you to scan a food barcode and get nutrition information.

## Description

The application consists of a Vue.js frontend and a Node.js backend. The frontend provides a user interface to enter a barcode, and the backend fetches nutrition data from the Open Food Facts API.

## Setup

To run this project, you need to have Node.js and npm installed.

### Backend

1.  Navigate to the `backend` directory:
    ```sh
    cd backend
    ```
2.  Install the dependencies:
    ```sh
    npm install
    ```

### Frontend

1.  Navigate to the `frontend` directory:
    ```sh
    cd frontend
    ```
2.  Install the dependencies:
    ```sh
    npm install
    ```

## Usage

1.  Start the backend server:
    ```sh
    cd backend
    node server.js
    ```
2.  Start the frontend development server:
    ```sh
    cd frontend
    npm run dev
    ```
3.  Open your browser and go to the URL provided by the Vite development server (usually `http://localhost:5173`).
4.  Enter a food barcode in the input field and click "Get Nutrition Info".
