# IEEE Link Camp 2025 Website

This is the official website for the IEEE Link Camp 2025, featuring event details, affinity group showcases, and a contact form integrated with Google Sheets.

## Features

-   **Responsive Design**: Optimized for Desktop, Tablet, and Mobile.
-   **Contact Us Form**: Connects directly to a Google Sheet using Google Apps Script.
-   **Success Popup**: Custom styled popup modal upon successful form submission.
-   **Smooth Navigation**: Internal anchor links with smooth scrolling.
-   **Affinity Group Showcase**: Grid layout for IEEE affinity group logos.
-   **Social Media Links**: Integrated social media icons in the footer.

## Project Structure

-   `index.html`: The main landing page.
-   `contact.html`: The contact us page with the form.
-   `style.css`: Main stylesheet for all pages.
-   `contact.js`: Handles form submission logic and popup interaction.
-   `google_script_code.gs`: The Google Apps Script code (server-side) for handling form data.
-   `script.js`: (Legacy/Other) script file.

## Setup Instructions

### 1. Website Setup
Simply open `index.html` or `contact.html` in your web browser. No local server is strictly required for the HTML/CSS/JS to work, but using one (like Live Server in VS Code) is recommended.

### 2. Contact Form Setup (Google Apps Script)
To make the contact form work, you need to deploy the Google Apps Script:

1.  Open [Google Apps Script](https://script.google.com/home/start) and create a new project.
2.  Copy the code from `google_script_code.gs` into the script editor.
3.  **Important**: Ensure you have a Google Sheet with a tab named **"Responses"** (case-sensitive) linked or accessible by the script. Update the Sheet ID in the script if creating a new sheet.
4.  **Deploy as Web App**:
    -   Click **Deploy** > **New deployment**.
    -   Select type: **Web app**.
    -   Description: "Contact Form v1".
    -   Execute as: **Me**.
    -   Who has access: **Anyone** (This is critical for the form to work without login).
5.  Copy the generated **Web App URL**.
6.  Open `contact.js` and paste the URL into the `SCRIPT_URL` constant variable at the top.

## Troubleshooting

-   **Form not submitting?**
    -   Check the browser console (F12 > Console) for errors.
    -   Ensure the Google Sheet tab is named exactly "Responses".
    -   Verify the `SCRIPT_URL` in `contact.js` is correct.
    -   Ensure "Who has access" in the deployment settings is set to "Anyone".
