HealthTech Innovations Website
Project Overview

The HealthTech Innovations website is a single-page HTML application designed to showcase cutting-edge healthcare technology solutions, including IVF software, telemedicine, hospital information systems, and mobile app development. The site is built with a focus on modern design, user interaction, and accessibility, featuring:

Responsive Design: Mobile-friendly layout with a hamburger menu for smaller screens.
Interactive Forms: Contact and Enquiry forms with client-side validation using jQuery Validation Plugin.
Modern Styling: Gradient backgrounds, Font Awesome icons, and animations for a polished look.
Local Storage: Form submissions are stored in the browser's localStorage for demonstration purposes.
SEO Optimization: Meta tags, Open Graph, Twitter Card, and schema markup for better search engine visibility.
Accessibility: Semantic HTML, ARIA attributes, and high-contrast text for inclusivity.

The site is ideal for healthcare technology providers looking to present their offerings professionally.
Setup Instructions

Clone the Repository:
git clone https://github.com/ahn07/healthtech-innovations.git
cd healthtech-innovations

Open the Project:

healthtech-innovations/
├── index.html       # Main HTML file
├── styles.css      # All CSS styles
├── scripts.js      # All JavaScript logic
└── README.md       # Updated documentation

Open the project folder in a code editor like Visual Studio Code (recommended for Live Server).

Ensure an internet connection to load these resources.

Using Live Server
To preview the website locally, use the Live Server extension in Visual Studio Code:

Install Live Server:

In VS Code, go to the Extensions view (Ctrl+Shift+X or Cmd+Shift+X on Mac).
Search for "Live Server" by Ritwick Dey and install it.


Start Live Server:

Open index.html in VS Code.
Right-click the file and select "Open with Live Server", or click the "Go Live" button in the VS Code status bar.
The site will open in your default browser at http://127.0.0.1:5500 (default port).

Dependencies:

No local dependencies are required. The site uses the following external CDNs:
Font Awesome 6.4.2 for icons.
SweetAlert2 11 for success notifications.
jQuery 3.6.0 for DOM manipulation.
jQuery Validation Plugin 1.19.5 for form validation.




Verify Functionality:

Check that all sections (Header, Hero, Products, About, Contact, Enquiry, Footer) render correctly.
Test the Contact and Enquiry forms:
Ensure validation works (e.g., email format, 10-digit mobile for Enquiry).
Submit forms to verify SweetAlert2 notifications and localStorage storage (view in DevTools > Application > Local Storage).


Confirm responsiveness by resizing the browser or using DevTools' mobile view.



Checking SEO with Lighthouse
Lighthouse is a built-in tool in Chrome DevTools to audit SEO, Performance, Accessibility, and Best Practices.

Run Lighthouse:

Open the site via Live Server (http://127.0.0.1:5500) in Google Chrome.
Open DevTools (Ctrl+Shift+I or Cmd+Option+I on Mac).
Navigate to the Lighthouse tab.
Select Desktop mode and check the following categories:
Performance
Accessibility
Best Practices
SEO


Click Generate Report.


Interpret Results:

Scores range from 0 to 100. Higher scores indicate better performance.
Review recommendations for improvements (e.g., image optimization, accessibility tweaks).


Lighthouse Results , Image provided in the assets folder (as of May 17, 2025):

SEO: 100/100
Strengths: Comprehensive meta tags, Open Graph/Twitter Card tags, and schema markup (Organization, WebPage) enhance search visibility. Descriptive link text improves crawling.



Performance: 97/100
Strengths: Lightweight page with optimized CSS. CDNs are cached globally.



Accessibility: 100/100
Strengths: Semantic HTML, ARIA attributes (role, aria-label), and high-contrast text. Forms have clear labels and error messages.



Best Practices: 100/100
Strengths: No console errors, no deprecated APIs, and responsive design.
Issues: Placeholder links and large hero image impact usability.
Solved: Replaced placeholder links and optimize images.


