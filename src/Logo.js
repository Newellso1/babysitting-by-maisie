import LogoLayer1 from "./Assets/Images/Logo/Logo_Layer_1.png";
import LogoLayer2 from "./Assets/Images/Logo/Logo_Layer_2.png";
import LogoLayer3 from "./Assets/Images/Logo/Logo_Layer_3.png";
import LogoLayer4 from "./Assets/Images/Logo/Logo_Layer_4.png";

export default function Logo() {
  return (
    <div className="logo-container">
      <img src={LogoLayer1} alt="logo layer 1" />
      <img src={LogoLayer2} alt="logo layer 2" />
      <img src={LogoLayer3} alt="logo layer 3" />
      <img src={LogoLayer4} alt="logo layer 4" />
      <p>Babysitting by Maisie</p>
    </div>
  );
}
