function roll() {

    var nDice = Number(document.getElementById('number').value);
    var tDice = document.getElementById('type').value;
    var bonus = Number(document.getElementById('bonus').value);
    var special = document.getElementById('special').value;
    var log = [];
    var sum = 0;
    var folder = './dice/' + tDice;
    $( ".pictures" ).empty();

    if (tDice == 'd2') {  
        for (i = 0; i < nDice; i++) {
            var number = Math.ceil((Math.random()*10)*0.2);
            log.push(number); 
            $('.pictures').append('<img id= "picture" src= ' + folder + '/' + number +'.svg style= "width: 50px; height: 50px;" />')
            if (special == 'Dice Explosion!' && number == 2) {
                while (number == 2) {
                    var number = Math.ceil((Math.random()*10)*0.2);
                    log.push(number); 
                    $('.pictures').append('<img id= "picture" src= ' + folder + '/' + number +'.svg style= "width: 50px; height: 50px;" />')
                }
            } 
        }
    }

    if (tDice == 'd4') {
        for (i = 0; i < nDice; i++) {
            var number = Math.ceil((Math.random()*10)*0.4);
            log.push(number); 
            $('.pictures').append('<img id= "picture" src= ' + folder + '/' + number +'.svg style= "width: 50px; height: 50px;" />')
            if (special == 'Dice Explosion!' && number == 4) {
                while (number == 4) {
                    var number = Math.ceil((Math.random()*10)*0.4);
                    log.push(number); 
                    $('.pictures').append('<img id= "picture" src= ' + folder + '/' + number +'.svg style= "width: 50px; height: 50px;" />')
                }
            } 
        }
    }

    if (tDice == 'd6') {
        for (i = 0; i < nDice; i++) {
            var number = Math.ceil((Math.random()*10)*0.6);
            log.push(number); 
            $('.pictures').append('<img id= "picture" src= ' + folder + '/' + number +'.svg style= "width: 50px; height: 50px;" />')
            if (special == 'Dice Explosion!' && number == 6) {
                while (number == 6) {
                    var number = Math.ceil((Math.random()*10)*0.6);
                    log.push(number); 
                    $('.pictures').append('<img id= "picture" src= ' + folder + '/' + number +'.svg style= "width: 50px; height: 50px;" />')
                }
            } 
        }
    }

    if (tDice == 'd8') {
        for (i = 0; i < nDice; i++) {
            var number = Math.ceil((Math.random()*10)*0.8);
            log.push(number); 
            $('.pictures').append('<img id= "picture" src= ' + folder + '/' + number +'.svg style= "width: 50px; height: 50px;" />')
            if (special == 'Dice Explosion!' && number == 8) {
                while (number == 8) {
                    var number = Math.ceil((Math.random()*10)*0.8);
                    log.push(number); 
                    $('.pictures').append('<img id= "picture" src= ' + folder + '/' + number +'.svg style= "width: 50px; height: 50px;" />')
                }
            } 
        }
    }

    if (tDice == 'd10') {
        for (i = 0; i < nDice; i++) {
            var number = Math.ceil((Math.random()*10));
            log.push(number); 
            $('.pictures').append('<img id= "picture" src= ' + folder + '/' + number +'.svg style= "width: 50px; height: 50px;" />')
            if (special == 'Dice Explosion!' && number == 10) {
                while (number == 10) {
                    var number = Math.ceil((Math.random()*10));
                    log.push(number); 
                    $('.pictures').append('<img id= "picture" src= ' + folder + '/' + number +'.svg style= "width: 50px; height: 50px;" />')
                }
            } 
        }
    }
    if (tDice == 'd12') {
        for (i = 0; i < nDice; i++) {
            var number = Math.ceil((Math.random()*10)*1.2);
            log.push(number); 
            $('.pictures').append('<img id= "picture" src= ' + folder + '/' + number +'.svg style= "width: 50px; height: 50px;" />')
            if (special == 'Dice Explosion!' && number == 12) {
                while (number == 12) {
                    var number = Math.ceil((Math.random()*10)*1.2);
                    log.push(number); 
                    $('.pictures').append('<img id= "picture" src= ' + folder + '/' + number +'.svg style= "width: 50px; height: 50px;" />')
                }
            } 
        }
    }

    if (tDice == 'd20') {
        for (i = 0; i < nDice; i++) {
            var number = Math.ceil((Math.random()*20));
            log.push(number); 
            $('.pictures').append('<img id= "picture" src= ' + folder + '/' + number +'.svg style= "width: 50px; height: 50px;" />')
            if (special == 'Dice Explosion!' && number == 20) {
                while (number == 20) {
                    var number = Math.ceil((Math.random()*20));
                    log.push(number); 
                    $('.pictures').append('<img id= "picture" src= ' + folder + '/' + number +'.svg style= "width: 50px; height: 50px;" />')
                }
            } 
        }
    }

    if (tDice == 'd100') {
        for (i = 0; i < nDice; i++) {
            var number = Math.ceil((Math.random()*100));
            log.push(number); 
            $('.pictures').append('<img id= "picture" src= ' + folder + '/' + number +'.svg style= "width: 50px; height: 50px;" />')
            if (special == 'Dice Explosion!' && number == 100) {
                while (number == 100) {
                    var number = Math.ceil((Math.random()*100));
                    log.push(number); 
                    $('.pictures').append('<img id= "picture" src= ' + folder + '/' + number +'.svg style= "width: 50px; height: 50px;" />')
                }
            } 
        }
    }

    if (special == 'Get Max Roll' || special == 'Get Min Roll') {
        if (special == 'Get Min Roll') {

            var disAdvantage = Number(Math.min(...log)) + bonus; 
                        
            if (bonus != 0 || bonus != "") {
                $('.pictures').append('<p class= "total">+ Bonus(' + bonus + ') = ' + disAdvantage + '</p>');
            } else {
                $('.pictures').append('<p class= "total"> = ' + disAdvantage + '</p>');
            }
            
        } else {   

            var advantage = Number(Math.max(...log)) + bonus; 
            
            if (bonus != 0 || bonus != "") {
                $('.pictures').append('<p class= "total">+ Bonus(' + bonus + ') = ' + advantage + '</p>');
            } else {
                $('.pictures').append('<p class= "total"> = ' + advantage + '</p>');
            }
        }
    } else {  
        for (x = 0; x < log.length; x++) {
                var sum = sum + log[x];
        }
        var sum = sum + bonus

        if (bonus != 0 || bonus != "") {
            $('.pictures').append('<p class= "total">+ Bonus(' + bonus + ') = ' + sum + '</p>');
        } else {
            $('.pictures').append('<p class= "total"> = ' + sum + '</p>');
        }
    }    
}