import './ZodiacCard.css'

export default function ZodiacCard(props) {
  return (
    <div>
      <h2>Zodiac card</h2>
      <div className="zodiac-card">
        <img alt={name} src={`/images/${name}`} />
        <span className="name">{name}</span>
        <span>{props.dates}</span>
      </div>
    </div>
  )
}
