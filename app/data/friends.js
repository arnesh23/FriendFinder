

var playerScore = []

var friendArray = [
    {
    "name":"Maira",
    "photo":"https://avatars2.githubusercontent.com/u/44563473?s=64&v=4",
    "scores":[
      Math.floor((Math.random() * 5) + 1),
      Math.floor((Math.random() * 5) + 1),
      Math.floor((Math.random() * 5) + 1),
      Math.floor((Math.random() * 5) + 1),
      Math.floor((Math.random() * 5) + 1)
      ]
  },
  {
    "name":"Jimmy",
    "photo":"https://avatars0.githubusercontent.com/u/9958914?v=4",
    "scores":[
      Math.floor((Math.random() * 5) + 1),
      Math.floor((Math.random() * 5) + 1),
      Math.floor((Math.random() * 5) + 1),
      Math.floor((Math.random() * 5) + 1),
      Math.floor((Math.random() * 5) + 1)
      ]
  },
  {
    "name":"Michael",
    "photo":"https://avatars1.githubusercontent.com/u/44514721?s=64&v=4",
    "scores":[
      Math.floor((Math.random() * 5) + 1),
      Math.floor((Math.random() * 5) + 1),
      Math.floor((Math.random() * 5) + 1),
      Math.floor((Math.random() * 5) + 1),
      Math.floor((Math.random() * 5) + 1)
      ]
  },
  {
    "name":"Pete",
    "photo":"https://avatars2.githubusercontent.com/u/43353621?s=64&v=4",
    "scores":[
      Math.floor((Math.random() * 5) + 1),
      Math.floor((Math.random() * 5) + 1),
      Math.floor((Math.random() * 5) + 1),
      Math.floor((Math.random() * 5) + 1),
      Math.floor((Math.random() * 5) + 1)
      ]
  },
  {
    "name":"Jacob",
    "photo":"https://avatars0.githubusercontent.com/u/40594826?s=64&v=4",
    "scores":[
      Math.floor((Math.random() * 5) + 1),
      Math.floor((Math.random() * 5) + 1),
      Math.floor((Math.random() * 5) + 1),
      Math.floor((Math.random() * 5) + 1),
      Math.floor((Math.random() * 5) + 1)
      ]
  }
]

$('#submitButton').on('click', function(event) {
  event.preventDefault();
 console.log("hello")
 console.log($('input[type=radio][name=color]:checked').attr('id'))
 console.log($('input[type=radio][name=season]:checked').attr('id'))
 console.log($('input[type=radio][name=drink]:checked').attr('id'))
 console.log($('input[type=radio][name=hobby]:checked').attr('id'))
 console.log($('input[type=radio][name=vacation]:checked').attr('id'))

});
  
  