import React, { createContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BaseLayer from "./layout/BaseLayer";
import Main from "./components/mainhome/main";
import MessagePage from "./components/messagePage";
import "./App.css";
import InventoryPage from "./components/inventoryPage/InventoryPage";
import AddItemPage from "./components/addItemPage/AddItemPage";
import PrivateRoute from "./lib/privateRoute";

import ModifyProfile from "./components/profilePage/ModifyProfile";

import { AddItemProvider } from "./context/addItemContext";
import LoginContainer from "./components/loginPage/LoginContainer";
import RegisterContainer from "./components/loginPage/RegisterContainer";

export const Context = createContext(null);
function App() {
  return (
    <div className="App">
      <Context.Provider value={null}>
        <BrowserRouter basename="/beautyshopseller/" >
          <Routes>
            <Route element={<BaseLayer />}>
              <Route
                path="/"
                element={
                  <PrivateRoute>
                    <Main />
                  </PrivateRoute>
                }
              />
              <Route
                path="/message"
                element={
                  <PrivateRoute>
                    <MessagePage />
                  </PrivateRoute>
                }
              />
              <Route
                path="/inventory"
                element={
                  <PrivateRoute>
                    <InventoryPage />
                  </PrivateRoute>
                }
              />
              <Route
                path="/inventory/addItem"
                element={
                  <PrivateRoute>
                    <AddItemProvider>
                      <AddItemPage />
                    </AddItemProvider>
                  </PrivateRoute>
                }
              />
              <Route
                path="/modifyProfile"
                element={
                  <PrivateRoute>
                    <ModifyProfile />
                  </PrivateRoute>
                }
              />
            </Route>

            <Route path="/login" element={<LoginContainer />} />
            <Route path="/register" element={<RegisterContainer />} />
          </Routes>
        </BrowserRouter>
      </Context.Provider>
    </div>
  );
}

export default App;
