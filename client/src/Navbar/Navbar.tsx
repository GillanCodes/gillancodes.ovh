import ThemeBtn from "./ThemeBtn";

export default function Navbar() {
  return (
    <nav className='main-nav'>
        <a href="/" className="main-logo">
          <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="" />
        </a>
        <div className="controls">
            <ThemeBtn />
            <button className='nav-btn'>
              <p>L</p>
            </button>
        </div>
    </nav>
  )
}
