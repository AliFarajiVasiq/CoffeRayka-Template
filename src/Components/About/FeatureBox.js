export default function FeatureBox(props) {
  return (
    <div className='feature-box'>
        <div className="cover-img-feature-box">
          <img src={props.image} alt="" className="img-feature-box"/>
        </div>
        <h1 className="title-feature-box">{props.title}</h1>
        <p className="text-feature-box">{props.text}</p>
    </div>
  )
}
