/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/desk.jpg";

const imageAltText = "Modern desk setup with a laptop and an open notebook, ready for work.";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "AI integration using chatgpt API (ChatBot) 🎉",
    description:
      "Developed a ChatGPT clone using Next.js and the official ChatGPT API, showcasing API management expertise. The project replicated advanced conversational capabilities, including contextual understanding and text generation, integrated with a high-performance Next.js frontend.",
    url: "https://chat-bot-ai-ruby.vercel.app/",
  },
  {
    title: "Gemini AI Chatbot Clone (React JS & Gemini API)",
    description:
      "Built an advanced chatbot clone of Gemini's AI customer support platform using React JS and the Gemini AI API. Successfully replicated functionality like intent recognition, entity extraction, and response generation, integrating it with a user-friendly React frontend.",
    url: "https://gemini-clone-bay.vercel.app/",
  },
  {
    title: "My Resume Site",
    description:
      "Created from Microsoft's resume workshop and deployed to GitHub pages. Includes my experience and design abilities.",
    url: "https://sushant707.github.io/resume/",
  },
  {
    title: "YouTube home page clone",
    description:
      "Built a YouTube homepage clone using ReactJS, TailwindCSS, and TypeScript, replicating the familiar layout and functionalities. This project showcases proficiency in modern web technologies and the ability to create complex UIs with clean code.",
    url: "https://youtube-home-page-clone-react-js.vercel.app/",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
