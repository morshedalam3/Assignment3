
            // function megaFriend(listOfFriend) {
            //     var biggestChar = "";
            
            //     listOfFriend.forEach(function(word) {
            //     if(word.length > biggestChar.length) {
            //         biggestChar = word;
            //     }
            //     });
            
            //     return biggestChar;
            // }
            
            // var word = megaFriend(["Tamim", "Morshed", "Hasan", "Durjoy"]);
            // console.log(word); 
           
        
        
            function megaFriend(listOfFriend) {
                var biggestChar = "";
                listOfFriend.forEach(function(word) {
                if(word.length > biggestChar.length) {
                    biggestChar = word;
                }
                })
                return biggestChar;
            }
            var word = megaFriend(["Tamim", "Morshed", "Hasan", "Durjoy"]);
            console.log(word); 