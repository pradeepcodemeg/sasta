import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';
import { clearEditUser, updateExistingUser } from '../../../store/slices/UsersSlice';

const customStyles = {
  control: (provided, state) => ({
    ...provided,
    border: state.isFocused ? '1px solid #b5b5c3' : '1px solid #e4e6ef',
    borderRadius: '4px',
    boxShadow: 'none',
    '&:hover': {
      border: '1px solid #b5b5c3',
    },
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isFocused ? '#ffffff' : '#ffffff',
    color: state.isFocused ? '#000000' : '#000000',
    '&:hover': {
      backgroundColor: '#f4fde5',
      color: '#9fc55e',
    },
  }),
};

function EditUserForm({ toggleEditUserModal, setToggleEditUserModal }) {
  const dispatch = useDispatch();
  const [usertype, setUserType] = useState(null);

  const { pending, user, error } = useSelector((state) => state.users.editUser);

  // Initialize userCredential with null
  const [userCredential, setUserCredentials] = useState(null);

  // Use a useEffect to set userCredential when user data is available
  useEffect(() => {
    if (user && toggleEditUserModal) {
      setUserCredentials(user[0]);
      setUserType(user[0].type);
    }
  }, [user]);

  // Use another useEffect to toggle the form when userCredential is available
  useEffect(() => {
    if (userCredential && toggleEditUserModal) {
      setToggleEditUserModal(true);
    } else {
      setToggleEditUserModal(false);
    }
  }, [userCredential]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'address') {
      setUserCredentials((prevCredentials) => ({
        ...prevCredentials,
        [name]: {
          ...(prevCredentials[name] || {}), 
          address_line1: value, 
        },
      }));
    } else {
      // For other fields, update directly
      setUserCredentials((prevCredentials) => ({
        ...prevCredentials,
        [name]: value,
      }));
    }
  };

  const cancelEdit = () => {
    setUserCredentials(null);
    dispatch(clearEditUser());
    setToggleEditUserModal(false);
  };

  
  const submitUpdatedUser = (e) => {
    e.preventDefault()
    const form = new FormData
    form.append('action', 'update_user')
    form.append('user_id', userCredential.id)
    form.append('fullname', userCredential.fullname)
    form.append('password', userCredential.password)
    form.append('profile_pic', '')
    form.append('type', usertype)
    // if (userCredential && typeof userCredential.address === 'object') {
    //   if ('address_line1' in userCredential.address) {
    //     form.append('address.address_line1', userCredential.address.address_line1);
    //   }
    // }
    if(userCredential){
    dispatch(updateExistingUser(form))
    setToggleEditUserModal(p=>!p)
    }
  }

  const UserTypeoptions = [
    { value: 'Individual', label: 'Individual' },
    { value: 'Business', label: 'Business' },
  ];
  return (
    <>
      <div className={`main-popup adduser-popup ${toggleEditUserModal ? 'pop-open' : 'pop-close'}`}>
        <div className="lm-outer">
          <div className="lm-inner">
            <div className="popup-inner">
              <div className="popup-header">
                <div className="popup-heading">
                  <h3>Edit User</h3>
                </div>
              </div>
              <div className="popup-body">
                <div className="form-main">
                  <div className="mb-3 fv-row">
                    <label className="form-label">Full Name <i>*</i></label>
                    <input
                      type="text"
                      name="fullname"
                      value={userCredential ? userCredential.fullname : ''}
                      onChange={handleChange}
                      className="form-control"
                      placeholder="Enter Full Name"
                    />
                  </div>
                  <div className="mb-3 fv-row">
                    <label className="form-label">Phone Number <i>*</i></label>
                    <input
                      type="text"
                      name="mobile"
                      value={userCredential ? userCredential.mobile : ''}
                      onChange={handleChange}
                      className="form-control"
                      placeholder="Enter Phone Number"
                    />
                  </div>
                  {/* <div className="mb-3 fv-row">
                    <label className="form-label">Email <i>*</i></label>
                    <input
                      type="email"
                      name="email"
                      value={userCredential ? userCredential.email : ''}
                      onChange={handleChange}
                      className="form-control"
                      placeholder="Enter Email Address"
                    />
                  </div> */}
                  {/* <div className="mb-3 fv-row">
                    <label className="form-label">Address <i>*</i></label>
                    <textarea
                      value={userCredential ? userCredential.address?.address_line1 : ''}
                      name="address"
                      onChange={handleChange}
                      className="form-control"
                      rows="1"
                      placeholder="Enter Your Address"
                    />
                  </div> */}
                  <div className="mb-3 fv-row">
                    <label className="form-label">Select User Type <i>*</i></label>
                    <div className="slectbx-singel">
                      <p>{userCredential ? userCredential.type : 'na'}</p>
                      <Select
                      value={userCredential ? userCredential.type : ''}
                        styles={customStyles}
                        placeholder={'Select User Type'}
                        onChange={(selectedOption) => {
                          setUserType(selectedOption.value);
                        }}
                        options={UserTypeoptions}
                      />
                    </div>
                  </div>
                  <div className="d-flex justify-content-end mt-4">
                    <button type="button" 
                    
                    onClick={submitUpdatedUser}
                    className="btn btn-shadow btn-primary me-2">
                      Save
                    </button>
                    <button
                      type="button"
                      onClick={cancelEdit}
                      className="btn btn-shadow btn-secondary"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="overlay" onClick={cancelEdit}></div>
      </div>
    </>
  );
}

export default EditUserForm;
