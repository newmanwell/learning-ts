import type { ReactNode } from "react";
import {  useReducer } from "react";

const initialState = { count: 15};

const enum REDUCER_ACTION_TYPE {
  INCREMENT,
  DECREMENT
}

type ReducerAction = {
  type: REDUCER_ACTION_TYPE
}

const reducer = (state: typeof initialState, action: ReducerAction):  typeof initialState => {
  switch (action.type) {
    case REDUCER_ACTION_TYPE.INCREMENT:
      return { ...state, count: state.count + 1 }
    case REDUCER_ACTION_TYPE.DECREMENT:
      return { ...state, count: state.count - 1 }
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

  return (
    <>
      <h1>{children(state.count)}</h1>
      <div>
        <button onClick={addUp}>Up</button>
        <button onClick={takeDown}>Down</button>
      </div>
    </>
  )
}

export default Counter;