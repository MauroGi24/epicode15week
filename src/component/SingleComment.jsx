import { ListGroup, Button } from "react-bootstrap/";
import { useEffect, useState } from "react";
import ModalMessage from "./ModalMessage";

function SingleComment({ comments, loadComments }) {
  const [alert, setAlert] = useState(null);
  const [modal, setModal] = useState(false);

  const closeModal = () => {
    setModal(false);
  };
  
  const deleteComment = async () => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/${comments._id}`,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjhkYjRhZTFiNWY4ODAwMTU0OTU5NTAiLCJpYXQiOjE3MjA1NjI4NjIsImV4cCI6MTcyMTc3MjQ2Mn0.4KLotdLN6d5_DTdhHuJU115yFpGIVKGN5X2kFkT9GMw",
            "Content-Type": "application/json",
          },
          method: "DELETE",
        }
      );

      if (response.ok) {
        setAlert("Comment successfully deleted!");
        setModal(!false) 
        loadComments()      
        
      } else {
        setAlert("Unable to delete the comment!");
        setModal(!false);
      }
    } catch (error) {
      setAlert("General Error! Try Later");
      setModal(!false);
    }
  };
 

  // const [editingComment, setEditingComment] = useState({})
  // const [formValue, setFormValue] = useState({})

  // function EditComment({comments, loadComments}) {

  //  }

  return (
    <>
      <ListGroup className="mb-3">
        <ListGroup.Item>Score: {comments.rate}</ListGroup.Item>
        <ListGroup.Item> Review: {comments.comment}</ListGroup.Item>
        <ListGroup.Item> Author: {comments.author} </ListGroup.Item>
      </ListGroup>
      <div className="d-flex justify-content-center">
        <Button
          type="button"
          onClick={deleteComment}
          className="btn btn-danger mb-2 me-3"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-trash"
            viewBox="0 0 16 16"
          >
            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
            <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
          </svg>
        </Button>
        <Button type="button" className="btn btn-success mb-2 ms-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-pencil"
            viewBox="0 0 16 16"
          >
            <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325" />
          </svg>
        </Button>
      </div>
      <ModalMessage
        alert={alert}
        modal={modal}
        closeModal={() => closeModal()}
      />
    </>
  );
}

export default SingleComment;
