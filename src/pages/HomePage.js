import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Card from "../components/Card";
import { useHistory } from "react-router";
import { CircularProgress } from "@mui/material";
import Modal from "../components/Modal";
import { useGlobalContext } from "../components/Context";

function HomePage() {
  const { modal } = useGlobalContext();
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const history = useHistory();

  const fetchData = async () => {
    setPage((prev) => prev + 1);
    try {
      const response = await fetch(
        `https://picsum.photos/v2/list?page=${page}&limit=15`
      );
      const data = await response.json();
      if (page > 1) {
        setData((prevData) => [...prevData, ...data]);
      } else {
        setData(data);
      }
    } catch (error) {
      console.log("error:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {modal ? (
        <div>
          <Modal />
        </div>
      ) : null}
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
          {data.map((card) => (
            <div key={card.id} onClick={() => history.push(`/${card.id}`)}>
              <Card id={card.id} img={card.download_url} name={card.author} />
            </div>
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
}

export default HomePage;
