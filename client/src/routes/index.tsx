import { BrowserRouter, Routes, Route } from "react-router";

import Home from "../pages/Home/Home";
import NotFound from "../pages/Errors/NotFound";
import NavBar from "../components/navbar/NavBar";
import Auth from "../pages/Auth/Auth";
import { Profil } from "../pages/Profil/Profil";
export default function index() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/auth" element={<Auth />} />

          <Route path="/profil" element={<Profil />} />

          <Route path="*" element={<NotFound />} />

          {/* ADMIN PART */}
          {/* <Route path='admin' element={<AdminLayout />}>
            <Route index element={<Dashboard />} />
            <Route path='category'>
              <Route index element={<CategoryAdmin />} />
            </Route>
            <Route path='part'>
              <Route index element={<PartAdmin />} />
            </Route>
            <Route path='vehicle'>
              <Route index element={<VehicleAdmin />} />
              <Route path="add" element={<VehicleForm />} />
              <Route path="edit/:slug" element={<VehicleForm />} />
            </Route> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}
