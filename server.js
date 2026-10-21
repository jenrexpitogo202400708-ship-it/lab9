const express = require("express");

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3000;

let students = [
  {
    id: 1,
    name: "Juan Dela Cruz",
    course: "BSIT",
    year: 2,
    email: "juan@example.com"
  },
  {
    id: 2,
    name: "Maria Santos",
    course: "BSCS",
    year: 1,
    email: "maria@example.com"
  }
];

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Student Records API is running"
  });
});

app.get("/api/students", (req, res) => {
  res.status(200).json(students);
});

app.get("/api/students/:id", (req, res) => {
  const id = Number(req.params.id);

  const student = students.find((student) => student.id === id);

  if (!student) {
    return res.status(404).json({
      message: "Student not found"
    });
  }

  res.status(200).json(student);
});

app.post("/api/students", (req, res) => {
  const { name, course, year, email } = req.body;

  if (!name || !course || year === undefined || !email) {
    return res.status(400).json({
      message: "Name, course, year, and email are required"
    });
  }

  if (typeof year !== "number" || year < 1 || year > 4) {
    return res.status(400).json({
      message: "Year must be a number from 1 to 4"
    });
  }

  const newId =
    students.length > 0
      ? Math.max(...students.map((student) => student.id)) + 1
      : 1;

  const newStudent = {
    id: newId,
    name,
    course,
    year,
    email
  };

  students.push(newStudent);

  res.status(201).json({
    message: "Student created successfully",
    student: newStudent
  });
});

app.put("/api/students/:id", (req, res) => {
  const id = Number(req.params.id);

  const student = students.find((student) => student.id === id);

  if (!student) {
    return res.status(404).json({
      message: "Student not found"
    });
  }

  const { name, course, year, email } = req.body;

  if (!name || !course || year === undefined || !email) {
    return res.status(400).json({
      message: "Name, course, year, and email are required"
    });
  }

  if (typeof year !== "number" || year < 1 || year > 4) {
    return res.status(400).json({
      message: "Year must be a number from 1 to 4"
    });
  }

  student.name = name;
  student.course = course;
  student.year = year;
  student.email = email;

  res.status(200).json({
    message: "Student updated successfully",
    student
  });
});

app.delete("/api/students/:id", (req, res) => {
  const id = Number(req.params.id);

  const studentIndex = students.findIndex(
    (student) => student.id === id
  );

  if (studentIndex === -1) {
    return res.status(404).json({
      message: "Student not found"
    });
  }

  const deletedStudent = students.splice(studentIndex, 1)[0];

  res.status(200).json({
    message: "Student deleted successfully",
    student: deletedStudent
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});