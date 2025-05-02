
#  Email Inbox UI - Next.js

A modern, responsive email inbox UI application built with Next.js, Shadcn/ui, Tailwind CSS, and TypeScript. This project demonstrates the ability to implement a clean, highly functional UI with seamless integration of powerful libraries and frameworks. The goal is to provide a polished, professional interface for managing email-like items, which is highly customizable and ready for further extensions.

## Features

- Responsive Design: Optimized for desktop views.
- Interactive Email List: Simulated email inbox with hover effects (items are not clickable).
- Mail List UI: Styled with Tailwind CSS and Shadcn/ui.
- TypeScript Integration: Ensures type safety and enhances developer experience.

## Tech Stack
- Next.js
- Shadcn/ui
- Tailwind CSS
- TypeScript

## Setup

### 1. Clone the Repository:

```bash
https://github.com/Subrata41/Mail-box-next.js.git
cd Mail-box-next
```

### 2. Install Dependencies:

```bash
npm install

```
or

```bash
yarn install

```

### 3. Run the Development Server:

```bash
npm run dev


```
or

```bash
yarn dev

```

#### Visit http://localhost:3000 in your browser.

## Folder Structure 

- /app: Contains routing and page components.
     - layout.tsx: Defines the root layout for the application.
     - page.tsx: The main email inbox page.

- /components: Contains reusable UI components.
    - Sidebar.tsx: Sidebar component for navigation.
    - SidebarItem.tsx: Button component for each sidebar item.
    - MailList.tsx: Component to display the list of emails.
    - MailDetail.tsx: Component to show the details of a selected email.


## Assumptions & Design Choices
- Shadcn/ui Integration: Utilized Shadcn/ui for pre-styled components, eliminating the need for additional Tailwind CSS configurations.
- Component-Based Architecture: Employed a modular structure with reusable components for scalability and maintainability.
- Dynamic Routing: Implemented Next.js's App Router for efficient page management and dynamic content rendering.

## Live Deployment

#### https://mail-box-next-js.vercel.app








