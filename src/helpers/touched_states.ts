interface touch_states {
  TOUCHED_OK: string
  TOUCHED_ERROR: string
  NOT_TOUCHED: string
}

export type touched_states = 'TOUCHED_OK' | 'TOUCHED_ERROR' | 'NOT_TOUCHED'

const TOUCHED_STATES: touch_states = {
  TOUCHED_OK: 'TOUCHED_OK',
  TOUCHED_ERROR: 'TOUCHED_ERROR',
  NOT_TOUCHED: 'NOT_TOUCHED'
}

export { TOUCHED_STATES }
