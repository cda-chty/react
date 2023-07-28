import Greengrocer from './greengrocer/Greengrocer'
import StreamerList from './streamers/StreamerList'
import Vrello from './vrello/Vrello'

function App() {
  return (
    <div className="container">
      <h1 className="title">TPs React</h1>

      <h2 className="title">Le primeur</h2>
      <div className="section">
        <Greengrocer />
      </div>

      <h2 className="title">Les profils</h2>
      <div className="section">
        <StreamerList />
      </div>

      <h2 className="title">Vrello</h2>
      <div className="section">
        <Vrello />
      </div>
    </div>
  )
}

export default App
