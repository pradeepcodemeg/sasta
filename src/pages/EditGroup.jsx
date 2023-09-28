import React from "react";
import Breadcrumb from "../components/common/breadcrumb/Breadcrumb";
import EditGroupUserList from "../components/users/group/EditGroupUserList";

const  EditGroup = () => {
  return (
    <>
      <main>
        <Breadcrumb data={"edit-group"} />
        <div className="page-content">
          <div className="row">
            <div className="col-md-12">
              <div className="card mb-4">
                <div className="card-body">
                <div className='form-main'>
                <div className="row">
            <div className="col-md-6">
                  <div className="mb-3 fv-row">
                    <label className="form-label">Group Name <i>*</i></label>
                    <input type="text" name="Date" value="" className="form-control" placeholder="Enter Group Name" />
                </div>
                </div>
                </div>
                </div>
                </div>
              </div>
                 <EditGroupUserList />
                 <div className="card mt-4">
                <div className="card-body">
                <div className="d-flex justify-content-end">
                    <button type="button" className="btn btn-shadow btn-primary me-2">Update</button>
                <button type="button" className="btn btn-shadow btn-secondary">Cancel</button></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};


export default EditGroup