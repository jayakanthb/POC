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
  const [visibleColumns, setVisibleColumns] = useState(
    config.columns.map((col) => col.key)
  );
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage] = useState(5);

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

  // Pagination Logic
  const pageData = React.useMemo(() => {
    const startIndex = (currentPage - 1) * rowsPerPage;
    return sortedData.slice(startIndex, startIndex + rowsPerPage);
  }, [sortedData, currentPage, rowsPerPage]);

  // Pagination controls
  const totalPages = Math.ceil(sortedData.length / rowsPerPage);
  const changePage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

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

  // Toggle column visibility
  const toggleColumnVisibility = (colKey) => {
    setVisibleColumns((prevVisibleColumns) =>
      prevVisibleColumns.includes(colKey)
        ? prevVisibleColumns.filter((key) => key !== colKey)
        : [...prevVisibleColumns, colKey]
    );
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
              type="checkbox"
              checked={visibleColumns.includes(col.key)}
              onChange={() => toggleColumnVisibility(col.key)}
            />
            <label>{col.label}</label>
          </div>
        ))}
      </div>

      <table border="1" style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            {config.columns.map((col) =>
              visibleColumns.includes(col.key) ? (
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
              ) : null
            )}
          </tr>
        </thead>
        <tbody>
          {pageData.map((row, index) => (
            <tr key={index}>
              {config.columns.map(
                (col) =>
                  visibleColumns.includes(col.key) && (
                    <td key={col.key} style={{ padding: "8px" }}>
                      {row[col.key]}
                    </td>
                  )
              )}
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination  */}
      <div
        style={{
          marginTop: "10px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <button
          onClick={() => changePage(currentPage - 1)}
          disabled={currentPage <= 1}
          style={{ width: "25%" }}
        >
          Previous
        </button>
        <span>{`Page ${currentPage} of ${totalPages}`}</span>
        <button
          onClick={() => changePage(currentPage + 1)}
          disabled={currentPage >= totalPages}
          style={{ width: "25%" }}
        >
          Next
        </button>
      </div>
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
    dataUrl: "https://jsonplaceholder.typicode.com/users",
  };

  return (
    <div style={{ margin: "10px 20px" }}>
      <h1 className="table-header">Fetching the List of User Data</h1>
      <Table config={config} />
    </div>
  );
};

export default NewTable;
