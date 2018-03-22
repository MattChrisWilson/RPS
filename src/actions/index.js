export const SET_PLAYER_CHOICE = 'SET_PLAYER_CHOICE'
export const SET_RESULT = 'SET_RESULT'
export const RESET_ROUND = 'RESET_ROUND'
export const RESET_GAME = 'RESET_GAME'
export const SET_GAME_ERROR = 'SET_GAME_ERROR'

export const setPlayerChoice = (data) => {return {type: SET_PLAYER_CHOICE, payload: data}}
export const setResult = (data) => {return {type: SET_RESULT, payload: data}}
export const setGameError = () => {return {type: SET_GAME_ERROR}}
export const resetRound = () => {return {type: RESET_ROUND}}
export const resetGame = () => {return {type: RESET_GAME}}