import clsx from "clsx";
import style from "./FriendListItem.module.css";

function FriendListItem({ avatar, name, isOnline }) {
  return (
    <div>
      <img className={clsx(style.img)} src={avatar} alt="Avatar" width="48" />
      <p>{name}</p>
      <p
        className={clsx(
          style.status,
          isOnline ? style.isOnline : style.isOffline
        )}
      >
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
}

export default FriendListItem;
