import "./SearchFilter.css";

function SearchFilter() {
  return (
    <div className="search-filter">

      <input
        type="text"
        placeholder="🔍 Search by Ticket ID, Employee or Title..."
      />

      <select>
        <option>All Status</option>
        <option>Open</option>
        <option>Pending</option>
        <option>In Progress</option>
        <option>Closed</option>
      </select>

      <select>
        <option>All Priority</option>
        <option>High</option>
        <option>Medium</option>
        <option>Low</option>
      </select>

      <button>Reset</button>

    </div>
  );
}

export default SearchFilter;