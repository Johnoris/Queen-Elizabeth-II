const Footer = () => {
    return(
        <footer id='tributes'>
            <div className="footer-section-1">
                <div>
                    <h3>Tributes</h3>
                    <p>World leaders pay tribute to Queen Elizabeth II</p>
                </div> 
                <div className='d-flex see-all'>
                    <h4>See All</h4>
                    <img src={require('../assets/right-arrow.png')} alt=""/>
                </div>              
            </div>
            <div className="footer-section-2">
                <PresidentCard 
                src={require('../assets/buhari.png')}
                text="
                The story of modern Nigeria will never be complete without a chapter on Queen Elizabeth ll, a towering global personality and an outstanding leader. She dedicated her life to making her nation, the Commonwealth and the entire world a better place.”
                " 
                name="MUHAMMADU BUHARI" 
                subtitle="President of Nigeria"/>
                <PresidentCard 
                src={require('../assets/macron.png')}
                text="“Her Majesty Queen Elizabeth II embodied the British nation’s continuity and unity for over 70 years. I remember her as a friend of France, a kind-hearted queen who has left a lasting impression on her country and her century.”" 
                name="EMMANUEL MACRON" 
                subtitle="President of France"
                />
            </div>
            <div className="footer-section-3">
                <span><img src={require('../assets/logo.png')}alt=""/></span>
                <h2>QUEEN ELIZABETH ALEXANDRA MARY WINDSOR</h2>
                <p>Forever in our hearts<img src={require('../assets/emoji.png')}alt=""/></p>
            </div>
        </footer>
    )
}
export default Footer;

const PresidentCard = (props) => {
    return(
        <div className='president-card'>
            <div>
                <span><img src={props.src} alt=""/></span>
                <h4>{props.text}</h4>
            </div>
            <h3>{props.name}</h3>
            <p>{props.subtitle}</p>
        </div>
    )
}