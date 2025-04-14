# Expense Tracker React Application

This project is a React application built using Vite and Bun to manage and display a list of personal expenses. It allows users to view their expenses in a table, add new expenses through a form, and filter the displayed expenses using a search bar.

## Core Deliverables Implemented

The following core deliverables of the Expense Tracker application have been implemented:

- **See a table of all my expenses:** The application displays a table listing all currently available expenses, showing details such as name, category, amount, and description, rendered using JSX.
- **Fill out and submit the form to add a new expense:** Users can fill out a form with details for a new expense (name, category, amount, description) and upon submission, the new expense is immediately displayed in the expenses table. This functionality is handled in the application's state, and no external persistence mechanism (like a database or local storage) is used.
- **Filter expenses by typing into the search bar:** A search bar is provided that allows users to type keywords. The expenses table is dynamically updated to show only those expenses whose name or description contains the entered search term (case-insensitive matching).

## Technologies Used

- **React:** A JavaScript library for building user interfaces using a component-based architecture and JSX.
- **Vite:** A build tool that provides a fast and lean development experience for modern web projects. It was used to set up and build the React application.
- **Bun:** A fast JavaScript runtime, package manager, and build tool. Bun was used as the package manager and to run development scripts.
- **JSX (JavaScript XML):** A syntax extension to JavaScript that allows you to write HTML-like structures within your JavaScript code, used extensively in React components to define the user interface.
- **JavaScript (ES6+):** Modern JavaScript features were utilized throughout the project.
- **CSS:** Styling was applied to the components to provide a basic user interface. (Note: While Tailwind CSS integration was attempted, the final deployed version might use standard CSS for simplicity due to deployment constraints.)

## Setup and Running the Application (Local Development)

1.  **Clone the repository:**
    ```bash
    git clone <repository_url>
    cd expense-tracker
    ```
    (Replace `<repository_url>` with the actual URL of your project repository)

2.  **Install dependencies using Bun:**
    ```bash
    bun install
    ```

3.  **Start the development server:**
    ```bash
    bun run dev
    ```
    This command will start the Vite development server. You should then be able to view the application in your browser, usually at `http://localhost:5173` or a similar address provided by Vite.

## Building for Production (using Vite)

To create a production-ready build of the application:

```bash
bun run build
This application was successfully deployed using the Render platform. 





