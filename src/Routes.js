import { Route, Switch } from 'react-router-dom'

import GlobalFeed from './pages/globalFeed/GlobalFeed'
import Article from './pages/article/Article'

export default () => {
    return (
        <Switch>
            <Route path='/' exact component={GlobalFeed} />
            <Route path='/articles' component={Article} />
        </Switch>
    )
}

