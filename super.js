class student{
    constructor(name){
        this.name=name;
    }
    display(){
        console.log("student name from parent class"+this.name);
    }
}
class student1 extends student{
    constructor(name,rollno){
        super(name);
        this.rollno=rollno;
    }
    display(){ 
        super.display();
        console.log("student name from child class "+this.name+" rollno "+this.rollno);
    }
}
let s=new student1("abc",123);
s.display();