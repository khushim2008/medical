import React, { useEffect } from "react";
import "./Home.css"; // External CSS for styling

const Home = () => {
  useEffect(() => {
    // Dynamically load the Chatbase chatbot script on page load
    const script = document.createElement("script");
    script.src = "https://www.chatbase.co/embed.min.js";
    script.chatbotId = "Un-TyosZqltFKrefRrhJC";
    script.domain = "www.chatbase.co";
    script.defer = true;

    // Append the script to the body
    document.body.appendChild(script);

    // Initialize the chatbot when the script is loaded
    script.onload = () => {
      window.embeddedChatbotConfig = {
        chatbotId: "Un-TyosZqltFKrefRrhJC",
        domain: "www.chatbase.co",
      };
    };

    // Cleanup when the component is unmounted
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="home">
      <header className="hero-section">
        <nav>
          {/* Add your Navbar here */}
        </nav>

        <div className="hero-content">
          <div className="hero-text">
            <h2>Welcome to Brain Bloom! </h2>
            <p>
              Welcome to MedicalApp, a personalized platform designed to boost
              your cognitive health through fun and interactive tools. Whether
              you're looking to sharpen your memory, enhance focus, or explore
              natural wellness practices, we offer a variety of resources to
              support your mental well-being. With our scientifically-backed
              games, exercises, Ayurvedic tips, and more, you can start
              improving your cognitive function today. Dive into our 3D brain
              models, get personalized advice from our AI-powered assistant,
              and reconnect with your memories through digital storytelling.
              Your brain is your greatest asset—let's keep it sharp, healthy,
              and vibrant. Start your journey to better cognitive health now!
            </p>
          </div>
          <div className="hero-image">
            <div className="brain-image"></div>
          </div>
        </div>

        <button>Start Now</button>
      </header>

      <section className="next-steps">
        <h2>Why Join Brain Bloom?</h2>
        <ul className="benefits-list">
          <li>Personalized cognitive health insights</li>
          <li>Track your mental wellness progress</li>
          <li>Access exclusive brain training exercises</li>
        </ul>
        <button className="get-started-btn">Get Started</button>
      </section>

      <section className="features">
        <h2>What We Offer</h2>
        <div className="cards">
          <div className="card">
            <img
              src="https://cdn-icons-png.flaticon.com/256/8789/8789245.png"
              alt="Games and Exercises"
              className="card-image"
            />
            <h3>Games and Exercises</h3>
            <p>
              Enjoy stimulating games and exercises crafted to enhance memory,
              focus, and mental agility in fun and interactive ways.
            </p>
          </div>
          <div className="card">
            <img
              src="https://cdn-icons-png.flaticon.com/512/5122/5122885.png"
              alt="Ayurvedic Tips"
              className="card-image"
            />
            <h3>Ayurvedic Tips</h3>
            <p>
              Discover natural herbs, diet advice, and lifestyle practices
              rooted in Ayurveda to support clarity and reduce stress.
            </p>
          </div>
          <div className="card">
            <img
              src="https://img.freepik.com/premium-vector/brain-logo-icon-human-brain-icon-creative-simple-mind-symbol-vector-illustration_118339-6640.jpg"
              alt="3D Brain Models"
              className="card-image"
            />
            <h3>3D-Interactive Brain Models</h3>
            <p>
              Explore the brain in 3D to learn how various regions contribute to
              memory, emotions, and other cognitive functions.
            </p>
          </div>
          <div className="card">
            <img
              src="https://www.shutterstock.com/image-vector/funny-digital-advisor-avatar-help-600nw-2315192471.jpg"
              alt="AI Advisor"
              className="card-image"
            />
            <h3>AI-Powered Advisor</h3>
            <p>
              Receive custom recommendations for brain health based on your
              unique goals and wellness needs, powered by AI.
            </p>
          </div>
          <div className="card">
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/050/270/505/small/a-notebook-with-colored-squares-on-it-free-vector.jpg"
              alt="Scrapbook Storytelling"
              className="card-image"
            />
            <h3>Scrapbook Storytelling</h3>
            <p>
              Reconnect with cherished memories by creating digital scrapbooks
              filled with photos and meaningful captions.
            </p>
          </div>
        </div>
      </section>

      <footer>
        <p>&copy; 2024 MedicalApp. All Rights Reserved.</p>
        <div>
          <a href="/contact">Contact</a>
          <a href="/privacy-policy">Privacy Policy</a>
        </div>
      </footer>

      {/* Chatbase Chatbot embedded */}
      <div className="chatbase-container">
        {/* The script is dynamically added to load the chatbot */}
      </div>
    </div>
  );
};

export default Home;
  