
class student{
    static count = 0;
    constructor(name, age, phoneNumber, boardMarks){
        this.name = name,
        this.age = age, 
        this.phoneNumber = phoneNumber,
        this.boardMarks = boardMarks,
        student.countStudent()
    }
    static countStudent(){
        return (student.count ++)
    }
    eligible(){
        if(this.boardMarks > 40){
            console.log("eligible")
        }else if(this.boardMarks<40){
            console.log("not eligible")
        } 
    }
    setPlacementAge(minPlacementAge){
        return (minMarks) => {
            if(this.minMarks > minMarks && this.boardMarks > minPlacementAge){
                console.log(`${this.name} is eligible for placement`)
            }
            else{
                console.log(`${this.name} is not eligible for placement`)
            }
        }
    }
}


const student1 = new student('sonu', 12, 12345, 30)
const student2 = new student('sonu', 12, 12345, 50)
const student3 = new student('sonu', 12, 12345, 50)
const student4 = new student('sonu', 12, 12345, 50)
const student5 = new student('sonu', 12, 12345, 50)

student1.setPlacementAge(10)(50)

student1.eligible()
console.log(student.countStudent())

