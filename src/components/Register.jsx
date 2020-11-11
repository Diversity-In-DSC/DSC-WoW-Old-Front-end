import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "../css/register.css";
import SuccessAnimation from "./SuccessAnimation";

const API_URL = process.env.REACT_APP_API_URL;

const Register = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [loading, setLoading] = useState(false);
	const [registered, setRegistered] = useState(false);
	const [ref, setRef] = useState("");
	const [referralLink, setReferralLink] = useState("");
	const [error, setError] = useState("");
	const location = useLocation();

	const onSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);
		if (!name || !email) return setError("All fields are required");
		const res = await fetch(`${API_URL}/user/register`, {
			method: "POST",
			headers: { "Content-type": "application/json" },
			body: JSON.stringify({ name, email, ref }),
		});
		const data = await res.json();
		if (res.ok && (res.status === 200 || data.success)) {
			setRegistered(true);
			setReferralLink(data.referralLink);
		} else
			setError(
				data
					? data.message || "Internal Server Error"
					: "Check your Internet Connection"
			);
		setLoading(false);
	};

	useEffect(() => {
		if (location.search) {
			const queries = location.search.split("?")[1].split("&");
			const refQuery = queries.find((q) => q.includes("ref="));
			const ref = refQuery.split("=")[1];
			setRef(ref);
		}
	}, [location]);

	return (
		<div className='register-container'>
			{registered ? (
				<div className='registration-success'>
					<SuccessAnimation />
					<p>Registration Successful!</p>
					<p>Your unique referral link</p>
					<input type='text' disabled value={referralLink}/>
				</div>
			) : (
				<form className='register-form' onSubmit={onSubmit}>
					<label for='name'>Full Name</label>
					<input
						value={name}
						onChange={(e) => setName(e.target.value)}
						type='text'
						id='name'
					/>
					<label for='email'>Email</label>
					<input
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						type='email'
						id='email'
					/>
					<label for='ref'>Referral Code</label>
					<input
						value={ref}
						onChange={(e) => setRef(e.target.value)}
						type='text'
						id='ref'
					/>
					{error ? <p className='form-error'>{error}</p> : null}
					<button disabled={loading} type='submit'>
						Register
					</button>
				</form>
			)}
		</div>
	);
};

export default Register;
