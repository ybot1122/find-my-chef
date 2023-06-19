import { expect, afterEach, vi } from "vitest";
import { cleanup } from "@testing-library/react";
import matchers from "@testing-library/jest-dom/matchers";

// extends Vitest's expect method with methods from react-testing-library
expect.extend(matchers);

// mocks out vanilla-extract
vi.mock("@vanilla-extract/css", async (importOriginal) => {
  return {
    ...importOriginal,
    createTheme: (themeObj: any) => ["themeClass", themeObj],
    style: () => "classname",
  };
});

// runs a cleanup after each test case (e.g. clearing jsdom)
afterEach(() => {
  cleanup();
});
