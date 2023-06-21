import "./TwitterFollowCard.css";
import { useState } from "react";

export function TwitterFollowCard({
    formatUserName,
    userName,
    name,
    initialIsFollowing,
}) {
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing);

    const text = isFollowing ? "Siguiendo" : "Seguir";
    const buttonClassName = isFollowing
        ? "tw-followCard-button isFollowing"
        : "tw-followCard-button";

    const handClick = () => {
      setIsFollowing(!isFollowing)
    }    

    return (
        <article className="tw-followCard">
            <header className="tw-followCard-header">
                <img
                    className="tw-followCard-avatar"
                    src={`https://unavatar.io/${userName}`}
                    alt="foto de perfil"
                />
                <div className="tw-followCard-info">
                    <strong>{name}</strong>
                    <span className="tw-followCard-infoUserName">
                        {formatUserName(userName)}
                    </span>
                </div>
            </header>
            <aside>
                <button className={buttonClassName} onClick={handClick}>{text}</button>
            </aside>
        </article>
    );
}
