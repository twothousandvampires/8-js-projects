const GIT_URI = 'https://api.github.com/users/'

var main = document.getElementById('userInfo')
var form = document.getElementById('form')

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    if(input.value){
        get(input.value);
    }
    input.value = '';
})

async function get(user){  
    var res = await fetch(GIT_URI + user);
    if(res.status != 404){
        var resData = await res.json()
        create(resData)
    }
    else{
        alert('user not found')
    }
    
}


function create(user){   
    main.innerHTML = ``;
    main.style.padding = 20 + 'px'
    var info = `
    <div class = 'top_info'>
        <img src = '${user.avatar_url}'></img>
        <div>
            <p>${user.login}</p>
            <p>${user.bio ? user.bio : ""}</p>
        </div>
    </div>
    <div class = 'bottom_info'>
        <p>Followers</br>${user.followers}</p>
        <p>Following</br>${user.following}</p>
        <p>Public repositories</br>${user.public_repos}</p>
    </div>  
    `
    main.innerHTML = info;
}




