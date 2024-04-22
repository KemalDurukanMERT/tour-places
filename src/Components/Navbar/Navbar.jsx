import "./Navbar.css"

const Navbar = () => {
  
    // const linkStyling = {
    //     border: "3px solid green"
    // }



  return (
  
    <nav className="navbar bg-dark d-flex justify-content-around">
        {/* <a href="#hakkimizda" style={{
            border: "3px solid red"
        }}  >Hakkimizda</a>
        <a href="#hakkimizda" style={linkStyling} >Servisler</a>
        <a href="#hakkimizda" className="border border-danger text-danger m-3 p-3">Blog</a> */}

        <a href="#aboutus" className="text-decoration-none fs-1 p-1">About Us</a>
        <a href="#foryou" className="text-decoration-none fs-1 p-1">For You</a>
        <a href="#services" className="text-decoration-none fs-1 p-1">Services</a>
        <a href="#blog" className="text-decoration-none fs-1 p-1">Blog</a>
        <a href="#contact" className="text-decoration-none fs-1 p-1">Contact</a>

        
    </nav>

)
};

export default Navbar;
