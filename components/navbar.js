import Link from "next/link"
import "../styles/nav.css"
import Image from "next/image"
export default function Navbar(){
    return(
        <div className="nav">
            <div className="left">
                <Image src="/logo.png" alt="logo" className="logo" height={170} width={170} />
                <Link href="/" className="link" >Home</Link>
                <Link href="/job" className="link">Jobs</Link>
                <Link href="/connection" className="link">Connections</Link>
                <Link href="/blog" className="link">Blog</Link>
                <Link href="/about" className="link">About</Link>
            </div>
            <div className="right">
                <Link href="/" className="link"><Image src="/profile_logo.png" alt="profile_img" height={50} width={50}/></Link>
            </div>
        </div>
    )
}