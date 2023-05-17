"use client"
export default function CategoryButton({ name, changeCategory }) {
  return (
    <button onClick={() => changeCategory(name)} className="p-2 bg-slate-600 rounded cursor-pointer">
      {name}
    </button>
  )
}
