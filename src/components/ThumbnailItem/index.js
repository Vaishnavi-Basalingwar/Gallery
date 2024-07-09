// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {imagesList, idFun, isActive} = props
  const {id} = imagesList
  const thumbnailClassName = isActive ? 'thumbnail active' : 'thumbnail'
  const afterClicking = () => {
    idFun(id)
  }

  return (
    <li className="thumbnail-list-item">
      <button type="button" className="btnStyle" onClick={afterClicking}>
        <img
          src={imagesList.thumbnailUrl}
          alt={imagesList.thumbnailAltText}
          key={imagesList.id}
          className={thumbnailClassName}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
