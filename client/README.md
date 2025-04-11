# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


## Client
# Project tree

Assets/
src/
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Projects.jsx
│   ├── Contact.jsx
│   └── Footer.jsx
├── App.jsx
├── main.jsx
└── index.css

# install dependancies
npm intall
## To Run 
npm run dev


## server

express: For the server.

nodemailer: To send emails.

cors: To allow your React frontend to make requests to your server.

body-parser: To parse incoming request bodies.

Nodemailer Transporter Setup: Replace 'your-email@gmail.com' with your Gmail (or other email provider) and 'your-email-password' with your email password (or app password if using Gmail).

POST Endpoint: The /contact endpoint will receive the form data and send an email using Nodemailer.

Start the Backend Server
Run the backend server:

node app.js
