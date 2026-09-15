# 🚀 Developer Portfolio Website

A dynamic, fully responsive, and modern developer portfolio website built using **React.js**, **React-Bootstrap**, and **EmailJS**. Designed to showcase projects, technical skillsets, and provide a direct contact channel for freelance or employment opportunities.

---

## 🌟 Key Features

* **⚡ Interactive UI:** Smooth scrolling, clean layout, and modern UI components built with React-Bootstrap.
* **📬 Direct Emailing System:** Integrated with EmailJS to receive contact messages directly into Gmail without a backend server.
* **🔄 Infinite Marquee Ticker:** Custom CSS keyframes-driven sticky footer ticker continuously highlighting core roles (Full Stack, Java, React Developer).
* **📱 Fully Responsive Design:** Optimized for seamless performance across desktop, tablet, and mobile displays.
* **🎯 Real-Time Form Feedback:** Dynamic alert feedback for loading, success, and error states on form submissions.

---

## 🛠️ Tech Stack & Libraries

* **Frontend:** React.js, JavaScript (ES6+)
* **Styling & Components:** Bootstrap 5, React-Bootstrap, Custom CSS Animations
* **Icons:** React Icons (`react-icons/fa`)
* **Email Service:** EmailJS (`@emailjs/browser`)

---

## 📂 Project Structure

```text
src/
 ├── assets/          # Project images and graphics
 ├── components/      # Reusable UI components (Contact, FooterMarquee, etc.)
 ├── App.jsx          # Main application layout component
 ├── main.jsx         # Application entry point
 └── index.css        # Global styles and custom keyframe animations

```

---

## 🚀 Getting Started

Follow these steps to run the project locally:

### 1. Prerequisites

Make sure you have Node.js installed on your machine.

### 2. Installation

Clone the repository:

```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPOSITORY_NAME.git
cd YOUR_REPOSITORY_NAME

```

Install dependencies:

```bash
npm install

```

### 3. Run Development Server

```bash
npm run dev

```

Open `http://localhost:5173` in your browser to view the project.

---

## 📩 EmailJS Configuration

To configure the contact form for your own email ID:

1. Create an account on [EmailJS](https://www.emailjs.com/?utm_source=gemini).
2. Create an **Email Service** (e.g., Gmail).
3. Create an **Email Template** with variables: `{{user_name}}`, `{{user_email}}`, `{{phone}}`, and `{{message}}`.
4. Update your `Service ID`, `Template ID`, and `Public Key` in `src/components/Contact.jsx`.
