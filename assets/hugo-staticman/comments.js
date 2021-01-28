// Static comments
// from: https://github.com/eduardoboucas/popcorn/blob/gh-pages/js/main.js
var comment_forms = document.querySelectorAll(".comment-form form");
comment_forms.forEach(function(form) {
  form.addEventListener("submit", comment_form_submit);
});

function comment_form_submit(event) {
  event.preventDefault();
  var form = event.target;
  form.parentNode.classList.remove('comment-success')
  form.parentNode.classList.remove('comment-error')
  form.classList.add("loading");
  const data = new URLSearchParams();
  for (const pair of new FormData(form)) {
      data.append(pair[0], pair[1]);
  }
  fetch(form.action, {
    method: form.method,
    body: data,
  }).then(function(res) {
    // handle non 200 statuscode
    if (!res.ok) {
      throw Error(res.statusText);
    }
    return res;
  }).then(function(res) {
    form.classList.remove("loading");
    form.parentNode.classList.add('comment-success')
    form.reset()
  }).catch(function(error){
    form.classList.remove("loading");
    form.parentNode.classList.add('comment-error')
    console.log('error', error)
  });
}
