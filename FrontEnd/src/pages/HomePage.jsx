import React from "react";
import { FaChartPie, FaUsers, FaFileInvoice, FaCheckCircle } from "react-icons/fa";
import "../css/homepage.css";

const HomePage = () => {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Enterprise Expense Management</h1>
        <p className="subtitle">Track, Manage & Analyze Expenses with Ease</p>
      </header>

      <section className="features">
        <div className="feature-card">
          <FaUsers className="feature-icon" />
          <h2>Role-Based Access</h2>
          <p>Ensure secure access with employee, manager, and admin roles.</p>
        </div>

        <div className="feature-card">
          <FaCheckCircle className="feature-icon" />
          <h2>Automated Approvals</h2>
          <p>Streamline expense approvals with predefined workflows.</p>
        </div>

        <div className="feature-card">
          <FaChartPie className="feature-icon" />
          <h2>Real-Time Analytics</h2>
          <p>Gain deep insights into company expenses with visual reports.</p>
        </div>

        <div className="feature-card">
          <FaFileInvoice className="feature-icon" />
          <h2>PDF Reporting</h2>
          <p>Generate and download detailed expense reports in PDF format.</p>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
