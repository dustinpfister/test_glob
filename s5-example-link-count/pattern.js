// regular expressions
const pattern_internal = /\]\(\//g,
pattern_external = /\]\(https:|http:/g;
// get link counts helper function
const getLinkCounts = (text) => {
    let internal = text.match(pattern_internal),
    external = text.match(pattern_external);
    return {
        internal: internal === null ? 0 : internal.length,
        external: external === null ? 0 : external.length
    }
};

let text = 'Sample markdown text [with links](http://bar.net), that are both [internal links](/baz), and [external links](https://foo.com)';

console.log(getLinkCounts(text));
// { internal: 2, external: 1 }
