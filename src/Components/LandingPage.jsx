import React from "react";
import "./LandingPage.css";

function LandingPage() {

    function handleSubmit(e) {
        e.preventDefault();
        alert("Form submitted successfully!");
        console.log(
            `First Name: ${e.target.username.value},
             Email: ${e.target.email.value}, 
             Password: ${e.target.password.value}, 
             Confirm Password: ${e.target.confirmPassword.value}, 
             Phone Number: ${e.target.phone.value}`
        );
    }

    function handleReset() {
        console.clear();
    }

 return (
        <>
            <header className="header">
                <div className="logo">Curiosity <span>Academy</span></div>
                <nav className="navbar">
                    <ul>
                        <li><a href="#">About us</a></li>
                        <li><a href="#">Programs</a></li>
                        <li><a href="#">Testimonials</a></li>
                        <li><a href="#">Contacts</a></li>
                    </ul>
                </nav>
            </header>

            <section className="hero">
                <form onSubmit={handleSubmit}>
                    <label for="firstName">First Name:</label>
                    <input type="text" id="firstName" name="username" placeholder="First Name" required />

                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" placeholder="Email" required />

                    <label for="password">Password:</label>
                    <input type="password" id="password" name="password" placeholder="Password" required />

                    <label for="confirmPassword">Confirm Password:</label>
                    <input type="password" id="confirmPassword" name="confirmPassword" placeholder="Confirm Password" required />

                    <label for="phone">Phone Number:</label>
                    <input type="text" id="phone" name="phone" placeholder="Phone Number" required />

                    <button type="submit">Submit</button>
                    <button className="reset" type="reset" onClick={handleReset}>Reset</button>
                </form>


            </section>


        </>
    )
}

export default LandingPage;