Folder structure for organizing the backend codebase of your Attendance and Leave Management system. This structure assumes you're using Node.js with Express.js as the web framework and MongoDB as the database. Adjustments may be needed based on your specific technology stack and preferences.

```plaintext
/attendance-leave-management-backend
  /config
    - db.js
    - auth.js
  /controllers
    - authController.js
    - employeeController.js
    - leaveController.js
    - attendanceController.js
    - reportController.js
  /models
    - User.js
    - Employee.js
    - LeaveRequest.js
    - AttendanceRecord.js
  /middlewares
    - authMiddleware.js
    - validationMiddleware.js
  /routes
    - authRoutes.js
    - employeeRoutes.js
    - leaveRoutes.js
    - attendanceRoutes.js
    - reportRoutes.js
  server.js
  package.json
```

### 1. **`/config`:**
   - **`db.js`:** Configuration for connecting to the MongoDB database.
   - **`auth.js`:** Configuration for authentication strategies and token secrets.

### 2. **`/controllers`:**
   - **`authController.js`:** Handles user authentication and authorization.
   - **`employeeController.js`:** Manages CRUD operations for employee information.
   - **`leaveController.js`:** Manages leave requests, approvals, and balances.
   - **`attendanceController.js`:** Handles attendance tracking and reporting.
   - **`reportController.js`:** Generates various reports and analytics.

### 3. **`/models`:**
   - **`User.js`:** Model for user authentication and authorization.
   - **`Employee.js`:** Model for storing employee details.
   - **`LeaveRequest.js`:** Model for leave requests and approvals.
   - **`AttendanceRecord.js`:** Model for recording attendance.

### 4. **`/middlewares`:**
   - **`authMiddleware.js`:** Middleware for authentication using Passport.js.
   - **`validationMiddleware.js`:** Middleware for request input validation.

### 5. **`/routes`:**
   - **`authRoutes.js`:** Authentication routes (login, register, logout).
   - **`employeeRoutes.js`:** CRUD routes for managing employee information.
   - **`leaveRoutes.js`:** Routes for leave requests, approvals, and balances.
   - **`attendanceRoutes.js`:** Routes for handling attendance tracking.
   - **`reportRoutes.js`:** Routes for generating reports and analytics.

### 6. **`server.js`:**
   - Main entry point for the Express.js server.

### 7. **`package.json`:**
   - Project dependencies and scripts.

This structure provides a foundation for organizing your backend codebase.
