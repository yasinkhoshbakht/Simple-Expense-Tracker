# Simple Expense Tracker

This project is a simple expense management website that allows users to add their incomes and expenses and view the difference between them. All data is stored locally in `localStorage`.

## Features

- Displays a single number representing the difference between income and expenses.
- Allows users to add incomes and expenses with names and amounts via separate forms.
- Shows lists of incomes and expenses, using `localStorage` for persistent storage.
- Utilizes Context API to manage button states.
- Uses `useReducer` to manage and update the main number (difference between income and expense).

## Project Structure

The project is divided into multiple components, each with a specific purpose:

- `App.js`: Displays the main number that reflects the difference between total income and expenses.
- `IncomeForm.js`: A form for adding income entries, including name and amount inputs with a submit button.
- `ExpenseForm.js`: A form for adding expense entries, including name and amount inputs with a submit button.
- `IncomeBox.js`: Displays a list of income entries added by the user, loaded from `localStorage`.
- `ExpenseBox.js`: Displays a list of expense entries added by the user, loaded from `localStorage`.

## How It Works

- By entering a name and amount in the income form and clicking the submit button, the entry is added to the income list, and the main number updates.
- By entering a name and amount in the expense form and clicking the submit button, the entry is added to the expense list, and the main number updates.
- Data is stored locally and remains accessible even after reloading the page.

## Technologies Used

- React
- Vite
- Context API
- useReducer

## Styling

Each component includes its own CSS file to provide clean and organized styling, resulting in a neat and readable UI.
