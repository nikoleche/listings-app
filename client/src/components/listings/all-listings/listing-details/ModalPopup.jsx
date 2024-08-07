import { useEffect, useRef, useState } from "react";

import listingsAPI from "../../../../api/listingsAPI";

export default function ModalPopup(props) {
  const [displayModal, setDisplayModal] = useState(false);

  async function listingDeleteHandler() {
    await listingsAPI.removeListing(props.listingId);
    setDisplayModal(true);
    navigate("/");
  }

  return (
    <>
      {/* Delete modal */}
      <button
        className="btn btn-danger"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Delete
      </button>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Deletion
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">{`Delete listing "${props.listing.title}"?`}</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-danger"
                onClick={listingDeleteHandler}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
