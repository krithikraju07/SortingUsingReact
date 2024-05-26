import logo from './logo.svg';
import './App.css';
import { useMemo, useState } from "react";

const list = [
  {
    name: "Rutu",
    country: "India",
    age: 37,
  },
  {
    name: "Patty",
    country: "Australia",
    age: 42,
  },
  {
    name: "Jos Butler",
    country: "UK",
    age: 39,
  },
];

function App() {
  const [order, setOrder] = useState("");
  const [sortDir, setSortDir] = useState("asc");

  const sortedList = useMemo(() => {
    if (!order) return list;
    const newList = [...list];
    newList.sort((a, b) => {
      if (typeof a[order] === "number") {
        return sortDir === "asc" ? a[order] - b[order] : b[order] - a[order];
      } else {
        return sortDir === "asc"
          ? a[order].localeCompare(b[order])
          : b[order].localeCompare(a[order]);
      }
    });
    return newList;
  }, [order, sortDir]);

  return (
    <main className="container">
      <div className="button-container">
        <span>Sort By :</span>
        <button
          onClick={() => setOrder("name")}
          className={order === "name" ? "active" : ""}
        >
          Name
        </button>
        <button
          onClick={() => setOrder("country")}
          className={order === "country" ? "active" : ""}
        >
          Country
        </button>
        <button
          onClick={() => setOrder("age")}
          className={order === "age" ? "active" : ""}
        >
          Age
        </button>
      </div>
      <div className="button-container">
        <span>Sort Dir :</span>
        <button
          onClick={() => setSortDir("asc")}
          className={sortDir === "asc" ? "active" : ""}
        >
          ASC
        </button>
        <button
          onClick={() => setSortDir("desc")}
          className={sortDir === "desc" ? "active" : ""}
        >
          DESC
        </button>
      </div>
      <div className="list-container">
        <div className="list-item heading">
          <div>Name</div>
          <div>Country</div>
          <div>Age</div>
        </div>
        {sortedList && sortedList.length > 0 ? (
          sortedList.map((item, index) => (
            <div className="list-item" key={index}>
              <div>{item.name}</div>
              <div>{item.country}</div>
              <div>{item.age}</div>
            </div>
          ))
        ) : (
          <div>No data available</div>
        )}
      </div>
    </main>
  );
}

export default App;
