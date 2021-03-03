import React, { useContext, useEffect } from "react";
import classNames from "classnames";
import { useFavoriteRooms } from "./useFavoriteRooms";
import { usePublicRooms } from "./usePublicRooms";
import "./HomePageDialog.scss";
import { AuthContext } from "../auth/AuthContext";
import { createAndRedirectToNewHub } from "../../utils/phoenix-utils";

export function HomePageDialog() {
  const auth = useContext(AuthContext);

  const { results: favoriteRooms } = useFavoriteRooms();
  const { results: publicRooms } = usePublicRooms();

  useEffect(() => {
    const qs = new URLSearchParams(location.search);
  }, []);

  return (
    <div className="home-page-dialog">
      <div>Test image show</div>
      <div>
        <img src="../../assets/user/create.jpg" />
        <img src="../../assets/user/play.jpg" />
        <img src="../../assets/user/work.jpg" />
        <img src="../../assets/user/learn.jpg" />
        <img src="../../assets/user/basics.jpg" />
      </div>
    </div>
  );
}
