import React from "react";

const Dashboard = () => {
    const styles = {
        containerStyle: {
            display: "flex",
            height: "100vh",
        },
        sidebarStyle: {
            width: "250px",
            backgroundColor: "#333",
            color: "white",
            padding: "20px",
        },
        menuStyle: {
            listStyleType: "none",
            padding: 0,
        },
        menuItemStyle: {
            marginBottom: "10px", // Added spacing between buttons
        },
        mainContentStyle: {
            flex: 1,
            padding: "20px",
            backgroundColor: "#F5F5F5",
        },
        cardContainer: {
            display: "flex",
            gap: "20px",
            marginTop: "20px",
        },
        cardStyle: {
            backgroundColor: "white",
            padding: "20px",
            borderRadius: "8px",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
            width: "30%",
            textAlign: "center",
        },
    };

    return (
        <div style={styles.containerStyle}>
            <aside style={styles.sidebarStyle}>
                <h2>Dashboard</h2>
                <ul style={styles.menuStyle}>
                    <li style={styles.menuItemStyle}><button>Home</button></li>
                    <li style={styles.menuItemStyle}><button>📊 Analytics</button></li>
                    <li style={styles.menuItemStyle}><button>💰 Expenses</button></li>
                    <li style={styles.menuItemStyle}><button>⚙️ Settings</button></li>
                </ul>
            </aside>

            <main style={styles.mainContentStyle}>
                <h1>Welcome to Your Dashboard</h1>
                <div style={styles.cardContainer}>
                    <div style={styles.cardStyle}>
                        <h2>💸 Total Expenses</h2>
                        <p>$5,320</p>
                    </div>
                    <div style={styles.cardStyle}>
                        <h2>📈 Monthly Income</h2>
                        <p>$8,750</p>
                    </div>
                    <div style={styles.cardStyle}>
                        <h2>📉 Remaining Budget</h2>
                        <p>$3,430</p>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Dashboard;
