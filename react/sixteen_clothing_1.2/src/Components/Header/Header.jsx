import './Header.css'
function Header(){

    return(
        <>
    
            <div className="Header">
                     <div className="logo"><h2>Sixteen <span>clothing</span></h2></div>
    
                    <div className="rightbox_h">
                        <ul>
                        <li><a id="a1"  href="">Home</a></li>
                        <li><a id="a2" href="">Our products</a></li>
                        <li><a id="a3" href="">About us</a></li>
                        <li><a id="a4" href="">Contact us</a></li>
                        </ul>
                    </div>
                    <div className="menu">
                        <button><span><i class="fa-solid fa-bars"></i></span></button>
                    </div>
            </div>
    
            </>  
        ) 
}

export default Header;

