const pattern_full_link_text = /\[[^\]]*\]\([^)]*\)*/g
// seems to work okay
let text = 'Sample markdown text [with links](http://bar.net), that are both [internal links](/baz), and [external links](https://foo.com)';
console.log( text.match(pattern_full_link_text) );
