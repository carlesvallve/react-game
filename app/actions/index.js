export const openPopup = (data) => {
  return {
    type: 'POPUP_OPEN',
    data
  }
}

export const closePopup = () => {
  return {
    type: 'POPUP_CLOSE',
  }
}

export const updateGrid = (data) => {
  return {
    type: 'GRID_UPDATE',
    data
  }
}
