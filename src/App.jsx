import { Route, Routes, useNavigate, /* useLocation,*/ useRoutes } from 'react-router-dom';
import Home from './pages/Home';
import Sidebar from './components/common/sidebar/Sidebar';
import Header from './components/common/header/Header';
import Footer from './components/common/footer/footer';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Breadcrumb from './components/common/breadcrumb/Breadcrumb';
import OrderList from './pages/OrderList';
import UserList from './pages/UserList';
import OrderDetail from './pages/OrderDetail';

import RefundOrderList from './pages/RefundOrderList';
import { useEffect } from 'react';
import Category from './pages/Category';
import SubCategory from './pages/SubCategory';
import Product from './pages/Product';
import AddProduct from './pages/AddProduct';
import EditProduct from './pages/EditProduct';
import UploadInventoryImage from './pages/UploadInventoryImage';
import BulkImportExport from './pages/BulkImportExport';
import OutOfStockVariants from './pages/OutOfStockVariants';
import DiscountCoupon from './pages/DiscountCoupon';
import AddDiscountCoupon from './pages/AddDiscountCoupon';
import ReferAndEarn from './pages/ReferAndEarn';
import AlertMessage from './pages/AlertMessage';
import EditDiscountCoupon from './pages/EditDiscountCoupon';
import AddPushNotification from './pages/AddPushNotification';
import SoldItemReport from './pages/SoldItemReport';
import DailyOrder from './pages/DailyOrder';
import ConfigurePoints from './pages/ConfigurePoints';
import LoyaltyCoupons from './pages/LoyaltyCoupons';
import UserManagement from './pages/UserManagement';
import RunnerManagement from './pages/RunnerManagement';
import AddUserManagementRole from './pages/AddUserManagementRole';
import EditUserManagementRole from './pages/EditUserManagementRole';
import AddRunner from './pages/AddRunner';
import EditRunner from './pages/EditRunner';
import RunnerDetail from './pages/RunnerDetail';
import EnquiryForm from './pages/EnquiryForm';
import Banner from './pages/Banner';
import AddBanner from './pages/AddBanner';
import EditBanner from './pages/EditBanner';
import Page from './pages/page';
import AddPage from './pages/AddPage';
import EditPage from './pages/EditPage';
import Faq from './pages/Faq';
import AddFaq from './pages/AddFaq';
import EditFaq from './pages/EditFaq';
import StoreInformation from './pages/StoreInformation';
import OnlinePyamentStore from './pages/OnlinePyamentStore';
import TaxSetting from './pages/TaxSetting';
import StoreTimeInformation from './pages/StoreTimeInformation';
import DeliverySlotSeting from './pages/DeliverySlotSeting';
import DeliveryAreas from './pages/DeliveryAreas';
import SocialMediaManagement from './pages/SocialMediaManagement';
import FeatureSettings from './pages/FeatureSettings';
import UserDetailHistory from './pages/UserDetailHistory';
import ProfileUpdate from './pages/ProfileUpdate';
import Brand from './pages/Brand';
import UserGrup from './pages/UserGrup';
import AddGroup from './pages/AddGroup';
import EditGroup from './pages/EditGroup';
import PushNotification from './pages/PushNotification';
import PushNotificationList from './pages/PushNotificationList';
import Vendor from './pages/Vendor';
import VendorDetail from './pages/VendorDetail';
import EditVendor from './pages/EditVendor';
import AddVendor from './pages/AddVendor';
import CreditList from './pages/CreditList';
import OverallCreditSummary from './pages/OverallCreditSummary';


function App() {
  const routes = useRoutes([
    { path: '/login', element: <Login /> },
    { path: '/signup', element: <Signup /> },
    {
      path: '/*',
      element: (
        <div className='wrapper'>
          <Header />
          <Sidebar />
          {/* <Breadcrumb /> */}
          <Routes>
              <Route index element={<Home />} />
              <Route path="/user" element={<UserList />} />
              <Route path="/group" element={<UserGrup />} />
              <Route path="/add-group" element={<AddGroup />} />
              <Route path="/edit-group" element={<EditGroup />} />
              <Route path="/user-detail" element={<UserDetailHistory />} />
              <Route path="/push-notification" element={<PushNotification />} />
              <Route path="/push-notification-list" element={<PushNotificationList />} />
              <Route path="/vendor" element={<Vendor />} />
              <Route path="/add-vendor" element={<AddVendor />} />
              <Route path="/edit-vendor" element={<EditVendor />} />
              <Route path="/vendor-detail" element={<VendorDetail />} />
              <Route path="/order-list" element={<OrderList />} />
              <Route path="/refund-order" element={<RefundOrderList />} />
              <Route path="/order-detail" element={<OrderDetail />} />
              <Route path="/category" element={<Category />} />
              <Route path="/sub-category" element={<SubCategory />} />
              <Route path="/brand" element={<Brand />} />
              <Route path="/product" element={<Product />} />
              <Route path="/add-product" element={<AddProduct />} />
              <Route path="/edit-product" element={<EditProduct />} />
              <Route path="/upload-inventory-image" element={<UploadInventoryImage />} />
              <Route path="/bulk-import-export" element={<BulkImportExport />} />
              <Route path="/out-of-stock-variants" element={<OutOfStockVariants />} />
              <Route path="/discount-coupon" element={<DiscountCoupon />} />
              <Route path="/add-discount-coupon" element={<AddDiscountCoupon />} />
              <Route path="/edit-discount-coupon" element={<EditDiscountCoupon />} />
              <Route path="/refer-and-earn" element={<ReferAndEarn />} />
              <Route path="/alert-message" element={<AlertMessage />} />
              <Route path="/add-push-notification" element={<AddPushNotification />} />
              <Route path="/sold-item-report" element={<SoldItemReport />} />
              <Route path="/daily-order" element={<DailyOrder />} />
              <Route path="/configure-points" element={<ConfigurePoints />} />
              <Route path="/loyalty-coupons" element={<LoyaltyCoupons />} />
              <Route path="/user-management" element={<UserManagement />} />
              <Route path="/add-user-management-role" element={<AddUserManagementRole />} />
              <Route path="/edit-user-management-role" element={<EditUserManagementRole />} />
              <Route path="/runner-management" element={<RunnerManagement />} />
              <Route path="/add-runner" element={<AddRunner />} />
              <Route path="/edit-runner" element={<EditRunner />} />
              <Route path="/runner-detail" element={<RunnerDetail />} />
              <Route path="/enquiry-form" element={<EnquiryForm />} />
              <Route path="/banner" element={<Banner />} />
              <Route path="/add-banner" element={<AddBanner />} />
              <Route path="/edit-banner" element={<EditBanner />} />
              <Route path="/page" element={<Page />} />
              <Route path="/add-page" element={<AddPage />} />
              <Route path="/edit-page" element={<EditPage />} />
              <Route path="/faq" element={<Faq />} />
              <Route path="/add-faq" element={<AddFaq />} />
              <Route path="/edit-faq" element={<EditFaq />} />
              <Route path="/store-information" element={<StoreInformation />} />
              <Route path="/online-payment-store" element={<OnlinePyamentStore />} />
              <Route path="/tax-setting" element={<TaxSetting />} />
              <Route path="/store-time-information" element={<StoreTimeInformation />} />
              <Route path="/delivery-slot-setings" element={<DeliverySlotSeting />} />
              <Route path="/delivery-areas" element={<DeliveryAreas />} />
              <Route path="/social-media-management" element={<SocialMediaManagement />} />
              <Route path="/features-settings" element={<FeatureSettings />} />
              <Route path="/profile-update" element={<ProfileUpdate />} />
              <Route path="/credit-points" element={<CreditList />} />
              <Route path="/overall-credit-summary" element={<OverallCreditSummary />} />
          </Routes>
          <Footer />
        </div>
      ),
    },
  ]);

  return (
   
      (
        <>{ routes }</>
      )
  )

}

export default App

const Redirect = () => {
  const navigate = useNavigate(null) 
  useEffect(() => {
    navigate("/")
  }, [])
  
  return (
    <></>
  )
}
