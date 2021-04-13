// UNFRIEND
const Unfriend = (friendshipId) => {
  return {
    type: 'UNFRIEND',
    friendshipId: friendshipId
  }
}
export { Unfriend }