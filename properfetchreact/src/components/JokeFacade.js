const URL = "http://api.icndb.com/jokes/random";
class JokesFacade {

    // callback:
    getJokeViaCallback = (cb) => {
        fetch(URL)
            .then(res => res.json()
            ).then( data => {                
                if (cb) {
                    cb(data.value.joke);
                }
            });
    }

    //callback
    getJokeWithCallback(cb) {
        fetch(URL).then(res => {
            return res.json();
        }).then(data => {
            if (cb) {
                cb(data.value.joke);
            }
        });
    }

    //observer pattern:
    getJokeAndNotify = () => {
        fetch(URL)
            .then(res => {
                return res.json();
            }).then((data) => {
                let joke = data.value.joke
                if (this.handler) {
                    this.handler(joke);
                };
            });
    }
    //needed for observer pattern:
    setObserver(handler) {
        this.handler = handler;
    }

    //starting to get jokes at interval:
    getJokeContiniuesly =(time) =>{
        this.timerId = setInterval(this.getJokeAndNotify,time);
    }
    //stop getting jokes.
    stopIntervalFetching =()=>{
      if(this.timerId){
        clearInterval(this.timerId);
      }
    }

    //ES7:
    async fetchAsync() {
        const response = await fetch(URL);
        const res =  await response.json();
        return res.value.joke;
    }
    
    



}
export default new JokesFacade();