                                                            Command 01:  Add at least 3 Project features

1. Course Listing:

*Display the courses from the JSON data as cards or a table, showing information such as the course title, price, and credits.
*Include the course image (img) to make the interface visually appealing.
*Implement pagination or infinite scrolling if there are many courses to improve user experience.

2. Course Details:

*Create a feature that allows users to click on a course card or title to view detailed information about the course.
*Show the course par(paragraph or description), price, and the number of credits (credit).
*Include a "Select" button to let users register for the course.

3. Toast Notifications:

*Show a success toast when a user successfully registers for a course.
*Display an error toast if there are issues with the registration process, such as already selected, credit hour and overall credit limitation.


                                                       Command 02:  Discuss how you managed the state in your assignment project.

Modern React development primarily relies on functional components and hooks for state management. The following hooks are commonly used for managing state:

*useState: This hook is used to manage the local component-level state. For example, you can use useState to store information about which course is currently selected or to manage the contents of a shopping cart if this is an e-commerce application.

*useEffect: This hook allows you to perform side effects in your components, such as fetching data from an API when the component mounts or updating the UI in response to state changes.
