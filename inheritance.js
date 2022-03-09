class student{
    display(){
        console.log("parent class");
    }
}
class student1 extends student{
    display1(){ 
    console.log("child class");
    }
}
let s=new student();
s.display();
let s1=new student1();
s1.display();
s1.display1();