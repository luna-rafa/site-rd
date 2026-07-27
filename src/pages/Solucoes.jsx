import SolutionsHero from "./components/solutions/SolutionsHero";
import SolutionsIntro from "./components/solutions/SolutionsIntro";
import SolutionsHelp from "./components/solutions/SolutionsHelp";
import SolutionsStrategy from "./components/solutions/SolutionsStrategy";
import SolutionsProcess from "./components/solutions/SolutionsProcess";
import SolutionsDeliverables from "./components/solutions/SolutionsDeliverables";
import SolutionsFAQ from "./components/solutions/SolutionsFAQ";
import SolutionsCTA from "./components/solutions/SolutionsCTA";

import "./Solucoes.css";

function Solucoes() {
  return (
    <main className="solutions-page">
      <SolutionsHero />
<SolutionsIntro />
<SolutionsHelp />
<SolutionsStrategy />
<SolutionsProcess />
<SolutionsDeliverables />
<SolutionsFAQ />
<SolutionsCTA />
    </main>
  );
}

export default Solucoes;