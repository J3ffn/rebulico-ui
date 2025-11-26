import ContentBound from "src/components/molecules/ContentBound/ContentBound";
import styles from "./About.module.css";
import firstMember from "../../assets/images/about/01.jpg";
import secondMember from "../../assets/images/about/02.jpeg";
import thirdMember from "../../assets/images/about/03.png";
import fourthMember from "../../assets/images/about/04.jpg";
import fifthMember from "../../assets/images/about/05.png";

const About = () => {
  return (
    <ContentBound classNamePersonalized={styles.about_container}>
      <h1 className={styles.about_title}>Sobre nós</h1>

      <div className={styles.people_involved}>
        <img className={styles.people_images} src={firstMember} alt="" />
        <img className={styles.people_images} src={secondMember} alt="" />
        <img className={styles.people_images} src={thirdMember} alt="" />
        <img className={styles.people_images} src={fourthMember} alt="" />
        <img className={styles.people_images} src={fifthMember} alt="" />
      </div>

      <div className={styles.about_text_container}>
        <p className={styles.about_text}>
          Somos o Rebuliço — um coletivo de estudantes, professores e
          colaboradores da Universidade Federal da Paraíba (UFPB) que acredita
          em um jornalismo que escuta, acolhe e transforma.
        </p>
        <p className={styles.about_text}>
          Nas margens onde as vozes são silenciadas e as histórias esquecidas,
          fazemos barulho: um rebuliço de ideias, afetos e narrativas que
          desafiam a lógica do jornalismo tradicional e colocam o ser humano no
          centro da notícia.
        </p>
        <p className={styles.about_text}>
          Nascemos da vontade de repensar o fazer jornalístico, questionando os
          modelos hegemônicos de produção da informação, historicamente
          alinhados ao capital, à neutralidade e à exclusão. Nossa prática se
          ancora na interseccionalidade, na territorialidade e na subjetividade,
          reconhecendo que cada história é atravessada por raça, gênero, classe,
          identidade e lugar de fala.
        </p>
        <p className={styles.about_text}>
          O Rebuliço é extensão universitária, mas também é movimento, vivência
          e partilha. É onde o ensino, a pesquisa e a comunidade se encontram
          para produzir conhecimento e transformar realidades. Nosso território
          de atuação é o corpo, a cidade, a palavra e o outro — começando pela
          comunidade Porto do Capim, no Centro Histórico de João Pessoa, e
          expandindo-se para outras experiências e narrativas que merecem ser
          contadas.
        </p>
        <p className={styles.about_text}>
          Aqui, acreditamos que o jornalismo não se faz sobre as pessoas, mas
          com elas. Buscamos construir reportagens que respeitam a complexidade
          da vida e celebram a potência das margens — esse lugar fértil onde
          nascem resistências, culturas e novas formas de existir.
        </p>
        <p className={styles.about_text}>
          Mais do que um projeto, o Rebuliço é uma escola de escuta e
          sensibilidade, um laboratório de humanidade em meio às urgências do
          nosso tempo.
        </p>

        <p className={styles.about_text}>
          Somos o que se rebela contra o silêncio.
          <br />
          Somos o que se move nas bordas.
          <br />
          Somos o Rebuliço.
        </p>
      </div>
    </ContentBound>
  );
};

export default About;
