# Personal Portfolio Project
The final project in Code 201 for Codefellows.

## Authors / Team: 
Reed Vogt, Jason Adams, Kawika Miller

## Project Management: 
Trello team board: 
https://trello.com/b/OYsMAaqG/simple-project-board
Invision Board: 
https://kawikamiller572326.invisionapp.com/freehand/201-Final-kstcVEpib

## User Stories

### Software Developer:
As a software developer, I want to be able to easily access the web app to manage finished projects as well as current client projects, so I can stay on top of deadlines and ensure my work is delivered on time. I should be able to easily create new folders, assign them to clients, keep notes, and track progress. 

### Software Developer Student:
As a software developer student, I want to be able to easily access the web app to manage and showcase my projects. The interface should be user-friendly and intuitive, so I can quickly access the features I need and manage my lab projects efficiently. I should also be able to view a dashboard of my current projects. I’d like to also be able to save my coding resources for quick reference. 

### Uni Comp Sci Student:
As a student, I want to be able to easily access the web app to manage tasks and track progress, and projects. The tool should be easy to use, so I can easily manage my tasks efficiently. I should be able to easily create folders for past, current, and future projects. Finally, it would be great if I was able to change the style or color patterns. 

### Average Joe
As a user I want the app to be easy to use and allow me to do most of my daily project tracking tasks all within one app.

### Self-Taught Software Developer:
As a self-taught software developer, I’d like the app to have my projects available on one page and be able to click on a project and view the code and live view at the same time within the page. 

## Portfolio Project
Our goal is to create an all-in-one portfolio presentation app for software developers &/o any tech industry roles. We wanted to create an app that could host all of a developers projects and also display them side by side so that you can see what was created and how it was made. We also want to give the user the ability to create and store notes so that they can refer to them at any given time and have it all located in one convenient location. Additionally, our goals with this app include giving the user personalization options such as adjusting the color schemes, adding folder images, and the ability to add favorited projects.

## Features

### Light / Dark Mode
Users can select which color theme they prefer through `login.html` and the theme will persist on all pages. 'Light' or 'Dark' is saved in local storage and whenever a page is loaded or refreshed that value is read and then the `setTheme()` function is called.

### Upload A Project
Users are able to upload a project to the app and display both the deployed page and the files that were used to create it. In order to upload a project the user will need to fill three inputs in the side bar, the `Title` of the project, the `URL` of the deployed page, and then the `Project Folder` itself, and then click the `Add Project` button. When a project is uploaded the files will be parsed and only the `.js`, `.html`, and `.css` files will remain since these are the 'meat' of the project. A new 'folder' button will also appear at the top of the screen and when a user clicks on a specified project button a deployed page and one of the remaining files will be displayed on the screen side-by-side. A list of buttons will also appear on the bottom of the side bar which correspond to each of the parsed files from that project and the user can click on each button to view the contents of each file. Each project is saved to `state.projects` which is then saved to local storage and will persist through new pages being loaded or page refreshes.

### Resume
Users would be able to upload a `.pdf` of their resume but unfortunately it does not work at this time.

### Take Notes
Users are able to create, save, and delete notes on this page. These notes are saved to `state.notes` and then persists through local storage.

### To-Do List
Users are able to create 'To-Do' lists. Each 'To-Do' list has a title and list of tasks to be completed which can then be checked off once they are finished. Clearing a list of completed tasks and deleting a whole list were features that we planned on implementing but were unable to finish in time.

### Coding Resources
Users can browse various useful coding resources &/o documentation here.

### Bored Button
Is a user waiting for someone on their team to finish making a commit, or a pull request, or get back from lunch, etc before they're able to continue working on a project? Users can now visit `boredbutton.com` while still in this app to help kill time!

### About Us
-unfinished-


## Reflections and Comments

