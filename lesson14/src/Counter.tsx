import type { ChangeEvent, ReactNode } from "react";
import {  useReducer } from "react";

const initialState = { count: 15, text: '' };

const enum REDUCER_ACTION_TYPE {
  INCREMENT,
  DECREMENT,
  NEW_INPUT
}

type ReducerAction = {
  type: REDUCER_ACTION_TYPE,
  payload?: string
}

const reducer = (state: typeof initialState, action: ReducerAction):  typeof initialState => {
  switch (action.type) {
    case REDUCER_ACTION_TYPE.INCREMENT:
      return { ...state, count: state.count + 1 }
    case REDUCER_ACTION_TYPE.DECREMENT:
      return { ...state, count: state.count - 1 }
    case REDUCER_ACTION_TYPE.NEW_INPUT:
      return { ...state, text: action.payload ?? '' }
    default:
      throw new Error();
  }
}

type ChildrenType = {
  children: (num: number) => ReactNode;
}

const Counter = ({ children}: ChildrenType) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addUp = () => dispatch({type: REDUCER_ACTION_TYPE.INCREMENT});
  const takeDown = () => dispatch({type: REDUCER_ACTION_TYPE.DECREMENT});
  const handleText = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({ 
      type: REDUCER_ACTION_TYPE.NEW_INPUT, 
      payload: e.target.value
    })
  }

  return (
    <>
      <h1>{children(state.count)}</h1>
      <div>
        <button onClick={addUp}>Up</button>
        <button onClick={takeDown}>Down</button>
      </div>
      <input type="text" onChange={handleText}/>
      <h6>{state.text}</h6>
    </>
  )
}

export default Counter;