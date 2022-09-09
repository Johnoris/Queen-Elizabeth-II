import Footer from '../components/footer';
import Nav from '../components/nav';

const Home = () => {
  return (
    <div className="container">
      <Nav/> 
       <div className='top-section'>
        <div className='text'>
          <img src={require('../assets/big-logo.png')} alt="" />
          <h1>Queen Elizabeth II</h1>
          <p>"I have in sincerity pledged myself to your service, as so many of you are pledged to mine. Throughout all my life and with all my heart I shall strive to be worthy of your trust."</p>
          <div className="author">
            <h6>- Queen Elizabeth Alexandra Mary Windsor</h6>
            <p>21 April 1926 - 8 September 2022</p>
          </div>
        </div>
        <div>
          <img className='img' src={require('../assets/queen.png')} alt=""/>
        </div>
      </div>
      <div className='biography'>
        <h3>BIOGRAPHY</h3>
        <p>A short account of Queen Elizabeth II’s Life</p>
        <div className='biography-description'>
          <img className='img' src={require('../assets/birth.png')} alt=""/>
          <img className='img' src={require('../assets/fine-queen.png')} alt=""/>
          <h4>Elizabeth Alexandra Mary Windsor was born in Mayfair, London, as the first child of the Duke & Duchess of York (later King George VI and Queen Elizabeth). Her father acceded to the throne in 1936 upon the abdication of his brother, King Edward VIII, making Elizabeth the heir presumptive. She was educated privately at home and began to undertake public duties during the Second World War, serving in the Auxiliary Territorial Service.</h4>
          <img className='wedding img' src={require('../assets/wedding.png')} alt=""/>
          <div>
            <h4 className='about-wedding'>In November 1947, she married Philip Mountbatten, a former prince of Greece and Denmark, and their marriage lasted 73 years until his death in April 2021. They had four children: Charles III; Anne, Princess Royal; Prince Andrew, Duke of York; and Prince Edward, Earl of Wessex. Elizabeth II was Queen of the United Kingdom from 6 February 1952 until her death in 2022. Her reign of 70 years and 214 days was the longest of any British monarch and the second-longest recorded of any monarch of a sovereign country. At the time of her death, Elizabeth was also Queen of 14 other Commonwealth realms in addition to the United Kingdom.</h4>
            <h5>Read More <img src={require('../assets/read-more.png')} alt=""/></h5>
          </div>
          <img className='img' src={require('../assets/old-queen.png')} alt=""/>
        </div>
      </div>
      <div className='timeline'>
        <div className='header'>
          <div>        
            <h3>TIMELINE</h3>
            <p>Key dates in the life of the Queen, from her birth in April 1926 to her death in September 2022</p>
          </div>
          <h4>See All <img src={require('../assets/read-more-small.png')} alt=""/></h4>
        </div>
        <div className="wrapper">
          <TimelineCard 
          src={require('../assets/1920.png')}
          year="1926"
          text="On the 21st of April, 1926, Princess Elizabeth Alexandra Mary Windsor is born at 2.40am at 17 Bruton Street, London, her maternal grandparents’ house. It was home to her parents, Elizabeth and Albert, Duke of York, the second son of King George V and Queen Mary. She was third in line to the throne behind her father and Edward, Prince of Wales."
          />
          <TimelineCard 
          src={require('../assets/1930.png')}
          year="1930s"
          text="In August 1930, Elizabeth’s sister, Princess Margaret Rose, is born. On the 20th of January 1936, George V dies. Edward VIII becomes king.  On the 10th of December 1936, Edward VIII abdicates so that he can marry the American divorcee Wallis Simpson.</br>In 1937, Elizabeth becomes a Girl Guide at the age of 11."
          />
          <TimelineCard 
          src={require('../assets/1940.png')}
          year="1940s"
          text="On the 13th of October, 1940, Elizabeth makes her first broadcast to the nation. On the 21st of April 1942, on her 16th birthday, Elizabeth carries out her first public engagement when she inspects the Grenadier Guards, of which she had been appointed colonel-in-chief. In 1944, she receives her first corgi, Susan, as an 18th birthday present."
          />
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Home;

const TimelineCard = (props) => {
  return(
    <div className='timeline-card'>
      <span><img className='timeline-img' src={props.src} alt=""/></span>
      <div className='section'>
        <h4>{props.year}</h4>
        <p>{props.text}</p>
      </div>
    </div>
  )
}