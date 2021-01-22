//  https://github.com/morshedalam3/Assignment3/blob/main/assignment.js
    
    function kilometerToMeter(kilo){
        var meter = kilo * 1000;
        return meter;
    }
    var road = [4, 5, 10];
    var tamimRoad = kilometerToMeter(road[2]);
    //   (road[2]) means position of array(road) 
    console.log(tamimRoad);

    function budgetCalculator(watch, phone, laptob){
        var WatchPrice = watch * 50; 
        var phonePrice = phone * 100;
        var laptobPrice  = laptob * 500;
        var sum = (WatchPrice + phonePrice + laptobPrice);
        return sum;
     }
     var total = budgetCalculator(3, 4, 6);
     console.log(total); 


     function hotelCost(days){
        var day = days;
        var rent = 0;
        if(day <= 10) {
            rent = day * 100;
        }else if(day <= 20) {
            var firstpart = 10 * 100;
            var remaining = day - 10;
            var secondpart = remaining * 80;
            rent = firstpart + secondpart;
        }
        else{
            var firstpart = 10 * 100;
            var secondpart = 10 * 80;
            var remaining = day - 20;
            var thirdpart = remaining * 50
            rent =firstpart + secondpart + thirdpart;
        }
        return rent;
    }
    var totalrent = hotelCost(35);
    console.log(totalrent);


    function megaFriend(listOfFriend) {
        var biggestChar = "";
    
        listOfFriend.forEach(function(word) {
        if(word.length > biggestChar.length) {
            biggestChar = word;
        }
        });
    
        return biggestChar;
    }
    
    var word = megaFriend(["Tamim", "Morshed", "Hasan", "Durjoy"]);
    console.log(word); 
