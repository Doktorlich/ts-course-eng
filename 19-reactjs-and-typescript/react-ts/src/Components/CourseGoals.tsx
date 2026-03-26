import { type FC, type ReactNode } from "react";

type Goal = {
    id: number;
    title: string;
    description: string;
};

interface CourseGoalsProps {
    goals: Goal[];
    children?: ReactNode;
    onDelete: (id: number) => void;
}

//еще один из способов объявления типизированного компонента
// const CourseGoals: FC<CourseGoalsProps> = ({ goals }) => {
function CourseGoals({ goals, onDelete }: CourseGoalsProps) {
    return (
        <ul>
            {goals.map(goal => (
                <li key={goal.id}>
                    <article>
                        <div>
                            <h2>{goal.title}</h2>
                            <p>{goal.description}</p>
                        </div>
                        <button onClick={() => onDelete(goal.id)}>Delete</button>
                    </article>
                </li>
            ))}
        </ul>
    );
}

export default CourseGoals;
