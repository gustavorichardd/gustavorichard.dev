import styles from "../styles/components/Projects.module.scss";
import { ProjectItem } from "./ProjectItem";

const projects = [
  {
    code: "RPGFMM",
    name: "RPG - Find My Master",
    description:
      "Projeto desenvolvido como conclusão de curso de Análise e Desenvolvimento de Sistema na USJ. A aplicação contava com geolocalização, onde o usuário se cadastrava em um local, e após isto, podia fazer uma busca por jogadores por algum sistema de jogo. No mapa, iria aparecer os jogadores próximos de acordo com a distância escolhida.",
    techs: ["JavaScript", "NodeJS", "Heroku", "ReactNative", "MongoDB"],
    image: "asd",
  },
];

export function Projects() {
  return (
    <div className={styles.projectsContainer}>
      <ProjectItem />
      <ProjectItem />
      <ProjectItem />
      <ProjectItem />
      <ProjectItem />
    </div>
  );
}
