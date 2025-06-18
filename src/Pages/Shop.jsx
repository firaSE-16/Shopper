import Hero from "../Components/Hero.jsx/Hero"
import NewCollection from "../Components/NewCollection.jsx/NewCollection"
import NewsLetter from "../Components/NewsLetter.jsx/NewsLetter"
import Offers from "../Components/Offers.jsx/Offers"
import Popular from "../Components/Popular.jsx/Popular"

const Shop = () => {
  return (
    <div>
        <Hero/>
        <Popular/>
        <Offers/>
        <NewCollection />
        <NewsLetter/>
    </div>
  )
}

export default Shop