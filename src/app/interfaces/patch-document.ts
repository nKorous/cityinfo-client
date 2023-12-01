export interface PatchDocument {
  op: "/replace" | "/add" | "/remove",
  path: string;
  value: string | number | Date | boolean
}
