//GET VALUES
//Complete the getValues function. This function should:
    var user = {
        name: "Zod",
        age: 1000
    }
    /*Creating function that accepts one argument that is an object*/
    function getValues(obj) {
        var arr = []; //create a variable and assign an empty array to it
//__________________________________BEGIN for-in loop
        /*Here we create a for-in loop  that iterates through the object. We then push the values of the object we are iterating through to an array */
        for (val in obj) {
            arr.push(obj[val]);  //_____Push values to array
        }
//__________________________________END for-in loop
        return arr;
    }
    console.log(getValues(user)); // [ 'Zod', 1000 ];

//ZOD
//Create a function that takes an object as an arguement and return and array that lists all the keys and values.

    user = {
        name: "Zod",
        age: 1000,
    }
    function keysThenVals(obj) {
        var objArr = Object.keys(obj);
        for (value in obj) {
            objArr.push(obj[value]);
        }
        return objArr
    }
    console.log(keysThenVals(user));

// matchArray
//Accept two arguements: an object and an array of elements
//Return 'true' when all of the elements in the array are keys in the object. Otherwise, false.

    matchArray({name: "jump", gender: "male", nationality: "thai"}, ["name", "gender", "nationality"]);
//Creating a function called matchArray, takes an object and an array

    function matchArray(obj, array) {
        var objArr = Object.keys(obj)
        console.log(objArr);
        var test = true; 
        //for (value in )
        for (var i = 0; i < array.length; i++) {
            test = test && testforvalue(array[i], objArr);
            console.log(test);
        }
        return test;
    }
//Create a function to test the value
    function testforvalue(value, array) {
        var test = false;
        for (var i = 0; i < array.length; i++) {
            if (array[i] == value) {
                test = true;
                break;
            }
        }
        return test;
    }