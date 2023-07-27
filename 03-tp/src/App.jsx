import Greengrocer from './greengrocer/Greengrocer'

function App() {
  return (
    <div className="container">
      <h1 className="title">TPs React</h1>

      <h2 className="title">Le primeur</h2>
      <div className="section greengrocer">
        <Greengrocer />
      </div>
      <h2>Les profils</h2>
      <h2>Vrello</h2>
    </div>
  )
}

export default App
