function getIssues() {
  let full_name = document.getElementById('full_name').innerHTML
  const url = `https://api.github.com/repos/${full_name}/issues`
  fetch(url, {
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(resp => resp.json()).then(json => showIssues(json))
}

function showIssues(json) {
  const src = document.getElementById("issues-template").innerHTML
  const template = Handlebars.compile(src)
  const issueList = template(json)
  document.getElementById("issues").innerHTML = issueList
}


function createIssue() {
  let full_name = document.getElementById('full_name').innerHTML
  let title = document.getElementById('title').value
  let body = document.getElementById('body').value
  const postData = {
    title: title,
    body: body
  };
  const url = `https://api.github.com/repos/${full_name}/issues`
  ///repos/:owner/:repo/forks
  fetch(url, {
    method: 'post',
    body: JSON.stringify(postData),
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(resp => getIssues())
}

function showResults(json) {
  const src = document.getElementById("repo-template").innerHTML
  const template = Handlebars.compile(src)
  const repoList = template(json)
  document.getElementById("results").innerHTML = repoList
}

function forkRepo() {
  const url = 'https://api.github.com/repos/learn-co-curriculum/javascript-fetch-lab/forks'
  ///repos/:owner/:repo/forks
  fetch(url, {
    method: 'post',
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(resp => resp.json()).then(json => showResults(json))
}

function getToken() {
  let token = ""
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return token
}
