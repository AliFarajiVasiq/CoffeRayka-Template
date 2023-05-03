import './Navbar-Style.css'
export default function Navbar() {
    function clickedMenu(){
        const bar = document.querySelector(".bar");
        const ulMenu = document.querySelector('.ul-navbar')
        bar.classList.toggle("active");
        ulMenu.classList.toggle('ul-navbar-open')
    }
    return (
        <nav className="navbar">
            <div className="base" onClick={clickedMenu}>
                <div className="bar"></div>
            </div>
            <img src="image/Navbar/icon-navbar.png" alt="کافه رستوران رایکا" className="logo-navbar" />
            <ul className='ul-navbar' onClick={clickedMenu}>
                <li className="item-navbar"><a href="#container-landing" className="link-navbar">صفحه نخست</a></li>
                <li className="item-navbar"><a href="#container-about" className="link-navbar">درباره ما</a></li>
                <li className="item-navbar"><a href="#container-foodmenu" className="link-navbar">منوی رستوران</a></li>
                <li className="item-navbar"><a href="#container-chefs" className="link-navbar">سرآشپزها</a></li>
                <li className="item-navbar"><a href="#container-papular-food" className="link-navbar">گالری</a></li>
                <li className="item-navbar"><a href="#id" className="link-navbar">وبلاگ</a></li>
                <li className="item-navbar"><a href="#id" className="link-navbar">تماس با ما</a></li>
            </ul>
            <button className='btn btn-navbar'><a href="#id">رزرو میز</a></button>
        </nav>
    )
}
