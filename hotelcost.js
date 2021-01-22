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

 