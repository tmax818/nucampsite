class Student {
    constructor(name, email, community){
        this.name = name;
        this.email = email;
        this.community = community;
    
    }
}

class Bootcamp {
    constructor(name, level, students = []){
        this.name = name;
        this.level = level;
        this.students = students;
    }

    registerStudent(Rstudent) {
        //adding the student to the filtered array if s/he is in the array of students.
        let test = this.students.filter(student => student.email === Rstudent.email)

        if(test.length !== 0){
        // checking if my test array has a student object
            console.log('we already have that one', test)
        } else {
            //add the student to the array
            this.students.push(Rstudent)
        }
    }
}
const sean = new Student("Sean", "sdog@aol.com", "Seattle")
const tony = new Student("Tony", "tdog@aol.com", "LA")
const bootcamp = new Bootcamp("react", 11);