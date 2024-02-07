var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "frontmatter-2",
  "level": "1",
  "url": "frontmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  My Website   copyright  "
},
{
  "id": "sec-section-name",
  "level": "1",
  "url": "sec-section-name.html",
  "type": "Section",
  "number": "1.1",
  "title": "Section Title",
  "body": " Section Title  Text of section.  "
},
{
  "id": "precalculus-demo-book-5-2",
  "level": "1",
  "url": "precalculus-demo-book-5-2.html",
  "type": "Section",
  "number": "2.1",
  "title": "",
  "body": "   The imaginary unit  satisfies the identity . By convention, represents the principal (imaginary) square root of : .      For and the imaginary unit, we define their product to be the imaginary number  .     Euler's Identity   Euler's Identity relates complex exponentials and trigonmetric functions:     "
},
{
  "id": "def-imaginary-unit",
  "level": "2",
  "url": "precalculus-demo-book-5-2.html#def-imaginary-unit",
  "type": "Definition",
  "number": "2.1.1",
  "title": "",
  "body": "  The imaginary unit  satisfies the identity . By convention, represents the principal (imaginary) square root of : .   "
},
{
  "id": "def-imaginary-numbers",
  "level": "2",
  "url": "precalculus-demo-book-5-2.html#def-imaginary-numbers",
  "type": "Definition",
  "number": "2.1.2",
  "title": "",
  "body": "  For and the imaginary unit, we define their product to be the imaginary number  .   "
},
{
  "id": "prop-Euler-identity",
  "level": "2",
  "url": "precalculus-demo-book-5-2.html#prop-Euler-identity",
  "type": "Proposition",
  "number": "2.1.3",
  "title": "Euler’s Identity.",
  "body": " Euler's Identity   Euler's Identity relates complex exponentials and trigonmetric functions:    "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
