var React = require('react')

var AccountFields = React.createClass({
	render: function() {
		return ( <div>
			<label>Name</label> 
			<input type="text"
				   ref="name"
				   defaultValue={ this.props.fieldValues.name } />

			<label>Password</label>
			<input type="password"
				   ref="password"
				   defaultValue={ this.props.fieldValues.password } />

			<label>Email</label>
			<input type="email"
				   ref="email"
				   defaultValue={ this.props.fieldValues.email } />
			
			<ul className="form-fields">
				<li className="form-footer">
					<button className="btn -primary pull-right" onClick={ this.saveAndContinue }>Save and Continue</button>
				</li>
			</ul>
			</div>		
		)
	},

	saveAndContinue: function(e) {
		e.preventDefault()

		// Get values via this.refs
		var data = {
			name     : this.refs.name.value,
			password : this.refs.password.value,
			email    : this.refs.email.value,
		}

		this.props.saveValues(data)
		this.props.nextStep()
	}
})

module.exports = AccountFields