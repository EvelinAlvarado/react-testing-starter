import ExpandableText from "../components/ExpandableText";
import Onboarding from "../components/Onboarding";
import TermsAndConditions from "../components/TermsAndConditions";

const PlaygroundPage = () => {
  // return <Onboarding />;
  // return <TermsAndConditions />;
  const lorem =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis praesentium fugit commodi similique doloribus consectetur dicta officiis dolore suscipit quaerat illum, ut, modi iste molestias omnis consequatur! Hic, dolores facilis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis praesentium fugit commodi similique doloribus consectetur dicta officiis dolore suscipit quaerat illum, ut, modi iste molestias omnis consequatur! Hic, dolores facilis.";

  return <ExpandableText text={lorem} />;
};

export default PlaygroundPage;
