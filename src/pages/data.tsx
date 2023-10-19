import image1 from "../assets/images/image1.png";
import image2 from "../assets/images/image2.png";
import image3 from "../assets/images/image3.png";
import image4 from "../assets/images/image4.png";
import image5 from "../assets/images/image5.png";
import image6 from "../assets/images/image6.png";
import image7 from "../assets/images/image7.png";
import "./data.scss";

export function DataPage() {
  return (
    <div className="mb-20 data-page">
      <h1 className="c6" id="h.gk93eiytgon">
        <span className="c16">Data</span>
      </h1>
      <h2 className="c0" id="h.wm4xb0kscwf3">
        <span className="c8">Data collection from Trove and Data Cleaning</span>
      </h2>
      <ul className="list-disc">
        <li className="c4 li-bullet-0">
          <span className="c2">
            Custom crawler which could afford functionalities not offered by the
            official API, such as getting full text from the magazine category
          </span>
        </li>
      </ul>
      <h3 className="c15" id="h.ukqjxwsy1aai">
        <span>Newspapers Data Collection and Cleaning</span>
      </h3>
      <ul className="c1 lst-kix_9r2qy68soj4i-0">
        <li className="c4 li-bullet-0">
          <span className="c2">
            In the &ldquo;newspapers &amp; gazettes&rdquo; category, just
            searching for &ldquo;Chinese recipe&rdquo; between 1850 and 1950
            returns 50,006 total results
          </span>
        </li>
      </ul>
      <p className="c11">
        <span>
          <img alt="" src={image4} title="" />
        </span>
      </p>
      <ul className="c1 lst-kix_jf6ufs9e3fc6-0 start">
        <li className="c4 li-bullet-0">
          <span className="c2">
            Restricted categories to &quot;Article&quot;, &quot;Detailed Lists,
            Results, Guides&quot;, &quot;Editorial&quot;,
            &quot;Literature&quot;, &quot;News&quot;, &quot;Letters&quot;,
            &quot;Arts And Culture&quot;, &quot;Commerce And Business&quot;,
            &quot;Reviews&quot;
          </span>
        </li>
        <li className="c4 li-bullet-0">
          <span className="c2">
            Added more recipe-related search term restrictions:
            <code>
              &#39;(chinese recipe) AND (ingredient OR cup OR tablespoon OR
              teaspoon OR salt OR sugar OR tsp OR tbsp) -(longevity)&rsquo;
            </code>
          </span>
        </li>
        <li className="c4 li-bullet-0">
          <span className="c2">Narrowed down to 8569 results</span>
        </li>
        <li className="c4 li-bullet-0">
          <span className="c2">
            Text preprocessing (html tags, lowercase and punctuation) and
            lemmatisation on the title, search snippet and abstract
          </span>
        </li>
        <li className="c4 li-bullet-0">
          <span className="c2">
            Combined title, search snippet and abstract for TF-IDF vectorization
          </span>
        </li>
        <li className="c4 li-bullet-0">
          <span className="c2">
            K-means clustering, elbow method using &nbsp;Within-Cluster Sum of
            Squares (WCSS) to determine the optimal number of clusters, 9
          </span>
        </li>
      </ul>
      <p className="c11 c18">
        <span>
          <img alt="" src={image6} title="" />
        </span>
      </p>
      <ul className="c1 lst-kix_jf6ufs9e3fc6-0">
        <li className="c4 li-bullet-0">
          <span className="c2">
            Examine the top words from each cluster to select clusters related
            to food and cooking
          </span>
        </li>
        <li className="c4 li-bullet-0">
          <span className="c2">
            Delete entries which don&#39;t contain the &ldquo;chinese&rdquo; or
            &ldquo;china&rdquo; in the preprocessed snippet
          </span>
        </li>
        <li className="c3 li-bullet-0">
          <span>Full-text Extraction for the newspaper entries</span>
        </li>
      </ul>
      <p className="c5">
        <span className="c2"></span>
      </p>
      <h3 className="c15" id="h.fx9a68lkpnfm">
        <span className="c12">Magazine Data Collection and Cleaning</span>
      </h3>
      <ul className="c1 lst-kix_6dp5myettwlc-0 start">
        <li className="c4 li-bullet-0">
          <span className="c2">
            In the &ldquo;magazines &amp; newsletters&rdquo; category, we used
            the search term &#39;(chinese recipe)&rsquo; to obtain 1460 records
          </span>
        </li>
        <li className="c4 li-bullet-0">
          <span className="c2">
            The &ldquo;description&rdquo; field of metadata has information on
            the article category. Filtered out entries with &quot;Politics and
            government&quot;, &quot;Book industries and trade&quot; or
            &quot;Theater--Australia&quot; as &ldquo;description&rdquo;.
          </span>
        </li>
        <li className="c4 li-bullet-0">
          <span className="c2">Filtered for entries between 1850 and 1950</span>
        </li>
        <li className="c4 li-bullet-0">
          <span className="c2">Narrowed down to 556 entries</span>
        </li>
      </ul>
      <p className="c13">
        <span className="c9"></span>
      </p>
      <p className="c13">
        <span className="c9"></span>
      </p>
      <p className="c5">
        <span className="c2"></span>
      </p>
      <h2 className="c0" id="h.dbzsjni614te">
        <span>Dataset construction</span>
      </h2>
      <ul className="c1 lst-kix_3kf7odc4u88c-0 start">
        <li className="c3 li-bullet-0">
          <span className="c2">
            Filter for Chinese recipes or recipes with specific Chinese
            ingredients based on article full text
          </span>
        </li>
        <li className="c3 li-bullet-0">
          <span className="c2">Label each recipe with a dish name</span>
        </li>
      </ul>
      <h2 className="c0" id="h.h6yb2iulsv6s">
        <span className="c8">Data visualisation</span>
      </h2>
      <ul className="c1 lst-kix_3kf7odc4u88c-0">
        <li className="c3 li-bullet-0">
          <span className="c9">98 Newspaper entries by year</span>
        </li>
        <li className="c3 li-bullet-0">
          <span>
            <img alt="" src={image2} title="" />
          </span>
        </li>
      </ul>
      <p className="c14">
        <span>
          <img alt="" src={image3} title="" />
        </span>
      </p>
      <p className="c14">
        <span>
          <img alt="" src={image1} title="" />
        </span>
      </p>
      <p className="c13">
        <span className="c9"></span>
      </p>
      <ul className="c1 lst-kix_82b7l2iz1326-0 start">
        <li className="c3 li-bullet-0">
          <span className="c9">49 Magazine entries</span>
        </li>
      </ul>
      <h2 className="c0" id="h.agevx822lsdt">
        <span>
          <img alt="" src={image5} title="" />
        </span>
        <span>
          <img alt="" src={image7} title="" />
        </span>
      </h2>
      <h2 className="c0 c17" id="h.yu8k5wnqn3hn">
        <span className="c8"></span>
      </h2>
      <h1 className="c6" id="h.1envkb3nfw">
        <span className="c16">Prototype</span>
      </h1>
      <h2 className="c0" id="h.sywa3m4i8yu">
        <span className="c8">Historical Context Review</span>
      </h2>
      <ul className="c1 lst-kix_jpf91fu8p0qn-0 start">
        <li className="c3 li-bullet-0">
          <span className="c2">
            Research on significant historical events and trends in the
            specified period, especially those related to Chinese communities in
            Australia and Chinese immigration
          </span>
        </li>
        <li className="c3 li-bullet-0">
          <span className="c2">
            Select recipes that have intriguing correlations with significant
            historical events and trends identified.
          </span>
        </li>
        <li className="c3 li-bullet-0">
          <span className="c2">
            8 recipes from the newspaper dataset, 2 recipes from the magazine
            dataset
          </span>
        </li>
      </ul>
      <h2 className="c0" id="h.utk8qccg33ay">
        <span className="c8">
          Text correction for recipe entries included in the prototype
        </span>
      </h2>
      <ul className="list-disc">
        <li className="c4 li-bullet-0">
          <span className="c2">624 lines of corrected on Trove</span>
        </li>
        <li className="c4 li-bullet-0">
          <span className="c2">Extract the full text after correction</span>
        </li>
      </ul>
      <h2 className="c0" id="h.sztmuqyjsdhh">
        <span className="c8">
          Built the website to present the Chinese recipe archive and research
        </span>
      </h2>
      <p className="c14">
        <span className="c2">3 major sections: </span>
      </p>
      <ul className="list-disc">
        <li className="c3 li-bullet-0">
          <span className="c2">Presentation of an interactive recipe book</span>
        </li>
      </ul>
      <ul className="list-disc">
        <li className="c10 li-bullet-0">
          <span className="c2">Extracted recipe text</span>
        </li>
        <li className="c10 li-bullet-0">
          <span className="c2">
            AI-generated illustration of the recipe&rsquo;s end product based on
            instructions and ingredients
          </span>
        </li>
        <li className="c10 li-bullet-0">
          <span className="c2">
            Screenshot of the original article for context
          </span>
        </li>
        <li className="c10 li-bullet-0">
          <span className="c2">
            Link to Trove for further exploration or in case of updates
          </span>
        </li>
      </ul>
      <ul className="list-disc">
        <li className="c3 li-bullet-0">
          <span className="c2">A historical narrative of selected recipes</span>
        </li>
      </ul>
      <ul className="list-disc">
        <li className="c10 li-bullet-0">
          <span className="c2">
            Clicking on the referenced recipe in the analysis automatically
            opens the recipe book and flips to the corresponding page
          </span>
        </li>
      </ul>
      <ul className="list-disc">
        <li className="c3 li-bullet-0">
          <span className="c2">Presentation of Methodology</span>
        </li>
      </ul>
    </div>
  );
}
