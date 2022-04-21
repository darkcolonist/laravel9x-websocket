import Echo from 'laravel-echo';

window.Echo = new Echo({
  broadcaster: 'socket.io',
  host: window.location.hostname + ":" + window.laravel_echo_port
});

window.Echo.channel('global-notifications')
.listen('.UserEvent', (data) => {
  // $("#broadcast").append('<div class="alert alert-success">' + i + '.' + data.title + '</div>');
  console.log(data)
});