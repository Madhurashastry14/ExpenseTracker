# Expense Tracker

A full-stack web application to manage personal expenses, track monthly spending, and visualize expenses by category.

## Features

- User registration and login
- JWT authentication with refresh tokens
- Add and view personal expenses
- Dashboard with spending summaries
- Recent expenses and category-wise totals

## Tech Stack

- **Frontend:** React, Vite, CSS
- **Backend:** Node.js, Express.js
- **Database:** PostgreSQL
- **Authentication:** JWT, bcrypt

## Setup

**1. Clone the repository**

```bash
git clone <https://github.com/Madhurashastry14/ExpenseTracker.git>
cd expense-tracker
```

**2. Start the backend**

```bash
cd backend
npm install
```

Configure your `.env` file with database credentials, port, and JWT secret.

```bash
npm run dev
```

**3. Start the frontend** in a separate terminal.

```bash
cd frontend
npm install
npm run dev
```

**4. Database:** Create the PostgreSQL database and required tables using your schema or SQL setup file.

## Future Improvements

- Edit and delete expenses
- Spending charts and budget alerts
- Expense filtering and CSV export
