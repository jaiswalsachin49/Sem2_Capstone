import "../styles/footer.css"
import Link from "next/link"
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
                <li><Link href="/" className="link" >Home</Link></li>
                <li><Link href="/job" className="link" >Jobs</Link></li>
                <li><Link href="/connection" className="link" >Connections</Link></li>
                <li><Link href="/about" className="link" >About Us</Link></li>
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