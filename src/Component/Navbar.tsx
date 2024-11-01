import Link from "next/link"

const Navbar = () => {
  return (
    <div>
        <header style={{backgroundColor:"blue", color:"white" , height:40}}>
            <nav>
                <ul style={{display:"flex" , justifyContent:"space-evenly", alignContent:"center", padding:8}}>
                    <li style={{color:"white", marginRight:20}}>
                        <Link href="/catagery/crypto">Crypto</Link>
                    </li>

                    <li style={{color:"white"}}>
                        <Link href="/product/product1">Laptop</Link>

                    </li>

                </ul>
            </nav>
        </header>
      
    </div>
  )
}

export default Navbar
