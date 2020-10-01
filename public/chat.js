//Make connection
const socket = io.connect("http://localhost:4000");


// Query DOM
var message = document.getElementById('message'),
      user = document.getElementById('name'),
      btn = document.getElementById('send'),
      output = document.getElementById('output'),
      feedback = document.getElementById('feedback');


//emit events
btn.addEventListener('click', () => {
    socket.emit('chat', {
        message: message.value,
        user: user.value
    })
});

message.addEventListener('keypress', () => {
    console.log('typing')
    socket.emit('typing', user.value);
})


//listen for events
socket.on('chat', (data) => {
    //quick fix to constant typing message
    feedback.innerHTML = "";
    output.innerHTML += `<p><strong>${data.user}: </strong>${data.message}</p>`
})

socket.on('typing', data => {
    feedback.innerHTML = `<p><em>${data} is typing a message</em></p>`
})

