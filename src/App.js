import './App.css';
import { useState } from 'react';
import starIcon from './images/icon-star.svg'
import receipt from './images/illustration-thank-you.svg'

function App() {

  const [selected, setSelected] = useState(null)
  const [displayThankyou, setDisplayThankyou] = useState(false)

  return (
    <div className="app">
      <div>

        <section className='frame'>
          {displayThankyou === false
            ?
            <>
              <div>
                <img src={starIcon} alt='star icon' className='star' />
              </div>

              <h1>How did we do?</h1>

              <p>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>

              {/* <form onSubmit={()=>setDisplayThankyou(true)}> */}
              <ol>
                <li
                  onClick={() => setSelected(1)}
                  className={selected === 1 ? 'selected one' : 'one'}
                >1</li>
                <li
                  onClick={() => setSelected(2)}
                  className={selected === 2 ? 'selected' : null}
                >2</li>
                <li
                  onClick={() => setSelected(3)}
                  className={selected === 3 ? 'selected' : null}
                >3</li>
                <li onClick={() => setSelected(4)}
                  className={selected === 4 ? 'selected' : null}
                >4</li>
                <li onClick={() => setSelected(5)}
                  className={selected === 5 ? 'selected' : null}
                >5</li>
              </ol>
              <button
                disabled={selected === null}
                onClick={() => setDisplayThankyou(true)}
              > SUBMIT</button>
              {/* </form> */}
            </>

            : displayThankyou === true
            &&
            <div className='thankyou'>
              <img src={receipt} alt='illustration of receipt' className='receipt'/>
              <h2>You selected {selected} out of 5</h2>
              <h1>Thank you!</h1>
              <p>We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>
            </div>
          }
        </section>

        <div class="attribution">
          Challenge by <a href="https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI" target="_blank">Frontend Mentor</a>.
          Coded by <a href="https://www.frontendmentor.io/profile/anne-mfl">Anne</a>.
        </div>

      </div>

    </div >
  );
}

export default App;
