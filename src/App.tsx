import { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";
import PersonList from "./components/PersonList";

function App() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  const [showAlert, setShowAlert] = useState(false);
  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <PersonList></PersonList>

      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
      <ListGroup
        items={["a", "b", "c"]}
        heading="Characters"
        onSelectItem={handleSelectItem}
      />
      {showAlert && (
        <Alert onClose={() => setShowAlert(false)}>
          <p>Test of message</p>
        </Alert>
      )}
      <Button variant="secondary" handler={() => setShowAlert(true)}>
        Test of alert
      </Button>
    </div>
  );
}

export default App;
