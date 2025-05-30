import react, { useState } from "react";
// import react and useState hook from react library

const submitform = () => {
  // define a functional component called submitform

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    contact: "",
  });
  // declare a state variable 'user' with object containing form fields initialized as empty strings
  // setUser is the function to update 'user' state

  const [message, setMessage] = useState("");
  // declare a state variable 'message' to show submission success message or other messages

  const { name, email, password, contact } = user;
  // destructure user object properties for easy access

  const handleChange = (e) => {
    // function to handle changes in input fields
    const { name, value } = e.target;
    // get input name and value from event target
    setUser({ ...user, [name]: value });
    // update the user state by copying previous state and changing the specific field based on input's name attribute
  };

  const validateEmail = (email) => {
    // function to validate email format using regex
    return /\S+@\S+\.\S+/.test(email);
  };

  const validatePassword = (password) => {
    // function to validate password:
    // at least 8 characters, 1 uppercase, 1 lowercase, and 1 digit
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(password);
  };

  const validateContact = (contact) => {
    // function to validate bangladesh phone number format starting with 01 and 11 digits total
    return /^01[0-9]{9}$/.test(contact);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // prevent default form submission to avoid page reload

    if (!name || !email || !password || !contact) {
      // check if any field is empty
      alert("please fill all the fields");
      return;
    }

    if (!validateEmail(email)) {
      // validate email format
      alert("please enter a valid email");
      return;
    }

    if (!validatePassword(password)) {
      // validate password rules
      alert(
        "password must be at least 8 characters long and include at least 1 uppercase letter, 1 lowercase letter, and 1 number."
      );
      return;
    }

    if (!validateContact(contact)) {
      // validate bangladesh contact number format
      alert(
        "please enter a valid bangladesh contact number (e.g. 017xxxxxxxx)"
      );
      return;
    }

    // if all validations pass
    setMessage("form submitted successfully!");
    // set success message

    console.log(user);
    // log user data to console (for testing)

    setUser({ name: "", email: "", password: "", contact: "" });
    // clear form fields after submission

    setTimeout(() => {
      setMessage("");
    }, 2000);
    // clear success message after 2 seconds
  };

  return (
    <div className=" max-w-sm w-full mx-auto flex flex-col justify-center items-center  text-white my-20 ">
      {/* container div centered with some margin and max width */}
      <form
        action=""
        onSubmit={handleSubmit}
        className="shadow-2xl font-serif shadow-amber-900 border border-amber-400 bg-amber-500 hover:scale-105 transition-all duration-300 text-white p-12 rounded flex flex-col gap-3"
      >
        {/* form element with styling and submit handler */}
        <h2 className="text-2xl font-bold text-center mb-2">
          registration form
        </h2>
        {/* form title */}
        <p className="text-sm text-center mb-4">
          please fill in all fields below
        </p>
        {/* instructions */}

        <div>
          <label htmlFor="name" className="font-semibold ">
            name:{" "}
          </label>{" "}
          <br />
          {/* label for name input */}
          <input
            onChange={handleChange}
            type="text"
            placeholder="enter your name"
            name="name"
            id="name"
            value={name}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-none focus:ring-1 focus:ring-black/20 text-gray-200"
          />
          {/* controlled input for name, updates state on change */}
        </div>

        <div>
          <label htmlFor="name">email: </label> <br />
          {/* label for email input */}
          <input
            onChange={handleChange}
            type="email"
            placeholder="enter your email"
            name="email"
            id="email"
            value={email}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-none focus:ring-1 focus:ring-black/20 text-gray-200"
          />
          {/* controlled input for email */}
        </div>

        <div>
          <label htmlFor="name">password: </label> <br />
          {/* label for password */}
          <input
            onChange={handleChange}
            type="password"
            placeholder="enter your password"
            name="password"
            id="password"
            value={password}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-none focus:ring-1 focus:ring-black/20 text-gray-200"
          />
          {/* controlled input for password */}
        </div>

        <div>
          <label htmlFor="contact">contact no: </label> <br />
          {/* label for contact number */}
          <input
            onChange={handleChange}
            type="number"
            placeholder="enter your contact no"
            name="contact"
            id="contact"
            value={contact}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-none focus:ring-1 focus:ring-black/20 text-gray-200"
          />
          {/* controlled input for contact number */}
        </div>

        <button className="appearance-none border px-5 py-2 mt-6 rounded bg-gradient-to-r from-amber-900 via-black/80 to-yellow-700 cursor-pointer">
          submit
        </button>
        {/* submit button */}

        {message && <p className="text-green-500 font-sm">{message}</p>}
        {/* conditionally show message when it exists */}
      </form>
    </div>
  );
};

export default submitform;
