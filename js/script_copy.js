import { DiceRoller } from '/lib/esm/bundle.min.js';
    const diceRoller = new DiceRoller();
    window.roll = () => {
      const nDice = document.getElementById('number').value;
      const tDice = document.getElementById('type').value;
      var bonus = document.getElementById('bonus').value;
      var special = document.getElementById('special').value;
      diceRoller.clearLog();

        if (bonus == '' || bonus < 0) {
            var bonus = 0;
        }
        
        if (special > '') {
            if (special == 'Roll w/ Advantage') {
                var special = '-L';
            }        
            if (special == 'Roll w/ Dis-Advantage') {
                var special = '-H';
            }
            if (special == 'Explode Max Rolled Dice') {
                var special = '!!';
            }
        } else {
            var special = '';
        }
        
      diceRoller.roll(nDice + tDice + special + '+' + bonus);
      
      document.getElementById('output').value = diceRoller.output;
    };
    window.clearLog = () => {
      diceRoller.clearLog();
      document.getElementById('output').value = diceRoller.output;
    };