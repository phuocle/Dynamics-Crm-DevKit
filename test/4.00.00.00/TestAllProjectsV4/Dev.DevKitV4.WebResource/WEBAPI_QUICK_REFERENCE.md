# devkit.js WebApi Quick Reference Guide

## Overview
This guide provides quick reference examples for using the newly implemented `Xrm.WebApi` namespace in devkit.js.

---

## Setup

```javascript
// Load utility (typically done once)
const utility = devKit.LoadUtility();
```

---

## CRUD Operations

### Create Record

```javascript
// Create a new account
const accountData = {
    name: "Contoso Ltd",
    telephone1: "555-1234",
    websiteurl: "https://www.contoso.com"
};

utility.WebApi.CreateRecord("account", accountData,
    function(result) {
        console.log("Account created with ID: " + result.id);
    },
    function(error) {
        console.error("Error creating account: " + error.message);
    }
);
```

### Retrieve Record

```javascript
// Retrieve a single account with specific columns
const accountId = "00000000-0000-0000-0000-000000000000";
const options = "?$select=name,accountnumber,telephone1";

utility.WebApi.RetrieveRecord("account", accountId, options,
    function(result) {
        console.log("Account Name: " + result.name);
        console.log("Account Number: " + result.accountnumber);
    },
    function(error) {
        console.error("Error retrieving account: " + error.message);
    }
);
```

### Retrieve Multiple Records

```javascript
// Retrieve accounts with filter and sorting
const options = "?$select=name,revenue&$filter=revenue gt 100000&$orderby=revenue desc&$top=10";

utility.WebApi.RetrieveMultipleRecords("account", options, 10,
    function(result) {
        console.log("Retrieved " + result.entities.length + " accounts");
        result.entities.forEach(function(account) {
            console.log("Name: " + account.name + ", Revenue: " + account.revenue);
        });

        // Check if more records exist
        if (result.nextLink) {
            console.log("More records available");
        }
    },
    function(error) {
        console.error("Error retrieving accounts: " + error.message);
    }
);
```

### Update Record

```javascript
// Update an existing account
const accountId = "00000000-0000-0000-0000-000000000000";
const updateData = {
    telephone1: "555-5678",
    websiteurl: "https://www.contoso-updated.com"
};

utility.WebApi.UpdateRecord("account", accountId, updateData,
    function(result) {
        console.log("Account updated successfully");
    },
    function(error) {
        console.error("Error updating account: " + error.message);
    }
);
```

### Delete Record

```javascript
// Delete an account
const accountId = "00000000-0000-0000-0000-000000000000";

utility.WebApi.DeleteRecord("account", accountId,
    function(result) {
        console.log("Account deleted successfully");
    },
    function(error) {
        console.error("Error deleting account: " + error.message);
    }
);
```

---

## Advanced Operations

### Execute Single Request

```javascript
// Execute a custom action
const request = {
    entity: { entityType: "account", id: accountId },
    getMetadata: function () {
        return {
            boundParameter: "entity",
            parameterTypes: {
                "entity": {
                    "typeName": "mscrm.account",
                    "structuralProperty": 5
                }
            },
            operationType: 0, // Action
            operationName: "new_CustomAction"
        };
    }
};

utility.WebApi.Execute(request,
    function(result) {
        console.log("Action executed successfully");
        console.log(result);
    },
    function(error) {
        console.error("Error executing action: " + error.message);
    }
);
```

### Execute Multiple Requests

```javascript
// Execute multiple requests in a batch
const requests = [
    // Request 1: Create
    {
        entity: {
            name: "Account 1",
            "@odata.type": "Microsoft.Dynamics.CRM.account"
        },
        getMetadata: function() {
            return {
                boundParameter: null,
                parameterTypes: {},
                operationType: 2, // Create
                operationName: "Create"
            };
        }
    },
    // Request 2: Update
    {
        entity: {
            accountid: existingAccountId,
            telephone1: "555-9999",
            "@odata.type": "Microsoft.Dynamics.CRM.account"
        },
        getMetadata: function() {
            return {
                boundParameter: null,
                parameterTypes: {},
                operationType: 3, // Update
                operationName: "Update"
            };
        }
    }
];

utility.WebApi.ExecuteMultiple(requests,
    function(results) {
        console.log("Batch executed successfully");
        results.forEach(function(result, index) {
            console.log("Request " + (index + 1) + " result:", result);
        });
    },
    function(error) {
        console.error("Error executing batch: " + error.message);
    }
);
```

---

## Online-Specific Operations

### Execute with Online Mode

```javascript
// Force execution in online mode
const request = {
    // ... request definition
};

utility.WebApi.Online.Execute(request,
    function(result) {
        console.log("Online action executed successfully");
    },
    function(error) {
        console.error("Error executing online action: " + error.message);
    }
);
```

### Execute Multiple with Online Mode

```javascript
// Execute multiple requests in online mode
const requests = [
    // ... requests array
];

utility.WebApi.Online.ExecuteMultiple(requests,
    function(results) {
        console.log("Online batch executed successfully");
    },
    function(error) {
        console.error("Error executing online batch: " + error.message);
    }
);
```

---

## Offline Capabilities

### Check Offline Availability

```javascript
// Check if an entity is available offline
const isAccountAvailable = utility.WebApi.Offline.IsAvailable("account");

if (isAccountAvailable) {
    console.log("Account entity is available offline");
    // Proceed with offline operations
} else {
    console.log("Account entity is not available offline");
    // Show message to user or queue for online sync
}
```

---

## Common Patterns

### Pattern 1: Create with Related Records

```javascript
// Create account with primary contact
const accountData = {
    name: "Contoso Ltd",
    "primarycontactid@odata.bind": "/contacts(" + contactId + ")"
};

utility.WebApi.CreateRecord("account", accountData,
    function(result) {
        console.log("Account created with related contact");
    },
    function(error) {
        console.error(error.message);
    }
);
```

### Pattern 2: Retrieve with Expand

```javascript
// Retrieve account with related contacts
const options = "?$select=name&$expand=contact_customer_accounts($select=fullname,emailaddress1)";

utility.WebApi.RetrieveRecord("account", accountId, options,
    function(result) {
        console.log("Account: " + result.name);
        console.log("Related Contacts:");
        result.contact_customer_accounts.forEach(function(contact) {
            console.log(" - " + contact.fullname + " (" + contact.emailaddress1 + ")");
        });
    },
    function(error) {
        console.error(error.message);
    }
);
```

### Pattern 3: Associate Records

```javascript
// Associate contact with account using relationship
const relationship = {
    "@odata.id": Parent().Xrm.Utility.getGlobalContext().getClientUrl() +
                 "/api/data/v9.2/contacts(" + contactId + ")"
};

utility.WebApi.UpdateRecord("account", accountId, {
    "contact_customer_accounts@odata.bind": [relationship["@odata.id"]]
},
    function(result) {
        console.log("Records associated successfully");
    },
    function(error) {
        console.error(error.message);
    }
);
```

### Pattern 4: Handle Pagination

```javascript
function retrieveAllRecords(entityName, options, allRecords) {
    allRecords = allRecords || [];

    utility.WebApi.RetrieveMultipleRecords(entityName, options, 50,
        function(result) {
            allRecords = allRecords.concat(result.entities);

            if (result.nextLink) {
                // Parse nextLink to get continuation token
                const pageNumber = result.nextLink.match(/page=(\d+)/)[1];
                const pagingCookie = result.nextLink.match(/pagingcookie=([^&]+)/)[1];

                // Retrieve next page
                const nextOptions = options + "&page=" + pageNumber + "&pagingcookie=" + pagingCookie;
                retrieveAllRecords(entityName, nextOptions, allRecords);
            } else {
                console.log("Retrieved all " + allRecords.length + " records");
                // Process all records
            }
        },
        function(error) {
            console.error(error.message);
        }
    );
}

// Usage
retrieveAllRecords("account", "?$select=name,revenue&$filter=revenue gt 100000");
```

---

## Error Handling Best Practices

```javascript
// Comprehensive error handling
utility.WebApi.CreateRecord("account", accountData,
    function(result) {
        // Success handling
        console.log("Success: Record created with ID " + result.id);

        // Continue with next operation
        processNextStep(result.id);
    },
    function(error) {
        // Error handling
        console.error("Error Code: " + error.errorCode);
        console.error("Error Message: " + error.message);

        // Check for specific error codes
        if (error.errorCode === 2147746325) {
            console.error("Duplicate detection error");
            // Handle duplicate
        } else if (error.errorCode === -2147220969) {
            console.error("User lacks privileges");
            // Show permission error
        } else {
            console.error("Unexpected error occurred");
            // General error handling
        }

        // Optionally show user-friendly message
        Parent().Xrm.Navigation.openAlertDialog({
            text: "Unable to save record. Please contact your system administrator."
        });
    }
);
```

---

## Integration with devkit.js Form Context

```javascript
// Complete example: Save form and create related record
function createRelatedRecord(executionContext) {
    const formContext = executionContext.getFormContext();
    const form = devKit.LoadForm(formContext);
    const utility = devKit.LoadUtility();

    // Get parent record ID
    const parentId = form.EntityId;

    // Create related record
    const relatedData = {
        name: "Related Record",
        "parentaccountid@odata.bind": "/accounts(" + parentId + ")"
    };

    utility.WebApi.CreateRecord("account", relatedData,
        function(result) {
            console.log("Related record created: " + result.id);

            // Refresh parent form
            form.Refresh(false);

            // Show notification
            form.SetFormNotification(
                "Related record created successfully",
                "INFO",
                "relatedRecordCreated"
            );
        },
        function(error) {
            form.SetFormNotification(
                "Error creating related record: " + error.message,
                "ERROR",
                "relatedRecordError"
            );
        }
    );
}
```

---

## Reference Links

- [Microsoft Docs: Xrm.WebApi](https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-webapi)
- [Web API Query Data](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/webapi/query-data-web-api)
- [OData Query Options](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/webapi/query-data-web-api#odata-query-options)

---

## Notes

- All methods follow the callback pattern: `(successCallback, errorCallback)`
- Promises are automatically converted to callbacks by devkit.js
- Optional chaining (`?.`) ensures null safety
- All operations require appropriate security privileges
- FetchXML queries should be converted to OData format for WebApi operations
