import { StudentCard } from "./components/StudentCard"
import students from "./data/student";

function App() {

  return (
    <>
    <main className="min-h-screen bg-neutral-100 py-20">
      <div className="max-w-[1024px] mx-auto px-4 grid grid-cols-2 gap-4 place-items-center">
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
