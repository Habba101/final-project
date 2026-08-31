import React from 'react';
import ProjectCard from './ProjectCard';
import project1 from "./images/weather-app.jpg";
import project2 from "./images/world clock.jpg";
import project3 from "./images/oasis-living.jpg";
import project4 from "./images/travel guide generator.jpg";
import project5 from "./images/dictionary.jpg";
import project6 from "./images/french poem generator.jpg";
import './Projects.css';

export default function Projects() {
 const myProjectsList = [
    { id: 1, img: project1, title: "Weather App", desc: "I built this weather application to make checking the weather quick and simple. Users can search for a city and get the current weather conditions along with a multi-day forecast, including temperatures and weather icons.", b1: "HTML", b2: "CSS", c1: "text-primary", c2: "text-warning", link: "https://habbas-weather-forecast-project.netlify.app/" },
    { id: 2, img: project2, title: "World Clock", desc: "This World Clock was created to display the current time across different cities around the world. The project dynamically updates the time, allowing users to quickly check the local time in places such as Johannesburg, Dubai and Tahiti.", b1: "JavaScript", b2: "HTML5", c1: "text-success", c2: "text-info", link: "https://habbas-world-clock.netlify.app/" },
    { id: 3, img: project3, title: "Oasis Living", desc: "A travel website I built from the ground up to combine my interests in travel, content, SEO and digital products. Oasis Living features destination guides, travel content and digital products, with WordPress and WooCommerce working behind the scenes. One of the things I enjoyed most about Oasis Living was that it wasn't simply a website-building exercise. I had to think about the whole user journey — from discovering a destination through search, to reading a guide, finding useful travel options and eventually purchasing a digital product.", b1: "WordPress", b2: "Rank Math SEO", c1: "text-info", c2: "text-secondary", link: "https://oasisliving.co.za/" },
    { id: 4, img: project4, title: "Travel Guide Generator", desc: "Because planning a trip shouldn't require opening 17 browser tabs. 😂✈️I built this Travel Guide Generator to create personalised travel guides based on the user's selections. Instead of giving everyone the same generic itinerary, the app uses the selected information to generate a travel guide tailored to the trip. The fun part was making the application respond to the user's choices and turn those selections into something that actually feels like a mini travel assistant.", b1: "JavaScript", b2: "REST API", c1: "text-success", c2: "text-danger", link: "https://habbas-travel-guide.netlify.app/" },
    { id: 5, img: project5, title: "Dictionary App", desc: "This dictionary application allows users to search for a word and instantly explore its meanings, parts of speech, examples and pronunciation. As I developed the project, I also focused on improving how the information was presented. Rather than simply displaying every definition one after another, I grouped definitions according to their part of speech, making it easier to distinguish between nouns, verbs, adjectives and other meanings when a word has multiple uses.", b1: "React.js", b2: "REST API", c1: "text-warning", c2: "text-danger", link: "https://habbas-dictionary.netlify.app/" },
    { id: 6, img: project6, title: "French Poem Generator", desc: "Sometimes you need a poem in French and absolutely no idea where to start. The French Poem Generator is an AI-powered project that generates French poetry from a user's prompt. This project was especially fun proving that coding doesn't always have to be serious.  I also used CSS Flexbox to create a clean layout that keeps the generator simple and easy to interact with. The application combines user input and API functionality to dynamically generate a poem based on what the user enters.", b1: "JavaScript", b2: "REST API", c1: "text-success", c2: "text-danger", link: "https://my-ai-french-poem-generator.netlify.app/" }
  ];

return (
    <div className="container my-5 text-start">
      <div className="text-center mb-5">
        <h2 className="fw-bold">My Portfolio Gallery</h2>
        <p className="text-muted lead">A comprehensive look at the websites and applications I have built.</p>
      </div>

      <div className="row g-4">
        {/* Pass down the project.link value into your component loop wrapper */}
        {myProjectsList.map((project) => (
          <ProjectCard 
            key={project.id}
            image={project.img}
            title={project.title}
            description={project.desc}
            badge1={project.b1}
            badge2={project.b2}
            badgeColor1={project.c1}
            badgeColor2={project.c2}
            link={project.link} // 👈 Added this!
          />
        ))}
      </div>
    </div>
  );
}