
type GradeValue = 1 | 2 | 3 | 4 | 5 | 6 | "A" | "B" | "C" | "D" | "E" | "F";

type Grade = {
    value: GradeValue | undefined;
    subject: string;
};

export type Student = {
    firstName: string,
    lastName: string,
    age: number,
    grades: Grade[]
}



export function printStudent(student: Student): void {
    console.log(`${student.firstName} ${student.lastName} (${student.age})`);
    console.log("==============================");
    console.log(`Grades: (${student.grades.map(grade => grade.value === undefined ? "*" : grade.value)})`);
    console.log("")
}

export function printStudentList(list: Student[], printFunction: (student: Student) => void): void {
    list.forEach(student => printFunction(student))
    // list.forEach(printFunction)
}

// BONUS
export function prettyPrintStudent(student: Student): void{
    const outputLine: string = `${student.firstName} ${student.lastName} (${student.age})`

    let highlightLine: string = ""
    for (let i = 0; i < outputLine.length; i++) {
         highlightLine +="="
    }

    console.log(outputLine);
    console.log(highlightLine)
    console.log(`Grades: (${student.grades.map(grade => grade.value === undefined ? "*" : grade.value)})`);
    console.log("")
}

export function prettyPrintWithSubject(student: Student): void {
    const outputLine: string = `${student.firstName} ${student.lastName} (${student.age})`
    let highlightLine: string = ""
    for (let i = 0; i < outputLine.length; i++) {
        highlightLine +="="
    }
    console.log(outputLine);
    console.log(highlightLine)
    console.log(printGradesWithSubject(student))
}


