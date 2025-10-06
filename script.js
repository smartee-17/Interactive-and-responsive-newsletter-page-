
// Data stored in variales

  const mainDivElement = document.querySelector('.js-main-div');

  const signUpElement = document.querySelector('.js-sign-up');

  const successMessageElement = document.querySelector('.js-success-msg');

  const loadingScreenElement = document.querySelector('.js-loading-scr ');

// Signup InnerHtml
  signUpInnerHtml();

  const inputElement = document.querySelector('.js-email-input');

// last two screen innerHtml

  lastTwoInnerHtml();

// Last two screen innerHtml variables stored

  const errorMessageElement = document.querySelector('.js-error-msg');

  const subscribeButtonElement = document.querySelector('.js-subscribe-btn');

  const dismissBtnElement = document.querySelector('.js-dismiss-btn');

  const timerCountElement = document.querySelector('.js-timer-count');

  const email = document.querySelector('.js-email');

  // Timer and time interval stored

  let timer = 0;

  let timeInterval = null;

// Data variables storage ended

// Hide class function
  addHideClass();


// Function to add hide class dynamically starts

function addHideClass() {
    if (!loadingScreenElement.classList.contains('hide')){
      
      successMessageElement.classList.add('hide');
      loadingScreenElement.classList.add('hide');
      errorMessageElement.classList.add('hide');

    }
}

// Function to add hide class dynamically ends


// Function for the inner html of signUp innerhtml starts

function signUpInnerHtml() {

  signUpElement.innerHTML = `
<div class = "sign-up">
  <article>
    <h1>
      Stay updated!
    </h1>

    <p>
      Join 60,000+ product managers receiving monthly updates on:
    </p>

    <ul>

      <li>
        <p>Product discovery and building what matters</p>
      </li>

      <li>
        <p> Measuring to ensure updates are a success</p>
      </li>

      <li>
        <p>And much more!</p>
      </li>
      
    </ul>


    <div class="email-input">

      <div class = "email-head">

      <h2>Email address</h2>
      <div class="js-error-msg"></div>

      </div>


      <input type="email" 
      class="js-email-input"
      placeholder="email@company.com">

      
    </div>


    <button class="subscibe-btn js-subscribe-btn">
      Subscribe to monthly newsletter
    </button>

  </article>

  <div class="image">
    <img src="./illustration-sign-up-desktop.svg" alt="">
  </div>

</div>
`

}

// Function for the inner html of signUp innerhtml ends 

// Function for the lastTwoInnerHtml starts

function lastTwoInnerHtml() {

    successMessageElement.innerHTML= `
      <div class="success-msg">

      <img src="./icon-success.svg" alt="">
      
        <h3> Thanks for subscribing! </h3>

        <p>
          A confirmation email has been sent to <span class = "js-email"></span>. Please open it and click the button inside to confirm your subscription.
        </p>

        <button class = "js-dismiss-btn dismiss-btn">
          Dismiss message
        </button>

      </div>
    
    `

    loadingScreenElement.innerHTML = `
        <div class = "loading-scr">
        <p>Please wait...<span class = "js-timer-count"></span></p>
        </div>
    `
};

// Function for the lastTwoInnerHtml ends


// Function for the subscribe Button starts

  function subscribeButton() {

    const mainDivElement = document.querySelector('.js-main-div');

    const successMessageElement = document.querySelector('.js-success-msg');

    const errorMessageElement = document.querySelector('.js-error-msg');

    const inputElement = document.querySelector('.js-email-input');

    const loadingScreenElement = document.querySelector('.js-loading-scr');
    
    const email = document.querySelector('.js-email');

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    addHideClass();
    
    if (!inputElement.value) {
      errorMessageElement.classList.remove('hide');

      errorMessageElement.classList.add('error-msg');

      errorMessageElement.innerHTML = `
          <span>Enter email, please</span>
      `

      inputElement.classList.add('error-color');
  
      return;
    } else if (!regex.test(inputElement.value)) {

        errorMessageElement.classList.remove('hide');

        errorMessageElement.classList.add('error-msg');

        errorMessageElement.innerHTML = `
            <span>Email looks wrong</span>
        `
  
        inputElement.classList.add('error-color');

  
        return;
     
    }
    else{

      if (!signUpElement.classList.contains('hide')){

        signUpElement.classList.add('hide');
        
      } 


        mainDivElement.innerHTML = loadingScreenElement.innerHTML;

        email.textContent = inputElement.value; 
        

        timer = 0;

        
        timerCount();
  
  
    }


};

// Function for the subscribe Button ends


// timer count function starts

function timerCount() {

  const timerCountElement = document.querySelector('.js-timer-count');

    timer = 0;

    clearInterval(timeInterval);
    timerCountElement.textContent = timer;


    timeInterval = setInterval(() => {
    timer ++;
    timerCountElement.textContent = timer;

    if (timer >= 5){

    clearInterval(timeInterval);


    mainDivElement.innerHTML = successMessageElement.innerHTML;

    
    }

    }, 1000);

    };

// timer count function ends


// dismiss Button function starts

function dismissButton() {
      timer = 0;

      successMessageElement.classList.add('hide');
      signUpElement.classList.remove('hide');

      if(errorMessageElement) {
        errorMessageElement.textContent = '';
        errorMessageElement.classList.add('hide');
      }

      mainDivElement.innerHTML = signUpElement.innerHTML;

};

// dismiss Button function ends

// MainDivElement event delegation starts

mainDivElement.addEventListener('click', (e) => {

      if (e.target.classList.contains('js-subscribe-btn')) {
        lastTwoInnerHtml();
        subscribeButton();
        addHideClass();

      };

      if (e.target.classList.contains('js-dismiss-btn')) {
        dismissButton();
        addHideClass();
      }
});

mainDivElement.addEventListener('keydown', (e) => {

  if (e.key === 'Enter'){
    const inputElement = document.querySelector('.js-email-input');

    if (inputElement && document.activeElement === inputElement){
      subscribeButton();
    }
  }

});

// MainDivElement event delegation ends