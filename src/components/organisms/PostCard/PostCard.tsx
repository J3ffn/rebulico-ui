import { NoticeModel } from "src/shared/models/Notice.model";
import styles from "./PostCard.module.css";
import { useNavigate } from "react-router-dom";

interface PostCardProps {
  post: NoticeModel;
}

const PostCard = ({ post }: PostCardProps) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/noticia/${post?._id}`);
  };

  return (
    <div className={styles.card} onClick={handleClick}>
      <div className={styles.card_header}>
        <img className={styles.card_image} src={post?.bannerImage} alt="" />
        <p className={styles.card_author}>
          Por: <span>{post?.author?.name}</span>
        </p>
      </div>
      <div className={styles.card_content}>
        <h3>{post?.title}</h3>
      </div>
    </div>
  );
};

export default PostCard;
