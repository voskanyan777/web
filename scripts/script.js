function myFn_1(number_array){
    let sum_of_elements = 0;
    number_array.forEach(element => {
        sum_of_elements += element;
    });
    console.log(sum_of_elements)
}


myFn_1([1,2,3,4,5])

function myFn_4(number_array, search_number){
    let count = 0;
    number_array.forEach(element => {
        if (element == search_number){
            count += 1;
        }
    });
    console.log(count)
}

myFn_4([12, 12, 13, 141, 12, 13, 92], 13)



function myFn_6(number_array){
    let result = 1;
    number_array.forEach(element =>{
        if (!isNaN(element)){
            result *= element;    
        }
        
    })
    console.log(result)
}

myFn_6([1, 2,'a', 3, 4, 5])