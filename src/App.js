import React, { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Main from "./components/section/Main";
const Home = lazy(() => import("./pages/Home"));
const Today = lazy(() => import("./pages/Today"));
const Developer = lazy(() => import("./pages/Developer"));
const Webd = lazy(() => import("./pages/Webd"));
const Website = lazy(() => import("./pages/Website"));
const Gsap = lazy(() => import("./pages/Gsap"));
const Port = lazy(() => import("./pages/Port"));
const Youtube = lazy(() => import("./pages/Youtube"));
const Channel = lazy(() => import("./pages/Channel"));
const Video = lazy(() => import("./pages/Video"));
const Search = lazy(() => import("./pages/Search"));
const Not = lazy(() => import("./pages/Not"));

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Main />}>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/today" element={<Today />}></Route>
          <Route path="/developer" element={<Developer />}></Route>
          <Route path="/webd" element={<Webd />}></Route>
          <Route path="/website" element={<Website />}></Route>
          <Route path="/gsap" element={<Gsap />}></Route>
          <Route path="/port" element={<Port />}></Route>
          <Route path="/youtube" element={<Youtube />}></Route>
          <Route path="/channel/:channelID" element={<Channel />}></Route>
          <Route path="/video/:videoID" element={<Video />}></Route>
          <Route path="/search/:searchID" element={<Search />}></Route>
          <Route path="*" element={<Not />}></Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
