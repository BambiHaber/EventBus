/**
  ___             _   ___
 | __|_ _____ _ _| |_| _ )_  _ ___
 | _|\ V / -_) ' \  _| _ \ || (_-<
 |___|\_/\___|_||_\__|___/\_,_/__/
 |_|
 ------ By: Bambi Haber
 ----- haber.bambi@gmail.com
 --- https://github.com/BambiHaber/EventBus
 -- Version: {{version}}
 - Example:

 <script type="text/javascript">
 document.addEventListener('DOMContentLoaded', () => {

    // Example with global object
    let eventBus = new EventBus();

    eventBus.listenTo('hello', () => {
        console.log('hello world from eventbus instance')
    });

    eventBus.trigger('hello');

    class Person extends EventBus {
        constructor(name) {
            super();
            this.name = name
        }

        sayHello() {
            this.trigger('speak', 'hello from ' + this.name)
        }
    }

    class MessageCenter extends EventBus {
        constructor() {
            super();
        }

        addPerson(person) {
            this.listenTo(person, 'speak', this.onSpeak.bind(this));
        }

        onSpeak(message) {
            console.log('Incoming message from someBody(Person derived class): ', message)
        }
    }


    let john = new Person('john');

    let messageCenter = new MessageCenter();
    messageCenter.addPerson(john);

    john.sayHello();
 );

 </script>
 */
class EventBus {
	constructor() {
		this.listeners = [];
	}

	listenTo(ctx, event, callback) {
		var _ctx = ctx;
		var _event = event;
		var _callback = callback;

		if (arguments.length === 2) {
			_ctx = this;
			_event = ctx;
			_callback = event;

		}
		_ctx.listeners.push([_event, _callback, false]);
	}

	listenToOnce(ctx, event, callback) {
		var _ctx = ctx;
		var _event = event;
		var _callback = callback;

		if (arguments.length === 2) {
			_ctx = this;
			_event = ctx;
			_callback = event;

		}
		_ctx.listeners.push([_event, _callback, true]);
	}

	trigger(event, params) {
		for (var i = 0; i < this.listeners.length; i++) {
			if (event === this.listeners[i][0]) {
				this.listeners[i][1].apply(null, [params]);
				if (this.listeners[i][2] === true) {
					this.listeners.splice(this.listeners.indexOf(this.listeners[i]), 1);
				}
			}
		}
	}

	stopListening(ctx, event) {
		var _ctx = ctx;
		var _event = event;

		if (arguments.length === 1) {
			_ctx = this;
			_event = ctx;
		}

		for (var i = 0; i < _ctx.listeners.length; i++) {
			if (_ctx.listeners[i][0] === _event) {
				_ctx.listeners.splice(_ctx.listeners.indexOf(_ctx.listeners[i]), 1);
			}
		}
	}

	killAllListeners() {
		this.listeners.length = 0;
	}
}