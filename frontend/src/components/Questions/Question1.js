/* Tutorial at https://youtu.be/MAD2HnUFjgg */

import React from "react";
import ReactDOM from "react-dom";
import Accordion from "./components/Accordion";

//import "./styles.css";

export default function Question1() {
  return (
    <div className="ques1">
      <Accordion
        title="How to post a job"
        content="
        <h5>This can be done in two ways</h5>
        <h6>Method 1 - public job</h6>
        <ul>
  <li>Click on the blue 'Request job' button at the top of the web page.</li>
  <li>Now you will see the post job form</li>
  <ol>
  <li>Provide a title that fits the job</li>
  <li>Provide a breif description of he job</li>
  <li>If you can state an estimated fee for this job.(This is mot mandatory)</li>
  <li>Type the work area you need the job to be done then select the relevant area from the suggested results.</li>
  <li>If you have pictures about the job, click the 'choose images' button and enter.</li>
  <li>Check that the details you entered are correct and press the red 'Post' button</li>
 
  </ol>
  Our agent will check the details of the job and publish it as soon as possible
</ul>
<h6>Method 2 - Getting a Direct Job</h6>

<ul>
<li>Service Providers page you can find the service provider by the relevant type of job, area or name of the service provider.</li>
<li>Click on the service provider you like from the results.</li>
<li>You can see his / her / organization's details, past work responses, and received badges on the service provider's info page.</li>
<li>Select the service provider that suits best for your needs and click on the pink 'Invite for a job' button.</li>
The service provider will accept the job if it is feasible and will notify you if not.
</ul>"
      />
     
    </div>
  );
}

