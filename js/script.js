function dice() {
    var tDice = document.getElementById('type').value;
    var x;
    if (tDice == 'd2') { x = 0.2 ;}
    if (tDice == 'd4') { x = 0.4 ;}
    if (tDice == 'd6') { x = 0.6 ;}
    if (tDice == 'd8') { x = 0.8 ;}
    if (tDice == 'd10') { x = 1 ;}
    if (tDice == 'd12') { x = 1.2 ;}
    if (tDice == 'd20') { x = 2 ;}
    if (tDice == 'd100') { x = 10 ;}
    var num = Math.ceil(Math.random()*10*x);
    return num
}

function roll() {

    var nDice = Number(document.getElementById('number').value);
    var tDice = document.getElementById('type').value;
    var bonus = Number(document.getElementById('bonus').value);
    var special = document.getElementById('special').value;
    var log = [];
    var sum = 0;
    var folder = './dice/' + tDice;
    $( ".pictures" ).empty();

    if (tDice == 'd2') {var max = 2;}
    if (tDice == 'd4') {var max = 4;}
    if (tDice == 'd6') {var max = 6;}
    if (tDice == 'd8') {var max = 8;}
    if (tDice == 'd10') {var max = 10;}
    if (tDice == 'd12') {var max = 12;}
    if (tDice == 'd20') {var max = 20;}
    if (tDice == 'd100') {var max = 100;}

    if (nDice > "" && tDice > "") {

        for (i = 0; i < nDice; i++) {
            var number = dice();
            log.push(number); 
            if (tDice == 'd100') {
                $('.pictures').append('<img id= "picture" src= ' + folder + '/' + number +'.svg style= "width: 100px; height: 100px;" />')
            } else {
                $('.pictures').append('<img id= "picture" src= ' + folder + '/' + number +'.svg style= "width: 50px; height: 50px;" />')
            }
            if (special == 'Dice Explosion!' && number == max) {
                while (number == max) {
                    var number = dice();
                    log.push(number); 
                    if (tDice == 'd100') {
                        $('.pictures').append('<img id= "picture" src= ' + folder + '/' + number +'.svg style= "width: 100px; height: 100px;" />')
                    } else {
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
}