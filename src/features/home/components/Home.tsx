import { Button } from "@/features/layout/components/Button";


export const Home = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2 gap-4">
            <h1 className="text-4xl font-bold">Welcome to Solvera Revamp</h1>
            <Button isDisabled color="primary">HeroUI Button</Button>
            <p className="text-body text-brand-disabled">This is a paragraph</p>
        </div>
    );
};
