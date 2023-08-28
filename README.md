Final Report: GSOC 2023 
------------------------

- Contributor: Tadija Vukas 
- Organization: Open Genome Informatics 
- Mentor: Deidre Beavers 
- Project: Coding Meets Biology

------------------------------------------------------------------------

Project Description 
-------------------
The goal of this project was to develop a new user-friendly application for annotating biological data. The application is to collect data from an existing database and display it as a data model, in the form of a table and a tree - that contains a network of biological processes. The main goal of the project was to have the data from the backend displayed in a way that makes it easy for users to navigate while using the application. The existing data model is “Read-Only”, so another goal of this project was to design / provide an interface where the data model can be directly modified rather than needing to go to the backend in order to change it. 

-----------------------------------------------------------------------

My Work 
-------
I worked on setting up the front end of the project, which consisted of making tables, a tree, buttons and a navigation bar. The Attribute Table consisted of 4 columns: Attribute Name, Cardinality, Value Type and Attribute Origin. These columns were filled out using the data from the back end, which was accessed using API calls. The tree shows the list of Reactome classes and when a class is clicked on, its respective attribute table is displayed. Similarly, the values of the Attribute Origin column in the Attribute Table can also be clicked on to access their respective class' Attribute Table. The Entry Table button when clicked navigates the user to the Entry Table while the navigation bar's buttons navigate the user to the home page of the application. I was also responsible for all the styling of the front end, with the goal of having the data be easy to read and navigate through while also improving the aesthetic of the application. 

------------------------------------------------------------------------


The Current State 
-----------------
The application contains the Attribute Table, Tree, Navigation Bar, Entry Table Button and Entry Table. The contents of the Attribute Table, which can be found on the right side of the screen, have been sorted so that they are displayed in alphabetical order based on the Attribute Name. Certain classes have an empty Attribute Table due to some issues in the back end. The Tree displays the different Reactome Classes, which is found on the left side of the screen, having a similar appearance to that of a menu style list. These are the two main components of the application and side by side they take up the full width of the screen. When clicked, the "Home", "About" and "Contact" buttons on the Navigation Bar navigate the user to the home page which in this case is the Polymer class Attribute Table. The Entry Table can be accessed by clicking on the Entry Table Button, however this is just an example of a single Entry Table, as there are different values based on Identifiers in the database. 

------------------------------------------------------------------------


What's Left To Do 
------------------
- Load the components in at the same time 
- Allow the data to be modified directly from the front end 
- Add "Home", "About" and "Contact" pages 
- Implementing hierarchy of Reactome classes in the Tree component 

------------------------------------------------------------------------


What code got merged (or not) upstream 
--------------------------------------
All the code found in the schema-panel , attribute-table and code responsible for the components mentioned above were merged upstream. The code that was not merged were components made just for practice and formatting, such as practice tables, menus, headers and buttons. 

------------------------------------------------------------------------


Challenges and Learning Points 
------------------------------
One challenge I had was getting the components to load at the same time. The issue was that the Tree component would load in some time after the Attribute Table. I tried using boolean flags and *ngIf statements in my code to make it so that the two components would only be displayed once both components were loaded. This did not work so there must have been another issue possibly caused by the API calls involved with the tables. The biggest challenge in general was identifying where the error in my code was based on both the error message and what was outputted on my application. At times the error messages did not clearly state what the error in my code was, or I had difficulty understanding why the specified parts of my code were wrong. In addition, when my application did not work the way I would like, I would be unsure whether the error had to do with issues in my code, issues in the API calls or issues in the back end database. However, these challenges have improved me as a programmer as I have gained a handful of experience throughout the project. I now feel that I am a more confident and comfortable programmer because my understanding as a whole has improved as well as my resilience in tackling the challenges that come with programming. I am extremely thankful for the opportunity given to me by Open Genome Informatics and GSOC, as well as my mentor Deidre Beavers for guiding me throughout this project.

