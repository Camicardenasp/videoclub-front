# DESCRIPTION MoviesList

A simple and easy-to-use movies list application that helps you organize films and keep track of them.

Features

   + Create new movies register with different information
   + Edit and delete existing movies
   + Responsive design for use on desktop and mobile devices
   
# Usage

To use MoviesList, simply follow these steps:

    + Go to the MoviesList URL
    + See the previous movies registered
    + Create a new register by entering a title, year, time, language, release date and country
    + Click "Agregar Película" to add the movie to your list
    Repeat steps 2-3 to add additional tasks
    + Just double click the information you want to "Edit" 
    + Use the "Delete" button to eliminate a register of some existing movie

# INSTALATION

# React MoviesList App
A movies list app made with React as front-end and Node, Express and MongoDB as back-end.

## Front-End Installation
1. `cd videoclub-front`
2. `npm install vite@latest`
3. `npm run dev`

## Back-End Installation
1. `cd videoclub-back`
2. `npm install`
3. `npm run dev` or `nodemon index`

## Note
This app is aimed to be for testing only and is NOT meant to be deployed to production. It lacks request validation, security checks, error handlers and a lot more.

## Construccion de la aplicacion

Las librerias que se utilizaron para la construccion del proyecto son:

* <a href="https://reactjs.org">![image](https://user-images.githubusercontent.com/50422794/211116164-7b79fadd-869a-43e3-8053-a224f080f9c2.png)</a>
* <a href="https://expressjs.com/es/">![image](https://user-images.githubusercontent.com/50422794/215832140-54a86230-4ede-459c-82e3-5c05ee219f10.png)</a>
* <a href="https://www.mongodb.com/">![image](https://user-images.githubusercontent.com/50422794/215832681-e822e2d6-ae97-4c63-9d0b-be6c36a2eda1.png)</a>
* <a href="https://nodejs.org/es/">![image](https://user-images.githubusercontent.com/50422794/215834151-4c767188-7bfa-406e-9967-9c07dc4f737f.png)</a>
* <a href="https://www.npmjs.com/package/axios">![image](https://user-images.githubusercontent.com/50422794/215833618-06eef285-0ac3-46be-ac0c-44bc311dc823.png)
</a>

### Follow these steps while starting the project

###### 1.  Create two Folders

    frontend (This contains all the back-end part)
  
    backend (This contains all the front-end part)
  
###### 2.  Getting MongoDB Connection

    Open Connect and click on - Connect your Application
    
  ![image](https://user-images.githubusercontent.com/76637730/174515425-a6b7db82-5cd3-4cc3-9b27-ecad8e395983.png)
  
    Copy and Add your connection string into your application code
    
  ![image](https://user-images.githubusercontent.com/76637730/174516230-232c6be6-d00b-4067-b15e-1f9cf9c57784.png)

  
###### 3.  BACKEND

    1. npm init -y
        this creates package.json file
        
    2. npm install express mongoose cors nodemon
        this installs these packages
        
    3. Create index.js file, this will contain all connection information
    
    4. Create user.js in models folder this will create or fetch user
    
    5. User thunderclient a visual studio extension for verifying connection right from visual studio
  
###### 4.  APP (FRONTEND)

    1. npm create vite@latest 
        Just like regular react project use this to create default react files with Vite.
  
### Screenshots
 
 Movies Table
 
![image](https://github.com/Camicardenasp/videoclub-front/blob/main/public/Readme%20Images/VideoclubTable.png)

Movies Form

![image](https://github.com/Camicardenasp/videoclub-front/blob/main/public/Readme%20Images/VideoClubForm.png)


