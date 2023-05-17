export default function ObjectDescription({description}) {
  return (
    <div className="w-full">
        <h3 className="font-semibold text-xl">{description.name}</h3>
        <p>{Object.keys(description).length ? `${Object.keys(description.stats)[0]}: ${description.stats[Object.keys(description.stats)[0]]}` : null}</p>
        <p>{description.description}</p>
    </div>
  )
}
