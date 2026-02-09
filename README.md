# 🚀 Findoc Clone

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)

**Findoc Clone** is a high-fidelity, modern Fintech UI kit designed for trading platforms. Built with performance and user experience in mind, it features a comprehensive suite of tools for traders, admins, and general users, all wrapped in a clean, responsive design.

---

## ✨ Key Features

### 🖥️ User Experience
* **Landing Page**: A conversion-optimized landing page with pricing tiers, feature showcases, and trust signals.
* **Secure Authentication**: A streamlined login flow simulating Mobile Number & OTP verification.
* **Interactive Dashboard**: Real-time portfolio performance tracking, holdings summary, and market indices at a glance.

### 📈 Trading & Market Analysis
* **Advanced Market View**:
    * Interactive Candlestick & Volume charts using `Recharts`.
    * Live Market Depth (Order Book) visualization.
    * Instant Buy/Sell order placement panel.
    * Top Gainers & Losers tracking.

### 🛡️ Administrative & Settings
* **Admin Panel**: comprehensive dashboard for monitoring active users, pending KYC approvals, and recent transactions.
* **Profile Management**: Detailed user settings including bank account management, UPI integration, and 2FA security configuration.

---

## 🛠️ Tech Stack

This project uses the latest modern web technologies for speed and scalability:

* **Core**: [React 18](https://react.dev/) + [Vite](https://vitejs.dev/)
* **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
* **Visualization**: [Recharts](https://recharts.org/) for financial charting
* **Components**: [Radix UI](https://www.radix-ui.com/) primitives for accessibility
* **Icons**: [Lucide React](https://lucide.dev/)

---

## 🚀 Getting Started

Follow these steps to set up the project locally.

### Prerequisites
* Node.js (v18 or higher recommended)
* npm or yarn

### Installation

1.  **Clone the repository**
    ```bash
    git clone [https://github.com/your-username/findoc-clone.git](https://github.com/your-username/findoc-clone.git)
    cd findoc-clone
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Start the development server**
    ```bash
    npm run dev
    ```

4.  Open your browser and navigate to `http://localhost:5173` (or the port shown in your terminal).

---

## 📂 Project Structure

```text
src/
├── app/
│   ├── App.tsx                 # Main application router/layout
│   ├── components/
│   │   ├── AdminPanel.tsx      # Admin dashboard view
│   │   ├── LandingPage.tsx     # Homepage marketing view
│   │   ├── LoginScreen.tsx     # Authentication screens
│   │   ├── MarketView.tsx      # Trading interface
│   │   ├── ProfileSettings.tsx # User settings
│   │   ├── UserDashboard.tsx   # User portfolio summary
│   │   └── ui/                 # Reusable UI components (buttons, inputs, etc.)
│   └── ...
├── styles/
│   ├── tailwind.css            # Tailwind configuration
│   └── theme.css               # Global theme variables
└── main.tsx                    # Entry point
