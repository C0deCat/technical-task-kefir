import "./Background.styles.css";

interface IBackgroundProps {
    children?: React.ReactElement;
}

export const Background: React.FC<IBackgroundProps> = ({children}) => {
    return <div className="background">{children}</div>;
};
