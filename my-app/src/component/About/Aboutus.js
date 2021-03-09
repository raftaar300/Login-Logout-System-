import React from 'react'

const Aboutus = ()=>{


    return (<>
        <div  style={{width: "85%" , padding : "20px" ,margin : "auto"}}>


    <h2>The Data</h2>

    <br/>

    <p>
        The first iteration of Salary Ninja uses the data from the <a href="https://www.dol.gov">U.S. Department of
        Labor</a>. The data is generated when the U.S. companies apply for work permit visa (H-1B) to employ foreign
        workers. That is why this data is real, unlike many other websites that uses anonymous, self-reported data.

        <br/><br/>

        I performed my own preprocessing to the raw data to keep things simple. For example, I removed positions that
        were part-time or had hourly pay (instead of yearly salary). Also, my database data from 2015-2018.

        <br/><br/>

        References:

    </p><ul>
        <li><a href="https://www.dol.gov"> Department of Labor (DOL)</a></li>
        <li><a href="https://www.doleta.gov"> Employment &amp; Training Administration (ETA) </a></li>
        <li><a href="https://en.wikipedia.org/wiki/H-1B_visa"> What is H-1B </a></li>
        <li><a href="https://www.foreignlaborcert.doleta.gov/performancedata.cfm#dis"> Data Source </a></li>
    </ul>
    <p></p>
    <br/>

    <h2>The Name</h2><br/>

    <p>
        Why is it called the Salary Ninja? I wanted the domain name to include the word “salary” while excluding too
        specific words like “h1b.” I was searching for some options on GoDaddy, then I came across salary.ninja. I liked
        that it was a fun phrase and that it reminded me of someone searching through salary data like a ninja. So I
        went with it!
    </p>


 

</div>
  </>  )
}

export default Aboutus;