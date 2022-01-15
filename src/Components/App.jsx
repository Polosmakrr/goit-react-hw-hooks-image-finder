import React, { useState,useEffect } from "react";
import Searchbar from "./Searchbar/Searchbar";
import ImageGallery from "./ImageGallery/ImageGallery";
import Button from "./Button/Button";
import Modal from "./Modal/Modal";
import Loader from "react-loader-spinner";
import fetchPick from "./fetch";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export default function App() {
  const [arrayList, setArrayList] = useState([]);
  const [queryName, setQueryName] = useState('');
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [largeImg, setLargeImg] = useState('');

  
  
  useEffect(() => {
    if (!queryName) {
      return
    }
  
    setLoading(true);

    fetchPick(queryName, page)
      .then((newArray) => {
        if (newArray.total === 0) {
          toast.warn(`Ничего не найдено`);
        } if(newArray) {
          setArrayList([...arrayList, ...newArray.hits])
        }
        if (page>1) {
           window.scrollTo({ top: document.body.clientHeight, behavior: "smooth" });
        }
      })
      .catch((error) => toast.error("Oops, something went wrong"))
      .finally(() => setLoading(false));
  }, [page, queryName]);

  
  const getLargeImageForModal = (data) => {
    toggleModal();
    setLargeImg(data);
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleFormSubmit = (data) => {
    setQueryName(data);
    setArrayList([]);
    setPage(1);
  };

  const handleClikLoadMore = () => {
    setPage(page + 1);
  };

    return (
      <div>
        <Searchbar onSubmit={handleFormSubmit} />
        {loading && (
          <Loader type="ThreeDots" color="#00BFFF" height={100} width={100} />
        )}
        {arrayList.length !== 0 && (
          <ImageGallery
            modalImageLoad={getLargeImageForModal}
            arrayQueryList={arrayList}
            onToggleMenu={toggleModal}
          />
        )}

        {arrayList.length !== 0 && (
          <Button onClick={handleClikLoadMore} />
        )}
        {showModal && (
          <Modal
            onToggleMenu={toggleModal}
            modalImage={largeImg}
          />
        )}
        <ToastContainer />
      </div>
    );
  
}

