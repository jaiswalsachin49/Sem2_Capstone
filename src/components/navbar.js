import Link from "next/link"
export default function Navbar(){
    return(
        <div className="nav">
            <Link href="/" className="link"><h1>ProConnect</h1></Link>
            <ul>
                <Link href="/" className="link">Home</Link>
                <Link href="/about" className="link">About</Link>
                <Link href="/blog" className="link">Blog</Link>
                <Link href="/jobs" className="link">Jobs</Link>
                <Link href="/messages" className="link">Message</Link>
                <Link href="/profile" className="link">Profile</Link>
            </ul>
        </div>
    )
}