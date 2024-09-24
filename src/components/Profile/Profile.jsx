import clsx from "clsx";
import style from "./Profile.module.css";

function Profile({
  name,
  tag,
  location,
  image,
  stats: { followers, views, likes },
}) {
  return (
    <div className={clsx(style.card)}>
      <div className={clsx(style.info)}>
        <img className={clsx(style.img)} src={image} alt="User avatar" />
        <p className={clsx(style.name)}>{name}</p>
        <p className={clsx(style.tag)}>@{tag}</p>
        <p className={clsx(style.location)}>{location}</p>
      </div>
      <ul className={clsx(style.list)}>
        <li className={clsx(style.item)}>
          <span className={clsx(style.statName)}>Followers</span>
          <span className={clsx(style.statValue)}>{followers}</span>
        </li>
        <li className={clsx(style.item)}>
          <span className={clsx(style.statName)}>Views</span>
          <span className={clsx(style.statValue)}>{views}</span>
        </li>
        <li className={clsx(style.item)}>
          <span className={clsx(style.statName)}>Likes</span>
          <span className={clsx(style.statValue)}>{likes}</span>
        </li>
      </ul>
    </div>
  );
}
export default Profile;
