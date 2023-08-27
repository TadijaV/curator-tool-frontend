Final Report: GSOC 2023

- Contributor: Tadija Vukas
- Organization: Open Genome Informatics
- Mentor: Deidre Beavers
- Project: Coding Meets Biology

Project Description
The goal of this project was to develop a new user-friendly application for annotating biological data. The application is to collect data from an existing database and display it as a data model, in the form of a table and a tree - that contains a network of biological processes. The main goal of the project was to have the data from the backend displayed in a way that makes it easy for users to navigate while using the application. The existing data model is “Read-Only”, so another goal of this project was to design / provide an interface where the data model can be directly modified rather than needing to go to the backend in order to change it.



My Work
I worked on setting up the front end of the project, which consisted of making tables, a tree, buttons and a navigation bar. The Attribute Table consisted of 4 columns: Attribute Name, Cardinality,	Value Type and	Attribute Origin. These columns were filled out using the data from the back end, which was accessed using API calls. The tree shows the list of Reactome classes and when a class is clicked on, its respective attribute table is displayed. Similarly, the values of the Attribute Origin column in the Attribute Table can also be clicked on to access their respective class' Attribute Table. The Entry Table button when clicked navigates the user to the Entry Table while the navigation bar's buttons navigate the user to the home page of the application. I was also responsible for all the styling of the front end, with the goal of having the data be easy to read and navigate through while also improving the aesthetic of the application.   



The Current State.



What's Left To Do.


What code got merged (or not) upstream.




Challenges and Learning Points
