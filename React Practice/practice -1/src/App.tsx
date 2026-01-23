import { StudentCard } from "./components/StudentCard"
import type { Student } from "./types/student";


function App() {

const students: Student[] = [
  {
    avatarUrl: "https://i.pravatar.cc/150?img=13",
    name: "Daniel Lee",
    age: 27,
    hobby: ["Chess", "Math puzzles", "Coding"],
    bio: "Daniel is a chess enthusiast and math club captain. He enjoys solving algorithm problems and building small JavaScript challenges. He’s currently learning React patterns and TypeScript.",
  },
  {
    avatarUrl: "https://i.pravatar.cc/150?img=14",
    name: "Sofia Martinez",
    age: 19,
    hobby: ["Digital art", "UX design", "Photography"],
    bio: "Sofia loves digital art and is exploring UX design. She enjoys studying how people interact with interfaces and improving layouts. On weekends, she takes photos and edits them for fun.",
  },
  {
    avatarUrl: "https://i.pravatar.cc/150?img=15",
    name: "Ethan Brown",
    age: 22,
    hobby: ["Full-stack dev", "Startups", "Blogging"],
    bio: "Ethan is a final-year student interested in full-stack development and startups. He likes building small web apps and learning how products are made. He also writes short blog posts about what he learns.",
  },
  {
    avatarUrl: "https://i.pravatar.cc/150?img=16",
    name: "Linh Nguyen",
    age: 20,
    hobby: ["AI", "Data", "Sustainability"],
    bio: "Linh is passionate about AI and data-driven problem solving. She’s especially interested in sustainability projects and science fairs. She enjoys turning ideas into simple prototypes with React.",
  },
  {
    avatarUrl: "https://i.pravatar.cc/150?img=7",
    name: "Noah Wilson",
    age: 17,
    hobby: ["Basketball", "React", "Tailwind"],
    bio: "Noah plays basketball and builds small React apps after school. He likes experimenting with Tailwind to make clean UI quickly. He’s practicing component design and state management.",
  },
];

  return (
    <>
    <main className="min-h-screen bg-neutral-100 py-20">
      <div className="max-w-2xl mx-auto px-4 grid gap-8 place-items-center">
        {students.map((student) => {
          return (
            <StudentCard key={student.name} student={student} />
          )
        })}
      </div>
    </main>
    </>
  )
}

export default App
