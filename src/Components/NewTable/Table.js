import React, { useState, useEffect } from "react";
import axios from "axios";
import "./table.css";

const Table = ({ config }) => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sortConfig, setSortConfig] = useState({ key: "id", direction: "asc" });
  const [filters, setFilters] = useState({});
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(config.dataUrl);
        setData(response.data);
        setFilteredData(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [config.dataUrl]);

  // Handle global search change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Sorting logic
  const sortData = (columnKey) => {
    const direction =
      sortConfig?.key === columnKey && sortConfig?.direction === "asc"
        ? "desc"
        : "asc";
    setSortConfig({ key: columnKey, direction });
  };

  // Filter data based on column filters and global search
  const filteredAndSearchedData = React.useMemo(() => {
    return filteredData.filter((row) => {
      if (
        searchQuery &&
        !Object.values(row).some((val) =>
          String(val).toLowerCase().includes(searchQuery.toLowerCase())
        )
      ) {
        return false;
      }

      // Column filters
      return Object.keys(filters).every((key) => {
        const filterValue = filters[key];
        if (!filterValue) return true;
        return String(row[key])
          .toLowerCase()
          .includes(filterValue.toLowerCase());
      });
    });
  }, [filteredData, filters, searchQuery]);

  // Sorting logic
  const sortedData = React.useMemo(() => {
    if (sortConfig !== null) {
      return [...filteredAndSearchedData].sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === "asc" ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === "asc" ? 1 : -1;
        }
        return 0;
      });
    }
    return filteredAndSearchedData;
  }, [filteredAndSearchedData, sortConfig]);

  // Loader
  if (loading) return <div>Loading...</div>;

  // Error Message
  if (error) return <div>Error: {error}</div>;

  // Handle column filters
  const handleFilterChange = (columnKey, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [columnKey]: value,
    }));
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={handleSearchChange}
        style={{ marginBottom: "20px", padding: "8px" }}
      />

      <div style={{ marginBottom: "10px" }}>
        {config.columns.map((col) => (
          <div
            key={col.key}
            style={{ display: "inline-block", marginRight: "10px" }}
          >
            <input
              type="text"
              placeholder={`Filter ${col.label}`}
              value={filters[col.key] || ""}
              onChange={(e) => handleFilterChange(col.key, e.target.value)}
              style={{ padding: "5px" }}
            />
          </div>
        ))}
      </div>

      <table border="1" style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            {config.columns.map((col) => (
              <th
                key={col.key}
                style={{
                  padding: "8px",
                  textAlign: "left",
                  cursor: "pointer",
                  position: "relative",
                }}
                onClick={() => sortData(col.key)}
              >
                {col.label}

                <span
                  style={{
                    position: "absolute",
                    right: "10px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    fontSize: "18px",
                    color: "#555",
                  }}
                >
                  {sortConfig?.key === col.key
                    ? sortConfig.direction === "asc"
                      ? "🔼"
                      : "🔽"
                    : "🔼"}{" "}
                </span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sortedData.map((row, index) => (
            <tr key={index}>
              {config.columns.map((col) => (
                <td key={col.key} style={{ padding: "8px" }}>
                  {row[col.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const NewTable = () => {
  const config = {
    columns: [
      { label: "ID", key: "id" },
      { label: "Name", key: "name" },
      { label: "Username", key: "username" },
      { label: "Email", key: "email" },
      { label: "Phone", key: "phone" },
    ],
    dataUrl: "https://jsonplaceholder.typicode.com/users", // Sample API URL
  };

  return (
    <div>
      <h1 className="table-header">Fetching the List of User Data</h1>
      <Table config={config} />
    </div>
  );
};

export default NewTable;
