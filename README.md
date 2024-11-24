# Expense Tracker App 📊💰

![Expense Tracker]()

[screen-capture (14).webm](https://github.com/user-attachments/assets/a55ab0f4-bcf4-4054-ab65-d892c92c07ee)


Welcome to the **Expense Tracker App**! This is a full MERN (MongoDB, Express, React, Node.js) stack application designed to help you manage your expenses efficiently and effortlessly.

## Features ✨
<video width="100%" height="auto" autoplay loop muted> <source src="./src/ScreenShots/screen-capture (14).webm" type="video/mp4"> Your browser does not support the video tag. </video>

- 🔐 **User Authentication**: Secure sign-up and login functionality.
- 💵 **Expense Management**: Create, read, update, and delete expenses.
- 📅 **Monthly Expense Limit**: Set a monthly spending limit.
- 🔍 **Filtering**: Filter expenses by category, date range, and amount.
- 📊 **Analytics**: View detailed analytics including:
  - Total expenses by category
  - Monthly expense summaries
  - Percentage of the monthly limit spent in each category

## Project Structure 🏗️

```plaintext
expense-tracker/
│   .env
│   package.json
│   README.md
│   server.js
└───client/
│   └───public/
│   └───src/
│       │   App.js
│       │   index.js
│       └───components/
│       └───pages/
│       └───redux/
└───server/
    └───config/
    └───controllers/
    └───middleware/
    └───models/
    └───routes/
## Getting Started 🚀
Prerequisites ✅
Make sure you have the following installed on your system:

Node.js 🌐

MongoDB 🗄️

Git 🔧

## Installation 📥
Clone the repository:

bash
git clone https://github.com/your-username/expense-tracker.git
cd expense-tracker
Install server dependencies:

bash
cd server
npm install
Install client dependencies:

bash
cd ../client
npm install
Set up environment variables: Create a .env file in the server directory and add the following:

plaintext
MONGO_URI=your_mongo_db_uri
JWT_SECRET=your_jwt_secret
Running the Application 🏃‍♂️
Run the server:

bash
cd server
npm start
Run the client:

bash
cd ../client
npm start
Access the Application: Open your browser and navigate to http://localhost:3000 to see the application in action.

## License 📄
This project is licensed under the MIT License - see the LICENSE file for details.

## Contributing 🤝
Contributions are welcome! Please fork the repository and submit a pull request for review.
