export interface InventoryItem {
  id: number;
  location: string;
  brand: string;
  height: number;
  width: number;
  depth: number;
  packaging: string;
  notes: string | null;
}