import ContentBound from "src/components/molecules/ContentBound/ContentBound";
import styles from "./About.module.css";
import firstMember from "../../assets/images/about/01.jpg";
import thirdMember from "../../assets/images/about/03.png";
import fourthMember from "../../assets/images/about/04.jpg";

const About = () => {
  return (
    <ContentBound classNamePersonalized={styles.about_container}>
      <div className={styles.about_text_container}>
        <h1 className={styles.about_title}>Sobre nós</h1>
        <p className={styles.about_text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
          nisi recusandae quas molestias saepe magni dolorum illo veniam ullam
          dignissimos! Incidunt voluptate repellat, doloremque quo optio
          consectetur. Doloribus blanditiis perspiciatis, maiores, deserunt
          architecto minima sed asperiores sit eos in culpa aliquam quidem
          vitae, illo illum neque? Voluptatum nostrum mollitia ut dolorum
          recusandae magnam quas deleniti, ea delectus repellendus in
          reprehenderit
        </p>
      </div>

      <div className={styles.people_involved}>
        <img className={styles.people_images} src={firstMember} alt="" />
        <img className={styles.people_images} src={""} alt="" />
        <img className={styles.people_images} src={thirdMember} alt="" />
        <img className={styles.people_images} src={fourthMember} alt="" />
        <img className={styles.people_images} src={""} alt="" />
      </div>
    </ContentBound>
  );
};

export default About;
