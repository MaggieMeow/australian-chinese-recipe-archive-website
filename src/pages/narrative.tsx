import { useStore } from "../store";
import "./style.scss";

export function NarrativePage() {
  const setInterestedPage = useStore((state) => state.setInterestedPage);
  const interestedPage = useStore((state) => state.interestedPage);
  console.log(interestedPage);
  return (
    <article>
      <h2>
        Stir-frying the Melting Pot: A Historical Analysis of Chinese Recipes in
        Australian Newspapers and Magazines (1850-1950)
      </h2>
      <h3>1. 1850-1890s: The Beginning of Chinese Immigration to Australia</h3>
      <h4>1.1 Historical Background</h4>
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
      <h4>1.2 Chinese Recipes and Ingredients in the Late 19th Century</h4>
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
      <p>
        The first recipe with genuine Chinese elements in out dataset was titled{" "}
        <a
          onClick={() => {
            setInterestedPage(3);
          }}
          className="font-bold underline"
        >
          “Melon Jam with Green Ginger”
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
      <p></p>
      <p></p>
      <p></p>

      <h3>References</h3>
      <p></p>
    </article>
  );
}
