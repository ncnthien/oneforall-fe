type HandleIncrement = () => void
type HandleDecrement = () => void

export interface ISort {
  handleIncrement: HandleIncrement
  handleDecrement: HandleDecrement
}

export interface ISortState {
  sort: 'increment' | 'decrement' | null
}
