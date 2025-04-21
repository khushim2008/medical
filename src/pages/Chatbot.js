import React, { useState, useEffect } from "react";
import "./Chatbot.css";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false); // Controls open/close state

  // Toggle Chatbot Open/Close
  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      // Dynamically load the Chatbase chatbot script when the chatbot is opened
      const script = document.createElement("script");
      script.src = "https://www.chatbase.co/embed.min.js";
      script.chatbotId = "Un-TyosZqltFKrefRrhJC";
      script.domain = "www.chatbase.co";
      script.defer = true;

      // Append the script to the body
      document.body.appendChild(script);

      // Add the chatbot initialization when the script is loaded
      script.onload = () => {
        window.embeddedChatbotConfig = {
          chatbotId: "Un-TyosZqltFKrefRrhJC",
          domain: "www.chatbase.co",
        };
      };

      // Clean up script when the component is unmounted or chatbot is closed
      return () => {
        document.body.removeChild(script);
      };
    }
  }, [isOpen]);

  return (
    <div className="chatbot-container">
      {/* Chatbot Icon (GIF) */}
      {!isOpen && (
        <div className="chatbot-icon" onClick={toggleChatbot}>
          <img
            src="https://cdn.dribbble.com/users/37530/screenshots/2937858/drib_blink_bot.gif"
            alt="Chatbot Icon"
          />
        </div>
      )}

      {/* Chatbot Box */}
      {isOpen && (
        <div className="chatbot-box">
          {/* Chatbot Header */}
          <div className="chatbot-header">
            <h3>Brain Bloom AI</h3>
            <button className="close-btn" onClick={toggleChatbot}>
              &times;
            </button>
          </div>

          {/* Chatbase Container */}
          <div className="chatbase-container">
            {/* Chatbase script will handle embedding */}
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
