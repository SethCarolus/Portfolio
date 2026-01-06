
import './Hero.css'


function Hero() {
    return (
        <div
            className="hero">

            <div>
                <img 
                    className="fixed-image" 
                    src="/resources/DSC_0841.webp"/>
            </div>

            <div
                className="hero-text">
                <h2>Passionate Software Engineer</h2>
                <h3>with an interest in audio software</h3>
            </div>
        </div> 
    )

}

export default Hero;