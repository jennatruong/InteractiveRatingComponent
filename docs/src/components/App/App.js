import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import GlobalState from '../../context/GlobalState'
import Page1 from '../Page1/Page1'

const App = () => {
    

    return(

        <GlobalState>
            {/* <BrowserRouter>
                <Switch> */}
                    {/* <Route exact path="/"> */}
                        {/* <Page1 />
                    </Route>
                    <Route path="/page1"> */}
                        <Page1 />
                    {/* </Route>
                </Switch>
            </BrowserRouter> */}
        </GlobalState>

    );

}

export default App