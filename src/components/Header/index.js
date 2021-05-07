import React from "react";
import SearchForm from "../SearchForm";
import "./style.css";

function Header() {
    return (
        <header className="header">
            <h1>Employee Tracker</h1>
            <p>Search for an employee or sort by Name or Category:</p>
            <SearchForm />
        </header>
    );
}

export default Header;