import '../styles/Headers.css'

function Header(){


    return(
    <nav className='nav' >
        <h1> Movie Booking</h1>
        
        <ul className='no-decor'>
            <li>Home</li>
            <li>Orders</li>
            <li>ContactUs</li>    
        </ul>
     </nav>
    );


}



export default Header;