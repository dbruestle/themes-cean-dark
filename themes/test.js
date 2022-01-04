// This is an example comment

let str = 'This is a string';

let arr = ['str', 0, true, null];

let obj = {
	firstName: 'Daniel',
	lastName: 'Brüstle',
	fullName: function () {
		return `${this.firstName} ${this.lastName}`;
	}
};

function x() {}

console.log(obj.fullName());

let number1 = 5;
let number2 = 10;
let result = number1 + number2;

function xyz(param1, param2) {}

for (let i = 0; i < arr.length; i++) {
	console.log(arr[i]);
}
console.log('-------');
let j = 0;
while (j < arr.length) {
	console.log(arr[j]);
	j++;
}
console.log('-------');
for (let val of arr) {
	console.log(val);
}
console.log('-------');
for (let key in obj) {
	console.log(key);
}

let re = /^a[bc]$/;
