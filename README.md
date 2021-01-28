# Hugo Staticman

Under construction

Add the following to your `config.toml`:
```
[params.staticman]
  endpoint = "https://staticman.domain.ch/v3/entry/gitlab"
  username = "serviceaccount"
  repository = "some-repository"
  branch = "master"

[module]
  [[module.imports]]
    path = "github.com/lbischof/hugo-staticman"
```

## Comments

**Partials**
- `comment-counter` displays a counter
- `show-comments` displays the comments
- `form-comments` displays a form

**Assets**
You must include the following assets:
```
{{ $commentsCSS := resources.Get "hugo-staticman/comments.scss" | toCSS | minify | fingerprint }}
<link rel="stylesheet" href="{{ $commentsCSS.Permalink }}">

{{ $commentsJS := resources.Get "hugo-staticman/comments.js" | minify | fingerprint }}
<script src="{{ $commentsJS.Permalink }}" type="text/javascript"></script>
```
