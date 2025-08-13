# User Form Project

A simple web form that collects user information, stores it in objects, and displays all users dynamically using JavaScript.

---

## Functionality

### 1. Submit User Data
- **Trigger:** Clicking the **Submit** button  
- **Description:** Collects input data from the form and creates a new `User` object.  
- **Action:** Reads values from the DOM and stores the newly created user in an array.

### 2. Store Users
- **Description:** Stores all users created during the session.  
- **Data Structure:** Array of `User` objects  
- **Purpose:** Keeps track of multiple user entries.

### 3. Display All Users
- **Trigger:** Clicking the **Show Users** button  
- **Description:** Displays all user information in the DOM.  
- **Action:** Iterates over the users array and inserts each user's info into a paragraph element.

---

## Technologies Used
- HTML
- CSS
- JavaScript (ES6)

---

## How It Works
1. User fills out the form fields (first name, last name, age).  
2. Pressing **Submit** creates a `User` object and stores it in the session array.  
3. Pressing **Show Users** displays all stored users below the form.

---

## Author
Fatin Aman

## Date
2025-08-13
