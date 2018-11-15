import React, { Component } from 'react';
import { HashLink as Link } from 'react-router-hash-link';

class Speakers extends Component {
  render () {
    return (
      <div className='container' id='top'>
        <div className='container'>
          <h2 className='center-align'>Apply for a Scholarship!</h2>
          <p>We believe that true innovation comes from meeting, and listening to, a variety of perspectives. To that end, we are committed to building a diverse and inclusive conference. At this year&apos;s Serverless Days LA, we are offering five Opportunity Scholarships, in the hope of ensuring that anyone, and everyone, has the opportunity to participate in the unique Serverless Days experience.</p>
          <p></p>
          <p></p>
          <h5>Eligibility</h5>
          <p>Anyone from an underrepresented group in technology is invited to apply for a scholarship. This includes, but is not limited to: people of color, people with disabilities, people who identify as LGBTQIA+, indigenous people and other citizens of sovereign nations, women and non-binary people, those facing economic or social hardships, and veterans/service members.</p>
          <h5>Requirements</h5>
          <li>Must agree to follow our <Link className='blue-text text-lighten-3' to='/about#coc'>Code of Conduct</Link>.</li>
          <li>Must be 18 years old or over</li>
          <li>Must be able to attend the full Serverless Days LA 2019 schedule</li>
          <h5>What&apos;s Included</h5>
          <p>All scholarship awardees will be provided with a full access ticket to the entire conference, including all talks, activities, meals, and social events.</p>
          <i>Travel to and from the conference is not included.</i>
          <h5>Application Process</h5>
          <p>All applicants will fill out the below on-line scholarship application form by <span className="bold">January 31, 2019</span>. This is your chance to tell us your story!</p>
          <p>Once the scholarship application window closes, our scholarship selection committee will review all of the submitted applications. They will then award scholarships based on our eligibility criteria and the details of each applicant&apos;s story.</p>
          <p>We value your time, and we understand that planning several days away from work and/or family can be stressful. We will notify all applicants of the outcome of their application as soon as our selection committee has finished. In the event that a scholarship awardee is unable to accept, the unfulfilled scholarship will be offered to the next eligible applicant, time permitting.</p>
          <h4>Application</h4>
          <div className='center-align'>
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfVya74RKRW_20doJ5ZNNNj_WudzWcmjMFEsbaUsGVqKrc0VQ/viewform?embedded=true" width="100%" height="800" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>
          </div>
          <div className='space-foot' />
          <h5>Contact</h5>
          <p>If you have any questions about our Opportunity Scholarship, please feel free to contact us at <a href='mailto:lkinson@fender.com?subject=Scholarship'>lkinson@fender.com</a></p>
          <div className='space-foot' />
          <p>Want to find out who&apos;s speaking as soon as they&apos;re announced? Sign up for our <a data-target='signupModal' className='modal-trigger'>mailing list</a> to be notified.</p>
        </div>
      </div>
    );
  }
}

export default Speakers;
