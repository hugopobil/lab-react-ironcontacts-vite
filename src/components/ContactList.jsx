import Contact from "./Contact";

const ContactList = ({ contactsList, setContactsList, addRandom, sortByName, sortByPopularity }) => {
  return (
    <div>
      <button onClick={addRandom}>Add Random Contact</button>
      <button onClick={sortByName}>Sort by Name</button>
      <button onClick={sortByPopularity}>Sort by Popularity</button>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {contactsList.map((contact) => (
            <Contact
              key={contact.id}
              {...contact}
              setContactsList={setContactsList}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ContactList;
