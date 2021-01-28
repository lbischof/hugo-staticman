# Hugo Staticman

Under construction

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
