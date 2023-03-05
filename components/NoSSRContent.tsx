import DelayedRender from "./DelayedRender";
import React from "react";
import ReactRelayLazyQuerier from "./ReactRelayLazyQuerier";
import RelayHooksQuerier from "./RelayHooksQuerier";

export default function NoSSRContent() {
  return (
    <React.Suspense fallback={<div>Suspense</div>}>
      <DelayedRender>
        <RelayHooksQuerier />
        <ReactRelayLazyQuerier />
      </DelayedRender>
    </React.Suspense>
  );
}
