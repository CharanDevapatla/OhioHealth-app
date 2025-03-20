# OhioHealth Web Development Kata - Full Stack Project

## ** Overview**
This project is a full-stack web application consisting of:
- **Frontend:** React.js for the user interface.
- **Backend:** .NET Web API for handling business logic and database operations.
- **Database:** SQL Server for storing user data.

---

## ** Technologies Used**
### **Frontend (React)**
- React.js
- Fetch API (for API calls)
- CSS (for styling)

### **Backend (.NET Web API)**
- C# with ASP.NET Core
- Entity Framework Core (EF Core)
- SQL Server
- Swagger (API testing)

---

## ** My Approach to Solving the Project**
### ** Understanding the Requirements**
- Read the project description carefully.
- Identified the required API endpoints.
- Planned how the React frontend would communicate with the .NET backend.

### ** Setting Up the Backend (.NET)**
- Created a **new .NET Web API project** in Visual Studio.
- Set up **Entity Framework Core** to interact with the SQL database.
- Created the **User model** and **DbContext** for database operations.
- Implemented **API endpoints** for:
  - `POST /api/users/save` (Save user data)
  - `GET /api/users/retrieve` (Retrieve saved users)
- Added **API key validation** to secure endpoints.
- Tested API using **Postman** and **Swagger**.

### ** Setting Up the Frontend (React)**
- Created a **new React project** (`create-react-app`).
- Built a **UserForm component** to handle:
  - Form inputs for user details.
  - Submission of data to the backend.
  - Retrieval of saved users.
- Used **Fetch API** to communicate with the backend.
- Styled the UI to match the given design.


### ** Hosting & Deployment**
- Pushed the entire project to **GitHub** for submission.
- Verified that both **frontend** and **backend** are correctly stored in the repository.

---

