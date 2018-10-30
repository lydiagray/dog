import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import withContext from '../../WithContext'
import { Button, Anchor, RadioInputsContainer } from 'smbc-react-components'

export const SelectShow = props => {
	const { context, history } = props

	const options = [
		{
			label: 'Grease - 22nd May 2018',
			id: 'grease22',
			name: 'showDate',
			value: 'grease22'
		},
		{
			label: 'Grease - 23rd May 2018',
			id: 'grease23',
			name: 'showDate',
			value: 'grease23'
		},
		{
			label: 'Grease - 24th May 2018',
			id: 'grease24',
			name: 'showDate',
			value: 'grease24'
		},
		{
			label: 'Grease - 25th May 2018',
			id: 'grease25',
			name: 'showDate',
			value: 'grease25'
		}
	]

	const matinee = [
		{
			label: 'Matinee',
			id: 'matinee',
			name: 'showTime',
			value: 'matinee'
		},
		{
			label: 'Evening',
			id: 'evening',
			name: 'showTime',
			value: 'evening'
		}
	]

	const onSubmit = event => {
		event.preventDefault()
		history.push('/book-tickets/select-seats')
	}

	return (
		
		<Fragment>
			<h1>Book show tickets</h1>
			<form
				onSubmit={event => {
					onSubmit(event)
				}}
			>
				<h2>Tell us what date you want to book for</h2>
				<RadioInputsContainer
					onChange={context.onChange}
					options={options}
					value={context.showDate.value}
					displayHeading={false}
					legend='Select a date'
				/>
				{context.showDate.value == 'grease25' && 
				<section>
					<h2>You have selected a Saturday show. Do you want to book for the matinee or the evening?</h2>
					<RadioInputsContainer
						onChange={context.onChange}
						options={matinee}
						value={context.showTime.value}
						legend='Select matinee or evening'
						displayHeading={false}
					/>
				</section>}
				<Button
					label="Next step"
					isValid={context.showDate.isValid && context.showTime.isValid}
				/>
			</form>
			<Anchor label="Back" history={history} />
		</Fragment>
	)
}

SelectShow.propTypes = {
	context: PropTypes.object,
	history: PropTypes.object
}

export default withContext(SelectShow)
