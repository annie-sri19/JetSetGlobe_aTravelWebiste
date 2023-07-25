
import React from "react"
import Navbar from "../Components/nav-bar/Navbar";
import Footer from "../Components/footer/Footer";
import Anushka1 from "../assets/images/Anushka1.jpeg";
import './styles.css';


export const AboutAnushka = () => {


  return (
    <>
      <Navbar />
      <br/>
      <div className="AboutAnushka">
          <h1> About Anushka </h1>
          <div className="mainDiv">
              <img src={Anushka1}/>
              <p>
                  <ol className="ol">
                      <li> She possess nearly 3 years of experience in the IT industry and is currently working as <b>Software
                        Engineer at KreditBee </b> a Fin-Tech company, managing the entire software development process from
                        conception to deployment.
                      </li>
                      <li>
                        she possesses strong key skills and competencies in the following areas:
                          <ul className="ul">
                            <li>React.js: Highly skilled in React.js, a popular JavaScript library for building user interfaces. Proficient in creating reusable and component-based UI elements, managing state and props, and handling component lifecycle events to develop interactive and efficient web applications.
                            </li>
                            <li>JavaScript: Demonstrates expertise in JavaScript, the foundation of web development. Capable of writing clean, modular, and maintainable code using modern ECMAScript standards. Utilizes JavaScript to add dynamic and interactive functionalities to websites and applications.
                            </li>
                            <li>Redux: Proficient in Redux, a state management library for React applications. Understands how to implement a centralized store for managing application state and orchestrating data flow between components. Skilled in handling asynchronous actions and managing complex application states using Redux middleware.
                            </li>
                            <li>Redis: Knowledgeable in Redis, an in-memory data structure store often used as a caching layer. Familiar with utilizing Redis to improve application performance and reduce database load by caching frequently accessed data.
                            </li>
                            <li>Problem-Solving: Possesses excellent problem-solving skills and enjoys tackling complex technical challenges. Capable of analyzing issues, identifying root causes, and devising effective solutions to optimize performance and functionality.
                            </li>
                            <li>User-Centered Websites and Applications: Focused on creating user-centered and intuitive web applications. Adheres to best practices in user experience (UX) design to ensure that the end-users have a seamless and enjoyable interaction with the software.
                            </li>
                            <li>Scalability: Skilled in designing scalable and efficient solutions that can handle a growing number of users and data. Understands the importance of optimizing performance and resource utilization to ensure the application can scale effectively.
                            </li>
                          </ul>
                      </li>
                      <li>She has demonstrated remarkable adaptability and a strong commitment to continuous learning. Over the course of seven months, she achieved an exceptional self-efficiency score improvement, increasing from 30% to an impressive 96%. This achievement highlights her ability to quickly grasp new concepts and technologies, as well as her determination to excel in a fast-paced work environment.</li>
                  </ol>
              </p>
            
          </div>
      </div>
      <br/>
      <Footer/>
    </>
  );
};
