import Link from "next/link"
import "../styles/nav.css"
export default function Navbar(){
    return(
        <div className="nav">
            <div className="left">
                <img src="/logo.png" alt="logo" className="logo"/>
                <Link href="/" className="link" >Home</Link>
                <Link href="/job" className="link">Jobs</Link>
                <Link href="/connection" className="link">Connections</Link>
                <Link href="/blog" className="link">Blog</Link>
                <Link href="/about" className="link">About</Link>
            </div>
            <div className="right">
                <Link href="/" className="link"><img src="/profile_logo.png" /></Link>
            </div>
        </div>
    )
}