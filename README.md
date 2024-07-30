# Beyond - Client CRUD Application

This project is a simple CRUD application for managing clients. It is built with modern web technologies and includes integration tests. The project uses MSW to mock the backend, and Jest with Testing Library for integration tests.

- **Live DEMO**: [Beyond - Client CRUD Application]([https://projectiva-challenge.vercel.app/](https://beyond-challenge-r59yhj6f3-caio-henrique-zavitoskis-projects.vercel.app/sign-in)

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Getting Started](#getting-started)
- [Running the Application](#running-the-application)
- [Running Tests](#running-tests)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Features

- Add, edit, delete, and view client details.
- Filter and search clients by various fields.
- Fully responsive design.
- Mocked backend using MSW.
- Integration tests with Jest and Testing Library.

## Technologies

- **Frontend:**
  - React (Vite)
  - TypeScript
  - Styled Components
  - React Hook Form
  - React Router DOM
  - TanStack Query

- **Testing:**
  - Jest
  - Testing Library
  - MSW (Mock Service Worker)

## Getting Started

### Prerequisites

- Node.js (>= 14.x)
- npm or pnpm

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/CaioZavitoski/beyond-challenge.git
   cd client-crud
   ```

2. Install dependencies:

   ```sh
   pnpm install
   ```

## Running the Application

To start the development server:

```sh
pnpm dev
```

This will run the application in development mode. Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

## Running Tests

To run tests, use the following command:

```sh
pnpm test
```

This will run the integration tests using Jest and Testing Library.

## Project Structure

```
src/
│
├── __tests__/         # Test files
│   ├── SignIn.test.tsx
│   ├── SignUp.test.tsx
│   ├── Dashboard.test.tsx
│   └── ...
│
├── api/               # API files
│   ├── mocks/
│   │   ├── get-clients-mock.ts
│   │   ├── register-company-mock.ts
│   │   ├── sign-in-mock.ts
│   │   ├── update-client-mock.ts
│   │   ├── add-client-mock.ts
│   │   └── delete-client-mock.ts
│   ├── get-clients.ts
│   ├── register-company.ts
│   ├── sign-in.ts
│   └── update-client.ts
│
├── components/        # Reusable components
│   ├── Modal/
│   │   ├── modal-add.tsx
│   │   ├── modal-delete.tsx
│   │   ├── modal-details.tsx
│   │   ├── modal-edit.tsx
│   │   └── ...
│   └── ...
│
├── contexts/          # React Context for state management
│   ├── ClientsContext.tsx
│   └── ...
│
├── pages/             # Page components
│   ├── auth/
│   │   ├── sign-in/
│   │   │   ├── index.tsx
│   │   │   └── styles.ts
│   │   ├── sign-up/
│   │   │   ├── index.tsx
│   │   │   └── styles.ts
│   │   └── ...
│   ├── dashboard/
│   │   ├── index.tsx
│   │   ├── filters.tsx
│   │   ├── clients-table.tsx
│   │   └── styles.ts
│   └── ...
│
├── styles/            # Global and reusable styles
│   ├── App.tsx
│   ├── main.tsx
│   ├── routes.tsx
│   └── ...
│
└── setup-test.ts      # Jest setup file
```
