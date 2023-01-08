import "./styles.css";

const Person = () => {
  const url = "https://randomuser.me/api/portraits/thumb/men/75.jpg";
  return (
    <div className="person">
      <img src={url} alt="person" />
      <div>
        <h1>Name:</h1>
        <h1>Role: </h1>
      </div>
    </div>
  );
};

const PersonList = () => {
  return <Person />;
};

export default function App() {
  return <PersonList />;
}
