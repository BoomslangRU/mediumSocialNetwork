import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import Routes from './Routes'


const App = () => {
  return <div className="App">
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </div>
}


ReactDOM.render(<App />, document.getElementById('root'))
