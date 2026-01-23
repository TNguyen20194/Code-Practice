import { StudentCard } from "./components/StudentCard"


function App() {

const students = [
  {
    avatarUrl: "https://i.pravatar.cc/150?img=13",
    name: "Daniel Lee",
    age: 17,
    bio: "Chess enthusiast and math club captain. Enjoys solving algorithm problems.",
  },
  {
    avatarUrl: "https://i.pravatar.cc/150?img=14",
    name: "Sofia Martinez",
    age: 16,
    bio: "Aspiring UX designer who loves digital art and psychology.",
  },
  {
    avatarUrl: "https://i.pravatar.cc/150?img=15",
    name: "Ethan Brown",
    age: 18,
    bio: "Final-year student interested in full-stack development and startups.",
  },
  {
    avatarUrl: "https://i.pravatar.cc/150?img=16",
    name: "Linh Nguyen",
    age: 17,
    bio: "Science fair winner passionate about AI, data, and sustainability.",
  },
  {
    avatarUrl: "https://i.pravatar.cc/150?img=17",
    name: "Noah Wilson",
    age: 16,
    bio: "Plays basketball, builds small React apps, and experiments with Tailwind.",
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
