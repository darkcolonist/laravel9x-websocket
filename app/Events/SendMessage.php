<?php

namespace App\Events;

use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class SendMessage implements ShouldBroadcast
{
  use Dispatchable, InteractsWithSockets, SerializesModels;
  
  var $data;

  /**
  * Create a new event instance.
  *
  * @return void
  */
  public function __construct($data = array())
  {
    $this->data = $data;
  }
  
  /**
  * Get the channels the event should broadcast on.
  *
  * @return \Illuminate\Broadcasting\Channel|array
  */
  public function broadcastOn()
  {
    return new Channel('user-channel');
  }
  
  public function broadcastAs()
  {
    return "UserEvent";
  }

  public function broadcastWith()
  {
    return [
      'title' => 'this notification from localhost',
      'data' => $this->data
    ];
  }
}
