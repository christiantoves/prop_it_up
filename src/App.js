import PersonCard from './components/PersonCard'


function App() {
  return (
    <div className="App">
      <PersonCard firstName={"Christain"} lastName={"Toves"} age = {"29"} hairColor={"black"}/>
      <PersonCard firstName={"Justin"} lastName={"Aguilo"} age = {"26"} hairColor={"black"}/>
      <PersonCard firstName={"Dipinder"} lastName={"Sharma"} age = {"26"} hairColor={"black"}/>
      <PersonCard firstName={"James"} lastName={"Wong"} age = {"28"} hairColor={"black"}/>
    </div>
  );
}

export default App;
