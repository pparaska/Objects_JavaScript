
var amitabh = new Object();
amitabh.fname = "Amitabh";
amitabh.lname = "Bacchan";
amitabh.age = 70;
amitabh.skills = ['Acting', 'Writing'];
amitabh.address = {
    city: "Mumbai",
    pincode: "400709"
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

abhishek.print();
amitabh.print();
