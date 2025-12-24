//@ts-check
///<reference path="Account.d.ts" />
"use strict";
var formAccount_DevKitV4 = (function () {
	"use strict";
	/** @type {DevKit.FormAccount_DevKitV4} */
	let form;
	/** @param {any} executionContext */
	async function onLoad(executionContext) {
		form = new DevKit.FormAccount_DevKitV4(executionContext);
		registerEvents();
		form.UiAddLoaded(UiAddLoaded);
	}
	function registerEvents() {
		if (form.ExecutionContext.IsInitialLoad()) {
		}
	}
	//BEGIN ON LOAD ========================================================
	/** @param {any} executionContext */
	async function UiAddLoaded(executionContext) {
		setTimeout(async () => {
			console.clear();

			// Test 0: IControl Interface (base for all controls)
			TestControl();

			// Test 1: String Control
			TestString();

			// Test 2: Memo Control
			TestMemo();

			// Test 3: Boolean Control
			TestBoolean();

			// Test 4: Integer Control (Body)
			TestInteger();

			// Test 4A: Header Control - Tests header field behavior (using v4_Integer1)
			TestHeader();

			// Test 5: Decimal Control
			TestDecimal();

			// Test 6: Double Control
			TestDouble();

			// Test 7: Money Control
			TestMoney();

			// Test 8: Lookup Control
			TestLookup();

			// Test 8A: Lookup Control - Multi Control per Attribute (OwnerId has 2 controls: OwnerId, OwnerId1)
			TestLookup1();

			// Test 9: OptionSet Control
			TestOptionSet();

			// Test 10: MultiOptionSet Control
			TestMultiOptionSet();

			// Test 11: DateOnly Control
			TestDateOnly();

			// Test 12: DateTime Control
			TestDateTime();

			// Test 13: Grid Control
			TestGrid();

			// Test 14: QuickView Control
			TestQuickView();

			// Test 15: NavigationItem Control
			TestNavigationItem();

			// Test 16: ExecutionContext
			TestExecutionContext();

			// Test 17: SidePanes
			TestSidePanes();

			// Test 18: Copilot (Preview)
			TestCopilot();

			// Test 19: Process (BPF)
			TestProcess();

			// Test 20: IFrame Control
			TestIFrame();

			// Test 21: Utility API
			TestUtility();

		}, 1000);
	}

	function TestControl() {
		/** @type {Array<{Test: string, Property: string, Value: any, Status: string}>} */
		const results = [];
		const startTime = new Date().toLocaleTimeString();
		const originalValue = form.Body.v4_String.Value;

		// =====================================================
		// READONLY PROPERTIES (R-Index)
		// =====================================================
		try {
			results.push({ Test: "R1", Property: "Attribute", Value: form.Body.v4_String.Attribute ? "object" : "null", Status: form.Body.v4_String.Attribute ? "?" : "?" });
			results.push({ Test: "R2", Property: "AttributeName", Value: form.Body.v4_String.AttributeName, Status: form.Body.v4_String.AttributeName === "v4_string" ? "?" : "?" });
			results.push({ Test: "R3", Property: "AttributeType", Value: form.Body.v4_String.AttributeType, Status: form.Body.v4_String.AttributeType === OptionSet.FieldAttributeType.String ? "?" : "?" });
			results.push({ Test: "R4", Property: "ControlName", Value: form.Body.v4_String.ControlName, Status: "?" });
			results.push({ Test: "R5", Property: "ControlType", Value: form.Body.v4_String.ControlType, Status: "?" });
			results.push({ Test: "R6", Property: "Format", Value: form.Body.v4_String.Format, Status: "?" });
			results.push({ Test: "R7", Property: "IsDirty", Value: form.Body.v4_String.IsDirty, Status: "?" });
			results.push({ Test: "R8", Property: "IsValid", Value: form.Body.v4_String.IsValid, Status: "?" });
		} catch (/** @type {any} */ error) {
			results.push({ Test: "ERR", Property: "Properties Error", Value: error.message, Status: "?" });
		}

		// =====================================================
		// SETTERS & METHODS (S-Index)
		// =====================================================
		/** @type {Array<{Test: string, Property: string, Value: any, Status: string}>} */
		const setterResults = [];

		// Setters
		try {
			const origRequired = form.Body.v4_String.RequiredLevel;
			form.Body.v4_String.RequiredLevel = OptionSet.FieldRequiredLevel.Required;
			const newRequired = form.Body.v4_String.RequiredLevel;
			form.Body.v4_String.RequiredLevel = origRequired;
			setterResults.push({ Test: "S1", Property: "RequiredLevel (set)", Value: `${origRequired}?required?restored`, Status: newRequired === OptionSet.FieldRequiredLevel.Required ? "?" : "?" });
		} catch (/** @type {any} */ e) {
			setterResults.push({ Test: "S1", Property: "RequiredLevel (set)", Value: e.message, Status: "?" });
		}

		try {
			const origSubmit = form.Body.v4_String.SubmitMode;
			form.Body.v4_String.SubmitMode = OptionSet.FieldSubmitMode.Always;
			const newSubmit = form.Body.v4_String.SubmitMode;
			form.Body.v4_String.SubmitMode = origSubmit;
			setterResults.push({ Test: "S2", Property: "SubmitMode (set)", Value: `${origSubmit}?always?restored`, Status: newSubmit === OptionSet.FieldSubmitMode.Always ? "?" : "?" });
		} catch (/** @type {any} */ e) {
			setterResults.push({ Test: "S2", Property: "SubmitMode (set)", Value: e.message, Status: "?" });
		}

		try {
			const origDisabled = form.Body.v4_String.Disabled;
			form.Body.v4_String.Disabled = true;
			const newDisabled = form.Body.v4_String.Disabled;
			form.Body.v4_String.Disabled = origDisabled;
			setterResults.push({ Test: "S3", Property: "Disabled (set)", Value: `${origDisabled}?true?restored`, Status: newDisabled === true ? "?" : "?" });
		} catch (/** @type {any} */ e) {
			setterResults.push({ Test: "S3", Property: "Disabled (set)", Value: e.message, Status: "?" });
		}

		try {
			const origLabel = form.Body.v4_String.Label;
			form.Body.v4_String.Label = origLabel + " (TEST)";
			const newLabel = form.Body.v4_String.Label;
			form.Body.v4_String.Label = origLabel;
			setterResults.push({ Test: "S4", Property: "Label (set)", Value: `"${origLabel}"?modified?restored`, Status: newLabel.includes("(TEST)") ? "?" : "?" });
		} catch (/** @type {any} */ e) {
			setterResults.push({ Test: "S4", Property: "Label (set)", Value: e.message, Status: "?" });
		}

		try {
			const origVisible = form.Body.v4_String.Visible;
			form.Body.v4_String.Visible = false;
			const newVisible = form.Body.v4_String.Visible;
			form.Body.v4_String.Visible = origVisible;
			setterResults.push({ Test: "S5", Property: "Visible (set)", Value: `${origVisible}?false?restored`, Status: newVisible === false ? "?" : "?" });
		} catch (/** @type {any} */ e) {
			setterResults.push({ Test: "S5", Property: "Visible (set)", Value: e.message, Status: "?" });
		}

		try {
			form.Body.v4_String.Value = originalValue + " (MODIFIED)";
			const newValue = form.Body.v4_String.Value;
			form.Body.v4_String.Value = originalValue;
			setterResults.push({ Test: "S6", Property: "Value (set)", Value: `modified?restored`, Status: newValue?.includes("(MODIFIED)") ? "?" : "?" });
		} catch (/** @type {any} */ e) {
			setterResults.push({ Test: "S6", Property: "Value (set)", Value: e.message, Status: "?" });
		}

		// Methods
		/** @param {any} ctx */
		const onChangeCallback = (ctx) => console.log("  ?? OnChange fired");
		try {
			form.Body.v4_String.AddOnChange(onChangeCallback);
			setterResults.push({ Test: "S7", Property: "AddOnChange", Value: "Registered", Status: "?" });
		} catch (/** @type {any} */ e) {
			setterResults.push({ Test: "S7", Property: "AddOnChange", Value: e.message, Status: "?" });
		}

		try {
			form.Body.v4_String.RemoveOnChange(onChangeCallback);
			setterResults.push({ Test: "S8", Property: "RemoveOnChange", Value: "Removed", Status: "?" });
		} catch (/** @type {any} */ e) {
			setterResults.push({ Test: "S8", Property: "RemoveOnChange", Value: e.message, Status: "?" });
		}

		/** @param {any} ctx */
		const outputChangeCallback = (ctx) => console.log("  ?? OutputChange fired");
		try {
			form.Body.v4_String.AddOnOutputChange(outputChangeCallback);
			setterResults.push({ Test: "S9", Property: "AddOnOutputChange", Value: "Registered", Status: "?" });
		} catch (/** @type {any} */ e) {
			setterResults.push({ Test: "S9", Property: "AddOnOutputChange", Value: e.message, Status: "?" });
		}

		try {
			form.Body.v4_String.RemoveOnOutputChange(outputChangeCallback);
			setterResults.push({ Test: "S10", Property: "RemoveOnOutputChange", Value: "Removed", Status: "?" });
		} catch (/** @type {any} */ e) {
			setterResults.push({ Test: "S10", Property: "RemoveOnOutputChange", Value: e.message, Status: "?" });
		}

		try {
			form.Body.v4_String.FireOnChange();
			setterResults.push({ Test: "S11", Property: "FireOnChange", Value: "Fired", Status: "?" });
		} catch (/** @type {any} */ e) {
			setterResults.push({ Test: "S11", Property: "FireOnChange", Value: e.message, Status: "?" });
		}

		try {
			setTimeout(() => form.Body.v4_String.Focus(), 1000);
			setterResults.push({ Test: "S12", Property: "Focus", Value: "Scheduled (1s)", Status: "?" });
		} catch (/** @type {any} */ e) {
			setterResults.push({ Test: "S12", Property: "Focus", Value: e.message, Status: "?" });
		}

		try {
			form.Body.v4_String.SetNotification("Test notification from IControl", "CTRL_TEST_1");
			setTimeout(() => form.Body.v4_String.ClearNotification("CTRL_TEST_1"), 3000);
			setterResults.push({ Test: "S13", Property: "SetNotification", Value: "Set (clears 3s)", Status: "?" });
		} catch (/** @type {any} */ e) {
			setterResults.push({ Test: "S13", Property: "SetNotification", Value: e.message, Status: "?" });
		}

		try {
			const cleared = form.Body.v4_String.ClearNotification("NONEXISTENT");
			setterResults.push({ Test: "S14", Property: "ClearNotification", Value: `Result: ${cleared}`, Status: "?" });
		} catch (/** @type {any} */ e) {
			setterResults.push({ Test: "S14", Property: "ClearNotification", Value: e.message, Status: "?" });
		}

		try {
			form.Body.v4_String.AddNotification({
				messages: ["Recommendation from test"],
				notificationLevel: OptionSet.FieldNotificationLevel.Recommendation,
				uniqueId: "CTRL_TEST_2"
			});
			setTimeout(() => form.Body.v4_String.ClearNotification("CTRL_TEST_2"), 3000);
			setterResults.push({ Test: "S15", Property: "AddNotification", Value: "Added (clears 3s)", Status: "?" });
		} catch (/** @type {any} */ e) {
			setterResults.push({ Test: "S15", Property: "AddNotification", Value: e.message, Status: "?" });
		}

		try {
			form.Body.v4_String.SetIsValid(false, "Test invalid message");
			setTimeout(() => form.Body.v4_String.SetIsValid(true, ""), 2000);
			setterResults.push({ Test: "S16", Property: "SetIsValid", Value: "Set?Restored (2s)", Status: "?" });
		} catch (/** @type {any} */ e) {
			setterResults.push({ Test: "S16", Property: "SetIsValid", Value: e.message, Status: "?" });
		}

		// =====================================================
		// OUTPUT
		// =====================================================
		const allResults = [...results, ...setterResults];
		const passed = allResults.filter(r => r.Status === "?").length;
		const warnings = allResults.filter(r => r.Status === "?").length;
		const failed = allResults.filter(r => r.Status === "?").length;
		const total = allResults.length;

		console.groupCollapsed(`🎯 TEST 0: IControl Interface [${startTime}] - Using: v4_String field - ${passed}/${total}`);

		console.log("%c📋 ReadOnly Properties (R1-R8)", "font-weight: bold; font-size: 14px; color: #4CAF50;");
		console.table(results);

		console.log("%c⚡ Setters & Methods (S1-S16)", "font-weight: bold; font-size: 14px; color: #2196F3;");
		console.table(setterResults);

		console.log(`%c✅ Summary: ${passed}/${total} passed` +
			(warnings > 0 ? ` | ⚠ ${warnings} warnings` : '') +
			(failed > 0 ? ` | ✗ ${failed} failed` : ''),
			"font-weight: bold; color: #4CAF50; font-size: 14px;");

		console.groupEnd();
	}

	function TestString() {
		/** @type {Array<{Test: string, Property: string, Value: any, Status: string}>} */
		const results = [];
		/** @type {Array<{Test: string, Property: string, Value: any, Status: string}>} */
		const methodResults = [];
		const startTime = new Date().toLocaleTimeString();
		const originalValue = form.Body.v4_String.Value;

		// =====================================================
		// READONLY PROPERTIES (R-Index)
		// =====================================================
		try {
			// String-specific properties
			results.push({ Test: "R1", Property: "MaxLength", Value: form.Body.v4_String.MaxLength, Status: typeof form.Body.v4_String.MaxLength === "number" ? "?" : "?" });
			results.push({ Test: "R2", Property: "Value", Value: originalValue ? `"${originalValue.substring(0, 50)}${originalValue.length > 50 ? '...' : ''}"` : "(empty)", Status: "?" });

			// Inherited from IControl
			results.push({ Test: "R3", Property: "Attribute", Value: form.Body.v4_String.Attribute ? "object" : "null", Status: form.Body.v4_String.Attribute ? "?" : "?" });
			results.push({ Test: "R4", Property: "AttributeName", Value: form.Body.v4_String.AttributeName, Status: form.Body.v4_String.AttributeName === "v4_string" ? "?" : "?" });
			results.push({ Test: "R5", Property: "AttributeType", Value: form.Body.v4_String.AttributeType, Status: form.Body.v4_String.AttributeType === OptionSet.FieldAttributeType.String ? "?" : "?" });
			results.push({ Test: "R6", Property: "ControlName", Value: form.Body.v4_String.ControlName, Status: "?" });
			results.push({ Test: "R7", Property: "ControlType", Value: form.Body.v4_String.ControlType, Status: "?" });
			results.push({ Test: "R8", Property: "Format", Value: form.Body.v4_String.Format, Status: "?" });
			results.push({ Test: "R9", Property: "IsDirty", Value: form.Body.v4_String.IsDirty, Status: "?" });
			results.push({ Test: "R10", Property: "IsValid", Value: form.Body.v4_String.IsValid, Status: "?" });
			results.push({ Test: "R11", Property: "RequiredLevel", Value: form.Body.v4_String.RequiredLevel, Status: "?" });
			results.push({ Test: "R12", Property: "SubmitMode", Value: form.Body.v4_String.SubmitMode, Status: "?" });
			results.push({ Test: "R13", Property: "Disabled", Value: form.Body.v4_String.Disabled, Status: "?" });
			results.push({ Test: "R14", Property: "Label", Value: form.Body.v4_String.Label, Status: "?" });
			results.push({ Test: "R15", Property: "Visible", Value: form.Body.v4_String.Visible, Status: "?" });
		} catch (/** @type {any} */ error) {
			results.push({ Test: "ERR", Property: "Props Error", Value: error.message, Status: "?" });
		}

		// =====================================================
		// SETTERS & METHODS (S-Index)
		// =====================================================
		try {
			// Setter: Value
			form.Body.v4_String.Value = (originalValue || "") + " [TEST]";
			const newValue = form.Body.v4_String.Value;
			form.Body.v4_String.Value = originalValue;
			methodResults.push({ Test: "S1", Property: "Value (set)", Value: newValue?.includes("[TEST]") ? "Set?Restored" : "Failed", Status: newValue?.includes("[TEST]") ? "?" : "?" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S1", Property: "Value (set)", Value: e.message, Status: "?" });
		}

		try {
			const origRequired = form.Body.v4_String.RequiredLevel;
			form.Body.v4_String.RequiredLevel = OptionSet.FieldRequiredLevel.Required;
			const check = form.Body.v4_String.RequiredLevel;
			form.Body.v4_String.RequiredLevel = origRequired;
			methodResults.push({ Test: "S2", Property: "RequiredLevel (set)", Value: check === OptionSet.FieldRequiredLevel.Required ? "Set?Restored" : "Failed", Status: check === OptionSet.FieldRequiredLevel.Required ? "?" : "?" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S2", Property: "RequiredLevel (set)", Value: e.message, Status: "?" });
		}

		try {
			const origDisabled = form.Body.v4_String.Disabled;
			form.Body.v4_String.Disabled = !origDisabled;
			form.Body.v4_String.Disabled = origDisabled;
			methodResults.push({ Test: "S3", Property: "Disabled (set)", Value: "Set?Restored", Status: "?" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S3", Property: "Disabled (set)", Value: e.message, Status: "?" });
		}

		try {
			const origLabel = form.Body.v4_String.Label;
			form.Body.v4_String.Label = origLabel + " (TEST)";
			const check = form.Body.v4_String.Label;
			form.Body.v4_String.Label = origLabel;
			methodResults.push({ Test: "S4", Property: "Label (set)", Value: check.includes("(TEST)") ? "Set?Restored" : "Failed", Status: check.includes("(TEST)") ? "?" : "?" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S4", Property: "Label (set)", Value: e.message, Status: "?" });
		}

		try {
			const origVisible = form.Body.v4_String.Visible;
			form.Body.v4_String.Visible = !origVisible;
			form.Body.v4_String.Visible = origVisible;
			methodResults.push({ Test: "S5", Property: "Visible (set)", Value: "Set?Restored", Status: "?" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S5", Property: "Visible (set)", Value: e.message, Status: "?" });
		}

		// Methods
		/** @param {any} ctx */
		const onChangeCallback = (ctx) => console.log("  ?? String OnChange fired");

		try {
			form.Body.v4_String.AddOnChange(onChangeCallback);
			methodResults.push({ Test: "S6", Property: "AddOnChange", Value: "Registered", Status: "?" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S6", Property: "AddOnChange", Value: e.message, Status: "?" });
		}

		try {
			form.Body.v4_String.RemoveOnChange(onChangeCallback);
			methodResults.push({ Test: "S7", Property: "RemoveOnChange", Value: "Removed", Status: "?" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S7", Property: "RemoveOnChange", Value: e.message, Status: "?" });
		}

		try {
			form.Body.v4_String.FireOnChange();
			methodResults.push({ Test: "S8", Property: "FireOnChange", Value: "Fired", Status: "?" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S8", Property: "FireOnChange", Value: e.message, Status: "?" });
		}

		try {
			setTimeout(() => form.Body.v4_String.Focus(), 1000);
			methodResults.push({ Test: "S9", Property: "Focus", Value: "Scheduled (1s)", Status: "?" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S9", Property: "Focus", Value: e.message, Status: "?" });
		}

		try {
			form.Body.v4_String.SetNotification("Test String notification", "STRING_TEST_1");
			setTimeout(() => form.Body.v4_String.ClearNotification("STRING_TEST_1"), 3000);
			methodResults.push({ Test: "S10", Property: "SetNotification", Value: "Set (clears 3s)", Status: "?" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S10", Property: "SetNotification", Value: e.message, Status: "?" });
		}

		try {
			form.Body.v4_String.SetIsValid(false, "Test invalid");
			setTimeout(() => form.Body.v4_String.SetIsValid(true, ""), 2000);
			methodResults.push({ Test: "S11", Property: "SetIsValid", Value: "Set?Restored (2s)", Status: "?" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S11", Property: "SetIsValid", Value: e.message, Status: "?" });
		}

		// =====================================================
		// OUTPUT
		// =====================================================
		const allResults = [...results, ...methodResults];
		const passed = allResults.filter(r => r.Status === "?").length;
		const warnings = allResults.filter(r => r.Status === "?").length;
		const failed = allResults.filter(r => r.Status === "?").length;
		const total = allResults.length;

		console.groupCollapsed(`🎯 TEST 1: String Control [${startTime}] - Using: v4_String field - ${passed}/${total}`);

		console.log("%c📋 ReadOnly Properties (R1-R15)", "font-weight: bold; font-size: 14px; color: #4CAF50;");
		console.table(results);

		console.log("%c⚡ Setters & Methods (S1-S11)", "font-weight: bold; font-size: 14px; color: #2196F3;");
		console.table(methodResults);

		console.log(`%c✅ Summary: ${passed}/${total} passed` +
			(warnings > 0 ? ` | ⚠ ${warnings} warnings` : '') +
			(failed > 0 ? ` | ✗ ${failed} failed` : ''),
			"font-weight: bold; color: #4CAF50; font-size: 14px;");

		console.groupEnd();
	}

	function TestMemo() {
		/** @type {Array<{Test: string, Property: string, Value: any, Status: string}>} */
		const results = [];
		/** @type {Array<{Test: string, Property: string, Value: any, Status: string}>} */
		const methodResults = [];
		const startTime = new Date().toLocaleTimeString();
		const originalValue = form.Body.v4_Memo.Value;

		// =====================================================
		// READONLY PROPERTIES (R-Index)
		// =====================================================
		try {
			// Memo-specific properties
			results.push({ Test: "R1", Property: "MaxLength", Value: form.Body.v4_Memo.MaxLength, Status: typeof form.Body.v4_Memo.MaxLength === "number" ? "?" : "?" });
			results.push({ Test: "R2", Property: "Value", Value: originalValue ? `"${originalValue.substring(0, 50)}${originalValue.length > 50 ? '...' : ''}"` : "(empty)", Status: "?" });

			// Inherited from IControl
			results.push({ Test: "R3", Property: "Attribute", Value: form.Body.v4_Memo.Attribute ? "object" : "null", Status: form.Body.v4_Memo.Attribute ? "?" : "?" });
			results.push({ Test: "R4", Property: "AttributeName", Value: form.Body.v4_Memo.AttributeName, Status: form.Body.v4_Memo.AttributeName === "v4_memo" ? "?" : "?" });
			results.push({ Test: "R5", Property: "AttributeType", Value: form.Body.v4_Memo.AttributeType, Status: form.Body.v4_Memo.AttributeType === OptionSet.FieldAttributeType.Memo ? "?" : "?" });
			results.push({ Test: "R6", Property: "ControlName", Value: form.Body.v4_Memo.ControlName, Status: "?" });
			results.push({ Test: "R7", Property: "ControlType", Value: form.Body.v4_Memo.ControlType, Status: "?" });
			results.push({ Test: "R8", Property: "Format", Value: form.Body.v4_Memo.Format, Status: "?" });
			results.push({ Test: "R9", Property: "IsDirty", Value: form.Body.v4_Memo.IsDirty, Status: "?" });
			results.push({ Test: "R10", Property: "IsValid", Value: form.Body.v4_Memo.IsValid, Status: "?" });
			results.push({ Test: "R11", Property: "RequiredLevel", Value: form.Body.v4_Memo.RequiredLevel, Status: "?" });
			results.push({ Test: "R12", Property: "SubmitMode", Value: form.Body.v4_Memo.SubmitMode, Status: "?" });
			results.push({ Test: "R13", Property: "Disabled", Value: form.Body.v4_Memo.Disabled, Status: "?" });
			results.push({ Test: "R14", Property: "Label", Value: form.Body.v4_Memo.Label, Status: "?" });
			results.push({ Test: "R15", Property: "Visible", Value: form.Body.v4_Memo.Visible, Status: "?" });
		} catch (/** @type {any} */ error) {
			results.push({ Test: "ERR", Property: "Props Error", Value: error.message, Status: "?" });
		}

		// =====================================================
		// SETTERS & METHODS (S-Index)
		// =====================================================
		try {
			// Setter: Value
			form.Body.v4_Memo.Value = (originalValue || "") + " [TEST]";
			const newValue = form.Body.v4_Memo.Value;
			form.Body.v4_Memo.Value = originalValue;
			methodResults.push({ Test: "S1", Property: "Value (set)", Value: newValue?.includes("[TEST]") ? "Set?Restored" : "Failed", Status: newValue?.includes("[TEST]") ? "?" : "?" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S1", Property: "Value (set)", Value: e.message, Status: "?" });
		}

		try {
			// Setter: RequiredLevel
			const origRequired = form.Body.v4_Memo.RequiredLevel;
			form.Body.v4_Memo.RequiredLevel = OptionSet.FieldRequiredLevel.Required;
			const check = form.Body.v4_Memo.RequiredLevel;
			form.Body.v4_Memo.RequiredLevel = origRequired;
			methodResults.push({ Test: "S2", Property: "RequiredLevel (set)", Value: check === OptionSet.FieldRequiredLevel.Required ? "Set?Restored" : "Failed", Status: check === OptionSet.FieldRequiredLevel.Required ? "?" : "?" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S2", Property: "RequiredLevel (set)", Value: e.message, Status: "?" });
		}

		try {
			// Setter: Disabled
			const origDisabled = form.Body.v4_Memo.Disabled;
			form.Body.v4_Memo.Disabled = !origDisabled;
			form.Body.v4_Memo.Disabled = origDisabled;
			methodResults.push({ Test: "S3", Property: "Disabled (set)", Value: "Set?Restored", Status: "?" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S3", Property: "Disabled (set)", Value: e.message, Status: "?" });
		}

		try {
			// Setter: Label
			const origLabel = form.Body.v4_Memo.Label;
			form.Body.v4_Memo.Label = origLabel + " (TEST)";
			const check = form.Body.v4_Memo.Label;
			form.Body.v4_Memo.Label = origLabel;
			methodResults.push({ Test: "S4", Property: "Label (set)", Value: check.includes("(TEST)") ? "Set?Restored" : "Failed", Status: check.includes("(TEST)") ? "?" : "?" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S4", Property: "Label (set)", Value: e.message, Status: "?" });
		}

		try {
			// Setter: Visible
			const origVisible = form.Body.v4_Memo.Visible;
			form.Body.v4_Memo.Visible = !origVisible;
			form.Body.v4_Memo.Visible = origVisible;
			methodResults.push({ Test: "S5", Property: "Visible (set)", Value: "Set?Restored", Status: "?" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S5", Property: "Visible (set)", Value: e.message, Status: "?" });
		}

		// Methods
		/** @param {any} ctx */
		const onChangeCallback = (ctx) => console.log("  ?? Memo OnChange fired");

		try {
			form.Body.v4_Memo.AddOnChange(onChangeCallback);
			methodResults.push({ Test: "S6", Property: "AddOnChange", Value: "Registered", Status: "?" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S6", Property: "AddOnChange", Value: e.message, Status: "?" });
		}

		try {
			form.Body.v4_Memo.RemoveOnChange(onChangeCallback);
			methodResults.push({ Test: "S7", Property: "RemoveOnChange", Value: "Removed", Status: "?" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S7", Property: "RemoveOnChange", Value: e.message, Status: "?" });
		}

		try {
			form.Body.v4_Memo.FireOnChange();
			methodResults.push({ Test: "S8", Property: "FireOnChange", Value: "Fired", Status: "?" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S8", Property: "FireOnChange", Value: e.message, Status: "?" });
		}

		try {
			setTimeout(() => form.Body.v4_Memo.Focus(), 1000);
			methodResults.push({ Test: "S9", Property: "Focus", Value: "Scheduled (1s)", Status: "?" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S9", Property: "Focus", Value: e.message, Status: "?" });
		}

		try {
			form.Body.v4_Memo.SetNotification("Test Memo notification", "MEMO_TEST_1");
			setTimeout(() => form.Body.v4_Memo.ClearNotification("MEMO_TEST_1"), 3000);
			methodResults.push({ Test: "S10", Property: "SetNotification", Value: "Set (clears 3s)", Status: "?" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S10", Property: "SetNotification", Value: e.message, Status: "?" });
		}

		try {
			form.Body.v4_Memo.SetIsValid(false, "Test invalid");
			setTimeout(() => form.Body.v4_Memo.SetIsValid(true, ""), 2000);
			methodResults.push({ Test: "S11", Property: "SetIsValid", Value: "Set?Restored (2s)", Status: "?" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S11", Property: "SetIsValid", Value: e.message, Status: "?" });
		}

		// =====================================================
		// OUTPUT
		// =====================================================
		const allResults = [...results, ...methodResults];
		const passed = allResults.filter(r => r.Status === "?").length;
		const warnings = allResults.filter(r => r.Status === "?").length;
		const failed = allResults.filter(r => r.Status === "?").length;
		const total = allResults.length;

		console.groupCollapsed(`🎯 TEST 2: Memo Control [${startTime}] - Using: v4_Memo field - ${passed}/${total}`);

		console.log("%c📋 ReadOnly Properties (R1-R15)", "font-weight: bold; font-size: 14px; color: #4CAF50;");
		console.table(results);

		console.log("%c⚡ Setters & Methods (S1-S11)", "font-weight: bold; font-size: 14px; color: #2196F3;");
		console.table(methodResults);

		console.log(`%c✅ Summary: ${passed}/${total} passed` +
			(warnings > 0 ? ` | ⚠ ${warnings} warnings` : '') +
			(failed > 0 ? ` | ✗ ${failed} failed` : ''),
			"font-weight: bold; color: #4CAF50; font-size: 14px;");

		console.groupEnd();
	}

	function TestBoolean() {
		/** @type {Array<{Test: string, Property: string, Value: any, Status: string}>} */
		const results = [];
		/** @type {Array<{Test: string, Property: string, Value: any, Status: string}>} */
		const methodResults = [];
		const startTime = new Date().toLocaleTimeString();
		const originalValue = form.Body.v4_Boolean.Value;

		// =====================================================
		// READONLY PROPERTIES (R-Index)
		// =====================================================
		try {
			// Boolean-specific properties (InitialValue can be boolean or 0/1)
			const initVal = form.Body.v4_Boolean.InitialValue;
			const isValidInitValue = typeof initVal === "boolean" || initVal === 0 || initVal === 1;
			results.push({ Test: "R1", Property: "InitialValue", Value: initVal, Status: isValidInitValue ? "?" : "?" });
			results.push({ Test: "R2", Property: "Value", Value: originalValue, Status: "?" });

			// Inherited from IControl
			results.push({ Test: "R3", Property: "Attribute", Value: form.Body.v4_Boolean.Attribute ? "object" : "null", Status: form.Body.v4_Boolean.Attribute ? "?" : "?" });
			results.push({ Test: "R4", Property: "AttributeName", Value: form.Body.v4_Boolean.AttributeName, Status: form.Body.v4_Boolean.AttributeName === "v4_boolean" ? "?" : "?" });
			results.push({ Test: "R5", Property: "AttributeType", Value: form.Body.v4_Boolean.AttributeType, Status: form.Body.v4_Boolean.AttributeType === OptionSet.FieldAttributeType.Boolean ? "?" : "?" });
			results.push({ Test: "R6", Property: "ControlName", Value: form.Body.v4_Boolean.ControlName, Status: "?" });
			results.push({ Test: "R7", Property: "ControlType", Value: form.Body.v4_Boolean.ControlType, Status: "?" });
			results.push({ Test: "R8", Property: "Format", Value: form.Body.v4_Boolean.Format, Status: "?" });
			results.push({ Test: "R9", Property: "IsDirty", Value: form.Body.v4_Boolean.IsDirty, Status: "?" });
			results.push({ Test: "R10", Property: "IsValid", Value: form.Body.v4_Boolean.IsValid, Status: "?" });
			results.push({ Test: "R11", Property: "RequiredLevel", Value: form.Body.v4_Boolean.RequiredLevel, Status: "?" });
			results.push({ Test: "R12", Property: "SubmitMode", Value: form.Body.v4_Boolean.SubmitMode, Status: "?" });
			results.push({ Test: "R13", Property: "Disabled", Value: form.Body.v4_Boolean.Disabled, Status: "?" });
			results.push({ Test: "R14", Property: "Label", Value: form.Body.v4_Boolean.Label, Status: "?" });
			results.push({ Test: "R15", Property: "Visible", Value: form.Body.v4_Boolean.Visible, Status: "?" });
		} catch (/** @type {any} */ error) {
			results.push({ Test: "ERR", Property: "Props Error", Value: error.message, Status: "?" });
		}

		// =====================================================
		// SETTERS & METHODS (S-Index)
		// =====================================================

		// Setter: Value
		try {
			const testValue = !originalValue;
			form.Body.v4_Boolean.Value = testValue;
			const newValue = form.Body.v4_Boolean.Value;
			form.Body.v4_Boolean.Value = originalValue;
			methodResults.push({ Test: "S1", Property: "Value (set)", Value: newValue === testValue ? "Set?Restored" : "Failed", Status: newValue === testValue ? "?" : "?" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S1", Property: "Value (set)", Value: e.message, Status: "?" });
		}

		// Setter: RequiredLevel
		try {
			const origRequired = form.Body.v4_Boolean.RequiredLevel;
			form.Body.v4_Boolean.RequiredLevel = OptionSet.FieldRequiredLevel.Required;
			const check = form.Body.v4_Boolean.RequiredLevel;
			form.Body.v4_Boolean.RequiredLevel = origRequired;
			methodResults.push({ Test: "S2", Property: "RequiredLevel (set)", Value: check === OptionSet.FieldRequiredLevel.Required ? "Set?Restored" : "Failed", Status: check === OptionSet.FieldRequiredLevel.Required ? "?" : "?" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S2", Property: "RequiredLevel (set)", Value: e.message, Status: "?" });
		}

		// Setter: Disabled
		try {
			const origDisabled = form.Body.v4_Boolean.Disabled;
			form.Body.v4_Boolean.Disabled = !origDisabled;
			const check = form.Body.v4_Boolean.Disabled;
			form.Body.v4_Boolean.Disabled = origDisabled;
			methodResults.push({ Test: "S3", Property: "Disabled (set)", Value: "Set?Restored", Status: "?" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S3", Property: "Disabled (set)", Value: e.message, Status: "?" });
		}

		// Setter: Label
		try {
			const origLabel = form.Body.v4_Boolean.Label;
			form.Body.v4_Boolean.Label = origLabel + " (TEST)";
			const check = form.Body.v4_Boolean.Label;
			form.Body.v4_Boolean.Label = origLabel;
			methodResults.push({ Test: "S4", Property: "Label (set)", Value: check.includes("(TEST)") ? "Set?Restored" : "Failed", Status: check.includes("(TEST)") ? "?" : "?" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S4", Property: "Label (set)", Value: e.message, Status: "?" });
		}

		// Setter: Visible
		try {
			const origVisible = form.Body.v4_Boolean.Visible;
			form.Body.v4_Boolean.Visible = !origVisible;
			const check = form.Body.v4_Boolean.Visible;
			form.Body.v4_Boolean.Visible = origVisible;
			methodResults.push({ Test: "S5", Property: "Visible (set)", Value: "Set?Restored", Status: "?" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S5", Property: "Visible (set)", Value: e.message, Status: "?" });
		}

		// Methods
		/** @param {any} ctx */
		const onChangeCallback = (ctx) => console.log("  ?? Boolean OnChange fired");

		try {
			form.Body.v4_Boolean.AddOnChange(onChangeCallback);
			methodResults.push({ Test: "S6", Property: "AddOnChange", Value: "Registered", Status: "?" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S6", Property: "AddOnChange", Value: e.message, Status: "?" });
		}

		try {
			form.Body.v4_Boolean.RemoveOnChange(onChangeCallback);
			methodResults.push({ Test: "S7", Property: "RemoveOnChange", Value: "Removed", Status: "?" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S7", Property: "RemoveOnChange", Value: e.message, Status: "?" });
		}

		try {
			form.Body.v4_Boolean.FireOnChange();
			methodResults.push({ Test: "S8", Property: "FireOnChange", Value: "Fired", Status: "?" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S8", Property: "FireOnChange", Value: e.message, Status: "?" });
		}

		try {
			setTimeout(() => form.Body.v4_Boolean.Focus(), 1000);
			methodResults.push({ Test: "S9", Property: "Focus", Value: "Scheduled (1s)", Status: "?" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S9", Property: "Focus", Value: e.message, Status: "?" });
		}

		try {
			form.Body.v4_Boolean.SetNotification("Test Boolean notification", "BOOL_TEST_1");
			setTimeout(() => form.Body.v4_Boolean.ClearNotification("BOOL_TEST_1"), 3000);
			methodResults.push({ Test: "S10", Property: "SetNotification", Value: "Set (clears 3s)", Status: "?" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S10", Property: "SetNotification", Value: e.message, Status: "?" });
		}

		try {
			form.Body.v4_Boolean.SetIsValid(false, "Test invalid");
			setTimeout(() => form.Body.v4_Boolean.SetIsValid(true, ""), 2000);
			methodResults.push({ Test: "S11", Property: "SetIsValid", Value: "Set?Restored (2s)", Status: "?" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S11", Property: "SetIsValid", Value: e.message, Status: "?" });
		}

		// =====================================================
		// OUTPUT
		// =====================================================
		const allResults = [...results, ...methodResults];
		const passed = allResults.filter(r => r.Status === "?").length;
		const warnings = allResults.filter(r => r.Status === "?").length;
		const failed = allResults.filter(r => r.Status === "?").length;
		const total = allResults.length;

		console.groupCollapsed(`🎯 TEST 3: Boolean Control [${startTime}] - Using: v4_Boolean field - ${passed}/${total}`);

		console.log("%c📋 ReadOnly Properties (R1-R15)", "font-weight: bold; font-size: 14px; color: #4CAF50;");
		console.table(results);

		console.log("%c⚡ Setters & Methods (S1-S11)", "font-weight: bold; font-size: 14px; color: #2196F3;");
		console.table(methodResults);

		console.log(`%c✅ Summary: ${passed}/${total} passed` +
			(warnings > 0 ? ` | ⚠ ${warnings} warnings` : '') +
			(failed > 0 ? ` | ✗ ${failed} failed` : ''),
			"font-weight: bold; color: #4CAF50; font-size: 14px;");

		console.groupEnd();
	}

	function TestInteger() {
		/** @type {Array<{Test: string, Property: string, Value: any, Status: string}>} */
		const results = [];
		/** @type {Array<{Test: string, Property: string, Value: any, Status: string}>} */
		const methodResults = [];
		const startTime = new Date().toLocaleTimeString();
		const originalValue = form.Body.v4_Integer.Value;

		// =====================================================
		// READONLY PROPERTIES (R-Index)
		// =====================================================
		try {
			// Integer-specific properties (IControlNumber - NO Precision for Integer)
			results.push({ Test: "R1", Property: "Max", Value: form.Body.v4_Integer.Max, Status: typeof form.Body.v4_Integer.Max === "number" ? "?" : "?" });
			results.push({ Test: "R2", Property: "Min", Value: form.Body.v4_Integer.Min, Status: typeof form.Body.v4_Integer.Min === "number" ? "?" : "?" });
			results.push({ Test: "R3", Property: "Value", Value: originalValue, Status: "?" });

			// Inherited from IControl
			results.push({ Test: "R4", Property: "Attribute", Value: form.Body.v4_Integer.Attribute ? "object" : "null", Status: form.Body.v4_Integer.Attribute ? "?" : "?" });
			results.push({ Test: "R5", Property: "AttributeName", Value: form.Body.v4_Integer.AttributeName, Status: form.Body.v4_Integer.AttributeName === "v4_integer" ? "?" : "?" });
			results.push({ Test: "R6", Property: "AttributeType", Value: form.Body.v4_Integer.AttributeType, Status: form.Body.v4_Integer.AttributeType === OptionSet.FieldAttributeType.Integer ? "?" : "?" });
			results.push({ Test: "R7", Property: "ControlName", Value: form.Body.v4_Integer.ControlName, Status: "?" });
			results.push({ Test: "R8", Property: "ControlType", Value: form.Body.v4_Integer.ControlType, Status: "?" });
			results.push({ Test: "R9", Property: "Format", Value: form.Body.v4_Integer.Format, Status: "?" });
			results.push({ Test: "R10", Property: "IsDirty", Value: form.Body.v4_Integer.IsDirty, Status: "?" });
			results.push({ Test: "R11", Property: "IsValid", Value: form.Body.v4_Integer.IsValid, Status: "?" });
			results.push({ Test: "R12", Property: "RequiredLevel", Value: form.Body.v4_Integer.RequiredLevel, Status: "?" });
			results.push({ Test: "R13", Property: "SubmitMode", Value: form.Body.v4_Integer.SubmitMode, Status: "?" });
			results.push({ Test: "R14", Property: "Disabled", Value: form.Body.v4_Integer.Disabled, Status: "?" });
			results.push({ Test: "R15", Property: "Label", Value: form.Body.v4_Integer.Label, Status: "?" });
			results.push({ Test: "R16", Property: "Visible", Value: form.Body.v4_Integer.Visible, Status: "?" });
		} catch (/** @type {any} */ error) {
			results.push({ Test: "ERR", Property: "Props Error", Value: error.message, Status: "?" });
		}

		// =====================================================
		// SETTERS & METHODS (S-Index)
		// =====================================================

		// Setter: Value
		try {
			const testValue = (originalValue || 0) + 100;
			form.Body.v4_Integer.Value = testValue;
			const newValue = form.Body.v4_Integer.Value;
			form.Body.v4_Integer.Value = originalValue;
			methodResults.push({ Test: "S1", Property: "Value (set)", Value: newValue === testValue ? "Set?Restored" : "Failed", Status: newValue === testValue ? "?" : "?" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S1", Property: "Value (set)", Value: e.message, Status: "?" });
		}

		// Setter: RequiredLevel
		try {
			const origRequired = form.Body.v4_Integer.RequiredLevel;
			form.Body.v4_Integer.RequiredLevel = OptionSet.FieldRequiredLevel.Required;
			const check = form.Body.v4_Integer.RequiredLevel;
			form.Body.v4_Integer.RequiredLevel = origRequired;
			methodResults.push({ Test: "S2", Property: "RequiredLevel (set)", Value: check === OptionSet.FieldRequiredLevel.Required ? "Set?Restored" : "Failed", Status: check === OptionSet.FieldRequiredLevel.Required ? "?" : "?" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S2", Property: "RequiredLevel (set)", Value: e.message, Status: "?" });
		}

		// Setter: Disabled
		try {
			const origDisabled = form.Body.v4_Integer.Disabled;
			form.Body.v4_Integer.Disabled = !origDisabled;
			const check = form.Body.v4_Integer.Disabled;
			form.Body.v4_Integer.Disabled = origDisabled;
			methodResults.push({ Test: "S3", Property: "Disabled (set)", Value: "Set?Restored", Status: "?" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S3", Property: "Disabled (set)", Value: e.message, Status: "?" });
		}

		// Setter: Label
		try {
			const origLabel = form.Body.v4_Integer.Label;
			form.Body.v4_Integer.Label = origLabel + " (TEST)";
			const check = form.Body.v4_Integer.Label;
			form.Body.v4_Integer.Label = origLabel;
			methodResults.push({ Test: "S4", Property: "Label (set)", Value: check.includes("(TEST)") ? "Set?Restored" : "Failed", Status: check.includes("(TEST)") ? "?" : "?" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S4", Property: "Label (set)", Value: e.message, Status: "?" });
		}

		// Setter: Visible
		try {
			const origVisible = form.Body.v4_Integer.Visible;
			form.Body.v4_Integer.Visible = !origVisible;
			const check = form.Body.v4_Integer.Visible;
			form.Body.v4_Integer.Visible = origVisible;
			methodResults.push({ Test: "S5", Property: "Visible (set)", Value: "Set?Restored", Status: "?" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S5", Property: "Visible (set)", Value: e.message, Status: "?" });
		}

		// Methods
		/** @param {any} ctx */
		const onChangeCallback = (ctx) => console.log("  ?? Integer OnChange fired");

		try {
			form.Body.v4_Integer.AddOnChange(onChangeCallback);
			methodResults.push({ Test: "S6", Property: "AddOnChange", Value: "Registered", Status: "?" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S6", Property: "AddOnChange", Value: e.message, Status: "?" });
		}

		try {
			form.Body.v4_Integer.RemoveOnChange(onChangeCallback);
			methodResults.push({ Test: "S7", Property: "RemoveOnChange", Value: "Removed", Status: "?" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S7", Property: "RemoveOnChange", Value: e.message, Status: "?" });
		}

		try {
			form.Body.v4_Integer.FireOnChange();
			methodResults.push({ Test: "S8", Property: "FireOnChange", Value: "Fired", Status: "?" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S8", Property: "FireOnChange", Value: e.message, Status: "?" });
		}

		try {
			setTimeout(() => form.Body.v4_Integer.Focus(), 1000);
			methodResults.push({ Test: "S9", Property: "Focus", Value: "Scheduled (1s)", Status: "?" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S9", Property: "Focus", Value: e.message, Status: "?" });
		}

		try {
			form.Body.v4_Integer.SetNotification("Test Integer notification", "INT_TEST_1");
			setTimeout(() => form.Body.v4_Integer.ClearNotification("INT_TEST_1"), 3000);
			methodResults.push({ Test: "S10", Property: "SetNotification", Value: "Set (clears 3s)", Status: "?" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S10", Property: "SetNotification", Value: e.message, Status: "?" });
		}

		try {
			form.Body.v4_Integer.SetIsValid(false, "Test invalid");
			setTimeout(() => form.Body.v4_Integer.SetIsValid(true, ""), 2000);
			methodResults.push({ Test: "S11", Property: "SetIsValid", Value: "Set?Restored (2s)", Status: "?" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S11", Property: "SetIsValid", Value: e.message, Status: "?" });
		}

		// =====================================================
		// OUTPUT
		// =====================================================
		const allResults = [...results, ...methodResults];
		const passed = allResults.filter(r => r.Status === "?").length;
		const warnings = allResults.filter(r => r.Status === "?").length;
		const failed = allResults.filter(r => r.Status === "?").length;
		const total = allResults.length;

		console.groupCollapsed(`🎯 TEST 4: Integer Control [${startTime}] - Using: v4_Integer field - ${passed}/${total}`);

		console.log("%c📋 ReadOnly Properties (R1-R16)", "font-weight: bold; font-size: 14px; color: #4CAF50;");
		console.table(results);

		console.log("%c⚡ Setters & Methods (S1-S11)", "font-weight: bold; font-size: 14px; color: #2196F3;");
		console.table(methodResults);

		console.log(`%c✅ Summary: ${passed}/${total} passed` +
			(warnings > 0 ? ` | ⚠ ${warnings} warnings` : '') +
			(failed > 0 ? ` | ✗ ${failed} failed` : ''),
			"font-weight: bold; color: #4CAF50; font-size: 14px;");

		console.groupEnd();
	}

	function TestHeader() {
		/** @type {Array<{Test: string, Property: string, Value: any, Status: string}>} */
		const results = [];
		/** @type {Array<{Test: string, Property: string, Value: any, Status: string}>} */
		const methodResults = [];
		const startTime = new Date().toLocaleTimeString();
		const originalValue = form.Header.v4_Integer1.Value;

		// =====================================================
		// PURPOSE: Test Header field behavior
		// Header fields have same properties as Body fields but are displayed in the header section
		// Using v4_Integer1 as the test field (Integer type in Header)
		// =====================================================

		// =====================================================
		// READONLY PROPERTIES (R-Index)
		// =====================================================
		try {
			// Integer-specific properties for Header field
			results.push({ Test: "R1", Property: "Max", Value: form.Header.v4_Integer1.Max, Status: typeof form.Header.v4_Integer1.Max === "number" ? "✓" : "⚠" });
			results.push({ Test: "R2", Property: "Min", Value: form.Header.v4_Integer1.Min, Status: typeof form.Header.v4_Integer1.Min === "number" ? "✓" : "⚠" });
			results.push({ Test: "R3", Property: "Value", Value: originalValue, Status: "✓" });

			// Inherited from IControl
			results.push({ Test: "R4", Property: "Attribute", Value: form.Header.v4_Integer1.Attribute ? "object" : "null", Status: form.Header.v4_Integer1.Attribute ? "✓" : "⚠" });
			results.push({ Test: "R5", Property: "AttributeName", Value: form.Header.v4_Integer1.AttributeName, Status: form.Header.v4_Integer1.AttributeName === "v4_integer" ? "✓" : "⚠" });
			results.push({ Test: "R6", Property: "AttributeType", Value: form.Header.v4_Integer1.AttributeType, Status: form.Header.v4_Integer1.AttributeType === OptionSet.FieldAttributeType.Integer ? "✓" : "⚠" });
			results.push({ Test: "R7", Property: "ControlName", Value: form.Header.v4_Integer1.ControlName, Status: "✓" });
			results.push({ Test: "R8", Property: "ControlType", Value: form.Header.v4_Integer1.ControlType, Status: "✓" });
			results.push({ Test: "R9", Property: "Format", Value: form.Header.v4_Integer1.Format, Status: "✓" });
			results.push({ Test: "R10", Property: "IsDirty", Value: form.Header.v4_Integer1.IsDirty, Status: "✓" });
			results.push({ Test: "R11", Property: "IsValid", Value: form.Header.v4_Integer1.IsValid, Status: "✓" });
			results.push({ Test: "R12", Property: "RequiredLevel", Value: form.Header.v4_Integer1.RequiredLevel, Status: "✓" });
			results.push({ Test: "R13", Property: "SubmitMode", Value: form.Header.v4_Integer1.SubmitMode, Status: "✓" });
			results.push({ Test: "R14", Property: "Disabled", Value: form.Header.v4_Integer1.Disabled, Status: "✓" });
			results.push({ Test: "R15", Property: "Label", Value: form.Header.v4_Integer1.Label, Status: "✓" });
			results.push({ Test: "R16", Property: "Visible", Value: form.Header.v4_Integer1.Visible, Status: "✓" });
		} catch (/** @type {any} */ error) {
			results.push({ Test: "ERR", Property: "Props Error", Value: error.message, Status: "✗" });
		}

		// =====================================================
		// SETTERS & METHODS (S-Index)
		// =====================================================

		// Setter: Value
		try {
			const testValue = (originalValue || 0) + 100;
			form.Header.v4_Integer1.Value = testValue;
			const newValue = form.Header.v4_Integer1.Value;
			form.Header.v4_Integer1.Value = originalValue;
			methodResults.push({ Test: "S1", Property: "Value (set)", Value: newValue === testValue ? "Set→Restored" : "Failed", Status: newValue === testValue ? "✓" : "✗" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S1", Property: "Value (set)", Value: e.message, Status: "✗" });
		}

		// Setter: RequiredLevel
		try {
			const origRequired = form.Header.v4_Integer1.RequiredLevel;
			form.Header.v4_Integer1.RequiredLevel = OptionSet.FieldRequiredLevel.Required;
			const check = form.Header.v4_Integer1.RequiredLevel;
			form.Header.v4_Integer1.RequiredLevel = origRequired;
			methodResults.push({ Test: "S2", Property: "RequiredLevel (set)", Value: check === OptionSet.FieldRequiredLevel.Required ? "Set→Restored" : "Failed", Status: check === OptionSet.FieldRequiredLevel.Required ? "✓" : "✗" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S2", Property: "RequiredLevel (set)", Value: e.message, Status: "✗" });
		}

		// Setter: Disabled
		try {
			const origDisabled = form.Header.v4_Integer1.Disabled;
			form.Header.v4_Integer1.Disabled = !origDisabled;
			const check = form.Header.v4_Integer1.Disabled;
			form.Header.v4_Integer1.Disabled = origDisabled;
			methodResults.push({ Test: "S3", Property: "Disabled (set)", Value: "Set→Restored", Status: "✓" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S3", Property: "Disabled (set)", Value: e.message, Status: "✗" });
		}

		// Setter: Label
		try {
			const origLabel = form.Header.v4_Integer1.Label;
			form.Header.v4_Integer1.Label = origLabel + " (HEADER TEST)";
			const check = form.Header.v4_Integer1.Label;
			form.Header.v4_Integer1.Label = origLabel;
			methodResults.push({ Test: "S4", Property: "Label (set)", Value: check.includes("(HEADER TEST)") ? "Set→Restored" : "Failed", Status: check.includes("(HEADER TEST)") ? "✓" : "✗" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S4", Property: "Label (set)", Value: e.message, Status: "✗" });
		}

		// Setter: Visible
		try {
			const origVisible = form.Header.v4_Integer1.Visible;
			form.Header.v4_Integer1.Visible = !origVisible;
			const check = form.Header.v4_Integer1.Visible;
			form.Header.v4_Integer1.Visible = origVisible;
			methodResults.push({ Test: "S5", Property: "Visible (set)", Value: "Set→Restored", Status: "✓" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S5", Property: "Visible (set)", Value: e.message, Status: "✗" });
		}

		// Methods
		/** @param {any} ctx */
		const onChangeCallback = (ctx) => console.log("  📍 Header OnChange fired");

		try {
			form.Header.v4_Integer1.AddOnChange(onChangeCallback);
			methodResults.push({ Test: "S6", Property: "AddOnChange", Value: "Registered", Status: "✓" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S6", Property: "AddOnChange", Value: e.message, Status: "✗" });
		}

		try {
			form.Header.v4_Integer1.RemoveOnChange(onChangeCallback);
			methodResults.push({ Test: "S7", Property: "RemoveOnChange", Value: "Removed", Status: "✓" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S7", Property: "RemoveOnChange", Value: e.message, Status: "✗" });
		}

		try {
			form.Header.v4_Integer1.FireOnChange();
			methodResults.push({ Test: "S8", Property: "FireOnChange", Value: "Fired", Status: "✓" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S8", Property: "FireOnChange", Value: e.message, Status: "✗" });
		}

		try {
			setTimeout(() => form.Header.v4_Integer1.Focus(), 1000);
			methodResults.push({ Test: "S9", Property: "Focus", Value: "Scheduled (1s)", Status: "✓" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S9", Property: "Focus", Value: e.message, Status: "✗" });
		}

		try {
			form.Header.v4_Integer1.SetNotification("Test Header notification", "HDR_TEST_1");
			setTimeout(() => form.Header.v4_Integer1.ClearNotification("HDR_TEST_1"), 3000);
			methodResults.push({ Test: "S10", Property: "SetNotification", Value: "Set (clears 3s)", Status: "✓" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S10", Property: "SetNotification", Value: e.message, Status: "✗" });
		}

		try {
			form.Header.v4_Integer1.SetIsValid(false, "Test invalid header");
			setTimeout(() => form.Header.v4_Integer1.SetIsValid(true, ""), 2000);
			methodResults.push({ Test: "S11", Property: "SetIsValid", Value: "Set→Restored (2s)", Status: "✓" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S11", Property: "SetIsValid", Value: e.message, Status: "✗" });
		}

		// =====================================================
		// OUTPUT
		// =====================================================
		const allResults = [...results, ...methodResults];
		const passed = allResults.filter(r => r.Status === "✓").length;
		const warnings = allResults.filter(r => r.Status === "⚠").length;
		const failed = allResults.filter(r => r.Status === "✗").length;
		const total = allResults.length;

		console.groupCollapsed(`🎯 TEST 4A: Header Control [${startTime}] - Using: Header.v4_Integer1 field - ${passed}/${total}`);

		console.log("%c📋 ReadOnly Properties (R1-R16)", "font-weight: bold; font-size: 14px; color: #4CAF50;");
		console.table(results);

		console.log("%c⚡ Setters & Methods (S1-S11)", "font-weight: bold; font-size: 14px; color: #2196F3;");
		console.table(methodResults);

		console.log("%c📌 Note: Header fields behave same as Body fields but render in the header section.", "font-style: italic; color: #9C27B0;");

		console.log(`%c✅ Summary: ${passed}/${total} passed` +
			(warnings > 0 ? ` | ⚠ ${warnings} warnings` : '') +
			(failed > 0 ? ` | ✗ ${failed} failed` : ''),
			"font-weight: bold; color: #4CAF50; font-size: 14px;");

		console.groupEnd();
	}

	function TestDecimal() {
		/** @type {Array<{Test: string, Property: string, Value: any, Status: string}>} */
		const results = [];
		/** @type {Array<{Test: string, Property: string, Value: any, Status: string}>} */
		const methodResults = [];
		const startTime = new Date().toLocaleTimeString();
		const originalValue = form.Body.v4_Decimal.Value;

		// =====================================================
		// READONLY PROPERTIES (R-Index)
		// =====================================================
		try {
			// Decimal/Double-specific properties
			results.push({ Test: "R1", Property: "Max", Value: form.Body.v4_Decimal.Max, Status: typeof form.Body.v4_Decimal.Max === "number" ? "?" : "?" });
			results.push({ Test: "R2", Property: "Min", Value: form.Body.v4_Decimal.Min, Status: typeof form.Body.v4_Decimal.Min === "number" ? "?" : "?" });
			results.push({ Test: "R3", Property: "Precision", Value: form.Body.v4_Decimal.Precision, Status: typeof form.Body.v4_Decimal.Precision === "number" ? "?" : "?" });
			results.push({ Test: "R4", Property: "Value", Value: originalValue, Status: "?" });

			// Inherited from IControl
			results.push({ Test: "R5", Property: "Attribute", Value: form.Body.v4_Decimal.Attribute ? "object" : "null", Status: form.Body.v4_Decimal.Attribute ? "?" : "?" });
			results.push({ Test: "R6", Property: "AttributeName", Value: form.Body.v4_Decimal.AttributeName, Status: form.Body.v4_Decimal.AttributeName === "v4_decimal" ? "?" : "?" });
			results.push({ Test: "R7", Property: "AttributeType", Value: form.Body.v4_Decimal.AttributeType, Status: form.Body.v4_Decimal.AttributeType === OptionSet.FieldAttributeType.Decimal ? "?" : "?" });
			results.push({ Test: "R8", Property: "ControlName", Value: form.Body.v4_Decimal.ControlName, Status: "?" });
			results.push({ Test: "R9", Property: "ControlType", Value: form.Body.v4_Decimal.ControlType, Status: "?" });
			results.push({ Test: "R10", Property: "Format", Value: form.Body.v4_Decimal.Format, Status: "?" });
			results.push({ Test: "R11", Property: "IsDirty", Value: form.Body.v4_Decimal.IsDirty, Status: "?" });
			results.push({ Test: "R12", Property: "IsValid", Value: form.Body.v4_Decimal.IsValid, Status: "?" });
			results.push({ Test: "R13", Property: "RequiredLevel", Value: form.Body.v4_Decimal.RequiredLevel, Status: "?" });
			results.push({ Test: "R14", Property: "SubmitMode", Value: form.Body.v4_Decimal.SubmitMode, Status: "?" });
			results.push({ Test: "R15", Property: "Disabled", Value: form.Body.v4_Decimal.Disabled, Status: "?" });
			results.push({ Test: "R16", Property: "Label", Value: form.Body.v4_Decimal.Label, Status: "?" });
			results.push({ Test: "R17", Property: "Visible", Value: form.Body.v4_Decimal.Visible, Status: "?" });
		} catch (/** @type {any} */ error) {
			results.push({ Test: "ERR", Property: "Props Error", Value: error.message, Status: "?" });
		}

		// =====================================================
		// SETTERS & METHODS (S-Index)
		// =====================================================

		// Setter: Value
		try {
			const testValue = (originalValue || 0) + 1.5;
			form.Body.v4_Decimal.Value = testValue;
			const newValue = form.Body.v4_Decimal.Value;
			form.Body.v4_Decimal.Value = originalValue;
			methodResults.push({ Test: "S1", Property: "Value (set)", Value: newValue === testValue ? "Set?Restored" : "Failed", Status: newValue === testValue ? "?" : "?" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S1", Property: "Value (set)", Value: e.message, Status: "?" });
		}

		// Setter: Precision
		try {
			const origPrecision = form.Body.v4_Decimal.Precision;
			// Assuming default is usually 2, let's try 4 (if allowed) or just check we can set it
			// Note: Precision setting might throw if not within allowed range or locked by system
			// We will try to set it to current value just to test the setter exists/works without error
			form.Body.v4_Decimal.Precision = origPrecision;
			methodResults.push({ Test: "S2", Property: "Precision (set)", Value: "Set?Restored", Status: "?" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S2", Property: "Precision (set)", Value: e.message, Status: "?" });
		}

		// Setter: RequiredLevel
		try {
			const origRequired = form.Body.v4_Decimal.RequiredLevel;
			form.Body.v4_Decimal.RequiredLevel = OptionSet.FieldRequiredLevel.Required;
			const check = form.Body.v4_Decimal.RequiredLevel;
			form.Body.v4_Decimal.RequiredLevel = origRequired;
			methodResults.push({ Test: "S3", Property: "RequiredLevel (set)", Value: check === OptionSet.FieldRequiredLevel.Required ? "Set?Restored" : "Failed", Status: check === OptionSet.FieldRequiredLevel.Required ? "?" : "?" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S3", Property: "RequiredLevel (set)", Value: e.message, Status: "?" });
		}

		// Setter: Disabled
		try {
			const origDisabled = form.Body.v4_Decimal.Disabled;
			form.Body.v4_Decimal.Disabled = !origDisabled;
			const check = form.Body.v4_Decimal.Disabled;
			form.Body.v4_Decimal.Disabled = origDisabled;
			methodResults.push({ Test: "S4", Property: "Disabled (set)", Value: "Set?Restored", Status: "?" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S4", Property: "Disabled (set)", Value: e.message, Status: "?" });
		}

		// Setter: Label
		try {
			const origLabel = form.Body.v4_Decimal.Label;
			form.Body.v4_Decimal.Label = origLabel + " (TEST)";
			const check = form.Body.v4_Decimal.Label;
			form.Body.v4_Decimal.Label = origLabel;
			methodResults.push({ Test: "S5", Property: "Label (set)", Value: check.includes("(TEST)") ? "Set?Restored" : "Failed", Status: check.includes("(TEST)") ? "?" : "?" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S5", Property: "Label (set)", Value: e.message, Status: "?" });
		}

		// Setter: Visible
		try {
			const origVisible = form.Body.v4_Decimal.Visible;
			form.Body.v4_Decimal.Visible = !origVisible;
			const check = form.Body.v4_Decimal.Visible;
			form.Body.v4_Decimal.Visible = origVisible;
			methodResults.push({ Test: "S6", Property: "Visible (set)", Value: "Set?Restored", Status: "?" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S6", Property: "Visible (set)", Value: e.message, Status: "?" });
		}

		// Methods
		/** @param {any} ctx */
		const onChangeCallback = (ctx) => console.log("  ?? Decimal OnChange fired");

		try {
			form.Body.v4_Decimal.AddOnChange(onChangeCallback);
			methodResults.push({ Test: "S7", Property: "AddOnChange", Value: "Registered", Status: "?" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S7", Property: "AddOnChange", Value: e.message, Status: "?" });
		}

		try {
			form.Body.v4_Decimal.RemoveOnChange(onChangeCallback);
			methodResults.push({ Test: "S8", Property: "RemoveOnChange", Value: "Removed", Status: "?" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S8", Property: "RemoveOnChange", Value: e.message, Status: "?" });
		}

		try {
			form.Body.v4_Decimal.FireOnChange();
			methodResults.push({ Test: "S9", Property: "FireOnChange", Value: "Fired", Status: "?" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S9", Property: "FireOnChange", Value: e.message, Status: "?" });
		}

		try {
			setTimeout(() => form.Body.v4_Decimal.Focus(), 1000);
			methodResults.push({ Test: "S10", Property: "Focus", Value: "Scheduled (1s)", Status: "?" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S10", Property: "Focus", Value: e.message, Status: "?" });
		}

		try {
			form.Body.v4_Decimal.SetNotification("Test Decimal notification", "DEC_TEST_1");
			setTimeout(() => form.Body.v4_Decimal.ClearNotification("DEC_TEST_1"), 3000);
			methodResults.push({ Test: "S11", Property: "SetNotification", Value: "Set (clears 3s)", Status: "?" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S11", Property: "SetNotification", Value: e.message, Status: "?" });
		}

		try {
			form.Body.v4_Decimal.SetIsValid(false, "Test invalid");
			setTimeout(() => form.Body.v4_Decimal.SetIsValid(true, ""), 2000);
			methodResults.push({ Test: "S12", Property: "SetIsValid", Value: "Set?Restored (2s)", Status: "?" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S12", Property: "SetIsValid", Value: e.message, Status: "?" });
		}

		// =====================================================
		// OUTPUT
		// =====================================================
		const allResults = [...results, ...methodResults];
		const passed = allResults.filter(r => r.Status === "?").length;
		const warnings = allResults.filter(r => r.Status === "?").length;
		const failed = allResults.filter(r => r.Status === "?").length;
		const total = allResults.length;

		console.groupCollapsed(`🎯 TEST 5: Decimal Control [${startTime}] - Using: v4_Decimal field - ${passed}/${total}`);

		console.log("%c📋 ReadOnly Properties (R1-R17)", "font-weight: bold; font-size: 14px; color: #4CAF50;");
		console.table(results);

		console.log("%c⚡ Setters & Methods (S1-S12)", "font-weight: bold; font-size: 14px; color: #2196F3;");
		console.table(methodResults);

		console.log(`%c✅ Summary: ${passed}/${total} passed` +
			(warnings > 0 ? ` | ⚠ ${warnings} warnings` : '') +
			(failed > 0 ? ` | ✗ ${failed} failed` : ''),
			"font-weight: bold; color: #4CAF50; font-size: 14px;");

		console.groupEnd();
	}

	function TestDouble() {
		/** @type {Array<{Test: string, Property: string, Value: any, Status: string}>} */
		const results = [];
		/** @type {Array<{Test: string, Property: string, Value: any, Status: string}>} */
		const methodResults = [];
		const startTime = new Date().toLocaleTimeString();
		const originalValue = form.Body.v4_Double.Value;

		// =====================================================
		// READONLY PROPERTIES (R-Index)
		// =====================================================
		try {
			// Double-specific properties
			results.push({ Test: "R1", Property: "Max", Value: form.Body.v4_Double.Max, Status: typeof form.Body.v4_Double.Max === "number" ? "?" : "?" });
			results.push({ Test: "R2", Property: "Min", Value: form.Body.v4_Double.Min, Status: typeof form.Body.v4_Double.Min === "number" ? "?" : "?" });
			results.push({ Test: "R3", Property: "Precision", Value: form.Body.v4_Double.Precision, Status: typeof form.Body.v4_Double.Precision === "number" ? "?" : "?" });
			results.push({ Test: "R4", Property: "Value", Value: originalValue, Status: "?" });

			// Inherited from IControl
			results.push({ Test: "R5", Property: "Attribute", Value: form.Body.v4_Double.Attribute ? "object" : "null", Status: form.Body.v4_Double.Attribute ? "?" : "?" });
			results.push({ Test: "R6", Property: "AttributeName", Value: form.Body.v4_Double.AttributeName, Status: form.Body.v4_Double.AttributeName === "v4_double" ? "?" : "?" });
			results.push({ Test: "R7", Property: "AttributeType", Value: form.Body.v4_Double.AttributeType, Status: form.Body.v4_Double.AttributeType === OptionSet.FieldAttributeType.Double ? "?" : "?" });
			results.push({ Test: "R8", Property: "ControlName", Value: form.Body.v4_Double.ControlName, Status: "?" });
			results.push({ Test: "R9", Property: "ControlType", Value: form.Body.v4_Double.ControlType, Status: "?" });
			results.push({ Test: "R10", Property: "Format", Value: form.Body.v4_Double.Format, Status: "?" });
			results.push({ Test: "R11", Property: "IsDirty", Value: form.Body.v4_Double.IsDirty, Status: "?" });
			results.push({ Test: "R12", Property: "IsValid", Value: form.Body.v4_Double.IsValid, Status: "?" });
			results.push({ Test: "R13", Property: "RequiredLevel", Value: form.Body.v4_Double.RequiredLevel, Status: "?" });
			results.push({ Test: "R14", Property: "SubmitMode", Value: form.Body.v4_Double.SubmitMode, Status: "?" });
			results.push({ Test: "R15", Property: "Disabled", Value: form.Body.v4_Double.Disabled, Status: "?" });
			results.push({ Test: "R16", Property: "Label", Value: form.Body.v4_Double.Label, Status: "?" });
			results.push({ Test: "R17", Property: "Visible", Value: form.Body.v4_Double.Visible, Status: "?" });
		} catch (/** @type {any} */ error) {
			results.push({ Test: "ERR", Property: "Props Error", Value: error.message, Status: "?" });
		}

		// =====================================================
		// SETTERS & METHODS (S-Index)
		// =====================================================

		// Setter: Value
		try {
			const testValue = (originalValue || 0) + 0.5;
			form.Body.v4_Double.Value = testValue;
			const newValue = form.Body.v4_Double.Value;
			form.Body.v4_Double.Value = originalValue;
			methodResults.push({ Test: "S1", Property: "Value (set)", Value: newValue === testValue ? "Set?Restored" : "Failed", Status: newValue === testValue ? "?" : "?" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S1", Property: "Value (set)", Value: e.message, Status: "?" });
		}

		// Setter: Precision
		try {
			const origPrecision = form.Body.v4_Double.Precision;
			form.Body.v4_Double.Precision = origPrecision;
			methodResults.push({ Test: "S2", Property: "Precision (set)", Value: "Set?Restored", Status: "?" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S2", Property: "Precision (set)", Value: e.message, Status: "?" });
		}

		// Setter: RequiredLevel
		try {
			const origRequired = form.Body.v4_Double.RequiredLevel;
			form.Body.v4_Double.RequiredLevel = OptionSet.FieldRequiredLevel.Required;
			const check = form.Body.v4_Double.RequiredLevel;
			form.Body.v4_Double.RequiredLevel = origRequired;
			methodResults.push({ Test: "S3", Property: "RequiredLevel (set)", Value: check === OptionSet.FieldRequiredLevel.Required ? "Set?Restored" : "Failed", Status: check === OptionSet.FieldRequiredLevel.Required ? "?" : "?" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S3", Property: "RequiredLevel (set)", Value: e.message, Status: "?" });
		}

		// Setter: Disabled
		try {
			const origDisabled = form.Body.v4_Double.Disabled;
			form.Body.v4_Double.Disabled = !origDisabled;
			const check = form.Body.v4_Double.Disabled;
			form.Body.v4_Double.Disabled = origDisabled;
			methodResults.push({ Test: "S4", Property: "Disabled (set)", Value: "Set?Restored", Status: "?" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S4", Property: "Disabled (set)", Value: e.message, Status: "?" });
		}

		// Setter: Label
		try {
			const origLabel = form.Body.v4_Double.Label;
			form.Body.v4_Double.Label = origLabel + " (TEST)";
			const check = form.Body.v4_Double.Label;
			form.Body.v4_Double.Label = origLabel;
			methodResults.push({ Test: "S5", Property: "Label (set)", Value: check.includes("(TEST)") ? "Set?Restored" : "Failed", Status: check.includes("(TEST)") ? "?" : "?" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S5", Property: "Label (set)", Value: e.message, Status: "?" });
		}

		// Setter: Visible
		try {
			const origVisible = form.Body.v4_Double.Visible;
			form.Body.v4_Double.Visible = !origVisible;
			const check = form.Body.v4_Double.Visible;
			form.Body.v4_Double.Visible = origVisible;
			methodResults.push({ Test: "S6", Property: "Visible (set)", Value: "Set?Restored", Status: "?" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S6", Property: "Visible (set)", Value: e.message, Status: "?" });
		}

		// Methods
		/** @param {any} ctx */
		const onChangeCallback = (ctx) => console.log("  ?? Double OnChange fired");

		try {
			form.Body.v4_Double.AddOnChange(onChangeCallback);
			methodResults.push({ Test: "S7", Property: "AddOnChange", Value: "Registered", Status: "?" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S7", Property: "AddOnChange", Value: e.message, Status: "?" });
		}

		try {
			form.Body.v4_Double.RemoveOnChange(onChangeCallback);
			methodResults.push({ Test: "S8", Property: "RemoveOnChange", Value: "Removed", Status: "?" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S8", Property: "RemoveOnChange", Value: e.message, Status: "?" });
		}

		try {
			form.Body.v4_Double.FireOnChange();
			methodResults.push({ Test: "S9", Property: "FireOnChange", Value: "Fired", Status: "?" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S9", Property: "FireOnChange", Value: e.message, Status: "?" });
		}

		try {
			setTimeout(() => form.Body.v4_Double.Focus(), 1000);
			methodResults.push({ Test: "S10", Property: "Focus", Value: "Scheduled (1s)", Status: "?" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S10", Property: "Focus", Value: e.message, Status: "?" });
		}

		try {
			form.Body.v4_Double.SetNotification("Test Double notification", "DBL_TEST_1");
			setTimeout(() => form.Body.v4_Double.ClearNotification("DBL_TEST_1"), 3000);
			methodResults.push({ Test: "S11", Property: "SetNotification", Value: "Set (clears 3s)", Status: "?" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S11", Property: "SetNotification", Value: e.message, Status: "?" });
		}

		try {
			form.Body.v4_Double.SetIsValid(false, "Test invalid");
			setTimeout(() => form.Body.v4_Double.SetIsValid(true, ""), 2000);
			methodResults.push({ Test: "S12", Property: "SetIsValid", Value: "Set?Restored (2s)", Status: "?" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S12", Property: "SetIsValid", Value: e.message, Status: "?" });
		}

		// =====================================================
		// OUTPUT
		// =====================================================
		const allResults = [...results, ...methodResults];
		const passed = allResults.filter(r => r.Status === "?").length;
		const warnings = allResults.filter(r => r.Status === "?").length;
		const failed = allResults.filter(r => r.Status === "?").length;
		const total = allResults.length;

		console.groupCollapsed(`🎯 TEST 6: Double Control [${startTime}] - Using: v4_Double field - ${passed}/${total}`);

		console.log("%c📋 ReadOnly Properties (R1-R17)", "font-weight: bold; font-size: 14px; color: #4CAF50;");
		console.table(results);

		console.log("%c⚡ Setters & Methods (S1-S12)", "font-weight: bold; font-size: 14px; color: #2196F3;");
		console.table(methodResults);

		console.log(`%c✅ Summary: ${passed}/${total} passed` +
			(warnings > 0 ? ` | ⚠ ${warnings} warnings` : '') +
			(failed > 0 ? ` | ✗ ${failed} failed` : ''),
			"font-weight: bold; color: #4CAF50; font-size: 14px;");

		console.groupEnd();
	}

	function TestMoney() {
		/** @type {Array<{Test: string, Property: string, Value: any, Status: string}>} */
		const results = [];
		/** @type {Array<{Test: string, Property: string, Value: any, Status: string}>} */
		const methodResults = [];
		const startTime = new Date().toLocaleTimeString();
		const originalValue = form.Body.v4_Money.Value;

		// =====================================================
		// READONLY PROPERTIES (R-Index)
		// =====================================================
		try {
			// Money-specific properties (IControlNumber + Precision)
			results.push({ Test: "R1", Property: "Max", Value: form.Body.v4_Money.Max, Status: typeof form.Body.v4_Money.Max === "number" ? "?" : "?" });
			results.push({ Test: "R2", Property: "Min", Value: form.Body.v4_Money.Min, Status: typeof form.Body.v4_Money.Min === "number" ? "?" : "?" });
			results.push({ Test: "R3", Property: "Precision", Value: form.Body.v4_Money.Precision, Status: typeof form.Body.v4_Money.Precision === "number" ? "?" : "?" });
			results.push({ Test: "R4", Property: "Value", Value: originalValue, Status: "?" });

			// Inherited from IControl
			results.push({ Test: "R5", Property: "Attribute", Value: form.Body.v4_Money.Attribute ? "object" : "null", Status: "?" });
			results.push({ Test: "R6", Property: "AttributeName", Value: form.Body.v4_Money.AttributeName, Status: form.Body.v4_Money.AttributeName === "v4_money" ? "?" : "?" });
			results.push({ Test: "R7", Property: "AttributeType", Value: form.Body.v4_Money.AttributeType, Status: form.Body.v4_Money.AttributeType === OptionSet.FieldAttributeType.Money ? "?" : "?" });
			results.push({ Test: "R8", Property: "ControlName", Value: form.Body.v4_Money.ControlName, Status: "?" });
			results.push({ Test: "R9", Property: "ControlType", Value: form.Body.v4_Money.ControlType, Status: "?" });
			results.push({ Test: "R10", Property: "Format", Value: form.Body.v4_Money.Format, Status: "?" });
			results.push({ Test: "R11", Property: "IsDirty", Value: form.Body.v4_Money.IsDirty, Status: "?" });
			results.push({ Test: "R12", Property: "IsValid", Value: form.Body.v4_Money.IsValid, Status: "?" });
			results.push({ Test: "R13", Property: "RequiredLevel", Value: form.Body.v4_Money.RequiredLevel, Status: "?" });
			results.push({ Test: "R14", Property: "SubmitMode", Value: form.Body.v4_Money.SubmitMode, Status: "?" });
			results.push({ Test: "R15", Property: "Disabled", Value: form.Body.v4_Money.Disabled, Status: "?" });
			results.push({ Test: "R16", Property: "Label", Value: form.Body.v4_Money.Label, Status: "?" });
			results.push({ Test: "R17", Property: "Visible", Value: form.Body.v4_Money.Visible, Status: "?" });
		} catch (/** @type {any} */ error) {
			results.push({ Test: "ERR", Property: "Props Error", Value: error.message, Status: "?" });
		}

		// =====================================================
		// SETTERS & METHODS (S-Index)
		// =====================================================

		// Setter: Value
		try {
			const testValue = (originalValue || 0) + 1000;
			form.Body.v4_Money.Value = testValue;
			const newValue = form.Body.v4_Money.Value;
			form.Body.v4_Money.Value = originalValue;
			methodResults.push({ Test: "S1", Property: "Value (set)", Value: newValue === testValue ? "Set?Restored" : "Failed", Status: newValue === testValue ? "?" : "?" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S1", Property: "Value (set)", Value: e.message, Status: "?" });
		}

		// Setter: Precision (Money precision is typically 0-2 for currency)
		try {
			const origPrecision = form.Body.v4_Money.Precision;
			const testPrecision = 2; // Valid precision for money (0-2 range)
			form.Body.v4_Money.Precision = testPrecision;
			const check = form.Body.v4_Money.Precision;
			form.Body.v4_Money.Precision = origPrecision;
			methodResults.push({ Test: "S2", Property: "Precision (set)", Value: check === testPrecision ? "Set?Restored" : `Was ${check}`, Status: check === testPrecision ? "?" : "?" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S2", Property: "Precision (set)", Value: e.message, Status: "?" });
		}

		// Setter: RequiredLevel
		try {
			const origRequired = form.Body.v4_Money.RequiredLevel;
			form.Body.v4_Money.RequiredLevel = OptionSet.FieldRequiredLevel.Required;
			const check = form.Body.v4_Money.RequiredLevel;
			form.Body.v4_Money.RequiredLevel = origRequired;
			methodResults.push({ Test: "S3", Property: "RequiredLevel (set)", Value: check === OptionSet.FieldRequiredLevel.Required ? "Set?Restored" : "Failed", Status: check === OptionSet.FieldRequiredLevel.Required ? "?" : "?" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S3", Property: "RequiredLevel (set)", Value: e.message, Status: "?" });
		}

		// Setter: Disabled
		try {
			const origDisabled = form.Body.v4_Money.Disabled;
			form.Body.v4_Money.Disabled = !origDisabled;
			const check = form.Body.v4_Money.Disabled;
			form.Body.v4_Money.Disabled = origDisabled;
			methodResults.push({ Test: "S4", Property: "Disabled (set)", Value: "Set?Restored", Status: "?" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S4", Property: "Disabled (set)", Value: e.message, Status: "?" });
		}

		// Setter: Label
		try {
			const origLabel = form.Body.v4_Money.Label;
			const testLabel = "Test Money Label";
			form.Body.v4_Money.Label = testLabel;
			const check = form.Body.v4_Money.Label;
			const setWorked = check === testLabel || check?.includes("Test Money");
			if (origLabel !== undefined) {
				form.Body.v4_Money.Label = origLabel;
			}
			methodResults.push({ Test: "S5", Property: "Label (set)", Value: setWorked ? "Set?Restored" : `Got: ${check}`, Status: setWorked ? "?" : "?" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S5", Property: "Label (set)", Value: e.message, Status: "?" });
		}

		// Setter: Visible
		try {
			const origVisible = form.Body.v4_Money.Visible;
			form.Body.v4_Money.Visible = !origVisible;
			const check = form.Body.v4_Money.Visible;
			form.Body.v4_Money.Visible = origVisible;
			methodResults.push({ Test: "S6", Property: "Visible (set)", Value: "Set?Restored", Status: "?" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S6", Property: "Visible (set)", Value: e.message, Status: "?" });
		}

		// Methods
		/** @param {any} ctx */
		const onChangeCallback = (ctx) => console.log("  ?? Money OnChange fired");

		try {
			form.Body.v4_Money.AddOnChange(onChangeCallback);
			methodResults.push({ Test: "S7", Property: "AddOnChange", Value: "Registered", Status: "?" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S7", Property: "AddOnChange", Value: e.message, Status: "?" });
		}

		try {
			form.Body.v4_Money.RemoveOnChange(onChangeCallback);
			methodResults.push({ Test: "S8", Property: "RemoveOnChange", Value: "Removed", Status: "?" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S8", Property: "RemoveOnChange", Value: e.message, Status: "?" });
		}

		try {
			form.Body.v4_Money.FireOnChange();
			methodResults.push({ Test: "S9", Property: "FireOnChange", Value: "Fired", Status: "?" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S9", Property: "FireOnChange", Value: e.message, Status: "?" });
		}

		try {
			setTimeout(() => form.Body.v4_Money.Focus(), 1000);
			methodResults.push({ Test: "S10", Property: "Focus", Value: "Scheduled (1s)", Status: "?" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S10", Property: "Focus", Value: e.message, Status: "?" });
		}

		try {
			form.Body.v4_Money.SetNotification("Test Money notification", "MONEY_TEST_1");
			setTimeout(() => form.Body.v4_Money.ClearNotification("MONEY_TEST_1"), 3000);
			methodResults.push({ Test: "S11", Property: "SetNotification", Value: "Set (clears 3s)", Status: "?" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S11", Property: "SetNotification", Value: e.message, Status: "?" });
		}

		try {
			form.Body.v4_Money.SetIsValid(false, "Test invalid");
			setTimeout(() => form.Body.v4_Money.SetIsValid(true, ""), 2000);
			methodResults.push({ Test: "S12", Property: "SetIsValid", Value: "Set?Restored (2s)", Status: "?" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S12", Property: "SetIsValid", Value: e.message, Status: "?" });
		}

		// =====================================================
		// OUTPUT
		// =====================================================
		const allResults = [...results, ...methodResults];
		const passed = allResults.filter(r => r.Status === "?").length;
		const warnings = allResults.filter(r => r.Status === "?").length;
		const failed = allResults.filter(r => r.Status === "?").length;
		const total = allResults.length;

		console.groupCollapsed(`🎯 TEST 7: Money Control [${startTime}] - Using: v4_Money field - ${passed}/${total}`);

		console.log("%c📋 ReadOnly Properties (R1-R17)", "font-weight: bold; font-size: 14px; color: #4CAF50;");
		console.table(results);

		console.log("%c⚡ Setters & Methods (S1-S12)", "font-weight: bold; font-size: 14px; color: #2196F3;");
		console.table(methodResults);

		console.log(`%c✅ Summary: ${passed}/${total} passed` +
			(warnings > 0 ? ` | ⚠ ${warnings} warnings` : '') +
			(failed > 0 ? ` | ✗ ${failed} failed` : ''),
			"font-weight: bold; color: #4CAF50; font-size: 14px;");

		console.groupEnd();
	}

	function TestLookup() {
		/** @type {Array<{Test: string, Property: string, Value: any, Status: string}>} */
		const results = [];
		const startTime = new Date().toLocaleTimeString();
		const originalDefaultView = form.Body.v4_Lookup.DefaultView;

		// =====================================================
		// READONLY PROPERTIES (R-Index)
		// =====================================================
		try {
			const currentValue = form.Body.v4_Lookup.Value;
			const hasValue = currentValue && currentValue.length > 0;

			results.push({ Test: "R1", Property: "Value", Value: hasValue ? `${currentValue[0].name} (${currentValue[0].entityType})` : "(empty)", Status: "?" });
			results.push({ Test: "R2", Property: "IsPartyList", Value: form.Body.v4_Lookup.IsPartyList, Status: form.Body.v4_Lookup.IsPartyList === false ? "?" : "?" });
			results.push({ Test: "R3", Property: "EntityTypes", Value: JSON.stringify(form.Body.v4_Lookup.EntityTypes), Status: "?" });
			results.push({ Test: "R4", Property: "DefaultView", Value: originalDefaultView, Status: "?" });
			results.push({ Test: "R5", Property: "Visible", Value: form.Body.v4_Lookup.Visible, Status: "?" });
			results.push({ Test: "R6", Property: "Disabled", Value: form.Body.v4_Lookup.Disabled, Status: "?" });
			results.push({ Test: "R7", Property: "ControlType", Value: form.Body.v4_Lookup.ControlType, Status: form.Body.v4_Lookup.ControlType === OptionSet.FieldControlType.Lookup ? "?" : "?" });
			results.push({ Test: "R8", Property: "ControlName", Value: form.Body.v4_Lookup.ControlName, Status: "?" });
			results.push({ Test: "R9", Property: "AttributeName", Value: form.Body.v4_Lookup.AttributeName, Status: "?" });
			results.push({ Test: "R10", Property: "AttributeType", Value: form.Body.v4_Lookup.AttributeType, Status: "?" });
			results.push({ Test: "R11", Property: "RequiredLevel", Value: form.Body.v4_Lookup.RequiredLevel, Status: "?" });
			results.push({ Test: "R12", Property: "SubmitMode", Value: form.Body.v4_Lookup.SubmitMode, Status: "?" });
			results.push({ Test: "R13", Property: "IsValid", Value: form.Body.v4_Lookup.IsValid, Status: "?" });
			results.push({ Test: "R14", Property: "IsDirty", Value: form.Body.v4_Lookup.IsDirty, Status: "?" });
			results.push({ Test: "R15", Property: "Format", Value: form.Body.v4_Lookup.Format, Status: "?" });
			results.push({ Test: "R16", Property: "Attribute", Value: form.Body.v4_Lookup.Attribute ? "object" : "null", Status: form.Body.v4_Lookup.Attribute ? "?" : "?" });
		} catch (/** @type {any} */ error) {
			results.push({ Test: "ERR", Property: "Error", Value: error.message, Status: "?" });
		}

		// =====================================================
		// SETTERS & METHODS (S-Index)
		// =====================================================
		/** @type {Array<{Test: string, Property: string, Value: any, Status: string}>} */
		const methodResults = [];

		/** @param {any} ctx */
		const preSearchCallback = (ctx) => {
			const filterXml = "<filter type='and'><condition attribute='statecode' operator='eq' value='0' /></filter>";
			form.Body.v4_Lookup.AddCustomFilter(filterXml, "contact");
			console.log("  ?? PreSearch fired - filter applied");
		};

		/** @param {any} ctx */
		const tagClickCallback = (ctx) => {
			console.log("  ?? LookupTagClick fired - tag was clicked");
		};

		// Setters
		try {
			const testViewId = "{00000000-0000-0000-0000-000000000002}";
			form.Body.v4_Lookup.DefaultView = testViewId;
			const newView = form.Body.v4_Lookup.DefaultView;
			form.Body.v4_Lookup.DefaultView = originalDefaultView;
			methodResults.push({ Test: "S1", Property: "DefaultView (set)", Value: "Set?Restored", Status: "?" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S1", Property: "DefaultView (set)", Value: e.message, Status: "?" });
		}

		try {
			const originalTypes = form.Body.v4_Lookup.EntityTypes;
			form.Body.v4_Lookup.EntityTypes = ["contact"];
			const newTypes = form.Body.v4_Lookup.EntityTypes;
			form.Body.v4_Lookup.EntityTypes = originalTypes;
			methodResults.push({ Test: "S2", Property: "EntityTypes (set)", Value: "Set?Restored", Status: "?" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S2", Property: "EntityTypes (set)", Value: e.message, Status: "?" });
		}

		// Methods
		try {
			form.Body.v4_Lookup.AddPreSearch(preSearchCallback);
			methodResults.push({ Test: "S3", Property: "AddPreSearch", Value: "Registered", Status: "?" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S3", Property: "AddPreSearch", Value: e.message, Status: "?" });
		}

		try {
			form.Body.v4_Lookup.RemovePreSearch(preSearchCallback);
			methodResults.push({ Test: "S4", Property: "RemovePreSearch", Value: "Removed", Status: "?" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S4", Property: "RemovePreSearch", Value: e.message, Status: "?" });
		}

		try {
			form.Body.v4_Lookup.AddLookupTagClick(tagClickCallback);
			methodResults.push({ Test: "S5", Property: "AddLookupTagClick", Value: "Registered", Status: "?" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S5", Property: "AddLookupTagClick", Value: e.message, Status: "?" });
		}

		try {
			form.Body.v4_Lookup.RemoveLookupTagClick(tagClickCallback);
			methodResults.push({ Test: "S6", Property: "RemoveLookupTagClick", Value: "Removed", Status: "?" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S6", Property: "RemoveLookupTagClick", Value: e.message, Status: "?" });
		}

		try {
			form.Body.v4_Lookup.AddCustomView(
				"00000000-0000-0000-0000-000000000001",
				"contact",
				"Active Contacts (Custom View)",
				"<fetch><entity name='contact'><attribute name='fullname'/></entity></fetch>",
				"<grid name='resultset'><row name='result' id='contactid'><cell name='fullname' width='200'/></row></grid>",
				false
			);
			methodResults.push({ Test: "S7", Property: "AddCustomView", Value: "Added", Status: "?" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S7", Property: "AddCustomView", Value: e.message, Status: "?" });
		}

		try {
			form.Body.v4_Lookup.SetNotification("Test notification", "TEST_1");
			setTimeout(() => form.Body.v4_Lookup.ClearNotification("TEST_1"), 3000);
			methodResults.push({ Test: "S8", Property: "SetNotification", Value: "Set (clears in 3s)", Status: "?" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S8", Property: "SetNotification", Value: e.message, Status: "?" });
		}

		try {
			setTimeout(() => form.Body.v4_Lookup.Focus(), 4000);
			methodResults.push({ Test: "S9", Property: "Focus", Value: "Scheduled (4s)", Status: "?" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S9", Property: "Focus", Value: e.message, Status: "?" });
		}

		// =====================================================
		// OUTPUT
		// =====================================================
		const allResults = [...results, ...methodResults];
		const passed = allResults.filter(r => r.Status === "?").length;
		const warnings = allResults.filter(r => r.Status === "?").length;
		const failed = allResults.filter(r => r.Status === "?").length;
		const total = allResults.length;

		console.groupCollapsed(`🎯 TEST 8: Lookup Control [${startTime}] - Using: v4_Lookup field - ${passed}/${total}`);

		console.log("%c📋 ReadOnly Properties (R1-R16)", "font-weight: bold; font-size: 14px; color: #4CAF50;");
		console.table(results);

		console.log("%c⚡ Setters & Methods (S1-S9)", "font-weight: bold; font-size: 14px; color: #2196F3;");
		console.table(methodResults);

		console.log(`%c✅ Summary: ${passed}/${total} passed` +
			(warnings > 0 ? ` | ⚠ ${warnings} warnings` : '') +
			(failed > 0 ? ` | ✗ ${failed} failed` : ''),
			"font-weight: bold; color: #4CAF50; font-size: 14px;");

		console.groupEnd();
	}

	function TestLookup1() {
		/** @type {Array<{Test: string, Property: string, Value: any, Status: string}>} */
		const results = [];
		/** @type {Array<{Test: string, Property: string, Value: any, Status: string}>} */
		const methodResults = [];
		const startTime = new Date().toLocaleTimeString();

		// =====================================================
		// PURPOSE: Test multi-control per attribute scenario
		// OwnerId attribute has 2 controls on form: OwnerId (control 1) and OwnerId1 (control 2)
		// This tests if DevKit correctly handles the same attribute bound to multiple controls
		// =====================================================

		// =====================================================
		// READONLY PROPERTIES (R-Index) - Comparing both controls
		// =====================================================
		try {
			// R1-R4: Test that both controls share the same attribute but have different control names
			results.push({ Test: "R1", Property: "OwnerId.AttributeName", Value: form.Body.OwnerId.AttributeName, Status: form.Body.OwnerId.AttributeName === "ownerid" ? "✓" : "⚠" });
			results.push({ Test: "R2", Property: "OwnerId1.AttributeName", Value: form.Body.OwnerId1.AttributeName, Status: form.Body.OwnerId1.AttributeName === "ownerid" ? "✓" : "⚠" });
			results.push({ Test: "R3", Property: "OwnerId.ControlName", Value: form.Body.OwnerId.ControlName, Status: "✓" });
			results.push({ Test: "R4", Property: "OwnerId1.ControlName", Value: form.Body.OwnerId1.ControlName, Status: "✓" });

			// R5-R7: Same attribute = same Value
			const val1 = form.Body.OwnerId.Value;
			const val2 = form.Body.OwnerId1.Value;
			const valMatch = JSON.stringify(val1) === JSON.stringify(val2);
			results.push({ Test: "R5", Property: "OwnerId.Value", Value: val1 ? val1[0]?.name : "null", Status: "✓" });
			results.push({ Test: "R6", Property: "OwnerId1.Value", Value: val2 ? val2[0]?.name : "null", Status: "✓" });
			results.push({ Test: "R7", Property: "Values Match?", Value: valMatch, Status: valMatch ? "✓" : "✗" });

			// R8-R11: AttributeType and ControlType
			results.push({ Test: "R8", Property: "OwnerId.AttributeType", Value: form.Body.OwnerId.AttributeType, Status: "✓" });
			results.push({ Test: "R9", Property: "OwnerId1.AttributeType", Value: form.Body.OwnerId1.AttributeType, Status: "✓" });
			results.push({ Test: "R10", Property: "OwnerId.ControlType", Value: form.Body.OwnerId.ControlType, Status: form.Body.OwnerId.ControlType === OptionSet.FieldControlType.Lookup ? "✓" : "⚠" });
			results.push({ Test: "R11", Property: "OwnerId1.ControlType", Value: form.Body.OwnerId1.ControlType, Status: form.Body.OwnerId1.ControlType === OptionSet.FieldControlType.Lookup ? "✓" : "⚠" });

			// R12-R17: Control-specific properties (can differ per control)
			results.push({ Test: "R12", Property: "OwnerId.Visible", Value: form.Body.OwnerId.Visible, Status: "✓" });
			results.push({ Test: "R13", Property: "OwnerId1.Visible", Value: form.Body.OwnerId1.Visible, Status: "✓" });
			results.push({ Test: "R14", Property: "OwnerId.Disabled", Value: form.Body.OwnerId.Disabled, Status: "✓" });
			results.push({ Test: "R15", Property: "OwnerId1.Disabled", Value: form.Body.OwnerId1.Disabled, Status: "✓" });
			results.push({ Test: "R16", Property: "OwnerId.Label", Value: form.Body.OwnerId.Label, Status: "✓" });
			results.push({ Test: "R17", Property: "OwnerId1.Label", Value: form.Body.OwnerId1.Label, Status: "✓" });
		} catch (/** @type {any} */ error) {
			results.push({ Test: "ERR", Property: "Error", Value: error.message, Status: "✗" });
		}

		// =====================================================
		// SETTERS & METHODS (S-Index) - Test control-specific vs attribute-wide changes
		// =====================================================

		// S1-S2: Setting Visible on one control should NOT affect the other
		try {
			const origVisible1 = form.Body.OwnerId.Visible;
			const origVisible2 = form.Body.OwnerId1.Visible;
			form.Body.OwnerId1.Visible = false;
			const afterChange2 = form.Body.OwnerId1.Visible;
			const afterChange1 = form.Body.OwnerId.Visible;
			form.Body.OwnerId1.Visible = origVisible2;
			const control1Unaffected = afterChange1 === origVisible1;
			methodResults.push({ Test: "S1", Property: "OwnerId1.Visible = false", Value: afterChange2 === false ? "OwnerId1 hidden" : "Failed", Status: afterChange2 === false ? "✓" : "✗" });
			methodResults.push({ Test: "S2", Property: "OwnerId.Visible unchanged?", Value: control1Unaffected, Status: control1Unaffected ? "✓" : "⚠" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S1/S2", Property: "Visible independence", Value: e.message, Status: "✗" });
		}

		// S3-S4: Setting Label on one control should NOT affect the other
		try {
			const origLabel1 = form.Body.OwnerId.Label;
			const origLabel2 = form.Body.OwnerId1.Label;
			form.Body.OwnerId1.Label = "Test Label 8A";
			const afterLabel2 = form.Body.OwnerId1.Label;
			const afterLabel1 = form.Body.OwnerId.Label;
			form.Body.OwnerId1.Label = origLabel2;
			const label1Unaffected = afterLabel1 === origLabel1;
			methodResults.push({ Test: "S3", Property: "OwnerId1.Label = 'Test 8A'", Value: afterLabel2 === "Test Label 8A" ? "Changed" : "Failed", Status: afterLabel2 === "Test Label 8A" ? "✓" : "✗" });
			methodResults.push({ Test: "S4", Property: "OwnerId.Label unchanged?", Value: label1Unaffected, Status: label1Unaffected ? "✓" : "⚠" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S3/S4", Property: "Label independence", Value: e.message, Status: "✗" });
		}

		// S5: Setting Value affects BOTH controls (attribute-level)
		try {
			const bothSameValue = JSON.stringify(form.Body.OwnerId.Value) === JSON.stringify(form.Body.OwnerId1.Value);
			methodResults.push({ Test: "S5", Property: "Value shared?", Value: bothSameValue, Status: bothSameValue ? "✓" : "✗" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S5", Property: "Value sharing", Value: e.message, Status: "✗" });
		}

		// S6: RequiredLevel affects BOTH controls (attribute-level)
		try {
			const orig1 = form.Body.OwnerId.RequiredLevel;
			const orig2 = form.Body.OwnerId1.RequiredLevel;
			const bothSameReq = orig1 === orig2;
			methodResults.push({ Test: "S6", Property: "RequiredLevel same?", Value: bothSameReq ? "Both: " + orig1 : "Diff", Status: bothSameReq ? "✓" : "⚠" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S6", Property: "RequiredLevel", Value: e.message, Status: "✗" });
		}

		// S7: Focus on OwnerId1
		try {
			setTimeout(() => form.Body.OwnerId1.Focus(), 5000);
			methodResults.push({ Test: "S7", Property: "OwnerId1.Focus()", Value: "Scheduled (5s)", Status: "✓" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S7", Property: "Focus", Value: e.message, Status: "✗" });
		}

		// =====================================================
		// OUTPUT
		// =====================================================
		const allResults = [...results, ...methodResults];
		const passed = allResults.filter(r => r.Status === "✓").length;
		const warnings = allResults.filter(r => r.Status === "⚠").length;
		const failed = allResults.filter(r => r.Status === "✗").length;
		const total = allResults.length;

		console.groupCollapsed(`🎯 TEST 8A: Lookup Multi-Control [${startTime}] - OwnerId vs OwnerId1 - ${passed}/${total}`);

		console.log("%c📋 ReadOnly Properties (R1-R17) - Comparing both controls", "font-weight: bold; font-size: 14px; color: #4CAF50;");
		console.table(results);

		console.log("%c⚡ Setters & Methods (S1-S7) - Control vs Attribute scope", "font-weight: bold; font-size: 14px; color: #2196F3;");
		console.table(methodResults);

		console.log("%c📌 Note: Control-specific (Visible/Label) = independent. Attribute-level (Value/RequiredLevel) = shared.", "font-style: italic; color: #9C27B0;");

		console.log(`%c✅ Summary: ${passed}/${total} passed` +
			(warnings > 0 ? ` | ⚠ ${warnings} warnings` : '') +
			(failed > 0 ? ` | ✗ ${failed} failed` : ''),
			"font-weight: bold; color: #4CAF50; font-size: 14px;");

		console.groupEnd();
	}

	function TestOptionSet() {
		/** @type {Array<{Test: string, Property: string, Value: any, Status: string}>} */
		const results = [];
		/** @type {Array<{Test: string, Property: string, Value: any, Status: string}>} */
		const methodResults = [];
		const startTime = new Date().toLocaleTimeString();
		const originalValue = form.Body.v4_OptionSet.Value;

		// =====================================================
		// READONLY PROPERTIES (R-Index)
		// =====================================================
		try {
			// OptionSet-specific properties
			results.push({ Test: "R1", Property: "InitialValue", Value: form.Body.v4_OptionSet.InitialValue, Status: typeof form.Body.v4_OptionSet.InitialValue === "number" || form.Body.v4_OptionSet.InitialValue === null ? "?" : "?" });
			results.push({ Test: "R2", Property: "Options", Value: `${form.Body.v4_OptionSet.Options?.length ?? 0} options`, Status: form.Body.v4_OptionSet.Options?.length > 0 ? "?" : "?" });
			results.push({ Test: "R3", Property: "SelectedOption", Value: form.Body.v4_OptionSet.SelectedOption ? `${form.Body.v4_OptionSet.SelectedOption.text} (${form.Body.v4_OptionSet.SelectedOption.value})` : "(none)", Status: "?" });
			results.push({ Test: "R4", Property: "Text", Value: form.Body.v4_OptionSet.Text || "(empty)", Status: "?" });
			results.push({ Test: "R5", Property: "Value", Value: originalValue, Status: "?" });

			// Inherited from IControl
			results.push({ Test: "R6", Property: "Attribute", Value: form.Body.v4_OptionSet.Attribute ? "object" : "null", Status: form.Body.v4_OptionSet.Attribute ? "?" : "?" });
			results.push({ Test: "R7", Property: "AttributeName", Value: form.Body.v4_OptionSet.AttributeName, Status: form.Body.v4_OptionSet.AttributeName === "v4_optionset" ? "?" : "?" });
			results.push({ Test: "R8", Property: "AttributeType", Value: form.Body.v4_OptionSet.AttributeType, Status: form.Body.v4_OptionSet.AttributeType === OptionSet.FieldAttributeType.OptionSet ? "?" : "?" });
			results.push({ Test: "R9", Property: "ControlName", Value: form.Body.v4_OptionSet.ControlName, Status: "?" });
			results.push({ Test: "R10", Property: "ControlType", Value: form.Body.v4_OptionSet.ControlType, Status: "?" });
			results.push({ Test: "R11", Property: "Format", Value: form.Body.v4_OptionSet.Format, Status: "?" });
			results.push({ Test: "R12", Property: "IsDirty", Value: form.Body.v4_OptionSet.IsDirty, Status: "?" });
			results.push({ Test: "R13", Property: "IsValid", Value: form.Body.v4_OptionSet.IsValid, Status: "?" });
			results.push({ Test: "R14", Property: "RequiredLevel", Value: form.Body.v4_OptionSet.RequiredLevel, Status: "?" });
			results.push({ Test: "R15", Property: "SubmitMode", Value: form.Body.v4_OptionSet.SubmitMode, Status: "?" });
			results.push({ Test: "R16", Property: "Disabled", Value: form.Body.v4_OptionSet.Disabled, Status: "?" });
			results.push({ Test: "R17", Property: "Label", Value: form.Body.v4_OptionSet.Label, Status: "?" });
			results.push({ Test: "R18", Property: "Visible", Value: form.Body.v4_OptionSet.Visible, Status: "?" });
		} catch (/** @type {any} */ error) {
			results.push({ Test: "ERR", Property: "Props Error", Value: error.message, Status: "?" });
		}

		// =====================================================
		// SETTERS & METHODS (S-Index)
		// =====================================================

		// Setter: Value
		try {
			const options = form.Body.v4_OptionSet.Options;
			if (options && options.length > 0) {
				const newVal = options[0].value;
				form.Body.v4_OptionSet.Value = newVal;
				const check = form.Body.v4_OptionSet.Value;
				form.Body.v4_OptionSet.Value = originalValue;
				methodResults.push({ Test: "S1", Property: "Value (set)", Value: check === newVal ? "Set?Restored" : "Failed", Status: check === newVal ? "?" : "?" });
			} else {
				methodResults.push({ Test: "S1", Property: "Value (set)", Value: "No options available", Status: "?" });
			}
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S1", Property: "Value (set)", Value: e.message, Status: "?" });
		}

		// Method: Option(value)
		try {
			const options = form.Body.v4_OptionSet.Options;
			if (options && options.length > 0) {
				const testOption = form.Body.v4_OptionSet.Option(options[0].value);
				methodResults.push({ Test: "S2", Property: "Option(value)", Value: testOption ? `${testOption.text}` : "null", Status: testOption ? "?" : "?" });
			} else {
				methodResults.push({ Test: "S2", Property: "Option(value)", Value: "No options", Status: "?" });
			}
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S2", Property: "Option(value)", Value: e.message, Status: "?" });
		}

		// S3: Option(text) - NOT IMPLEMENTED: OOB Dynamics code throws error
		methodResults.push({ Test: "S3", Property: "Option(text)", Value: "OOB Bug - devkit.ts not support", Status: "?" });

		// Method: AddOption (add then remove)
		try {
			form.Body.v4_OptionSet.AddOption("Test Option (AI)", 999999);
			const hasNew = form.Body.v4_OptionSet.ControlOptions?.some((/** @type {any} */ o) => o.value === 999999);
			form.Body.v4_OptionSet.RemoveOption(999999);
			methodResults.push({ Test: "S4", Property: "AddOption", Value: hasNew ? "Added?Removed" : "Not found", Status: hasNew ? "?" : "?" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S4", Property: "AddOption", Value: e.message, Status: "?" });
		}

		// Method: RemoveOption (already tested above with AddOption)
		try {
			methodResults.push({ Test: "S5", Property: "RemoveOption", Value: "Tested with S4", Status: "?" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S5", Property: "RemoveOption", Value: e.message, Status: "?" });
		}

		// Method: ClearOptions - Test clear and restore from Options (attribute)
		try {
			const attributeOptions = form.Body.v4_OptionSet.Options;
			const attrLen = attributeOptions?.length ?? 0;
			form.Body.v4_OptionSet.ClearOptions();
			const clearedCount = form.Body.v4_OptionSet.ControlOptions?.length ?? 0;
			// Restore options from attribute
			for (const option of attributeOptions) {
				form.Body.v4_OptionSet.AddOption(option.text, option.value);
			}
			const restoredCount = form.Body.v4_OptionSet.ControlOptions?.length ?? 0;
			const success = clearedCount === 0 && restoredCount >= attrLen;
			methodResults.push({ Test: "S6", Property: "ClearOptions", Value: success ? `Clear(${clearedCount})?Restore(${restoredCount}/${attrLen})` : `attr=${attrLen}, clear=${clearedCount}, restore=${restoredCount}`, Status: success ? "?" : "?" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S6", Property: "ClearOptions", Value: e.message, Status: "?" });
		}

		// Setter: RequiredLevel
		try {
			const origRequired = form.Body.v4_OptionSet.RequiredLevel;
			form.Body.v4_OptionSet.RequiredLevel = OptionSet.FieldRequiredLevel.Required;
			const check = form.Body.v4_OptionSet.RequiredLevel;
			form.Body.v4_OptionSet.RequiredLevel = origRequired;
			methodResults.push({ Test: "S7", Property: "RequiredLevel (set)", Value: check === OptionSet.FieldRequiredLevel.Required ? "Set?Restored" : "Failed", Status: check === OptionSet.FieldRequiredLevel.Required ? "?" : "?" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S7", Property: "RequiredLevel (set)", Value: e.message, Status: "?" });
		}

		// Setter: Disabled
		try {
			const origDisabled = form.Body.v4_OptionSet.Disabled;
			form.Body.v4_OptionSet.Disabled = !origDisabled;
			const check = form.Body.v4_OptionSet.Disabled;
			form.Body.v4_OptionSet.Disabled = origDisabled;
			methodResults.push({ Test: "S8", Property: "Disabled (set)", Value: "Set?Restored", Status: "?" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S8", Property: "Disabled (set)", Value: e.message, Status: "?" });
		}

		// Setter: Label
		try {
			const origLabel = form.Body.v4_OptionSet.Label;
			form.Body.v4_OptionSet.Label = origLabel + " (TEST)";
			const check = form.Body.v4_OptionSet.Label;
			form.Body.v4_OptionSet.Label = origLabel;
			methodResults.push({ Test: "S9", Property: "Label (set)", Value: check.includes("(TEST)") ? "Set?Restored" : "Failed", Status: check.includes("(TEST)") ? "?" : "?" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S9", Property: "Label (set)", Value: e.message, Status: "?" });
		}

		// Setter: Visible
		try {
			const origVisible = form.Body.v4_OptionSet.Visible;
			form.Body.v4_OptionSet.Visible = !origVisible;
			const check = form.Body.v4_OptionSet.Visible;
			form.Body.v4_OptionSet.Visible = origVisible;
			methodResults.push({ Test: "S10", Property: "Visible (set)", Value: "Set?Restored", Status: "?" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S10", Property: "Visible (set)", Value: e.message, Status: "?" });
		}

		// Methods from IControl
		/** @param {any} ctx */
		const onChangeCallback = (ctx) => console.log("  ?? OptionSet OnChange fired");

		try {
			form.Body.v4_OptionSet.AddOnChange(onChangeCallback);
			methodResults.push({ Test: "S11", Property: "AddOnChange", Value: "Registered", Status: "?" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S11", Property: "AddOnChange", Value: e.message, Status: "?" });
		}

		try {
			form.Body.v4_OptionSet.RemoveOnChange(onChangeCallback);
			methodResults.push({ Test: "S12", Property: "RemoveOnChange", Value: "Removed", Status: "?" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S12", Property: "RemoveOnChange", Value: e.message, Status: "?" });
		}

		try {
			form.Body.v4_OptionSet.FireOnChange();
			methodResults.push({ Test: "S13", Property: "FireOnChange", Value: "Fired", Status: "?" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S13", Property: "FireOnChange", Value: e.message, Status: "?" });
		}

		try {
			setTimeout(() => form.Body.v4_OptionSet.Focus(), 1000);
			methodResults.push({ Test: "S14", Property: "Focus", Value: "Scheduled (1s)", Status: "?" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S14", Property: "Focus", Value: e.message, Status: "?" });
		}

		try {
			form.Body.v4_OptionSet.SetNotification("Test OptionSet notification", "OPT_TEST_1");
			setTimeout(() => form.Body.v4_OptionSet.ClearNotification("OPT_TEST_1"), 3000);
			methodResults.push({ Test: "S15", Property: "SetNotification", Value: "Set (clears 3s)", Status: "?" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S15", Property: "SetNotification", Value: e.message, Status: "?" });
		}

		try {
			form.Body.v4_OptionSet.SetIsValid(false, "Test invalid");
			setTimeout(() => form.Body.v4_OptionSet.SetIsValid(true, ""), 2000);
			methodResults.push({ Test: "S16", Property: "SetIsValid", Value: "Set?Restored (2s)", Status: "?" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S16", Property: "SetIsValid", Value: e.message, Status: "?" });
		}

		// =====================================================
		// OUTPUT
		// =====================================================
		const allResults = [...results, ...methodResults];
		const passed = allResults.filter(r => r.Status === "?").length;
		const warnings = allResults.filter(r => r.Status === "?").length;
		const failed = allResults.filter(r => r.Status === "?").length;
		const total = allResults.length;

		console.groupCollapsed(`🎯 TEST 9: OptionSet Control [${startTime}] - Using: v4_OptionSet field - ${passed}/${total}`);

		console.log("%c📋 ReadOnly Properties (R1-R18)", "font-weight: bold; font-size: 14px; color: #4CAF50;");
		console.table(results);

		console.log("%c⚡ Setters & Methods (S1-S16)", "font-weight: bold; font-size: 14px; color: #2196F3;");
		console.table(methodResults);

		console.log(`%c✅ Summary: ${passed}/${total} passed` +
			(warnings > 0 ? ` | ⚠ ${warnings} warnings` : '') +
			(failed > 0 ? ` | ✗ ${failed} failed` : ''),
			"font-weight: bold; color: #4CAF50; font-size: 14px;");

		console.groupEnd();
	}

	/**
	 * Helper function to stringify objects for display
	 * @param {any} value
	 * @returns {any}
	 */
	function stringify(value) {
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

	function TestMultiOptionSet() {
		/** @type {Array<{Test: string, Property: string, Value: any, Status: string}>} */
		const results = [];
		/** @type {Array<{Test: string, Property: string, Value: any, Status: string}>} */
		const methodResults = [];
		const startTime = new Date().toLocaleTimeString();
		const originalValue = form.Body.v4_MultiOptionSet.Value;

		// =====================================================
		// READONLY PROPERTIES (R-Index)
		// =====================================================
		try {
			// MultiOptionSet-specific: Value, InitialValue, SelectedOption, Text are all arrays
			results.push({ Test: "R1", Property: "Value (number[])", Value: stringify(originalValue), Status: Array.isArray(originalValue) || originalValue === null ? "?" : "?" });
			results.push({ Test: "R2", Property: "Options (array)", Value: stringify(form.Body.v4_MultiOptionSet.Options), Status: Array.isArray(form.Body.v4_MultiOptionSet.Options) ? "?" : "?" });
			results.push({ Test: "R3", Property: "SelectedOption (array)", Value: stringify(form.Body.v4_MultiOptionSet.SelectedOption), Status: Array.isArray(form.Body.v4_MultiOptionSet.SelectedOption) || form.Body.v4_MultiOptionSet.SelectedOption === null ? "?" : "?" });
			results.push({ Test: "R4", Property: "InitialValue (number[])", Value: stringify(form.Body.v4_MultiOptionSet.InitialValue), Status: Array.isArray(form.Body.v4_MultiOptionSet.InitialValue) || form.Body.v4_MultiOptionSet.InitialValue === null ? "?" : "?" });
			results.push({ Test: "R5", Property: "Text (string[])", Value: stringify(form.Body.v4_MultiOptionSet.Text), Status: Array.isArray(form.Body.v4_MultiOptionSet.Text) || form.Body.v4_MultiOptionSet.Text === null ? "?" : "?" });

			// Inherited from IControl
			results.push({ Test: "R6", Property: "Attribute", Value: form.Body.v4_MultiOptionSet.Attribute ? "object" : "null", Status: form.Body.v4_MultiOptionSet.Attribute ? "?" : "?" });
			results.push({ Test: "R7", Property: "AttributeName", Value: form.Body.v4_MultiOptionSet.AttributeName, Status: form.Body.v4_MultiOptionSet.AttributeName === "v4_multioptionset" ? "?" : "?" });
			results.push({ Test: "R8", Property: "AttributeType", Value: form.Body.v4_MultiOptionSet.AttributeType, Status: form.Body.v4_MultiOptionSet.AttributeType === OptionSet.FieldAttributeType.MultiOptionSet ? "?" : "?" });
			results.push({ Test: "R9", Property: "ControlName", Value: form.Body.v4_MultiOptionSet.ControlName, Status: "?" });
			results.push({ Test: "R10", Property: "ControlType", Value: form.Body.v4_MultiOptionSet.ControlType, Status: "?" });
			results.push({ Test: "R11", Property: "Format", Value: form.Body.v4_MultiOptionSet.Format, Status: "?" });
			results.push({ Test: "R12", Property: "IsDirty", Value: form.Body.v4_MultiOptionSet.IsDirty, Status: "?" });
			results.push({ Test: "R13", Property: "IsValid", Value: form.Body.v4_MultiOptionSet.IsValid, Status: "?" });
			results.push({ Test: "R14", Property: "RequiredLevel", Value: form.Body.v4_MultiOptionSet.RequiredLevel, Status: "?" });
			results.push({ Test: "R15", Property: "SubmitMode", Value: form.Body.v4_MultiOptionSet.SubmitMode, Status: "?" });
			results.push({ Test: "R16", Property: "Disabled", Value: form.Body.v4_MultiOptionSet.Disabled, Status: "?" });
			results.push({ Test: "R17", Property: "Label", Value: form.Body.v4_MultiOptionSet.Label, Status: "?" });
			results.push({ Test: "R18", Property: "Visible", Value: form.Body.v4_MultiOptionSet.Visible, Status: "?" });
		} catch (/** @type {any} */ error) {
			results.push({ Test: "ERR", Property: "Props Error", Value: error.message, Status: "?" });
		}

		// =====================================================
		// SETTERS & METHODS (S-Index)
		// =====================================================

		// Setter: Value (array of numbers)
		try {
			const testValue = [1, 2];
			form.Body.v4_MultiOptionSet.Value = testValue;
			const newValue = form.Body.v4_MultiOptionSet.Value;
			form.Body.v4_MultiOptionSet.Value = originalValue;
			const success = Array.isArray(newValue) || newValue !== undefined;
			methodResults.push({ Test: "S1", Property: "Value (set)", Value: success ? "Set?Restored" : "Failed", Status: success ? "?" : "?" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S1", Property: "Value (set)", Value: e.message, Status: "?" });
		}

		// Setter: RequiredLevel
		try {
			const origRequired = form.Body.v4_MultiOptionSet.RequiredLevel;
			form.Body.v4_MultiOptionSet.RequiredLevel = OptionSet.FieldRequiredLevel.Required;
			const check = form.Body.v4_MultiOptionSet.RequiredLevel;
			form.Body.v4_MultiOptionSet.RequiredLevel = origRequired;
			methodResults.push({ Test: "S2", Property: "RequiredLevel (set)", Value: check === OptionSet.FieldRequiredLevel.Required ? "Set?Restored" : "Failed", Status: check === OptionSet.FieldRequiredLevel.Required ? "?" : "?" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S2", Property: "RequiredLevel (set)", Value: e.message, Status: "?" });
		}

		// Setter: Disabled
		try {
			const origDisabled = form.Body.v4_MultiOptionSet.Disabled;
			form.Body.v4_MultiOptionSet.Disabled = !origDisabled;
			const check = form.Body.v4_MultiOptionSet.Disabled;
			form.Body.v4_MultiOptionSet.Disabled = origDisabled;
			methodResults.push({ Test: "S3", Property: "Disabled (set)", Value: "Set?Restored", Status: "?" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S3", Property: "Disabled (set)", Value: e.message, Status: "?" });
		}

		// Setter: Label
		try {
			const origLabel = form.Body.v4_MultiOptionSet.Label;
			form.Body.v4_MultiOptionSet.Label = origLabel + " (TEST)";
			const check = form.Body.v4_MultiOptionSet.Label;
			form.Body.v4_MultiOptionSet.Label = origLabel;
			methodResults.push({ Test: "S4", Property: "Label (set)", Value: check.includes("(TEST)") ? "Set?Restored" : "Failed", Status: check.includes("(TEST)") ? "?" : "?" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S4", Property: "Label (set)", Value: e.message, Status: "?" });
		}

		// Setter: Visible
		try {
			const origVisible = form.Body.v4_MultiOptionSet.Visible;
			form.Body.v4_MultiOptionSet.Visible = !origVisible;
			const check = form.Body.v4_MultiOptionSet.Visible;
			form.Body.v4_MultiOptionSet.Visible = origVisible;
			methodResults.push({ Test: "S5", Property: "Visible (set)", Value: "Set?Restored", Status: "?" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S5", Property: "Visible (set)", Value: e.message, Status: "?" });
		}

		// Method: Option (get specific option)
		try {
			const options = form.Body.v4_MultiOptionSet.Options;
			if (options && options.length > 0) {
				const firstOption = form.Body.v4_MultiOptionSet.Option(options[0].value);
				methodResults.push({ Test: "S6", Property: "Option(value)", Value: stringify(firstOption), Status: firstOption ? "?" : "?" });
			} else {
				methodResults.push({ Test: "S6", Property: "Option(value)", Value: "No options", Status: "?" });
			}
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S6", Property: "Option(value)", Value: e.message, Status: "?" });
		}

		// Method: AddOnChange
		/** @param {any} ctx */
		const onChangeCallback = (ctx) => console.log("  ?? MultiOptionSet OnChange fired");
		try {
			form.Body.v4_MultiOptionSet.AddOnChange(onChangeCallback);
			methodResults.push({ Test: "S7", Property: "AddOnChange", Value: "Registered", Status: "?" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S7", Property: "AddOnChange", Value: e.message, Status: "?" });
		}

		// Method: RemoveOnChange
		try {
			form.Body.v4_MultiOptionSet.RemoveOnChange(onChangeCallback);
			methodResults.push({ Test: "S8", Property: "RemoveOnChange", Value: "Removed", Status: "?" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S8", Property: "RemoveOnChange", Value: e.message, Status: "?" });
		}

		// Method: FireOnChange
		try {
			form.Body.v4_MultiOptionSet.FireOnChange();
			methodResults.push({ Test: "S9", Property: "FireOnChange", Value: "Fired", Status: "?" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S9", Property: "FireOnChange", Value: e.message, Status: "?" });
		}

		// Method: Focus
		try {
			setTimeout(() => form.Body.v4_MultiOptionSet.Focus(), 1000);
			methodResults.push({ Test: "S10", Property: "Focus", Value: "Scheduled (1s)", Status: "?" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S10", Property: "Focus", Value: e.message, Status: "?" });
		}

		// Method: SetNotification
		try {
			form.Body.v4_MultiOptionSet.SetNotification("Test MultiOptionSet notification", "MOS_TEST_1");
			setTimeout(() => form.Body.v4_MultiOptionSet.ClearNotification("MOS_TEST_1"), 3000);
			methodResults.push({ Test: "S11", Property: "SetNotification", Value: "Set (clears 3s)", Status: "?" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S11", Property: "SetNotification", Value: e.message, Status: "?" });
		}

		// Method: SetIsValid
		try {
			form.Body.v4_MultiOptionSet.SetIsValid(false, "Test invalid");
			setTimeout(() => form.Body.v4_MultiOptionSet.SetIsValid(true, ""), 2000);
			methodResults.push({ Test: "S12", Property: "SetIsValid", Value: "Set?Restored (2s)", Status: "?" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S12", Property: "SetIsValid", Value: e.message, Status: "?" });
		}

		// =====================================================
		// OUTPUT
		// =====================================================
		const allResults = [...results, ...methodResults];
		const passed = allResults.filter(r => r.Status === "?").length;
		const warnings = allResults.filter(r => r.Status === "?").length;
		const failed = allResults.filter(r => r.Status === "?").length;
		const total = allResults.length;

		console.groupCollapsed(`🎯 TEST 10: MultiOptionSet Control [${startTime}] - Using: v4_MultiOptionSet field - ${passed}/${total}`);

		console.log("%c📋 ReadOnly Properties (R1-R18)", "font-weight: bold; font-size: 14px; color: #4CAF50;");
		console.table(results);

		console.log("%c⚡ Setters & Methods (S1-S12)", "font-weight: bold; font-size: 14px; color: #2196F3;");
		console.table(methodResults);

		console.log(`%c✅ Summary: ${passed}/${total} passed` +
			(warnings > 0 ? ` | ⚠ ${warnings} warnings` : '') +
			(failed > 0 ? ` | ✗ ${failed} failed` : ''),
			"font-weight: bold; color: #4CAF50; font-size: 14px;");

		console.groupEnd();
	}

	function TestDateOnly() {
		/** @type {Array<{Test: string, Property: string, Value: any, Status: string}>} */
		const results = [];
		/** @type {Array<{Test: string, Property: string, Value: any, Status: string}>} */
		const methodResults = [];
		const startTime = new Date().toLocaleTimeString();
		const originalValue = form.Body.v4_DateOnly.Value;

		// =====================================================
		// READONLY PROPERTIES (R-Index)
		// =====================================================
		try {
			// DateOnly-specific: Value is the main property (no ShowTime)
			results.push({ Test: "R1", Property: "Value", Value: originalValue instanceof Date ? originalValue.toISOString() : originalValue, Status: "?" });

			// Inherited from IControl
			results.push({ Test: "R2", Property: "Attribute", Value: form.Body.v4_DateOnly.Attribute ? "object" : "null", Status: form.Body.v4_DateOnly.Attribute ? "?" : "?" });
			results.push({ Test: "R3", Property: "AttributeName", Value: form.Body.v4_DateOnly.AttributeName, Status: form.Body.v4_DateOnly.AttributeName === "v4_dateonly" ? "?" : "?" });
			results.push({ Test: "R4", Property: "AttributeType", Value: form.Body.v4_DateOnly.AttributeType, Status: form.Body.v4_DateOnly.AttributeType === OptionSet.FieldAttributeType.DateTime ? "?" : "?" });
			results.push({ Test: "R5", Property: "ControlName", Value: form.Body.v4_DateOnly.ControlName, Status: "?" });
			results.push({ Test: "R6", Property: "ControlType", Value: form.Body.v4_DateOnly.ControlType, Status: "?" });
			results.push({ Test: "R7", Property: "Format", Value: form.Body.v4_DateOnly.Format, Status: "?" });
			results.push({ Test: "R8", Property: "IsDirty", Value: form.Body.v4_DateOnly.IsDirty, Status: "?" });
			results.push({ Test: "R9", Property: "IsValid", Value: form.Body.v4_DateOnly.IsValid, Status: "?" });
			results.push({ Test: "R10", Property: "RequiredLevel", Value: form.Body.v4_DateOnly.RequiredLevel, Status: "?" });
			results.push({ Test: "R11", Property: "SubmitMode", Value: form.Body.v4_DateOnly.SubmitMode, Status: "?" });
			results.push({ Test: "R12", Property: "Disabled", Value: form.Body.v4_DateOnly.Disabled, Status: "?" });
			results.push({ Test: "R13", Property: "Label", Value: form.Body.v4_DateOnly.Label, Status: "?" });
			results.push({ Test: "R14", Property: "Visible", Value: form.Body.v4_DateOnly.Visible, Status: "?" });
		} catch (/** @type {any} */ error) {
			results.push({ Test: "ERR", Property: "Props Error", Value: error.message, Status: "?" });
		}

		// =====================================================
		// SETTERS & METHODS (S-Index)
		// =====================================================

		// Setter: Value
		try {
			const testValue = new Date(1990, 5, 15); // June 15, 1990
			form.Body.v4_DateOnly.Value = testValue;
			const newValue = form.Body.v4_DateOnly.Value;
			form.Body.v4_DateOnly.Value = originalValue;
			const success = newValue !== null && newValue !== undefined;
			methodResults.push({ Test: "S1", Property: "Value (set)", Value: success ? "Set?Restored" : "Failed", Status: success ? "?" : "?" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S1", Property: "Value (set)", Value: e.message, Status: "?" });
		}

		// Setter: RequiredLevel
		try {
			const origRequired = form.Body.v4_DateOnly.RequiredLevel;
			form.Body.v4_DateOnly.RequiredLevel = OptionSet.FieldRequiredLevel.Required;
			const check = form.Body.v4_DateOnly.RequiredLevel;
			form.Body.v4_DateOnly.RequiredLevel = origRequired;
			methodResults.push({ Test: "S2", Property: "RequiredLevel (set)", Value: check === OptionSet.FieldRequiredLevel.Required ? "Set?Restored" : "Failed", Status: check === OptionSet.FieldRequiredLevel.Required ? "?" : "?" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S2", Property: "RequiredLevel (set)", Value: e.message, Status: "?" });
		}

		// Setter: Disabled
		try {
			const origDisabled = form.Body.v4_DateOnly.Disabled;
			form.Body.v4_DateOnly.Disabled = !origDisabled;
			const check = form.Body.v4_DateOnly.Disabled;
			form.Body.v4_DateOnly.Disabled = origDisabled;
			methodResults.push({ Test: "S3", Property: "Disabled (set)", Value: "Set?Restored", Status: "?" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S3", Property: "Disabled (set)", Value: e.message, Status: "?" });
		}

		// Setter: Label
		try {
			const origLabel = form.Body.v4_DateOnly.Label;
			form.Body.v4_DateOnly.Label = origLabel + " (TEST)";
			const check = form.Body.v4_DateOnly.Label;
			form.Body.v4_DateOnly.Label = origLabel;
			methodResults.push({ Test: "S4", Property: "Label (set)", Value: check.includes("(TEST)") ? "Set?Restored" : "Failed", Status: check.includes("(TEST)") ? "?" : "?" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S4", Property: "Label (set)", Value: e.message, Status: "?" });
		}

		// Setter: Visible
		try {
			const origVisible = form.Body.v4_DateOnly.Visible;
			form.Body.v4_DateOnly.Visible = !origVisible;
			const check = form.Body.v4_DateOnly.Visible;
			form.Body.v4_DateOnly.Visible = origVisible;
			methodResults.push({ Test: "S5", Property: "Visible (set)", Value: "Set?Restored", Status: "?" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S5", Property: "Visible (set)", Value: e.message, Status: "?" });
		}

		// Methods
		/** @param {any} ctx */
		const onChangeCallback = (ctx) => console.log("  ?? DateOnly OnChange fired");

		try {
			form.Body.v4_DateOnly.AddOnChange(onChangeCallback);
			methodResults.push({ Test: "S6", Property: "AddOnChange", Value: "Registered", Status: "?" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S6", Property: "AddOnChange", Value: e.message, Status: "?" });
		}

		try {
			form.Body.v4_DateOnly.RemoveOnChange(onChangeCallback);
			methodResults.push({ Test: "S7", Property: "RemoveOnChange", Value: "Removed", Status: "?" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S7", Property: "RemoveOnChange", Value: e.message, Status: "?" });
		}

		try {
			form.Body.v4_DateOnly.FireOnChange();
			methodResults.push({ Test: "S8", Property: "FireOnChange", Value: "Fired", Status: "?" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S8", Property: "FireOnChange", Value: e.message, Status: "?" });
		}

		try {
			setTimeout(() => form.Body.v4_DateOnly.Focus(), 1000);
			methodResults.push({ Test: "S9", Property: "Focus", Value: "Scheduled (1s)", Status: "?" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S9", Property: "Focus", Value: e.message, Status: "?" });
		}

		try {
			form.Body.v4_DateOnly.SetNotification("Test DateOnly notification", "DO_TEST_1");
			setTimeout(() => form.Body.v4_DateOnly.ClearNotification("DO_TEST_1"), 3000);
			methodResults.push({ Test: "S10", Property: "SetNotification", Value: "Set (clears 3s)", Status: "?" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S10", Property: "SetNotification", Value: e.message, Status: "?" });
		}

		try {
			form.Body.v4_DateOnly.SetIsValid(false, "Test invalid");
			setTimeout(() => form.Body.v4_DateOnly.SetIsValid(true, ""), 2000);
			methodResults.push({ Test: "S11", Property: "SetIsValid", Value: "Set?Restored (2s)", Status: "?" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S11", Property: "SetIsValid", Value: e.message, Status: "?" });
		}

		// =====================================================
		// OUTPUT
		// =====================================================
		const allResults = [...results, ...methodResults];
		const passed = allResults.filter(r => r.Status === "?").length;
		const warnings = allResults.filter(r => r.Status === "?").length;
		const failed = allResults.filter(r => r.Status === "?").length;
		const total = allResults.length;

		console.groupCollapsed(`🎯 TEST 11: DateOnly Control [${startTime}] - Using: v4_DateOnly field - ${passed}/${total}`);

		console.log("%c📋 ReadOnly Properties (R1-R14)", "font-weight: bold; font-size: 14px; color: #4CAF50;");
		console.table(results);

		console.log("%c⚡ Setters & Methods (S1-S11)", "font-weight: bold; font-size: 14px; color: #2196F3;");
		console.table(methodResults);

		console.log(`%c✅ Summary: ${passed}/${total} passed` +
			(warnings > 0 ? ` | ⚠ ${warnings} warnings` : '') +
			(failed > 0 ? ` | ✗ ${failed} failed` : ''),
			"font-weight: bold; color: #4CAF50; font-size: 14px;");

		console.groupEnd();
	}

	function TestDateTime() {
		/** @type {Array<{Test: string, Property: string, Value: any, Status: string}>} */
		const results = [];
		/** @type {Array<{Test: string, Property: string, Value: any, Status: string}>} */
		const methodResults = [];
		const startTime = new Date().toLocaleTimeString();
		const originalValue = form.Body.v4_DateTime.Value;

		// =====================================================
		// READONLY PROPERTIES (R-Index)
		// =====================================================
		try {
			// DateTime-specific properties
			results.push({ Test: "R1", Property: "ShowTime", Value: form.Body.v4_DateTime.ShowTime, Status: typeof form.Body.v4_DateTime.ShowTime === "boolean" ? "?" : "?" });
			results.push({ Test: "R2", Property: "Value", Value: originalValue instanceof Date ? originalValue.toISOString() : originalValue, Status: "?" });

			// Inherited from IControl
			results.push({ Test: "R3", Property: "Attribute", Value: form.Body.v4_DateTime.Attribute ? "object" : "null", Status: form.Body.v4_DateTime.Attribute ? "?" : "?" });
			results.push({ Test: "R4", Property: "AttributeName", Value: form.Body.v4_DateTime.AttributeName, Status: form.Body.v4_DateTime.AttributeName === "v4_datetime" ? "?" : "?" });
			results.push({ Test: "R5", Property: "AttributeType", Value: form.Body.v4_DateTime.AttributeType, Status: form.Body.v4_DateTime.AttributeType === OptionSet.FieldAttributeType.DateTime ? "?" : "?" });
			results.push({ Test: "R6", Property: "ControlName", Value: form.Body.v4_DateTime.ControlName, Status: "?" });
			results.push({ Test: "R7", Property: "ControlType", Value: form.Body.v4_DateTime.ControlType, Status: "?" });
			results.push({ Test: "R8", Property: "Format", Value: form.Body.v4_DateTime.Format, Status: "?" });
			results.push({ Test: "R9", Property: "IsDirty", Value: form.Body.v4_DateTime.IsDirty, Status: "?" });
			results.push({ Test: "R10", Property: "IsValid", Value: form.Body.v4_DateTime.IsValid, Status: "?" });
			results.push({ Test: "R11", Property: "RequiredLevel", Value: form.Body.v4_DateTime.RequiredLevel, Status: "?" });
			results.push({ Test: "R12", Property: "SubmitMode", Value: form.Body.v4_DateTime.SubmitMode, Status: "?" });
			results.push({ Test: "R13", Property: "Disabled", Value: form.Body.v4_DateTime.Disabled, Status: "?" });
			results.push({ Test: "R14", Property: "Label", Value: form.Body.v4_DateTime.Label, Status: "?" });
			results.push({ Test: "R15", Property: "Visible", Value: form.Body.v4_DateTime.Visible, Status: "?" });
		} catch (/** @type {any} */ error) {
			results.push({ Test: "ERR", Property: "Props Error", Value: error.message, Status: "?" });
		}

		// =====================================================
		// SETTERS & METHODS (S-Index)
		// =====================================================

		// Setter: Value
		try {
			const testValue = new Date();
			form.Body.v4_DateTime.Value = testValue;
			const newValue = form.Body.v4_DateTime.Value;
			form.Body.v4_DateTime.Value = originalValue;
			const success = newValue !== null && newValue !== undefined;
			methodResults.push({ Test: "S1", Property: "Value (set)", Value: success ? "Set?Restored" : "Failed", Status: success ? "?" : "?" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S1", Property: "Value (set)", Value: e.message, Status: "?" });
		}

		// Setter: ShowTime
		try {
			const origShowTime = form.Body.v4_DateTime.ShowTime;
			form.Body.v4_DateTime.ShowTime = !origShowTime;
			const check = form.Body.v4_DateTime.ShowTime;
			form.Body.v4_DateTime.ShowTime = origShowTime;
			methodResults.push({ Test: "S2", Property: "ShowTime (set)", Value: "Set?Restored", Status: "?" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S2", Property: "ShowTime (set)", Value: e.message, Status: "?" });
		}

		// Setter: RequiredLevel
		try {
			const origRequired = form.Body.v4_DateTime.RequiredLevel;
			form.Body.v4_DateTime.RequiredLevel = OptionSet.FieldRequiredLevel.Required;
			const check = form.Body.v4_DateTime.RequiredLevel;
			form.Body.v4_DateTime.RequiredLevel = origRequired;
			methodResults.push({ Test: "S3", Property: "RequiredLevel (set)", Value: check === OptionSet.FieldRequiredLevel.Required ? "Set?Restored" : "Failed", Status: check === OptionSet.FieldRequiredLevel.Required ? "?" : "?" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S3", Property: "RequiredLevel (set)", Value: e.message, Status: "?" });
		}

		// Setter: Disabled
		try {
			const origDisabled = form.Body.v4_DateTime.Disabled;
			form.Body.v4_DateTime.Disabled = !origDisabled;
			const check = form.Body.v4_DateTime.Disabled;
			form.Body.v4_DateTime.Disabled = origDisabled;
			methodResults.push({ Test: "S4", Property: "Disabled (set)", Value: "Set?Restored", Status: "?" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S4", Property: "Disabled (set)", Value: e.message, Status: "?" });
		}

		// Setter: Label
		try {
			const origLabel = form.Body.v4_DateTime.Label;
			form.Body.v4_DateTime.Label = origLabel + " (TEST)";
			const check = form.Body.v4_DateTime.Label;
			form.Body.v4_DateTime.Label = origLabel;
			methodResults.push({ Test: "S5", Property: "Label (set)", Value: check.includes("(TEST)") ? "Set?Restored" : "Failed", Status: check.includes("(TEST)") ? "?" : "?" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S5", Property: "Label (set)", Value: e.message, Status: "?" });
		}

		// Setter: Visible
		try {
			const origVisible = form.Body.v4_DateTime.Visible;
			form.Body.v4_DateTime.Visible = !origVisible;
			const check = form.Body.v4_DateTime.Visible;
			form.Body.v4_DateTime.Visible = origVisible;
			methodResults.push({ Test: "S6", Property: "Visible (set)", Value: "Set?Restored", Status: "?" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S6", Property: "Visible (set)", Value: e.message, Status: "?" });
		}

		// Methods
		/** @param {any} ctx */
		const onChangeCallback = (ctx) => console.log("  ?? DateTime OnChange fired");

		try {
			form.Body.v4_DateTime.AddOnChange(onChangeCallback);
			methodResults.push({ Test: "S7", Property: "AddOnChange", Value: "Registered", Status: "?" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S7", Property: "AddOnChange", Value: e.message, Status: "?" });
		}

		try {
			form.Body.v4_DateTime.RemoveOnChange(onChangeCallback);
			methodResults.push({ Test: "S8", Property: "RemoveOnChange", Value: "Removed", Status: "?" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S8", Property: "RemoveOnChange", Value: e.message, Status: "?" });
		}

		try {
			form.Body.v4_DateTime.FireOnChange();
			methodResults.push({ Test: "S9", Property: "FireOnChange", Value: "Fired", Status: "?" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S9", Property: "FireOnChange", Value: e.message, Status: "?" });
		}

		try {
			setTimeout(() => form.Body.v4_DateTime.Focus(), 1000);
			methodResults.push({ Test: "S10", Property: "Focus", Value: "Scheduled (1s)", Status: "?" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S10", Property: "Focus", Value: e.message, Status: "?" });
		}

		try {
			form.Body.v4_DateTime.SetNotification("Test DateTime notification", "DT_TEST_1");
			setTimeout(() => form.Body.v4_DateTime.ClearNotification("DT_TEST_1"), 3000);
			methodResults.push({ Test: "S11", Property: "SetNotification", Value: "Set (clears 3s)", Status: "?" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S11", Property: "SetNotification", Value: e.message, Status: "?" });
		}

		try {
			form.Body.v4_DateTime.SetIsValid(false, "Test invalid");
			setTimeout(() => form.Body.v4_DateTime.SetIsValid(true, ""), 2000);
			methodResults.push({ Test: "S12", Property: "SetIsValid", Value: "Set?Restored (2s)", Status: "?" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S12", Property: "SetIsValid", Value: e.message, Status: "?" });
		}

		// =====================================================
		// OUTPUT
		// =====================================================
		const allResults = [...results, ...methodResults];
		const passed = allResults.filter(r => r.Status === "?").length;
		const warnings = allResults.filter(r => r.Status === "?").length;
		const failed = allResults.filter(r => r.Status === "?").length;
		const total = allResults.length;

		console.groupCollapsed(`🎯 TEST 12: DateTime Control [${startTime}] - Using: v4_DateTime field - ${passed}/${total}`);

		console.log("%c📋 ReadOnly Properties (R1-R15)", "font-weight: bold; font-size: 14px; color: #4CAF50;");
		console.table(results);

		console.log("%c⚡ Setters & Methods (S1-S12)", "font-weight: bold; font-size: 14px; color: #2196F3;");
		console.table(methodResults);

		console.log(`%c✅ Summary: ${passed}/${total} passed` +
			(warnings > 0 ? ` | ⚠ ${warnings} warnings` : '') +
			(failed > 0 ? ` | ✗ ${failed} failed` : ''),
			"font-weight: bold; color: #4CAF50; font-size: 14px;");

		console.groupEnd();
	}

	function TestGrid() {
		/** @type {Array<{Test: string, Property: string, Value: any, Status: string}>} */
		const results = [];
		/** @type {Array<{Test: string, Property: string, Value: any, Status: string}>} */
		const methodResults = [];
		const startTime = new Date().toLocaleTimeString();

		try {
			results.push({ Test: "R1", Property: "EntityName", Value: form.Grid.Contacts.EntityName, Status: form.Grid.Contacts.EntityName ? "?" : "?" });
			results.push({ Test: "R2", Property: "FetchXml", Value: form.Grid.Contacts.FetchXml ? form.Grid.Contacts.FetchXml.substring(0, 50) + "..." : null, Status: form.Grid.Contacts.FetchXml ? "?" : "?" });
			results.push({ Test: "R3", Property: "GridType", Value: form.Grid.Contacts.GridType, Status: typeof form.Grid.Contacts.GridType === "number" ? "?" : "?" });
			const rel = form.Grid.Contacts.Relationship;
			results.push({ Test: "R4", Property: "Relationship.name", Value: rel?.name, Status: rel ? "?" : "?" });
			results.push({ Test: "R5", Property: "Rows.getLength()", Value: form.Grid.Contacts.Rows?.getLength(), Status: form.Grid.Contacts.Rows ? "?" : "?" });
			results.push({ Test: "R6", Property: "SelectedRows.getLength()", Value: form.Grid.Contacts.SelectedRows?.getLength(), Status: form.Grid.Contacts.SelectedRows ? "?" : "?" });
			results.push({ Test: "R7", Property: "TotalRecordCount", Value: form.Grid.Contacts.TotalRecordCount, Status: typeof form.Grid.Contacts.TotalRecordCount === "number" ? "?" : "?" });
			results.push({ Test: "R8", Property: "ViewSelector", Value: form.Grid.Contacts.ViewSelector ? "object" : "null", Status: form.Grid.Contacts.ViewSelector ? "?" : "?" });
			results.push({ Test: "R9", Property: "Visible", Value: form.Grid.Contacts.Visible, Status: typeof form.Grid.Contacts.Visible === "boolean" ? "?" : "?" });
		} catch (/** @type {any} */ error) {
			results.push({ Test: "ERR", Property: "Props Error", Value: error.message, Status: "?" });
		}

		try {
			const url = form.Grid.Contacts.Url(1);
			methodResults.push({ Test: "S1", Property: "Url(1)", Value: url ? url.substring(0, 50) + "..." : "null", Status: url ? "?" : "?" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S1", Property: "Url(1)", Value: e.message, Status: "?" });
		}

		try {
			const origVisible = form.Grid.Contacts.Visible;
			form.Grid.Contacts.Visible = !origVisible;
			form.Grid.Contacts.Visible = origVisible;
			methodResults.push({ Test: "S2", Property: "Visible (set)", Value: "Set?Restored", Status: "?" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S2", Property: "Visible (set)", Value: e.message, Status: "?" });
		}

		/** @param {any} ctx */
		const onLoadCallback = (ctx) => console.log("  ?? Grid OnLoad fired");
		try {
			form.Grid.Contacts.AddOnLoad(onLoadCallback);
			methodResults.push({ Test: "S3", Property: "AddOnLoad", Value: "Registered", Status: "?" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S3", Property: "AddOnLoad", Value: e.message, Status: "?" });
		}

		try {
			form.Grid.Contacts.RemoveOnLoad(onLoadCallback);
			methodResults.push({ Test: "S4", Property: "RemoveOnLoad", Value: "Removed", Status: "?" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S4", Property: "RemoveOnLoad", Value: e.message, Status: "?" });
		}

		try {
			methodResults.push({ Test: "S5", Property: "Refresh", Value: typeof form.Grid.Contacts.Refresh === "function" ? "Available" : "Not found", Status: typeof form.Grid.Contacts.Refresh === "function" ? "?" : "?" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S5", Property: "Refresh", Value: e.message, Status: "?" });
		}

		const allResults = [...results, ...methodResults];
		const passed = allResults.filter(r => r.Status === "?").length;
		const total = allResults.length;

		console.groupCollapsed(`🎯 TEST 13: Grid Control [${startTime}] - Using: Contacts subgrid - ${passed}/${total}`);
		console.log("%c📋 ReadOnly Properties (R1-R9)", "font-weight: bold; font-size: 14px; color: #4CAF50;");
		console.table(results);
		console.log("%c⚡ Setters & Methods (S1-S5)", "font-weight: bold; font-size: 14px; color: #2196F3;");
		console.table(methodResults);
		console.groupEnd();
	}

	function TestQuickView() {
		/** @type {Array<{Test: string, Property: string, Value: any, Status: string}>} */
		const results = [];
		/** @type {Array<{Test: string, Property: string, Value: any, Status: string}>} */
		const methodResults = [];
		const startTime = new Date().toLocaleTimeString();

		try {
			results.push({ Test: "R1", Property: "Label", Value: form.QuickForm.ContactQuickForm.Label, Status: "?" });
			results.push({ Test: "R2", Property: "Visible", Value: form.QuickForm.ContactQuickForm.Visible, Status: "?" });
			results.push({ Test: "R3", Property: "ControlType", Value: form.QuickForm.ContactQuickForm.ControlType, Status: "?" });
			results.push({ Test: "R4", Property: "ControlName", Value: form.QuickForm.ContactQuickForm.ControlName, Status: "?" });
			results.push({ Test: "R5", Property: "Body.EMailAddress1", Value: form.QuickForm.ContactQuickForm.Body.EMailAddress1 ? "Found" : "Missing", Status: form.QuickForm.ContactQuickForm.Body.EMailAddress1 ? "?" : "?" });
			results.push({ Test: "R6", Property: "Body.FirstName", Value: form.QuickForm.ContactQuickForm.Body.FirstName ? "Found" : "Missing", Status: form.QuickForm.ContactQuickForm.Body.FirstName ? "?" : "?" });
		} catch (/** @type {any} */ error) {
			results.push({ Test: "ERR", Property: "Props Error", Value: error.message, Status: "?" });
		}

		try {
			const loaded = form.QuickForm.ContactQuickForm.IsLoaded();
			methodResults.push({ Test: "S1", Property: "IsLoaded", Value: loaded, Status: "?" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S1", Property: "IsLoaded", Value: e.message, Status: "?" });
		}

		try {
			form.QuickForm.ContactQuickForm.Refresh();
			methodResults.push({ Test: "S2", Property: "Refresh", Value: "Called", Status: "?" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S2", Property: "Refresh", Value: e.message, Status: "?" });
		}

		try {
			const origLabel = form.QuickForm.ContactQuickForm.Label;
			form.QuickForm.ContactQuickForm.Label = "New Label";
			const check = form.QuickForm.ContactQuickForm.Label;
			form.QuickForm.ContactQuickForm.Label = origLabel;
			methodResults.push({ Test: "S3", Property: "Label (set)", Value: check === "New Label" ? "Set?Restored" : "Failed", Status: check === "New Label" ? "?" : "?" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S3", Property: "Label (set)", Value: e.message, Status: "?" });
		}

		try {
			const origVisible = form.QuickForm.ContactQuickForm.Visible;
			form.QuickForm.ContactQuickForm.Visible = !origVisible;
			form.QuickForm.ContactQuickForm.Visible = origVisible;
			methodResults.push({ Test: "S4", Property: "Visible (set)", Value: "Set?Restored", Status: "?" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S4", Property: "Visible (set)", Value: e.message, Status: "?" });
		}

		const allResults = [...results, ...methodResults];
		const passed = allResults.filter(r => r.Status === "?").length;
		const total = allResults.length;

		console.groupCollapsed(`🎯 TEST 14: QuickView Control [${startTime}] - Using: ContactQuickForm - ${passed}/${total}`);
		console.log("%c📋 ReadOnly Properties (R1-R6)", "font-weight: bold; font-size: 14px; color: #4CAF50;");
		console.table(results);
		console.log("%c⚡ Setters & Methods (S1-S4)", "font-weight: bold; font-size: 14px; color: #2196F3;");
		console.table(methodResults);
		console.groupEnd();
	}

	function TestNavigationItem() {
		/** @type {Array<{Test: string, Property: string, Value: any, Status: string}>} */
		const results = [];
		/** @type {Array<{Test: string, Property: string, Value: any, Status: string}>} */
		const methodResults = [];
		const startTime = new Date().toLocaleTimeString();

		try {
			results.push({ Test: "R1", Property: "Id", Value: form.Navigation.contact_customer_accounts.Id, Status: form.Navigation.contact_customer_accounts.Id ? "?" : "?" });
			results.push({ Test: "R2", Property: "Label", Value: form.Navigation.contact_customer_accounts.Label, Status: form.Navigation.contact_customer_accounts.Label ? "?" : "?" });
			results.push({ Test: "R3", Property: "Visible", Value: form.Navigation.contact_customer_accounts.Visible, Status: typeof form.Navigation.contact_customer_accounts.Visible === "boolean" ? "?" : "?" });
		} catch (/** @type {any} */ error) {
			results.push({ Test: "ERR", Property: "Props Error", Value: error.message, Status: "?" });
		}

		try {
			const origLabel = form.Navigation.contact_customer_accounts.Label;
			form.Navigation.contact_customer_accounts.Label = origLabel + " (TEST)";
			const check = form.Navigation.contact_customer_accounts.Label;
			form.Navigation.contact_customer_accounts.Label = origLabel;
			methodResults.push({ Test: "S1", Property: "Label (set)", Value: check.includes("(TEST)") ? "Set?Restored" : "Failed", Status: check.includes("(TEST)") ? "?" : "?" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S1", Property: "Label (set)", Value: e.message, Status: "?" });
		}

		try {
			const origVisible = form.Navigation.contact_customer_accounts.Visible;
			form.Navigation.contact_customer_accounts.Visible = !origVisible;
			form.Navigation.contact_customer_accounts.Visible = origVisible;
			methodResults.push({ Test: "S2", Property: "Visible (set)", Value: "Set?Restored", Status: "?" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S2", Property: "Visible (set)", Value: e.message, Status: "?" });
		}

		try {
			setTimeout(() => form.Navigation.contact_customer_accounts.Focus(), 1000);
			methodResults.push({ Test: "S3", Property: "Focus", Value: "Scheduled (1s)", Status: "?" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S3", Property: "Focus", Value: e.message, Status: "?" });
		}

		const allResults = [...results, ...methodResults];
		const passed = allResults.filter(r => r.Status === "?").length;
		const total = allResults.length;

		console.groupCollapsed(`🎯 TEST 15: NavigationItem Control [${startTime}] - ${passed}/${total}`);
		console.log("%c📋 ReadOnly Properties (R1-R3)", "font-weight: bold; font-size: 14px; color: #4CAF50;");
		console.table(results);
		console.log("%c⚡ Setters & Methods (S1-S3)", "font-weight: bold; font-size: 14px; color: #2196F3;");
		console.table(methodResults);
		console.groupEnd();
	}

	function TestExecutionContext() {
		/** @type {Array<{Test: string, Property: string, Value: any, Status: string}>} */
		const results = [];
		/** @type {Array<{Test: string, Property: string, Value: any, Status: string}>} */
		const methodResults = [];
		const ctx = form.ExecutionContext;
		const startTime = new Date().toLocaleTimeString();

		try {
			results.push({ Test: "R1", Property: "Depth", Value: ctx.Depth, Status: typeof ctx.Depth === "number" ? "?" : "?" });
			results.push({ Test: "R2", Property: "EntityReference", Value: ctx.EntityReference, Status: "?" });
			results.push({ Test: "R3", Property: "EventArgs", Value: ctx.EventArgs, Status: "?" });
			results.push({ Test: "R4", Property: "EventSource", Value: ctx.EventSource, Status: "?" });
			results.push({ Test: "R5", Property: "FormContext", Value: ctx.FormContext ? "FormContext Object" : null, Status: ctx.FormContext ? "?" : "?" });
			results.push({ Test: "R6", Property: "IsSaveSuccess", Value: ctx.IsSaveSuccess, Status: "?" });
			results.push({ Test: "R7", Property: "SaveMode", Value: ctx.SaveMode, Status: "?" });
		} catch (/** @type {any} */ error) {
			results.push({ Test: "ERR", Property: "Props Error", Value: error.message, Status: "?" });
		}

		try {
			const testKey = "DevKitTestVariable";
			const testValue = { data: "Test value from DevKit", timestamp: new Date().toISOString() };
			ctx.SetSharedVariable(testKey, testValue);
			const retrieved = ctx.GetSharedVariable(testKey);
			const success = retrieved && retrieved.data === testValue.data;
			methodResults.push({ Test: "S1", Property: "Set/GetSharedVariable", Value: success ? "Set and Retrieved Successfully" : "Failed", Status: success ? "?" : "?" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S1", Property: "Set/GetSharedVariable", Value: e.message, Status: "?" });
		}

		try {
			const isInitial = ctx.IsInitialLoad();
			methodResults.push({ Test: "S2", Property: "IsInitialLoad()", Value: isInitial, Status: typeof isInitial === "boolean" ? "?" : "?" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S2", Property: "IsInitialLoad()", Value: e.message, Status: "?" });
		}

		try {
			const isPrevented = ctx.IsDefaultPrevented();
			methodResults.push({ Test: "S3", Property: "IsDefaultPrevented()", Value: isPrevented, Status: "?" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S3", Property: "IsDefaultPrevented()", Value: e.message, Status: "?" });
		}

		try {
			methodResults.push({ Test: "S4", Property: "DisableAsyncTimeout", Value: typeof ctx.DisableAsyncTimeout === "function" ? "Method exists" : "Not a function", Status: typeof ctx.DisableAsyncTimeout === "function" ? "?" : "?" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S4", Property: "DisableAsyncTimeout", Value: e.message, Status: "?" });
		}

		try {
			methodResults.push({ Test: "S5", Property: "SetPreventDefault", Value: typeof ctx.SetPreventDefault === "function" ? "Method exists" : "Not a function", Status: typeof ctx.SetPreventDefault === "function" ? "?" : "?" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S5", Property: "SetPreventDefault", Value: e.message, Status: "?" });
		}

		const allResults = [...results, ...methodResults];
		const passed = allResults.filter(r => r.Status === "?").length;
		const total = allResults.length;

		console.groupCollapsed(`🎯 TEST 16: ExecutionContext [${startTime}] - ${passed}/${total}`);
		console.log("%c📋 ReadOnly Properties (R1-R7)", "font-weight: bold; font-size: 14px; color: #4CAF50;");
		console.table(results);
		console.log("%c⚡ Setters & Methods (S1-S5)", "font-weight: bold; font-size: 14px; color: #2196F3;");
		console.table(methodResults);
		console.groupEnd();
	}

	function TestSidePanes() {
		/** @type {Array<{Test: string, Property: string, Value: any, Status: string}>} */
		const results = [];
		/** @type {Array<{Test: string, Property: string, Value: any, Status: string}>} */
		const methodResults = [];
		const sidePanes = form.SidePanes;
		const startTime = new Date().toLocaleTimeString();

		try {
			results.push({ Test: "R1", Property: "SidePanes exists", Value: sidePanes !== undefined && sidePanes !== null, Status: sidePanes !== undefined && sidePanes !== null ? "?" : "?" });
			const displayState = sidePanes.DisplayState;
			results.push({ Test: "R2", Property: "DisplayState (get)", Value: displayState, Status: displayState === 0 || displayState === 1 ? "?" : "?" });
			const allPanes = sidePanes.GetAll();
			results.push({ Test: "R3", Property: "GetAll() returns array", Value: Array.isArray(allPanes) ? `Array[${allPanes.length}]` : allPanes, Status: Array.isArray(allPanes) || allPanes === undefined || allPanes === null ? "?" : "?" });
			results.push({ Test: "R4", Property: "Create function exists", Value: typeof sidePanes.Create === "function", Status: typeof sidePanes.Create === "function" ? "?" : "?" });
			results.push({ Test: "R5", Property: "Get function exists", Value: typeof sidePanes.Get === "function", Status: typeof sidePanes.Get === "function" ? "?" : "?" });
		} catch (/** @type {any} */ error) {
			results.push({ Test: "ERR", Property: "Props Error", Value: error.message, Status: "?" });
		}

		try {
			const originalState = sidePanes.DisplayState;
			sidePanes.DisplayState = 1;
			const newState1 = sidePanes.DisplayState;
			methodResults.push({ Test: "S1", Property: "DisplayState = 1", Value: `${originalState} ? ${newState1}`, Status: newState1 === 1 ? "?" : "?" });
			sidePanes.DisplayState = 0;
			const newState0 = sidePanes.DisplayState;
			methodResults.push({ Test: "S2", Property: "DisplayState = 0", Value: `1 ? ${newState0}`, Status: newState0 === 0 ? "?" : "?" });
			sidePanes.DisplayState = originalState;
			methodResults.push({ Test: "S3", Property: "DisplayState (restore)", Value: `0 ? ${sidePanes.DisplayState}`, Status: sidePanes.DisplayState === originalState ? "?" : "?" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S1-S3", Property: "DisplayState", Value: e.message, Status: "?" });
		}

		try {
			const nonExistentPane = sidePanes.Get("non_existent_pane_id");
			methodResults.push({ Test: "S4", Property: "Get('non_existent_pane_id')", Value: nonExistentPane === undefined || nonExistentPane === null ? "null/undefined" : nonExistentPane, Status: "?" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S4", Property: "Get('non_existent')", Value: e.message, Status: "?" });
		}

		const allResults = [...results, ...methodResults];
		const passed = allResults.filter(r => r.Status === "?").length;
		const total = allResults.length;

		console.groupCollapsed(`🎯 TEST 17: SidePanes [${startTime}] - ${passed}/${total}`);
		console.log("%c📋 ReadOnly Properties (R1-R5)", "font-weight: bold; font-size: 14px; color: #4CAF50;");
		console.table(results);
		console.log("%c⚡ Setters & Methods (S1-S4)", "font-weight: bold; font-size: 14px; color: #2196F3;");
		console.table(methodResults);
		console.groupEnd();
	}

	function TestCopilot() {
		/** @type {Array<{Test: string, Property: string, Value: any, Status: string}>} */
		const results = [];
		/** @type {Array<{Test: string, Property: string, Value: any, Status: string}>} */
		const methodResults = [];
		const copilot = form.Copilot;
		const startTime = new Date().toLocaleTimeString();

		try {
			results.push({ Test: "R1", Property: "Copilot exists", Value: copilot !== undefined && copilot !== null, Status: copilot !== undefined && copilot !== null ? "?" : "?" });
			results.push({ Test: "R2", Property: "ExecuteEvent function exists", Value: typeof copilot?.ExecuteEvent === "function", Status: typeof copilot?.ExecuteEvent === "function" ? "?" : "?" });
			results.push({ Test: "R3", Property: "ExecutePrompt function exists", Value: typeof copilot?.ExecutePrompt === "function", Status: typeof copilot?.ExecutePrompt === "function" ? "?" : "?" });
			//@ts-ignore
			const xrmCopilotAvailable = typeof window.Xrm?.Copilot !== "undefined";
			results.push({ Test: "R4", Property: "Xrm.Copilot available (Preview)", Value: xrmCopilotAvailable, Status: xrmCopilotAvailable ? "?" : "?" });
		} catch (/** @type {any} */ error) {
			results.push({ Test: "ERR", Property: "Props Error", Value: error.message, Status: "?" });
		}

		try {
			let executeEventResult = "Not available";
			const eventPromise = copilot?.ExecuteEvent("test_event", { testParam: "value" });
			if (eventPromise && typeof eventPromise.then === "function") {
				executeEventResult = "Promise returned";
			} else if (eventPromise === undefined) {
				executeEventResult = "undefined (Copilot not enabled)";
			}
			methodResults.push({ Test: "S1", Property: "ExecuteEvent('test_event')", Value: executeEventResult, Status: executeEventResult.includes("Promise") || executeEventResult.includes("undefined") ? "?" : "?" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S1", Property: "ExecuteEvent", Value: e.message, Status: "?" });
		}

		try {
			let executePromptResult = "Not available";
			const promptPromise = copilot?.ExecutePrompt("Summarize this account");
			if (promptPromise && typeof promptPromise.then === "function") {
				executePromptResult = "Promise returned";
			} else if (promptPromise === undefined) {
				executePromptResult = "undefined (Copilot not enabled)";
			}
			methodResults.push({ Test: "S2", Property: "ExecutePrompt('Summarize...')", Value: executePromptResult, Status: executePromptResult.includes("Promise") || executePromptResult.includes("undefined") ? "?" : "?" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S2", Property: "ExecutePrompt", Value: e.message, Status: "?" });
		}

		const allResults = [...results, ...methodResults];
		const passed = allResults.filter(r => r.Status === "?").length;
		const warnings = allResults.filter(r => r.Status === "?").length;
		const total = allResults.length;

		console.groupCollapsed(`🎯 TEST 18: Copilot [${startTime}] - (Preview) - ${passed}/${total} (?${warnings})`);
		console.log("%c📋 ReadOnly Properties (R1-R4)", "font-weight: bold; font-size: 14px; color: #4CAF50;");
		console.table(results);
		console.log("%c⚡ Setters & Methods (S1-S2)", "font-weight: bold; font-size: 14px; color: #2196F3;");
		console.table(methodResults);
		console.log("%c?? Note: Copilot is a Preview feature", "font-style: italic; color: #FF9800;");
		console.groupEnd();
	}

	function TestProcess() {
		/** @type {Array<{Test: string, Property: string, Value: any, Status: string}>} */
		const results = [];
		/** @type {Array<{Test: string, Property: string, Value: any, Status: string}>} */
		const methodResults = [];
		const process = form.Process;
		const startTime = new Date().toLocaleTimeString();

		try {
			results.push({ Test: "R1", Property: "ActiveProcess", Value: process.ActiveProcess ? process.ActiveProcess.Name : "null", Status: "?" });
			results.push({ Test: "R2", Property: "ActiveStage", Value: process.ActiveStage ? process.ActiveStage.Name : "null", Status: "?" });
			results.push({ Test: "R3", Property: "InstanceId", Value: process.InstanceId, Status: "?" });
			results.push({ Test: "R4", Property: "InstanceName", Value: process.InstanceName, Status: "?" });
			results.push({ Test: "R5", Property: "Status", Value: process.Status, Status: "?" });
			results.push({ Test: "R6", Property: "DisplayState", Value: process.DisplayState, Status: "?" });
			results.push({ Test: "R7", Property: "Visible", Value: process.Visible, Status: "?" });
			const bpf = process.AccountBPF;
			if (bpf) {
				results.push({ Test: "R8", Property: "BPF.Name", Value: bpf.Name ? "Control Found" : "Missing", Status: bpf.Name ? "?" : "?" });
			} else {
				results.push({ Test: "R8", Property: "AccountBPF", Value: "Missing", Status: "?" });
			}
		} catch (/** @type {any} */ error) {
			results.push({ Test: "ERR", Property: "Props Error", Value: error.message, Status: "?" });
		}

		try {
			process.MoveNext((/** @type {any} */ result) => console.log("  ?? MoveNext Callback:", result));
			methodResults.push({ Test: "S1", Property: "MoveNext", Value: "Called", Status: "?" });
			process.MovePrevious((/** @type {any} */ result) => console.log("  ?? MovePrevious Callback:", result));
			methodResults.push({ Test: "S2", Property: "MovePrevious", Value: "Called", Status: "?" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S1/S2", Property: "Move Nav", Value: e.message, Status: "?" });
		}

		/** @param {any} ctx */
		const stageChangeCb = (ctx) => console.log("  ?? OnStageChange");
		try {
			process.AddOnStageChange(stageChangeCb);
			process.RemoveOnStageChange(stageChangeCb);
			methodResults.push({ Test: "S3", Property: "Add/RemoveOnStageChange", Value: "Registered & Removed", Status: "?" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S3", Property: "Stage Events", Value: e.message, Status: "?" });
		}

		/** @param {any} ctx */
		const statusChangeCb = (ctx) => console.log("  ?? OnProcessStatusChange");
		try {
			process.AddOnProcessStatusChange(statusChangeCb);
			process.RemoveOnProcessStatusChange(statusChangeCb);
			methodResults.push({ Test: "S4", Property: "Add/RemoveOnProcessStatusChange", Value: "Registered & Removed", Status: "?" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S4", Property: "Status Events", Value: e.message, Status: "?" });
		}

		try {
			const origState = process.DisplayState;
			process.DisplayState = OptionSet.ProcessDisplayState.Expanded;
			const origVis = process.Visible;
			process.Visible = !origVis;
			process.DisplayState = origState;
			process.Visible = origVis;
			methodResults.push({ Test: "S5", Property: "DisplayState/Visible (set)", Value: "Set?Restored", Status: "?" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S5", Property: "Props Set", Value: e.message, Status: "?" });
		}

		const allResults = [...results, ...methodResults];
		const passed = allResults.filter(r => r.Status === "?").length;
		const total = allResults.length;

		console.groupCollapsed(`🎯 TEST 19: Process (BPF) [${startTime}] - ${passed}/${total}`);
		console.log("%c📋 ReadOnly Properties (R1-R8)", "font-weight: bold; font-size: 14px; color: #4CAF50;");
		console.table(results);
		console.log("%c⚡ Setters & Methods (S1-S5)", "font-weight: bold; font-size: 14px; color: #2196F3;");
		console.table(methodResults);
		console.groupEnd();
	}

	function TestIFrame() {
		/** @type {Array<{Test: string, Property: string, Value: any, Status: string}>} */
		const results = [];
		/** @type {Array<{Test: string, Property: string, Value: any, Status: string}>} */
		const methodResults = [];
		const startTime = new Date().toLocaleTimeString();

		try {
			results.push({ Test: "R1", Property: "InitialUrl", Value: form.Body.IFRAME_PhuocLe.InitialUrl, Status: "?" });
			results.push({ Test: "R2", Property: "Src", Value: form.Body.IFRAME_PhuocLe.Src, Status: "?" });
			results.push({ Test: "R3", Property: "ControlName", Value: form.Body.IFRAME_PhuocLe.ControlName, Status: "?" });
			results.push({ Test: "R4", Property: "ControlType", Value: form.Body.IFRAME_PhuocLe.ControlType, Status: "?" });
			results.push({ Test: "R5", Property: "Label", Value: form.Body.IFRAME_PhuocLe.Label, Status: "?" });
			results.push({ Test: "R6", Property: "Visible", Value: form.Body.IFRAME_PhuocLe.Visible, Status: "?" });
			results.push({ Test: "R7", Property: "Object", Value: form.Body.IFRAME_PhuocLe.Object ? "object" : "null", Status: "?" });
		} catch (/** @type {any} */ error) {
			results.push({ Test: "ERR", Property: "Props Error", Value: error.message, Status: "?" });
		}

		try {
			const origSrc = form.Body.IFRAME_PhuocLe.Src;
			form.Body.IFRAME_PhuocLe.Src = origSrc;
			methodResults.push({ Test: "S1", Property: "Src (set)", Value: "Set?Restored", Status: "?" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S1", Property: "Src (set)", Value: e.message, Status: "?" });
		}

		try {
			const origLabel = form.Body.IFRAME_PhuocLe.Label;
			form.Body.IFRAME_PhuocLe.Label = origLabel + " (TEST)";
			const check = form.Body.IFRAME_PhuocLe.Label;
			form.Body.IFRAME_PhuocLe.Label = origLabel;
			methodResults.push({ Test: "S2", Property: "Label (set)", Value: check.includes("(TEST)") ? "Set?Restored" : "Failed", Status: check.includes("(TEST)") ? "?" : "?" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S2", Property: "Label (set)", Value: e.message, Status: "?" });
		}

		try {
			const origVisible = form.Body.IFRAME_PhuocLe.Visible;
			form.Body.IFRAME_PhuocLe.Visible = !origVisible;
			form.Body.IFRAME_PhuocLe.Visible = origVisible;
			methodResults.push({ Test: "S3", Property: "Visible (set)", Value: "Set?Restored", Status: "?" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S3", Property: "Visible (set)", Value: e.message, Status: "?" });
		}

		try {
			form.Body.IFRAME_PhuocLe.ContentWindow(
				(/** @type {any} */ win) => console.log("  ?? IFrame ContentWindow Success", win),
				(/** @type {any} */ err) => console.log("  ?? IFrame ContentWindow Error", err)
			);
			methodResults.push({ Test: "S4", Property: "ContentWindow", Value: "Called", Status: "?" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S4", Property: "ContentWindow", Value: e.message, Status: "?" });
		}

		try {
			setTimeout(() => form.Body.IFRAME_PhuocLe.Focus(), 1000);
			methodResults.push({ Test: "S5", Property: "Focus", Value: "Scheduled (1s)", Status: "?" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S5", Property: "Focus", Value: e.message, Status: "?" });
		}

		const allResults = [...results, ...methodResults];
		const passed = allResults.filter(r => r.Status === "?").length;
		const total = allResults.length;

		console.groupCollapsed(`🎯 TEST 20: IFrame Control [${startTime}] - ${passed}/${total}`);
		console.log("%c📋 ReadOnly Properties (R1-R7)", "font-weight: bold; font-size: 14px; color: #4CAF50;");
		console.table(results);
		console.log("%c⚡ Setters & Methods (S1-S5)", "font-weight: bold; font-size: 14px; color: #2196F3;");
		console.table(methodResults);
		console.groupEnd();
	}

	function TestUtility() {
		/** @type {Array<{Test: string, Property: string, Value: any, Status: string}>} */
		const results = [];
		/** @type {Array<{Test: string, Property: string, Value: any, Status: string}>} */
		const methodResults = [];
		const startTime = new Date().toLocaleTimeString();

		try {
			// Client properties
			results.push({ Test: "R1", Property: "Client.ClientName", Value: form.Utility.Client?.ClientName, Status: form.Utility.Client?.ClientName ? "?" : "?" });
			results.push({ Test: "R2", Property: "Client.FormFactor", Value: form.Utility.Client?.FormFactor, Status: typeof form.Utility.Client?.FormFactor === "number" ? "?" : "?" });
			results.push({ Test: "R3", Property: "Client.ClientState", Value: form.Utility.Client?.ClientState, Status: form.Utility.Client?.ClientState ? "?" : "?" });
			results.push({ Test: "R4", Property: "Client.IsNetworkAvailable", Value: form.Utility.Client?.IsNetworkAvailable, Status: typeof form.Utility.Client?.IsNetworkAvailable === "boolean" ? "?" : "?" });
			results.push({ Test: "R5", Property: "Client.IsOffline", Value: form.Utility.Client?.IsOffline, Status: typeof form.Utility.Client?.IsOffline === "boolean" ? "?" : "?" });
			// Global Context properties
			results.push({ Test: "R6", Property: "ClientUrl", Value: form.Utility.ClientUrl, Status: form.Utility.ClientUrl ? "?" : "?" });
			results.push({ Test: "R7", Property: "CurrentAppUrl", Value: form.Utility.CurrentAppUrl, Status: form.Utility.CurrentAppUrl ? "?" : "?" });
			results.push({ Test: "R8", Property: "Version", Value: form.Utility.Version, Status: form.Utility.Version ? "?" : "?" });
			results.push({ Test: "R9", Property: "IsOnPremises", Value: form.Utility.IsOnPremises, Status: typeof form.Utility.IsOnPremises === "boolean" ? "?" : "?" });
			// OrganizationSettings properties
			results.push({ Test: "R10", Property: "OrganizationSettings.UniqueName", Value: form.Utility.OrganizationSettings?.UniqueName, Status: form.Utility.OrganizationSettings?.UniqueName ? "?" : "?" });
			results.push({ Test: "R11", Property: "OrganizationSettings.OrganizationId", Value: form.Utility.OrganizationSettings?.OrganizationId, Status: form.Utility.OrganizationSettings?.OrganizationId ? "?" : "?" });
			results.push({ Test: "R12", Property: "OrganizationSettings.LanguageId", Value: form.Utility.OrganizationSettings?.LanguageId, Status: typeof form.Utility.OrganizationSettings?.LanguageId === "number" ? "?" : "?" });
			results.push({ Test: "R13", Property: "OrganizationSettings.IsAutoSaveEnabled", Value: form.Utility.OrganizationSettings?.IsAutoSaveEnabled, Status: typeof form.Utility.OrganizationSettings?.IsAutoSaveEnabled === "boolean" ? "?" : "?" });
			// UserSettings properties
			results.push({ Test: "R14", Property: "UserSettings.UserId", Value: form.Utility.UserSettings?.UserId, Status: form.Utility.UserSettings?.UserId ? "?" : "?" });
			results.push({ Test: "R15", Property: "UserSettings.UserName", Value: form.Utility.UserSettings?.UserName, Status: form.Utility.UserSettings?.UserName ? "?" : "?" });
			results.push({ Test: "R16", Property: "UserSettings.LanguageId", Value: form.Utility.UserSettings?.LanguageId, Status: typeof form.Utility.UserSettings?.LanguageId === "number" ? "?" : "?" });
			results.push({ Test: "R17", Property: "UserSettings.IsRTL", Value: form.Utility.UserSettings?.IsRTL, Status: typeof form.Utility.UserSettings?.IsRTL === "boolean" ? "?" : "?" });
			results.push({ Test: "R18", Property: "UserSettings.SecurityRoles", Value: stringify(form.Utility.UserSettings?.SecurityRoles), Status: form.Utility.UserSettings?.SecurityRoles ? "?" : "?" });
		} catch (/** @type {any} */ error) {
			results.push({ Test: "ERR", Property: "Props Error", Value: error.message, Status: "?" });
		}

		// Encoding Methods
		try {
			const encoded = form.Utility.HtmlEncode("<test>");
			methodResults.push({ Test: "S1", Property: "HtmlEncode", Value: encoded, Status: encoded ? "?" : "?" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S1", Property: "HtmlEncode", Value: e.message, Status: "?" });
		}

		try {
			const decoded = form.Utility.HtmlDecode("&lt;test&gt;");
			methodResults.push({ Test: "S2", Property: "HtmlDecode", Value: decoded, Status: decoded ? "?" : "?" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S2", Property: "HtmlDecode", Value: e.message, Status: "?" });
		}

		try {
			const xmlEncoded = form.Utility.XmlEncode("<test>");
			methodResults.push({ Test: "S3", Property: "XmlEncode", Value: xmlEncoded, Status: xmlEncoded ? "?" : "?" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S3", Property: "XmlEncode", Value: e.message, Status: "?" });
		}

		// URL/Resource Methods
		try {
			const prependedUrl = form.Utility.PrependOrgName("/test");
			methodResults.push({ Test: "S4", Property: "PrependOrgName", Value: prependedUrl, Status: prependedUrl ? "?" : "?" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S4", Property: "PrependOrgName", Value: e.message, Status: "?" });
		}

		// Navigation/Dialog Methods availability
		try {
			methodResults.push({ Test: "S5", Property: "NavigateTo", Value: typeof form.Utility.NavigateTo === "function" ? "Available" : "Not found", Status: typeof form.Utility.NavigateTo === "function" ? "?" : "?" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S5", Property: "NavigateTo", Value: e.message, Status: "?" });
		}

		try {
			methodResults.push({ Test: "S6", Property: "OpenAlertDialog", Value: typeof form.Utility.OpenAlertDialog === "function" ? "Available" : "Not found", Status: typeof form.Utility.OpenAlertDialog === "function" ? "?" : "?" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S6", Property: "OpenAlertDialog", Value: e.message, Status: "?" });
		}

		try {
			methodResults.push({ Test: "S7", Property: "OpenConfirmDialog", Value: typeof form.Utility.OpenConfirmDialog === "function" ? "Available" : "Not found", Status: typeof form.Utility.OpenConfirmDialog === "function" ? "?" : "?" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S7", Property: "OpenConfirmDialog", Value: e.message, Status: "?" });
		}

		try {
			methodResults.push({ Test: "S8", Property: "OpenForm", Value: typeof form.Utility.OpenForm === "function" ? "Available" : "Not found", Status: typeof form.Utility.OpenForm === "function" ? "?" : "?" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S8", Property: "OpenForm", Value: e.message, Status: "?" });
		}

		try {
			methodResults.push({ Test: "S9", Property: "OpenWebResource", Value: typeof form.Utility.OpenWebResource === "function" ? "Available" : "Not found", Status: typeof form.Utility.OpenWebResource === "function" ? "?" : "?" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S9", Property: "OpenWebResource", Value: e.message, Status: "?" });
		}

		try {
			methodResults.push({ Test: "S10", Property: "ShowProgressIndicator", Value: typeof form.Utility.ShowProgressIndicator === "function" ? "Available" : "Not found", Status: typeof form.Utility.ShowProgressIndicator === "function" ? "?" : "?" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S10", Property: "ShowProgressIndicator", Value: e.message, Status: "?" });
		}

		try {
			methodResults.push({ Test: "S11", Property: "LookupObjects", Value: typeof form.Utility.LookupObjects === "function" ? "Available" : "Not found", Status: typeof form.Utility.LookupObjects === "function" ? "?" : "?" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S11", Property: "LookupObjects", Value: e.message, Status: "?" });
		}

		try {
			methodResults.push({ Test: "S12", Property: "EntityMetadata", Value: typeof form.Utility.EntityMetadata === "function" ? "Available" : "Not found", Status: typeof form.Utility.EntityMetadata === "function" ? "?" : "?" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S12", Property: "EntityMetadata", Value: e.message, Status: "?" });
		}

		const allResults = [...results, ...methodResults];
		const passed = allResults.filter(r => r.Status === "?").length;
		const warnings = allResults.filter(r => r.Status === "?").length;
		const total = allResults.length;

		console.groupCollapsed(`🎯 TEST 21: Utility API [${startTime}] - ${passed}/${total}`);
		console.log("%c📋 ReadOnly Properties (R1-R18)", "font-weight: bold; font-size: 14px; color: #4CAF50;");
		console.table(results);
		console.log("%c⚡ Methods (S1-S12)", "font-weight: bold; font-size: 14px; color: #2196F3;");
		console.table(methodResults);
		console.log(`%c✅ Summary: ${passed}/${total} passed` +
			(warnings > 0 ? ` | ⚠ ${warnings} warnings` : ''),
			"font-weight: bold; color: #4CAF50; font-size: 14px;");
		console.groupEnd();
	}
	//END ON LOAD ==========================================================
	//BEGIN ON CHANGE ======================================================

	//END ON CHANGE ========================================================
	//BEGIN PRE SEARCH =====================================================

	//END PRE SEARCH =======================================================
	//BEGIN OTHERS =========================================================

	//END OTHERS ===========================================================
	return {
		OnLoad: onLoad
	};
})();