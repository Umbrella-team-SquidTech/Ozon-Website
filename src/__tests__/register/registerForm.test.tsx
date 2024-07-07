import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import RegisterDeskForm from "@/components/Register/RegisterDeskForm";
import { BrowserRouter as Router } from "react-router-dom";
import { describe, it, expect } from "vitest";

describe("RegisterDeskForm", () => {
  it("renders the form with all fields", () => {
    render(
      <Router>
        <RegisterDeskForm />
      </Router>
    );

    // Check if the email and password fields are in the document
    expect(screen.getByPlaceholderText("Nom")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Prenom")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Email")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Password")).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText("Confirmer le mot de passe")
    ).toBeInTheDocument();
  });

  it("shows validation messages when fields are empty", async () => {
    render(
      <Router>
        <RegisterDeskForm />
      </Router>
    );

    // Click the submit button
    fireEvent.click(screen.getByRole("button", { name: /S'inscrire/i }));

    // Update the text based on your actual validation messages
    expect(
      await screen.findByText("Nom doit contenir au moins 2 caractères.")
    ).toBeInTheDocument();
    expect(
      await screen.findByText("prenom doit contenir au moins 2 caractères.")
    ).toBeInTheDocument();
    expect(
      await screen.findByText(/Email doit être valide./i)
    ).toBeInTheDocument();
    expect(
      await screen.findAllByText(/Password should be at least 6 characters./i)
    ).toHaveLength(2);
  });

  it("submits the form with correct values", async () => {
    render(
      <Router>
        <RegisterDeskForm />
      </Router>
    );

    // Fill out the form
    fireEvent.input(screen.getByPlaceholderText("Nom"), {
      target: { value: "Younes" },
    });
    fireEvent.input(screen.getByPlaceholderText("Prenom"), {
      target: { value: "fdj" },
    });
    fireEvent.input(screen.getByPlaceholderText("Email"), {
      target: { value: "example@xyz.com" },
    });
    fireEvent.input(screen.getByPlaceholderText("Password"), {
      target: { value: "password1234" },
    });
    fireEvent.input(screen.getByPlaceholderText("Confirmer le mot de passe"), {
      target: { value: "password1234" },
    });

    // Click the submit button
    fireEvent.click(screen.getByRole("button", { name: /S'inscrire/i }));
  });
});
