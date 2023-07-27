import Greengrocer from './greengrocer/Greengrocer'

function App() {
  return (
    <div className="container">
      <h1 className="title">TPs React</h1>
      <div className="section greengrocer">
        <h2 className="title">Le primeur</h2>
        <Greengrocer />
      </div>
      <h2>Les profils</h2>
      <h2>Vrello</h2>
    </div>
  )
}

export default App
