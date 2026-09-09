import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { createMockActor, renderApp } from "./helpers";

const actor = createMockActor();
vi.mock("@caffeineai/core-infrastructure", () => ({
  useActor: () => ({ actor, isFetching: false }),
}));

describe("Contact page", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("displays the dealership address, phones, and hours", async () => {
    renderApp("/contact");

    expect(
      await screen.findByRole("heading", { name: "Contact NJM Enterprises" }),
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        "LP 66 McSeveny Street, El Dorado, Tunapuna Village, Saint George, Trinidad & Tobago",
      ),
    ).toBeInTheDocument();
    // Phones also appear in the site footer, so assert presence rather than
    // uniqueness.
    expect(screen.getAllByText("268-NJME (6563)").length).toBeGreaterThan(0);
    expect(screen.getAllByText("488-NJME (6563)").length).toBeGreaterThan(0);
    expect(screen.getAllByText("487-NJME (6563)").length).toBeGreaterThan(0);
    expect(screen.getByText("Monday – Friday")).toBeInTheDocument();
    expect(screen.getByText("9:00 AM – 5:00 PM")).toBeInTheDocument();
    expect(screen.getByText("Saturday")).toBeInTheDocument();
    expect(screen.getByText("Sunday")).toBeInTheDocument();
    expect(screen.getByText("Closed")).toBeInTheDocument();
  });

  it("submits an inquiry and shows confirmation feedback", async () => {
    const user = userEvent.setup();
    renderApp("/contact");

    await screen.findByRole("heading", { name: "Contact NJM Enterprises" });

    await user.type(screen.getByLabelText("Name"), "Ada Lovelace");
    await user.type(screen.getByLabelText("Phone"), "268-NJME (6563)");
    await user.type(screen.getByLabelText("Vehicle of Interest"), "TOY-001");
    await user.type(
      screen.getByLabelText("Message"),
      "I would like a test drive.",
    );

    await user.click(screen.getByRole("button", { name: "Send Inquiry" }));

    expect(
      await screen.findByRole("heading", { name: "Inquiry Received" }),
    ).toBeInTheDocument();
    expect(actor.submitInquiry).toHaveBeenCalledTimes(1);
    expect(actor.submitInquiry).toHaveBeenCalledWith(
      expect.objectContaining({
        name: "Ada Lovelace",
        phone: "268-NJME (6563)",
        vehicleOfInterest: "TOY-001",
        message: "I would like a test drive.",
      }),
    );
  });
});
