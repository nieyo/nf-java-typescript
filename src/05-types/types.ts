import {prettyPrintStudent, prettyPrintWithSubject, printStudent, printStudentList, Student} from "./Student.ts";

const student: Student = {
    firstName: "Alex",
    lastName: "Löwe",
    age: 29,
    grades: [
        { value: 2, subject: "Math" },
        { value: "B", subject: "Biology" },
        { value: undefined, subject: "Physics" },
        { value: 3, subject: "Math" },
        { value: "A", subject: "Biology" },
        { value: "C", subject: "Physics" }
    ]
};

const students: Student[] = [
    {
        firstName: "Marty",
        lastName: "Zebra",
        age: 22,
        grades: [
            { value: "C", subject: "Math" },
            { value: 4, subject: "Biology" },
            { value: "A", subject: "Physics" },
            { value: 2, subject: "Math" },
            { value: "B", subject: "Biology" },
            { value: 5, subject: "Physics" }
        ]
    },
    {
        firstName: "Melman",
        lastName: "Giraffe",
        age: 25,
        grades: [
            { value: 1, subject: "Math" },
            { value: undefined, subject: "Biology" },
            { value: "E", subject: "Physics" },
            { value: "A", subject: "Math" },
            { value: 3, subject: "Biology" },
            { value: 2, subject: "Physics" }
        ]
    },
    {
        firstName: "Gloria",
        lastName: "Nilpferd",
        age: 20,
        grades: [
            { value: "A", subject: "Math" },
            { value: 3, subject: "Biology" },
            { value: "B", subject: "Physics" },
            { value: 1, subject: "Math" },
            { value: "C", subject: "Biology" },
            { value: 4, subject: "Physics" }
        ]
    },
    {
        firstName: "Julien",
        lastName: "Lemur",
        age: 27,
        grades: [
            { value: 5, subject: "Math" },
            { value: "D", subject: "Biology" },
            { value: undefined, subject: "Physics" },
            { value: "B", subject: "Math" },
            { value: 2, subject: "Biology" },
            { value: "A", subject: "Physics" }
        ]
    }
];


console.log(student);
printStudent(student)
printStudentList(students, printStudent)

// BONUS
console.log("--- BONUS ---")
prettyPrintStudent(student)
prettyPrintWithSubject(student)