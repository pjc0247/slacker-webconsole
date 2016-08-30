/script
====

CONSTANTS
----
__script type__
```
"subscriber"
"bootstrap"
"periodic_task"
```

GET /build
----
__sample__
```json
GET /script/build
```
```json
{
  "error" : [
    {
      "type" : "error",
      "text" : "; expected",
      "row" : 1,
      "column" : 4
    }
  ]
}
```

GET /deploy
----
__sample__
```json
GET /script/deploy
```
```json
{
}
```

GET /list/all
----
__sample__
```json
GET /script/list/all
```
```json
[
  {
    "_id" : "DOCUMENT_ID",
    "type" : "subscriber",
    "name" : "test_script",
    "src" : "msg.Reply(1234.ToString());",
    "regex" : "$hello^"
  },
  {
    "_id" : "DOCUMENT_ID",
    "type" : "bootstrap",
    "name" : "init",
    "src" : ""
  }
]
```

GET /list/:type
----
__sample__
```json
GET /script/list/bootstrap
```
```json
[
  {
    "_id" : "DOCUMENT_ID",
    "type" : "bootstrap",
    "name" : "load_foo",
    "src" : ""
  },
  {
    "_id" : "DOCUMENT_ID",
    "type" : "bootstrap",
    "name" : "init",
    "src" : ""
  }
]
```

GET /item/:id
----

POST /item
----
__sample__
```json
POST /item

{
  "name" : "test",
  "type" : "subscriber"
}
```
```json
{
  "type" : "subscriber",
  "src" : "default_code",
  "name" : "",
  "regex" : ""
}
```

PUT /item/:id
----
__sample__
```json
PUT /script/item/SOME_DOCUMENT_ID

{
  "type" : "subscriber",
  "name" : "new_name",
  "src" : "msg.Reply(1234.ToString());",
  "regex" : "some_regex"
}
```
```json
{}
```

DELETE /item/:id
----
__sample__
```json
DELETE /script/item/SOME_DOCUMENT_ID
```
```json
{}
```
