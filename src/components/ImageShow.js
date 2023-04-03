function ImageShow({image}) {
  return (
    <>
      <img src={image.urls.thumb} alt={image.alt_description}/>
    </>
  )
}

export default ImageShow;