import Image from "next/image";
import { useState } from "react";
import styles from "../styles/components/SkillsCards.module.scss";

const skills = [
  {
    name: "HTML 5",
    logo: "html.png",
  },
  {
    name: "CSS 3",
    logo: "css.png",
  },
  {
    name: "JavaScript",
    logo: "javascript.png",
  },
  {
    name: "TypeScript",
    logo: "typescript.svg",
  },
  {
    name: "ReactJS",
    logo: "react.png",
  },
  {
    name: "NodeJS",
    logo: "nodejs.png",
  },
  {
    name: "Linux Ubuntu",
    logo: "linux-ubuntu.png",
  },
  {
    name: "Linux Debian",
    logo: "linux-debian.png",
  },
  {
    name: "NPM",
    logo: "npm.png",
  },
  {
    name: "Yarn",
    logo: "yarn.png",
  },
  {
    name: "GitHub",
    logo: "github.png",
  },
  {
    name: "GitLab",
    logo: "gitlab.png",
  },
  {
    name: "BitBucket",
    logo: "bitbucket.png",
  },
];

const hosting = [
  {
    name: "Heroku",
    logo: "heroku.png",
  },
  {
    name: "Amazon AWS",
    logo: "aws.png",
  },
  {
    name: "Vercel",
    logo: "vercel.svg",
  },
  {
    name: "Netlify",
    logo: "netlify.png",
  },
];

const databases = [
  {
    name: "Firebird",
    logo: "firebird.png",
  },
  {
    name: "MariaDB",
    logo: "mariadb.png",
  },
  {
    name: "PostgresSQL",
    logo: "postgres.png",
  },
  {
    name: "MongoDB",
    logo: "mongodb.png",
  },
  {
    name: "MySQL",
    logo: "mysql.png",
  },
];

const UnusualDatabases = [
  {
    name: "Oracle",
    logo: "oracle.png",
  },
  {
    name: "SQLite",
    logo: "sqlite.png",
  },
  {
    name: "SQLServer",
    logo: "sqlserver.png",
  },
];

export function SkillsCards() {
  const [loading, setLoading] = useState(true);

  while (loading === true) {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
    return <h1>loading</h1>;
  }
  return (
    <div className={styles.skillscardContainer}>
      <p>
        E falando em linguagens, aqui estão algumas das minhas habilidades e
        conhecimentos:
      </p>

      <div className={styles.skillscardContent}>
        {skills.map((skill, index) => {
          return (
            <div key={index} className={styles.skillscardItem}>
              <Image
                src={`${window.location.origin}/assets/${skill.logo}`}
                width={50}
                height={50}
                unoptimized
              />
              <p>{skill.name}</p>
            </div>
          );
        })}
      </div>

      <p>Alguns serviços de hospedagem que eu mexo.</p>

      <div className={styles.skillscardContent}>
        {hosting.map((host, index) => {
          return (
            <div key={index} className={styles.skillscardItem}>
              <Image
                src={`${window.location.origin}/assets/${host.logo}`}
                width={50}
                height={50}
                unoptimized
              />
              <p>{host.name}</p>
            </div>
          );
        })}
      </div>

      <p>Estes são os bancos que eu trabalho normalmente.</p>

      <div className={styles.skillscardContent}>
        {databases.map((database, index) => {
          return (
            <div
              key={index}
              className={`${styles.skillscardItem} ${styles.skillscardItemDatabase}`}
            >
              <Image
                src={`${window.location.origin}/assets/${database.logo}`}
                //  layout="fixed"
                width={65}
                height={65}
                unoptimized
              />
              <p>{database.name}</p>
            </div>
          );
        })}
      </div>

      <p>Mas também já mexi com estes, caso precise!</p>

      <div className={styles.skillscardContent}>
        {UnusualDatabases.map((database, index) => {
          return (
            <div
              key={index}
              className={`${styles.skillscardItem} ${styles.skillscardItemDatabase}`}
            >
              <Image
                src={`${window.location.origin}/assets/${database.logo}`}
                //  layout="fixed"
                width={65}
                height={65}
                unoptimized
              />
              <p>{database.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
