# NYC Listings Documentation

## Navigation

1. [Introduction](#introduction)
2. [Initial Setup](#initial-setup)
3. [Routes](#pages)
4. [APIs](#apis)

## Introduction

"NYC Listings" is a project designed for learning purposes. The application utilizes a modern tech stack including React, React-Bootstrap, React-DOM, and React-Router for a responsive user experience. It supports all CRUD operations. The backend operations are currently handled by SoftUni's server.

## Initial Setup

In order to run the application in the browser, you will have to execute the following commands:

/client folder

```
npm ic
npm run dev
```

/ server folder

```
node server.js
```

The application will then be accessible at https://localhost:5173

> NOTE: This application does not support persistent storage yet. In case of a server restart, please run localStorage.clear() in the browser.

## Routes

### <u>Guest and registered users:</u>

### Home ("/")

This is the landing page of the application. It offers navigation to other parts of the website and allows users to search for listings by title. The search feature supports partial matches and is case-insensitive.

### Categories ("/categories")

The category page segregates the application listings by category via API calls and allows for easy browsing.

### Listings ("/listings")

All of the available listings are accessible at this page. Each listing has a details' page. Authenticated users have the option to edit and delete posts made by them.

### Login ("/login")

The login page allows registered users to access their accounts by entering their credentials and has validation.

Preseeded user:

```
admin@abv.bg
admin
```

### Register ("/register")

The registration page is where new users create accounts.

### <u>Authenticated users:</u>

### My Listings ("/my-listings")u

This page displays the listings that the specific authenticated user has created. It allows users to view, manage, and edit their own listings, providing easy access to update details or remove properties as needed.

### Add Listing ("/add-listing")

This page allows authenticated users to create new property listings by filling in a form.

### Logout ("/Logout")

This option allows users to securely log out of their account. After logging out, users are redirected to the homepage of the website.

## APIs

The NYC Listings application communicates with Softuni's server to handle backend operations via API endpoints.

### <ul>API Endpoints</ul>

CRUD operations:

```
/data/listings
```

Create and Read listing reviews.

```
/data/reviews
```

New users registration.

```
/users/register
```

Existing users login.

```
/users/login
```

Existing users logout.

```
/users/logout
```

Thank you for reading my documentation
