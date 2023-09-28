import React from "react";
import Breadcrumb from "../components/common/breadcrumb/Breadcrumb";
import AddGroupUserTableList from "../components/users/group/AddGroupUserTableList";

const AddGroup = () => {
  return (
    <>
      <main>
        <Breadcrumb data={"add-group"} />
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
                <AddGroupUserTableList />
                <div className="card mt-4">
                <div className="card-body">
                <div className="d-flex justify-content-end">
                    <button type="button" className="btn btn-shadow btn-primary me-2">Save</button>
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

export default AddGroup;
