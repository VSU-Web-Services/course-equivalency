# course-equivalency
> A course equivalency application that is used for prospective students
> for VSU to compare course credits taken from other higher education instituions

![code AngularJS build](https://img.shields.io/badge/build-AngularJS-brightgreen) 
![code jQuery build](https://img.shields.io/badge/build-jQuery-brightgreen)
![CSS3](https://img.shields.io/badge/build-CSS3-yellowgreen)
![HTML5](https://img.shields.io/badge/build-HTML5-yellowgreen)
![Chrome](https://img.shields.io/badge/Chrome-compatable-green)
![Firefox](https://img.shields.io/badge/Firefox-compatable-green)
![Edge](https://img.shields.io/badge/Edge-compatable-green)
![MIT license](https://img.shields.io/badge/license-mit-blue)
---

## Users
- Prospective Students for VSU
- Project Owner - VSU Admissions
- Public who visits VSU website

## Functions
This web application searches course credit hours from VCCS and converts their course hours into the equivalent within VSU curriculum

---

User first selects school in dropdown menu

![select school](screenshots-readme/select-school-dropdown.JPG)

User filters courses by subject by subject dropdown menu and clicks 'Show Results' button

![select subject show results](screenshots-readme/select-subject-show-results-button.JPG)

User can review and clear results by clicking the 'Hide Results' button

![results list](screenshots-readme/show-results-list.JPG)

---

## Installation

To have a local install of the working project you would need to have the following:

- xampp
- Sublime text editor
- Download of local files through GitHub desktop app


## Overview

The course equivelancy app was developed to be full production ready application but by default you will see the 'trainingwheels' version which limits searchable schools/systems to VCCS and Richard Bland College.  


### Course Eqivelancy Technical Functions
- source data is provided via Elasticsearch API from live Banner data
- app controler grabs a singular static school list through http get .json file which has id fields school code, school name, and school state
- generates searchable school name dropdown by selected state
  - Angular in HTML dynamically filters and sorts the dropdown menu of school/system based on the state selection entered by user.*  
- Based on selected school name, app factory gets individual school course .json by school code from API
- Once school is selected, we use the same method of filtering and sorting based on course subject.

*\* This functionality is **not** enabled by default per the product owner but can be enabled by clicking a small pixel in the upper left hand corner.  For 'trainingwheels', School selection is defaulted to VCCS and Richard Bland College, as of this version.*

Below demonstrates how to access the full production ready application for reference.  This can be accessed by clicking the upper left hand corner of the document. 

![gif reference](http://g.recordit.co/GqvLzFwNOA.gif)

**The data provided by the product owner is an incomplete list of course credit hours for all higher education institutions.  Please know that all schools outside VA will not have data**

- Hiding and showing results is handled by jQuery
   - `#showResults` click functionality is disabled unless a school name is selected
   - `#showResults` click function removes hide class to `#searchResults` and `#hideResults` (show results button functionality)
   - `#hideResults` click function adds hide class to `#searchResults` and removes class hide from `#showResults` (hide results button functionality)
   - Searching state and school performs similar functions by click
   - Toggle from full production application and 'trainingwheels' adds hide class to respective classes
- Toggle fullview is handled by JS for cross-platform compatibility
	-function `toggleFull` switches fullscreen off or on.  This is implemented in Vanilla JavaScript for legacy support and cross-platform compatibilty.

---
