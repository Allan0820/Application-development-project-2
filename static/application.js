const homepage= Vue.component('homepage', {
    template: `
    
    `
    ,
 mounted:function(){ console.log("hello")}
})

const loginpage= Vue.component('loginpage', {
    template: `
    <div>    
    <br><br>
    <h3> User Login </h3>

    <div class="container" style="max-width: 500px; border-radius: 10px;
    border: blue; border-width: 3px; 
     border-style:groove; height: 400px;">
     
     <br>


    <form method="POST" action="/api/UserLoginAPI" id="Login_info" onkeypress=" event.keyCode != 13;">
        
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Email address</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="Email_id" />
          
          <div id="emailHelp" class="form-text">If you are a new user, Sign up!</div>
          </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Password</label>
          <input type="password" class="form-control" id="exampleInputPassword1" name="Password" />
          
          <div id="emailHelp" class="form-text">Enter your password!</div>
        </div>
        <div class="mb-3 form-check">   </div>
        <div style="text-align: center;">
        <button type="submit" class="btn btn-outline-primary" style="border-radius:10px;border-width: 2px;"name='keyval' value='0'>Login</button> 
        &emsp;&emsp;
        <button type="submit" class="btn btn-outline-primary" style="border-radius:10px;border-width: 2px;" name='keyval' value='1' >Sign up</button>
      </div>
      <br>
      <button type="submit" class="btn btn-outline-danger" style="border-radius:10px;border-width: 2px; margin-left: 20px;"name='keyval' value='2'>Admin Login</button> 
        &emsp;&emsp;
    </form>
    </div>
    
    
  
     
</div>
`
})

const loginpageerr= Vue.component('loginpageerr', {
  template: `
  <div>    
  <div class="alert alert-danger" role="alert">
  You have entered the wrong credentials please try again!
</div>
  <br><br>
  <h3> User Login </h3>

  <div class="container" style="max-width: 500px; border-radius: 10px;
  border: blue; border-width: 3px; 
   border-style:groove; height: 400px;">
   
   <br>


  <form method="POST" action="/" id="Login_info" onkeypress=" event.keyCode != 13;">
      <h2>rendor</h2>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Email address</label>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="Email_id" />
        
        <div id="emailHelp" class="form-text">If you are a new user, Sign up!</div>
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Password</label>
        <input type="password" class="form-control" id="exampleInputPassword1" name="Password" />
        
        <div id="emailHelp" class="form-text">Enter your password!</div>
      </div>
      <div class="mb-3 form-check">
       
      </div>
      <div style="text-align: center;">
      <button type="submit" class="btn btn-outline-primary" style="border-radius:10px;border-width: 2px;"name='keyval' value='0'>Login</button> 
      &emsp;&emsp;
      <button type="submit" class="btn btn-outline-primary" style="border-radius:10px;border-width: 2px;" name='keyval' value='1' >Sign up</button>
    </div>

  </div>
  <br><br><br>
  <button type="submit" class="btn btn-outline-danger" style="border-radius:10px;border-width: 2px; margin-left: 20px;"name='keyval' value='2'>Admin Login</button> 
      &emsp;&emsp;
</form>
   
</div>
`
})

const signuppage= Vue.component('signuppage', {
  template: `
  <div>
  <br><br>
  <div class="container"   style="max-width: 500px; border-radius: 10px;
  border-color: rgb(31, 31, 255); border-width: 3px; 
  border-style:ridge; height: 600px;">
  <br>
  <form method="POST" action="/api/SignupAPI" id="Login_info" onkeypress=" event.keyCode != 13;">
  <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">Enter your First name</label>
      <input type="text" class="form-control" id="exampleInputtext" aria-describedby="emailHelp" name="f_name"/>
    
    </div>
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">Enter your Last name</label>
      <input type="text" class="form-control" id="exampleInputtext2" aria-describedby="emailHelp" name="l_name"/>
      <div id="emailHelp" class="form-text"></div>
    </div>
  <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">Enter your Email address</label>
      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="Email_id"/>
      <div id="emailHelp" class="form-text">Eg. someone@gmail.com</div>
    </div>
    <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label">Password</label>
      <input type="password" class="form-control" id="exampleInputPassword1" name="Password"/>
      <div id="emailHelp" class="form-text">Enter your password!</div>
    </div>
    <div class="mb-3 form-check">
     
    </div>
    <div style="text-align: center;">
  
    <button type="Login" class="btn btn-outline-success" style="border-radius:10px;border-width: 2px;">Sign up!</button>
 
</form>
</div>
</div>
`
})


const deckgen= Vue.component('deckgen', {
  delimiters: ["{[","]}"],
  template: `
  <div>


  <br>
  <!--div style="background-color: rgb(160, 153, 153);padding-top: 10px;padding-bottom: 10px;"-->
              
  <h3 style="text-align: center;">Choose your deck</h3>
  

  <br><br>
  <form action=" " method="POST">
      <div class="container" style="padding-left: 100px; padding-right: 100px;">
          <table class="table table-striped" style="text-align: center; ">
               <thead>
                  <tr>
                  <th scope="col">Sr.Number</th>
                  <th scope="col">Card Count</th>
                  <th scope="col">Deck Name</th>
                  <th scope="col">Score</th>
                  <th scope="col">Last Viewed</th>
                  <th scope="col">Choose</th>
                 </tr>
               </thead>
          <!--tbody >
             
             {% for items in send_list %} 
             
              <tr>
                
                  <th scope="row"> {{loop.index}} </th>
                  <td>{{items[0]}}</td>
                  <td>{{items[1]}}</td>
                  <td>{{items[2]}}</td>
                  <td>{{items[3]}}</td>
                  <td><input class="form-check-input" type="radio" name="user_deck_choice" id="flexRadioDefault1" value="{{loop.index}}">
                  <label class="form-check-label" for="flexRadioDefault1"> </label></td>
                 
              </tr>
              {% endfor %}
               
          </tbody-->
          
        </table>
      </div> 
       
  <!--/body-->
  <br> <br>
  
  <div style="text-align: center;min-width: 500px;"> </div>
   <!--button type="Login" class="btn btn-outline-warning" style="border-radius:10px;border-width: 2px;">Edit</button--> 
      <div class="btn-group" role="group">
          <button id="btnGroupDrop1" type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
          style="background-color: orange;border-color: orange;border-width: 2px;" data-bs-toggle="dropdown">
           Edit Deck
          </button>
          <div class="dropdown-menu" aria-labelledby="btnGroupDrop1">
              <button class="dropdown-item" name="button_value" value="01">Add Cards </button>
              <button class="dropdown-item"  name="button_value" value="02">Delete Cards</button>
          </div>
      </div>
      &emsp;&emsp;
      <button type="Login" class="btn btn-outline-danger" style="border-radius:10px;border-width: 2px;"  name="button_value" value="03">Delete Deck</button>
      &emsp;&emsp;
      <button type="Login" class="btn btn-outline-success" style="border-radius:10px;border-width: 2px;"  name="button_value" value="04">Add Deck</button>
      &emsp;&emsp;
      <button type="Login" class="btn btn-outline-primary" method="POST" style="border-radius:10px;border-width: 2px;"  name="button_value" value="05">Practice</button>
      &emsp;&emsp;
      <button type="Login" class="btn btn-outline-secondary" style="border-radius:10px;border-width: 2px;"  name="button_value" value="06">Exam mode</button>
  
  </form>  
   
</div>
`,
data: function(){
  
  return{
  card_nos:[],
  deck_names:[],
  card_scores:[],
  last_viewed:[],
  eid: this.$route.params.eid
  }

},

methods:{
  fetcher:function(){
      console.log("Inside fetcher")
      fetch('http://192.168.1.9:8080/api/DeckGeneratorAPI/{[$route.params.eid]}',
                   {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        "card_nos": this.card_nos,
                        "deck_names": this.deck_names,
                        "card_scores": this.card_scores,
                        "last_viewed":this.last_viewed
                    }),
                })
                .then(response => response.json())
                .then(data => {
                    console.log('Fetch was a Success:', data);
                   
                })
                .catch((error) => {
                    console.error('Error in fetch:', error);
                        });

                      } },

/*
mounted: async function (){
  console.log("Inside async")
  fetch('http://192.168.1.9:8080/api/DeckGeneratorAPI/{{$route.params.eid}}',
               {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    "card_nos": this.card_nos,
                    "deck_names": this.deck_names,
                    "card_scores": this.card_scores,
                    "last_viewed":this.last_viewed
                }),
            })
            .then(response => response.json())
            .then(data => {
                console.log('Fetch was a Success:', data);
               
            })
            .catch((error) => {
                console.error('Error in fetch:', error);
                    });

                  } 
*/





mounted: async function()

{

 // r=await fetch ("http://192.168.1.9:8080/api/DeckGeneratorAPI/allan.n.pais@gmail.com")
  r=await fetch ("http://192.168.1.9:8080/api/DeckGeneratorAPI/{[route.params.eid]}")
  console.log('{[this.$route.params.eid]}')
  
  
  d=await r.json()
  console.log("this information has been printed from the deckgen function in vue")
  console.log(d)
  
  console.log("End of the data")


}
})

const addcard= Vue.component('addcard', {
  template: `
  <div>
  <div style="background-color: rgb(160, 153, 153);padding-top: 10px;padding-bottom: 10px;">
                  
      <h3 style="text-align: center;">Add a new Card</h3>
  
  </div>
  <br><br>
  
  <form method="POST" action="/api/AddcardAPI/{{user_name}}/{{deck_name}}" id="Addcard_info" onkeypress=" event.keyCode != 13;">
  <div class="container", style="max-width: 700px; border-style: ridge;border-color: grey;
  padding-right: 50px;padding-left: 50px;padding-top: 50px; padding-bottom: 10px; margin-bottom: 60px; background-color: white;">
    
    <div class="mb-3">
      <label for="exampleFormControlInput1" class="form-label">Enter your question</label>
      <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Eg. Who is the prime minister of India" name="Question"/>
    </div>
    <div class="mb-3">
      <label for="exampleFormControlTextarea1" class="form-label">Enter your answer</label>
  
      <textarea  type="text" class="form-control" id="exampleFormControlTextarea1" rows="15"  placeholder="Eg. Narendra Modi" name="Answer"></textarea>
       
      
      
    </div>
    
    <button type="Login" method="POST" class="btn btn-outline-success" style="border-radius:10px;border-width: 2px;" name="choice" value="00">Add Card</button>
    &emsp;&emsp;
    <button type="Login" method="POST" class="btn btn-outline-danger" style="border-radius:10px;border-width: 2px;" name="choice" value="01" >exit</button>
    
  </div>
  </form>
  </div>
`
})




const NotFound = { template: '<p>Page not found</p>' }

const routes = [{
    path: '/loginpage',
    component: loginpage,
},{  
    path:'/',                                                                                      
    component: homepage,
 
},{
    path:'/loginpageerr',
    component: loginpageerr,
},
{
  path:'/signuppage',
  component: signuppage,
},

{
  path:'/decks.html/:eid',
  component: deckgen,
},
/*
{
  path:'addcard.html/:eid/:did',
  component: addcard,
},
*/
]

const router = new VueRouter({
  routes,
  base :'/'
  // short for `routes: routes`
})


const app = new Vue({
    el: '#app',
    router,
   
})
