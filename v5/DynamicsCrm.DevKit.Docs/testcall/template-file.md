# 1. tool_name

E.g:
execute_fetchxml

# Tool description

```
Name:        execute_fetchxml
Title:       Run a FetchXML query
Idempotent:  true
Destructive: false
ReadOnly:    true

Description:
[tool description here, no trim, no truncate, all raw here]

Parameters:
[tool parameters here, no trim, no truncate, all raw here]
```

# Tool call

## Test 1 - Input

- The json input you call

```json
[the json input object place here]
```

E.g.:

```json
{
  "name": "execute_fetchxml",
  "arguments": {
    "fetchxml": "<fetch><entity name='account'><attribute name='name'/><attribute name='accountid'/><order attribute='name'/></entity></fetch>",
    "max_records": 3,
    "get_all": false
  }
}
```

# Test 1 - Output

- 3 parts: plaintext, structured, iserror

**plaintext content**

```text
place the output plaintext, tool always return 1 plain text.
```

E.g.:

```text
[Success] 3 records returned (more available).
```

**Structured content**

```json
[place json object return by tool here]
```

E.g.:

```json
{
  "totalReturned": 3,
  "hasMore": true,
  "entity": "account",
  "records": [
    {
      "_entity": "account",
      "_id": "72f939f8-4e40-f111-bec6-70a8a59a451e",
      "accountid": "72f939f8-4e40-f111-bec6-70a8a59a451e",
      "name": "Bergnaum Inc"
    },
    {
      "_entity": "account",
      "_id": "71f939f8-4e40-f111-bec6-70a8a59a451e",
      "accountid": "71f939f8-4e40-f111-bec6-70a8a59a451e",
      "name": "Boyle Inc"
    },
    {
      "_entity": "account",
      "_id": "aaf939f8-4e40-f111-bec6-70a8a59a451e",
      "accountid": "aaf939f8-4e40-f111-bec6-70a8a59a451e",
      "name": "Cruickshank and Sons"
    }
  ]
}
```

**IsError:**
`false`/`true`

## Test 2 - Input

...

## Test 2 - Output

...

## Test 3 - Input

...

## Test 4 - Output

...

.......

# Summary

Place your full summary after all test calls here, use simple line with bullet,

