get_data()

async function get_data(){
    let loop = true 
    while (loop) {
            let data =  await fetch('https://oauth.reddit.com/r/'+this.state.Subreddit+'/new.json'+this.state.after,{
                method: "GET",
                headers:{
                  'User-Agent':'myscript',
                  'Content-Type':'application/x-www-form-urlencoded',
                  'Authorization': 'Bearer '+ this.state.access_token,
                  //'Host': '<calculated when request is sent>',
                    //'User-Agent': 'PostmanRuntime/7.29.2'
                      },
                    })
                    .then(response => response.json()).then(data=> {
                        Days = [] 
                        this.state.after = data.data.after
                        for (var i in data.data.children)
                         {
                            if (Days[0] = null) {
                                Days.push(((data.data.children[i].data.created_utc)*1000).getUTCDay())
                            }
                            else if (((data.data.children[i].data.created_utc)*1000).getUTCDay()<7){
                                Days.push(((data.data.children[i].data.created_utc)*1000).getUTCDay())
                            }
                            else {
                                loop = false; 
                                break;
                            }
                        }
                    })
    }
}

//original:
// fetch('https://oauth.reddit.com/r/'+this.state.Subreddit+'/new.json'+this.state.after,{
//     method: "GET",
//     headers:{
//       'User-Agent':'myscript',
//       'Content-Type':'application/x-www-form-urlencoded',
//       'Authorization': 'Bearer '+ this.state.access_token,
//       //'Host': '<calculated when request is sent>',
//         //'User-Agent': 'PostmanRuntime/7.29.2'
//           },
//         })
//     .then(response => response.json()).then(data=> {
        
//       console.log(data,data.data.after)
