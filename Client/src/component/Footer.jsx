import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer style={footerStyle} id="last">
            <div style={footerSectionStyle} id="footAbout">
                <h4>About Our Bank</h4>
                <p>We are committed to providing our customers with exceptional service, competitive rates, and a wide range of financial products.</p>
            </div>
            <div style={footerSectionStyle}>
                <h4>Contact Us</h4>
                <p>Email: support@ourbank.com</p>
                <p>Phone: 1-800-555-1234</p>
                <p>Address: 123 Bank St, Financial City, FC 123456</p>
            </div>
            <div style={footerSectionStyle}>
                <h4>Quick Links</h4>
                <ul style={linkListStyle}>
                    <li><Link to="/home" style={linkStyle}>Home</Link></li>
                    <li><Link to="/login" style={linkStyle}>Login</Link></li>
                    <li><Link to="/registration" style={linkStyle}>Register</Link></li>
                </ul>
            </div>
            <div style={footerSectionStyle}>
                <h4>Follow Us</h4>
                <ul style={linkListStyle}>
                    <li><Link to="https://facebook.com" style={linkStyle}>Facebook</Link></li>
                    <li><Link to="https://twitter.com" style={linkStyle}>Twitter</Link></li>
                    <li><Link to="https://linkedin.com" style={linkStyle}>LinkedIn</Link></li>
                </ul>
            </div>
            <div style={footerSectionStyle}>
                <p>&copy; {new Date().getFullYear()} Our Bank. All rights reserved.</p>
            </div>
        </footer>
    );
};

const footerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '50px',
    padding: '2rem',
    backgroundColor: '#333',
    color: '#fff',
    flexWrap: 'wrap',
    textAlign: 'left',
};

const footerSectionStyle = {
    flexBasis: '20%',
    marginBottom: '1rem',
    minWidth: '250px',  // Ensures minimum width on smaller screens
};

const linkListStyle = {
    listStyle: 'none',
    padding: 0,
};

const linkStyle = {
    color: '#fff',
    textDecoration: 'none',
    display: 'block',
    marginBottom: '0.5rem',
};

// Add media query to adjust the layout for small screens
const mediaQueryStyles = {
    '@media (max-width: 768px)': {
        footerStyle: {
            flexDirection: 'column', // Stack footer sections vertically on smaller screens
            alignItems: 'center',
            padding: '1rem', // Adjust padding on smaller screens
        },
        footerSectionStyle: {
            flexBasis: '100%', // Make each section take full width
            textAlign: 'center', // Align content in the center
        },
    },
};

export default Footer;
