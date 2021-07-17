const Item = ({ title, content }) => {
  return (
    <div className="diary-item">
      <div className="diary-title">{title}</div>
      <div className="diary-content">{ content }</div>

    </div>
  )
}

export default Item
