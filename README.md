# Eventify

Eventify is a full-stack web platform that connects **Event Organizers**, **Customers**, and an **Admin**. Organizers publish events, customers browse and book them, and the admin oversees approvals and platform management.

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React 18, Vite, Tailwind CSS, Redux Toolkit, React Router v6 |
| Backend | Node.js, Express.js |
| Database | MongoDB (Mongoose) |
| Auth | JWT, OTP via Email, Google OAuth 2.0 |
| Payments | Razorpay |
| File Storage | Cloudinary |
| Email | Nodemailer (Gmail SMTP) |

---

## Project Structure

```
Eventify/
├── backend/
│   ├── controllers/      # Business logic
│   ├── models/           # Mongoose schemas
│   ├── routes/           # API route definitions
│   ├── middleware/        # Auth & rate limiting
│   ├── utils/            # Cloudinary, Multer, Google OAuth helpers
│   ├── db/               # MongoDB connection
│   └── app.js            # Express entry point
└── frontend/myapp/
    ├── src/
    │   ├── components/   # Admin, Customer, Organizer UI components
    │   ├── store/        # Redux slices
    │   ├── api/          # Axios API calls
    │   ├── layouts/      # Role-based layouts
    │   └── utils/        # Razorpay loader
    └── index.html
```

---

## Roles & Features

### Customer
- Register/Login with email+OTP or Google OAuth
- Browse and search approved events by category
- Book events and pay via Razorpay
- View and cancel bookings
- Submit reviews for attended events
- Manage profile

### Event Organizer
- Register and await admin approval
- Create, edit, and manage events (with image upload)
- View bookings and revenue insights for their events
- View customer reviews

### Admin
- Approve/reject organizer registrations
- Approve/reject submitted events with feedback
- Manage event categories
- View all users, bookings, and contact messages
- Reply to contact messages
- Access platform-wide analytics

---

## API Endpoints

| Prefix | Description |
|--------|-------------|
| `/api/auth` | Register, login, OTP verify, Google OAuth, profile |
| `/api/events` | CRUD for events, search, filter |
| `/api/bookings` | Create, view, cancel bookings; Razorpay integration |
| `/api/review` | Submit and view event reviews |
| `/api/categories` | Manage event categories |
| `/api/admin` | Admin-only management routes |
| `/api/contact` | Contact form submission and replies |

---

## Getting Started

### Prerequisites
- Node.js >= 18
- MongoDB Atlas account
- Cloudinary account
- Razorpay test account
- Google OAuth credentials

### Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file in `backend/`:

```env
PORT=4000
MONGO_URI=<your_mongodb_uri>
JWT_SECRET=<your_jwt_secret>
FRONTEND_URL=http://localhost:5173

MAILHOST=smtp.gmail.com
MAILPORT=587
MAIL_USERNAME=<your_gmail>
MAIL_PASSWORD=<your_gmail_app_password>

GOOGLE_CLIENT_ID=<your_google_client_id>
GOOGLE_CLIENT_SECRET=<your_google_client_secret>
GOOGLE_REDIRECT_URL=http://localhost:4000/api/auth/google/callback

RAZORPAY_TEST_KEY_ID=<your_razorpay_key_id>
RAZORPAY_TEST_KEY_SECRET=<your_razorpay_key_secret>

CLOUDINARY_CLOUD_NAME=<your_cloud_name>
CLOUDINARY_API_KEY=<your_api_key>
CLOUDINARY_API_SECRET=<your_api_secret>
```

```bash
npm start
```

### Frontend Setup

```bash
cd frontend/myapp
npm install
```

Create a `.env` file in `frontend/myapp/`:

```env
VITE_BACKEND_URL=http://localhost:4000/api
VITE_BACKEND_GOOGLE_URL=http://localhost:4000/api/auth/google
```

```bash
npm run dev
```

The app will be available at `http://localhost:5173`.
