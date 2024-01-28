const Contact = ({ id, name, pictureUrl, popularity, wonOscar, wonEmmy, setContactsList }) => {
    
    const deleteContact = () => {
        setContactsList((prevContactsList) =>
            prevContactsList.filter((contact) => contact.id !== id)
        );
    };
    
    return (
        <tr>
            <td><img src={pictureUrl} alt={name} className="contacts-image"/></td>
            <td>{name}</td>
            <td>{popularity.toFixed(2)}</td>
            <td>{wonOscar ? "🏆" : ""}</td>
            <td>{wonEmmy ? "🌟" : ""}</td>
            <td><button onClick={deleteContact}>Delete</button></td>
        </tr>
    );
}

export default Contact;