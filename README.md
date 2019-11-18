# MileStone Project 2
As an IT Tech for a middle school in Sweden I thought that it might be useful to have a centralized page to act as a hub for Staff Resources including an Events Calendar, useful Google Drive Links and a number of apps that I made utilizing Google Forms, Google Sheets and Google Apps Script (GAS).
Once ready to launch I will host this site to the Google pages and set it to the homepage for all the Staffs Chromebooks.
## UX
Teaching Staff can run the gambit of technological proficiency, with some being able to navigate the google drive structure and some... not so much. So for resources that are being constantly updating (like seating charts, for example) It would be useful to have links to folders hosting those update files.
Following the above paragraphs line of logic it makes sense to include other resources that are accessed on a regular basis, like accessing the Staff Phone List, Tracking a wayward computer cart that has been booked but can’t be located, and requesting Cover (for when you are sick, for example).
Link to wireframes
## Features
Basic announcement section with integrated event calendar showing important and social dates, as well as days off.
Staff Phone List - Each school operates as its own organization managed by google admin, as such there is a shared directory that is not only shared with the teachers, but also with the students and this is a problem. The solution was to create a Staff Phone List utilizing GAS that wipes all users with my school's domain in their email from Google Contacts and reuploads everything as per the Staff Phone List. I also wrote a small script that sets up a trigger for every user that does this automatically every morning.
Cart Tracker - This ties into a broader inventory tracker system that I implemented, by recording the MAC address for every school device and having the Network send me activity usage reports every (via emailed CSV that I have a script importing into Google Sheets) I can track every device in almost real time since every Access Point is named after the room that it’s in. From there I took student damaged chromebooks (broken screens, damaged keyboards), set them to kiosk mode, hid them in the carts and plugged them into extra charging outlets in the cart. They act like a tracking device that access the nearest AP and charges whenever the cart is charging.
Request Cover - A Teacher requests cover via the google form (normally the sheet would record the email address automatically, but I turned that off to set it to be viewable outside our domain), they give whatever reason they would like, select day, start time, and end time and then they would upload whatever resources that you want the cover teacher to utilize. GAS then rips events within those time periods from Google Calendar (if they have shared view writes to their Google Calendar with me) and uploads those events to the cover calendar with resource links attached in the description. Our cover coordinator then assigns those events to a substitute, if the sub accepts the event turns green, and if they reject it turns red. To wrap it all up it sends a weekly report to our economist about the missed times.
Features Left to Implement
Once hosted and being used, I’m sure I will be expanding it based on user input.
I am currently working on a Student Behaviour Tracking System that I have no time to work on.
## Technologies Used
Font Awesome
The project utilizes Font Awesomes free Icon set.
Bootstrap
The project utilizes Bootstraps front-end component library.
Google Apps Script (GAS)
The project utilizes Bootstraps front-end component library.
## Testing
The actual site is relatively simple and has been tested thoroughly with the Apps also having been field tested.

## Deployment
This site is deployed on GitHub Pages.
## Media
IES Logo taken from the International Engelska Corporate Homepage.
Building Picture taken from the IES Älvsjö Public Page
## Acknowledgements
I received inspiration for this project from the Whisky Drop Exercise from the course work.
