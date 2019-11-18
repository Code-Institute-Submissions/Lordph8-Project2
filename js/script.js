function roll() {

    var nDice = Number(document.getElementById('number').value);
    var tDice = document.getElementById('type').value;
    var bonus = Number(document.getElementById('bonus').value);
    var special = document.getElementById('special').value;
    var log = [];
    var sum = 0;
    var folder = './dice/' + tDice;

    if (tDice == 'd2') {  
        $( ".pictures" ).empty();
        for (i = 0; i < nDice; i++) {
            var number = Math.ceil((Math.random()*10)*0.2);
            log.push(number); 
            if (special == 'Dice Explosion!') {
                while (number == 2) {
                    var number = Math.ceil((Math.random()*10)*0.2);
                    log.push(number); 
                    $('.pictures').append('<img id= "picture" src= ' + folder + '/' + number +'.svg style= "width: 50px; height: 50px;" />')
                }
            } 
            $('.pictures').append('<img id= "picture" src= ' + folder + '/' + number +'.svg style= "width: 50px; height: 50px;" />')
            
        }
    }

    if (tDice == 'd4') {
        $( ".pictures" ).empty();
        for (i = 0; i < nDice; i++) {
            var number = Math.ceil((Math.random()*10)*0.4);
            log.push(number); 
            if (special == 'Dice Explosion!') {
                while (number == 4) {
                    var number = Math.ceil((Math.random()*10)*0.4);
                    log.push(number); 
                    $('.pictures').append('<img id= "picture" src= ' + folder + '/' + number +'.svg style= "width: 50px; height: 50px;" />')
                }
            } 
            $('.pictures').append('<img id= "picture" src= ' + folder + '/' + number +'.svg style= "width: 50px; height: 50px;" />')
        }
    }

    if (tDice == 'd6') {
        $( ".pictures" ).empty();
        for (i = 0; i < nDice; i++) {
            var number = Math.ceil((Math.random()*10)*0.6);
            log.push(number); 
            if (special == 'Dice Explosion!') {
                while (number == 6) {
                    var number = Math.ceil((Math.random()*10)*0.6);
                    log.push(number); 
                    $('.pictures').append('<img id= "picture" src= ' + folder + '/' + number +'.svg style= "width: 50px; height: 50px;" />')
                }
            } 
            $('.pictures').append('<img id= "picture" src= ' + folder + '/' + number +'.svg style= "width: 50px; height: 50px;" />')
        }
    }

    if (tDice == 'd8') {
        $( ".pictures" ).empty();
        for (i = 0; i < nDice; i++) {
            var number = Math.ceil((Math.random()*10)*0.8);
            log.push(number); 
            if (special == 'Dice Explosion!') {
                while (number == 8) {
                    var number = Math.ceil((Math.random()*10)*0.8);
                    log.push(number); 
                    $('.pictures').append('<img id= "picture" src= ' + folder + '/' + number +'.svg style= "width: 50px; height: 50px;" />')
                }
            } 
            $('.pictures').append('<img id= "picture" src= ' + folder + '/' + number +'.svg style= "width: 50px; height: 50px;" />')
        }
    }

    if (tDice == 'd10') {
        $( ".pictures" ).empty();
        for (i = 0; i < nDice; i++) {
            var number = Math.ceil((Math.random()*10));
            log.push(number); 
            if (special == 'Dice Explosion!') {
                while (number == 10) {
                    var number = Math.ceil((Math.random()*10));
                    log.push(number); 
                    $('.pictures').append('<img id= "picture" src= ' + folder + '/' + number +'.svg style= "width: 50px; height: 50px;" />')
                }
            } 
            $('.pictures').append('<img id= "picture" src= ' + folder + '/' + number +'.svg style= "width: 50px; height: 50px;" />')
        }
    }
    if (tDice == 'd12') {
        $( ".pictures" ).empty();
        for (i = 0; i < nDice; i++) {
            var number = Math.ceil((Math.random()*10)*1.2);
            log.push(number); 
            if (special == 'Dice Explosion!') {
                while (number == 12) {
                    var number = Math.ceil((Math.random()*10)*1.2);
                    log.push(number); 
                    $('.pictures').append('<img id= "picture" src= ' + folder + '/' + number +'.svg style= "width: 50px; height: 50px;" />')
                }
            } 
            $('.pictures').append('<img id= "picture" src= ' + folder + '/' + number +'.svg style= "width: 50px; height: 50px;" />')
        }
    }

    if (tDice == 'd20') {
        $( ".pictures" ).empty();
        for (i = 0; i < nDice; i++) {
            var number = Math.ceil((Math.random()*20));
            log.push(number); 
            if (special == 'Dice Explosion!') {
                while (number == 20) {
                    var number = Math.ceil((Math.random()*20));
                    log.push(number); 
                    $('.pictures').append('<img id= "picture" src= ' + folder + '/' + number +'.svg style= "width: 50px; height: 50px;" />')
                }
            } 
            $('.pictures').append('<img id= "picture" src= ' + folder + '/' + number +'.svg style= "width: 50px; height: 50px;" />')
        }
    }

    if (tDice == 'd100') {
        $( ".pictures" ).empty();
        for (i = 0; i < nDice; i++) {
            var number = Math.ceil((Math.random()*100));
            log.push(number); 
            if (special == 'Dice Explosion!') {
                while (number == 100) {
                    var number = Math.ceil((Math.random()*100));
                    log.push(number); 
                    $('.pictures').append('<img id= "picture" src= ' + folder + '/' + number +'.svg style= "width: 50px; height: 50px;" />')
                }
            } 
            $('.pictures').append('<img id= "picture" src= ' + folder + '/' + number +'.svg style= "width: 100px; height: 100px;" />');
        }
    }

    if (special == 'Get Max Roll' || special == 'Get Min Roll') {
        if (special == 'Get Max Roll') {
            var advantage = Number(Math.max(...log)) + bonus; 
            $( ".pictures" ).empty();

            if (tDice == 'd100') {
                $('.pictures').append('<img id= "picture" src= ' + folder + '/' + (advantage - bonus) +'.svg style= "width: 100px; height: 100px;" />');
            } else {
                $('.pictures').append('<img id= "picture" src= ' + folder + '/' + (advantage - bonus) +'.svg style= "width: 50px; height: 50px;" />');
            }

            if (bonus != 0 || bonus != "") {
            $('.pictures').append('<p class= "total">+ Bonus(' + bonus + ') = ' + advantage + '</p>');
        } else {
            $('.pictures').append('<p class= "total"> = ' + advantage + '</p>');
        }
        } 
            if (special == 'Get Min Roll') {
            var disAdvantage = Number(Math.min(...log)) + bonus; 
            $( ".pictures" ).empty();
            if (tDice == 'd100') {
                $('.pictures').append('<img id= "picture" src= ' + folder + '/' + (advantage + bonus) +'.svg style= "width: 100px; height: 100px;" />');
            } else {
                $('.pictures').append('<img id= "picture" src= ' + folder + '/' + (advantage - bonus) +'.svg style= "width: 50px; height: 50px;" />');
            }
            
            if (bonus != 0 || bonus != "") {
            $('.pictures').append('<p class= "total">+ Bonus(' + bonus + ') = ' + disAdvantage + '</p>');
        } else {
            $('.pictures').append('<p class= "total"> = ' + disAdvantage + '</p>');
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