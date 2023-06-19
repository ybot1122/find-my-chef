import React from "react";

import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";

import { App } from "./App";

describe("App", () => {
  it("renders headline", () => {
    render(<App />);

    const headline = screen.getByText("FindMyChef");

    expect(headline).toBeInTheDocument();
  });
});
