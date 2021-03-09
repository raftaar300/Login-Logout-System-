import React from 'react'
import Login from '../login/Login'

const Home = () => {

    return (
        <div className="Conatiner">

            <div className={"welcome"} style={{ padding: "10px", width: "600px", marginLeft: "30px" }}>
                <h2>Welcome to Salary Ninja!</h2><br />
                <p>
                    Welcome to Salary Ninja, a search tool for salary insights. Salary Ninja was built to demystify salary data.
                    During a job search, negotiating the right salary can be difficult. Salary Ninja wants to help you by providing
                    insights with real data. Even though there are other tools available like Salary Ninja, I wanted to add my own
                    taste and insights and different sources of data. I will gradually add more features. I hope you find this tool
                    useful.

        <br /><br />

        Disclaimer: I built this site for fun and to learn. Please bear with me as I constantly strive to improve this
        website.
    </p>


            </div>
            <div className={"loginform"}>
                <Login />
            </div>

        </div>
    )

}

export default Home;