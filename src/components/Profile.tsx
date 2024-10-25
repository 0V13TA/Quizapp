import { useShareContext } from "../context/useShareContext";

export default function Profile() {
  const { sharedUsername } = useShareContext();
  return <div>{sharedUsername}</div>;
}
