
// export function mapStateToProps(reduxState) {
export function getCounter(reduxState) {
  return {
    myCounter: reduxState.myCounter
  };
}

// export function getVisibility(reduxState) {
//   return {
//     isVisible: reduxState.visibe;
//   }
// }

export function isFetching(reduxState) {
  return {
    isFetching: reduxState.fetching
  }
}