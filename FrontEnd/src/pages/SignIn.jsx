import React from "react";

const SignInPage = () => {
    const [formData, setFormData] = useState({
        name: "",
        number: "",
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Submitted:", formData);
        // You can add API call logic here
    }
    return (
        <div style={{ padding: "20px", maxWidth: "400px", margin: "0 auto", textAlign: "center" }}>
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <input 
                    type="text" 
                    name="name" 
                    placeholder="Full Name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    required 
                    style={inputStyle}
                />
                <input 
                    type="tel" 
                    name="number" 
                    placeholder="Phone Number" 
                    value={formData.number} 
                    onChange={handleChange} 
                    required 
                    style={inputStyle}
                />
                <input 
                    type="email" 
                    name="email" 
                    placeholder="Email Address" 
                    value={formData.email} 
                    onChange={handleChange} 
                    required 
                    style={inputStyle}
                />
                <input 
                    type="password" 
                    name="password" 
                    placeholder="Password" 
                    value={formData.password} 
                    onChange={handleChange} 
                    required 
                    style={inputStyle}
                />
                <button type="submit" style={buttonStyle}>Sign Up</button>
            </form>
        
        </div>
    );
};

const inputStyle = {
    padding: "10px",
    fontSize: "16px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    width: "100%"
};

const buttonStyle = {
    padding: "10px",
    fontSize: "16px",
    borderRadius: "5px",
    border: "none",
    backgroundColor: "#007BFF",
    color: "white",
    cursor: "pointer"
};


export default SignInPage;
