import React, { useEffect, useState } from "react";
import { useGlobalContext } from "./Context";
import CloseIcon from "@mui/icons-material/Close";

const Modal = ({ show }) => {
  const { setModal } = useGlobalContext();
  const [data, setData] = useState({});

  useEffect(() => {
    let id = Math.floor(Math.random() * 1000);
    console.log("id:", id);
    async function getAuthorById() {
      try {
        const response = await fetch(`https://picsum.photos/id/${id}/info`);
        const data = await response.json();
        console.log("data:", data);
        if (data) {
          const { author, download_url } = data;
          const newData = { id, author, download_url };
          setData(newData);
        } else {
          setData(null);
        }
      } catch (error) {
        console.log(error);
      }
    }
    getAuthorById();
  }, []);
  return (
    <div>
      <section className="modal_section">
        <CloseIcon
          className="modal_closeButton"
          type="button"
          onClick={() => setModal(false)}
        >
          Close
        </CloseIcon>
        <img
          className="modal_image"
          src={data.download_url}
          alt={data.author}
        />
        <h1 className="modal_text">{data.author} says Hi 👋</h1>
      </section>
    </div>
  );
};
export default Modal;
