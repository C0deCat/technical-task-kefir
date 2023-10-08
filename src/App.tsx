import "./App.css";
import {Background} from "./components/Background/Background";
import {CommentsSection} from "./components/CommentsSection/CommentsSection";

function App() {
    return (
        <Background>
            <CommentsSection />
        </Background>
    );
}

export default App;
