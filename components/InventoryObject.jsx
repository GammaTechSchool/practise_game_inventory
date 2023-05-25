import Image from "next/image"

export default function InventoryObject({ data, setDescription, equippedItems, setEquippedItems }) {


  const handleClick = () => {

    setEquippedItems(prev => {
      if (prev[data.category]?.name === data.name) {
        const holdPrev = { ...prev }
        delete holdPrev[data.category];
        return holdPrev
      } else {
        return {
          ...prev,
          [data.category]: data
        }
      }
    });

    setDescription(prev => {
      if (equippedItems[data.category]?.name === data.name) {
        return {}
      } else {
        return {
          name: data.name,
          description: data.description,
          stats: {
            type: Object.keys(data.stats)[0],
            value: data.stats[Object.keys(data.stats)[0]]
          }
        }
      }
    });
  }

  return (
    <div className={`relative w-[100px] h-[100px] flex justify-center items-center border ${equippedItems[data.category]?.name === data.name ? "border-[rgba(255, 255, 255, 0.5)] shadow-selected" : "border-slate-500 shadow-object-cell"} cursor-pointer`} onClick={handleClick}>

      <Image
        src={data.icon}
        width={100}
        height={100}
        alt="Alt"
      />

    </div>
  )
}
