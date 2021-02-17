import React from 'react'

export default function SignUp() {
  return (
		<div>
			<form action="">
				<div className="form-container">
					<h4 className="form-header">CLIENTS DETAILS</h4>
					<div className="form-wrapper">
						<div className="form-left">
							<input type="text" className="form-control signup-input" placeholder="First Name" />
							<input type="email" className="form-control signup-input" placeholder="E-mail" />
							<input type="text" className="form-control signup-input" placeholder="Address" />
						</div>
						<div className="form-right">
							<input type="text" className="form-control signup-input" placeholder="Last Name" />
							<input type="tel" className="form-control signup-input" placeholder="Phone" />
							<input type="password" className="form-control signup-input" placeholder="Password" />
						</div>
					</div>
				</div>
				<div className="form-container">
					<h4 className="form-header">ADDITIONAL INFO (FOR ORGANISATIONS)</h4>
					<div className="form-wrapper">
						<div className="form-left">
							<input type="text" className="form-control signup-input" placeholder="Organisation Name" />
							<input type="email" className="form-control signup-input" placeholder="Organisation E-mail" />
						</div>
						<div className="form-right">
							<input type="text" className="form-control signup-input" placeholder="Organisation Address" />
							<input type="tel" className="form-control signup-input" placeholder="Phone" />
						</div>
					</div>
				</div>
				<div className="form-container">
					<h4 className="form-header">DECLARATION (BY CUSTOMER)</h4>
          <div className = "form-check">
            <input type="checkbox" className = "form-check-input" id = "checkbox"/>
            <label htmlFor="checkbox" className = "form-check-label">
            This confirms that all the information supplied is accurate and valid. 
            I also Agree to pay Fibre Hub the agreed cost of installation plus additional cost attached to the installation. 
            I agree that Fibre Hub will not be liable for any illegal activities or business which the service offered used is used for.
            </label>
          </div>
          <button className = "btn btn-sm btn-success">Submit</button>
				</div>
			</form>
		</div>
  );
}
