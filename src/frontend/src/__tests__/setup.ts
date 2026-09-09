import "@testing-library/jest-dom/vitest";
import { cleanup, configure } from "@testing-library/react";
import { afterEach, vi } from "vitest";

// Generated components use `data-ocid` rather than `data-testid` for their
// stable hooks, so point the Testing Library test-id queries at that attribute.
configure({ testIdAttribute: "data-ocid" });

// Unmount rendered trees between tests so queries never see stale DOM from a
// previous test in the same file.
afterEach(() => {
  cleanup();
});

// The generated `backend.ts` re-exports `ExternalBlob` from
// `@caffeineai/object-storage`, whose `dist/index.js` imports a `./blob`
// subpath that does not resolve under Vitest's module resolution. The app's
// vehicle/inquiry flows never touch `ExternalBlob`, so a stub keeps the
// generated bindings loadable without a live object-storage client.
vi.mock("@caffeineai/object-storage", () => ({
  ExternalBlob: class ExternalBlob {},
}));
