import React, { useState } from 'react';

function Chatbot() {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");

    const sendMessage = async () => {
        if (!input.trim()) return;

        const response = await fetch('http://localhost:5000/chatbot', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ message: input })
        });

        const data = await response.json();
        setMessages([...messages, { user: input, bot: data.response }]);
        setInput("");
    };

    return (
        <div className="chat-container">
            <div className="messages">
                {messages.map((msg, index) => (
                    <p key={index}>
                        <strong>User:</strong> {msg.user} <br />
                        <strong>Bot:</strong> {msg.bot}
                    </p>
                ))}
            </div>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask me anything about fashion!"
                className="input-field"
            />
            <button onClick={sendMessage} className="send-button">Send</button>
        </div>
    );
}

export default Chatbot;
