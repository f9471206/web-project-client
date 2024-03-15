import Layout from "../components/Layout";
import Home from "../pages/Home";
import ViewTweet from "../pages/ViewTweet";
import CreateTweet from "../pages/CreateTweet";
import Profile from "../pages/Profile";
import NoTFound from "../pages/NoTFound";
export default (data, setData) => {
  return [
    {
      path: "/",
      element: <Layout setData={setData} />,
      children: [
        { path: "/", element: <Home data={data} setData={setData} /> },
        { path: "tag/:_tag", element: <Home data={data} setData={setData} /> },
        {
          path: "/post/:_id",
          element: <ViewTweet />,
        },
        { path: "/tweet", element: <CreateTweet /> },
        { path: "/tweet-deit/:id", element: <CreateTweet /> },
        { path: "/user-profile/:_id", element: <Profile /> },
        { path: "/user-profile/:_id/:_replys", element: <Profile /> },
        { path: "*", element: <NoTFound /> },
      ],
    },
  ];
};
