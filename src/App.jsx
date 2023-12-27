import { useState } from "react"
import Navbar from "./components/Navbar"
import NewsItem from "./components/NewsItem"
import Newsboard from "./components/Newsboard"

const App = () => {
  const [category, setCategory] = useState("general")
  return (
    <div>
      <Navbar setCategory={setCategory} />
      <Newsboard category={category} />
      <NewsItem />
    </div>
  )
}

export default App