import React, { useContext } from "react";
import { shareContext } from "../context/shareContext";

export default function Profile() {
  const { sharedUsername } = useContext(shareContext);
  return <div>{sharedUsername}</div>;
}
