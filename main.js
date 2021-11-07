const linksSocialMedia = {
  github: "giovannat",
  instagram: "giitrigueiro",
  twitter: "ehajovanna"
}

function changeSocialMedia(){
  for(let li of socialLinks.children){
    const social = li.getAttribute('class')

    li.children[0].href = `https://www.${social}.com/${linksSocialMedia[social]}`
  }
}
changeSocialMedia();

function getGitHubProfileInfos(){
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
  .then(response => response.json())
  .then(data => {
    userName.textContent = data.name
    paragraph.textContent = data.bio
    userAvatar.href = data.url
    photo.src = data.avatar_url
    userLogin.textContent = data.login
  })
}

getGitHubProfileInfos()