import { useCallback, useEffect, useRef, useState } from "react";

import TransactionData from "../data/transactions.json";
import styles from "../styles/Table.module.css";
import useDebounce from "../hooks/useDebounce";

const Table = ({ account, search }: TableProps) => {
  const [data, setData] = useState<TableListProps[]>([]);
  const [allData, setAllData] = useState<TableListProps[]>([]);
  const tableRef = useRef<HTMLTableElement | null>(null);

  const debouncedSearch = useDebounce(search, 300);

  const filterData = useCallback(() => {
    const filteredData = (TransactionData as Data)[account].filter((item) =>
      Object.values(item).some((val) =>
        val.toString().toLowerCase().includes(debouncedSearch.toLowerCase())
      )
    );
    setAllData(filteredData);
    setData(filteredData.slice(0, 10));
  }, [account, debouncedSearch]);

  const loadMoreData = useCallback(() => {
    const newData = allData.slice(data.length, data.length + 10);
    setData((prevData) => [...prevData, ...newData]);
  }, [allData, data.length]);

  useEffect(() => {
    filterData();
  }, [account, debouncedSearch, filterData]);

  useEffect(() => {
    const handleScroll = () => {
      if (
        tableRef.current &&
        tableRef.current.getBoundingClientRect().bottom <= window.innerHeight
      ) {
        loadMoreData();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [loadMoreData]);

  return (
    <table className={styles.table} ref={tableRef}>
      <thead>
        <tr>
          <th scope="col">Typ</th>
          <th scope="col">Data</th>
          <th scope="col">Opis</th>
          <th scope="col">Kategoria</th>
          <th scope="col">Kwota</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.type}</td>
            <td>{item.date}</td>
            <th scope="row">{item.description}</th>
            <td>{item.category}</td>
            <th scope="row">
              <span>{Math.abs(item.amount).toFixed(2)}</span>
              {account === "4361 6019 6525 1234" ? " PLN" : " EUR"}
            </th>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
