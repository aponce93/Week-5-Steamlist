import React, { useState, useEffect } from "react";
import "./StreamList.css";
import { FaTrashAlt, FaEdit, FaCheck } from "react-icons/fa";

function StreamList() {
  const [input, setInput] = useState("");
  const [events, setEvents] = useState([]);

  // Load events from Local Storage when the app loads
  useEffect(() => {
    const storedEvents = JSON.parse(localStorage.getItem("events")) || [];
    setEvents(storedEvents);
  }, []);

  // Save events to Local Storage whenever the events array changes
  useEffect(() => {
    localStorage.setItem("events", JSON.stringify(events));
  }, [events]);

  // Handle input change
  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      setEvents([...events, { text: input, completed: false }]);
      setInput("");
    }
  };

  // Toggle completion status
  const toggleComplete = (index) => {
    const updatedEvents = events.map((event, i) =>
      i === index ? { ...event, completed: !event.completed } : event
    );
    setEvents(updatedEvents);
  };

  // Delete an event
  const handleDelete = (index) => {
    setEvents(events.filter((_, i) => i !== index));
  };

  return (
    <div className="streamlist-container">
      <h1>StreamList Events</h1>
      <form onSubmit={handleSubmit} className="event-form">
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          placeholder="Enter an event..."
          className="event-input"
        />
        <button type="submit" className="submit-btn">Add Event</button>
      </form>

      <ul className="event-list">
        {events.map((event, index) => (
          <li key={index} className={`event-item ${event.completed ? "completed" : ""}`}>
            <span onClick={() => toggleComplete(index)}>{event.text}</span>
            <FaTrashAlt className="delete-icon" onClick={() => handleDelete(index)} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StreamList;
