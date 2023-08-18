const Student = new Promise( (resolve, reject) =>{
    setTimeout(()=>{
        let serialNumber = [1,2,3,4,5,6,7,8,9,10];
        resolve(serialNumber);
    }, 2000);
} );

const addData  =  (addOn) => {   //we put parameters to pass the value
    return new Promise ((resolve, reject)=>{
        setTimeout((addOn)=>{
            let details = {
                name : 'Hriday',
                surname : 'Jadhav',
                age : 21,
                contact : 9689516884
            }
            let {name, surname, age, contact} = details;   //obj destructuring
            resolve(`                    
            My serial number is ${addOn}  
            I am ${name} ${surname}
            I am ${age} years old
            And my number is ${contact}
            `); //here we use addOn to get the serial number.
        },2000, addOn);
    });
} 
const addSec = (addSecond) => {
    return new Promise ((resolve, reject)=>{
        setTimeout((addSecond)=>{    //is passed to the callback function inside setTimeout.
            let sec = {
                designation : 'Software Engineer'
            }
            resolve(`My designation is ${sec.designation}`)
        },2000, addSecond); //here we use parameter to get the value before the execute the callback func ( 2 sec ke bd show hone ke liye ye lagaya gya hai )
    });
}


async function getData() {
    const dataReturn = await Student;
    console.log(dataReturn);

    const nameReturn = await addData(dataReturn[2]);  //here we called the dataReturn to get the value of serial number and [2] is index number of serial number.
    console.log(nameReturn);

    const addReturn = await addSec();
    console.log(addReturn);
}   

getData();
