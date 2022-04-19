import { ContactCards } from "../../components/ContactCards";
import { Projects } from "../../components/Projects";
import { SkillsCards } from "../../components/SkillsCards";

import styles from "../../styles/views/Home.module.scss";

export function Home() {
  return (
    <div className={styles.homeContainer}>
      <section>
        <h1>Gustavo Richard Vitorino de Oliveira</h1>
        <p>IDA CONSTANTINO ZUCHINALLI 120, PRAIA COMPRIDA </p>
        <p>SÃO JOSÉ/SC</p>
        <p>
          Olá! Sou desenvolvedor Front-end(React). Desenvolvo projetos Mobile e
          Web, muitos envolvendo trabalhos backend.{" "}
        </p>
        <p>
          Fique a vontade para entrar em contato em qualquer uma das minhas
          redes:
        </p>

        <ContactCards />
      </section>

      <section>
        <p>
          Aventureiro pelo mundo da UI/UX, embora não seja meu maior foco,
          conseguindo entregar interfaces amigáveis ao usuário.
        </p>

        <p>
          Me identifiquei com o JavaScript pelo seu ecossistema, que me permitiu
          aprender Front, Back e Mobile, tudo com uma linguagem só!
        </p>

        <SkillsCards />
      </section>
      <section>
        <p>
          Desenvolvi alguns projetos neste tempo, alguns pessoais e outros em
          cursos, deixa eu te apresentar algun.
        </p>

        <Projects />
      </section>
    </div>
  );
}
