import React from 'react';
import {Link} from 'react-router'

function AboutTable() {
  var todayDate = new Date(),
      todayYear = todayDate.getFullYear(),
      todayMonth = todayDate.getMonth(),
      todayDay = todayDate.getDate(),
      birthYear = 1983,
      birthMonth = 10,
      birthDay = 24,
      age = todayYear - birthYear;
  if (todayMonth < birthMonth - 1) {
    age--;
  }
  if (birthMonth - 1 == todayMonth && todayDay < birthDay) {
    age--;
  }

  return (
    <div className='contentContainer'>
      <h1>About Me</h1>
      <h2>Hello!</h2>
      <div style={{textAlign: 'center'}}>
        My name is Spencer Ward, and I am a {age} year old web developer in Bozeman, Montana.
      </div>
      <div className='spacer15'></div>
      <div>
        I started my work in programming in 2007. I was a marketing assistant at a place called the&nbsp;
        <a href='https://www.comfortcompany.com' target='_blank'>Comfort Company</a>, a manufacturer of
        high-end wheelchair seating products. I came to the job with a basic knowledge of html, and was tasked
        with simple design work using Adobe tools, and generally doing odd jobs like data management in spreadsheets,
        pdf document creation, coordinating company events, etc.
      </div>
      <div style={{textAlign: 'center'}}>~~~~~~~</div>
      <div className='spacer15'></div>
      <div>
        At the time, the company had one person in charge of developing their website, and the intention
        was that once I had increased my coding skills further, I would enter a role as an assistant to this person.
        Well, a little under a year into the job, the lead developer quit, or was fired, or something happened; who knows?
        They were gone. This event dropped the entire website squarely onto my shoulders.
      </div>
      <div style={{textAlign: 'center'}}>~~~~~~~</div>
      <div className='spacer15'></div>
      <div>
        I had no choice. I had to figure something out. A trial by fire. Little by little, I taught myself how to code.
        The original website was made using a pre-built cart engine called X-Cart, which is a massive conglomeration of
        template files. In addition, the thing had been edited by my predecessor beyond recognition. More often than not, I was
        completely stymied. I got a lot of help from the fellows at <a href='https://jtechcommunications.com' target='_blank'>JTech Communications</a>.
      </div>
      <div style={{textAlign: 'center'}}>~~~~~~~</div>
      <div className='spacer15'></div>
      <div>
        After three years of doing it on my own, it was becoming pretty clear that I was reaching the upper limits of
        what I could teach myself. Then I noticed that JTech was hiring for a Junior Developer position. Perfect! I applied,
        and I was in. For two quality years, I worked as an understudy, planning and programming many website contracts,
        and also spending a lot of time as the Project Manager.
      </div>
      <div style={{textAlign: 'center'}}>~~~~~~~</div>
      <div className='spacer15'></div>
      <div>
        Then another opportunity came along. It came to my attention that my old friend&nbsp;
        <a href='https://www.linkedin.com/in/bent-cardan/' target='_blank'>Bent Cardan</a>, who was living in New York
        at the time, was getting into this coding thing. We got in touch, shared some stories, and then started
        talking about going into business for ourselves. I left JTech, and we started a little company called
        Chairlift Development. We had an...interesting year. As it turned out, we ended up doing a lot of work for
        my old employer, the Comfort Company. It eventually became clear that they really needed another
        full-time developer, not just a contractor. Bent and I parted ways, I went back to work for the CC, and he
        went on to become a very successful developer in his own right.
      </div>
      <div className='spacer15'></div>
      <div style={{textAlign: 'center'}}>~~~~~~~</div>
      <div className='spacer15'></div>
      <div>
        For four years, I was once more the lead (well, the only) web developer for the Comfort Company. I completely rebuilt
        the website from scratch, using Node.js, MongoDB, and NGINX. Front-end, back-end, database, server, I did it all.
        There were many late nights, and many stressful hours, but there are few things more rewarding than being able to
        look at a project and say "I made that whole damn thing." When I look at some of that old code I cringe, but I also know
        how much I've improved since then.
      </div>
      <div className='spacer15'></div>
      <div style={{textAlign: 'center'}}>~~~~~~~</div>
      <div className='spacer15'></div>
      <div>
        And now here I am. Again, I found myself reaching the limits of what I could teach myself, and I knew there were
        a lot of things I could be doing better. I needed some formal instruction. I said farewell to the CC a second time, and
        I enrolled in the <a href='http://www.bigskycodeacademy.org/' target='_blank'>Big Sky Code Academy</a>. I think, at long last,
        I'm learning how to "do it right." We'll see what's next!
      </div>
      <div className='spacer30'></div>
      <div className='spacer30'></div>
      <div className='aboutMeBox'>
        Spencer Ward was born in Castro Valley, California. When he had just turned four years old, his parents, both native Montanans,
        decided to move back to Bozeman. He grew up learning to ski, golf, play violin, and enjoy country life at the base of the
        Bridger Mountains. Upon reaching high school age, Spencer attended and graduated from the Cate School in Carpinteria, CA.
        Returning to Bozeman, he spent some time studying various subjects at Montana State University, before stumbling into
        computer programming. His new favorite hobby is flyfishing on the Beaverhead River.
      </div>
    </div>
  )
}

export default AboutTable;
