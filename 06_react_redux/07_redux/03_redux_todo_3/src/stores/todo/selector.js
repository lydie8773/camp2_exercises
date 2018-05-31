//mapStateToProps
export function getTodo(state){
  console.log("selector state: ", state);
  return {
    text: state.text
  };
}