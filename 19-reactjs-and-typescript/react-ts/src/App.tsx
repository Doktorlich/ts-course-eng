import { useState } from "react";
import CourseGoals from "./Components/CourseGoals.tsx";
import Header from "./Components/Header.tsx";
import goalsImg from "./assets/goals.jpg";
import NewGoal from "./Components/NewGoal.tsx";

function App() {
    const [goals, setGoals] = useState([
        {
            id: 1,
            title: "Leartn TS",
            description: "Learn TS from the ground up",
        },
        {
            id: 22,
            title: "Practice TS",
            description: "Practice workink with TypeScript",
        },
    ]);

    function handleDeleteGoal(id: number) {
        setGoals(prevGoals => prevGoals.filter(goal => goal.id !== id));
    }

    function handleAddGoal(text: string, summary: string) {
        setGoals(prevGoals =>
            prevGoals.concat({ id: Math.random(), title: text, description: summary }),
        );
    }

    return (
        <main>
            <Header image={{ alt: "goals img", src: goalsImg }}>
                <h1>Your couece Goals!</h1>
            </Header>
            <NewGoal onAdd={handleAddGoal} />
            <CourseGoals goals={goals} onDelete={handleDeleteGoal} />
        </main>
    );
}

export default App;
