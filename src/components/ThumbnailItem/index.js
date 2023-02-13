import './index.css'

const ThumbnailItem = props => {
  const {imageDetails, onClickChangeId, isNotClicked} = props
  const {id, thumbnailAltText, thumbnailUrl} = imageDetails

  const onClickThumbnail = () => {
    onClickChangeId(id)
  }

  const buttonClass = isNotClicked ? 'button-initial' : ''

  return (
    <li>
      <button type="button" className={`button ${buttonClass}`}>
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className="thumbnail-image"
          onClick={onClickThumbnail}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
