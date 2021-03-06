/**
 * ADD NEW CARD
 * to list with listId
 *
 * @param {object} data
 * @param {array} lists
 */
export const addNewCard = (data, lists) => {
  if (!data.text) return

  let listForNewCard = lists.find(list => list.id === data.listId)
  let cardMaxId = listForNewCard.cards.length
    ? Math.max(...listForNewCard.cards.map(card => card.id))
    : 0

  listForNewCard.cards.push({
    id: cardMaxId + 1,
    text: data.text
  })
}

/**
 * EDIT CARD TEXT
 *
 * @param {object} data
 * @param {array} lists
 */
export const editCardText = (data, lists) => {
  if (!data?.cardId || !data?.listId || !data?.newText) return

  let listForEditedCard = lists.find(list => list.id === data.listId)

  let editedCard = listForEditedCard.cards.find(card => card.id === data.cardId)

  editedCard.text = data.newText
}

/**
 * DELETE CARD
 *
 * @param {object} data
 * @param {array} lists
 */
export const deleteCard = (data, lists) => {
  if (!data?.cardId || !data?.listId) return

  let listToRemoveCardFrom = lists.find(list => list.id === data.listId)

  listToRemoveCardFrom.cards = listToRemoveCardFrom.cards.filter(
    card => card.id !== data.cardId
  )
}
