import "./Card.scss";

export default function Card(props) {
  return (
    <div className="card_container">
      <div className="card_title">
        <h4>{props.object.title}</h4>
        <h5>{props.object.body}</h5>
        <button onClick={() => props.delCard(props.object.id)}>delete</button>
        <button onClick={() => props.addCard(props.object)}>add</button>
      </div>
    </div>
  );
}
