import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Vinay Mishra </span>
            from <span className="purple"> Mumbai, India.</span>
            <br />
            Pursuing my B.E in Information Technology at{" "}
            <span className="purple">
              Atharva College of Engineering, Mumbai University.
            </span>
            <br />I gained internship experience with the{" "}
            <span className="purple">YBI Foundation</span> as a{" "}
            <span className="purple"> Data Science & AI/ML Intern</span>,
            applying Python libraries for predictive modeling, and with the{" "}
            <span className="purple">EduSkills Foundation</span> as an{" "}
            <span className="purple">AI: Transformative Learning Intern</span>,
            focusing on voice assistants and automation.
            <br />
            <br />
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
