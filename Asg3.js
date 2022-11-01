// Problem-1

class restaurantManager{
    // Problem-1a restaurantList
    restaurantList=[
    {

        id : 1,        
        restaurantName : 'KFC',
        address : 'Anand Vihar',
        city : 'New Delhi'
    },
    {
        id : 2,        
        restaurantName :'Shanti Sagar',
        address : 'Padmanabhanagar',
        city : 'Bangalore'
    },

    {
        id : 3,        
        restaurantName : 'KFC',
        address : 'Chembur Road',
        city : 'Mumbai'
    },
    {
        id : 4,        
        restaurantName : 'Subway',
        address :'WhiteField',
        city : 'Tamil Nadu'
    }
    ]



// Problem-1b printAllRestaurantNames
 printAllRestaurantNames = () => {
    return this.restaurantList.map((data) => {
        return data.restaurantName
    })

}


// Problem-1c filterRestaurantByCity
filterRestaurantByCity = (cityName) =>{
    return this.restaurantList.filter((data) =>{
        return data.city ===cityName
    })

}
}


let restObj = new restaurantManager();

 console.log(restObj.printAllRestaurantNames());

//  Solution for Problem-1b
// [ 'KFC', 'Shanti Sagar', 'KFC', 'Subway' ]


 console.log(restObj.filterRestaurantByCity('Mumbai'));

//  //  Solution for Problem-1c
//  [
//     {
//       id: 3,
//       restaurantName: 'KFC',
//       address: 'Chembur Road',
//       city: 'Mumbai'
//     }
//   ]


// **************************// Problem-2*************************************************
 let orderData = {
    'Below 500':20,
    '500-1000':29,
    '1000-1500':30,
    '1500-2000':44,
    'Above 2000':76    
 };

//  Problem-2a
let totalOrder = 0;
for(key in orderData){
    totalOrder+=Number(orderData[key])
}
 console.log(`Total No. of orders Placed  is:${totalOrder}`);

//   Solution for Problem-2a
//  Total No. of orders Placed  is:199

//  Problem-2b ((20/199)*100=)
function getPercent(orderData){
    let total = 0;
    for(key in orderData) {
        total+=Number(orderData[key]);
    }
    let output = [];
    let count = 0 ;
    for(key in orderData){
        let percentValue = ((orderData[key]/total)*100).toFixed(2);
        count += 1;
        let myObj = {}
        myObj.id = count;
        myObj.order = key;
        myObj.order_percent = `${percentValue}%`;
        myObj.restaurant = "Punjabi Tadka"
        output.push(myObj);
    }
        return output;
}
console.log(getPercent(orderData));

//   Solution for Problem-2b

[
    {
      id: 1,
      order: 'Below 500',
      order_percent: '10.05%',
      restaurant: 'Punjabi Tadka'
    },
    {
      id: 2,
      order: '500-1000',
      order_percent: '14.57%',
      restaurant: 'Punjabi Tadka'
    },
    {
      id: 3,
      order: '1000-1500',
      order_percent: '15.08%',
      restaurant: 'Punjabi Tadka'
    },
    {
      id: 4,
      order: '1500-2000',
      order_percent: '22.11%',
      restaurant: 'Punjabi Tadka'
    },
    {
      id: 5,
      order: 'Above 2000',
      order_percent: '38.19%',
      restaurant: 'Punjabi Tadka'
    }
  ]
