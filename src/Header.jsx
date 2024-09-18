function Header() {
    return (
        <header className="header">
            <nav>
                <ul>
                    <li><h1>tự điền</h1></li>
                    <li><a href="#">trang chủ</a></li>
                    <li><a href="#">ngẫu nhiên</a></li>
                </ul>
            </nav>
            <input className="search-bar" type="text" placeholder="tra từ.."/>
        </header>
    )
}   

export default Header;