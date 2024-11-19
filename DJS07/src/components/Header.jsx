import trollImg from "../assets/troll-face.png";

export default function Header() {
  return (
    <header className="header">
      <img src={trollImg} className="header--image" alt="troll-face" />
      <h2 className="header--title">Meme Generator</h2>
      <h4 className="header--project">React Course - DJS07</h4>
    </header>
  );
}
