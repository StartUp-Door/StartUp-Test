/* Tutorial at https://youtu.be/MAD2HnUFjgg */

import React from "react";
import ReactDOM from "react-dom";
import Accordion from "./components/Accordion";

import "./styles.css";

export default function Question() {
  return (
    <div className="ques2">
      <Accordion
        title="How to register as a service provider?"
        content="
        <ul>
         <li>First open an account at ‘Startup Door’.</li>
        <li>View profile, go to this page.</li>
        <li>Click on the red add subscription button. You will see the New Subscription Form,</li>
        <ol>
        <li>Choose the service you provide</li>
        <li>Select the area where you work</li>
        <li>Provide a brief description of the service you provide</li>
        <li>If you have pictures of the service you are doing, click the select images button and enter</li>
        <li>Check that the details you entered are correct and press the green add button</li>

        </ol>
        Our agent will verify your details and then you can apply for jobs under that category.
        </ul>"
      />
      <Accordion
        title="How to apply for jobs?"
        content="
        <ul>
        <li>view profile, go to this page.</li>
        <li>Select the category of services for which you are registered and select a job in the 'new' state.</li>
        <li>Click on the selected job.</li>
        <li>Look at the job description page and comment or chat if you want to know more.</li>
        <li>If you can do the job, click on the green 'Apply' button.</li>
        <li>Then in the form that appears, type an attractive message that will enable you to get the job and press the red 'Send' button.
        The person who posted the job will select the best candidate from the applications he/she receives and will give you the job.</li>
        </ul>

        "
      />
      <Accordion
        title="How do I respond to a job invitation?"
        content="
       <ul>
       <li>My jobs, from here You can see the job invitations you have received under the 'Invites for me' category on the My jobs page.</li>
       <li>If you have received any job invitation, click on that job.</li>
       <li>Then look at the info page and if you want to know more you can click the chat button and have a chat with the service provider.</li>
       <li>If you can do the job, click on the 'ACCEPT' button and then you can contact the person who posted the job and get it.</li>
       <li>please click the 'REJECT' button to notify us that it is not possible to do</li>
       </ul>
        "
      />
    </div>
  );
}

