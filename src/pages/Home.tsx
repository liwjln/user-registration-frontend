import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";

const Home: React.FC = () => {
	const navigate = useNavigate();

	const handleLogout = () => {
		localStorage.removeItem("token");
		// Trigger state update
		window.dispatchEvent(new Event("storage"));
		navigate("/login");
	};

	return (
		<div className="w-screen flex items-center flex-col justify-between h-screen py-16">
			<div className="flex items-center flex-col gap-2">
				<h1 className="font-semibold text-4xl">Home Page</h1>
				<p>This is your dashboard after logging in successfully.</p>
			</div>
			<Button onClick={handleLogout} variant="destructive">
				Logout
			</Button>
		</div>
	);
};

export default Home;
