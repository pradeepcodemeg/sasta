import React from "react";
import Breadcrumb from "../components/common/breadcrumb/Breadcrumb";
import Pagination from "../components/pagination/Pagination";
import CreditHistoryUserInformation from "../components/financial/credit-points/CreditHistoryUserInformation";
import OverallCreditHistoryTable from "../components/financial/credit-points/OverallCreditHistoryTable";

const OverallCreditSummary = () => {
  return (
    <>
      <main>
        <Breadcrumb data={"credit-points"} />
        <div className="page-content">
          <div className="row">
            <div className="col-md-12">
            <CreditHistoryUserInformation />
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-md-12">
              <div className="card">
                <div className="card-body">
                  <OverallCreditHistoryTable />
                  <Pagination />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default OverallCreditSummary;
