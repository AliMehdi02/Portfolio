import React from "react";
import "./Cont.css";
import "./Cont2.css";
import contt from "../videos/contt.mp4";
import  { useState } from 'react';
import Ali from "../videos/Ali.jpeg"






const Cont = () => {

    const [exp, setexp] = useState(false);
 
    const od = () => {
      setexp(!exp);
    }

    const [bio, setbio] = useState(false);
 
    const od1 = () => {
      setbio(!bio);
    }


    const [con, setcon] = useState(false);
 
    const od2 = () => {
      setcon(!con);
    }


    const Dialog = props => {
        return (
        
          <div className="popup-box">
           
            <div className="box">
              <span className="close-icon" onClick={props.handleClose}>x</span>
              {props.content}
            </div>
          </div>
        );
      };







    return(
        <div id="bg">
         <div className='overlay'></div>
         <video src={contt} autoPlay muted loop></video>
            <button className="btn" onClick={od2}>Contact Me</button>
            <button className="btn1" onClick={od}>Projects & Experience</button>
            <button className="btn2" onClick={od1}>Biography</button>
          
          
            {exp && < Dialog
      content={<>
        <p className="headings">Technical Projects</p><br/><br/>
        <p>  <u>Second Year Group Project </u> <br/><br/>
•	Group Project required us to create a website on a UN sustainable development goal; We created about improving the quality of education the 4th UN sustainable development goal. (Team of 7 people) <br/>
•	We used Agile software development methodology to create this web app. (Divided into 4 sprints)<br/>
•	We used GitHub as a version control system to merge the codes into a single working web app; We used Trello for project management and to know about the progress of each team member<br/>
•	I gained skills in creating full stack web app; I used React, HTML, CSS and Java Script for frontend and Java, MySQL Database, Spring boot for backend.<br/>
•	I acted as a product owner for one of the sprint and as well as acted as a scrum master for the same sprint when the appointed scrum master was not active. I made sure that each team member is working well and arranged meetings. I as well as did sprint review and retrospective.<br/>
•	I used Gantt Chart and network diagram to manage my time effectively and complete the required tasks.<br/><br/>

<u>First Year Group Project </u> <br/><br/>
•	Group Project which required us to create a number’s converter website.<br/>
•	We worked as a team of 5 people to work on this project and maintained effective communication via Discord and teams.<br/>
•	We used GitHub as a version control system to show our progress and merge the codes into a single working website. <br/>
•	I gained skills in creating a 3-tier dynamic web architecture; I used Java Server Pages, HTML and CSS for the frontend and Java, MySQL Database for backend; I used Apache tomcat server to host the website locally on our machines.<br/>
•	I used Gantt Chart and network diagram to manage my time effectively and complete the required tasks.<br/>
•	As a leader I tackled all the challenges faced by the group and made sure we completed the project in the given tight deadline. Problems such as team member being inactive, team member not having enough skills and many more.<br/><br/>

<u>Setting Up Virtual Network (Networking Project)</u> <br/><br/>
•	Created 2 virtual machines using Ubuntu (Linux) and Free BSD which acted as a router between them.<br/>
•	Experience with using Wireshark to capture packets and analyse them (One Ubuntu machine acted as client and the other as a server); Gained skills in troubleshooting Networks by analysing packets sent and received between the client and the server. Did this for a academic Coursework.<br/><br/>

<u> Improving programming skills using Java </u> <br/><br/>
•	Full functioning Calculator with permanent memory functionality.<br/>
•	A 5x5 Noughts and Crosses game (Tic-tac-toe) played against a smart computer bot.<br/>
•	Year 1 and Year 2 Group Project.<br/>
•	Implementing several Algorithms (Dijkstra, bubble sort, HMRC and more).<br/> <br/><br/>
</p>

<p className="headings">Work Experience</p><br/><br/>
<p><u>October 2021 – Current | Student Ambassador for Brunel University London </u><br/><br/>
•	Successfully helped numerous students and parents from diverse cultural backgrounds to know about life at Brunel.<br/>
•	Remained a positive role model towards new and returning students.<br/>
•	Gave course specific (Computer Science) talks to parents, students, and professionals.<br/>
•	Improved interactive skills while engaging and socializing with different individuals.<br/><br/>

<u>October 2021 – April 2022| Associate Teaching Assistant at Brunel University London </u><br/><br/>
•	Provided support to over 150 first year Computer Science students working in labs.<br/>
•	Worked alongside with Lecturers, paying attention to detail and following instructions precisely provided by them.<br/>
•	Further improved my communication, organizational, and time management skills as the role focuses on providing support to students under time constraints while managing other students at the same time and meeting tight deadlines.<br/><br/>

<u>January 2019 – October 2021 | Media Team Member at KSIJ Media Mombasa</u> <br/><br/>
•	Worked with Advanced software and hardware. i.e., sound, camera, streaming systems as well as hardware.<br/>
•	Worked under time constraints whilst using precise and effective organizational abilities.<br/>
•	Edited and trimmed photos and videos, uploading them on various platforms including YouTube and Instagram.<br/>
•	Provided effective training to new individuals and groups joining the team.<br/>
•	Improved leadership skills while leading a team of colleagues to accomplish tasks such as preparing slides for a function.<br/>
•	Gained valuable time management skills by prioritizing tasks and accomplishing them with in a given time frame.<br/>
•	Communicated successfully by engaging with different people and organizations and maintained good relationships.<br/>
</p>
      </>}
      handleClose={od}
    />}





{bio && < Dialog
      content={<>
        <p className="headings">I am Excited That You Want To Know About Me...😀</p><br/>
        <img className="im" src={Ali}></img>
        <br/> <p>•My name is <b>"Ali Mehdi"</b> <br/> 
        •I am an aspiring <b>"Full Stack Web Developer"</b> </p><br/>
        <p>I am well recognized for my strong programming skills in Java which I
        developed during my degree studies. I further developed these skills while
        implementing a 3-tier dynamic web architecture using java server pages (JSP), 
        Java Script, React, Spring Boot, HTML, CSS, and MySQL for my 2 full-stack web development group projects.
        I make use of Gantt charts and network diagrams to better manage my projects. Furthermore, I am skilled in SQL
        and IBM SPSS.  I also honed my talents in communicating information and ideas clearly and creatively using formal 
        presentations to audiences and for academic projects during my degree studies. <br/><br/>

        As a Student Ambassador and Associate Teaching Assistant (ATA) for Brunel University London, I have developed valuable time management and organizational skills
        while working in a pressurized environment and managing others at times, and as well as meeting tight deadlines, Moreover, the role required precise attention to
        instructions provided by the lecturer to guide students accordingly. I have strong communication and interactive skills demonstrated from my previous role as a Student Ambassador
        for Brunel University London pathway college as the role focused on engaging with students from diverse backgrounds. Furthermore, I am a Proficient user of all MS Office applications. 
        <br></br>
        <br></br>
         

<p className="headings">INTEREST & ACHIEVEMENTS</p><br/>

•	Fluent in the following languages: English, Swahili, Hindi and Urdu. <br/>
•	Awards:  <b>Brunel Plus bronze and Silver Award; Brunel Volunteers Silver Award; Student Ambassador Award @ BPC. </b><br/>
•	I like building technological gadgets as it allows me to gain more knowledge on latest software and hardware which further helps me to keep up to date with the latest technology as I am pursuing a Computer Science Degree.<br/>
•	I am passionate about learning about new software, hardware, programming languages as it will help be become a well knowledgeable computer engineer.<br/>



 </p>
      </>}
      handleClose={od1}
    />}
    



    
{con && < Dialog
      content={<>

<p className="headings">You Will Get A Response Within 24 Hours</p>
<a href="https://www.instagram.com/ali_mehdi01/" class="fa fa-instagram"></a>
<a href="https://www.snapchat.com/add/aliiiii_786" class="fa fa-snapchat-ghost"></a>
<a href="https://www.linkedin.com/in/ali--mehdi/" class="fa fa-linkedin"></a>
<a href="mailto:alimehdi1491@gmail.com" class="fa fa-google"></a>
        
      </>}
      handleClose={od2}
    />}
        </div>
    )
}


export default Cont;