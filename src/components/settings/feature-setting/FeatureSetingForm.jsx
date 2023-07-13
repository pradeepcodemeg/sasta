import React, { useState } from 'react'
import Select from 'react-select';
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

const FeatureSetingForm = () => {

  const [deliveryArea, setDeliveryAreaType] = useState(null)
  const [logoDisplay, setLogoDisplayType] = useState(null)
  const [displayNumberOption, setDisplayNumberOption] = useState('Whatsapp')
  
  const DeliveryAreaoptions = [
    { value: 'By Radius', label: 'By Radius' },
    { value: 'By Area', label: 'By Area' },
  ];
  const LogoDisplayoptions = [
    { value: 'Logo', label: 'Logo' },
    { value: 'Name', label: 'Name' },
  ];


  return (
    <>
      <div className='main-form'>
        <div className='prdt-inr'>
          <div className="form-heading">
            <h3>Feature Setting</h3>
          </div>
          <div className='row'>
            <div className='col-md-12'>
              <div className="mb-3 fv-row">
                <div className="toglwth-listng">
                  <ul>
                    <li>
                      <div className='toglwth-content'>
                        <p>Store</p>
                        <div className="svcrd-togl">
                          <div className="tgl-sld">
                            <label>
                              <input type="checkbox" />
                              <span>
                                <i></i>
                              </span>
                            </label>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className='toglwth-content'>
                        <p>Recommended Products</p>
                        <div className="svcrd-togl">
                          <div className="tgl-sld">
                            <label>
                              <input type="checkbox" />
                              <span>
                                <i></i>
                              </span>
                            </label>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className='toglwth-content'>
                        <p>Repeat Order</p>
                        <div className="svcrd-togl">
                          <div className="tgl-sld">
                            <label>
                              <input type="checkbox" />
                              <span>
                                <i></i>
                              </span>
                            </label>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className='toglwth-content'>
                        <p>Delivery Slot</p>
                        <div className="svcrd-togl">
                          <div className="tgl-sld">
                            <label>
                              <input type="checkbox" />
                              <span>
                                <i></i>
                              </span>
                            </label>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className='toglwth-content'>
                        <p>Loyalty Program </p>
                        <div className="svcrd-togl">
                          <div className="tgl-sld">
                            <label>
                              <input type="checkbox" />
                              <span>
                                <i></i>
                              </span>
                            </label>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className='toglwth-content'>
                        <p>Pickup address </p>
                        <div className="svcrd-togl">
                          <div className="tgl-sld">
                            <label>
                              <input type="checkbox" />
                              <span>
                                <i></i>
                              </span>
                            </label>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className='toglwth-content'>
                        <p>Delivery</p>
                        <div className="svcrd-togl">
                          <div className="tgl-sld">
                            <label>
                              <input type="checkbox" />
                              <span>
                                <i></i>
                              </span>
                            </label>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className='toglwth-content'>
                        <p>Mobile Notification</p>
                        <div className="svcrd-togl">
                          <div className="tgl-sld">
                            <label>
                              <input type="checkbox" />
                              <span>
                                <i></i>
                              </span>
                            </label>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className='toglwth-content'>
                        <p>Email NotiFIcation</p>
                        <div className="svcrd-togl">
                          <div className="tgl-sld">
                            <label>
                              <input type="checkbox" />
                              <span>
                                <i></i>
                              </span>
                            </label>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className='toglwth-content'>
                        <p>COD</p>
                        <div className="svcrd-togl">
                          <div className="tgl-sld">
                            <label>
                              <input type="checkbox" />
                              <span>
                                <i></i>
                              </span>
                            </label>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className='toglwth-content'>
                        <p>Social Logins</p>
                        <div className="svcrd-togl">
                          <div className="tgl-sld">
                            <label>
                              <input type="checkbox" />
                              <span>
                                <i></i>
                              </span>
                            </label>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className='toglwth-content'>
                        <p>Email Mandatory For Place Order </p>
                        <div className="svcrd-togl">
                          <div className="tgl-sld">
                            <label>
                              <input type="checkbox" />
                              <span>
                                <i></i>
                              </span>
                            </label>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className='toglwth-content'>
                        <p>Enable Review & Rating</p>
                        <div className="svcrd-togl">
                          <div className="tgl-sld">
                            <label>
                              <input type="checkbox" />
                              <span>
                                <i></i>
                              </span>
                            </label>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className='toglwth-content'>
                        <p>Map enable in home page</p>
                        <div className="svcrd-togl">
                          <div className="tgl-sld">
                            <label>
                              <input type="checkbox" />
                              <span>
                                <i></i>
                              </span>
                            </label>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className='toglwth-content'>
                        <p>App Home Page Title</p>
                        <div className="svcrd-togl">
                          <div className="tgl-sld">
                            <label>
                              <input type="checkbox" />
                              <span>
                                <i></i>
                              </span>
                            </label>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className='toglwth-content'>
                        <p>App Home Page Sub Title</p>
                        <div className="svcrd-togl">
                          <div className="tgl-sld">
                            <label>
                              <input type="checkbox" />
                              <span>
                                <i></i>
                              </span>
                            </label>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className='toglwth-content'>
                        <p>Show COD Payment status</p>
                        <div className="svcrd-togl">
                          <div className="tgl-sld">
                            <label>
                              <input type="checkbox" />
                              <span>
                                <i></i>
                              </span>
                            </label>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className='toglwth-content'>
                        <p>Show Age Restriction In Category</p>
                        <div className="svcrd-togl">
                          <div className="tgl-sld">
                            <label>
                              <input type="checkbox" />
                              <span>
                                <i></i>
                              </span>
                            </label>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className='toglwth-content'>
                        <p>Round of Amount in Invoice</p>
                        <div className="svcrd-togl">
                          <div className="tgl-sld">
                            <label>
                              <input type="checkbox" />
                              <span>
                                <i></i>
                              </span>
                            </label>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className='toglwth-content'>
                        <p>Show PWA App Popup</p>
                        <div className="svcrd-togl">
                          <div className="tgl-sld">
                            <label>
                              <input type="checkbox" />
                              <span>
                                <i></i>
                              </span>
                            </label>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div className='prdt-inr'>
          <div className="form-heading">
            <h3>Other Setting</h3>
          </div>
          <div className='row'>
            <div className='col-md-4'>
              <div className="mb-3 fv-row">
                <label className="form-label">Delivery Area <i>*</i></label>
                <div className='slectbx-singel'>
                  <Select styles={customStyles} placeholder={'Select Delivery Area'} onChange={(e) => { setDeliveryAreaType(e.value) }} options={DeliveryAreaoptions} />
                </div>
              </div>
            </div>
            <div className='col-md-4'>
              <div className="mb-3 fv-row">
                <label className="form-label">Google Analytics Key <i>*</i></label>
                <div className='slectbx-singel'>
                  <input type="text" name="Date" className="form-control" placeholder="Enter Google Analytics Key" />
                </div>
              </div>
            </div>
            <div className='col-md-4'>
              <div className="mb-3 fv-row">
                <label className="form-label">Facebook Pixel key <i>*</i></label>
                <div className='slectbx-singel'>
                  <input type="text" name="Date" className="form-control" placeholder="Enter Facebook Pixel key" />
                </div>
              </div>
            </div>
            <div className='col-md-4'>
              <div className="mb-3 fv-row">
                <label className="form-label">Google Id <i>*</i></label>
                <div className='slectbx-singel'>
                  <input type="text" name="Date" className="form-control" placeholder="Enter Google Id" />
                </div>
              </div>
            </div>
            <div className='col-md-4'>
              <div className="mb-3 fv-row">
                <label className="form-label">Facebook Id <i>*</i></label>
                <div className='slectbx-singel'>
                  <input type="text" name="Date" className="form-control" placeholder="Enter Facebook Id" />
                </div>
              </div>
            </div>
            <div className='col-md-4'>
              <div className="mb-3 fv-row">
                <label className="form-label">Google Analytics Pixel key <i>*</i></label>
                <div className='slectbx-singel'>
                  <input type="text" name="Date" className="form-control" placeholder="Enter Google Analytics Pixel key" />
                </div>
              </div>
            </div>
            <div className='col-md-4'>
              <div className="mb-3 fv-row">
                <label className="form-label">Products title on home page <i>*</i></label>
                <div className='slectbx-singel'>
                  <input type="text" name="Date" className="form-control" placeholder="Enter Products title on home page" />
                </div>
              </div>
            </div>
            <div className='col-md-4'>
              <div className="mb-3 fv-row">
                <label className="form-label">Number of categories on home page <i>*</i></label>
                <div className='slectbx-singel'>
                  <input type="text" name="Date" className="form-control" placeholder="Enter Number of categories on home page" />
                </div>
              </div>
            </div>
            <div className='col-md-4'>
              <div className="mb-3 fv-row">
                <label className="form-label">Recommended products on home page <i>*</i></label>
                <div className='slectbx-singel'>
                  <input type="text" name="Date" className="form-control" placeholder="Enter Recommended products on home page" />
                </div>
              </div>
            </div>
            <div className='col-md-4'>
              <div className="mb-3 fv-row">
                <label className="form-label">Enter Home Page Title <i>*</i></label>
                <div className='slectbx-singel'>
                  <textarea class="form-control" rows="1" name="address" placeholder="Enter Home Page Title..."></textarea>
                </div>
              </div>
            </div>
            <div className='col-md-4'>
              <div className="mb-3 fv-row">
                <label className="form-label">Enter Home Page Sub Title <i>*</i></label>
                <div className='slectbx-singel'>
                  <textarea class="form-control" rows="1" name="address" placeholder="Enter Home Page Sub Title..."></textarea>
                </div>
              </div>
            </div>
            <div className='col-md-4'>
              <div className="mb-3 fv-row">
                <label className="form-label">Display store logo or name <i>*</i></label>
                <div className='slectbx-singel'>
                  <Select styles={customStyles} placeholder={'Select Store Logo Type'} onChange={(e) => { setLogoDisplayType(e.value) }} options={LogoDisplayoptions} />
                </div>
              </div>
            </div>
            <div className='col-md-6'>
              <div className="mb-3 fv-row">
                <label className="form-label">Display Number On App Home Page <i>*</i></label>
                <div className="mp-flex">
                  <div onClick={()=>{setDisplayNumberOption('Whatsapp')}} className="map-inerflx mpwdth-50">
                    <div className="rdobtn-card">
                      <label>
                        <input type="radio" name="Activity" />
                        <span>
                          <em></em>
                          <i>WhatsApp</i>
                        </span>
                      </label>
                    </div>
                  </div>
                  <div onClick={()=>{setDisplayNumberOption('Phone')}} className="map-inerflx mpwdth-50">
                    <div className="rdobtn-card">
                      <label>
                        <input type="radio" name="Activity" />
                        <span>
                          <em></em>
                          <i>Phone</i>
                        </span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {displayNumberOption === 'Whatsapp' ?
            <>
            <div className='col-md-6'>
              <div className="mb-3 fv-row">
                <label className="form-label">WhatsApp Number <i>*</i></label>
                <input type="text" name="Date" className="form-control" placeholder="Enter WhatsApp Number" />
              </div>
            </div>
            </>
            :
            <>
            <div className='col-md-6'>
              <div className="mb-3 fv-row">
                <label className="form-label">Phone Number <i>*</i></label>
                <input type="text" name="Date" className="form-control" placeholder="Enter Phone Number" />
              </div>
            </div>
            </>
          }
          </div>
        </div>




        <div className="d-flex justify-content-end mt-3 mb-3">
          <button type="button" className="btn btn-shadow btn-secondary me-2">Cancel</button>
          <button type="button" className="btn btn-shadow btn-primary">Save</button>
        </div>
      </div>
    </>
  )
}

export default FeatureSetingForm