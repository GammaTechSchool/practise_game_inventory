"use client"

import CharacterEquipement from "@/components/CharacterEquipement"
import CharacterStats from "@/components/CharacterStats"

export default function CharacterPage() {

  return (
    <div className="w-full max-w-[500px] flex justify-center items-start gap-8">
      <div className="w-2/3">
        <CharacterEquipement />
      </div>
      <div className="w-1/3">
        <CharacterStats />
      </div>
    </div>
  )
}
