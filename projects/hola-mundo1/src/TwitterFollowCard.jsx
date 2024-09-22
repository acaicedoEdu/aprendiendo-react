import { useState } from "react";

export default function TwitterFollowCard({ name, username, following }) {
  const [followingState, setFollowingState] = useState(following);

  let nameFollowing = followingState ? "Siguiendo" : "Seguir";

  let buttonClass = followingState
    ? "tw-followCard-button btn-secondary"
    : "tw-followCard-button";

  const handleClick = () => {
    setFollowingState(!followingState);
  };

  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img
          className="tw-followCard-avatar"
          src={`https://unavatar.io/${username}`}
        />
        <div className="tw-followCard-info">
          <strong className="tw-followCard-infoUserName">{name}</strong>
          <span className="tw-followCard-infoUser">{`@${username}`}</span>
        </div>
      </header>

      <aside className="tw-followCard-aside">
        <button className={buttonClass} onClick={handleClick}>
          <span className="tw-followCard-button-nameFollowing">
            {nameFollowing}
          </span>
          <span className="tw-followCard-button-stopFollowing">
            Dejar de seguir
          </span>
        </button>
      </aside>
    </article>
  );
}
