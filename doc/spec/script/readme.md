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

GET /list/all
----
__sample__
```json
GET /list/all
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
GET /list/bootstrap
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

PUT /item/:id
----
__sample__
```json
PUT /item/SOME_DOCUMENT_ID

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
DELETE /item/SOME_DOCUMENT_ID
```
```json
{}
```
