import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ListGroup from './Components/ListGroup';
import GetAllCustomerDetails from './Pages/Customer/GetAllCustomerDetails';
import GetSpecificCustomerDetails from './Pages/Customer/GetSpecificCustomerDetails';
import EnterCustomerDetails from './Pages/Customer/EnterCustomerDetails';
import GetAllCategoryDetails from './Pages/Category/GetAllCategoryDetails';
import GetSpecificCategoryDetails from './Pages/Category/GetSpecificCategoryDetails';
import EnterCategoryDetails from './Pages/Category/EnterCategoryDetails';
import GetAllDepartmentDetails from './Pages/Department/GetAllDepartmentDetails';
import GetSpecificDepartmentDetails from './Pages/Department/GetSpecificDepartmentDetails';
import EnterDepartmentDetails from './Pages/Department/EnterDepartmentDetails';
import GetAllInvoiceDetails from './Pages/Invoice/GetAllInvoiceDetails';
import GetSpecificInvoiceDetails from './Pages/Invoice/GetSpecificInvoiceDetails';
import GetInvoiceofaCustomer from './Pages/Invoice/GetInvoiceofaCustomer';
import EnterInvoiceDetails from './Pages/Invoice/EnterInvoiceDetails';
import EnterInvoiceandCustomerDetails from './Pages/Invoice/EnterInvoiceandCustomerDetails';
import GetAllItemDetails from './Pages/Item/GetAllItemDetails';
import GetSpecificItemDetails from './Pages/Item/GetSpecificItemDetails';
import EnterItemDetails from './Pages/Item/EnterItemDetails';
import GetAllTaxDetails from './Pages/Tax/GetAllTaxDetails';
import GetSpecificTaxDetails from './Pages/Tax/GetSpecificTaxDetails';
import EnterTaxDetails from './Pages/Tax/EnterTaxDetails';



const App: React.FC = () =>
{
  
  const items = [
    "Get All Customer Details",
    "Get Specific Customer Details",
    "Enter Customer Details",
    "Get All Category Details",
    "Get Specific Category Details",
    "Enter Category Details",
    "Get All Department Details",
    "Get Specific Department Details",
    "Enter Department Details",
    "Get All Invoice Details",
    "Get Specific Invoice Details",
    "Get Invoice Details of a Customer",
    "Enter Specific Invoice Details",
    "Enter Invoice and Customer Details",
    "Get All Item Details",
    "Get Specific Item Details",
    "Enter Item Details",
    "Get All Tax Details",
    "Get Specific Tax Details",
    "Enter Tax Details",
  ];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <Router>
      <div>
        <Routes>
          <Route
            path="/"
            element={
              <ListGroup
                item={items}
                heading="POS API"
                onSelectItem={handleSelectItem}
              />
            }
          />
          <Route
            path="/get-all-customer-details"
            element={<GetAllCustomerDetails />}
          />
          <Route
            path="/get-specific-customer-details"
            element={<GetSpecificCustomerDetails />}
          />
          <Route
            path="/enter-customer-details"
            element={<EnterCustomerDetails />}
          />
          <Route
            path="/get-all-category-details"
            element={<GetAllCategoryDetails />}
          />
          <Route
            path="/get-specific-category-details"
            element={<GetSpecificCategoryDetails />}
          />
          <Route
            path="/enter-category-details"
            element={<EnterCategoryDetails />}
          />
          <Route
            path="/get-all-department-details"
            element={<GetAllDepartmentDetails />}
          />
          <Route
            path="/get-specific-department-details"
            element={<GetSpecificDepartmentDetails />}
          />
          <Route
            path="/enter-department-details"
            element={<EnterDepartmentDetails />}
          />
          <Route
            path="/get-all-invoice-details"
            element={<GetAllInvoiceDetails />}
          />
          <Route
            path="/get-specific-invoice-details"
            element={<GetSpecificInvoiceDetails />}
          />
          <Route
            path="/get-invoice-of-a-customer"
            element={<GetInvoiceofaCustomer />}
          />
          <Route
            path="/enter-invoice-details"
            element={<EnterInvoiceDetails />}
          />
          <Route
            path="/enter-invoice-and-customer-details"
            element={<EnterInvoiceandCustomerDetails />}
          />
          <Route
            path="/get-all-item-details"
            element={<GetAllItemDetails />}
          />
          <Route
            path="/get-specific-item-details"
            element={<GetSpecificItemDetails />}
          />
          <Route
            path="/enter-item-details"
            element={<EnterItemDetails />}
          />
          <Route
            path="/get-all-tax-details"
            element={<GetAllTaxDetails />}
          />
          <Route
            path="/get-specific-tax-details"
            element={<GetSpecificTaxDetails />}
          />
          <Route
            path="/enter-tax-details"
            element={<EnterTaxDetails />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
