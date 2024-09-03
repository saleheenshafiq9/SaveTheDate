# Save The Date: A Party Planning Application

Welcome to the **Save The Date** GitHub repository! This project was developed as part of the Software Project Lab - 2 (SE 505) at the Institute of Information Technology, University of Dhaka. Below is a comprehensive overview of the project, its objectives, features, and the technologies used.

## Table of Contents

- [Project Overview](#project-overview)
- [Motivation](#motivation)
- [Objectives](#objectives)
- [Architecture](#architecture)
- [Features](#features)
- [Implementation](#implementation)
- [Challenges Faced](#challenges-faced)
- [Future Work](#future-work)
- [Conclusion](#conclusion)
- [References](#references)

## Project Overview

**Save The Date** is a web-based party planning application designed to connect service providers with customers looking to organize events. The application streamlines the process of booking venues, catering, decorations, and other services, making it easier for users to plan and manage events.

## Motivation

Planning events such as weddings or birthdays can be overwhelming, especially with the need to coordinate multiple services and manage budgets. **Save The Date** was developed to reduce this burden by providing an integrated platform where users can easily book services and manage their event details.

## Objectives

- **Centralized Service Platform:** Bring together various party-related service providers (venues, catering, decorators, etc.) in one place.
- **Automated Event Planning:** Generate full event plans based on user preferences.
- **Recommendation System:** Provide service recommendations based on user inputs like budget, location, and guest count.
- **Event Management:** Help users keep track of event planning and customizations.

## Architecture

**Save The Date** is built on a **three-tier architecture**:
1. **Presentation Tier:** Utilizes ReactJS for the frontend, offering a dynamic and responsive user interface.
2. **Application Tier:** Built with Django, a high-level Python web framework, handling the business logic and REST API integration.
3. **Data Tier:** MySQL is used as the database management system for storing structured data.

## Features

- **User Authentication:** Secure login and signup system with token-based authentication.
- **Profile Management:** Different views for customers and service providers, each with unique functionalities.
- **Party Booking System:** Users can browse and book services, with a cart feature to manage selected services.
- **Appointment Scheduling:** Customers can request and schedule appointments with service providers.
- **Recommendation System:** Implements the K-Nearest Neighbor algorithm to suggest services based on user preferences.
- **Responsive UI:** Designed using ReactJS and styled with Bootstrap for an intuitive user experience.

## Implementation

### Front-End
- **Styling:** Integrated Bootstrap 5 and various React libraries for enhanced UI/UX.
- **Components:** Modular components for handling services, profiles, booking, and more.
- **Profile Switching:** Dynamic routing based on user type (customer, service provider).

### Back-End
- **Django Framework:** Handles user data, service bookings, and recommendation logic.
- **REST API:** Facilitates communication between the frontend and backend, ensuring secure data transactions.
- **Recommendation System:** Calculates and recommends services using past data and user inputs.

## Challenges Faced

- **Collaboration & Distribution:** Managing the project across different tiers required careful planning and coordination.
- **Version Control:** Keeping up with updates in React and Django libraries was challenging, especially with changes in syntax and functionality.
- **Data Collection:** Gathering real-time data from vendors for the recommendation system required significant effort.
- **Integration Issues:** Ensuring smooth communication between the React frontend and Django backend posed challenges, particularly in CRUD operations.

## Future Work

The project has the potential for further development, including:
- **Live Progress Tracking:** Real-time updates from vendors to customers.
- **Chatbot Integration:** To facilitate communication between customers and service providers.
- **Mobile App Development:** Expanding the platform to mobile using React Native.
- **Guest List Management:** Tracking guests and managing RSVPs.
- **Business Model Development:** Establishing a sustainable business model to attract funding and expand the service.

## Conclusion

**Save The Date** aims to simplify the process of event planning by integrating multiple services into one platform. This project has not only provided valuable insights into web development but also laid the foundation for a potential commercial product that could ease the burden of organizing events.

## References

- [Django Documentation](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Django/Introduction)
- [REST API Security](https://hakin9.org/how-to-secure-your-rest-api-from-attackers/)
- [React Router](https://reactrouter.com/docs/en/v6/upgrading/v5)
- [Three-Tier Architecture](https://www.ibm.com/cloud/learn/three-tier-architecture)
- [MySQL Database](http://www.databasequest.com/index.php/product-service/mysql-dbquest)
