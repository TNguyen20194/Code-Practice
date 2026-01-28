import { useEffect, useState } from "react";
import { StudentCard } from "./components/StudentCard"
import students from "./data/student";

function App() {
  const [users, setUsers] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try{
        const res = await fetch("http://localhost:3000/users");
      const data = await res.json();

      const user = data.data
      console.log(user)

      setUsers(users)
      } catch (error) {
        console.log("error", error)
      }
    }

    fetchData()
  }, [users])


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
