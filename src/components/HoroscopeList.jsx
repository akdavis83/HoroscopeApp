import HoroscopeItem from "./HoroscopeItem"


const HoroscopeList = ({data}) => {
  return (
    
    <div className="grid-container">
        {data.map(horoscope=> <HoroscopeItem key={horoscope.id} horoscope={horoscope}/>)}
    </div>
  )
}

export default HoroscopeList