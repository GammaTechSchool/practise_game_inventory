import Inventory from '@/components/Inventory'
import items from "../assets/items/items.js";

export default function InventoryPage() {
  
  return (
      <Inventory items={items} />
  )
}
