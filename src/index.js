import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import { CurrentChildrenProvider } from 'contexts/currentUser'
import TopBar from 'components/TopBar'
import Routes from 'Routes'
import CurrentUserChecker from 'components/CurrentUserChecker'


const App = () => {
   return (
      <CurrentChildrenProvider>
         <CurrentUserChecker>
            <BrowserRouter>
               <TopBar />
               <Routes />
            </BrowserRouter>
         </CurrentUserChecker>
      </CurrentChildrenProvider>
   )
}


ReactDOM.render(<App />, document.getElementById('root'))