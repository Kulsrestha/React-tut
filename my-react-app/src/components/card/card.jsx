import heartImage from '../../assets/ironMan.jpg';
import './card.css';

function Card() {
  return (
    <div className="card">
        <img  className="card-img" src={heartImage} alt="Iron Man" />
      <h2>Iron Man Heart</h2>
      <p>This is the profile of Iron Man's heart.</p>
    </div>
  );
}

export default Card;