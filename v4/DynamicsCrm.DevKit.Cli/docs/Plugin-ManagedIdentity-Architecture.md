# Plugin Managed Identity Architecture

## System Architecture Overview

This document describes the architecture and workflow for the Plugin Managed Identity support feature.

---

## High-Level Architecture

```
┌─────────────────────────────────────────────────────────────────────┐
│                         Developer Workstation                        │
│                                                                       │
│  ┌─────────────────────────────────────────────────────────────┐   │
│  │                    Plugin Project                             │   │
│  │                                                               │   │
│  │  ┌─────────────────────────────────────────────────────┐    │   │
│  │  │  [CrmPluginRegistration(...)]                       │    │   │
│  │  │  [CrmPluginManagedIdentity(                        │    │   │
│  │  │      ApplicationId = "...",                        │    │   │
│  │  │      TenantId = "...",                            │    │   │
│  │  │      CertificatePath = "...")]                    │    │   │
│  │  │  public class MyPlugin : IPlugin { }              │    │   │
│  │  └─────────────────────────────────────────────────────┘    │   │
│  └─────────────────────────────────────────────────────────────┘   │
│                               │                                      │
│                               ▼                                      │
│  ┌─────────────────────────────────────────────────────────────┐   │
│  │              DynamicsCrm.DevKit.Cli                          │   │
│  │                                                               │   │
│  │  1. Read Attributes                                          │   │
│  │  2. Sign Assembly                                            │   │
│  │  3. Deploy to Dataverse                                      │   │
│  │  4. Create Managed Identity                                  │   │
│  │  5. Generate Subject Identifier                              │   │
│  └─────────────────────────────────────────────────────────────┘   │
└───────────────────────────────────────────────────────────────────┘
                               │
                               ▼
          ┌────────────────────────────────────────┐
          │    Certificate Signing (SignTool)      │
          └────────────────────────────────────────┘
                               │
                               ▼
┌─────────────────────────────────────────────────────────────────────┐
│                         Power Platform                               │
│                                                                       │
│  ┌──────────────────────────────────────────────────────────────┐  │
│  │                      Dataverse                                │  │
│  │                                                                │  │
│  │  ┌──────────────────┐    ┌────────────────────────────────┐ │  │
│  │  │ Plugin Assembly   │◄───┤  Managed Identity Record      │ │  │
│  │  │                   │    │                                │ │  │
│  │  │ - Name            │    │ - ApplicationId               │ │  │
│  │  │ - Content         │    │ - TenantId                    │ │  │
│  │  │ - Version         │    │ - CredentialSource            │ │  │
│  │  │ - ManagedIdentityId   │ - SubjectScope                │ │  │
│  │  └──────────────────┘    └────────────────────────────────┘ │  │
│  │            │                                                  │  │
│  │            ▼                                                  │  │
│  │  ┌──────────────────┐                                        │  │
│  │  │  Plugin Steps    │                                        │  │
│  │  └──────────────────┘                                        │  │
│  └──────────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────────┘
                               │
                               │ Federated Identity
                               ▼
┌─────────────────────────────────────────────────────────────────────┐
│                         Microsoft Azure                              │
│                                                                       │
│  ┌──────────────────────────────────────────────────────────────┐  │
│  │                   Microsoft Entra ID                          │  │
│  │                                                                │  │
│  │  ┌────────────────────────────────────────────────────────┐  │  │
│  │  │           App Registration / UAMI                      │  │  │
│  │  │                                                         │  │  │
│  │  │  - Application ID                                      │  │  │
│  │  │  - Tenant ID                                           │  │  │
│  │  │                                                         │  │  │
│  │  │  ┌──────────────────────────────────────────────────┐ │  │  │
│  │  │  │   Federated Identity Credential                  │ │  │  │
│  │  │  │                                                   │ │  │  │
│  │  │  │   - Issuer: https://login.microsoftonline.com/  │ │  │  │
│  │  │  │   - Subject: /eid1/c/pub/t/.../n/plugin/...    │ │  │  │
│  │  │  │   - Audience: api://AzureADTokenExchange        │ │  │  │
│  │  │  └──────────────────────────────────────────────────┘ │  │  │
│  │  └────────────────────────────────────────────────────────┘  │  │
│  └──────────────────────────────────────────────────────────────┘  │
│                               │                                      │
│                               │ Access Policy                        │
│                               ▼                                      │
│  ┌──────────────────────────────────────────────────────────────┐  │
│  │                   Azure Resources                             │  │
│  │                                                                │  │
│  │  ┌─────────────┐  ┌──────────────┐  ┌─────────────────────┐ │  │
│  │  │  Key Vault  │  │   Storage    │  │  Other Services     │ │  │
│  │  └─────────────┘  └──────────────┘  └─────────────────────┘ │  │
│  └──────────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────────┘
```

---

## Component Diagram

```
┌────────────────────────────────────────────────────────────────────┐
│                    DynamicsCrm.DevKit.Cli                          │
│                                                                     │
│  ┌──────────────────────────────────────────────────────────────┐ │
│  │                      TaskServer                               │ │
│  │                                                                │ │
│  │  • DeployFileAsync()                                          │ │
│  │  • GetCrmPluginManagedIdentityAttribute()                     │ │
│  │  • SignAssemblyAsync()                                        │ │
│  │  • FindSignTool()                                             │ │
│  │  • DeployManagedIdentityAsync()                               │ │
│  │  • BindPluginAssemblyToManagedIdentityAsync()                 │ │
│  │  • GenerateSubjectIdentifier()                                │ │
│  │  • GetEnvironmentId()                                         │ │
│  └──────────────────────────────────────────────────────────────┘ │
│                               │                                    │
│                               ▼                                    │
│  ┌──────────────────────────────────────────────────────────────┐ │
│  │              DynamicsCrm.DevKit.Shared                        │ │
│  │                                                                │ │
│  │  Helper Methods:                                              │ │
│  │  • ConvertAttributeToCrmPluginManagedIdentity()               │ │
│  │  • GetCloudEnvironmentConfig()                                │ │
│  │  • EncodeTenantId()                                           │ │
│  │  • ComputeCertificateHash()                                   │ │
│  └──────────────────────────────────────────────────────────────┘ │
└────────────────────────────────────────────────────────────────────┘
                               │
                               ▼
┌────────────────────────────────────────────────────────────────────┐
│                   Plugin Project Template                          │
│                                                                     │
│  ┌──────────────────────────────────────────────────────────────┐ │
│  │                      PluginCore.cs                            │ │
│  │                                                                │ │
│  │  Enums:                                                       │ │
│  │  • ManagedIdentityCredentialSource                            │ │
│  │  • ManagedIdentitySubjectScope                                │ │
│  │  • AzureCloudEnvironment                                      │ │
│  │                                                                │ │
│  │  Attributes:                                                  │ │
│  │  • CrmPluginRegistrationAttribute (existing)                  │ │
│  │  • CrmPluginManagedIdentityAttribute (new)                    │ │
│  └──────────────────────────────────────────────────────────────┘ │
└────────────────────────────────────────────────────────────────────┘
```

---

## Deployment Workflow

```
┌─────────────────────────────────────────────────────────────────────┐
│                      Deployment Process Flow                         │
└─────────────────────────────────────────────────────────────────────┘

    ┌────────────────────────────────────────────┐
    │  1. Start: DynamicsCrm.DevKit.Cli Executes │
    └─────────────────┬──────────────────────────┘
                      │
                      ▼
    ┌────────────────────────────────────────────┐
    │  2. Load Plugin Assembly                   │
    │     - Read DLL file                        │
    │     - Extract types                        │
    └─────────────────┬──────────────────────────┘
                      │
                      ▼
    ┌────────────────────────────────────────────┐
    │  3. Read Attributes from Each Type         │
    │     - CrmPluginRegistration                │
    │     - CrmPluginManagedIdentity (if exists) │
    └─────────────────┬──────────────────────────┘
                      │
                      ▼
    ┌────────────────────────────────────────────┐
    │  4. Has CrmPluginManagedIdentity?          │
    └─────────────────┬──────────────────────────┘
                      │
         ┌────────────┴────────────┐
         │ No                      │ Yes
         ▼                         ▼
    ┌─────────┐      ┌────────────────────────────────────┐
    │ Skip    │      │  5. Validate Configuration         │
    │ Signing │      │     - Certificate path exists      │
    │         │      │     - Application ID valid         │
    └─────────┘      │     - Tenant ID valid              │
                     └─────────────┬──────────────────────┘
                                   │
                                   ▼
                     ┌────────────────────────────────────┐
                     │  6. Sign Assembly                  │
                     │     - Locate SignTool.exe          │
                     │     - Execute signing              │
                     │     - Verify signature             │
                     └─────────────┬──────────────────────┘
                                   │
                                   ▼
                     ┌────────────────────────────────────┐
                     │  7. Compute Certificate Hash       │
                     │     - SHA-256 of certificate       │
                     └─────────────┬──────────────────────┘
                                   │
                                   ▼
    ┌────────────────────────────────────────────┐
    │  8. Deploy Plugin Assembly                 │
    │     - Create/Update pluginassembly record  │
    │     - Returns pluginAssemblyId             │
    └─────────────────┬──────────────────────────┘
                      │
                      ▼
    ┌────────────────────────────────────────────┐
    │  9. Deploy Managed Identity                │
    │     - Check if exists                      │
    │     - Create/Update managedidentity record │
    │     - Returns managedIdentityId            │
    └─────────────────┬──────────────────────────┘
                      │
                      ▼
    ┌────────────────────────────────────────────┐
    │  10. Bind Assembly to Managed Identity     │
    │      - Update pluginassembly record        │
    │      - Set managedidentityid field         │
    └─────────────────┬──────────────────────────┘
                      │
                      ▼
    ┌────────────────────────────────────────────┐
    │  11. Generate Subject Identifier           │
    │      - Encode tenant ID                    │
    │      - Get environment ID                  │
    │      - Build subject string                │
    └─────────────────┬──────────────────────────┘
                      │
                      ▼
    ┌────────────────────────────────────────────┐
    │  12. Display Configuration Instructions    │
    │      - Subject identifier                  │
    │      - Azure Portal steps                  │
    │      - Federated credential setup          │
    └─────────────────┬──────────────────────────┘
                      │
                      ▼
    ┌────────────────────────────────────────────┐
    │  13. Deploy Plugin Steps                   │
    │      - Create/Update steps                 │
    │      - Create/Update images                │
    └─────────────────┬──────────────────────────┘
                      │
                      ▼
    ┌────────────────────────────────────────────┐
    │  14. Complete                              │
    └────────────────────────────────────────────┘
```

---

## Runtime Token Acquisition Flow

```
┌─────────────────────────────────────────────────────────────────────┐
│                  Plugin Execution with Managed Identity              │
└─────────────────────────────────────────────────────────────────────┘

    ┌────────────────────────────────────────┐
    │  1. Plugin Triggers in Dataverse       │
    └─────────────────┬──────────────────────┘
                      │
                      ▼
    ┌────────────────────────────────────────┐
    │  2. Plugin Execute() Method Called     │
    └─────────────────┬──────────────────────┘
                      │
                      ▼
    ┌────────────────────────────────────────┐
    │  3. Get IManagedIdentityService        │
    │     from IServiceProvider              │
    └─────────────────┬──────────────────────┘
                      │
                      ▼
    ┌────────────────────────────────────────┐
    │  4. Call AcquireToken(scopes)          │
    │     Example: ["https://vault.azure.net/│
    │               .default"]               │
    └─────────────────┬──────────────────────┘
                      │
                      ▼
    ┌────────────────────────────────────────┐
    │  5. Dataverse Requests Token from      │
    │     Microsoft Entra ID                 │
    │     - Uses Federated Identity          │
    │     - Presents plugin context          │
    └─────────────────┬──────────────────────┘
                      │
                      ▼
    ┌────────────────────────────────────────┐
    │  6. Entra ID Validates Request         │
    │     - Checks subject identifier        │
    │     - Validates federated credential   │
    │     - Checks audience                  │
    └─────────────────┬──────────────────────┘
                      │
         ┌────────────┴────────────┐
         │ Valid                   │ Invalid
         ▼                         ▼
    ┌─────────┐      ┌─────────────────────────┐
    │ Issue   │      │ Throw Exception         │
    │ Token   │      │ AADSTS700213           │
    └────┬────┘      └─────────────────────────┘
         │
         ▼
    ┌────────────────────────────────────────┐
    │  7. Return Access Token to Plugin      │
    └─────────────────┬──────────────────────┘
                      │
                      ▼
    ┌────────────────────────────────────────┐
    │  8. Plugin Uses Token to Access        │
    │     Azure Resource                     │
    │     - Key Vault                        │
    │     - Storage                          │
    │     - Other services                   │
    └─────────────────┬──────────────────────┘
                      │
                      ▼
    ┌────────────────────────────────────────┐
    │  9. Plugin Continues Execution         │
    └────────────────────────────────────────┘
```

---

## Subject Identifier Structure

```
┌─────────────────────────────────────────────────────────────────────┐
│              Subject Identifier Components                           │
└─────────────────────────────────────────────────────────────────────┘

Self-Signed Certificate (Development):
┌─────────────────────────────────────────────────────────────────────┐
│ /eid1/c/pub/t/{encodedTenantId}/a/qzXoWDkuqUa3l6zM5mM0Rw/n/plugin/ │
│ e/{environmentId}/h/{certificateHash}                               │
└─────────────────────────────────────────────────────────────────────┘
   │     │   │   │                  │                         │   │    │
   │     │   │   │                  │                         │   │    └─► Certificate SHA-256 Hash
   │     │   │   │                  │                         │   └──────► Environment ID
   │     │   │   │                  │                         └──────────► Plugin Component
   │     │   │   │                  └────────────────────────────────────► Fixed Identifier
   │     │   │   └───────────────────────────────────────────────────────► Encoded Tenant ID
   │     │   └───────────────────────────────────────────────────────────► Cloud Code (pub)
   │     └───────────────────────────────────────────────────────────────► Subject Version
   └─────────────────────────────────────────────────────────────────────► Identity Format

Trusted Certificate (Production):
┌─────────────────────────────────────────────────────────────────────┐
│ /eid1/c/pub/t/{encodedTenantId}/a/qzXoWDkuqUa3l6zM5mM0Rw/n/plugin/ │
│ e/{environmentId}/i/{issuer}/s/{subject}                            │
└─────────────────────────────────────────────────────────────────────┘
                                      │          │
                                      │          └────────────────────────► Certificate Subject
                                      └───────────────────────────────────► Certificate Issuer

Cloud Codes:
┌──────────────┬──────────┬────────────────────────────────────────────┐
│ Environment  │   Code   │  Issuer URL                                │
├──────────────┼──────────┼────────────────────────────────────────────┤
│ Public/GCC   │  /c/pub  │  https://login.microsoftonline.com        │
│ GCC High/DoD │  /c/usg  │  https://login.microsoftonline.us         │
│ China        │  /c/chn  │  https://login.partner.microsoftonline.cn │
│ US National  │  /c/uss  │  https://login.microsoftonline.eaglex...  │
│ US Secure    │  /c/usn  │  https://login.microsoftonline.scloud     │
└──────────────┴──────────┴────────────────────────────────────────────┘
```

---

## Data Model

```
┌─────────────────────────────────────────────────────────────────────┐
│                     Dataverse Entity Model                           │
└─────────────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────────┐
│                      pluginassembly                               │
├──────────────────────────────────────────────────────────────────┤
│ • pluginassemblyid (Guid) [PK]                                   │
│ • name (String)                                                  │
│ • content (String - Base64)                                      │
│ • version (String)                                               │
│ • publickeytoken (String)                                        │
│ • culture (String)                                               │
│ • sourcetype (OptionSet: 0=Database, 1=Disk, 2=NuGet)           │
│ • isolationmode (OptionSet: 0=None, 1=Sandbox)                  │
│ • managedidentityid (Lookup) ────────────────┐                  │
└──────────────────────────────────────────────┼──────────────────┘
                                                │
                                                │ 1:1 Relationship
                                                │
                                                ▼
┌──────────────────────────────────────────────┴──────────────────┐
│                      managedidentity                             │
├──────────────────────────────────────────────────────────────────┤
│ • managedidentityid (Guid) [PK]                                  │
│ • applicationid (Guid)                                           │
│ • tenantid (Guid)                                                │
│ • credentialsource (OptionSet)                                   │
│   - 2: EntraIdApplication                                        │
│   - 3: UserAssignedManagedIdentity                               │
│ • subjectscope (OptionSet)                                       │
│   - 1: Environment                                               │
│   - 2: Organization                                              │
└──────────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────────┐
│                      plugintype                                   │
├──────────────────────────────────────────────────────────────────┤
│ • plugintypeid (Guid) [PK]                                       │
│ • typename (String)                                              │
│ • friendlyname (String)                                          │
│ • pluginassemblyid (Lookup) ──────────┐                         │
└────────────────────────────────────────┼─────────────────────────┘
                                          │
                                          │ N:1 Relationship
                                          │
                                          ▼
                      ┌───────────────────────────────┐
                      │      pluginassembly           │
                      └───────────────────────────────┘

┌──────────────────────────────────────────────────────────────────┐
│                sdkmessageprocessingstep                           │
├──────────────────────────────────────────────────────────────────┤
│ • sdkmessageprocessingstepid (Guid) [PK]                         │
│ • name (String)                                                  │
│ • plugintypeid (Lookup) ──────────┐                             │
│ • stage (OptionSet)                │                             │
│ • mode (OptionSet)                 │                             │
│ • rank (Integer)                   │                             │
└────────────────────────────────────┼─────────────────────────────┘
                                      │
                                      │ N:1 Relationship
                                      │
                                      ▼
                  ┌───────────────────────────────┐
                  │        plugintype             │
                  └───────────────────────────────┘
```

---

## Class Diagram

```
┌─────────────────────────────────────────────────────────────────────┐
│              CrmPluginManagedIdentityAttribute                       │
├─────────────────────────────────────────────────────────────────────┤
│ + ApplicationId: string                                             │
│ + TenantId: string                                                  │
│ + CredentialSource: ManagedIdentityCredentialSource                 │
│ + SubjectScope: ManagedIdentitySubjectScope                         │
│ + CertificatePath: string                                           │
│ + CertificatePassword: string                                       │
│ + IssuerUrl: string                                                 │
│ + Audience: string                                                  │
│ + CloudEnvironment: AzureCloudEnvironment                           │
│ + CertificateSubject: string                                        │
│ + CertificateIssuer: string                                         │
│ + AutoSignAssembly: bool                                            │
├─────────────────────────────────────────────────────────────────────┤
│ + CrmPluginManagedIdentityAttribute(applicationId, tenantId)        │
└─────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────┐
│           ManagedIdentityCredentialSource (enum)                     │
├─────────────────────────────────────────────────────────────────────┤
│ EntraIdApplication = 2                                              │
│ UserAssignedManagedIdentity = 3                                     │
└─────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────┐
│           ManagedIdentitySubjectScope (enum)                         │
├─────────────────────────────────────────────────────────────────────┤
│ Environment = 1                                                     │
│ Organization = 2                                                    │
└─────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────┐
│              AzureCloudEnvironment (enum)                            │
├─────────────────────────────────────────────────────────────────────┤
│ Public                                                              │
│ GCC                                                                 │
│ GCCHigh                                                             │
│ China                                                               │
│ USNat                                                               │
│ USSec                                                               │
└─────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────┐
│                       TaskServer                                     │
├─────────────────────────────────────────────────────────────────────┤
│ - ServiceClient: ServiceClient                                      │
│ - CurrentDirectory: string                                          │
│ - Json: JsonServer                                                  │
├─────────────────────────────────────────────────────────────────────┤
│ + DeployFileAsync(file: string, deployFileType: DeployFileType)    │
│ - GetCrmPluginManagedIdentityAttribute(type: TypeInfo)             │
│ - SignAssemblyAsync(assemblyPath: string, attr: CrmPlugin...)      │
│ - FindSignTool(): string                                            │
│ - DeployManagedIdentityAsync(assemblyId: Guid, attr: CrmPlugin...) │
│ - BindPluginAssemblyToManagedIdentityAsync(assemblyId, identityId) │
│ - GenerateSubjectIdentifier(attr: CrmPlugin..., envId, certHash)   │
│ - GetEnvironmentId(): string                                        │
└─────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────┐
│                         Helper                                       │
├─────────────────────────────────────────────────────────────────────┤
│ + ConvertAttributeToCrmPluginManagedIdentity(data: CustomAttribute)│
│ + GetCloudEnvironmentConfig(env: AzureCloudEnvironment)            │
│ + EncodeTenantId(tenantId: string): string                         │
│ + ComputeCertificateHash(certPath: string): string                 │
└─────────────────────────────────────────────────────────────────────┘
```

---

## Sequence Diagram: Full Deployment

```
Developer    CLI           SignTool    Dataverse       Azure Portal
   │          │               │            │                 │
   │ Run CLI  │               │            │                 │
   │─────────>│               │            │                 │
   │          │               │            │                 │
   │          │ Read Assembly │            │                 │
   │          │──────────────>│            │                 │
   │          │               │            │                 │
   │          │ Sign Assembly │            │                 │
   │          │──────────────>│            │                 │
   │          │<──────────────│            │                 │
   │          │   Signed OK   │            │                 │
   │          │               │            │                 │
   │          │ Deploy Assembly            │                 │
   │          │───────────────────────────>│                 │
   │          │<───────────────────────────│                 │
   │          │   Assembly Created         │                 │
   │          │               │            │                 │
   │          │ Create Managed Identity    │                 │
   │          │───────────────────────────>│                 │
   │          │<───────────────────────────│                 │
   │          │   Identity Created         │                 │
   │          │               │            │                 │
   │          │ Bind Assembly to Identity  │                 │
   │          │───────────────────────────>│                 │
   │          │<───────────────────────────│                 │
   │          │   Binding OK               │                 │
   │          │               │            │                 │
   │          │ Generate Subject Identifier│                 │
   │          │──────────────>│            │                 │
   │          │               │            │                 │
   │          │ Display Instructions       │                 │
   │<─────────│               │            │                 │
   │          │               │            │                 │
   │ Manually Configure Fed Credential                       │
   │────────────────────────────────────────────────────────>│
   │                                                          │
   │ Grant Resource Access                                   │
   │────────────────────────────────────────────────────────>│
   │                                                          │
```

---

## Security Architecture

```
┌─────────────────────────────────────────────────────────────────────┐
│                      Security Layers                                 │
└─────────────────────────────────────────────────────────────────────┘

Layer 1: Certificate-Based Assembly Signing
┌──────────────────────────────────────────┐
│ • Assembly signed with certificate        │
│ • Certificate validates assembly origin   │
│ • Prevents tampering                      │
└──────────────────────────────────────────┘

Layer 2: Federated Identity
┌──────────────────────────────────────────┐
│ • No credentials stored in code           │
│ • No secrets in configuration             │
│ • Azure validates trust relationship      │
└──────────────────────────────────────────┘

Layer 3: Subject Identifier
┌──────────────────────────────────────────┐
│ • Unique per plugin + environment         │
│ • Bound to specific certificate          │
│ • Validates execution context             │
└──────────────────────────────────────────┘

Layer 4: Azure RBAC
┌──────────────────────────────────────────┐
│ • Least privilege access                  │
│ • Resource-specific permissions           │
│ • Auditable access                        │
└──────────────────────────────────────────┘

Layer 5: Token Lifetime
┌──────────────────────────────────────────┐
│ • Short-lived access tokens               │
│ • Automatic token refresh                 │
│ • No long-term credentials                │
└──────────────────────────────────────────┘
```

---

**Document Version**: 1.0
**Last Updated**: October 3, 2025
