import Inventory from '@/components/Inventory'
import itemsJs from "../assets/items/items.js";

export default function InventoryPage() {
  
  return (
      <Inventory items={itemsJs} />
  )
}
