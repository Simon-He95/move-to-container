export interface MoveToContainer {
  to: string | HTMLElement
  finish?: (e: MouseEvent | DragEvent) => void
}
