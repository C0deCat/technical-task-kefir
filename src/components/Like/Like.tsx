import "./Like.styles.css";
import {ReactComponent as LikeSVG} from "../../assets/system/Like.svg";

interface ILikeProps {
    count: number;
    onClick?: () => void;
    isActive?: boolean;
}

export const Like: React.FC<ILikeProps> = ({count}) => {
    return (
        <div className="like">
            <LikeSVG />
            {count}
        </div>
    );
};
