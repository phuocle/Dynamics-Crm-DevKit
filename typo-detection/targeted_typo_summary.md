# Targeted Typo Detection Report

**Generated:** 2025-07-14 04:25:26

## Summary

- **Files Scanned:** 278
- **Typos Found:** 6
- **Files with Typos:** 3
- **Unique Typos Searched:** 234

## Detailed Findings

### ../v3/DynamicsCrm.DevKit.Shared/JsTypeScriptDeclaration.cs

**Typos found:** 1

**Line 126, Column 108:**
- **Typo:** `dependant`
- **Correction:** `dependent`
- **Context:** comment
- **Severity:** medium
- **Confidence:** 95.0%

**Line Content:**
```
_d_ts += $"{TAB}{TAB}/** The @odata.etag is then used to build a cache of the response that is dependant on the fields that are retrieved */{NEW_LINE}";
```

**Suggested Fix:**
```
_d_ts += $"{TAB}{TAB}/** The @odata.etag is then used to build a cache of the response that is dependent on the fields that are retrieved */{NEW_LINE}";
```

---

### ../v3/DynamicsCrm.DevKit.Shared/JsTypeScriptDeclaration2.cs

**Typos found:** 1

**Line 143, Column 108:**
- **Typo:** `dependant`
- **Correction:** `dependent`
- **Context:** comment
- **Severity:** medium
- **Confidence:** 95.0%

**Line Content:**
```
_d_ts += $"{TAB}{TAB}/** The @odata.etag is then used to build a cache of the response that is dependant on the fields that are retrieved */{NEW_LINE}";
```

**Suggested Fix:**
```
_d_ts += $"{TAB}{TAB}/** The @odata.etag is then used to build a cache of the response that is dependent on the fields that are retrieved */{NEW_LINE}";
```

---

### ../v3/DynamicsCrm.DevKit.Shared/XrmHelper.cs

**Typos found:** 4

**Line 294, Column 17:**
- **Typo:** `respone`
- **Correction:** `response`
- **Context:** code
- **Severity:** medium
- **Confidence:** 95.0%

**Line Content:**
```
var respone = (RetrieveAllEntitiesResponse)crmServiceClient.Execute(request);
```

**Suggested Fix:**
```
var response = (RetrieveAllEntitiesResponse)crmServiceClient.Execute(request);
```

---

**Line 295, Column 20:**
- **Typo:** `respone`
- **Correction:** `response`
- **Context:** text
- **Severity:** medium
- **Confidence:** 95.0%

**Line Content:**
```
return respone.EntityMetadata.ToList();
```

**Suggested Fix:**
```
return response.EntityMetadata.ToList();
```

---

**Line 305, Column 17:**
- **Typo:** `respone`
- **Correction:** `response`
- **Context:** code
- **Severity:** medium
- **Confidence:** 95.0%

**Line Content:**
```
var respone = (RetrieveAllEntitiesResponse)crmServiceClient.Execute(request);
```

**Suggested Fix:**
```
var response = (RetrieveAllEntitiesResponse)crmServiceClient.Execute(request);
```

---

**Line 306, Column 20:**
- **Typo:** `respone`
- **Correction:** `response`
- **Context:** text
- **Severity:** medium
- **Confidence:** 95.0%

**Line Content:**
```
return respone.EntityMetadata.ToList().Select(x => x.SchemaName).ToList();
```

**Suggested Fix:**
```
return response.EntityMetadata.ToList().Select(x => x.SchemaName).ToList();
```

---

## Quick Fix Commands

You can use these commands to quickly fix the typos:

```bash
sed -i 's/\bdependant\b/dependent/g' '../v3/DynamicsCrm.DevKit.Shared/JsTypeScriptDeclaration.cs'
sed -i 's/\bdependant\b/dependent/g' '../v3/DynamicsCrm.DevKit.Shared/JsTypeScriptDeclaration2.cs'
sed -i 's/\brespone\b/response/g' '../v3/DynamicsCrm.DevKit.Shared/XrmHelper.cs'
sed -i 's/\brespone\b/response/g' '../v3/DynamicsCrm.DevKit.Shared/XrmHelper.cs'
sed -i 's/\brespone\b/response/g' '../v3/DynamicsCrm.DevKit.Shared/XrmHelper.cs'
sed -i 's/\brespone\b/response/g' '../v3/DynamicsCrm.DevKit.Shared/XrmHelper.cs'
```

## Statistics

### By File Type

- **.cs:** 6 typos

### By Context

- **Code:** 2 typos
- **Comment:** 2 typos
- **Text:** 2 typos

### By Severity

- **Medium:** 6 typos

### Most Common Typos

- **respone:** 4 occurrences
- **dependant:** 2 occurrences
