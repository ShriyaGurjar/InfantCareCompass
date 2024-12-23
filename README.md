# InfantCareCompass

## Overview

**InfantCareCompass** is a comprehensive web application designed to assist new and busy parents in managing their child's healthcare needs. The platform offers features such as vaccination tracking, childcare education, and more, empowering parents with a digital toolkit for effective child healthcare management. 

## Features

- **Vaccination Tracking**: Keep track of your child's vaccination schedule and receive timely reminders.
- **Childcare Education**: Access a wealth of resources and articles to help you navigate the challenges of parenting.
- **User-Friendly Interface**: Intuitive design ensures ease of use for all users.

## Technologies Used

- **Frontend**: React.js with Vite for fast and efficient development.
- **Styling**: TailwindCSS for responsive and modern UI design.
- **Backend**: Node.js and Express.js for handling API requests.
- **Database**: MongoDB for secure and scalable data storage.
- **Image Management**: Cloudinary for storing and retrieving user-uploaded images.

## Getting Started

### Prerequisites

- Node.js installed on your machine.
- MongoDB instance running locally or a cloud MongoDB URI.
- Cloudinary account for image management.

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Amarjha01/InfantCareCompass.git
   cd InfantCareCompass

2. **Install dependencies:**

    ```bash
    # Install server dependencies
    npm install

    # Navigate to the client directory and install dependencies
    cd client
    npm install

3. **Set up environment variables:**
Create a .env file in the root directory and add the following:

   ```bash
   PORT=5000
   MONGO_URI=your_mongodb_uri
   CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
   CLOUDINARY_API_KEY=your_cloudinary_api_key
   CLOUDINARY_API_SECRET=your_cloudinary_api_secret

4. **Run the application:**
   ```bash
   # Start the backend server
   npm start

   # In a separate terminal, navigate to the client directory and start the frontend
   cd client
   npm run dev


5. **Project Structure:**

   ```bash
   InfantCareCompass/
   ├── client/                 # React frontend
   │   ├── public/             # Public assets
   │   └── src/                # Source files
   │       ├── components/     # Reusable components
   │       ├── pages/          # Page components
   │       ├── App.jsx         # Main App component
   │       └── index.css       # TailwindCSS configuration
   ├── server/                 # Node.js backend
   │   ├── models/             # Mongoose models
   │   ├── routes/             # API routes
   │   ├── controllers/        # Route handlers
   │   └── index.js            # Entry point for the server
   ├── .env                    # Environment variables
   ├── package.json            # NPM package configuration
   └── README.md               # Project documentation


---

### Contributing

We welcome contributions to enhance the functionality and features of InfantCareCompass.

To contribute:
Fork the repository.
Create a new branch: git checkout -b feature/your-feature-name.
Make your changes and commit them: git commit -m 'Add new feature'.
Push to the branch: git push origin feature/your-feature-name.
Submit a pull request detailing your changes.

# Screenshot 

<details>	
 <summary><b> View </b></summary><br>
<div style='display:flex; align-items:center; gap: 10px;' align='center'>
    <img src="" alt="" />
</div>
</details>
