// App.js
import React, { useState, useEffect } from 'react';
import BotCollection from './components/BotCollection';
import YourBotArmy from './components/YourBotArmy';
import './App.css'; // Import the CSS file

const App = () => {
  const [bots, setBots] = useState([]);
  const [yourBotArmy, setYourBotArmy] = useState([]);

  useEffect(() => {
    // Fetch data from the local server
    fetch('http://localhost:3000/bots')
      .then((response) => response.json())
      .then((data) => setBots(data))
      .catch((error) => console.error('Error fetching bots:', error));
  }, []);

  const addToCollection = (bot) => {
    // Check if the bot is not already in the collection
    if (!yourBotArmy.find((b) => b.id === bot.id)) {
      setYourBotArmy([...yourBotArmy, bot]);
    }
  };

  const dischargeBot = (botId) => {
    // Remove bot from yourBotArmy
    const updatedArmy = yourBotArmy.filter((bot) => bot.id !== botId);
    setYourBotArmy(updatedArmy);
  };

  return (
    <div>
      <h1>Bot Battlr</h1>
      <YourBotArmy yourBotArmy={yourBotArmy} dischargeBot={dischargeBot} />
      <BotCollection bots={bots} addToCollection={addToCollection} dischargeBot={dischargeBot} />
    </div>
  );
};

export default App;