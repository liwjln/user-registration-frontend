import { LoginForm } from "@/components/LoginForm";

type LoginFormProps = {
	setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Login({ setIsLoggedIn }: LoginFormProps) {
	return (
		<div className="flex h-screen w-screen items-center justify-center px-4">
			<LoginForm setIsLoggedIn={setIsLoggedIn} />
		</div>
	);
}
