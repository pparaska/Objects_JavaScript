
var amitabh = new Object();
amitabh.fname = "Amitabh";
amitabh.lname = "Bachchan";
amitabh.age = 70;
amitabh.skills = ['Acting', 'Dancing'];
amitabh.address = {
    city: "Mumbai",
    pincode: "400001"
};
amitabh.dateOfBirth = new Date('1950-04-15').toDateString();
amitabh.married = true;
amitabh.profession = "Actor";
amitabh.print = function () {
    console.log(this.fname, this.lname, this.age, this.skills, this.address, this.dateOfBirth, this.married, this.profession);
}

var abhishek = Object.create(amitabh);
abhishek.fname = "Abhishek";
abhishek.age = 45;
abhishek.dateOfBirth = new Date('1975-07-21').toDateString();

var aradhya = Object.create(abhishek);
aradhya.fname = "Aaradhya";
aradhya.age = 5;
aradhya.dateOfBirth = new Date('2012-06-30').toDateString();
aradhya.profession = "student";
aradhya.married = false;
aradhya.skills = ['painting', 'singing'];

abhishek.print();
amitabh.print();
aradhya.print();



