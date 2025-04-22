# Dental Pain Tracker!
## Inspiration 💡
Going to the dentist is a source of anxiety and discomfort for many. Our team shared mutual experiences of dental pain during check-ups and wanted to provide a solution that would enable the patient to communicate how much pain they felt to their dentist.  
<br>
Our idea first began with a device that patients could grip and squeeze depending on how much pain they felt. It would track the strength of their grip and send that data to a front-end to give the dentists information on how their patient is feeling. This would mitigate the current experience of dentists having to ask their patients and the patient responding uncomfortably.
<br>
## What it does 💭
Introducing **Denteel.**  
<br>
Denteel combines "dental" and "genteel" in our quest to deliver a positive, refined experience at the dentist.  
<br>
Due to a lack of a pressure-based sensor to measure input, we pivoted to four buttons that would represent a pain rating scale from 1-4. 1 being the lowest amount of pain (leftmost button) and 4 being the highest amount of pain (rightmost button). Due to our Arduino being wifi dependent and unstable, we included an option for the patient to communicate using the 1-4 number keys on the keyboard instead.  
<br>
For better visualization, dentists can upload a recent scan of their patient's teeth and have it up on the screen as the alerts come in. The dentist is able to view the pain rating as soon as it comes in as well as a time log of every alert during the appointment. Once the session is complete, the dentist is able to view an end summary report on how the session went- viewing the average pain rating disclosed, the time elapsed, and the total number of pain ratings disclosed. This provides valuable feedback to the dentist on how well the patient responded to their treatment.  
<br>
## How we built it 🔨
The web app component of Denteel was built using Next.js, React, Convex, HTML/JS/CSS, and Figma. An Arduino kit was used to create the hardware component, and we read inputs from it using Arduino IoT Cloud.  
<br>
## Challenges we ran into 😓
We started off with the goal of executing our idea with Arduino and a web app interface. None of us had previous hardware experience, so we believed this to be a good way to challenge ourselves.  
<br>
We didn't have the resources to acquire a pressure sensor, so we pivoted to four buttons (hence our pain rating scale from 1-4). Although our wiring of the Arduino turned out successful after help from tutorials and mentors, our Arduino short-circuited and we ran into errors trying to debug it. It now works, and button presses are logged into our software - but the Arduino was also wifi-dependent and we kept losing connection. We also needed to use an Arduino Cloud IoT platform, but realized too late that many of the features we needed were payealled.  
<br>
## Accomplishments that we're proud of and what we learned ✅
Our proud that we were able to adapt quickly and produce a functional app, and that we were able to come up with a solution to a problem that most individuals face in a creative manner.  
<br>
We also stretched out of our comfort zones to work with the Arduino component, since we all had zero experience with hardware until this project. It was challenging and frustrating at times, so it feels like an immense accomplishment that we were able to get it to work (when wifi is stable)! Two of our front-end developers were also new to Next.js and Chakra UI, so there was a bit of a learning curve, but we all picked up the new technologies and adapted pretty quickly.  
<br>
### What's next for Denteel 🌅
We would love to be able to advance our Arduino knowledge and incorporate directional feedback into Denteel, so to give the dentist a better idea of where the patient is feeling pain from. Perhaps through a joystick component, the patient can indicate if they are feeling pain in a particular direction.
<br>
We would also love to play around with our initial idea of a pressure sensor so the patient can grip the sensor according to the level of pain they are feeling (e.g. minor pressure placed to a lot of pressure placed.) This allows for a better user experience, as the user can feel like they are gripping a stress ball and doesn't have to remember which buttons are which/figure out their pain rating on a scale of 1-4. As we continue to refine our knowledge of hardware and Arduino, we hope to add even more functions to our device, including a joystick for the patient to indicate the location of their oral discomfort.  
<br>
In terms of data visualization, perhaps having a real-time graph or chart would help the dentist be able to see immediate changes without having to look at a time log. This would improve the user experience for the dentist.  
<br>
We could also update our backend to store the scans that dentists put in. Future iterations of this app would save data from every session and have a page that maps trends over time so that dentists in training and view their performance and learn more.  
<br>  
Overall, we believe that our solution is revolutionary in terms of changing the way that dentists communicate with their patients by facilitating a more efficient and accessible feedback system.
