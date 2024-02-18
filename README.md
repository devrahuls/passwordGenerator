
#  Random Password Generator

This is a versatile and user-friendly Random Password Generator built with **Vite, ReactJS, and Tailwind CSS**. It provides a range of features to customize and generate secure passwords for your various needs.

<br/>

## Features ✨

-   **Password Length Selection**: Choose the desired length of your password from 8 to 30 characters.
    
-   **Include/Exclude Numbers and Special Characters**: Tailor your password by including or excluding numbers and special characters based on your security requirements.
    
-   **Clipboard Copy Functionality**: Easily copy the generated password to your clipboard with a single click.

<br/>

## Usage 🏗️

**1.  Clone the repository:**

```
git clone https://github.com/devrahuls/passwordGenerator
```
```
cd random-password-generator
``` 
    
**2.  Install dependencies:**
 ```
 npm install
 ``` 
    
**3.  Run the development server:**
 ```
 npm run dev
 ``` 
    
**4.  Open your browser and navigate to `http://localhost:3000` to use the password generator.**

>You can edit the scripts in package.json and the tailwind.config.js file to change input/output locations

<br/>

## Technologies Used </>
-   [Vite](https://vitejs.dev/) - Development Server and Build Tool
-   [ReactJS](https://reactjs.org/) - Frontend UI JavaScript Library
-   [Tailwind CSS](https://tailwindcss.com/) - CSS Framework

<br/>

## Development 🚀

-   **useState**: Manage state variables for dynamic updates and user input.

-   **useRef**:- 
	- useRef is a hook that returns a mutable ref object whose .current property is initialized to the passed argument (initialValue). 
	 - The returned object will persist for the full lifetime of the component. 
	 - Simply, kisi bhi value ko persist karne ke liye useRef hook ka use karte hain.

-   **useEffect**: Handle side effects like updating the password on user input changes.
	- useEffect is a hook that allows you to perform side effects in function components.
	 - Whatever is inside this function will be called when the component mounts and when the dependencies changes.
	- Basic Syntax - useEffect(() => {*//write the function body here*}, [*//here the dependencies goes*])

-   **useCallback**: 
	- useCallback is a hook that returns a memoized version of the callback function that only changes if one of the dependencies has changed.
	- Dependency array - whatever values is interlinked with each other, we put them in the dependency array.
	- Syntax - useCallback(() => {//write the function body here}, [//here the dependencies goes])

<br/>

## Author

- LinkedIn - [Rahul Saw](https://www.linkedin.com/in/rahulslnk/)
- Frontend Mentor - [@devrahuls](https://www.frontendmentor.io/profile/devrahuls)
- Twitter - [@rahulstwt_](https://twitter.com/rahulstwt_)

<br/>

## Contributions 🤝

Contributions are welcome! Feel free to open issues, submit pull requests, or provide feedback to enhance this password generator.

<br/>

## <h3 align="center">Show some ❤️ by giving ⭐ to this Repository!!</h3>
