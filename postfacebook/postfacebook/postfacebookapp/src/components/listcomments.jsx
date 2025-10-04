let ListComments = ({ listComData }) => {
  return (
    <ul className="list-group list-group-flush">
      {listComData.map((list) => (
        <li
          key={list.id}
          className="list-group-item bg-dark text-white border-0 my-1 rounded d-flex align-items-center"
          style={{ border: "1px solid #bbb" }}
        >
          <img
            src="https://www.w3schools.com/howto/img_avatar.png"
            alt="avatar"
            className="rounded-circle me-2"
            style={{ width: "30px", height: "30px" }}
          />
          <span>{list.text}</span>
        </li>
      ))}
    </ul>
  );
};

export default ListComments;
