// YourBotArmy.js
import React from 'react';

const YourBotArmy = ({ yourBotArmy, dischargeBot }) => {
    return (
      <div className="your-bot-army">
        <h2>Your Bot Army</h2>
        <div className="added-bots">
          {yourBotArmy.map((bot) => (
            <div key={bot.id} className="bot-card">
              <h3>{bot.name}</h3>
              <img src={bot.avatar_url} alt={bot.name} />
              
              <button onClick={() => dischargeBot(bot.id)} className="remove-button">
                &#10060;
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default YourBotArmy;