import FriendListItem from "../FriendListItem/FriendListItem.jsx";
import clsx from "clsx";
import style from "./FriendList.module.css";

function FriendList({ friends }) {
  return (
    <ul className={clsx(style.list)}>
      {friends.map((friend) => {
        return (
          <li className={clsx(style.item)} key={friend.id}>
            <FriendListItem
              avatar={friend.avatar}
              name={friend.name}
              isOnline={friend.isOnline}
            />
          </li>
        );
      })}
    </ul>
  );
}

export default FriendList;
