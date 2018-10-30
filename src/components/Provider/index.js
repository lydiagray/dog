import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Context } from '../../context/'

class Provider extends Component{
	constructor(props){
		super(props)
		this.state = {
			showDate: {
				value:'',
				isValid: false
			},
			showTime: {
				value:'',
				isValid: false
			},
			seatsBooked: [],
			firstName: {
				value: '',
				isValid: false
			},
			lastName: {
				value: '',
				isValid: false
			},
			emailAddress: {
				value: '',
				isValid: false
			},
			address: {
				value: {
					addressLine1: '',
					addressLine2: '',
					town: '',
					postcode: '',
					placeRef: '',
					selectedAddress: ''
				},
				isValid: false
			},
			seat: [
				'Front1','Front2','Front3', 'Front4',
				'Middle1','Middle2','Middle3',
				'Back1','Back2','Back3'
			],
			seatAvailable: [
				'Front1','Front2','Front3',
				'Middle1','Middle2','Middle3',
				'Back1','Back2','Back3'
			],
			seatReserved: [],
			displayRecaptcha: document.getElementById('displayRecaptcha') != null ? document.getElementById('displayRecaptcha').innerHTML === 'true' ? true : false : false,
			onChange: this.onChange,
			onAddressChange: this.onAddressChange,
			onCheckBoxChange: this.onCheckBoxChange
		}
	}
	
	onChange = (event, isValid) => {
		const copyOfState = Object.assign({}, this.state)
		if(event.target.name == 'showDate') {
			copyOfState.showTime.value = ''
			copyOfState.showTime.isValid = false
		}

		copyOfState[event.target.name].value = event.target.value
		copyOfState[event.target.name].isValid = isValid

		if(event.target.name == 'showDate' && event.target.value != 'grease25') {
			copyOfState.showTime.value = 'evening'
			copyOfState.showTime.isValid = true
		}

		this.setState(copyOfState)
	}

	onAddressChange = (isValid, addressDetails, ) => {
		const copyOfState = Object.assign({}, this.state)
		copyOfState.address.value = addressDetails
		copyOfState.address.isValid = isValid

		this.setState(copyOfState)
	}

	onCheckBoxChange = (event, isValid) => {
		const copyOfState = Object.assign({}, this.state)
		copyOfState[event.target.name].value = event.target.checked
		copyOfState[event.target.name].isValid = isValid

		this.setState(copyOfState)
	}

	render(){
		return <Context.Provider value={ this.state }>{this.props.children}</Context.Provider>
	}
}

Provider.propTypes = {
	history: PropTypes.object,
	context: PropTypes.object,
	children: PropTypes.object,
	mockState: PropTypes.object
}

export default Provider