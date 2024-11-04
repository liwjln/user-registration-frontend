import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Button } from "../components/ui/button";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const Home: React.FC = () => {
	const navigate = useNavigate();
	const [email, setEmail] = useState<string | null>(null);

	useEffect(() => {
		const fetchProfile = async () => {
			try {
				const token = localStorage.getItem("token");
				if (token) {
					const response = await axios.get(`${BACKEND_URL}/user/profile`, {
						headers: { Authorization: `Bearer ${token}` },
					});
					setEmail(response.data.user.email);
				}
			} catch (error) {
				console.error(error);
				handleLogout();
			}
		};
		fetchProfile();
	}, []);

	const handleLogout = () => {
		localStorage.removeItem("token");
		window.dispatchEvent(new Event("storage"));
		navigate("/login");
	};

	return (
		<div className="w-screen flex items-center flex-col justify-between h-screen py-16">
			<div className="flex items-center flex-col gap-8">
				<h1 className="font-semibold text-4xl">Home Page</h1>
				<div className="flex flex-col items-center gap-2">
					{email && <p>Welcome, {email}</p>}
					<p>This is your dashboard after logging in successfully.</p>
				</div>
			</div>
			<Button onClick={handleLogout} variant="destructive">
				Logout
			</Button>
		</div>
	);
};

export default Home;
