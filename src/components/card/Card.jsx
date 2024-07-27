import "./card.css";
import { TbHeartFilled } from "react-icons/tb";
import { RxHeartFilled } from "react-icons/rx";
import { FaCommentAlt } from "react-icons/fa";
import { CiShare1 } from "react-icons/ci";
import { IoMdInformationCircleOutline } from "react-icons/io";

const Card = ({ post }) => {
  return (
    <div className="card">
      <div className="info">
        <img src={post.userImg} alt="" className="userImg" />
        <span>{post.fullname}</span>
      </div>
      <img src={post.postImg} alt="" className="postImg" />
      <div className="interaction">
        <TbHeartFilled className="cardIcon" />
        <RxHeartFilled className="cardIcon" />
        <FaCommentAlt className="cardIcon" />
        <CiShare1 className="cardIcon" />
        <IoMdInformationCircleOutline className="cardIcon infoIcon" />
      </div>
    </div>
  );
};

export default Card;
