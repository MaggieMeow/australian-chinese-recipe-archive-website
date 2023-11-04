import "./style.scss";

export function AboutPage() {
  return (
    <article>
      <h1>About</h1>
      <p>
        This project was developed as part of the HUMN 2001/6001: Intro to
        Digital Humanities and Public Culture course at Australian National
        University in Semester 2, 2023.
      </p>
      <h2>Team members</h2>
      <ul>
        <li>
          <h3>Maggie Yundi Li, Web, Data & Content Specialist</h3>
          <p>
            Maggie collected and cleaned data from Trove to construct a dataset
            of relevant Chinese recipes. She created and visualized the
            datasets, and made corrections on Trove entries for selected
            recipes. She also developed the website to present our historical
            analysis and selected Chinese recipes. Additionally, she directed
            the historical and theoretical research underpinning this project.
            She also wrote and edited the majority of our analysis and project
            report.
          </p>
        </li>
        <li>
          <h3>Sihan Zhao, Content Specialist</h3>
          <p>
            Sihan made substantial contribution to the literature review and
            conducted in-depth exploration and analysis of historical data.
            Furthermore, she played an integral role in assimilating the
            research outcomes and actively engaged in the composition of the
            final report.
          </p>
        </li>
        <li>
          <h3>Carina Bo, Content Specialist</h3>
          <p>
            Carina examined the historical backdrop and events associated with
            our project and traced their connections to our recipe data. Carina
            also contributed to historical analysis of both recipes and
            historical events. In addition, she helped draft the 'About' and
            'Acknowledgments' sections of the website.
          </p>
        </li>
        <li>
          <h3>Lesin Liu, Project Manager</h3>
          <p>
            Lesin contributed to background research and report writing. She's
            also responsible for creating project timelines and keeping our work
            on track. Additionally, she contributed to the historical analysis
            of recipes and historical events.
          </p>
        </li>
        <li>
          <h3>Jim Gan, Design Specialist</h3>
          <p>
            Jim's contributed to the early stages of the literature review
            related to Chinese food in Australia. He designed the curated recipe
            book's front and back covers, took screenshots of curated recipes
            and created AI-generated illustrations to showcase the historical
            recipes featured on the website.
          </p>
        </li>
      </ul>

      <h2>License</h2>
      <div
        className="license"
        dangerouslySetInnerHTML={{
          __html: `<p xmlns:cc="http://creativecommons.org/ns#" xmlns:dct="http://purl.org/dc/terms/"><a property="dct:title" rel="cc:attributionURL" href="https://australian-chinese-recipe-archive-website.vercel.app/">Stir-frying the Melting Pot: Chinese Recipes in Australian Print (1850)</a> by <span property="cc:attributionName">Maggie Yundi Li, Sihan Zhao, Carina Bo, Lesin Liu, Jim Gan</span> is licensed under <a href="http://creativecommons.org/licenses/by-nc-nd/4.0/?ref=chooser-v1" target="_blank" rel="license noopener noreferrer" style="display:inline-block;">CC BY-NC-ND 4.0<img style="display:inline-block;height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1"><img style="display:inline-block;height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1"><img style="display:inline-block;height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/nc.svg?ref=chooser-v1"><img style="display:inline-block;height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/nd.svg?ref=chooser-v1"></a></p>`,
        }}
      />
    </article>
  );
}
