import React from "react";
import '../../css/newsletter.css';

const Newsetter = () => {
  return (
    <div className="newsletter">
      <h1>Newsletter</h1>
      <p>Get timely updates on your favorite products.</p>
      <div className="news-input">
        <input placeholder="Enter your email" class="sc-jIZahH cHhRUk"></input>
        <button className="newsletter-btn">Subscribe</button>
      </div>
    </div>
  );
};

export default Newsetter;
