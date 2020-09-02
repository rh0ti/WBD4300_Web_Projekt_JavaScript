
//-------------------------------------------------------------- ScrollUp Button ---------------------------------------------------------------//
$(document).ready(function (){

//While scrolling up the topBtn will slowly disappear

  $(window).scroll(function(){
    if($(this).scrollTop() > 40){
      $('#topBtn').fadeIn();
    }else{
      $('#topBtn').fadeOut();
    }
  })
  
  //When click on the topBtn-Button the side will Scroll to the top

  $("#topBtn").click(function(){
    // $(console.log) - Debug-Logs
    $('html ,body').animate({
    scrollTop : 0},800);
  });

});

//-------------------------------------------------------------- Slider ---------------------------------------------------------------//

$(document).ready(function(){
    
  //Button variables (arrows & checkbox)

  const prevBtn = $('a.button_zurueck'),
  nextBtn = $('a.button_weiter')


  //Slideshow Variables
  let slider = $('.container-slides'),
  sliderUl = slider.children('ul'),
  slides = sliderUl.children('li'),
  slideCount = slides.length,
  slideWidth = slides.width(),
  slideHeight = slides.height(),
  sliderUlwidth = slideCount * slideWidth

  slider.css({
    width: slideWidth,
    height: slideHeight
})

  // fit the row (ul) of slides

  sliderUl.css({
    width: sliderUlwidth,
    marginLeft:-slideWidth
  })

  
  let sliderInterval;


  //take the last slide and prepend to the row of slides

  slides.last().prependTo(sliderUl)


  //Click events!

  prevBtn.on('click',moveLeft)
  nextBtn.on('click',moveRight)


  function moveLeft(e){
        //$(console.log) - Debug-Logs
      if(e){
          e.preventDefault()
      }
      //Animate the movement of the slide

      sliderUl.animate({
          left: +slideWidth
      }, 200, function(){
          $(this).children('li').last().prependTo(sliderUl)
          $(this).css('left','')
      })
      
  }

  function moveRight(e){
      //$(console.log) - Debug-Logs
      if(e){
          e.preventDefault()
      }
      //Animate the movement of the slide

      sliderUl.animate({
          right: +slideWidth
      }, 200, function(){
          $(this).children('li').first().appendTo(sliderUl)
          $(this).css('right','')
      })

  }


})


//-------------------------------------------------------------- Gallery ---------------------------------------------------------------//

$(document).ready(function(){

  //If mouse enter the photo, it will shown on the big div 

  $('.image-1').on({
    //Event is of mouse enter an image
    'mouseenter': function(){
      //$(console.log) - Debug-Logs
      //attribut src will changed to the new src
        $('#change-image').attr('src','images/bild-1.jpeg');
    }
});

$('.image-2').on({
  'mouseenter': function(){
      $('#change-image').attr('src','images/bild-2.jpg');
  }
});

$('.image-3').on({
  'mouseenter': function(){
      $('#change-image').attr('src','images/bild-3.jpeg');
  }
});

$('.image-4').on({
'mouseenter': function(){
    $('#change-image').attr('src','images/bild-4.jpeg');
}
});

$('.image-5').on({
  'mouseenter': function(){
      $('#change-image').attr('src','images/bild-5.jpeg');
  }
});

$('.image-6').on({
  'mouseenter': function(){
      $('#change-image').attr('src','images/bild-6.jpeg');
  }
});

$('.image-7').on({
  'mouseenter': function(){
      $('#change-image').attr('src','images/bild-7.jpeg');
  }
});

$('.image-8').on({
  'mouseenter': function(){
      $('#change-image').attr('src','images/bild-8.jpeg');
  }
});

$('.image-9').on({
  'mouseenter': function(){
      $('#change-image').attr('src','images/bild-9.jpeg');
  }
});

$('.image-10').on({
  'mouseenter': function(){
      $('#change-image').attr('src','images/bild-10.jpg');
  }
});

$('.image-11').on({
  'mouseenter': function(){
      $('#change-image').attr('src','images/bild-11.jpeg');
  }
});

$('.image-12').on({
  'mouseenter': function(){
      $('#change-image').attr('src','images/bild-12.jpeg');
  }
});

});



//-------------------------------------------------------------- Sidebar ---------------------------------------------------------------//

$(document).ready(function(){

//By clicking the Burgermenu (SidebarBtn), the sidebar will show. When click on Bergermenu again it will close.(Toggle)
    $('.sidebarBtn').click(function(){
              //$(console.log) - Debug-Logs
        $('.sidebar').toggleClass('active');
        $('.sidebarBtn').toggleClass('toggle');
    })

})

//-------------------------------------------------------------- Formular ---------------------------------------------------------------//


//This is the click event listener which will trigger when the button is clicked
document.querySelector('form button').addEventListener('click', (e)=>{
    e.preventDefault()
  
    //This deletes any spans in the form, if there is any
    if(document.querySelector('span')){
      document.querySelectorAll('form span').forEach(element => {
        element.remove()
      })
    }
  
    validateForm()
  })
  
  //Now we are validating all the different inputs
    function validateForm(){
    //This will contain all of our data form
    const data = {}
      //This will contain all of our errors
    const validationErrors = {}
  
    //we have to put in the information for our data object
    data.fullName = document.querySelector('#full-name')
    data.email = document.querySelector('#email')
    data.betreff = document.querySelector('#betreff')
    data.textarea = document.querySelector('#textarea')

    // After we have our data, we can validate
  
    // First Name - check if there is a value
    if(!data.fullName.value){
      console.error('Kein Name')
      validationErrors.fullName = 'Kein Name vorhanden';
    }else{
      console.info('Name vorhanden')
    }
    
    // Betreff - check if there is a value
    if(!data.betreff.value){
      console.error('kein Betreff/Anfrage')
      validationErrors.betreff = 'Kein Betreff/Anfrage vorhanden';
    }else{
      console.info('Betreff/Anfrage vorhanden')
    }
  
    // Email - check if there is a value
    if(!data.email.value){
      console.error('Keine Email')
      validationErrors.email = 'Keine Email vorhanden';
    }else{
      console.info('Email present')
      //test if the email is useing regular expressions
      let emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;     
      if(!emailRegExp.test(data.email.value)){
        //Error if its not matching
        validationErrors.email = 'Invalid email address'
      }
    }

    // Message - check if there is a value
    if(!data.textarea.textLength){
      console.error('Deine Nachricht ist zu kurz')
      validationErrors.textarea = 'Deine Nachricht ist zu kurz';
    }else{
      console.info('First Name present')
    }
  
    // We check if the errors object is empty
    if(Object.keys(validationErrors).length > 0 ){
        console.log( 'error' )
        displayErrors (validationErrors, data)
      }else{
        // otherwise we call our sendForm object, we only need to pass the data here
        console.log('no error')
        sendForm(data)
      }
    }
  
  // Display Errors function
  
  // This function will check which errors are present
  function displayErrors (errors, data) {
    // If there is a firstName Error, then we can call a function which will create an element and insert it into the HTML
    if(errors.fullName){
      createAfter(data.fullName, errors.fullName)
    }
    // Same with the other errors
    if(errors.betreff){
      createAfter(data.betreff, errors.betreff)
    }
    if(errors.email){
      createAfter(data.email, errors.email)
    }
    if(errors.textarea){
        createAfter(data.textarea, errors.textarea)
      }
  }
  
  // This createAfter function, works together with the displayError Function. If the displayError function notices that an 
  // error is present, then it will call this function which the specific error and give us the input which we will use as a 
  // reference to insert our element after
  function createAfter (reference, textarea) {
    // first we create the span
    let errorBox = document.createElement('span')
    // then we insert some content into the span, in this case the error message
    errorBox.innerHTML = textarea
    // lastly we insert the span AFTER the reference point
    /* THANKS Simon for telling me about this method */
    reference.after(errorBox)
  }
  
  // This function will be called if there are no validation errors and the data can be sent
  function sendForm(data){
    document.querySelector('form').style.display = 'none'
    let box = document.createElement('div')
    box.className = 'mybox'

    // when we finally handle the data of the form, it's a good idea to trim() it first
    // This will remove any unwanted spaces, before or after the data
    box.innerHTML = `  
    <ul>
      <li><h3>Vielen Dank für Ihre Nachricht!</h3></li>
      <li><h3>Wie werden uns sobald wie möglich bei Ihnen melden.</h3></li>
      <br>
      <li>Full Name: ${data.fullName.value.trim()} </li>
      <li>Betreff: ${data.betreff.value.trim()} </li>
      <li>Email: ${data.email.value.trim()} </li>
    </ul>
    `

    document.querySelector('div .form-contact').appendChild(box)
  }
  
  document.querySelector('textarea').addEventListener('input', e =>{
    console.log(e.target.textLength)   

    //createAfter(e.target,)

    if(!document.querySelector('.counterBox')){
          const counterBox = document.createElement('span')
          counterBox.setAttribute('class', 'counterBox')
          counterBox.innerHTML = e.target.textLength
          e.target.after(counterBox)
      }else{
          document.querySelector('.counterBox').innerHTML = e.target.textLength
      }

    if(e.target.textLength < 20){
      document.querySelector('.counterBox').style.color = 'red'
    }else{
      document.querySelector('.counterBox').style.color = 'lime'
  }

})




