import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import withContext from '../../WithContext'
import { Button, Anchor } from 'smbc-react-components'

export const SelectSeats = props => {
	const { context, history } = props

	const onSubmit = event => {
		event.preventDefault()
		history.push('/book-tickets/')
	}

	return (
		
		<Fragment>
			<h1>Book show tickets</h1>
			<form
				onSubmit={event => {
					onSubmit(event)
				}}
			>
				<h2>Tell us which seats you want to book</h2>
                <h3>{context.showDate.value}</h3>
				<Button
					label="Next step"
					isValid={true}
				/>
			</form>
			<Anchor label="Back" history={history} />
		</Fragment>
	)
}

SelectSeats.propTypes = {
	context: PropTypes.object,
	history: PropTypes.object
}

export default withContext(SelectSeats)
