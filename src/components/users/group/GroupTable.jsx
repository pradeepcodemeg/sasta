import React, { useState } from "react";
import { Link } from "react-router-dom";
const orders = [
  {
    groupId: 1254,
    groupName: "Group 1",
    totalMember: 8,
    createdDateTime: "2023-06-07 12:30 PM",
  },
  {
    groupId: 1255,
    groupName: "Group 2",
    totalMember: 12,
    createdDateTime: "2023-06-07 12:30 PM",
  },
  {
    groupId: 1256,
    groupName: "Group 3",
    totalMember: 9,
    createdDateTime: "2023-06-07 12:30 PM",
  },
  {
    groupId: 1257,
    groupName: "Group 4",
    totalMember: 16,
    createdDateTime: "2023-06-07 12:30 PM",
  },
  {
    groupId: 1258,
    groupName: "Group 5",
    totalMember: 20,
    createdDateTime: "2023-06-07 12:30 PM",
  },
];

// console.log(orders)

const GroupTable = () => {
  return (
    <>
      <div className="responsive-table">
        <table className="table table-row-dashed">
          <thead>
            <tr className="fw-bolder text-muted">
              <th className="w-10px">#</th>
              <th className="w-50px">Group ID</th>
              <th className="w-100px">Group Name</th>
              <th className="w-100px text-center">Created Date</th>
              <th className="w-100px text-center">Total Members</th>
              <th className="w-175px text-end">Action</th>
            </tr>
          </thead>
          <tbody className="">
            {orders &&
              orders.map((item, index) => {
                return (
                  <tr key={item.userId} className="">
                    <td className="">{index + 1}</td>
                    <td className="">{item.groupId}</td>
                    <td className="">
                      <p className="whtspc-nowrp">{item.groupName}</p>
                    </td>
                    <td className="text-center">{item.createdDateTime}</td>
                    <td className="text-center">{item.totalMember}</td>
                    <td className="">
                      <div className="d-flex justify-content-end align-items-center flex-shrink-0">
                        <div className="svcrd-togl me-2">
                          <div className="tgl-sld">
                            <label>
                              <input type="checkbox" />
                              <span>
                                <i></i>
                              </span>
                            </label>
                          </div>
                        </div>
                        <Link
                          to="/edit-group"
                          className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-2"
                        >
                          <span className="svg-icon svg-icon-3">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <path
                                opacity="0.3"
                                d="M21.4 8.35303L19.241 10.511L13.485 4.755L15.643 2.59595C16.0248 2.21423 16.5426 1.99988 17.0825 1.99988C17.6224 1.99988 18.1402 2.21423 18.522 2.59595L21.4 5.474C21.7817 5.85581 21.9962 6.37355 21.9962 6.91345C21.9962 7.45335 21.7817 7.97122 21.4 8.35303ZM3.68699 21.932L9.88699 19.865L4.13099 14.109L2.06399 20.309C1.98815 20.5354 1.97703 20.7787 2.03189 21.0111C2.08674 21.2436 2.2054 21.4561 2.37449 21.6248C2.54359 21.7934 2.75641 21.9115 2.989 21.9658C3.22158 22.0201 3.4647 22.0084 3.69099 21.932H3.68699Z"
                                fill="black"
                              ></path>
                              <path
                                d="M5.574 21.3L3.692 21.928C3.46591 22.0032 3.22334 22.0141 2.99144 21.9594C2.75954 21.9046 2.54744 21.7864 2.3789 21.6179C2.21036 21.4495 2.09202 21.2375 2.03711 21.0056C1.9822 20.7737 1.99289 20.5312 2.06799 20.3051L2.696 18.422L5.574 21.3ZM4.13499 14.105L9.891 19.861L19.245 10.507L13.489 4.75098L4.13499 14.105Z"
                                fill="black"
                              ></path>
                            </svg>
                          </span>
                        </Link>
                        
                        <button className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm  me-2">
                          <span class="svg-icon svg-icon-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              opacity="0.3"
                            >
                              <path d="M5 9C5 8.44772 5.44772 8 6 8H18C18.5523 8 19 8.44772 19 9V18C19 19.6569 17.6569 21 16 21H8C6.34315 21 5 19.6569 5 18V9Z"></path>
                              <path
                                opacity="0.5"
                                d="M5 5C5 4.44772 5.44772 4 6 4H18C18.5523 4 19 4.44772 19 5V5C19 5.55228 18.5523 6 18 6H6C5.44772 6 5 5.55228 5 5V5Z"
                              ></path>
                              <path
                                opacity="0.5"
                                d="M9 4C9 3.44772 9.44772 3 10 3H14C14.5523 3 15 3.44772 15 4V4H9V4Z"
                              ></path>
                            </svg>
                          </span>
                        </button>
                        <Link to="/push-notification-list"
                          class="btn btn-sm btn-icon btn-bg-light btn-active-color-primary"
                        >
                          <span class="svg-icon svg-icon-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <rect
                                opacity="0.5"
                                x="18"
                                y="13"
                                width="13"
                                height="2"
                                rx="1"
                                transform="rotate(-180 18 13)"
                                fill="black"
                              ></rect>
                              <path
                                d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z"
                                fill="black"
                              ></path>
                            </svg>
                          </span>
                        </Link>
                      </div>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default GroupTable;
