import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import TopBar from './components/TopBar'
import Routes from './Routes'


const App = () => {
  return <div className="App">
    <BrowserRouter>
      <TopBar />
      <Routes />
    </BrowserRouter>
  </div>
}


ReactDOM.render(<App />, document.getElementById('root'))
