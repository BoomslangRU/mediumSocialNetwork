import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { CurrentChildrenProvider } from 'contexts/currentUser'

import TopBar from 'components/TopBar'
import Routes from 'Routes'


const App = () => {
   return (
      <CurrentChildrenProvider>
         <BrowserRouter>
            <TopBar />
            <Routes />
         </BrowserRouter>
      </CurrentChildrenProvider>
   )
}


ReactDOM.render(<App />, document.getElementById('root'))