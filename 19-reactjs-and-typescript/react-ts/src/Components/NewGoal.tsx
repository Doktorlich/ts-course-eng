import { useRef, type ReactNode, type SubmitEvent } from "react";

interface NewGoalProps {
    onAdd: (text: string, summary: string) => void;
    children?: ReactNode;
}

function NewGoal({ onAdd }: NewGoalProps) {
    const goalRef = useRef<HTMLInputElement>(null);
    const summaryRef = useRef<HTMLInputElement>(null);

    function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
        event.preventDefault();
        const enteredGoal = goalRef.current!.value;
        const enteredSummary = summaryRef.current!.value;

        // ... validation

        onAdd(enteredGoal, enteredSummary);
    }
    return (
        <form onSubmit={handleSubmit}>
            <p>
                <label htmlFor="goal">Your goal</label>
                <input type="text" id="goal" ref={goalRef} />
            </p>
            <p>
                <label htmlFor="summary">Your goal</label>
                <input type="text" id="summary" ref={summaryRef} />
            </p>
            <p>
                <button>Add Goal</button>
            </p>
        </form>
    );
}

export default NewGoal;
