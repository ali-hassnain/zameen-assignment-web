import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import {
  EmailIcon,
  FacebookIcon,
  LinkedinIcon,
  RedditIcon,
  TumblrIcon,
  TwitterIcon,
  ViberIcon,
  VKIcon,
  WhatsappIcon,
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  RedditShareButton,
  TumblrShareButton,
  TwitterShareButton,
  ViberShareButton,
  VKShareButton,
  WhatsappShareButton,
} from "react-share";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import ZoomOutIcon from "@mui/icons-material/ZoomOut";
import { SRLWrapper } from "simple-react-lightbox";
import Modal from "../components/Modal";
import { useGlobalContext } from "../components/Context";

function CardDetails() {
  const [singleCard, setSingleCard] = useState({});
  const [dimensions, setDimensions] = useState({ height: "50%", width: "50%" });
  const [loading, setLoading] = useState(false);

  const { modal } = useGlobalContext();

  let { id } = useParams();
  console.log("params:", id);

  const { width } = dimensions;

  const handleZoomIn = () => {
    setDimensions({ width: window.innerWidth - 200 });
  };

  const handleZoomOut = () => {
    setDimensions({ width: "50%" });
  };

  useEffect(() => {
    setLoading(true);
    async function getAuthorById() {
      try {
        const response = await fetch(`https://picsum.photos/id/${id}/info`);
        const singleCard = await response.json();
        console.log("data:", singleCard);
        if (singleCard) {
          const { author, download_url } = singleCard;
          const newSingleCard = { id, author, download_url };
          setSingleCard(newSingleCard);
        } else {
          setSingleCard(null);
        }
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }
    getAuthorById();
  }, [id]);
  if (loading) {
    return (
      <div className="loader">
        <CircularProgress />
      </div>
    );
  }

  return (
    <div className="cardDetails_box">
      {modal ? (
        <div>
          <Modal />
        </div>
      ) : null}
      <div className="cardDetails_imageAndZoom">
        <SRLWrapper className="cardDetails_imageWrapper">
          <img
            style={{ width }}
            className="cardDetails_image"
            src={singleCard.download_url}
            alt={singleCard.author}
          />
        </SRLWrapper>

        <div className="cardDetails_zoomIcons">
          <ZoomInIcon className="cardDetails_zoomIn" onClick={handleZoomIn} />
          <ZoomOutIcon
            className="cardDetails_zoomOut"
            onClick={handleZoomOut}
          />
        </div>
      </div>

      <h1 className="cardDetails_title">{singleCard.author}</h1>
      <div className="cardDetails_shareIcons">
        <FacebookShareButton
          url={singleCard.download_url}
          quote={`Hey, check out this amazing book shared by ${singleCard.author}`}
        >
          <FacebookIcon
            size={32}
            round={true}
            quote={`Hey, check out this amazing book shared by ${singleCard.author}`}
          />
        </FacebookShareButton>
        <WhatsappShareButton
          url={singleCard.download_url}
          quote={`Hey, check out this amazing book shared by ${singleCard.author}`}
        >
          <WhatsappIcon size={32} round={true} />
        </WhatsappShareButton>
        <TwitterShareButton
          url={singleCard.download_url}
          quote={`Hey, check out this amazing book shared by ${singleCard.author}`}
        >
          <TwitterIcon size={32} round={true} />
        </TwitterShareButton>
        <EmailShareButton
          url={singleCard.download_url}
          quote={`Hey, check out this amazing book shared by ${singleCard.author}`}
        >
          <EmailIcon size={32} round={true} />
        </EmailShareButton>
        <LinkedinShareButton
          url={singleCard.download_url}
          quote={`Hey, check out this amazing book shared by ${singleCard.author}`}
        >
          <LinkedinIcon size={32} round={true} />
        </LinkedinShareButton>
        <TumblrShareButton
          url={singleCard.download_url}
          quote={`Hey, check out this amazing book shared by ${singleCard.author}`}
        >
          <TumblrIcon size={32} round={true} />
        </TumblrShareButton>
        <ViberShareButton
          url={singleCard.download_url}
          quote={`Hey, check out this amazing book shared by ${singleCard.author}`}
        >
          <ViberIcon size={32} round={true} />
        </ViberShareButton>
        <RedditShareButton
          url={singleCard.download_url}
          quote={`Hey, check out this amazing book shared by ${singleCard.author}`}
        >
          <RedditIcon size={32} round={true} />
        </RedditShareButton>
        <VKShareButton
          url={singleCard.download_url}
          quote={`Hey, check out this amazing book shared by ${singleCard.author}`}
        >
          <VKIcon size={32} round={true} />
        </VKShareButton>
      </div>
    </div>
  );
}

export default CardDetails;
