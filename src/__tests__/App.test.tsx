import { describe, it, expect } from "@rstest/core";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { App } from "../app/App";

describe("App component", () => {
    it("renders sidebar links with the current route active", () => {
        render(
            <MemoryRouter initialEntries={["/profile"]}>
                <App />
            </MemoryRouter>
        );
        expect(screen.getByRole("link", { name: "Home" }).getAttribute("href"))
            .toBe("/");
        expect(screen.getByRole("link", { name: "Home" }).getAttribute("aria-current"))
            .toBeNull();
        expect(screen.getByRole("link", { name: "Profile" }).getAttribute("aria-current"))
            .toBe("page");
    });
});


