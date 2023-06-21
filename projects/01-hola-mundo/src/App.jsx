import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

export function App() {
    const formatUserName = (userName) => `@${userName}`;
    return (
        <div className="App">
            <TwitterFollowCard
                formatUserName={formatUserName}
                userName="midudev"
                name="Miguel Angel Duran"
                initialIsFollowing
            />
            <TwitterFollowCard
                formatUserName={formatUserName}
                userName="midudev"
                name="Miguel Angel Duran"
            />
        </div>
    );
}
