import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";

const App: React.FC = () => {
	const [isLoggedIn, setIsLoggedIn] = useState<boolean>(() => {
		const saved = localStorage.getItem("isLoggedIn");
		return saved ? JSON.parse(saved) : false;
	});

	useEffect(() => {
		localStorage.setItem("isLoggedIn", JSON.stringify(isLoggedIn));
	}, [isLoggedIn]);

	return (
		<Router>
			<Routes>
				<Route path="/" element={isLoggedIn ? <Navigate to="/home" /> : <Navigate to="/login" />} />
				<Route path="/register" element={<Register />} />
				<Route path="/login" element={isLoggedIn ? <Navigate to="/home" /> : <Login setIsLoggedIn={setIsLoggedIn} />} />
				<Route path="/home" element={isLoggedIn ? <Home setIsLoggedIn={setIsLoggedIn} /> : <Navigate to="/login" />} />
			</Routes>
			<Toaster />
		</Router>
	);
};

export default App;
