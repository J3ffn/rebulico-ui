import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ContentBound from "src/components/molecules/ContentBound/ContentBound";
import { useToast } from "src/context/toast/Toast.context";
import { getPostsByCategorySlug } from "src/shared/api";
import styles from "./PostsPerCategory.module.css";
import loaderImg from "../../assets/images/loading/motion-blur-loader.svg";
import { NoticeModel } from "src/shared/models/Notice.model";
import PostCard from "src/components/organisms/PostCard/PostCard";

const PostsPerCategory = () => {
  const { slug } = useParams<{ slug: string }>();
  const [posts, setPosts] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [categoryName, setCategoryName] = useState("");
  const toastContext = useToast();
  const showToast = toastContext!.showToast;

  const fetchPosts = async () => {
    try {
      setIsLoading(true);
      const response = await getPostsByCategorySlug(slug!);
      setPosts(response);
    } catch (error) {
      setError(error as Error);
      console.error("Error fetching posts:", error);

      showToast("Ocorreu um erro ao buscar as notícias.", "error");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (slug) {
      fetchPosts();
    }
  }, [slug]);

  useEffect(() => {
    if (posts && posts.length > 0) {
      setCategoryName(posts[0].categorie.name);
    }
  }, [posts]);

  return (
    <ContentBound>
      {isLoading && (
        <div className={styles.load_notice}>
          <img className={styles.loader_img} src={loaderImg} alt="Carregando" />
        </div>
      )}

      {!isLoading && error && (
        <div className={styles.load_notice}>
          <p>Erro ao buscar as notícias.</p>
        </div>
      )}

      {!isLoading && !error && posts?.length === 0 && (
        <div className={styles.load_notice}>
          <p>Não foram encontrados posts para essa categoria.</p>
        </div>
      )}

      {!isLoading && posts?.length > 0 && (
        <div className={styles.container}>
          <h3 className={styles.category}>{categoryName}</h3>
          <h1>Postagens</h1>
          <div className={styles.card_container}>
            {posts.map((notice: NoticeModel) => (
              <PostCard key={notice._id} post={notice} />
            ))}
          </div>
        </div>
      )}
    </ContentBound>
  );
};

export default PostsPerCategory;
