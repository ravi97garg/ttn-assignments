const user = {
firstName: 'Sahil',
lastName: 'Dua',
Address: {
Line1: 'address line 1',
Line2: 'address line 2',
State: 'Delhi',
Pin: 110085,
Country: 'India',
City: 'New Delhi',
},
phoneNo: 9999999999
}

let {firstName, lastName, Address, phoneNo} = user;
let {Line1, Line2, State, Pin, Country, City} = Address
console.log(`First Name: ${firstName}
Last Name: ${lastName}
Line1: ${Line1}
Line2: ${Line2}
State: ${State}
Pincode: ${Pin}
Country: ${Country}
City: ${City}
Phone No.: ${phoneNo}`)
