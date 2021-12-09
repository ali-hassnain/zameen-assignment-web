import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Card from "../components/Card";
import { useHistory } from "react-router";
import { CircularProgress } from "@mui/material";

function HomePage() {
  const [data, setData] = useState([]);
  const [error, setError] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const history = useHistory();

  const fetchData = async () => {
    setPage((prev) => prev + 1);
    try {
      const response = await fetch(
        `https://picsum.photos/v2/list?page=${page}&limit=15`
      );
      const data = await response.json();

      console.log("page:", page);
      if (page > 1) {
        setData((prevData) => [...prevData, ...data]);
      } else {
        setData(data);
        console.log("data:", data);
      }

      setLoading(false);
    } catch (error) {
      setError(error);
      console.log("error", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <InfiniteScroll
        dataLength={data.length}
        next={fetchData}
        hasMore={true}
        loader={
          <div className="loader">
            <CircularProgress />
          </div>
        }
      >
        <div style={{ marginTop: 80 }}>
          {data.map((card, index) => (
            <div onClick={() => history.push(`/${card.id}`)}>
              <Card id={card.id} img={card.download_url} name={card.author} />
            </div>
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
}

export default HomePage;
