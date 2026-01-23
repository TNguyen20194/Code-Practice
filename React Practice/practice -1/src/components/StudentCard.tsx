import { useState } from "react";

interface Student {
  avatarUrl: string;
  name: string;
  age: number;
  bio: string;
}

interface StudentCardProps {
  student: Student;
}

// Student obj has name, age, bio, avatar

export const StudentCard = ({ student }: StudentCardProps) => {
  const [bioToggle, setBioToggle] = useState(false);

  const { avatarUrl, name, age, bio } = student;

  return (
    <>
      <article className="w-[350px] bg-neutral-900/95 text-white rounded-2xl shadow-xl p-6 flex flex-col items-center gap-4 transition-all duration-300 hover:shadow-2xl">
        {/* Avatar */}
        <div className="w-28 h-28 rounded-full overflow-hidden ring-4 ring-neutral-300">
          <img
            src={avatarUrl}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Info */}
        <div className="text-center space-y-1">
          <h2 className="text-xl text-white font-semibold tracking-wide">
            {name}
          </h2>
          <p className="text-sm font-medium text-neutral-200">Age: {age}</p>
        </div>

        {/* Button */}
        <button
          className="mt-3 px-6 py-2.5 rounded-full
                    bg-emerald-600 hover:bg-emerald-500
                    text-white text-sm font-semibold
                    shadow-md shadow-emerald-600/30
                    hover:shadow-lg
                    active:scale-95
                    transition-all
                    focus:ring-2 focus:ring-emerald-400"
          onClick={() => setBioToggle(!bioToggle)}
        >
          {bioToggle ? "Hide bio" : "Show bio"}
        </button>

        {/* Bio */}
        <div
          className={`overflow-hidden transition-all duration-300 ${bioToggle ? "max-h-40 opacity-100 mt-3" : "max-h-0 opacity-0"}`}
        >
          {bioToggle ? (
            <p className="text-md text-neutral-200 text-center leading-relaxed">
              {bio}
            </p>
          ) : (
            ""
          )}
        </div>
      </article>
    </>
  );
};
