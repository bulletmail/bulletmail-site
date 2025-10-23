import { Request, Response } from "express";
import { addToWaitlist } from "../db";
import { notifyOwner } from "../_core/notification";

export async function handleWaitlistPost(req: Request, res: Response) {
  try {
    const { email, company } = req.body;

    if (!email || typeof email !== "string") {
      return res.status(400).json({ error: "Valid email is required" });
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: "Invalid email format" });
    }

    // Add to waitlist
    await addToWaitlist({
      email: email.toLowerCase().trim(),
      company: company?.trim() || null,
    });

    // Notify owner of new signup
    await notifyOwner({
      title: "New BulletMail Waitlist Signup",
      content: `Email: ${email}${company ? `\nCompany: ${company}` : ""}`,
    }).catch(err => {
      console.error("[Waitlist] Failed to notify owner:", err);
      // Don't fail the request if notification fails
    });

    return res.status(200).json({ success: true });
  } catch (error: any) {
    console.error("[Waitlist] Error:", error);
    
    if (error.message === "This email is already on the waitlist") {
      return res.status(409).json({ error: error.message });
    }

    return res.status(500).json({ error: "Failed to join waitlist" });
  }
}

