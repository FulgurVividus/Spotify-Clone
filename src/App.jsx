import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools/production";

import AppLayout from "./components/AppLayout";
import Albums from "./pages/Albums";
import Album from "./pages/Album";
import Artists from "./pages/Artists";
import Artist from "./pages/Artist";
import Home from "./pages/Home";
import Library from "./pages/Library";
import Playlists from "./pages/Playlists";
import Playlist from "./pages/Playlist";
import Search from "./pages/Search";
import UserProfile from "./pages/UserProfile";
import Login from "./pages/Login";
import ErrorPage from "./pages/ErrorPage";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />

      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="home" />} />
            <Route path="albums" element={<Albums />} />
            <Route path="albums/:albumId" element={<Album />} />
            <Route path="artists" element={<Artists />} />
            <Route path="artists/:artistId" element={<Artist />} />
            <Route path="home" element={<Home />} />
            <Route path="library" element={<Library />} />
            <Route path="playlists" element={<Playlists />} />
            <Route path="playlists/:playlistId" element={<Playlist />} />
            <Route path="search" element={<Search />} />
            <Route path="profile" element={<UserProfile />} />
          </Route>

          <Route path="login" element={<Login />} />
          <Route path="*" element={<ErrorPage />} />
          <Route />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
