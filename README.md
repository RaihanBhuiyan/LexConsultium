# LexConsultium

## Overview

LexConsultium is a consultancy-based law firm automation system developed using **React** and **PHP 8**. The system is designed to streamline legal consultancy operations by automating case management, client interactions, document handling, and appointment scheduling. It provides an intuitive and efficient platform for law firms to manage their day-to-day activities seamlessly.

## Technologies Used

- **React** - Frontend UI development
- **PHP 8** - Backend logic and API integration
- **MySQL** - Database management
- **Blade & Laravel Components** - Server-side rendering and templating
- **Node.js & NPM** - Frontend dependency management
- **Bootstrap & Tailwind CSS** - Responsive UI design

## Key Features

### 1. Case Management
- Create, update, and track legal cases
- Assign cases to different lawyers
- Maintain a case history log

### 2. Client Management
- Register and manage client information
- Track client interactions and case progress
- Secure communication channels for clients and lawyers

### 3. Document Automation
- Upload and store legal documents securely
- Auto-generate contracts, agreements, and reports
- Version control for document updates

### 4. Appointment Scheduling
- Online booking for legal consultations
- Calendar integration for managing lawyer availability
- Automated reminders via email and SMS

### 5. Billing & Invoicing
- Generate invoices for legal services
- Track payments and outstanding balances
- Support for multiple payment methods

### 6. User Roles & Access Control
- Role-based access for admins, lawyers, and clients
- Secure authentication and authorization
- Audit logs for tracking system activities

## Installation Guide

### Prerequisites
Ensure you have the following installed:
- **PHP 8**
- **MySQL**
- **Composer**
- **Node.js & NPM**

### Setup Steps

1. **Clone the repository**
   ```sh
   git clone https://github.com/RaihanBhuiyan/LexConsultium.git
   ```
2. **Navigate to the project directory**
   ```sh
   cd LexConsultium
   ```
3. **Install PHP dependencies**
   ```sh
   composer install
   ```
4. **Install Node.js dependencies**
   ```sh
   npm install
   ```
5. **Set up the environment**
   ```sh
   cp .env.example .env
   php artisan key:generate
   ```
6. **Create the database and run migrations**
   ```sh
   php artisan migrate --seed
   ```
7. **Start the backend server**
   ```sh
   php artisan serve
   ```
8. **Start the frontend**
   ```sh
   npm start
   ```

## Usage

- Admins can manage cases, clients, and lawyers.
- Lawyers can update case progress and communicate with clients.
- Clients can book appointments and track case updates.
- The system automates legal document handling and billing.

## Contribution

Contributions are welcome! Please follow the standard GitHub workflow:

1. Fork the repository.
2. Create a new branch.
3. Commit changes and push.
4. Submit a pull request.

## License

This project is licensed under the MIT License.

