# Social Media App.

Hello, my name is Cole Samuelsen.

You are looking at the very generically titled "Social Media App", and that's because I've had a lot of ideas on
where I was eventually going to go with this project. Originally it was going to be a debate App where a prompt comes up and two sides of either
individuals or teams argue either sides of debates and people could vote on who won. Today the App displays a daily goal which in some way benefits the world, and allows users to comment on threads and talk to one another. I liked the idea of building a bit of a social media platform that was aimed towards making the world a better place in some way, as I think current companies like Facebook and Twitter really miss that mark.

I chose to do the project in react/node because I wanted to learn how to build more full fledged applications which included authentication and
a database. The authentication and database is done through google's firebase which is accessed through cloud functions. In this way the project is really seperated in two halves, a react front end powered by a cloud function back-end using javascript libraries like express.

# StatusofProjects

The project was finished in terms of being able to comment/delete comments/update goal etc and was fully functioning, however today the app will not run fully. You will still be able to log in (user: happy@wisc.edu pass:happy if you would like to see), you will be able to delete comments, but you won't be able to post comments. After coming back to the project to upload a finished version to GitHub, I realized the Heroku App Api
which was helping me solve my CORS issue was no longer working, so if you check the console, you will see an issue with setting up the header for CORS. I chose not to fix this as I don't want to be maintaining old projects I built primarily to learn how to code, and not to be a stunning perfectly shined finished project.
