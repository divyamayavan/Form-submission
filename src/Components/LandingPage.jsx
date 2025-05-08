import React from "react";
import "./LandingPage.css";

function LandingPage() {

    function handleSubmit(e) {
        e.preventDefault();

        const firstName = e.target.username.value.trim();
        const email = e.target.email.value.trim();
        const password = e.target.password.value;
        const confirmPassword = e.target.confirmPassword.value;
        const phone = e.target.phone.value.trim();

        // simple validation

        if (!firstName || !email || !password || !confirmPassword || !phone) {
            alert("Please fill in all fields.");
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        if (password !== confirmPassword) {
            alert("Passwords do not match.");
            return;

        }

        const phoneRegex = /^\d{10}$/;
        if (!phoneRegex.test(phone)) {
            alert("Please enter a valid phone number (10 digits).");
            return;
        }

        alert("Form submitted successfully!");
        console.log(
            `firstName : ${firstName}
             email : ${email}
             password : ${password}
             confirmPassword : ${confirmPassword}
             phone : ${phone}`)

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
                    <label htmlFor="firstName">First Name:</label>
                    <input type="text" id="firstName" name="username" placeholder="First Name" required minLength={2}/>

                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" placeholder="Email" required />

                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" placeholder="Password" required minLength={6}/>

                    <label htmlFor="confirmPassword">Confirm Password:</label>
                    <input type="password" id="confirmPassword" name="confirmPassword" placeholder="Confirm Password" required />

                    <label htmlFor="phone">Phone Number:</label>
                    <input type="text" id="phone" name="phone" placeholder="Phone Number" pattern="\d{10}" title="Enter 10 digit number" required />

                    <button type="submit">Submit</button>
                    <button className="reset" type="reset" onClick={handleReset}>Reset</button>
                </form>


            </section>


        </>
    )
}

export default LandingPage;