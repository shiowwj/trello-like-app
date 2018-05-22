# Trello-like Application - Front-End assignment

This page contains description and requirements for a Front-End assignment on [Web Components](https://developer.mozilla.org/en-US/docs/Web/Web_Components).

### Goal


The goal is to check the applicant is able to:

- Grasp what are web components,
- Create an application from scratch using web components,
- Make responsive view,
- Write clean code,
- Cover the code with unit tests,
- Use git,
- Write short and clean documentation


### Requirements

1. Create a public github repository that you will send to us.
2. For implementation you should and can only use **Web Components**.
3. You should consume the data of the fake API provided by this repository (see section 'Materials' below),
4. Create a single page that list all columns with their respective cards.
	- For each column, we should see the title,
	- For each card, we should see the title, if there's a description or not and it should be placed in the column it belongs to.
5. The user should be able to:
	- display all columns with all cards,
	- create a new card,
	- modify a card,
	- delete a card,
	- add a column,
	- modify a column,
	- delete a column,
	- search for any keyword presents on one or multiple cards and the view shall update without reloading the whole page,
	- Drag and drop a card from one column to another,
	- Click on a card to see its description:
		- The description should be in the same view and extend the container,
		- It should not open another page or popup/popin.
6. Cards and columns should be unique.
7. Explain in simple words how to install and run your project within your README file.
8. Send the link to your github repository for reviewing at [tgcorbeaux@maltem.com](mailto:tgcorbeaux@maltem.com).

##### Remarks
Feel free to add everything you think meaningful to your application as long as the above requirements are done.

### Specification

* The code needs to work after we pull it and try it (no bugs).
* The view should be responsive, user-friendly and clear.

### Materials

* Your application will consume data of a fake API powered by [JSON Server](https://github.com/typicode/json-server). You will find more instructions about how to install it and use it clicking on the previous link.
* You will also find a fake DB file called `db.json` inside the `materials` folder of this repository. This fake DB contains structured data you will have to use for building your application.
