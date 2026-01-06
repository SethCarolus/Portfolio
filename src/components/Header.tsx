
import './Header.css'

function Header() {
    return (
        <header className='header'>
            <h1>Seth Carolus</h1>
            <nav>
                <button>
                    <a href='https://github.com/sethcarolus'>
                        <img src="/resources/icons/GitHub_Logo_White.png"/>
                        <img src="/resources/icons/github-mark-white.png"/>
                    </a>
                </button>
                <button>
                    <button><a href="https://www.linkedin.com/in/seth-carolus-8bb92a333/" target="_blank">
                        <img src="/resources/icons/LI-Logo.png"/>
                    </a></button>
                </button>
            </nav>
        </header>
    )
}

export default Header;