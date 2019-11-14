     import { DiceRoller } from '/lib/esm/bundle.js';
    const diceRoller = new DiceRoller();
    window.roll = () => {
      const value = document.getElementById('input').value;
      diceRoller.roll(value);
      document.getElementById('output').value = diceRoller.output;
    };
    window.clearLog = () => {
      diceRoller.clearLog();
      document.getElementById('output').value = diceRoller.output;
    };
