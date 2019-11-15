function roll() {

    var nDice = Number(document.getElementById('number').value);
    var tDice = document.getElementById('type').value;
    var bonus = Number(document.getElementById('bonus').value);
    var special = document.getElementById('special').value;
    var log = [];
    var sum = 0;

    var folder = './dice/' + tDice;

    if (tDice == 'd2') {
        
        for (i = 0; i < nDice; i++) {
            var number = Math.ceil((Math.random()*10)*0.2);
            var file = folder + '/' + number + '.svg';
            if (special == 'Dice Explosion!') {
                while (number % 2 === 0) {
                    var number = number + Math.ceil((Math.random()*10)*0.2);
                }
                var img = document.createElement("img");
                img.src = file;

                var src = document.getElementById("pictures");
                src.appendChild(img);
            } 
            log.push(number); 
        }
    }

    if (tDice == 'd4') {
        for (i = 0; i < nDice; i++) {
            var number = Math.ceil((Math.random()*10)*0.4);
            if (special == 'Dice Explosion!') {
                while (number % 4 === 0) {
                    var number = number + Math.ceil((Math.random()*10)*0.4);
                }
            } 
            log.push(number); 
        }
    }

    if (tDice == 'd6') {
        for (i = 0; i < nDice; i++) {
            var number = Math.ceil((Math.random()*10)*0.6);
            if (special == 'Dice Explosion!') {
                while (number % 6 === 0) {
                    var number = number + Math.ceil((Math.random()*10)*0.6);
                }
            } 
            log.push(number); 
        }
    }

    if (tDice == 'd8') {
        for (i = 0; i < nDice; i++) {
            var number = Math.ceil((Math.random()*10)*0.8);
            if (special == 'Dice Explosion!') {
                while (number % 8 === 0) {
                    var number = number + Math.ceil((Math.random()*10)*0.8);
                }
            } 
            log.push(number); 
        }
    }

    if (tDice == 'd10') {
        for (i = 0; i < nDice; i++) {
            var number = Math.ceil((Math.random()*10));
            if (special == 'Dice Explosion!') {
                while (number % 10 === 0) {
                    var number = number + Math.ceil((Math.random()*10));
                }
            } 
            log.push(number); 
        }
    }
    if (tDice == 'd12') {
        for (i = 0; i < nDice; i++) {
            var number = Math.ceil((Math.random()*10)*1.2);
            if (special == 'Dice Explosion!') {
                while (number % 12 === 0) {
                    var number = number + Math.ceil((Math.random()*10)*1.2);
                }
            } 
            log.push(number); 
        }
    }

    if (tDice == 'd20') {
        for (i = 0; i < nDice; i++) {
            var number = Math.ceil((Math.random()*20));
            if (special == 'Dice Explosion!') {
                while (number % 20 === 0) {
                    var number = number + Math.ceil((Math.random()*20));
                }
            } 
            log.push(number); 
        }
    }

    if (tDice == 'd100') {
        for (i = 0; i < nDice; i++) {
            var number = Math.ceil((Math.random()*100));
            if (special == 'Dice Explosion!') {
                while (number % 100 === 0) {
                    var number = number + Math.ceil((Math.random()*100));
                }
            } 
            log.push(number); 
        }
    }

    if (special == 'Get Max Roll' || special == 'Get Min Roll') {
        if (special == 'Get Max Roll') {
            var advantage = Number(Math.max(...log)) + bonus; 

            document.getElementById('output').value = log.join(", ")  + ' + Bonus(' + bonus + ') = ' + advantage; 
        } 
            if (special == 'Get Min Roll') {
            var disAdvantage = Number(Math.min(...log)) + bonus; 

            document.getElementById('output').value = log.join(", ")  + ' + Bonus(' + bonus + ') = ' + disAdvantage; 
        } 
    } else {  
        for (x = 0; x < log.length; x++) {
                var sum = sum + log[x];
        }
        var sum = sum + bonus

        document.getElementById('output').value = log.join(", ")  + ' + Bonus(' + bonus + ') = '+ sum;
    
    }    
}