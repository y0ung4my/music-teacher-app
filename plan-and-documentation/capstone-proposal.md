## Name of Student: 
Amy Young  

## Name of Project: 
Music Teacher Manager

## Project's Purpose or Goal: 
A web application that tracks scheduling, billing, and other client information for appointment based services, like music lessons.

### As a user, I should:
- see each student's name, email, phone number, family relationships, and weekly lesson time slot
- get the schedule for each student
- see billing history for each student

List the absolute minimum features the project requires to meet this purpose or goal:
- **Client Info**: Student Name, Phone, Email, Address, Weekly Lesson time 
- **Schedule Page**: Shows appointments by client name 
- **Transaction Info**: Track whether student has paid tuition each month
- **UI/UX**: Look decent and be user friendly


What tools, frameworks, libraries, APIs, modules and/or other resources (whatever is specific to your track, and your language) will you use to create this MVP? List them all here. Be specific.

- React
- React Redux
- React-Router-DOM
- React Routing
- Google Firestore
- Google Calendar Api

If you finish developing the minimum viable product (MVP) with time to spare, what will you work on next? Describe these features here: Be specific.

- traffic API to calculate travel time between addresses
- Could also include lesson notes for students to log in to access
- google calendar syncing
- simple invoice generator

What additional tools, frameworks, libraries, APIs, or other resources will these additional features require?
- travel time API: https://developers.google.com/maps/documentation/distance-matrix
- google calendar integration: https://developers.google.com/calendar/api
- add user login and ability to sync user's own google calendar