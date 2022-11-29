# Express

## Whiteboard

[Today's Freehand](https://projects.invisionapp.com/freehand/document/eaz5REvGw)

## Terminology

- Query Parameter:  `/helloQuery?name=Ryan`  -> `req.query.name`
- Path (URL) Parameter: `/helloPath/Lucky`

```js
app.get('/helloPath/:individual', (req, res, next) => {
  let { individual } = req.params
})
```

## Testing

- intentionally TDD whenever possible.  it takes effort at first!
- What is your testing responsibility?  i.e. Not our responsibility or requirement to make sure that javascript functionality like `console.log()` properly works

