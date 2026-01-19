# IEEE LINK CAMP 2025 Website

![IEEE Link Logo](https://res.cloudinary.com/dr9noeab2/image/upload/v1768753927/ieee_link_dkyee6.png)

This repository contains the source code for the official website of **IEEE LINK CAMP 2025**. The site acts as the central hub for the "Call for Student Leadership Team 2026," offering event details, role descriptions, and a gateway for applications.

## 📌 Project Overview

**LINK (Local Integrated Network of Kerala IEEE Students)** is an innovative concept aimed at networking student branches effectively within the IEEE Kerala Section.

**Key Website Features:**
* **Event Information:** Details for the camp scheduled on **24th January 2026** at Govt Model Engineering College, Kochi.
* **Role Recruitment:** Sections detailing leadership, technical, and creative roles available for the 2026 term.
* **Affinity Group Showcase:** Displays logos of participating IEEE Societies, Chapters, and Councils.
* **Contact Integration:** A functional contact form connected to Google Sheets via Google Apps Script.

## 🛠️ Tech Stack

The project uses a lightweight, dependency-free technology stack:

* **Frontend:**
  * **HTML5:** Semantic markup structure.
  * **CSS3:** Custom styling using CSS Variables (`:root`), Flexbox, and Grid. No external CSS frameworks (like Bootstrap) are used.
  * **JavaScript:** Vanilla JS handles the form submission logic and success modal (linked as `contact.js`).
* **Assets:**
  * **Icons:** Font Awesome 6.0 (via CDN).
  * **Fonts:** 'Open Sans' and 'Roboto' via Google Fonts.
* **Backend:**
  * **Google Apps Script:** Acts as the backend endpoint to receive form data.

## 📂 Project Structure

```text
├── index.html          # Main landing page (Event details, Roles, Selection Process)
├── contact.html        # Contact page (Form and Google Map location)
├── style.css           # Global stylesheets, CSS variables, and responsive rules
├── contact.js          # Script for handling form API requests and popups
└── README.md           # Project documentation
