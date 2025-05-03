import "../styles/footer.css"

export default function Footer(){
    return(
        <footer className="footer">
        <div className="footer-container">

        <div className="footer-section">
            <h2 className="footer-title">ProConnect</h2>
            <p>Connect with professionals, discover job opportunities, and grow your career with us.</p>
        </div>

        <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/jobs">Jobs</a></li>
                <li><a href="/connections">Connections</a></li>
                <li><a href="/about">About Us</a></li>
            </ul>
        </div>

        <div className="footer-section">
            <h3>Resources</h3>
            <ul>
                <li><a href="/privacy">Privacy Policy</a></li>
                <li><a href="/terms">Terms of Service</a></li>
                <li><a href="/help">Help Center</a></li>
            </ul>
        </div>

        <div className="footer-section">
            <h3>Contact</h3>
            <p>Email: support@proconnect.com</p>
            <p>Phone: +91-9876543210</p>
            <div className="footer-socials">
                <a href="#">LinkedIn</a>
                <a href="#">Twitter</a>
                <a href="#">Instagram</a>
            </div>
        </div>

        </div>

        <div className="footer-bottom">
        © 2025 ProConnect. All rights reserved.
        </div>
    </footer>
    )
}