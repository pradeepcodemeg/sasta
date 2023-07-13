// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import logoLg from '../../../assets/images/logo-lg.png';
// import logoSm from '../../../assets/images/logo-sm.png';

// const Sidebar = () => {
//   const [activeDropdown, setActiveDropdown] = useState(null);

//   const handleDropdownClick = (dropdownId) => {
//     if (activeDropdown === dropdownId) {
//       setActiveDropdown(null); // Close the dropdown if it's already open
//     } else {
//       setActiveDropdown(dropdownId); // Open the clicked dropdown
//     }
//   };

//   const toggle = () =>{
//     document.body.classList.toggle("sidebar-collapse")
//   }

//   return (
//     <>
//     <aside>
//         <div className="sidebar-top">
//         <div className="navbar-brand-box">
//         <a className="logo logo-dark" href="/">
//         <span className="logo-sm">
//         <img src={logoSm} />
//         </span>
//         <span className="logo-lg">
//         <img src={logoLg} />
//         </span>
//         </a>
//         </div>
//          <div className="navmenu-sidbar"><span className="nav-menu" onClick={toggle}><i className="fa fa-bars" aria-hidden="true"></i></span></div>
//          </div>
//     <div className="sidebar">
//     <div className="sidebar-inner">
//       <ul className="menu-list">
//       <li className="menu-item">
//           <Link to={'/'} className="menu-link" onClick={() => handleDropdownClick(1)}>
//           <span className="menu-icon"><i className="fa fa-tachometer" aria-hidden="true"></i></span>
//           <span className="menu-title">Home</span>
//             </Link>
//       </li>
//       <li className="menu-item">
//         <Link to={'/user'} className="menu-link"  onClick={() => handleDropdownClick(2)}>
//           <span className="menu-icon"><i className="fa fa-user-o" aria-hidden="true"></i></span>
//           <span className="menu-title">User</span></Link>
//         </li>
//         <li className="menu-item">
//           <span  className="menu-link" onClick={() => handleDropdownClick(3)}>
//           <span className="menu-icon"><i className="fa fa-file-text-o" aria-hidden="true"></i></span>
//           <span className="menu-title">Order</span>
//            </span>
//           {activeDropdown === 3 && (
//             <ul className="dropdown sub-menu">
//               <li className="menu-item">
//                 <Link to={'/order-list'} className="menu-link">
//                  <span className="menu-title">Order List</span> 
//                 </Link>
//                 </li>
//               <li className="menu-item">
//                 <Link to={'/refund-order'} className="menu-link">
//               <span className="menu-title">Refund Order</span>
//                 </Link>
//               </li>
//             </ul>
//           )}
//         </li>
//         <li className="menu-item">
//           <span  className="menu-link" onClick={() => handleDropdownClick(4)}>
//           <span className="menu-icon"><i className="fa fa-cube" aria-hidden="true"></i></span>
//           <span className="menu-title">Manage Grocery</span>
//           </span>
//           {activeDropdown === 4 && (
//            <ul className="dropdown sub-menu">
//            <li className="menu-item">
//              <Link to={'/'} className="menu-link">
//               <span className="menu-title">Category</span> 
//              </Link>
//              </li>
//            <li className="menu-item">
//              <Link to={'/'} className="menu-link">
//                 <span className="menu-title">Sub Category</span>
//              </Link>
//            </li>
//            <li className="menu-item">
//              <Link to={'/'} className="menu-link">
//                 <span className="menu-title">Products</span>
//              </Link>
//            </li>
//            <li className="menu-item">
//              <Link to={'/'} className="menu-link">
//                 <span className="menu-title">Bulk Import Export</span>
//              </Link>
//            </li>
//            <li className="menu-item">
//              <Link to={'/'} className="menu-link">
//                 <span className="menu-title">Upload Inventory Images</span>
//              </Link>
//            </li>
//            <li className="menu-item">
//              <Link to={'/'} className="menu-link">
//                 <span className="menu-title">Inventory Stock Settings</span>
//              </Link>
//            </li>
//            <li className="menu-item">
//              <Link to={'/'} className="menu-link">
//                 <span className="menu-title">Out of Stock variants</span>
//              </Link>
//            </li>
//          </ul>
//           )}
//         </li>
//         <li className="menu-item">
//         <span  className="menu-link" onClick={() => handleDropdownClick(5)}>
//           <span className="menu-icon"><i className="fa fa-cog" aria-hidden="true"></i></span>
//           <span className="menu-title">Settings</span>
//           </span>
//           {activeDropdown === 5 && (
//             <ul className="dropdown sub-menu">
//               <li className="menu-item">
//              <Link to={'/'} className="menu-link">
//               <span className="menu-title">134</span> 
//              </Link>
//              </li>
//            <li className="menu-item">
//              <Link to={'/'} className="menu-link">
//            <span className="menu-title">135</span>
//              </Link>
//            </li>
//             </ul>
//           )}
//         </li>
//         <li className="menu-item">
//           <Link to={'/'} className="menu-link" onClick={() => handleDropdownClick(6)}>
//           <span className="menu-icon"><i className="fa fa-sign-out" aria-hidden="true"></i></span>
//           <span className="menu-title">Logout</span>
//             </Link>
//       </li>
//       </ul>
//     </div>
//     </div>
//     </aside>
//     </>
//   );
// };

// export default Sidebar;

// import React, { useState } from "react";
// import { Link, useLocation } from "react-router-dom";
// import logoLg from "../../../assets/images/logo-lg.png";
// import logoSm from "../../../assets/images/logo-sm.png";

// const Sidebar = () => {
//   const location = useLocation();
//   const routeActive = location.pathname;
//   const toggle = () => {
//     document.body.classList.toggle("sidebar-collapse");
//   };

//   const sidebarCategories = [
//     {
//       title: "Dashboard",
//       icon: "fa fa-tachometer",
//       url: "/",
//     },
//     {
//       title: "User",
//       icon: "fa fa-user-o",
//       url: "/user",
//     },
//     {
//       title: "Order",
//       icon: "fa fa-cube",
//       url: "/order",
//       subcategories: [
//         {
//           title: "Order List",
//           icon: "",
//           url: "/order-list",
//         },
//         {
//           title: "Refund Order List",
//           icon: "",
//           url: "/refund-order",
//         },
//       ],
//     },
//     {
//       title: "Manage Grocery",
//       icon: "fa fa-product-hunt",
//       url: "/manage-grocery",
//       subcategories: [
//         {
//           title: "Category",
//           icon: "",
//           url: "/category",
//         },
//         {
//           title: "Sub Category",
//           icon: "",
//           url: "/sub-category",
//         },
//         {
//           title: "Products",
//           icon: "bx bx-list-ul",
//           url: "/products",
//         },
//         {
//           title: "Bulk Import Export",
//           icon: "",
//           url: "/bulk-import-export",
//         },
//         {
//           title: "Upload Inventory Images",
//           icon: "",
//           url: "/upload-inventory-images",
//         },
//         {
//           title: "Inventory Stock Settings",
//           icon: "",
//           url: "/inventory-stock-settings",
//         },
//         {
//           title: "Out of Stock Variants",
//           icon: "",
//           url: "/out-of-stock-variants",
//         },
//       ],
//     },
//     {
//       title: "Logout",
//       icon: "fa fa-sign-out",
//       url: "/login",
//     },
//   ];
//   const [activeCategory, setActiveCategory] = useState(null);

//   const handleCategoryClick = (index) => {
//     setActiveCategory((prevIndex) => (prevIndex === index ? null : index));
//   };

//   const isSubcategoryActive = (subcategoryUrl) => {
//     return routeActive.includes(subcategoryUrl);
//   };

//   return (
//     <aside className="h-full shadow-xl border-r border-slate-500/9 z-50">
//       <div className="sidebar-inner">
//         <div className="sidenav-menu">
//           {sidebarCategories.map((category, index) => (
//             <div key={index} className={`main-menu`}>
//               <div
//                 className={`flex-menu ${category.subcategories &&
//                   category.subcategories.some((subcategory) =>
//                     isSubcategoryActive(subcategory.url)
//                   )
//                   ? "bg-green-500"
//                   : "bg-whit"
//                 } menuttl-main`}
//                 onClick={() => handleCategoryClick(index)}
//               >
//                 <div
//                   className={`flex items-center gap-2 ${
//                     category.subcategories &&
//                     category.subcategories.some((subcategory) =>
//                       isSubcategoryActive(subcategory.url)
//                     )
//                       ? "bg-green-500"
//                       : "bg-whit"
//                   }`}
//                 >
//                   {category.subcategories ? (
//                     <div
//                       className={`menu-title ${
//                         category.subcategories &&
//                         category.subcategories.some((subcategory) =>
//                           isSubcategoryActive(subcategory.url)
//                         )
//                           ? "text-green"
//                           : "text-black"
//                       }`}
//                     >
//                       <span className="menu-icon">
//                         <i
//                           className={`${category.icon} ${
//                             category.subcategories &&
//                             category.subcategories.some((subcategory) =>
//                               isSubcategoryActive(subcategory.url)
//                             )
//                               ? "text-green"
//                               : "text-black"
//                           }`}
//                         ></i>
//                       </span>
//                       {category.title}
//                       {category.subcategories && (
//                         <span className="menu-arrow">
//                           <i
//                             className={`fa ${
//                               category.subcategories &&
//                               category.subcategories.some((subcategory) =>
//                                 isSubcategoryActive(subcategory.url)
//                               )
//                                 ?  "text-green fa-angle-up"
//                                 : "text-black fa-angle-down"
//                             }`}
//                           ></i>
//                         </span>
//                       )}
//                     </div>
//                   ) : (
//                     <Link
//                       to={category.url}
//                       className={`menu-title ${
//                         routeActive === category.url
//                           ? "bg-green-500 "
//                           : "bg-whit"
//                       }`}
//                     >
//                       <span className="menu-icon">
//                         <i
//                           className={`${category.icon} ${
//                             category.subcategories &&
//                             category.subcategories.some((subcategory) =>
//                               isSubcategoryActive(subcategory.url)
//                             )
//                               ? "text-green"
//                               : "text-black"
//                           }`}
//                         ></i>
//                       </span>
//                       {category.title}
//                     </Link>
//                   )}
//                 </div>
//               </div>

//               {category.subcategories && (
//                 <div
//                   className={`cursor-pointer submenu-dropdown  
//                   ${category.subcategories && category.subcategories.some((subcategory) =>isSubcategoryActive(subcategory.url)) ? "opacity-100 translate-y-0 h-min": "opacity-0 translate-y-8 h-0"} overflow-hidden duration-500 transition-all`}>

//                   {category.subcategories.map((subcategory, subIndex) => (
//                     <Link key={subIndex} to={subcategory.url}>
//                       <div
//                         className={`flex gap-2 submenu-title items-center ${
//                           isSubcategoryActive(subcategory.url)
//                             ? "bg-green-500"
//                             : "bg-whit"
//                         }`}
//                       >
//                         <span
//                           className={`font-lighter ${
//                             isSubcategoryActive(subcategory.url)
//                               ? "font-bold text-green"
//                               : "font-light"
//                           } subcategory-title text-xsm`}
//                         >
//                           {subcategory.title}
//                         </span>
//                       </div>
//                     </Link>
//                   ))}
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </aside>
//   );
// };

// export default Sidebar;




import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logoLg from '../../../assets/images/logo-lg.png';
import logoSm from '../../../assets/images/logo-sm.png';
const Sidebar = () => {
  const sidebarCategories = [
    {
      title: "Dashboard",
      icon: "fa fa-tachometer",
      url: "/",
    },
    {
      title: "User",
      icon: "fa fa-user-o",
      url: "/user",
    },
    {
      title: "Order",
      icon: "fa fa-cube",
      url: "/order",
      subcategories: [
        {
          title: "Order List",
          icon: "",
          url: "/order-list",
        },
        {
          title: "Refund Order List",
          icon: "",
          url: "/refund-order",
        },
      ],
    },
    {
      title: "Manage Grocery",
      icon: "fa fa-product-hunt",
      url: "/manage-grocery",
      subcategories: [
        {
          title: "Category",
          icon: "",
          url: "/category",
        },
        {
          title: "Sub Category",
          icon: "",
          url: "/sub-category",
        },
        {
          title: "Product",
          icon: "",
          url: "/product",
        },
        {
          title: "Bulk Import Export",
          icon: "",
          url: "/bulk-import-export",
        },
        {
          title: "Upload Inventory Images",
          icon: "",
          url: "/upload-inventory-image",
        },
        {
          title: "Inventory Stock Settings",
          icon: "",
          url: "/inventory-stock-settings",
        },
        {
          title: "Out of Stock Variants",
          icon: "",
          url: "/out-of-stock-variants",
        },
      ],
    },
    {
      title: "Marketing & Promotion",
      icon: "fa fa-trophy",
      url: "/marketing-promotion",
      subcategories: [
        {
          title: "Coupon",
          icon: "",
          url: "/discount-coupon",
        },
        {
          title: "Refers & Earn",
          icon: "",
          url: "/refer-and-earn",
        },
        {
          title: "Alert Message",
          icon: "",
          url: "/alert-message",
        },
      ],
    },
    {
      title: "Report",
      icon: "fa fa-file-code-o",
      url: "/report",
      subcategories: [
        {
          title: "Sold Item Report",
          icon: "",
          url: "/sold-item-report",
        },
        {
          title: "Daily Order",
          icon: "",
          url: "/daily-order",
        },
      ],
    },
    {
      title: "Loyalty Program",
      icon: "fa fa-gift",
      url: "/loyalty-program",
      subcategories: [
        {
          title: "Configure Points",
          icon: "",
          url: "/configure-points",
        },
        {
          title: "Loyalty Coupons",
          icon: "",
          url: "/loyalty-coupons",
        },
      ],
    },
    {
      title: "User Management",
      icon: "fa fa-handshake-o",
      url: "/user-management",
    },
    {
      title: "Runner Management",
      icon: "fa fa-cubes",
      url: "/runner-management",
    },
    {
      title: "Enquiry Form",
      icon: "fa fa-newspaper-o",
      url: "/enquiry-form",
    },
    {
      title: "Content Management",
      icon: "fa fa-tag",
      url: "/content-management",
      subcategories: [
        {
          title: "Banner",
          icon: "",
          url: "/banner",
        },
        {
          title: "Pages",
          icon: "",
          url: "/page",
        },
        {
          title: "Faq",
          icon: "",
          url: "/faq",
        },
      ],
    },
    {
      title: "Setting",
      icon: "fa fa-cog",
      url: "/setting",
      subcategories: [
        {
          title: "Store Information",
          icon: "",
          url: "/store-information",
        },
        {
          title: "Features Settings",
          icon: "",
          url: "/features-settings",
        },
        {
          title: "Online Payment Store",
          icon: "",
          url: "/online-payment-store",
        },
        {
          title: "Tax Setting",
          icon: "",
          url: "/tax-setting",
        },
        {
          title: "Store Time Information",
          icon: "",
          url: "/store-time-information",
        },
        {
          title: "Delivery Slot Setting",
          icon: "",
          url: "/delivery-slot-setings",
        },
        {
          title: "Delivery Areas",
          icon: "",
          url: "/delivery-areas",
        },
        {
          title: "Social Media Management",
          icon: "",
          url: "/social-media-management",
        },
      ],
    },
    {
      title: "Logout",
      icon: "fa fa-sign-out",
      url: "/login",
    },
  ];

  const location = useLocation();
  const routeLocation = location.pathname;
  const [dropdown, setDropdown] = useState('');

  const handleDropdown = (category) => {
    setDropdown(category === dropdown ? '' : category);
  };
  const toggle = () => {
    document.body.classList.toggle("sidebar-collapse")
  }
  return (
    <aside className="asideBar">
      <div className="sidebar-top">
        <div className="navbar-brand-box">
          <a className="logo logo-dark" href="/">
            <span className="logo-sm">
              <img src={logoSm} />
            </span>
            <span className="logo-lg">
              <img src={logoLg} />
            </span>
          </a>
        </div>
        <div className="navmenu-sidbar"><span className="nav-menu" onClick={toggle}><i className="fa fa-bars" aria-hidden="true"></i></span></div>
      </div>
      <div className="sidebar">
        <div className="sidebar-inner">
          <ul className=''>
            {sidebarCategories.map((category) => (
              <li className="" key={category.title}>
                {category.subcategories ? (
                  <div className="dropdown-toggling">
                    <div
                      className={`
                  flex menu-title  items-center justify-between
                  ${category.subcategories.some((subcategory) =>
                        routeLocation.includes(subcategory.url)
                      )
                          ? 'text-whit bg-black'
                          : 'text-green bg-slate-200/50'
                        }
                  `}
                      onClick={() => handleDropdown(category.title)}
                    >
                      <span className='catgry-icon'><i className={`${category.icon}`}></i></span>
                      <p className={`
                  ${category.subcategories.some((subcategory) => routeLocation.includes(subcategory.url)) ? 'text-sm font-semibold' : 'text-xsm font-light'}
                  `}>{category.title}</p>
                      <span className='menu-arrow'><i
                        className={`
                    fa ${dropdown === category.title
                            // ? 'bx-chevron-up'
                            // : 'bx-chevron-down'
                            ? "fa-angle-up"
                            : "fa-angle-down"
                          }
                    `}
                      ></i></span>
                    </div>
                    <ul
                      className={`
                  ${dropdown === category.title ? 'block' : 'hidden'}
                  `}
                    >
                      {category.subcategories.map((subcategory) => (
                        <Link to={subcategory.url} key={subcategory.title}>
                          <li
                            className={`
                          flex items-center gap-2 subcategry-menu-ttl menu-title 
                          ${routeLocation === subcategory.url
                                ? 'text-white bg-black'
                                : 'text-black bg-slate-200/50'
                              }
                        `}
                          >
                            {/* {/ subcategories icons and p tag /} */}
                            <span className='subcatgry-icon'><i className={`${subcategory.icon}`}></i></span>
                            <p className="font-semibold text-xsm">
                              {subcategory.title}
                            </p>
                          </li>
                        </Link>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <Link to={category.url}>
                    <div
                      onClick={() => { setDropdown(category) }}
                      className={`flex menu-title ${routeLocation === category.url
                        ? 'text-green bg-black'
                        : 'text-whit bg-slate-200/50'
                        } items-center justify-between`}
                    >
                      <span className='catgry-icon'><i className={`${category.icon}`}></i></span>
                      <p className={`${routeLocation === category.url ? 'text-sm font-semibold' : 'text-xsm font-light'}`}>{category.title}</p>
                    </div>
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </aside>
  );
};



export default Sidebar;