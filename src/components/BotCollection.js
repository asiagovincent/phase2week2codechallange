// BotCollection.js
import React from 'react';

const BotCollection = ({ bots, addToCollection, dischargeBot }) => {
  return (
    <div className="bot-collection">
      <h2>Bot Collection</h2>
      <div className="bot-grid">
        {bots.map((bot) => (
          <div key={bot.id} onClick={() => addToCollection(bot)} className="bot-card">
            <h3>{bot.name}</h3>
            <img src={bot.avatar_url} alt={bot.name} />
            {/* Conditionally render the discharge button only for listed bots */}
            {!bot.isAdded && <button onClick={() => dischargeBot(bot.id)}>Discharge</button>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BotCollection;
