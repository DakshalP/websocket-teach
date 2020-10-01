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

socket.on('chat', (data) => {
    output.innerHTML += `<p><strong>${data.user}: </strong>${data.message}</p>`
})

