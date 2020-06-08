import React, { Component } from "react";
import "./App.css";
import plus from './icons/plus'
import whitecross from './icons/whitecross'
import ReactPlayer from 'react-player'

class EssayPage extends Component {
  constructor(props) {
    super(props);
    this.state = { displayPositiveCommute: '', 
                   displayResearchPolicy: '', 
                   displayPsychology: '' };

    this.showPositiveCommute = this.showPositiveCommute.bind(this);
    this.hidePositiveCommute = this.hidePositiveCommute.bind(this);
    this.showResearchPolicy = this.showResearchPolicy.bind(this);
    this.hideResearchPolicy = this.hideResearchPolicy.bind(this);
    this.showPsychology = this.showPsychology.bind(this);
    this.hidePsychology = this.hidePsychology.bind(this);
  }

  componentWillReceiveProps() {
    const { currentPage } = this.props;
     if (currentPage === "Videos" || currentPage === "Index") {
       this.setState({ displayPositiveCommute: '',
                       displayResearchPolicy: '', 
                       displayPsychology: '' })
     }
    }

  showPositiveCommute() {
    let newCommute;
    
    if(this.state.displayPositiveCommute === '' || this.state.displayPositiveCommute === 'slideDown') {
      newCommute = 'slideUpSection';
    }
    else if(this.state.displayPositiveCommute === 'slideUpSection') {
      newCommute = 'slideDown';
    }
    
    this.setState(() => ({
      displayPositiveCommute: newCommute,
      displayPsychology: '',
      displayResearchPolicy: '',
    }));
  }

  hidePositiveCommute() {
    let newHiddenCommute;
    
    if(this.state.displayPositiveCommute === 'slideDown') {
      newHiddenCommute = 'slideUpSection';
    }
    else if(this.state.displayPositiveCommute === 'slideUpSection') {
      newHiddenCommute = 'slideDown';
    }
    this.setState(() => ({
      displayPositiveCommute: newHiddenCommute,
    }));
  }

  showResearchPolicy() {
    let newPolicy;

    if(this.state.displayResearchPolicy === '' || this.state.displayResearchPolicy === 'slideDown') {
      newPolicy = 'slideUpSection';
    }
    else if(this.state.displayResearchPolicy === 'slideUpSection') {
      newPolicy = 'slideDown';
    }

    this.setState(() => ({
      displayResearchPolicy: newPolicy,
      displayPsychology: '',
      displayPositiveCommute: '',
    }));
  }
  
  hideResearchPolicy() {
    let newHiddenPolicy;

    if(this.state.displayResearchPolicy === 'slideDown') {
      newHiddenPolicy = 'slideUpSection';
    }
    else if(this.state.displayResearchPolicy === 'slideUpSection') {
      newHiddenPolicy = 'slideDown';
    }

    this.setState(() => ({
      displayResearchPolicy: newHiddenPolicy,
    }));
  }

  showPsychology() {
    let newPsychology;

    if(this.state.displayPsychology === '' || this.state.displayPsychology === 'slideDown') {
      newPsychology = 'slideUpSection';
    }
    else if(this.state.displayPsychology === 'slideUpSection') {
      newPsychology = 'slideDown';
    }

    this.setState(prevState => ({
      displayPsychology: newPsychology,
      displayResearchPolicy: '',
      displayPositiveCommute: '',
    }));
  }

  hidePsychology() {
    let newHiddenPsychology;

    if(this.state.displayPsychology === 'slideDown') {
      newHiddenPsychology = 'slideUpSection';
    }
    else if(this.state.displayPsychology === 'slideUpSection') {
      newHiddenPsychology = 'slideDown';
    }

    this.setState(() => ({
      displayPsychology: newHiddenPsychology,
    }));
  }

    render() {
      const { displayPositiveCommute, displayResearchPolicy, displayPsychology } = this.state;

      const positiveCommute = { compon: (<div> <div className='ContentPage'>
    <div className="imageContainer">
        <ReactPlayer className="essayImage" id="positiveCommuteEssayImage" 
        url="https://s3.us-east-2.amazonaws.com/michaelt.co/asset+for+final+project/video/positive+commute.mp4"
                                     playing
                                     controls={false} 
                                     width="100%" 
                                     height="100%" 
                                     loop={true} 
                                     volume={0} 
                                     muted
                                     config={{ file: { attributes: { playsInline: true }} }}
                                      />
        <div className="crossIcon" onClick={this.hidePositiveCommute}>
            {whitecross.icon}
        </div>
        <div className="textOnImage">
            <p className="purpleTitle">POSITIVE COMMUTE</p>
            <h1 className="mainEssayHeading">How does our commute create a “protected space” for us and allow us to shift identities between destinations?</h1>
        </div>
        <img src={require("./images/arrow.png")} alt="Arrow icon" className="arrowIcon"></img>
    </div>
    <div className="textContainer">
        <div className="blackContainer">
            <h2 className="secondEssayHeading">“Commuting has been viewed as a source of stress, but in fact it gives people a break. It’s sometimes the only hour of the day that individuals have to be alone, to be by themselves to think, to listen to music.”</h2><br />
            <h3 className="thirdEssayHeading">MITCHELL MOSS , DIRECTOR OF RUDIN CENTER OF TRANSPORTATION AT NYU</h3>
        </div>
        <div className="commuteGrid">
            <div className="commuteItem1"><p className="boldEssayText halfText">HOW DOES OUR COMMUTE CREATE A ‘PROTECTED SPACE’ FOR US AND ALLOW US TO SHIFT IDENTITIES BETWEEN DESTINATIONS?</p></div>
            <div className="commuteItem2"><p className="mainEssayText">In the midst of working and eating alone behind the same desk everyday for over two months (as of May 2020), weirdly, I miss commuting - the feeling of inserting myself into a highly public and perpetually crowded environment and retreating into the privacy of your own world is like a therapy session if you are looking for a time out.</p></div>
            <div className="commuteItem3"><img src={require("./images/circle_line.gif")} alt="Circle line" className="positiveCommuteImage"></img><p className="policyCommuteTile">CIRCLE LINE 2 MARCH 2020 2:01PM</p></div>  
            <div className="commuteItem4"></div>
            <div className="commuteItem5"><p className="mainEssayText">Commuting on public transit has been viewed as a source of stress but it could be the window for us to “breathe” mentally, especially when we are in “auto-pilot mode”. In 2008, Glenn Lyons and Kiron Chatterjee from the Centre for Transport & Society, University of the West of England, published A human perspective on the daily commute: costs, benefits and trade-offs. The paper provides an insight into daily commutes with a focus on Britain.<br /><br />
            “Stradling (2006) refers to the different forms of effort required in making a journey: physical, cognitive and affective effort. He notes that route familiarity will reduce the cognitive spend. ‘Affective effort concerns emotions aligned to uncertainty or worry. One might thus deduce that for many commute journeys, cognitive and affective effort will be low – the routine and familiarity allow the individual to enact the journey almost subconsciously or on auto-pilot’ (even in the face of congestion).” They further elaborated that, “regardless of mode, travelling can provide a ‘protected’ space away from the world around”. The alone time could be seen as the transition time and temporal opportunity to prepare ourselves to different social settings and social identity at the destination.<br /><br />
            In the conclusion of the paper, they raised the possibility of a positive experience of commuting: “Mokhtarian and Solomon (2001) suggested that there are potentially three sorts of beneficial activities arising from travel: those conducted at the destination; those undertaken while travelling; and the activity of travelling itself. They note (Mokhtarian and Salomon, 2001, p. 702) that time used while travelling can include anti-activity – the ability to use the time for relaxing or thinking, including shifting gears mentally between the origin and destination activities and roles. With regard to the act of travelling itself, the benefit to the individual can be a consequence of intrinsic aspects of travel itself. . . the sensation of speed, movement through and exposure to the environment, the scenic beauty or other attraction of a route.” (Mokhtarian and Salomon, 2001, p. 703)<br /><br />
            If zoning out on our commute could bring us potential benefits, what do we know about our commute so far? How would the relationship between mental health and commuting change in the future, especially after the pandemic?
</p>
<hr />
<p className="boldEssayText"> FURTHER READING</p>
<p className="furtherLinks" onClick={this.showResearchPolicy}>+ <span className="underlinedText">What do we know about our commute?</span></p>
<p className="furtherLinks" onClick={this.showPsychology}>+ <span className="underlinedText">How would social distancing potentially change how we feel on public transport?</span></p>
<a className="furtherLinks" href="https://issuu.com/michaeltsangph/docs/public_transportation_and_well-being_in_london_">+ <span className="underlinedText">Full report on Public Transport & Well-being</span></a></div>
        </div>
    </div>
    </div>
</div>)};

const researchPolicy = { compon : (<>
  <div className="ContentPage">
  <div className="imageContainer">
      <img src={require('./images/sketches.png')} alt="Sketches" className="essayImage" id="researchPolicyEssayImage" />
      <div className="crossIcon" onClick={this.hideResearchPolicy}>
          {whitecross.icon}
      </div>
      <div className="textOnImage">
          <p className="purpleTitle">MENTAL HEALTH & BEHAVIORAL RESEARCH</p>
          <h1 className="mainEssayHeading">What do we know about our commute in London?</h1>
      </div>
      <img src={require("./images/arrow.png")} alt="Arrow icon" className="arrowIcon"></img>
  </div>
  <div className="textContainer">
      <div className="blackContainer">
          <h2 className="secondEssayHeading">“Today nearly 90% of buses are equipped to serve physically disabled people, with wheelchair space, priority seats, handrails, and devices to help people get on and off. But on mental health, there’s sadly been nothing like that kind of progress. Even someone with the best mental health will sometimes find public transport stressful and bewildering… It might be because mental health is less visible.”</h2><br />
          <h3 className="thirdEssayHeading">ANDREW JONES, PARLIAMENTARY UNDER SECRETARY OF STATE</h3>
      </div>
      <div className="commuteGrid">
          <div className="commuteItem1"><p className="boldEssayText">WHAT DO WE KNOW ABOUT OUR COMMUTE?</p></div>
          <div className="commuteItem2"><p className="mainEssayText">Not until the late 90s, there were more studies about city dwellers’ behaviour and commuting. However, most travel psychology research was mostly focused on the relationship between transportation and safety. An article written by Koslowsky revealed that little scientific research had been conducted on the health and behavioural effects of commuting, cross referencing to only seventeen studies.<br /><br />
          In 2014, J. Zhang and V. Van Acker proposed a life-oriented approach for a better understanding of travel behaviour and for a better support of cross-sectional transport policymaking. It was the first paper that integrates travel behaviour, life choices and public policy. They reviewed research about how commuting time affects us, as well as social and mental aspects of travel behaviour. In the same year, the UK Office for National Statistics released their first study looking at commuting and personal well-being.<br /><br />
          The study indicates that taking the bus or coach to work on a journey lasting more than 15 minutes is associated with increased anxiety. For journey time beyond 30 minutes, the negative effects of this form of commuting increasingly affect all aspects of personal well-being. Out of all the public transport options, commuting to work by bus is most negatively associated with personal well-being.<br /><br />
          Conversely, taking the train to work has no significantly negative effect on any aspect of personal well-being for journeys of up to 30 minutes. Beyond this journey time, the only aspect of personal well-being which is negatively affected is anxiety which is higher among those travelling more than 30 minutes by train compared to those spending only up to 15 minutes on their commute.<br /><br />
          Two years later, Mental Health Action Group and Anxiety UK held their first Mental Health and Transport Summit in London. During the summit, Andrew Jones, Parliamentary Under Secretary of State acknowledged the important relationship between mental health and transport goes deeper than many people realize. “Today nearly 90% of buses are equipped to serve physically disabled people, with wheelchair space, priority seats, handrails, and devices to help people get on and off. But on mental health, there’s sadly been nothing like that kind of progress. Even someone with the best mental health will sometimes find public transport stressful and bewildering… It might be because mental health is less visible.” Andrew Jones said in his speech.<br /><br />
          From there, I began my research on how our existing public transit in London affects our mind-state on a daily basis.<br /><br />
          During my research, I came across Roger Mackett, a professor at the Centre for Transport Studies at University College London. In 2019, he launched the Mental Health and Travel Report at UCL. He surveyed adults in England with mental health conditions or mental illness and investigated the relationship between mental health and travel. In the end of the report, he raised 39 recommendations for the government and travel providers. I later had an interview with Professor Mackett in the hope of finding more information.<br /><br />
          During our interview, he said that although there is more research looking into how commuting on public transport affects mental disabilities (in terms of infrastructural designs), there is no comprehensive research about how commuting on public transport would affect city dwellers’ mental health specifically.<br /><br />
          Learning about the limited information we have at the moment, I went on to start a travel diary and street interview to get more data about how commuting on public transport affects myself and others.
</p></div>
          <div className="commuteItem3"><img src={require("./images/hammersmith_sketch.png")} alt="Sketch on Hammersmith" className="researchPolicyImage1"></img><p className="researchPolicyTitle1">HAMMERSMITH & CITY LINE 23RD MAY 2019 3:42 PM</p></div>  
          <div className="commuteItem4"></div>
          <div className="commuteItem5"><p className="mainEssayText"><span className="boldResearch">Travel Diary</span> <br /><br />
          The travel diary lasted for three weeks in May 2019. I documented my emotions and observations whenever I commute on public transport. I would draw (see header image)  when I have paper, pen and seats available and take photos with my mobile phone otherwise.<br /><br />
          Referencing “Two Selves theory” (a theory by Daniel Kahneman and Jason Riis about the mismatch of emotion between experiencing self and remembered self), I documented my emotions again five days after the commute.<br /><br />
              Here are the findings:<br /><br />
              <span className="underlinedText">1.	Emotion</span> <br />
              Five days after the commute. I forgot the exact feeling of the journey but I’d say that I’m calm. One significant finding is experiencing a break up in the middle of conducting the travel diary. First day after my break up (27th May), I wanted to take the bus, cross the river Thames, it was somehow healing.<br /><br />
              From that experience, I highly relate to Glenn Lyons and Kiron Chatterjee’s notes on “time out” and “transaction time”. The break up and sitting in the front of a double decker bus provided me with an atmosphere of solitariness to prepare myself for the transition of place and mentality.<br /><br />
              <span className="underlinedText">2. Time</span> <br />
              Morning commute is more stressful but at night I’m usually in a good mood because I’m going home.<br /><br />
              The 30 minutes mark applied to me. On 23rd May, “I wanted to leave” as the journey reached 30 minutes (Aldgate East to Westminster/Victoria).<br /><br />
              However, the feeling of time can vary depending on the situation. If I have a companion with me, for instance, classmates or friends, time will pass by faster. The same effect with mobile games or reading. Again, this demonstrates the point of “equipped time” raised by Glenn Lyons and Kiron Chatterjee.<br /><br />
              <span className="underlinedText">3. Weather</span> <br />
              The temperature and intensity of sunlight did affect my mood. The heat made me anxious and annoyed (15th, 16th, 22nd, 23rd, 24th, 31st May). On the other side, sunlight tends to make me happy and calm (15th, 21st May).
              </p>
          </div>
          <div className="commuteItem6"><img src={require("./images/balloons.png")} alt="Interviews" className="researchPolicyImage2"></img><p className="researchPolicyTitle2">HAMMERSMITH & CITY LINE 23RD MAY 2019 3:42 PM</p></div>  
          <div className="commuteItem7"></div>
          <div className="commuteItem8"><p className="mainEssayText"><span className="boldResearch">Street interview</span> <br /><br />
          After learning about the basics of societal engagement research in the societal engagement workshop with Dr Helal Ahmed, teaching fellow at Imperial College, I partnered with Catalina Pino, a PhD candidate in Electrochemical Science and Engineering. We developed a research method trying to understand London commuter’s commuting emotions. We conducted the street interview on Exhibition Road. Although the sample size is small, it provides an insight into London commuter’s idiosyncrasies.<br /><br />
          To attract the pedestrians’ attention, we firstly approach pedestrians with the big hand-drawn Oyster cards and ask them where they want to travel if you are given a free oyster card. Then briefly ask why. Moving on, we question the choice of daily commute and the reason behind choosing the mode of transportation. Following the answer, we ask them to describe the journey by choosing a coloured balloon. The colour of the balloon represented the emotion of the journey - red means angry and antagonised, blue means calm, pink means happy, orange means excited, green means neutral. Lastly, the respondent is asked to recall any significant memories of their journeys and what they usually do during their journey.<br /><br />
          According to the data collected from the 6 respondents, 3 described their daily commute as “calm”, 1 described it as “angry”, 1 described it as “annoyed” and 1 described it as “neutral”. All respondents take the London Underground during their daily commute.<br /><br />
          Looking at the rationale behind the findings, we can see most respondents (respondents 1, 2, 5 and 6) explained their emotions to be affected by how busy their commute is. When the tube is busy, they would register negative emotions, such as annoyance; when the tube is not busy, they would register neutral or positive emotions, such as “calm”. It shows that the commuting time (rush and non-rush hour) could affect commuter’s emotions. As for the activities that the respondents have  conducted during their journey, they replied with “zoning out”, “listening to music” and “listening to podcasts”.<br /><br />
              <span className="boldResearch">RESULT</span><br /><br />
              From my limited data sample, I found that a few factors would affect our emotions, such as time and weather. More importantly, when we commute during non-peak hours, our commuting has the potential to be calming. It shows more support in experiencing a “positive commute”.
              </p>
              <hr />
              <p className="boldEssayText"> FURTHER READING</p>
              <p className="furtherLinks" onClick={this.showPositiveCommute}>+ <span className="underlinedText">How does our commute create a “protected space” for us and allow us to shift identities between destinations?</span></p>
<p className="furtherLinks" onClick={this.showPsychology}>+ <span className="underlinedText">How would social distancing potentially change how we feel on public transport?</span></p>
<a className="furtherLinks" href="https://issuu.com/michaeltsangph/docs/public_transportation_and_well-being_in_london_">+ <span className="underlinedText">Full report on Public Transport & Well-being</span></a>
          </div>

      </div>
  </div>
  </div>
</>)};

const psychology = { compon : (<>
  <div className="ContentPage">
  <div className="imageContainer">
    <ReactPlayer className="essayImage" id="psychologyEssayImage" url="https://s3.us-east-2.amazonaws.com/michaelt.co/asset+for+final+project/video/emotional+travel.mp4"
                                     playing
                                     controls={false} 
                                     width="100%" 
                                     height="100%" 
                                     loop={true} 
                                     volume={0} 
                                     muted
                                     config={{ file: { attributes: { playsInline: true }} }}
                                      />
      <div className="crossIcon" onClick={this.hidePsychology}>
          {whitecross.icon}
      </div>
      <div className="textOnImage">
          <p className="purpleTitle">EMOTIONAL TRAVEL</p>
          <h1 className="mainEssayHeading">How would social distancing potentially change how we feel on public transport?</h1>
      </div>
      <img src={require("./images/arrow.png")} alt="Arrow icon" className="arrowIcon"></img>
  </div>
  <div className="textContainer">
      <div className="blackContainer">
          <h2 className="secondEssayHeading">"Every person has their own idea of what their personal space is and reacts differently to intrusions of that space. One person may get extremely anxious and irritated as a stranger encroaches on their personal space, while another may not even take notice.<br /><br />Public transportation is a unique case for proxemics because it forces us into a situation where we not only allow others to intrude on our personal space but we accept this intrusion and repress our emotional response.’</h2><br />
          <h3 className="thirdEssayHeading">ADAM M. PERE, ENOL VANILLA, HAVARD GRADUATE SCHOOL OF DESIGN</h3>
      </div>
      <div className="commuteGrid">
          <div className="commuteItem1"><p className="boldEssayText halfText">HOW WOULD SOCIAL DISTANCING POTENTIALLY CHANGE HOW WE FEEL ON PUBLIC TRANSPORT?</p></div>
          <div className="commuteItem2"><p className="mainEssayText">To understand how social distancing affects our emotions during our commute on public transport, we need to get to know the concepts of how it is a unique environment in terms of proxemics interactions. <br /><br />
          Proxemics is the study of personal space. It was first defined by Edward T. Hall as “the spatial dimension of nonverbal behavior” in 1963. Through observations of our nonverbal communications, he described the interpersonal distances of people in four distinct zones: intimate distance, personal distance, social distance and public distance. One might feel uncomfortable when strangers intrude their personal space. 
</p></div>
          <div className="psychologyItem3"><img src={require("./images/CHART.png")} alt="Personal space chart" className="psychologyImage"></img><p className="imageTitlePsychology">4 ZONES OF PERSONAL SPACE</p></div>  
          <div className="commuteItem4"></div>
          <div className="commuteItem5"><p className="mainEssayText">“However public transportation is a unique case for proxemics because it forces us into a situation where we not only allow others to intrude on our personal space but we accept this intrusion and repress our emotional response.” wrote Pere and Vallina, design Studies students at Harvard University Graduate School of Design, in 2016.<br /><br />
          According to Hall, the idea of personal space and reactions to it might vary among each person and culture. COVID-19 could change our behavior and reactions to the 4 zones of personal space. We might feel extra anxious and discomfort when a stranger intrudes our personal space while we might find the need to constantly repress our emotions.<br /><br />
          Although there is little or no empirical data available concerning psychological factors in public transport, especially with rail transportation, a literature review done by Cox, Hoioudmont, Griffiths in 2006, pointed out that “the existing body of research, weak as it is, points towards the potential effectiveness of crowd-ing mitigation initiatives targeted at moderators of the relationship between high density and the perception of crowdedness.”<br /><br />
          If there are less commuters around us during our commute, it could potentially be beneficial to us in terms of repressing our emotions. However, in the times where we perceive the environment as crowded, it might be stressful, especially in times where we feel less control over the proximity among strangers in the same space.
</p>
<hr />
<p className="boldEssayText"> FURTHER READING</p>
<p className="furtherLinks" onClick={this.showPositiveCommute}>+ <span className="underlinedText">How does our commute create a “protected space” for us and allow us to shift identities between destinations?</span></p>
<p className="furtherLinks" onClick={this.showResearchPolicy}>+ <span className="underlinedText">What do we know about our commute?</span></p>
<a className="furtherLinks" href="https://issuu.com/michaeltsangph/docs/public_transportation_and_well-being_in_london_">+ <span className="underlinedText">Full report on Public Transport & Well-being</span></a></div>
      </div>
  </div>
  </div>
</>)};

      return (<><div className="ContentPage">
        <div className="ContentSection">
            <div className="EssayGrid">
                    <div className="PositiveCommute">
                        <div className="essayButton" onClick={this.showPositiveCommute}>
                            <h2 className="essayHeading">POSITIVE COMMUTE</h2>
                            <p className="essayParagraph">How does our commute create a<br /> “protected space” for us and allow us to<br /> shift identities between destinations?</p>
                            <div className="essayExtend">{plus.icon}</div>
                        </div>
                    </div>
                    <div className="ResearchPolicy">
                        <div className="essayButton" onClick={this.showResearchPolicy}>
                            <h2 className="essayHeading">MENTAL HEALTH &<br /> BEHAVIORAL RESEARCH</h2>
                            <p className="essayParagraph">What do we know about our commute?</p>
                            <div className="essayExtend">{plus.icon}</div>
                        </div>
                    </div>
                    <div className="Psychology">
                        <div className="essayButton" onClick={this.showPsychology}>
                             <h2 className="essayHeading">EMOTIONAL TRAVEL</h2>
                            <p className="essayParagraph">How would social distancing potentially<br /> change how we feel on public transport?</p>
                            <div className="essayExtend">{plus.icon}</div>
                        </div>
                    </div>
                </div>
        </div>
    
                <div  id={displayPositiveCommute === '' ? 'slideUpSection' : displayPositiveCommute } className={displayPositiveCommute}>
                  {positiveCommute.compon}
                </div>
                <div  id={displayResearchPolicy === '' ? 'slideUpSection' : displayResearchPolicy } className={displayResearchPolicy}>
                  {researchPolicy.compon}
                </div>
                <div  id={displayPsychology === '' ? 'slideUpSection' : displayPsychology } className={displayPsychology}>
                  {psychology.compon}
                </div></div></>)
    }
}

export default EssayPage;
