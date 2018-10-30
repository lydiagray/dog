import React, { Component } from 'react'
import { Switch, Route } from 'react-router'
import SelectShow from '../SeatBooking/1-SelectShow'
import SelectSeats from '../SeatBooking/2-SelectSeats'

class App extends Component {
    render() {
        return (
            <Switch>
                <Route exact path={'/book-tickets/select-show'} component={ SelectShow } />
                <Route exact path={'/book-tickets/select-seats'} component={ SelectSeats } />
            </Switch>
        )
    }
}

export default App