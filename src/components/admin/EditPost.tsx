import React from "react";

const Tiptap = React.lazy(() => import("./TipTap"));

export function EditPost() {
  return (
    <div>
      <h1>Hello</h1>
      <React.Suspense fallback={<></>}>
        <Tiptap />
      </React.Suspense>
    </div>
  );
}
