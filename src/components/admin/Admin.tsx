import { useState } from "react";
import { EditPost } from "./EditPost";
import { Login } from "./Login";

export default function Admin() {
  const [loggedIn, setLoggedIn] = useState(false);

  if (!loggedIn) {
    return <Login setLoggedIn={() => setLoggedIn(true)} />;
  }

  return (
    <div className="max-w-[calc(960px+8vw)] mx-auto px-[4vw] w-full">
      <EditPost />
    </div>
  );
}
