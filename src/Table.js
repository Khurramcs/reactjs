import React, { useEffect, useState } from "react";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedEmail, setSelectedEmail] = useState("");
  const [filtered, setFiltered] = useState([]);
  const [sort, setSort] = useState("");
  const [sortDirection, setSortDirection] = useState("asc");
  const [email, setEmail] = useState([]);
  const [isLoading, setIsLoading] = useState(true); 

  useEffect(() => {
    const filteredData = users.filter((user) =>
      (
        user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.phone.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.website.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.company.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.address.street.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.address.suite.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.address.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.address.zipcode.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.email === selectedEmail
      ) &&
      (selectedEmail === "" || user.email === selectedEmail)
    );

    const sortedData = [...filteredData].sort((a, b) => {
      if (sort === "name") {
        return a.name.localeCompare(b.name);
      } else if (sort === "email") {
        return a.email.localeCompare(b.email);
      } else if (sort === "phone") {
        return a.phone.localeCompare(b.phone);
      } else if (sort === "website") {
        return a.website.localeCompare(b.website);
      } else if (sort === "company") {
        return a.company.name.localeCompare(b.company.name);
      } else if (sort === "address") {
        return a.address.street.localeCompare(b.address.street);
      }
      return 0;
    });

    const sorted =
      sortDirection === "asc" ? sortedData : sortedData.reverse();

    setFiltered(sorted);
  }, [searchQuery, users, sort, sortDirection, selectedEmail]);

  useEffect(() => {
    setIsLoading(true); 
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        const emails = [...new Set(data.map((user) => user.email))];
        setEmail(emails);
        setIsLoading(false); 
      });
  }, []);

  function handlesort(field) {
    if (sort === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSort(field);
      setSortDirection("asc");
    }
  }

  return (
    <div>
      <h2>User Table</h2>

      <input
        type="text"
        placeholder="Search here"
        name="user"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      &nbsp; &nbsp;

      <label htmlFor="emails">Email : </label>
      &nbsp;
      {isLoading ? (
      <label htmlFor="emails">loading..</label>
      ) : (
      <select
        name="emails"
        id="emails"
        value={selectedEmail}
        onChange={(e) => setSelectedEmail(e.target.value)}
      >
        <option value="">All</option>
        {email.map((email) => (
          <option key={email}>{email}</option>
        ))}
      </select>
      )}

      {isLoading ? (  <h3>Loading...</h3>
      ) : (
        <table> 
          <thead>
            <tr>
              <th onClick={() => handlesort("id")}>ID</th>
              <th onClick={() => handlesort("name")}>Name</th>
              <th onClick={() => handlesort("email")}>Email</th>
              <th onClick={() => handlesort("phone")}>Phone</th>
              <th onClick={() => handlesort("website")}>Website</th>
              <th onClick={() => handlesort("company")}>Company</th>
              <th onClick={() => handlesort("address")}>Address</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.website}</td>
                <td>{user.company.name}</td>
                <td>
                  {user.address.street}, {user.address.suite},{" "}
                  {user.address.city}, {user.address.zipcode}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}