export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER';
export interface CounterState{
    data: number;
    title:string;   
}

const initialState: CounterState = {
    data: 42,
    title: 'YARC'
}

export function increment(amount = 1) {
    
    return {
        type: INCREMENT_COUNTER,
        payload: amount
    }
}

export function decrement(amount = 1) {
    
    return {
        type: DECREMENT_COUNTER,
        payload: amount
    }
}

export default function counterReducer(state =initialState, action:any) {
    return state;
}