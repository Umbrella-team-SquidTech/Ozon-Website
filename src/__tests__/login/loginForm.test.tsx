import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import LoginForm from "@/components/Login/LoginForm";
import { BrowserRouter as Router } from "react-router-dom";
import { describe, it, expect } from "vitest";

describe("LoginForm", () => {
  it("renders the form with email and password fields", () => {
    render(
      <Router>
        <LoginForm />
      </Router>
    );

    // Check if the email and password fields are in the document
    expect(screen.getByPlaceholderText(/email/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Mot de passe/i)).toBeInTheDocument();
  });

  it("shows validation messages when fields are empty", async () => {
    render(
      <Router>
        <LoginForm />
      </Router>
    );

    // Click the submit button
    fireEvent.click(screen.getByRole("button", { name: /connexion/i }));

    // Update the text based on your actual validation messages
    expect(await screen.findByText(/Email invalide/i)).toBeInTheDocument();
    expect(
      await screen.findByText(
        /Mot de passe doit contenir au moins 6 caractères./i
      )
    ).toBeInTheDocument();
  });

  it("submits the form with correct values", async () => {
    // Mocking console.log for testing submission
    render(
      <Router>
        <LoginForm />
      </Router>
    );

    // Fill out the form
    fireEvent.input(screen.getByPlaceholderText(/email/i), {
      target: { value: "test@example.com" },
    });
    fireEvent.input(screen.getByPlaceholderText(/Mot de passe/i), {
      target: { value: "password123" },
    });

    // Click the submit button
    fireEvent.click(screen.getByRole("button", { name: /connexion/i }));
  });
});
