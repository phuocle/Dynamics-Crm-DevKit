import { FormAccount_DevKitV4 } from './generator/Account.form';

interface TestResult {
    Test: string;
    Property: string;
    Value: any;
    Status: string;
}

// Helper function to stringify objects for display
function stringify(value: any): any {
    if (value === null || value === undefined) return null;
    if (typeof value === 'object') {
        try {
            return JSON.stringify(value);
        } catch {
            return '[Circular or Complex Object]';
        }
    }
    return value;
}

/**
 * TEST 12: Utility API - Global Utility Functions
 * Utility provides access to Xrm.Utility, Xrm.Navigation, Xrm.Device, Xrm.Encoding, etc.
 * Tests ALL properties of each nested object (Client, OrganizationSettings, UserSettings)
 * 
 * Convention:
 * - R-Index: ReadOnly properties (R1, R2, R3...)
 * - S-Index: Setters & Methods (S1, S2, S3...)
 */
export function TestUtility(form: FormAccount_DevKitV4.Form): void {
    const results: TestResult[] = [];
    const methodResults: TestResult[] = [];
    const util = form.Utility;
    const startTime = new Date().toLocaleTimeString();

    // =====================================================
    // READONLY PROPERTIES (R-Index)
    // =====================================================
    try {
        // ----------------------------------------
        // Client (all properties)
        // ----------------------------------------
        const client = util.Client;
        results.push({ Test: "R1", Property: "Client", Value: stringify(client), Status: client ? "✓" : "⚠" });
        results.push({ Test: "R2", Property: "Client.ClientName", Value: client?.ClientName, Status: client?.ClientName ? "✓" : "⚠" });
        results.push({ Test: "R3", Property: "Client.ClientState", Value: client?.ClientState, Status: client?.ClientState ? "✓" : "⚠" });
        results.push({ Test: "R4", Property: "Client.FormFactor", Value: client?.FormFactor, Status: typeof client?.FormFactor === "number" ? "✓" : "⚠" });
        results.push({ Test: "R5", Property: "Client.IsNetworkAvailable", Value: client?.IsNetworkAvailable, Status: typeof client?.IsNetworkAvailable === "boolean" ? "✓" : "⚠" });
        results.push({ Test: "R6", Property: "Client.IsOffline", Value: client?.IsOffline, Status: typeof client?.IsOffline === "boolean" ? "✓" : "⚠" });

        // ----------------------------------------
        // Global Context Properties
        // ----------------------------------------
        results.push({ Test: "R7", Property: "ClientUrl", Value: util.ClientUrl, Status: util.ClientUrl ? "✓" : "⚠" });
        results.push({ Test: "R8", Property: "CurrentAppUrl", Value: util.CurrentAppUrl, Status: util.CurrentAppUrl ? "✓" : "⚠" });
        results.push({ Test: "R9", Property: "IsOnPremises", Value: util.IsOnPremises, Status: typeof util.IsOnPremises === "boolean" ? "✓" : "⚠" });
        results.push({ Test: "R10", Property: "LearningPathAttributeName", Value: util.LearningPathAttributeName, Status: "✓" });
        results.push({ Test: "R11", Property: "PageContext", Value: stringify(util.PageContext), Status: util.PageContext ? "✓" : "⚠" });
        results.push({ Test: "R12", Property: "Version", Value: util.Version, Status: util.Version ? "✓" : "⚠" });

        // ----------------------------------------
        // OrganizationSettings (all properties)
        // ----------------------------------------
        const orgSettings = util.OrganizationSettings;
        results.push({ Test: "R13", Property: "OrganizationSettings", Value: stringify(orgSettings), Status: orgSettings ? "✓" : "⚠" });
        results.push({ Test: "R14", Property: "Org.Attributes", Value: stringify(orgSettings?.Attributes), Status: "✓" });
        results.push({ Test: "R15", Property: "Org.BaseCurrency", Value: stringify(orgSettings?.BaseCurrency), Status: orgSettings?.BaseCurrency ? "✓" : "⚠" });
        results.push({ Test: "R16", Property: "Org.BaseCurrencyId", Value: orgSettings?.BaseCurrencyId, Status: orgSettings?.BaseCurrencyId ? "✓" : "⚠" });
        results.push({ Test: "R17", Property: "Org.DefaultCountryCode", Value: orgSettings?.DefaultCountryCode, Status: "✓" });
        results.push({ Test: "R18", Property: "Org.FullNameConventionCode", Value: orgSettings?.FullNameConventionCode, Status: typeof orgSettings?.FullNameConventionCode === "number" ? "✓" : "⚠" });
        results.push({ Test: "R19", Property: "Org.IsAutoSaveEnabled", Value: orgSettings?.IsAutoSaveEnabled, Status: typeof orgSettings?.IsAutoSaveEnabled === "boolean" ? "✓" : "⚠" });
        results.push({ Test: "R20", Property: "Org.IsTrialOrganization", Value: orgSettings?.IsTrialOrganization, Status: typeof orgSettings?.IsTrialOrganization === "boolean" ? "✓" : "⚠" });
        results.push({ Test: "R21", Property: "Org.LanguageId", Value: orgSettings?.LanguageId, Status: typeof orgSettings?.LanguageId === "number" ? "✓" : "⚠" });
        results.push({ Test: "R22", Property: "Org.OrganizationExpiryDate", Value: orgSettings?.OrganizationExpiryDate, Status: "✓" });
        results.push({ Test: "R23", Property: "Org.OrganizationId", Value: orgSettings?.OrganizationId, Status: orgSettings?.OrganizationId ? "✓" : "⚠" });
        results.push({ Test: "R24", Property: "Org.UniqueName", Value: orgSettings?.UniqueName, Status: orgSettings?.UniqueName ? "✓" : "⚠" });
        results.push({ Test: "R25", Property: "Org.UseSkypeProtocol", Value: orgSettings?.UseSkypeProtocol, Status: typeof orgSettings?.UseSkypeProtocol === "boolean" ? "✓" : "⚠" });

        // ----------------------------------------
        // UserSettings (all properties)
        // ----------------------------------------
        const userSettings = util.UserSettings;
        results.push({ Test: "R26", Property: "UserSettings", Value: stringify(userSettings), Status: userSettings ? "✓" : "⚠" });
        results.push({ Test: "R27", Property: "User.DateFormattingInfo", Value: stringify(userSettings?.DateFormattingInfo), Status: userSettings?.DateFormattingInfo ? "✓" : "⚠" });
        results.push({ Test: "R28", Property: "User.DefaultDashboardId", Value: userSettings?.DefaultDashboardId, Status: "✓" });
        results.push({ Test: "R29", Property: "User.IsGuidedHelpEnabled", Value: userSettings?.IsGuidedHelpEnabled, Status: typeof userSettings?.IsGuidedHelpEnabled === "boolean" ? "✓" : "⚠" });
        results.push({ Test: "R30", Property: "User.IsHighContrastEnabled", Value: userSettings?.IsHighContrastEnabled, Status: typeof userSettings?.IsHighContrastEnabled === "boolean" ? "✓" : "⚠" });
        results.push({ Test: "R31", Property: "User.IsRTL", Value: userSettings?.IsRTL, Status: typeof userSettings?.IsRTL === "boolean" ? "✓" : "⚠" });
        results.push({ Test: "R32", Property: "User.LanguageId", Value: userSettings?.LanguageId, Status: typeof userSettings?.LanguageId === "number" ? "✓" : "⚠" });
        results.push({ Test: "R33", Property: "User.Roles", Value: stringify(userSettings?.Roles), Status: userSettings?.Roles ? "✓" : "⚠" });
        results.push({ Test: "R34", Property: "User.SecurityRolePrivileges", Value: stringify(userSettings?.SecurityRolePrivileges), Status: userSettings?.SecurityRolePrivileges ? "✓" : "⚠" });
        results.push({ Test: "R35", Property: "User.SecurityRoles", Value: stringify(userSettings?.SecurityRoles), Status: userSettings?.SecurityRoles ? "✓" : "⚠" });
        results.push({ Test: "R36", Property: "User.TimeZoneOffsetMinutes", Value: userSettings?.TimeZoneOffsetMinutes, Status: typeof userSettings?.TimeZoneOffsetMinutes === "number" ? "✓" : "⚠" });
        results.push({ Test: "R37", Property: "User.TransactionCurrency", Value: stringify(userSettings?.TransactionCurrency), Status: userSettings?.TransactionCurrency ? "✓" : "⚠" });
        results.push({ Test: "R38", Property: "User.TransactionCurrencyId", Value: userSettings?.TransactionCurrencyId, Status: userSettings?.TransactionCurrencyId ? "✓" : "⚠" });
        results.push({ Test: "R39", Property: "User.UserId", Value: userSettings?.UserId, Status: userSettings?.UserId ? "✓" : "⚠" });
        results.push({ Test: "R40", Property: "User.UserName", Value: userSettings?.UserName, Status: userSettings?.UserName ? "✓" : "⚠" });

    } catch (error: any) {
        results.push({ Test: "ERR", Property: "Props Error", Value: error.message, Status: "✗" });
    }

    // =====================================================
    // METHODS (S-Index)
    // =====================================================

    // ----------------------------------------
    // Encoding Methods (test with actual values)
    // ----------------------------------------
    try {
        const encoded = util.HtmlEncode("<test>");
        methodResults.push({ Test: "S1", Property: "HtmlEncode", Value: encoded, Status: encoded ? "✓" : "✗" });
    } catch (e: any) {
        methodResults.push({ Test: "S1", Property: "HtmlEncode", Value: e.message, Status: "✗" });
    }

    try {
        const decoded = util.HtmlDecode("&lt;test&gt;");
        methodResults.push({ Test: "S2", Property: "HtmlDecode", Value: decoded, Status: decoded ? "✓" : "✗" });
    } catch (e: any) {
        methodResults.push({ Test: "S2", Property: "HtmlDecode", Value: e.message, Status: "✗" });
    }

    try {
        const encoded = util.HtmlAttributeEncode("test=\"value\"");
        methodResults.push({ Test: "S3", Property: "HtmlAttributeEncode", Value: encoded, Status: encoded ? "✓" : "✗" });
    } catch (e: any) {
        methodResults.push({ Test: "S3", Property: "HtmlAttributeEncode", Value: e.message, Status: "✗" });
    }

    try {
        const xmlEncoded = util.XmlEncode("<test>");
        methodResults.push({ Test: "S4", Property: "XmlEncode", Value: xmlEncoded, Status: xmlEncoded ? "✓" : "✗" });
    } catch (e: any) {
        methodResults.push({ Test: "S4", Property: "XmlEncode", Value: e.message, Status: "✗" });
    }

    try {
        const xmlAttrEncoded = util.XmlAttributeEncode("test=\"value\"");
        methodResults.push({ Test: "S5", Property: "XmlAttributeEncode", Value: xmlAttrEncoded, Status: xmlAttrEncoded ? "✓" : "✗" });
    } catch (e: any) {
        methodResults.push({ Test: "S5", Property: "XmlAttributeEncode", Value: e.message, Status: "✗" });
    }

    // ----------------------------------------
    // URL/Resource Methods
    // ----------------------------------------
    try {
        const prependedUrl = util.PrependOrgName("/test");
        methodResults.push({ Test: "S6", Property: "PrependOrgName", Value: prependedUrl, Status: prependedUrl ? "✓" : "✗" });
    } catch (e: any) {
        methodResults.push({ Test: "S6", Property: "PrependOrgName", Value: e.message, Status: "✗" });
    }

    try {
        const webResourceUrl = util.WebResourceUrl("test.html");
        methodResults.push({ Test: "S7", Property: "WebResourceUrl", Value: webResourceUrl, Status: webResourceUrl ? "✓" : "⚠" });
    } catch (e: any) {
        methodResults.push({ Test: "S7", Property: "WebResourceUrl", Value: e.message, Status: "✗" });
    }

    // ----------------------------------------
    // App/GlobalContext Async Methods (check function availability)
    // ----------------------------------------
    try {
        methodResults.push({ Test: "S8", Property: "AdvancedConfigSetting", Value: typeof util.AdvancedConfigSetting === "function" ? "Available" : "Not found", Status: typeof util.AdvancedConfigSetting === "function" ? "✓" : "✗" });
    } catch (e: any) {
        methodResults.push({ Test: "S8", Property: "AdvancedConfigSetting", Value: e.message, Status: "✗" });
    }

    try {
        methodResults.push({ Test: "S9", Property: "CurrentAppName", Value: typeof util.CurrentAppName === "function" ? "Available" : "Not found", Status: typeof util.CurrentAppName === "function" ? "✓" : "✗" });
    } catch (e: any) {
        methodResults.push({ Test: "S9", Property: "CurrentAppName", Value: e.message, Status: "✗" });
    }

    try {
        methodResults.push({ Test: "S10", Property: "CurrentAppProperties", Value: typeof util.CurrentAppProperties === "function" ? "Available" : "Not found", Status: typeof util.CurrentAppProperties === "function" ? "✓" : "✗" });
    } catch (e: any) {
        methodResults.push({ Test: "S10", Property: "CurrentAppProperties", Value: e.message, Status: "✗" });
    }

    // ----------------------------------------
    // Navigation Methods
    // ----------------------------------------
    try {
        methodResults.push({ Test: "S11", Property: "NavigateTo", Value: typeof util.NavigateTo === "function" ? "Available" : "Not found", Status: typeof util.NavigateTo === "function" ? "✓" : "✗" });
    } catch (e: any) {
        methodResults.push({ Test: "S11", Property: "NavigateTo", Value: e.message, Status: "✗" });
    }

    try {
        methodResults.push({ Test: "S12", Property: "OpenAlertDialog", Value: typeof util.OpenAlertDialog === "function" ? "Available" : "Not found", Status: typeof util.OpenAlertDialog === "function" ? "✓" : "✗" });
    } catch (e: any) {
        methodResults.push({ Test: "S12", Property: "OpenAlertDialog", Value: e.message, Status: "✗" });
    }

    try {
        methodResults.push({ Test: "S13", Property: "OpenConfirmDialog", Value: typeof util.OpenConfirmDialog === "function" ? "Available" : "Not found", Status: typeof util.OpenConfirmDialog === "function" ? "✓" : "✗" });
    } catch (e: any) {
        methodResults.push({ Test: "S13", Property: "OpenConfirmDialog", Value: e.message, Status: "✗" });
    }

    try {
        methodResults.push({ Test: "S14", Property: "OpenErrorDialog", Value: typeof util.OpenErrorDialog === "function" ? "Available" : "Not found", Status: typeof util.OpenErrorDialog === "function" ? "✓" : "✗" });
    } catch (e: any) {
        methodResults.push({ Test: "S14", Property: "OpenErrorDialog", Value: e.message, Status: "✗" });
    }

    try {
        methodResults.push({ Test: "S15", Property: "OpenFile", Value: typeof util.OpenFile === "function" ? "Available" : "Not found", Status: typeof util.OpenFile === "function" ? "✓" : "✗" });
    } catch (e: any) {
        methodResults.push({ Test: "S15", Property: "OpenFile", Value: e.message, Status: "✗" });
    }

    try {
        methodResults.push({ Test: "S16", Property: "OpenForm", Value: typeof util.OpenForm === "function" ? "Available" : "Not found", Status: typeof util.OpenForm === "function" ? "✓" : "✗" });
    } catch (e: any) {
        methodResults.push({ Test: "S16", Property: "OpenForm", Value: e.message, Status: "✗" });
    }

    try {
        methodResults.push({ Test: "S17", Property: "OpenUrl", Value: typeof util.OpenUrl === "function" ? "Available" : "Not found", Status: typeof util.OpenUrl === "function" ? "✓" : "✗" });
    } catch (e: any) {
        methodResults.push({ Test: "S17", Property: "OpenUrl", Value: e.message, Status: "✗" });
    }

    try {
        methodResults.push({ Test: "S18", Property: "OpenWebResource", Value: typeof util.OpenWebResource === "function" ? "Available" : "Not found", Status: typeof util.OpenWebResource === "function" ? "✓" : "✗" });
    } catch (e: any) {
        methodResults.push({ Test: "S18", Property: "OpenWebResource", Value: e.message, Status: "✗" });
    }

    // ----------------------------------------
    // Progress/Notification Methods
    // ----------------------------------------
    try {
        methodResults.push({ Test: "S19", Property: "ShowProgressIndicator", Value: typeof util.ShowProgressIndicator === "function" ? "Available" : "Not found", Status: typeof util.ShowProgressIndicator === "function" ? "✓" : "✗" });
    } catch (e: any) {
        methodResults.push({ Test: "S19", Property: "ShowProgressIndicator", Value: e.message, Status: "✗" });
    }

    try {
        methodResults.push({ Test: "S20", Property: "CloseProgressIndicator", Value: typeof util.CloseProgressIndicator === "function" ? "Available" : "Not found", Status: typeof util.CloseProgressIndicator === "function" ? "✓" : "✗" });
    } catch (e: any) {
        methodResults.push({ Test: "S20", Property: "CloseProgressIndicator", Value: e.message, Status: "✗" });
    }

    try {
        methodResults.push({ Test: "S21", Property: "AddGlobalNotification", Value: typeof util.AddGlobalNotification === "function" ? "Available" : "Not found", Status: typeof util.AddGlobalNotification === "function" ? "✓" : "✗" });
    } catch (e: any) {
        methodResults.push({ Test: "S21", Property: "AddGlobalNotification", Value: e.message, Status: "✗" });
    }

    try {
        methodResults.push({ Test: "S22", Property: "ClearGlobalNotification", Value: typeof util.ClearGlobalNotification === "function" ? "Available" : "Not found", Status: typeof util.ClearGlobalNotification === "function" ? "✓" : "✗" });
    } catch (e: any) {
        methodResults.push({ Test: "S22", Property: "ClearGlobalNotification", Value: e.message, Status: "✗" });
    }

    // ----------------------------------------
    // Utility Methods
    // ----------------------------------------
    try {
        methodResults.push({ Test: "S23", Property: "AllowedStatusTransitions", Value: typeof util.AllowedStatusTransitions === "function" ? "Available" : "Not found", Status: typeof util.AllowedStatusTransitions === "function" ? "✓" : "✗" });
    } catch (e: any) {
        methodResults.push({ Test: "S23", Property: "AllowedStatusTransitions", Value: e.message, Status: "✗" });
    }

    try {
        methodResults.push({ Test: "S24", Property: "EntityMetadata", Value: typeof util.EntityMetadata === "function" ? "Available" : "Not found", Status: typeof util.EntityMetadata === "function" ? "✓" : "✗" });
    } catch (e: any) {
        methodResults.push({ Test: "S24", Property: "EntityMetadata", Value: e.message, Status: "✗" });
    }

    try {
        methodResults.push({ Test: "S25", Property: "EntityMainFormDescriptor", Value: typeof util.EntityMainFormDescriptor === "function" ? "Available" : "Not found", Status: typeof util.EntityMainFormDescriptor === "function" ? "✓" : "✗" });
    } catch (e: any) {
        methodResults.push({ Test: "S25", Property: "EntityMainFormDescriptor", Value: e.message, Status: "✗" });
    }

    try {
        methodResults.push({ Test: "S26", Property: "InvokeProcessAction", Value: typeof util.InvokeProcessAction === "function" ? "Available" : "Not found", Status: typeof util.InvokeProcessAction === "function" ? "✓" : "✗" });
    } catch (e: any) {
        methodResults.push({ Test: "S26", Property: "InvokeProcessAction", Value: e.message, Status: "✗" });
    }

    try {
        methodResults.push({ Test: "S27", Property: "LookupObjects", Value: typeof util.LookupObjects === "function" ? "Available" : "Not found", Status: typeof util.LookupObjects === "function" ? "✓" : "✗" });
    } catch (e: any) {
        methodResults.push({ Test: "S27", Property: "LookupObjects", Value: e.message, Status: "✗" });
    }

    try {
        methodResults.push({ Test: "S28", Property: "RefreshParentGrid", Value: typeof util.RefreshParentGrid === "function" ? "Available" : "Not found", Status: typeof util.RefreshParentGrid === "function" ? "✓" : "✗" });
    } catch (e: any) {
        methodResults.push({ Test: "S28", Property: "RefreshParentGrid", Value: e.message, Status: "✗" });
    }

    try {
        methodResults.push({ Test: "S29", Property: "Resource", Value: typeof util.Resource === "function" ? "Available" : "Not found", Status: typeof util.Resource === "function" ? "✓" : "✗" });
    } catch (e: any) {
        methodResults.push({ Test: "S29", Property: "Resource", Value: e.message, Status: "✗" });
    }

    try {
        methodResults.push({ Test: "S30", Property: "ResourceString", Value: typeof util.ResourceString === "function" ? "Available" : "Not found", Status: typeof util.ResourceString === "function" ? "✓" : "✗" });
    } catch (e: any) {
        methodResults.push({ Test: "S30", Property: "ResourceString", Value: e.message, Status: "✗" });
    }

    // ----------------------------------------
    // Device Methods
    // ----------------------------------------
    try {
        methodResults.push({ Test: "S31", Property: "BarcodeValue", Value: typeof util.BarcodeValue === "function" ? "Available" : "Not found", Status: typeof util.BarcodeValue === "function" ? "✓" : "✗" });
    } catch (e: any) {
        methodResults.push({ Test: "S31", Property: "BarcodeValue", Value: e.message, Status: "✗" });
    }

    try {
        methodResults.push({ Test: "S32", Property: "CaptureAudio", Value: typeof util.CaptureAudio === "function" ? "Available" : "Not found", Status: typeof util.CaptureAudio === "function" ? "✓" : "✗" });
    } catch (e: any) {
        methodResults.push({ Test: "S32", Property: "CaptureAudio", Value: e.message, Status: "✗" });
    }

    try {
        methodResults.push({ Test: "S33", Property: "CaptureImage", Value: typeof util.CaptureImage === "function" ? "Available" : "Not found", Status: typeof util.CaptureImage === "function" ? "✓" : "✗" });
    } catch (e: any) {
        methodResults.push({ Test: "S33", Property: "CaptureImage", Value: e.message, Status: "✗" });
    }

    try {
        methodResults.push({ Test: "S34", Property: "CaptureVideo", Value: typeof util.CaptureVideo === "function" ? "Available" : "Not found", Status: typeof util.CaptureVideo === "function" ? "✓" : "✗" });
    } catch (e: any) {
        methodResults.push({ Test: "S34", Property: "CaptureVideo", Value: e.message, Status: "✗" });
    }

    try {
        methodResults.push({ Test: "S35", Property: "CurrentPosition", Value: typeof util.CurrentPosition === "function" ? "Available" : "Not found", Status: typeof util.CurrentPosition === "function" ? "✓" : "✗" });
    } catch (e: any) {
        methodResults.push({ Test: "S35", Property: "CurrentPosition", Value: e.message, Status: "✗" });
    }

    try {
        methodResults.push({ Test: "S36", Property: "PickFile", Value: typeof util.PickFile === "function" ? "Available" : "Not found", Status: typeof util.PickFile === "function" ? "✓" : "✗" });
    } catch (e: any) {
        methodResults.push({ Test: "S36", Property: "PickFile", Value: e.message, Status: "✗" });
    }

    // ----------------------------------------
    // Panel Methods
    // ----------------------------------------
    try {
        methodResults.push({ Test: "S37", Property: "LoadPanel", Value: typeof util.LoadPanel === "function" ? "Available" : "Not found", Status: typeof util.LoadPanel === "function" ? "✓" : "✗" });
    } catch (e: any) {
        methodResults.push({ Test: "S37", Property: "LoadPanel", Value: e.message, Status: "✗" });
    }

    // =====================================================
    // OUTPUT
    // =====================================================
    const allResults = [...results, ...methodResults];
    const passed = allResults.filter(r => r.Status === "✓").length;
    const warnings = allResults.filter(r => r.Status === "⚠").length;
    const failed = allResults.filter(r => r.Status === "✗").length;
    const total = allResults.length;

    console.groupCollapsed(`🔧 TEST 12: Utility API [${startTime}] - ${passed}/${total}`);

    console.log("%c📋 ReadOnly Properties (R1-R40)", "font-weight: bold; font-size: 14px; color: #4CAF50;");
    console.table(results);

    console.log("%c⚡ Methods (S1-S37)", "font-weight: bold; font-size: 14px; color: #2196F3;");
    console.table(methodResults);

    console.log(`%c✅ Summary: ${passed}/${total} passed` +
        (warnings > 0 ? ` | ⚠ ${warnings} warnings` : '') +
        (failed > 0 ? ` | ✗ ${failed} failed` : ''),
        "font-weight: bold; color: #4CAF50; font-size: 14px;");

    console.groupEnd();
}
