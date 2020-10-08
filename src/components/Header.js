import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
	return (
		// <div className="header flex justify-sp-between align-items-center">
		<div className="header">
			<nav className="navbar" role="navigation" aria-label="main navigation">
				<div className="navbar-brand">
					<Link to="/" className="navbar-item" exact={true}>
						<h1>MyConduit</h1>
					</Link>
				</div>

				<div id="navbarBasicExample" className="navbar-menu">
					<div className="navbar-start">
						<Link
							to="/"
							activeClassName="active_header"
							exact={true}
							className="navbar-item"
						>
							Home
						</Link>
						<Link className="navbar-item">Edit</Link>
						<Link className="navbar-item">Settings</Link>
						<Link className="navbar-item">Profile</Link>
					</div>

					<div className="navbar-end">
						<div className="navbar-item">
							<div className="buttons">
								<Link className="button" activeClassName="is-primary">
									<strong>Sign up</strong>
								</Link>
								<Link className="button" activeClassName="is-primary">
									<strong>Log in</strong>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</nav>
		</div>
	);
}
