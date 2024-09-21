import { FormData } from "@/components/sections/ContactForm";

// send form data to endpoint api/email via a POST request
export async function sendEmail(data: FormData) {
  const apiEndpoint = "/api/email";

  try {
    const response = await fetch(apiEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    // check if the response is ok (status 200-299)
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    // parse response from server
    const result = await response.json();

    // return the parsed result
    return result;
  } catch (err) {
    console.error("Error sending email:", err);
    return { success: false, message: "Failed to send message." };
  }
}
