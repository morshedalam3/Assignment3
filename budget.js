      function budgetCalculator(watch, phone, laptob){
         var WatchPrice = watch * 50; 
         var phonePrice = phone * 100;
         var laptobPrice  = laptob * 500;
         var sum = (WatchPrice + phonePrice + laptobPrice);
         return sum;
      }
      var total = budgetCalculator(3, 4, 6);
      console.log(total); 
