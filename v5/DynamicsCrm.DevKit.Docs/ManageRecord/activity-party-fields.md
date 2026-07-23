# ActivityParty (PartyList) Fields in `manage_record`

Activity entities in Dataverse (Email, Phone Call, Appointment, Fax, Letter, etc.) use **PartyList** fields to specify participants. These fields include: `to`, `from`, `cc`, `bcc`, `requiredattendees`, `optionalattendees`, `organizer`, `customers`, `resources`.

## JSON Syntax

### Array of Party Objects

```json
{
  "to": [
    { "id": "<guid>", "type": "<entity_logical_name>" },
    { "id": "<guid>", "type": "<entity_logical_name>", "addressused": "override@email.com" }
  ]
}
```

| Key | Required | Description |
|---|---|---|
| `id` | ✅ | GUID of the participant record |
| `type` | ✅ | Logical name of the participant entity (`contact`, `account`, `systemuser`, `lead`, `queue`, etc.) |
| `addressused` | ❌ | Override email/phone/fax address. If omitted, Dataverse resolves automatically from the participant record. |

### Single Object (Auto-Wrapped)

When only one participant, a single object (without array brackets) is accepted:

```json
{
  "from": { "id": "<guid>", "type": "systemuser" }
}
```

This is automatically wrapped into an array internally.

### participationtypemask

**Do NOT set `participationtypemask`** in the JSON. Dataverse sets it automatically based on the field name:

| Field | participationtypemask |
|---|---|
| `from` | 1 (Sender) |
| `to` | 2 (To Recipient) |
| `cc` | 3 (CC Recipient) |
| `bcc` | 4 (BCC Recipient) |
| `requiredattendees` | 5 (Required Attendee) |
| `optionalattendees` | 6 (Optional Attendee) |
| `organizer` | 7 (Organizer) |
| `customers` | 11 (Customer) |
| `resources` | 10 (Resource) |

---

## Examples

### Create an Email

```
manage_record(
  action = "create",
  entity_name = "email",
  fields_json = {
    "subject": "Meeting Follow-up",
    "description": "Thank you for attending the meeting.",
    "from": [
      { "id": "11111111-1111-1111-1111-111111111111", "type": "systemuser" }
    ],
    "to": [
      { "id": "22222222-2222-2222-2222-222222222222", "type": "contact" },
      { "id": "33333333-3333-3333-3333-333333333333", "type": "account" }
    ],
    "cc": [
      { "id": "44444444-4444-4444-4444-444444444444", "type": "contact" }
    ]
  }
)
```

### Create an Appointment

```
manage_record(
  action = "create",
  entity_name = "appointment",
  fields_json = {
    "subject": "Quarterly Review",
    "scheduledstart": "2026-08-01T09:00:00Z",
    "scheduledend": "2026-08-01T10:00:00Z",
    "organizer": [
      { "id": "11111111-1111-1111-1111-111111111111", "type": "systemuser" }
    ],
    "requiredattendees": [
      { "id": "22222222-2222-2222-2222-222222222222", "type": "contact" },
      { "id": "33333333-3333-3333-3333-333333333333", "type": "systemuser" }
    ],
    "optionalattendees": [
      { "id": "44444444-4444-4444-4444-444444444444", "type": "contact" }
    ]
  }
)
```

### Create a Phone Call (Single Participant Shorthand)

```
manage_record(
  action = "create",
  entity_name = "phonecall",
  fields_json = {
    "subject": "Follow-up Call",
    "phonenumber": "+1-555-0100",
    "from": { "id": "11111111-1111-1111-1111-111111111111", "type": "systemuser" },
    "to": { "id": "22222222-2222-2222-2222-222222222222", "type": "contact" }
  }
)
```

### Email with Address Override

```
manage_record(
  action = "create",
  entity_name = "email",
  fields_json = {
    "subject": "Invoice",
    "to": [
      { "id": "22222222-2222-2222-2222-222222222222", "type": "contact", "addressused": "billing@contoso.com" }
    ],
    "from": [
      { "id": "11111111-1111-1111-1111-111111111111", "type": "queue", "addressused": "support@company.com" }
    ]
  }
)
```

---

## Reading Party Fields

When reading an activity record with `action='read'`, party list fields are formatted as:

```
to: John Smith (contact:22222222-...); Contoso Ltd (account:33333333-...)
from: Admin User (systemuser:11111111-...)
```

With `addressused`:
```
to: John Smith (contact:22222222-...) <billing@contoso.com>
```

---

## Common Entity Types for Participants

| Entity | Typical Usage |
|---|---|
| `systemuser` | Internal users (from, organizer, attendees) |
| `contact` | External people (to, cc, bcc, attendees) |
| `account` | Organizations (to, cc) |
| `lead` | Leads (to, cc) |
| `queue` | Shared mailboxes (from) |

---

## Error Messages

If the JSON format is incorrect, clear error messages guide correction:

- Missing `id`: `PartyList field 'to': missing required "id" (GUID string) in party object.`
- Missing `type`: `PartyList field 'to': missing required "type" (entity logical name) in party object. Example: "type":"contact" or "type":"systemuser".`
- Invalid GUID: `PartyList field 'to': "not-a-guid" is not a valid GUID.`
- Wrong value kind: `PartyList field 'to' requires a JSON array of party objects (or a single party object). Each object: {"id":"<guid>","type":"<entity>"}. Optional: "addressused":"email@example.com".`
