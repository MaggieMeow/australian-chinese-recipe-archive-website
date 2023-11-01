import { citations } from "../data/citations";
import { useStore } from "../store";
import "./style.scss";

export function NarrativePage() {
  const setInterestedPage = useStore((state) => state.setInterestedPage);
  const interestedPage = useStore((state) => state.interestedPage);
  console.log(interestedPage);
  return (
    <article className="narrative-article">
      <h2>
        Stir-frying the Melting Pot: A Historical Analysis of Chinese Recipes in
        Australian Newspapers and Magazines (1850-1950)
      </h2>
      <h3>1. 1850-1890s: The Beginning of Chinese Immigration to Australia</h3>
      <h4 className="my-8">1.1 Historical Background</h4>
      <p>
        We began our data collection in 1850, aligning with the onset of the
        gold rush and the first wave of Chinese immigration to Australia (Liu
        and Gallois). Starting in the 1840s, Chinese settlers, mainly unskilled
        labourers, arrived in growing numbers (National Museum of Australia). By
        1861, they made up 3.3% of the Australian colonies' population (Chan
        154). This period, especially the 1850s, forms the backdrop for our
        investigation into Chinese culinary representations in Australian media.
      </p>
      <p>
        However, the growing Chinese presence in Australia was met with racial
        tensions, especially in the goldfields. European miners' resentment
        towards the Chinese led to violent incidents like the 1861 Lambing Flat
        Riots (Global History Lab). This animosity was further compounded by a
        series of restrictive immigration policies such as the 1861 'Chinese
        Migration Act' by the New South Wales Government, which imposed a tariff
        specifically for Chinese immigrants (Washington).
      </p>
      <p>
        Despite these obstacles, the Chinese community’s influence on
        Australia's culinary scene began to grow. Many migrants came from
        China’s southeastern provinces like Guangdong and Fujian (qtd. in Tong
        15). They established "cookhouses" to cater to Chinese workers while
        attracting Australian patrons as well (Heanue). By 1854, the first
        documented Chinese restaurant opened in Ballarat, Victoria (qtd. in Tong
        17), and by 1890, Chinese individuals made up a third of all cooks in
        Australia (Heanue).
      </p>
      <h4 className="my-8">
        1.2 Chinese Recipes and Ingredients in the Late 19th Century
      </h4>
      <h5>
        <a
          onClick={() => {
            setInterestedPage(1);
          }}
          className="font-bold underline"
        >
          Dahl
        </a>{" "}
      </h5>
      <p>
        The rise in popularity of Chinese food in Australia during the late 19th
        century is evidenced by the earliest "Chinese" recipe in our dataset,
        published on 23 July 1870 in the newspaper, Adelaide Observer. Notably,
        this{" "}
        <a
          onClick={() => {
            setInterestedPage(1);
          }}
          className="font-bold underline"
        >
          dahl
        </a>{" "}
        recipe is traditionally Indian (Pal) but was mislabeled as "Indian and
        Chinese" in Adelaide Observer. Such misrepresentation not only indicates
        a lack of knowledge of Asian cuisines by the recipe's authors and
        editors but also suggests an Orientalist tendency to generalize distinct
        Asian cultures (Rosen). The conflation of two distinct Asian cuisines
        exemplifies how Australian print at the time perpetuated Asian
        stereotypes and reduced rich and diverse Asian cultures to homogeneous
        and interchangeable identities.
      </p>
      <p>
        Transitioning from this misrepresentation towards the end of the 19th
        Century, more accurate representation and integration of Chinese recipes
        and ingredients emerged in Australian newspapers.
      </p>
      <h5>
        <a
          onClick={() => {
            setInterestedPage(3);
          }}
          className="font-bold underline"
        >
          “Melon Jam with Green Ginger”
        </a>
      </h5>
      <p>
        The first recipe with genuine Chinese elements in out dataset was titled{" "}
        <a
          onClick={() => {
            setInterestedPage(3);
          }}
          className="font-bold underline"
        >
          Melon Jam with Green Ginger
        </a>
        , published in 1883 in the Australasian newspaper in Melbourne. It
        advised readers to source green ginger “from the Chinese” at the end of
        the recipe, hinting at a recognition of Chinese agricultural
        contributions. Historically, the first ginger cultivation in Australia
        was started by Chinese farmers in the Palmer River area in Queensland
        during the 1870s (Gibb, 1939, qtd. in Ryder). During this period, the
        Chinese community, which had grown to 20,000 individuals by 1877
        following a gold rush in Queensland, significantly outnumbered European
        settlers in the region (Frost). The geographical spread of ginger from
        Queensland, where it was first cultivated, to Melbourne, where the
        recipe was published, indicates an expanding awareness and availability
        of ginger as a Chinese ingredient across Australia. The recipe author's
        guidance on sourcing green ginger signifies ginger’s growing
        recognition, albeit not a common household ingredient yet, while also
        acknowledging its cultural association with the Chinese community.
      </p>
      <h5>
        <a
          onClick={() => {
            setInterestedPage(7);
          }}
          className="font-bold underline"
        >
          Preservation Recipes
        </a>
      </h5>
      <p>
        In 1894, a recipe on{" "}
        <a
          onClick={() => {
            setInterestedPage(7);
          }}
          className="font-bold underline"
        >
          preserved ginger
        </a>{" "}
        “for which the Chinese are so famed” appeared in a section titled “The
        Ladies’ Page” in The Sydney Mail and New South Wales Advertiser, in
        response to “many inquiries”. This reflects a growing popularity and
        appreciation of ginger among Australian households and indicates a
        recognition of Chinese culinary influence.
      </p>
      <p>
        All of the recipes in our dataset in the 1890s were preservation
        recipes, with examples like the preserved ginger previously discussed
        and{" "}
        <a
          onClick={() => {
            setInterestedPage(5);
          }}
          className="font-bold underline"
        >
          preserved eggs
        </a>
        . This trend could be a practical response to the lack of refrigeration
        at the household level in Australia until post-WWII (Henzell 242). The
        emphasis on Chinese preservation recipes in Australian newspapers also
        signals a functional interaction with Chinese culinary practices. The
        proliferation of Chinese preservation recipes in Australian newspapers
        during this period also underscores broader economic and agricultural
        interaction between the Chinese immigrant community and Australian
        society. It shows increasing recognition of the economic, agricultural
        and culinary contributions of the Chinese community in Australia, within
        the agricultural and food preservation realms.
      </p>
      <h3>2. 1900s-1930s: Chinese Recipes in White Australia</h3>
      <p>
        The start of the 20th century in Australia saw a juxtaposition of
        culinary interactions and legislative restrictions concerning the
        Chinese immigrant community. Despite the budding number of Chinese
        preservation recipes in the 1890s, the new Federal Parliament of
        Australia enacted the Immigration Restriction Act 1901 to curb Asian and
        Pacific immigration, especially from China (Commonwealth of Australia).
        This legislative gesture, also known as the White Australia Policy,
        resulted in declining populations of full-Chinese and part-Chinese
        people according to the 1901 and 1911 censuses (Kennedy). The
        legislation also denied rights to state pensions, to re-enter Australia
        after overseas travels or to bring their immediate family to Australia
        (Kennedy).
      </p>
      <h5>
        <a
          onClick={() => {
            setInterestedPage(9);
          }}
          className="font-bold underline"
        >
          Gingembre a la Chantilly
        </a>
      </h5>
      <p>
        The publication of the recipe titled{" "}
        <a
          onClick={() => {
            setInterestedPage(9);
          }}
          className="font-bold underline"
        >
          Gingembre a la Chantilly
        </a>{" "}
        in 1914 in the Darling Downs Gazette, a Queensland-based newspaper
        highlights the juxtaposition of culinary acceptance and policy
        restrictions of the Chinese community in post-federation Australia. This
        recipe’s French title suggests its European roots, but it notably
        featured Chinese preserved ginger as a key ingredient, portraying a
        blend of culinary cultures. In comparison to the 1890s, when recipes in
        Australian newspapers guided readers on sourcing and preserving ginger,
        a European recipe seamlessly incorporated Chinese preserved ginger in
        1914. This process reflects the normalization of previously unfamiliar
        ingredients within Australian households. Despite the policy
        restrictions which exacerbated the isolation and exclusion of Chinese
        communities (Inglis), this fusion recipe exhibited growing multicultural
        interactions in Australia. Food became a medium of cultural exchange and
        acceptance, even as broader policies restricted it.
      </p>
      <h5>
        <a
          onClick={() => {
            setInterestedPage(11);
          }}
          className="font-bold underline"
        >
          Chop Suey
        </a>
      </h5>
      <p>
        <a
          onClick={() => {
            setInterestedPage(11);
          }}
          className="font-bold underline"
        >
          Chop Suey
        </a>
        , a Chinese-American dish, was generally believed to have been
        introduced to Australia from America (O’Connell), despite its roots
        tracing back to different parts of China before its rise to popularity
        in America (Liu). Its journey from America to Australia was evidenced by
        its earliest mention in an 1898 article about a “A Chinese Dinner” in
        New York in The Australian Star newspaper. Chop suey’s trans-Pacific
        journey is further shown in the first chop suey recipe in Australian
        print media, titled “American Chop Suey” in 1924 in The Voice of the
        North, without acknowledgement of its Chinese heritage. However, a shift
        in cultural recognition transpired in 1928 when The Australian Woman's
        Mirror magazine’s chop suey recipe recognized its Chinese roots. Chop
        Suey’s transnational trajectory across China, America and Australia thus
        serves as an illustration of the interconnected diaspora of Chinese
        communities globally.
      </p>
      <p>
        Beyond its culinary significance, the term “chop suey” became synonymous
        with “Chinese” or miscellaneous assortments, as seen in usage as titles
        for news columns and music hall reviews (O’Connell). The linguistic
        assimilation of “chop suey” offers a glimpse into the racial
        condescension towards Chinese communities in the early 20th century. The
        racial dynamics of the time are further highlighted in a 1913 article
        from the Sydney-based newspaper, Globe, on the “Growing Popularity of
        Chop Suey” in America. It portrayed the Chinese cook to be “as
        inscrutable as the Sphinx”, showing mistrust towards the Chinese
        communities and perpetuating a notion of inherent difference. The author
        notably referred to Westerners as "foreign devil", a derogatory,
        anti-imperialist name for Caucasians used by the Chinese (Wang). The
        usage of this term shows the author’s awareness of the racialized lens
        through which the Chinese communities perceived the predominantly White
        Australian society. Chop suey, as a dish and part of Australian
        vocabulary in the early 20th century thus echos the broader racial
        tension and prejudice between White and Chinese communities in
        Australia.
      </p>
      <h3 className="my-8">
        3. 1934-1950: Exception to White Australia Policy and WWII
      </h3>
      <p>
        The period between 1934 and 1950 was a time of major socio-political
        upheavals in Australia. Australia experienced a slow recovery from the
        Great Depression of the 30s, and the onset of World War II (1939-1945)
        further compounded this, marking 15 years of historically low migration
        rates (Young et al. 47). However, there was a slight policy shift in the
        White Australia Policy in 1934, where provisions were made to allow
        cooks and café workers to enter the country temporarily, provided
        certain conditions were met by the associated restaurants (Nichol). This
        policy became a way for Chinese restaurateurs to bring male family
        members into Australia, contributing to a flourishing Chinese food scene
        (Nichol). The exception to the broader restrictive immigration policy,
        along with wartime exigencies, made Australian society more conducive to
        further culinary exchange. However, the enduring Orientalism, as
        exemplified in some recipes explored in this section, underscore a
        nuanced interaction between evolving cultural exchange and persistent
        cultural stereotypes.
      </p>
      <h5>
        <a
          onClick={() => {
            setInterestedPage(13);
          }}
          className="font-bold underline"
        >
          Dim Sims
        </a>
      </h5>
      <p>
        William Chen Wing Young is commonly believed to be the inventor of{" "}
        <a
          onClick={() => {
            setInterestedPage(13);
          }}
          className="font-bold underline"
        >
          Dim Sims
        </a>{" "}
        who popularised it in Australia from his Chinese restaurant around 1942
        (Wong; Rancie). The newspaper and magazine records in Trove, however,
        present a more complex origin story. The earliest recipe for Dim Sim we
        located was in the Australian Woman’s Mirror in 1934, a response to a
        request from 1933, wherein Dim Sim is referred to as a "well-known
        Chinese titbit," indicating its established recognition among the
        Australian populace by that time. Further, the earliest appearance of
        the term "Dim Sim" was in 1928 in the Melbourne-based newspaper The
        Argus, which described it as an essential part of a Chinese meal,
        indicating an earlier introduction of Dim Sim to the Australian culinary
        scene (Gastronome).
      </p>
      <p>
        Despite the unclear time of Dim Sim’s origin in Australia, the term is a
        dialect variant of the Cantonese "Dim Sum", which encompasses a variety
        of dumplings and small plate Cantonese delicacies (Wong). In contrast,
        Dim Sim has morphed within the Australian context to refer specifically
        to a particular type of Chinese dumpling (Wong). Dim Sim has been
        localised into an iconic Australian dish. Its transformation showcases
        the culinary and socio-cultural interactions between Chinese immigrant
        communities and the host Australian society.
      </p>
      <h5>
        <a
          onClick={() => {
            setInterestedPage(15);
          }}
          className="font-bold underline"
        >
          Chinese Chews
        </a>
      </h5>
      <p>
        <a
          onClick={() => {
            setInterestedPage(15);
          }}
          className="font-bold underline"
        >
          Chinese Chews
        </a>
        , a dessert first introduced in the United States in 1917 by Mrs. L. G.
        Platt of North Bend, Oregon (Hillier), found its way to Australia in
        1931 in the West Australia newspaper, The Northern Grazier and Miner.
        Despite having “Chinese” in its name, this dessert has no known
        connection to Chinese cuisine or culture. The descriptor “Chinese”, as
        suggested by de Zwart, might have been derived from the dessert’s
        complex preparation methods, indicating a distinction that did not have
        to be culturally accurate, but rather simply not British.
      </p>
      <p>
        Naming a non-Chinese dish “Chinese” suggests continued Orientalism
        towards Chinese culture in Australia, since the misidentified Dahl
        recipe in 1870. By framing Eastern cultures as exotic through a Western
        lens, this naming convention can perpetuate stereotypes about Chinese
        culinary culture, despite the dessert's American origin. Although the
        Australians did not come up with the name, Chinese Chews’ popularity in
        Australia, as evidenced by its frequent appearance in magazines and
        newspapers since the 1930s, suggests that the name’s exotic appeal
        resonated with mainstream Australian society at the time.
      </p>
      <h5>
        <a
          onClick={() => {
            setInterestedPage(17);
          }}
          className="font-bold underline"
        >
          Delicious Mustard Pickle
        </a>
      </h5>
      <p>
        The recipe with the highest frequency in our datasets is that of Mustard
        Pickle. This recipe titled{" "}
        <a
          onClick={() => {
            setInterestedPage(17);
          }}
          className="font-bold underline"
        >
          "Delicious Mustard Pickle (Chinese Recipe)"
        </a>{" "}
        made its first appearance in the Perth newspaper, North-Eastern Courier,
        in November 1939. Its publication was two months after the onset of
        World War II in September, potentially reflecting an anticipatory
        response to wartime food insecurity.
      </p>
      <p>
        This recipe was republished 16 times between 1939 and 1940, its
        ingredients and instructions align more closely with Piccalilli (or
        Picalillo), a Western take on Indian pickle (Cox and Dannehl), rather
        than any Chinese pickle recipes. This is further evidenced by its use of
        “powdered tumeric”, a spice native to Southeast Asia and the Indian
        region and uncommon in Chinese cuisine (The Woks of Life). Piccalilli’s
        roots can be traced back to 1796 when British author Elizabeth Raffald
        documented a recipe titled “To Make Indian Pickle or Piccalillo" in The
        Experienced English Housekeeper.
      </p>
      <p>
        The mislabeling of Piccalilli as a Chinese recipe in this instance could
        be attributed to the author and editors’ lack of knowledge regarding its
        British and Indian cultural heritage. However, it also shows the
        continued Orientalist tendency in Australia to generalize and homogenize
        diverse Asian cultures, as previously discussed regarding the
        mislabelled Dahl recipe.
      </p>
      <h5>
        <a
          onClick={() => {
            setInterestedPage(19);
          }}
          className="font-bold underline"
        >
          Sorrel Soup
        </a>
      </h5>
      <p>
        World War II brought about food rationing in Australia starting in June
        1942, which necessitated changes in Australian dietary patterns. The
        article "Greens for Good Health" published in 1943 in the Melbourne
        newspaper, The Age, captured initiatives to adapt to the new
        circumstances. It described a scenario where housewives had to learn how
        to maintain a balanced diet on severely rationed commodities, leading to
        a resurgence in the use of vegetables which had long been overshadowed
        by other delicacies. Among the article’s vegetable recommendations in
        response to the rising demand were a few Chinese vegetables, like
        Chinese cabbage and Chinese mustard. This aligns with Wahlqvist’s
        conclusion that Asian migration to Australia has diversified the
        Australian diet, providing various health benefits as a result.
      </p>
      <p>
        Notably, the article featured a recipe for sorrel soup, a dish popular
        in Eastern Europe (iFood.tv), suggesting readers add "half a cup of
        finely chopped watercress, or Chinese mustard, just before serving".
        This adaptation, incorporating a Chinese vegetable into a traditionally
        Eastern European dish, is a practical response to food scarcity. It
        indicates the growing cultural syncretism in Australia by combining
        ingredients and culinary methods from distinct cultures within a single
        dish. This instance suggests that the pragmatic need to adapt to food
        rationing during the mid-20th century served as a catalyst for the
        development of multiculturalism in Australia.
      </p>
      <h3 className="my-8">4. Conclusion</h3>
      <p>
        Our exploration of Chinese recipes in Australian print media from 1850
        to 1950 uncovers a historical narrative with interweaving themes of
        Orientalism, cultural syncretism, and emerging multiculturalism. The
        early days of Chinese immigration, marked by the gold rush, witnessed
        Orientalist tendencies that misrepresented Chinese cuisine. This
        Orientalism persisted through the studied period, manifesting in the
        exoticisation of Chinese Chews, and the mislabeling of dahl and mustard
        pickles, thereby simplifying diverse Asian culinary identities into a
        homogenized, exotic other.
      </p>
      <p>
        However, as time progressed, the Australian culinary landscape began to
        absorb and adapt to Chinese culinary influences, moving towards a phase
        of cultural syncretism. This syncretism extended from culinary fusion to
        practical responses to evolving socio-economic circumstances. The
        appearance of preservation recipes, the blending of Chinese preserved
        ginger in European recipes, the localisation of Dim Sims and the
        pragmatic incorporation of Chinese vegetables during WWII food
        rationing, all reflect the burgeoning syncretism. This culinary
        hybridization often ran counter to restrictive immigration policies and
        racial tension prevalent during these decades. Such cultural syncretism
        in the Australian culinary scene can be seen as the initial steps
        towards multiculturalism.
      </p>
      <p>
        In conclusion, the portrayal of Chinese recipes in Australian print
        media over a century shows the complex interplay between Orientalism,
        cultural syncretism, and emerging multiculturalism amid significant
        socio-political shifts. Through the lens of recipes, the dynamics of
        racial, cultural, and culinary exchanges, not without prejudices and
        challenges, unveil a complex journey towards multiculturalism in
        Australia.
      </p>

      <h3 className="pt-4">Works Cited</h3>
      <ul>
        {citations.map((citation) => (
          <li className="pb-4" key={citation}>
            {citation}
          </li>
        ))}
      </ul>
    </article>
  );
}
