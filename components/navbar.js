import Link from "next/link"
import "../styles/nav.css"
export default function Navbar(){
    return(
        <div className="nav">
            <div className="left">
                <img src="/logo.png" alt="logo" className="logo"/>
                <Link href="/" className="link" >Home</Link>
                <Link href="/" className="link">Jobs</Link>
                <Link href="/" className="link">Connections</Link>
                <Link href="/" className="link">Blog</Link>
                <Link href="/" className="link">About</Link>
            </div>
            <div className="right">
                <Link href="/" className="link"><img src="/profile_logo.png" /></Link>
            </div>
        </div>
    )
}