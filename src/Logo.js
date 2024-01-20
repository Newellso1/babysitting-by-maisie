import { Parallax } from "react-scroll-parallax";

import LogoLayer1 from "./Assets/Images/Logo/Logo_Layer_1.png";
import LogoLayer2 from "./Assets/Images/Logo/Logo_Layer_2.png";
import LogoLayer3 from "./Assets/Images/Logo/Logo_Layer_3.png";
import LogoLayer4 from "./Assets/Images/Logo/Logo_Layer_4.png";

export default function Logo() {
  return (
    <div className="logo-container">
      <img className="logo-image" src={LogoLayer1} alt="logo layer 1" />
      <img className="logo-image" src={LogoLayer2} alt="logo layer 2" />
      <img className="logo-image" src={LogoLayer3} alt="logo layer 3" />
      <img className="logo-image" src={LogoLayer4} alt="logo layer 4" />
      <p>Babysitting by Maisie</p>
    </div>
  );
}

// export default function Logo() {
//   return (
//     <div className="logo-container">
//       <img className="logo-image" src={LogoLayer1} alt="logo layer 1" />
//       <img className="logo-image" src={LogoLayer2} alt="logo layer 2" />
//       <img className="logo-image" src={LogoLayer3} alt="logo layer 3" />
//       <img className="logo-image" src={LogoLayer4} alt="logo layer 4" />
//       <p>Babysitting by Maisie</p>
//     </div>
//   );
// }
