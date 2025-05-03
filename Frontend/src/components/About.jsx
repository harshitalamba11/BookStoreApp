import React, { useState, useEffect, useRef } from 'react';

// Simple image carousel with prev/next controls
const images = [
  "https://placeimg.com/800/400/books",
  "https://placeimg.com/800/400/people",
  "https://placeimg.com/800/400/architecture"
];

function ImageCarousel() {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === images.length - 1 ? 0 : i + 1));

  return (
    <div className="relative w-full max-w-4xl mx-auto overflow-hidden rounded-lg shadow-lg">
      <img
        src={images[index]}
        alt={`Carousel slide ${index + 1}`}
        className="w-full h-64 object-cover"
      />
      <button
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full text-white"
        onClick={prev}
        aria-label="Previous Slide"
      >
        ‹
      </button>
      <button
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full text-white"
        onClick={next}
        aria-label="Next Slide"
      >
        ›
      </button>
    </div>
  );
}

// Section with animated expand/collapse
function ExpandableSection({ title, children }) {
  const [expanded, setExpanded] = useState(false);
  const contentRef = useRef(null);
  const [height, setHeight] = useState("0px");

  const toggle = () => setExpanded((prev) => !prev);

  useEffect(() => {
    setHeight(expanded ? `${contentRef.current.scrollHeight}px` : "0px");
  }, [expanded]);

  return (
    <div className="mb-6 max-w-4xl mx-auto px-4">
      <button
        onClick={toggle}
        className="text-2xl font-semibold mb-2 w-full text-left focus:outline-none flex justify-between items-center"
        aria-expanded={expanded}
      >
        {title}
        <span className={`transform transition-transform duration-300 ${expanded ? "rotate-180" : "rotate-0"}`}>
          ▼
        </span>
      </button>
      <div
        ref={contentRef}
        style={{ maxHeight: height, transition: "max-height 0.35s ease" }}
        className="overflow-hidden text-lg text-gray-700 dark:text-gray-300"
      >
        {children}
      </div>
    </div>
  );
}

// Team member card with expandable bio
function TeamMember({ name, role, photo, bio }) {
  const [showBio, setShowBio] = useState(false);

  return (
    <div className="border rounded-lg p-4 shadow-md max-w-sm mx-auto">
      <img
        className="rounded-full w-24 h-24 mx-auto mb-4 object-cover"
        src={photo}
        alt={`${name}'s photo`}
      />
      <h3 className="text-xl font-bold text-center">{name}</h3>
      <p className="text-center italic text-gray-600">{role}</p>
      <button
        onClick={() => setShowBio((prev) => !prev)}
        className="mt-2 text-indigo-600 hover:text-indigo-800 block mx-auto focus:outline-none"
      >
        {showBio ? "Hide Bio" : "Show Bio"}
      </button>
      {showBio && <p className="mt-2 text-gray-700 dark:text-gray-300">{bio}</p>}
    </div>
  );
}

export default function About() {
  return (
    <main className="min-h-screen py-12 bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <h1 className="text-5xl font-extrabold text-center mb-8">About Us</h1>

      <ExpandableSection title="Our Mission">
        <p>
          We are a leading online bookstore, dedicated to providing our customers with a wide selection of books at competitive prices.
          Our mission is to make reading accessible to everyone, and we strive to offer the best possible shopping experience.
        </p>
      </ExpandableSection>

      <ExpandableSection title="Our Team">
        <p>
          Our team is passionate about books and we are committed to curating a diverse collection that caters to all tastes and interests.
          Whether you're looking for the latest bestseller, a classic novel, or a niche title, we have something for everyone.
        </p>
      </ExpandableSection>

      <ExpandableSection title="Customer Commitment">
        <p>
          We pride ourselves on our excellent customer service and fast shipping. Our goal is to make your shopping experience as seamless as possible,
          so you can focus on what really matters - enjoying your books.
        </p>
      </ExpandableSection>

      <section className="max-w-6xl mx-auto px-4 mb-16">
        <h2 className="text-4xl font-bold mb-8 text-center">Meet Me</h2>
        <div className="grid grid-cols-1  gap-8">
          <TeamMember
            name="Harshita Lamba"
            role="Student"
            photo="data:image/jpeg;base64,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"
            bio="A passionate learner and aspiring software developer, Harshita is dedicated to mastering the art of coding and creating innovative solutions."
          />
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 mb-10">
        <h2 className="text-3xl font-semibold mb-4 text-center">We Value Your Feedback</h2>
        <FeedbackForm />
      </section>
    </main>
  );
}

// Feedback form with input and submission message
function FeedbackForm() {
  const [feedback, setFeedback] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFeedback('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center">
      {submitted ? (
        <p className="text-green-500 text-lg text-center mb-4">
          Thank you for your feedback!
        </p>
      ) : (
        <>
          <textarea
            className="textarea textarea-bordered w-full max-w-md mb-4 p-3 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100"
            placeholder="Your feedback..."
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            rows={4}
            required
          />
          <button
            type="submit"
            className="btn btn-primary px-6 py-2 rounded-md w-full max-w-md"
          >
            Submit Feedback
          </button>
        </>
      )}
    </form>
  );
}