import "./Header.styles.css";
import {Like} from "../Like/Like";
import {TotalComments} from "../TotalComments/TotalComments";
import {Divider} from "../Divider/Divider";

export const Header: React.FC = () => {
    return (
        <>
            <div className="header">
                <TotalComments />
                <Like count={8632} />
            </div>
            <Divider />
        </>
    );
};
