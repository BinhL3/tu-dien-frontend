function Header() {
    return(
        <div className="header">
            <nav>
                <ul>
                    <h1>tự điền</h1>
                    <li> <a href="#">home</a></li>
                    <li><a href="#">random</a></li>
                </ul>
            </nav>
            <input className="search-bar" type="text" placeholder="tra từ.."/>
        </div>
    )
}   
export default Header;