import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";

const App: React.FC = () => {
	const [isLoggedIn, setIsLoggedIn] = useState<boolean>(() => !!localStorage.getItem("token"));

	useEffect(() => {
		const handleStorageChange = () => {
			setIsLoggedIn(!!localStorage.getItem("token"));
		};

		window.addEventListener("storage", handleStorageChange);

		return () => {
			window.removeEventListener("storage", handleStorageChange);
		};
	}, []);

	return (
		<Router>
			<Routes>
				<Route path="/" element={isLoggedIn ? <Navigate to="/home" /> : <Navigate to="/login" />} />
				<Route path="/register" element={<Register />} />
				<Route path="/login" element={isLoggedIn ? <Navigate to="/home" /> : <Login />} />
				<Route path="/home" element={isLoggedIn ? <Home /> : <Navigate to="/login" />} />
			</Routes>
			<Toaster />
		</Router>
	);
};

export default App;
