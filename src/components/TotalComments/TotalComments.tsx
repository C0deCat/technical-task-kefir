import "./TotalComments.styles.css";
import {getCommentsStringDependingOnAmount} from "./TotalComments.utils";

export const TotalComments: React.FC = () => {
    return (
        <div className="totalComments">
            {getCommentsStringDependingOnAmount(362)}
        </div>
    );
};
