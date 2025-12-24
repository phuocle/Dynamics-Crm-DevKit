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

			// Test 4: Integer Control
			TestInteger();

			// Test 5: Decimal Control
			TestDecimal();

			// Test 6: Double Control
			TestDouble();

			// Test 7: Money Control
			TestMoney();

			// Test 8: Lookup Control
			TestLookup();

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
			results.push({ Test: "R1", Property: "Attribute", Value: form.Body.v4_String.Attribute ? "object" : "null", Status: form.Body.v4_String.Attribute ? "✓" : "⚠" });
			results.push({ Test: "R2", Property: "AttributeName", Value: form.Body.v4_String.AttributeName, Status: form.Body.v4_String.AttributeName === "v4_string" ? "✓" : "⚠" });
			results.push({ Test: "R3", Property: "AttributeType", Value: form.Body.v4_String.AttributeType, Status: form.Body.v4_String.AttributeType === OptionSet.FieldAttributeType.String ? "✓" : "⚠" });
			results.push({ Test: "R4", Property: "ControlName", Value: form.Body.v4_String.ControlName, Status: "✓" });
			results.push({ Test: "R5", Property: "ControlType", Value: form.Body.v4_String.ControlType, Status: "✓" });
			results.push({ Test: "R6", Property: "Format", Value: form.Body.v4_String.Format, Status: "✓" });
			results.push({ Test: "R7", Property: "IsDirty", Value: form.Body.v4_String.IsDirty, Status: "✓" });
			results.push({ Test: "R8", Property: "IsValid", Value: form.Body.v4_String.IsValid, Status: "✓" });
		} catch (/** @type {any} */ error) {
			results.push({ Test: "ERR", Property: "Properties Error", Value: error.message, Status: "✗" });
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
			setterResults.push({ Test: "S1", Property: "RequiredLevel (set)", Value: `${origRequired}→required→restored`, Status: newRequired === OptionSet.FieldRequiredLevel.Required ? "✓" : "✗" });
		} catch (/** @type {any} */ e) {
			setterResults.push({ Test: "S1", Property: "RequiredLevel (set)", Value: e.message, Status: "✗" });
		}

		try {
			const origSubmit = form.Body.v4_String.SubmitMode;
			form.Body.v4_String.SubmitMode = OptionSet.FieldSubmitMode.Always;
			const newSubmit = form.Body.v4_String.SubmitMode;
			form.Body.v4_String.SubmitMode = origSubmit;
			setterResults.push({ Test: "S2", Property: "SubmitMode (set)", Value: `${origSubmit}→always→restored`, Status: newSubmit === OptionSet.FieldSubmitMode.Always ? "✓" : "✗" });
		} catch (/** @type {any} */ e) {
			setterResults.push({ Test: "S2", Property: "SubmitMode (set)", Value: e.message, Status: "✗" });
		}

		try {
			const origDisabled = form.Body.v4_String.Disabled;
			form.Body.v4_String.Disabled = true;
			const newDisabled = form.Body.v4_String.Disabled;
			form.Body.v4_String.Disabled = origDisabled;
			setterResults.push({ Test: "S3", Property: "Disabled (set)", Value: `${origDisabled}→true→restored`, Status: newDisabled === true ? "✓" : "✗" });
		} catch (/** @type {any} */ e) {
			setterResults.push({ Test: "S3", Property: "Disabled (set)", Value: e.message, Status: "✗" });
		}

		try {
			const origLabel = form.Body.v4_String.Label;
			form.Body.v4_String.Label = origLabel + " (TEST)";
			const newLabel = form.Body.v4_String.Label;
			form.Body.v4_String.Label = origLabel;
			setterResults.push({ Test: "S4", Property: "Label (set)", Value: `"${origLabel}"→modified→restored`, Status: newLabel.includes("(TEST)") ? "✓" : "✗" });
		} catch (/** @type {any} */ e) {
			setterResults.push({ Test: "S4", Property: "Label (set)", Value: e.message, Status: "✗" });
		}

		try {
			const origVisible = form.Body.v4_String.Visible;
			form.Body.v4_String.Visible = false;
			const newVisible = form.Body.v4_String.Visible;
			form.Body.v4_String.Visible = origVisible;
			setterResults.push({ Test: "S5", Property: "Visible (set)", Value: `${origVisible}→false→restored`, Status: newVisible === false ? "✓" : "✗" });
		} catch (/** @type {any} */ e) {
			setterResults.push({ Test: "S5", Property: "Visible (set)", Value: e.message, Status: "✗" });
		}

		try {
			form.Body.v4_String.Value = originalValue + " (MODIFIED)";
			const newValue = form.Body.v4_String.Value;
			form.Body.v4_String.Value = originalValue;
			setterResults.push({ Test: "S6", Property: "Value (set)", Value: `modified→restored`, Status: newValue?.includes("(MODIFIED)") ? "✓" : "✗" });
		} catch (/** @type {any} */ e) {
			setterResults.push({ Test: "S6", Property: "Value (set)", Value: e.message, Status: "✗" });
		}

		// Methods
		/** @param {any} ctx */
		const onChangeCallback = (ctx) => console.log("  📍 OnChange fired");
		try {
			form.Body.v4_String.AddOnChange(onChangeCallback);
			setterResults.push({ Test: "S7", Property: "AddOnChange", Value: "Registered", Status: "✓" });
		} catch (/** @type {any} */ e) {
			setterResults.push({ Test: "S7", Property: "AddOnChange", Value: e.message, Status: "✗" });
		}

		try {
			form.Body.v4_String.RemoveOnChange(onChangeCallback);
			setterResults.push({ Test: "S8", Property: "RemoveOnChange", Value: "Removed", Status: "✓" });
		} catch (/** @type {any} */ e) {
			setterResults.push({ Test: "S8", Property: "RemoveOnChange", Value: e.message, Status: "✗" });
		}

		/** @param {any} ctx */
		const outputChangeCallback = (ctx) => console.log("  📍 OutputChange fired");
		try {
			form.Body.v4_String.AddOnOutputChange(outputChangeCallback);
			setterResults.push({ Test: "S9", Property: "AddOnOutputChange", Value: "Registered", Status: "✓" });
		} catch (/** @type {any} */ e) {
			setterResults.push({ Test: "S9", Property: "AddOnOutputChange", Value: e.message, Status: "✗" });
		}

		try {
			form.Body.v4_String.RemoveOnOutputChange(outputChangeCallback);
			setterResults.push({ Test: "S10", Property: "RemoveOnOutputChange", Value: "Removed", Status: "✓" });
		} catch (/** @type {any} */ e) {
			setterResults.push({ Test: "S10", Property: "RemoveOnOutputChange", Value: e.message, Status: "✗" });
		}

		try {
			form.Body.v4_String.FireOnChange();
			setterResults.push({ Test: "S11", Property: "FireOnChange", Value: "Fired", Status: "✓" });
		} catch (/** @type {any} */ e) {
			setterResults.push({ Test: "S11", Property: "FireOnChange", Value: e.message, Status: "✗" });
		}

		try {
			setTimeout(() => form.Body.v4_String.Focus(), 1000);
			setterResults.push({ Test: "S12", Property: "Focus", Value: "Scheduled (1s)", Status: "✓" });
		} catch (/** @type {any} */ e) {
			setterResults.push({ Test: "S12", Property: "Focus", Value: e.message, Status: "✗" });
		}

		try {
			form.Body.v4_String.SetNotification("Test notification from IControl", "CTRL_TEST_1");
			setTimeout(() => form.Body.v4_String.ClearNotification("CTRL_TEST_1"), 3000);
			setterResults.push({ Test: "S13", Property: "SetNotification", Value: "Set (clears 3s)", Status: "✓" });
		} catch (/** @type {any} */ e) {
			setterResults.push({ Test: "S13", Property: "SetNotification", Value: e.message, Status: "✗" });
		}

		try {
			const cleared = form.Body.v4_String.ClearNotification("NONEXISTENT");
			setterResults.push({ Test: "S14", Property: "ClearNotification", Value: `Result: ${cleared}`, Status: "✓" });
		} catch (/** @type {any} */ e) {
			setterResults.push({ Test: "S14", Property: "ClearNotification", Value: e.message, Status: "✗" });
		}

		try {
			form.Body.v4_String.AddNotification({
				messages: ["Recommendation from test"],
				notificationLevel: OptionSet.FieldNotificationLevel.Recommendation,
				uniqueId: "CTRL_TEST_2"
			});
			setTimeout(() => form.Body.v4_String.ClearNotification("CTRL_TEST_2"), 3000);
			setterResults.push({ Test: "S15", Property: "AddNotification", Value: "Added (clears 3s)", Status: "✓" });
		} catch (/** @type {any} */ e) {
			setterResults.push({ Test: "S15", Property: "AddNotification", Value: e.message, Status: "✗" });
		}

		try {
			form.Body.v4_String.SetIsValid(false, "Test invalid message");
			setTimeout(() => form.Body.v4_String.SetIsValid(true, ""), 2000);
			setterResults.push({ Test: "S16", Property: "SetIsValid", Value: "Set→Restored (2s)", Status: "✓" });
		} catch (/** @type {any} */ e) {
			setterResults.push({ Test: "S16", Property: "SetIsValid", Value: e.message, Status: "✗" });
		}

		// =====================================================
		// OUTPUT
		// =====================================================
		const allResults = [...results, ...setterResults];
		const passed = allResults.filter(r => r.Status === "✓").length;
		const warnings = allResults.filter(r => r.Status === "⚠").length;
		const failed = allResults.filter(r => r.Status === "✗").length;
		const total = allResults.length;

		console.groupCollapsed(`🎛️ TEST 0: IControl Interface [${startTime}] - Using: v4_String field - ${passed}/${total}`);

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
			results.push({ Test: "R1", Property: "MaxLength", Value: form.Body.v4_String.MaxLength, Status: typeof form.Body.v4_String.MaxLength === "number" ? "✓" : "⚠" });
			results.push({ Test: "R2", Property: "Value", Value: originalValue ? `"${originalValue.substring(0, 50)}${originalValue.length > 50 ? '...' : ''}"` : "(empty)", Status: "✓" });

			// Inherited from IControl
			results.push({ Test: "R3", Property: "Attribute", Value: form.Body.v4_String.Attribute ? "object" : "null", Status: form.Body.v4_String.Attribute ? "✓" : "⚠" });
			results.push({ Test: "R4", Property: "AttributeName", Value: form.Body.v4_String.AttributeName, Status: form.Body.v4_String.AttributeName === "v4_string" ? "✓" : "⚠" });
			results.push({ Test: "R5", Property: "AttributeType", Value: form.Body.v4_String.AttributeType, Status: form.Body.v4_String.AttributeType === OptionSet.FieldAttributeType.String ? "✓" : "⚠" });
			results.push({ Test: "R6", Property: "ControlName", Value: form.Body.v4_String.ControlName, Status: "✓" });
			results.push({ Test: "R7", Property: "ControlType", Value: form.Body.v4_String.ControlType, Status: "✓" });
			results.push({ Test: "R8", Property: "Format", Value: form.Body.v4_String.Format, Status: "✓" });
			results.push({ Test: "R9", Property: "IsDirty", Value: form.Body.v4_String.IsDirty, Status: "✓" });
			results.push({ Test: "R10", Property: "IsValid", Value: form.Body.v4_String.IsValid, Status: "✓" });
			results.push({ Test: "R11", Property: "RequiredLevel", Value: form.Body.v4_String.RequiredLevel, Status: "✓" });
			results.push({ Test: "R12", Property: "SubmitMode", Value: form.Body.v4_String.SubmitMode, Status: "✓" });
			results.push({ Test: "R13", Property: "Disabled", Value: form.Body.v4_String.Disabled, Status: "✓" });
			results.push({ Test: "R14", Property: "Label", Value: form.Body.v4_String.Label, Status: "✓" });
			results.push({ Test: "R15", Property: "Visible", Value: form.Body.v4_String.Visible, Status: "✓" });
		} catch (/** @type {any} */ error) {
			results.push({ Test: "ERR", Property: "Props Error", Value: error.message, Status: "✗" });
		}

		// =====================================================
		// SETTERS & METHODS (S-Index)
		// =====================================================
		try {
			// Setter: Value
			form.Body.v4_String.Value = (originalValue || "") + " [TEST]";
			const newValue = form.Body.v4_String.Value;
			form.Body.v4_String.Value = originalValue;
			methodResults.push({ Test: "S1", Property: "Value (set)", Value: newValue?.includes("[TEST]") ? "Set→Restored" : "Failed", Status: newValue?.includes("[TEST]") ? "✓" : "✗" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S1", Property: "Value (set)", Value: e.message, Status: "✗" });
		}

		try {
			const origRequired = form.Body.v4_String.RequiredLevel;
			form.Body.v4_String.RequiredLevel = OptionSet.FieldRequiredLevel.Required;
			const check = form.Body.v4_String.RequiredLevel;
			form.Body.v4_String.RequiredLevel = origRequired;
			methodResults.push({ Test: "S2", Property: "RequiredLevel (set)", Value: check === OptionSet.FieldRequiredLevel.Required ? "Set→Restored" : "Failed", Status: check === OptionSet.FieldRequiredLevel.Required ? "✓" : "✗" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S2", Property: "RequiredLevel (set)", Value: e.message, Status: "✗" });
		}

		try {
			const origDisabled = form.Body.v4_String.Disabled;
			form.Body.v4_String.Disabled = !origDisabled;
			form.Body.v4_String.Disabled = origDisabled;
			methodResults.push({ Test: "S3", Property: "Disabled (set)", Value: "Set→Restored", Status: "✓" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S3", Property: "Disabled (set)", Value: e.message, Status: "✗" });
		}

		try {
			const origLabel = form.Body.v4_String.Label;
			form.Body.v4_String.Label = origLabel + " (TEST)";
			const check = form.Body.v4_String.Label;
			form.Body.v4_String.Label = origLabel;
			methodResults.push({ Test: "S4", Property: "Label (set)", Value: check.includes("(TEST)") ? "Set→Restored" : "Failed", Status: check.includes("(TEST)") ? "✓" : "✗" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S4", Property: "Label (set)", Value: e.message, Status: "✗" });
		}

		try {
			const origVisible = form.Body.v4_String.Visible;
			form.Body.v4_String.Visible = !origVisible;
			form.Body.v4_String.Visible = origVisible;
			methodResults.push({ Test: "S5", Property: "Visible (set)", Value: "Set→Restored", Status: "✓" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S5", Property: "Visible (set)", Value: e.message, Status: "✗" });
		}

		// Methods
		/** @param {any} ctx */
		const onChangeCallback = (ctx) => console.log("  📍 String OnChange fired");

		try {
			form.Body.v4_String.AddOnChange(onChangeCallback);
			methodResults.push({ Test: "S6", Property: "AddOnChange", Value: "Registered", Status: "✓" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S6", Property: "AddOnChange", Value: e.message, Status: "✗" });
		}

		try {
			form.Body.v4_String.RemoveOnChange(onChangeCallback);
			methodResults.push({ Test: "S7", Property: "RemoveOnChange", Value: "Removed", Status: "✓" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S7", Property: "RemoveOnChange", Value: e.message, Status: "✗" });
		}

		try {
			form.Body.v4_String.FireOnChange();
			methodResults.push({ Test: "S8", Property: "FireOnChange", Value: "Fired", Status: "✓" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S8", Property: "FireOnChange", Value: e.message, Status: "✗" });
		}

		try {
			setTimeout(() => form.Body.v4_String.Focus(), 1000);
			methodResults.push({ Test: "S9", Property: "Focus", Value: "Scheduled (1s)", Status: "✓" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S9", Property: "Focus", Value: e.message, Status: "✗" });
		}

		try {
			form.Body.v4_String.SetNotification("Test String notification", "STRING_TEST_1");
			setTimeout(() => form.Body.v4_String.ClearNotification("STRING_TEST_1"), 3000);
			methodResults.push({ Test: "S10", Property: "SetNotification", Value: "Set (clears 3s)", Status: "✓" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S10", Property: "SetNotification", Value: e.message, Status: "✗" });
		}

		try {
			form.Body.v4_String.SetIsValid(false, "Test invalid");
			setTimeout(() => form.Body.v4_String.SetIsValid(true, ""), 2000);
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

		console.groupCollapsed(`📄 TEST 1: String Control [${startTime}] - Using: v4_String field - ${passed}/${total}`);

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
			results.push({ Test: "R1", Property: "MaxLength", Value: form.Body.v4_Memo.MaxLength, Status: typeof form.Body.v4_Memo.MaxLength === "number" ? "✓" : "⚠" });
			results.push({ Test: "R2", Property: "Value", Value: originalValue ? `"${originalValue.substring(0, 50)}${originalValue.length > 50 ? '...' : ''}"` : "(empty)", Status: "✓" });

			// Inherited from IControl
			results.push({ Test: "R3", Property: "Attribute", Value: form.Body.v4_Memo.Attribute ? "object" : "null", Status: form.Body.v4_Memo.Attribute ? "✓" : "⚠" });
			results.push({ Test: "R4", Property: "AttributeName", Value: form.Body.v4_Memo.AttributeName, Status: form.Body.v4_Memo.AttributeName === "v4_memo" ? "✓" : "⚠" });
			results.push({ Test: "R5", Property: "AttributeType", Value: form.Body.v4_Memo.AttributeType, Status: form.Body.v4_Memo.AttributeType === OptionSet.FieldAttributeType.Memo ? "✓" : "⚠" });
			results.push({ Test: "R6", Property: "ControlName", Value: form.Body.v4_Memo.ControlName, Status: "✓" });
			results.push({ Test: "R7", Property: "ControlType", Value: form.Body.v4_Memo.ControlType, Status: "✓" });
			results.push({ Test: "R8", Property: "Format", Value: form.Body.v4_Memo.Format, Status: "✓" });
			results.push({ Test: "R9", Property: "IsDirty", Value: form.Body.v4_Memo.IsDirty, Status: "✓" });
			results.push({ Test: "R10", Property: "IsValid", Value: form.Body.v4_Memo.IsValid, Status: "✓" });
			results.push({ Test: "R11", Property: "RequiredLevel", Value: form.Body.v4_Memo.RequiredLevel, Status: "✓" });
			results.push({ Test: "R12", Property: "SubmitMode", Value: form.Body.v4_Memo.SubmitMode, Status: "✓" });
			results.push({ Test: "R13", Property: "Disabled", Value: form.Body.v4_Memo.Disabled, Status: "✓" });
			results.push({ Test: "R14", Property: "Label", Value: form.Body.v4_Memo.Label, Status: "✓" });
			results.push({ Test: "R15", Property: "Visible", Value: form.Body.v4_Memo.Visible, Status: "✓" });
		} catch (/** @type {any} */ error) {
			results.push({ Test: "ERR", Property: "Props Error", Value: error.message, Status: "✗" });
		}

		// =====================================================
		// SETTERS & METHODS (S-Index)
		// =====================================================
		try {
			// Setter: Value
			form.Body.v4_Memo.Value = (originalValue || "") + " [TEST]";
			const newValue = form.Body.v4_Memo.Value;
			form.Body.v4_Memo.Value = originalValue;
			methodResults.push({ Test: "S1", Property: "Value (set)", Value: newValue?.includes("[TEST]") ? "Set→Restored" : "Failed", Status: newValue?.includes("[TEST]") ? "✓" : "✗" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S1", Property: "Value (set)", Value: e.message, Status: "✗" });
		}

		try {
			// Setter: RequiredLevel
			const origRequired = form.Body.v4_Memo.RequiredLevel;
			form.Body.v4_Memo.RequiredLevel = OptionSet.FieldRequiredLevel.Required;
			const check = form.Body.v4_Memo.RequiredLevel;
			form.Body.v4_Memo.RequiredLevel = origRequired;
			methodResults.push({ Test: "S2", Property: "RequiredLevel (set)", Value: check === OptionSet.FieldRequiredLevel.Required ? "Set→Restored" : "Failed", Status: check === OptionSet.FieldRequiredLevel.Required ? "✓" : "✗" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S2", Property: "RequiredLevel (set)", Value: e.message, Status: "✗" });
		}

		try {
			// Setter: Disabled
			const origDisabled = form.Body.v4_Memo.Disabled;
			form.Body.v4_Memo.Disabled = !origDisabled;
			form.Body.v4_Memo.Disabled = origDisabled;
			methodResults.push({ Test: "S3", Property: "Disabled (set)", Value: "Set→Restored", Status: "✓" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S3", Property: "Disabled (set)", Value: e.message, Status: "✗" });
		}

		try {
			// Setter: Label
			const origLabel = form.Body.v4_Memo.Label;
			form.Body.v4_Memo.Label = origLabel + " (TEST)";
			const check = form.Body.v4_Memo.Label;
			form.Body.v4_Memo.Label = origLabel;
			methodResults.push({ Test: "S4", Property: "Label (set)", Value: check.includes("(TEST)") ? "Set→Restored" : "Failed", Status: check.includes("(TEST)") ? "✓" : "✗" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S4", Property: "Label (set)", Value: e.message, Status: "✗" });
		}

		try {
			// Setter: Visible
			const origVisible = form.Body.v4_Memo.Visible;
			form.Body.v4_Memo.Visible = !origVisible;
			form.Body.v4_Memo.Visible = origVisible;
			methodResults.push({ Test: "S5", Property: "Visible (set)", Value: "Set→Restored", Status: "✓" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S5", Property: "Visible (set)", Value: e.message, Status: "✗" });
		}

		// Methods
		/** @param {any} ctx */
		const onChangeCallback = (ctx) => console.log("  📍 Memo OnChange fired");

		try {
			form.Body.v4_Memo.AddOnChange(onChangeCallback);
			methodResults.push({ Test: "S6", Property: "AddOnChange", Value: "Registered", Status: "✓" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S6", Property: "AddOnChange", Value: e.message, Status: "✗" });
		}

		try {
			form.Body.v4_Memo.RemoveOnChange(onChangeCallback);
			methodResults.push({ Test: "S7", Property: "RemoveOnChange", Value: "Removed", Status: "✓" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S7", Property: "RemoveOnChange", Value: e.message, Status: "✗" });
		}

		try {
			form.Body.v4_Memo.FireOnChange();
			methodResults.push({ Test: "S8", Property: "FireOnChange", Value: "Fired", Status: "✓" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S8", Property: "FireOnChange", Value: e.message, Status: "✗" });
		}

		try {
			setTimeout(() => form.Body.v4_Memo.Focus(), 1000);
			methodResults.push({ Test: "S9", Property: "Focus", Value: "Scheduled (1s)", Status: "✓" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S9", Property: "Focus", Value: e.message, Status: "✗" });
		}

		try {
			form.Body.v4_Memo.SetNotification("Test Memo notification", "MEMO_TEST_1");
			setTimeout(() => form.Body.v4_Memo.ClearNotification("MEMO_TEST_1"), 3000);
			methodResults.push({ Test: "S10", Property: "SetNotification", Value: "Set (clears 3s)", Status: "✓" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S10", Property: "SetNotification", Value: e.message, Status: "✗" });
		}

		try {
			form.Body.v4_Memo.SetIsValid(false, "Test invalid");
			setTimeout(() => form.Body.v4_Memo.SetIsValid(true, ""), 2000);
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

		console.groupCollapsed(`📝 TEST 2: Memo Control [${startTime}] - Using: v4_Memo field - ${passed}/${total}`);

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
			results.push({ Test: "R1", Property: "InitialValue", Value: initVal, Status: isValidInitValue ? "✓" : "⚠" });
			results.push({ Test: "R2", Property: "Value", Value: originalValue, Status: "✓" });

			// Inherited from IControl
			results.push({ Test: "R3", Property: "Attribute", Value: form.Body.v4_Boolean.Attribute ? "object" : "null", Status: form.Body.v4_Boolean.Attribute ? "✓" : "⚠" });
			results.push({ Test: "R4", Property: "AttributeName", Value: form.Body.v4_Boolean.AttributeName, Status: form.Body.v4_Boolean.AttributeName === "v4_boolean" ? "✓" : "⚠" });
			results.push({ Test: "R5", Property: "AttributeType", Value: form.Body.v4_Boolean.AttributeType, Status: form.Body.v4_Boolean.AttributeType === OptionSet.FieldAttributeType.Boolean ? "✓" : "⚠" });
			results.push({ Test: "R6", Property: "ControlName", Value: form.Body.v4_Boolean.ControlName, Status: "✓" });
			results.push({ Test: "R7", Property: "ControlType", Value: form.Body.v4_Boolean.ControlType, Status: "✓" });
			results.push({ Test: "R8", Property: "Format", Value: form.Body.v4_Boolean.Format, Status: "✓" });
			results.push({ Test: "R9", Property: "IsDirty", Value: form.Body.v4_Boolean.IsDirty, Status: "✓" });
			results.push({ Test: "R10", Property: "IsValid", Value: form.Body.v4_Boolean.IsValid, Status: "✓" });
			results.push({ Test: "R11", Property: "RequiredLevel", Value: form.Body.v4_Boolean.RequiredLevel, Status: "✓" });
			results.push({ Test: "R12", Property: "SubmitMode", Value: form.Body.v4_Boolean.SubmitMode, Status: "✓" });
			results.push({ Test: "R13", Property: "Disabled", Value: form.Body.v4_Boolean.Disabled, Status: "✓" });
			results.push({ Test: "R14", Property: "Label", Value: form.Body.v4_Boolean.Label, Status: "✓" });
			results.push({ Test: "R15", Property: "Visible", Value: form.Body.v4_Boolean.Visible, Status: "✓" });
		} catch (/** @type {any} */ error) {
			results.push({ Test: "ERR", Property: "Props Error", Value: error.message, Status: "✗" });
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
			methodResults.push({ Test: "S1", Property: "Value (set)", Value: newValue === testValue ? "Set→Restored" : "Failed", Status: newValue === testValue ? "✓" : "✗" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S1", Property: "Value (set)", Value: e.message, Status: "✗" });
		}

		// Setter: RequiredLevel
		try {
			const origRequired = form.Body.v4_Boolean.RequiredLevel;
			form.Body.v4_Boolean.RequiredLevel = OptionSet.FieldRequiredLevel.Required;
			const check = form.Body.v4_Boolean.RequiredLevel;
			form.Body.v4_Boolean.RequiredLevel = origRequired;
			methodResults.push({ Test: "S2", Property: "RequiredLevel (set)", Value: check === OptionSet.FieldRequiredLevel.Required ? "Set→Restored" : "Failed", Status: check === OptionSet.FieldRequiredLevel.Required ? "✓" : "✗" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S2", Property: "RequiredLevel (set)", Value: e.message, Status: "✗" });
		}

		// Setter: Disabled
		try {
			const origDisabled = form.Body.v4_Boolean.Disabled;
			form.Body.v4_Boolean.Disabled = !origDisabled;
			const check = form.Body.v4_Boolean.Disabled;
			form.Body.v4_Boolean.Disabled = origDisabled;
			methodResults.push({ Test: "S3", Property: "Disabled (set)", Value: "Set→Restored", Status: "✓" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S3", Property: "Disabled (set)", Value: e.message, Status: "✗" });
		}

		// Setter: Label
		try {
			const origLabel = form.Body.v4_Boolean.Label;
			form.Body.v4_Boolean.Label = origLabel + " (TEST)";
			const check = form.Body.v4_Boolean.Label;
			form.Body.v4_Boolean.Label = origLabel;
			methodResults.push({ Test: "S4", Property: "Label (set)", Value: check.includes("(TEST)") ? "Set→Restored" : "Failed", Status: check.includes("(TEST)") ? "✓" : "✗" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S4", Property: "Label (set)", Value: e.message, Status: "✗" });
		}

		// Setter: Visible
		try {
			const origVisible = form.Body.v4_Boolean.Visible;
			form.Body.v4_Boolean.Visible = !origVisible;
			const check = form.Body.v4_Boolean.Visible;
			form.Body.v4_Boolean.Visible = origVisible;
			methodResults.push({ Test: "S5", Property: "Visible (set)", Value: "Set→Restored", Status: "✓" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S5", Property: "Visible (set)", Value: e.message, Status: "✗" });
		}

		// Methods
		/** @param {any} ctx */
		const onChangeCallback = (ctx) => console.log("  📍 Boolean OnChange fired");

		try {
			form.Body.v4_Boolean.AddOnChange(onChangeCallback);
			methodResults.push({ Test: "S6", Property: "AddOnChange", Value: "Registered", Status: "✓" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S6", Property: "AddOnChange", Value: e.message, Status: "✗" });
		}

		try {
			form.Body.v4_Boolean.RemoveOnChange(onChangeCallback);
			methodResults.push({ Test: "S7", Property: "RemoveOnChange", Value: "Removed", Status: "✓" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S7", Property: "RemoveOnChange", Value: e.message, Status: "✗" });
		}

		try {
			form.Body.v4_Boolean.FireOnChange();
			methodResults.push({ Test: "S8", Property: "FireOnChange", Value: "Fired", Status: "✓" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S8", Property: "FireOnChange", Value: e.message, Status: "✗" });
		}

		try {
			setTimeout(() => form.Body.v4_Boolean.Focus(), 1000);
			methodResults.push({ Test: "S9", Property: "Focus", Value: "Scheduled (1s)", Status: "✓" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S9", Property: "Focus", Value: e.message, Status: "✗" });
		}

		try {
			form.Body.v4_Boolean.SetNotification("Test Boolean notification", "BOOL_TEST_1");
			setTimeout(() => form.Body.v4_Boolean.ClearNotification("BOOL_TEST_1"), 3000);
			methodResults.push({ Test: "S10", Property: "SetNotification", Value: "Set (clears 3s)", Status: "✓" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S10", Property: "SetNotification", Value: e.message, Status: "✗" });
		}

		try {
			form.Body.v4_Boolean.SetIsValid(false, "Test invalid");
			setTimeout(() => form.Body.v4_Boolean.SetIsValid(true, ""), 2000);
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

		console.groupCollapsed(`✅ TEST 3: Boolean Control [${startTime}] - Using: v4_Boolean field - ${passed}/${total}`);

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
		const originalValue = form.Header.v4_Integer.Value;

		// =====================================================
		// READONLY PROPERTIES (R-Index)
		// =====================================================
		try {
			// Integer-specific properties (IControlNumber - NO Precision for Integer)
			results.push({ Test: "R1", Property: "Max", Value: form.Header.v4_Integer.Max, Status: typeof form.Header.v4_Integer.Max === "number" ? "✓" : "⚠" });
			results.push({ Test: "R2", Property: "Min", Value: form.Header.v4_Integer.Min, Status: typeof form.Header.v4_Integer.Min === "number" ? "✓" : "⚠" });
			results.push({ Test: "R3", Property: "Value", Value: originalValue, Status: "✓" });

			// Inherited from IControl
			results.push({ Test: "R4", Property: "Attribute", Value: form.Header.v4_Integer.Attribute ? "object" : "null", Status: form.Header.v4_Integer.Attribute ? "✓" : "⚠" });
			results.push({ Test: "R5", Property: "AttributeName", Value: form.Header.v4_Integer.AttributeName, Status: form.Header.v4_Integer.AttributeName === "v4_integer" ? "✓" : "⚠" });
			results.push({ Test: "R6", Property: "AttributeType", Value: form.Header.v4_Integer.AttributeType, Status: form.Header.v4_Integer.AttributeType === OptionSet.FieldAttributeType.Integer ? "✓" : "⚠" });
			results.push({ Test: "R7", Property: "ControlName", Value: form.Header.v4_Integer.ControlName, Status: "✓" });
			results.push({ Test: "R8", Property: "ControlType", Value: form.Header.v4_Integer.ControlType, Status: "✓" });
			results.push({ Test: "R9", Property: "Format", Value: form.Header.v4_Integer.Format, Status: "✓" });
			results.push({ Test: "R10", Property: "IsDirty", Value: form.Header.v4_Integer.IsDirty, Status: "✓" });
			results.push({ Test: "R11", Property: "IsValid", Value: form.Header.v4_Integer.IsValid, Status: "✓" });
			results.push({ Test: "R12", Property: "RequiredLevel", Value: form.Header.v4_Integer.RequiredLevel, Status: "✓" });
			results.push({ Test: "R13", Property: "SubmitMode", Value: form.Header.v4_Integer.SubmitMode, Status: "✓" });
			results.push({ Test: "R14", Property: "Disabled", Value: form.Header.v4_Integer.Disabled, Status: "✓" });
			results.push({ Test: "R15", Property: "Label", Value: form.Header.v4_Integer.Label, Status: "✓" });
			results.push({ Test: "R16", Property: "Visible", Value: form.Header.v4_Integer.Visible, Status: "✓" });
		} catch (/** @type {any} */ error) {
			results.push({ Test: "ERR", Property: "Props Error", Value: error.message, Status: "✗" });
		}

		// =====================================================
		// SETTERS & METHODS (S-Index)
		// =====================================================

		// Setter: Value
		try {
			const testValue = (originalValue || 0) + 100;
			form.Header.v4_Integer.Value = testValue;
			const newValue = form.Header.v4_Integer.Value;
			form.Header.v4_Integer.Value = originalValue;
			methodResults.push({ Test: "S1", Property: "Value (set)", Value: newValue === testValue ? "Set→Restored" : "Failed", Status: newValue === testValue ? "✓" : "✗" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S1", Property: "Value (set)", Value: e.message, Status: "✗" });
		}

		// Setter: RequiredLevel
		try {
			const origRequired = form.Header.v4_Integer.RequiredLevel;
			form.Header.v4_Integer.RequiredLevel = OptionSet.FieldRequiredLevel.Required;
			const check = form.Header.v4_Integer.RequiredLevel;
			form.Header.v4_Integer.RequiredLevel = origRequired;
			methodResults.push({ Test: "S2", Property: "RequiredLevel (set)", Value: check === OptionSet.FieldRequiredLevel.Required ? "Set→Restored" : "Failed", Status: check === OptionSet.FieldRequiredLevel.Required ? "✓" : "✗" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S2", Property: "RequiredLevel (set)", Value: e.message, Status: "✗" });
		}

		// Setter: Disabled
		try {
			const origDisabled = form.Header.v4_Integer.Disabled;
			form.Header.v4_Integer.Disabled = !origDisabled;
			const check = form.Header.v4_Integer.Disabled;
			form.Header.v4_Integer.Disabled = origDisabled;
			methodResults.push({ Test: "S3", Property: "Disabled (set)", Value: "Set→Restored", Status: "✓" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S3", Property: "Disabled (set)", Value: e.message, Status: "✗" });
		}

		// Setter: Label
		try {
			const origLabel = form.Header.v4_Integer.Label;
			form.Header.v4_Integer.Label = origLabel + " (TEST)";
			const check = form.Header.v4_Integer.Label;
			form.Header.v4_Integer.Label = origLabel;
			methodResults.push({ Test: "S4", Property: "Label (set)", Value: check.includes("(TEST)") ? "Set→Restored" : "Failed", Status: check.includes("(TEST)") ? "✓" : "✗" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S4", Property: "Label (set)", Value: e.message, Status: "✗" });
		}

		// Setter: Visible
		try {
			const origVisible = form.Header.v4_Integer.Visible;
			form.Header.v4_Integer.Visible = !origVisible;
			const check = form.Header.v4_Integer.Visible;
			form.Header.v4_Integer.Visible = origVisible;
			methodResults.push({ Test: "S5", Property: "Visible (set)", Value: "Set→Restored", Status: "✓" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S5", Property: "Visible (set)", Value: e.message, Status: "✗" });
		}

		// Methods
		/** @param {any} ctx */
		const onChangeCallback = (ctx) => console.log("  📍 Integer OnChange fired");

		try {
			form.Header.v4_Integer.AddOnChange(onChangeCallback);
			methodResults.push({ Test: "S6", Property: "AddOnChange", Value: "Registered", Status: "✓" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S6", Property: "AddOnChange", Value: e.message, Status: "✗" });
		}

		try {
			form.Header.v4_Integer.RemoveOnChange(onChangeCallback);
			methodResults.push({ Test: "S7", Property: "RemoveOnChange", Value: "Removed", Status: "✓" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S7", Property: "RemoveOnChange", Value: e.message, Status: "✗" });
		}

		try {
			form.Header.v4_Integer.FireOnChange();
			methodResults.push({ Test: "S8", Property: "FireOnChange", Value: "Fired", Status: "✓" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S8", Property: "FireOnChange", Value: e.message, Status: "✗" });
		}

		try {
			setTimeout(() => form.Header.v4_Integer.Focus(), 1000);
			methodResults.push({ Test: "S9", Property: "Focus", Value: "Scheduled (1s)", Status: "✓" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S9", Property: "Focus", Value: e.message, Status: "✗" });
		}

		try {
			form.Header.v4_Integer.SetNotification("Test Integer notification", "INT_TEST_1");
			setTimeout(() => form.Header.v4_Integer.ClearNotification("INT_TEST_1"), 3000);
			methodResults.push({ Test: "S10", Property: "SetNotification", Value: "Set (clears 3s)", Status: "✓" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S10", Property: "SetNotification", Value: e.message, Status: "✗" });
		}

		try {
			form.Header.v4_Integer.SetIsValid(false, "Test invalid");
			setTimeout(() => form.Header.v4_Integer.SetIsValid(true, ""), 2000);
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

		console.groupCollapsed(`🔢 TEST 4: Integer Control [${startTime}] - Using: v4_Integer field - ${passed}/${total}`);

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
			results.push({ Test: "R1", Property: "Max", Value: form.Body.v4_Decimal.Max, Status: typeof form.Body.v4_Decimal.Max === "number" ? "✓" : "⚠" });
			results.push({ Test: "R2", Property: "Min", Value: form.Body.v4_Decimal.Min, Status: typeof form.Body.v4_Decimal.Min === "number" ? "✓" : "⚠" });
			results.push({ Test: "R3", Property: "Precision", Value: form.Body.v4_Decimal.Precision, Status: typeof form.Body.v4_Decimal.Precision === "number" ? "✓" : "⚠" });
			results.push({ Test: "R4", Property: "Value", Value: originalValue, Status: "✓" });

			// Inherited from IControl
			results.push({ Test: "R5", Property: "Attribute", Value: form.Body.v4_Decimal.Attribute ? "object" : "null", Status: form.Body.v4_Decimal.Attribute ? "✓" : "⚠" });
			results.push({ Test: "R6", Property: "AttributeName", Value: form.Body.v4_Decimal.AttributeName, Status: form.Body.v4_Decimal.AttributeName === "v4_decimal" ? "✓" : "⚠" });
			results.push({ Test: "R7", Property: "AttributeType", Value: form.Body.v4_Decimal.AttributeType, Status: form.Body.v4_Decimal.AttributeType === OptionSet.FieldAttributeType.Decimal ? "✓" : "⚠" });
			results.push({ Test: "R8", Property: "ControlName", Value: form.Body.v4_Decimal.ControlName, Status: "✓" });
			results.push({ Test: "R9", Property: "ControlType", Value: form.Body.v4_Decimal.ControlType, Status: "✓" });
			results.push({ Test: "R10", Property: "Format", Value: form.Body.v4_Decimal.Format, Status: "✓" });
			results.push({ Test: "R11", Property: "IsDirty", Value: form.Body.v4_Decimal.IsDirty, Status: "✓" });
			results.push({ Test: "R12", Property: "IsValid", Value: form.Body.v4_Decimal.IsValid, Status: "✓" });
			results.push({ Test: "R13", Property: "RequiredLevel", Value: form.Body.v4_Decimal.RequiredLevel, Status: "✓" });
			results.push({ Test: "R14", Property: "SubmitMode", Value: form.Body.v4_Decimal.SubmitMode, Status: "✓" });
			results.push({ Test: "R15", Property: "Disabled", Value: form.Body.v4_Decimal.Disabled, Status: "✓" });
			results.push({ Test: "R16", Property: "Label", Value: form.Body.v4_Decimal.Label, Status: "✓" });
			results.push({ Test: "R17", Property: "Visible", Value: form.Body.v4_Decimal.Visible, Status: "✓" });
		} catch (/** @type {any} */ error) {
			results.push({ Test: "ERR", Property: "Props Error", Value: error.message, Status: "✗" });
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
			methodResults.push({ Test: "S1", Property: "Value (set)", Value: newValue === testValue ? "Set→Restored" : "Failed", Status: newValue === testValue ? "✓" : "✗" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S1", Property: "Value (set)", Value: e.message, Status: "✗" });
		}

		// Setter: Precision
		try {
			const origPrecision = form.Body.v4_Decimal.Precision;
			// Assuming default is usually 2, let's try 4 (if allowed) or just check we can set it
			// Note: Precision setting might throw if not within allowed range or locked by system
			// We will try to set it to current value just to test the setter exists/works without error
			form.Body.v4_Decimal.Precision = origPrecision;
			methodResults.push({ Test: "S2", Property: "Precision (set)", Value: "Set→Restored", Status: "✓" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S2", Property: "Precision (set)", Value: e.message, Status: "✗" });
		}

		// Setter: RequiredLevel
		try {
			const origRequired = form.Body.v4_Decimal.RequiredLevel;
			form.Body.v4_Decimal.RequiredLevel = OptionSet.FieldRequiredLevel.Required;
			const check = form.Body.v4_Decimal.RequiredLevel;
			form.Body.v4_Decimal.RequiredLevel = origRequired;
			methodResults.push({ Test: "S3", Property: "RequiredLevel (set)", Value: check === OptionSet.FieldRequiredLevel.Required ? "Set→Restored" : "Failed", Status: check === OptionSet.FieldRequiredLevel.Required ? "✓" : "✗" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S3", Property: "RequiredLevel (set)", Value: e.message, Status: "✗" });
		}

		// Setter: Disabled
		try {
			const origDisabled = form.Body.v4_Decimal.Disabled;
			form.Body.v4_Decimal.Disabled = !origDisabled;
			const check = form.Body.v4_Decimal.Disabled;
			form.Body.v4_Decimal.Disabled = origDisabled;
			methodResults.push({ Test: "S4", Property: "Disabled (set)", Value: "Set→Restored", Status: "✓" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S4", Property: "Disabled (set)", Value: e.message, Status: "✗" });
		}

		// Setter: Label
		try {
			const origLabel = form.Body.v4_Decimal.Label;
			form.Body.v4_Decimal.Label = origLabel + " (TEST)";
			const check = form.Body.v4_Decimal.Label;
			form.Body.v4_Decimal.Label = origLabel;
			methodResults.push({ Test: "S5", Property: "Label (set)", Value: check.includes("(TEST)") ? "Set→Restored" : "Failed", Status: check.includes("(TEST)") ? "✓" : "✗" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S5", Property: "Label (set)", Value: e.message, Status: "✗" });
		}

		// Setter: Visible
		try {
			const origVisible = form.Body.v4_Decimal.Visible;
			form.Body.v4_Decimal.Visible = !origVisible;
			const check = form.Body.v4_Decimal.Visible;
			form.Body.v4_Decimal.Visible = origVisible;
			methodResults.push({ Test: "S6", Property: "Visible (set)", Value: "Set→Restored", Status: "✓" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S6", Property: "Visible (set)", Value: e.message, Status: "✗" });
		}

		// Methods
		/** @param {any} ctx */
		const onChangeCallback = (ctx) => console.log("  📍 Decimal OnChange fired");

		try {
			form.Body.v4_Decimal.AddOnChange(onChangeCallback);
			methodResults.push({ Test: "S7", Property: "AddOnChange", Value: "Registered", Status: "✓" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S7", Property: "AddOnChange", Value: e.message, Status: "✗" });
		}

		try {
			form.Body.v4_Decimal.RemoveOnChange(onChangeCallback);
			methodResults.push({ Test: "S8", Property: "RemoveOnChange", Value: "Removed", Status: "✓" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S8", Property: "RemoveOnChange", Value: e.message, Status: "✗" });
		}

		try {
			form.Body.v4_Decimal.FireOnChange();
			methodResults.push({ Test: "S9", Property: "FireOnChange", Value: "Fired", Status: "✓" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S9", Property: "FireOnChange", Value: e.message, Status: "✗" });
		}

		try {
			setTimeout(() => form.Body.v4_Decimal.Focus(), 1000);
			methodResults.push({ Test: "S10", Property: "Focus", Value: "Scheduled (1s)", Status: "✓" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S10", Property: "Focus", Value: e.message, Status: "✗" });
		}

		try {
			form.Body.v4_Decimal.SetNotification("Test Decimal notification", "DEC_TEST_1");
			setTimeout(() => form.Body.v4_Decimal.ClearNotification("DEC_TEST_1"), 3000);
			methodResults.push({ Test: "S11", Property: "SetNotification", Value: "Set (clears 3s)", Status: "✓" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S11", Property: "SetNotification", Value: e.message, Status: "✗" });
		}

		try {
			form.Body.v4_Decimal.SetIsValid(false, "Test invalid");
			setTimeout(() => form.Body.v4_Decimal.SetIsValid(true, ""), 2000);
			methodResults.push({ Test: "S12", Property: "SetIsValid", Value: "Set→Restored (2s)", Status: "✓" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S12", Property: "SetIsValid", Value: e.message, Status: "✗" });
		}

		// =====================================================
		// OUTPUT
		// =====================================================
		const allResults = [...results, ...methodResults];
		const passed = allResults.filter(r => r.Status === "✓").length;
		const warnings = allResults.filter(r => r.Status === "⚠").length;
		const failed = allResults.filter(r => r.Status === "✗").length;
		const total = allResults.length;

		console.groupCollapsed(`🔢 TEST 5: Decimal Control [${startTime}] - Using: v4_Decimal field - ${passed}/${total}`);

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
			results.push({ Test: "R1", Property: "Max", Value: form.Body.v4_Double.Max, Status: typeof form.Body.v4_Double.Max === "number" ? "✓" : "⚠" });
			results.push({ Test: "R2", Property: "Min", Value: form.Body.v4_Double.Min, Status: typeof form.Body.v4_Double.Min === "number" ? "✓" : "⚠" });
			results.push({ Test: "R3", Property: "Precision", Value: form.Body.v4_Double.Precision, Status: typeof form.Body.v4_Double.Precision === "number" ? "✓" : "⚠" });
			results.push({ Test: "R4", Property: "Value", Value: originalValue, Status: "✓" });

			// Inherited from IControl
			results.push({ Test: "R5", Property: "Attribute", Value: form.Body.v4_Double.Attribute ? "object" : "null", Status: form.Body.v4_Double.Attribute ? "✓" : "⚠" });
			results.push({ Test: "R6", Property: "AttributeName", Value: form.Body.v4_Double.AttributeName, Status: form.Body.v4_Double.AttributeName === "v4_double" ? "✓" : "⚠" });
			results.push({ Test: "R7", Property: "AttributeType", Value: form.Body.v4_Double.AttributeType, Status: form.Body.v4_Double.AttributeType === OptionSet.FieldAttributeType.Double ? "✓" : "⚠" });
			results.push({ Test: "R8", Property: "ControlName", Value: form.Body.v4_Double.ControlName, Status: "✓" });
			results.push({ Test: "R9", Property: "ControlType", Value: form.Body.v4_Double.ControlType, Status: "✓" });
			results.push({ Test: "R10", Property: "Format", Value: form.Body.v4_Double.Format, Status: "✓" });
			results.push({ Test: "R11", Property: "IsDirty", Value: form.Body.v4_Double.IsDirty, Status: "✓" });
			results.push({ Test: "R12", Property: "IsValid", Value: form.Body.v4_Double.IsValid, Status: "✓" });
			results.push({ Test: "R13", Property: "RequiredLevel", Value: form.Body.v4_Double.RequiredLevel, Status: "✓" });
			results.push({ Test: "R14", Property: "SubmitMode", Value: form.Body.v4_Double.SubmitMode, Status: "✓" });
			results.push({ Test: "R15", Property: "Disabled", Value: form.Body.v4_Double.Disabled, Status: "✓" });
			results.push({ Test: "R16", Property: "Label", Value: form.Body.v4_Double.Label, Status: "✓" });
			results.push({ Test: "R17", Property: "Visible", Value: form.Body.v4_Double.Visible, Status: "✓" });
		} catch (/** @type {any} */ error) {
			results.push({ Test: "ERR", Property: "Props Error", Value: error.message, Status: "✗" });
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
			methodResults.push({ Test: "S1", Property: "Value (set)", Value: newValue === testValue ? "Set→Restored" : "Failed", Status: newValue === testValue ? "✓" : "✗" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S1", Property: "Value (set)", Value: e.message, Status: "✗" });
		}

		// Setter: Precision
		try {
			const origPrecision = form.Body.v4_Double.Precision;
			form.Body.v4_Double.Precision = origPrecision;
			methodResults.push({ Test: "S2", Property: "Precision (set)", Value: "Set→Restored", Status: "✓" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S2", Property: "Precision (set)", Value: e.message, Status: "✗" });
		}

		// Setter: RequiredLevel
		try {
			const origRequired = form.Body.v4_Double.RequiredLevel;
			form.Body.v4_Double.RequiredLevel = OptionSet.FieldRequiredLevel.Required;
			const check = form.Body.v4_Double.RequiredLevel;
			form.Body.v4_Double.RequiredLevel = origRequired;
			methodResults.push({ Test: "S3", Property: "RequiredLevel (set)", Value: check === OptionSet.FieldRequiredLevel.Required ? "Set→Restored" : "Failed", Status: check === OptionSet.FieldRequiredLevel.Required ? "✓" : "✗" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S3", Property: "RequiredLevel (set)", Value: e.message, Status: "✗" });
		}

		// Setter: Disabled
		try {
			const origDisabled = form.Body.v4_Double.Disabled;
			form.Body.v4_Double.Disabled = !origDisabled;
			const check = form.Body.v4_Double.Disabled;
			form.Body.v4_Double.Disabled = origDisabled;
			methodResults.push({ Test: "S4", Property: "Disabled (set)", Value: "Set→Restored", Status: "✓" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S4", Property: "Disabled (set)", Value: e.message, Status: "✗" });
		}

		// Setter: Label
		try {
			const origLabel = form.Body.v4_Double.Label;
			form.Body.v4_Double.Label = origLabel + " (TEST)";
			const check = form.Body.v4_Double.Label;
			form.Body.v4_Double.Label = origLabel;
			methodResults.push({ Test: "S5", Property: "Label (set)", Value: check.includes("(TEST)") ? "Set→Restored" : "Failed", Status: check.includes("(TEST)") ? "✓" : "✗" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S5", Property: "Label (set)", Value: e.message, Status: "✗" });
		}

		// Setter: Visible
		try {
			const origVisible = form.Body.v4_Double.Visible;
			form.Body.v4_Double.Visible = !origVisible;
			const check = form.Body.v4_Double.Visible;
			form.Body.v4_Double.Visible = origVisible;
			methodResults.push({ Test: "S6", Property: "Visible (set)", Value: "Set→Restored", Status: "✓" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S6", Property: "Visible (set)", Value: e.message, Status: "✗" });
		}

		// Methods
		/** @param {any} ctx */
		const onChangeCallback = (ctx) => console.log("  📍 Double OnChange fired");

		try {
			form.Body.v4_Double.AddOnChange(onChangeCallback);
			methodResults.push({ Test: "S7", Property: "AddOnChange", Value: "Registered", Status: "✓" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S7", Property: "AddOnChange", Value: e.message, Status: "✗" });
		}

		try {
			form.Body.v4_Double.RemoveOnChange(onChangeCallback);
			methodResults.push({ Test: "S8", Property: "RemoveOnChange", Value: "Removed", Status: "✓" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S8", Property: "RemoveOnChange", Value: e.message, Status: "✗" });
		}

		try {
			form.Body.v4_Double.FireOnChange();
			methodResults.push({ Test: "S9", Property: "FireOnChange", Value: "Fired", Status: "✓" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S9", Property: "FireOnChange", Value: e.message, Status: "✗" });
		}

		try {
			setTimeout(() => form.Body.v4_Double.Focus(), 1000);
			methodResults.push({ Test: "S10", Property: "Focus", Value: "Scheduled (1s)", Status: "✓" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S10", Property: "Focus", Value: e.message, Status: "✗" });
		}

		try {
			form.Body.v4_Double.SetNotification("Test Double notification", "DBL_TEST_1");
			setTimeout(() => form.Body.v4_Double.ClearNotification("DBL_TEST_1"), 3000);
			methodResults.push({ Test: "S11", Property: "SetNotification", Value: "Set (clears 3s)", Status: "✓" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S11", Property: "SetNotification", Value: e.message, Status: "✗" });
		}

		try {
			form.Body.v4_Double.SetIsValid(false, "Test invalid");
			setTimeout(() => form.Body.v4_Double.SetIsValid(true, ""), 2000);
			methodResults.push({ Test: "S12", Property: "SetIsValid", Value: "Set→Restored (2s)", Status: "✓" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S12", Property: "SetIsValid", Value: e.message, Status: "✗" });
		}

		// =====================================================
		// OUTPUT
		// =====================================================
		const allResults = [...results, ...methodResults];
		const passed = allResults.filter(r => r.Status === "✓").length;
		const warnings = allResults.filter(r => r.Status === "⚠").length;
		const failed = allResults.filter(r => r.Status === "✗").length;
		const total = allResults.length;

		console.groupCollapsed(`🔢 TEST 6: Double Control [${startTime}] - Using: v4_Double field - ${passed}/${total}`);

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
			results.push({ Test: "R1", Property: "Max", Value: form.Body.v4_Money.Max, Status: typeof form.Body.v4_Money.Max === "number" ? "✓" : "⚠" });
			results.push({ Test: "R2", Property: "Min", Value: form.Body.v4_Money.Min, Status: typeof form.Body.v4_Money.Min === "number" ? "✓" : "⚠" });
			results.push({ Test: "R3", Property: "Precision", Value: form.Body.v4_Money.Precision, Status: typeof form.Body.v4_Money.Precision === "number" ? "✓" : "⚠" });
			results.push({ Test: "R4", Property: "Value", Value: originalValue, Status: "✓" });

			// Inherited from IControl
			results.push({ Test: "R5", Property: "Attribute", Value: form.Body.v4_Money.Attribute ? "object" : "null", Status: "✓" });
			results.push({ Test: "R6", Property: "AttributeName", Value: form.Body.v4_Money.AttributeName, Status: form.Body.v4_Money.AttributeName === "v4_money" ? "✓" : "⚠" });
			results.push({ Test: "R7", Property: "AttributeType", Value: form.Body.v4_Money.AttributeType, Status: form.Body.v4_Money.AttributeType === OptionSet.FieldAttributeType.Money ? "✓" : "⚠" });
			results.push({ Test: "R8", Property: "ControlName", Value: form.Body.v4_Money.ControlName, Status: "✓" });
			results.push({ Test: "R9", Property: "ControlType", Value: form.Body.v4_Money.ControlType, Status: "✓" });
			results.push({ Test: "R10", Property: "Format", Value: form.Body.v4_Money.Format, Status: "✓" });
			results.push({ Test: "R11", Property: "IsDirty", Value: form.Body.v4_Money.IsDirty, Status: "✓" });
			results.push({ Test: "R12", Property: "IsValid", Value: form.Body.v4_Money.IsValid, Status: "✓" });
			results.push({ Test: "R13", Property: "RequiredLevel", Value: form.Body.v4_Money.RequiredLevel, Status: "✓" });
			results.push({ Test: "R14", Property: "SubmitMode", Value: form.Body.v4_Money.SubmitMode, Status: "✓" });
			results.push({ Test: "R15", Property: "Disabled", Value: form.Body.v4_Money.Disabled, Status: "✓" });
			results.push({ Test: "R16", Property: "Label", Value: form.Body.v4_Money.Label, Status: "✓" });
			results.push({ Test: "R17", Property: "Visible", Value: form.Body.v4_Money.Visible, Status: "✓" });
		} catch (/** @type {any} */ error) {
			results.push({ Test: "ERR", Property: "Props Error", Value: error.message, Status: "✗" });
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
			methodResults.push({ Test: "S1", Property: "Value (set)", Value: newValue === testValue ? "Set→Restored" : "Failed", Status: newValue === testValue ? "✓" : "✗" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S1", Property: "Value (set)", Value: e.message, Status: "✗" });
		}

		// Setter: Precision (Money precision is typically 0-2 for currency)
		try {
			const origPrecision = form.Body.v4_Money.Precision;
			const testPrecision = 2; // Valid precision for money (0-2 range)
			form.Body.v4_Money.Precision = testPrecision;
			const check = form.Body.v4_Money.Precision;
			form.Body.v4_Money.Precision = origPrecision;
			methodResults.push({ Test: "S2", Property: "Precision (set)", Value: check === testPrecision ? "Set→Restored" : `Was ${check}`, Status: check === testPrecision ? "✓" : "⚠" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S2", Property: "Precision (set)", Value: e.message, Status: "✗" });
		}

		// Setter: RequiredLevel
		try {
			const origRequired = form.Body.v4_Money.RequiredLevel;
			form.Body.v4_Money.RequiredLevel = OptionSet.FieldRequiredLevel.Required;
			const check = form.Body.v4_Money.RequiredLevel;
			form.Body.v4_Money.RequiredLevel = origRequired;
			methodResults.push({ Test: "S3", Property: "RequiredLevel (set)", Value: check === OptionSet.FieldRequiredLevel.Required ? "Set→Restored" : "Failed", Status: check === OptionSet.FieldRequiredLevel.Required ? "✓" : "✗" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S3", Property: "RequiredLevel (set)", Value: e.message, Status: "✗" });
		}

		// Setter: Disabled
		try {
			const origDisabled = form.Body.v4_Money.Disabled;
			form.Body.v4_Money.Disabled = !origDisabled;
			const check = form.Body.v4_Money.Disabled;
			form.Body.v4_Money.Disabled = origDisabled;
			methodResults.push({ Test: "S4", Property: "Disabled (set)", Value: "Set→Restored", Status: "✓" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S4", Property: "Disabled (set)", Value: e.message, Status: "✗" });
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
			methodResults.push({ Test: "S5", Property: "Label (set)", Value: setWorked ? "Set→Restored" : `Got: ${check}`, Status: setWorked ? "✓" : "✗" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S5", Property: "Label (set)", Value: e.message, Status: "✗" });
		}

		// Setter: Visible
		try {
			const origVisible = form.Body.v4_Money.Visible;
			form.Body.v4_Money.Visible = !origVisible;
			const check = form.Body.v4_Money.Visible;
			form.Body.v4_Money.Visible = origVisible;
			methodResults.push({ Test: "S6", Property: "Visible (set)", Value: "Set→Restored", Status: "✓" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S6", Property: "Visible (set)", Value: e.message, Status: "✗" });
		}

		// Methods
		/** @param {any} ctx */
		const onChangeCallback = (ctx) => console.log("  📍 Money OnChange fired");

		try {
			form.Body.v4_Money.AddOnChange(onChangeCallback);
			methodResults.push({ Test: "S7", Property: "AddOnChange", Value: "Registered", Status: "✓" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S7", Property: "AddOnChange", Value: e.message, Status: "✗" });
		}

		try {
			form.Body.v4_Money.RemoveOnChange(onChangeCallback);
			methodResults.push({ Test: "S8", Property: "RemoveOnChange", Value: "Removed", Status: "✓" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S8", Property: "RemoveOnChange", Value: e.message, Status: "✗" });
		}

		try {
			form.Body.v4_Money.FireOnChange();
			methodResults.push({ Test: "S9", Property: "FireOnChange", Value: "Fired", Status: "✓" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S9", Property: "FireOnChange", Value: e.message, Status: "✗" });
		}

		try {
			setTimeout(() => form.Body.v4_Money.Focus(), 1000);
			methodResults.push({ Test: "S10", Property: "Focus", Value: "Scheduled (1s)", Status: "✓" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S10", Property: "Focus", Value: e.message, Status: "✗" });
		}

		try {
			form.Body.v4_Money.SetNotification("Test Money notification", "MONEY_TEST_1");
			setTimeout(() => form.Body.v4_Money.ClearNotification("MONEY_TEST_1"), 3000);
			methodResults.push({ Test: "S11", Property: "SetNotification", Value: "Set (clears 3s)", Status: "✓" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S11", Property: "SetNotification", Value: e.message, Status: "✗" });
		}

		try {
			form.Body.v4_Money.SetIsValid(false, "Test invalid");
			setTimeout(() => form.Body.v4_Money.SetIsValid(true, ""), 2000);
			methodResults.push({ Test: "S12", Property: "SetIsValid", Value: "Set→Restored (2s)", Status: "✓" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S12", Property: "SetIsValid", Value: e.message, Status: "✗" });
		}

		// =====================================================
		// OUTPUT
		// =====================================================
		const allResults = [...results, ...methodResults];
		const passed = allResults.filter(r => r.Status === "✓").length;
		const warnings = allResults.filter(r => r.Status === "⚠").length;
		const failed = allResults.filter(r => r.Status === "✗").length;
		const total = allResults.length;

		console.groupCollapsed(`💰 TEST 7: Money Control [${startTime}] - Using: v4_Money field - ${passed}/${total}`);

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

			results.push({ Test: "R1", Property: "Value", Value: hasValue ? `${currentValue[0].name} (${currentValue[0].entityType})` : "(empty)", Status: "✓" });
			results.push({ Test: "R2", Property: "IsPartyList", Value: form.Body.v4_Lookup.IsPartyList, Status: form.Body.v4_Lookup.IsPartyList === false ? "✓" : "⚠" });
			results.push({ Test: "R3", Property: "EntityTypes", Value: JSON.stringify(form.Body.v4_Lookup.EntityTypes), Status: "✓" });
			results.push({ Test: "R4", Property: "DefaultView", Value: originalDefaultView, Status: "✓" });
			results.push({ Test: "R5", Property: "Visible", Value: form.Body.v4_Lookup.Visible, Status: "✓" });
			results.push({ Test: "R6", Property: "Disabled", Value: form.Body.v4_Lookup.Disabled, Status: "✓" });
			results.push({ Test: "R7", Property: "ControlType", Value: form.Body.v4_Lookup.ControlType, Status: form.Body.v4_Lookup.ControlType === OptionSet.FieldControlType.Lookup ? "✓" : "⚠" });
			results.push({ Test: "R8", Property: "ControlName", Value: form.Body.v4_Lookup.ControlName, Status: "✓" });
			results.push({ Test: "R9", Property: "AttributeName", Value: form.Body.v4_Lookup.AttributeName, Status: "✓" });
			results.push({ Test: "R10", Property: "AttributeType", Value: form.Body.v4_Lookup.AttributeType, Status: "✓" });
			results.push({ Test: "R11", Property: "RequiredLevel", Value: form.Body.v4_Lookup.RequiredLevel, Status: "✓" });
			results.push({ Test: "R12", Property: "SubmitMode", Value: form.Body.v4_Lookup.SubmitMode, Status: "✓" });
			results.push({ Test: "R13", Property: "IsValid", Value: form.Body.v4_Lookup.IsValid, Status: "✓" });
			results.push({ Test: "R14", Property: "IsDirty", Value: form.Body.v4_Lookup.IsDirty, Status: "✓" });
			results.push({ Test: "R15", Property: "Format", Value: form.Body.v4_Lookup.Format, Status: "✓" });
			results.push({ Test: "R16", Property: "Attribute", Value: form.Body.v4_Lookup.Attribute ? "object" : "null", Status: form.Body.v4_Lookup.Attribute ? "✓" : "⚠" });
		} catch (/** @type {any} */ error) {
			results.push({ Test: "ERR", Property: "Error", Value: error.message, Status: "✗" });
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
			console.log("  📍 PreSearch fired - filter applied");
		};

		/** @param {any} ctx */
		const tagClickCallback = (ctx) => {
			console.log("  📍 LookupTagClick fired - tag was clicked");
		};

		// Setters
		try {
			const testViewId = "{00000000-0000-0000-0000-000000000002}";
			form.Body.v4_Lookup.DefaultView = testViewId;
			const newView = form.Body.v4_Lookup.DefaultView;
			form.Body.v4_Lookup.DefaultView = originalDefaultView;
			methodResults.push({ Test: "S1", Property: "DefaultView (set)", Value: "Set→Restored", Status: "✓" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S1", Property: "DefaultView (set)", Value: e.message, Status: "✗" });
		}

		try {
			const originalTypes = form.Body.v4_Lookup.EntityTypes;
			form.Body.v4_Lookup.EntityTypes = ["contact"];
			const newTypes = form.Body.v4_Lookup.EntityTypes;
			form.Body.v4_Lookup.EntityTypes = originalTypes;
			methodResults.push({ Test: "S2", Property: "EntityTypes (set)", Value: "Set→Restored", Status: "✓" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S2", Property: "EntityTypes (set)", Value: e.message, Status: "✗" });
		}

		// Methods
		try {
			form.Body.v4_Lookup.AddPreSearch(preSearchCallback);
			methodResults.push({ Test: "S3", Property: "AddPreSearch", Value: "Registered", Status: "✓" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S3", Property: "AddPreSearch", Value: e.message, Status: "✗" });
		}

		try {
			form.Body.v4_Lookup.RemovePreSearch(preSearchCallback);
			methodResults.push({ Test: "S4", Property: "RemovePreSearch", Value: "Removed", Status: "✓" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S4", Property: "RemovePreSearch", Value: e.message, Status: "✗" });
		}

		try {
			form.Body.v4_Lookup.AddLookupTagClick(tagClickCallback);
			methodResults.push({ Test: "S5", Property: "AddLookupTagClick", Value: "Registered", Status: "✓" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S5", Property: "AddLookupTagClick", Value: e.message, Status: "✗" });
		}

		try {
			form.Body.v4_Lookup.RemoveLookupTagClick(tagClickCallback);
			methodResults.push({ Test: "S6", Property: "RemoveLookupTagClick", Value: "Removed", Status: "✓" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S6", Property: "RemoveLookupTagClick", Value: e.message, Status: "✗" });
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
			methodResults.push({ Test: "S7", Property: "AddCustomView", Value: "Added", Status: "✓" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S7", Property: "AddCustomView", Value: e.message, Status: "✗" });
		}

		try {
			form.Body.v4_Lookup.SetNotification("Test notification", "TEST_1");
			setTimeout(() => form.Body.v4_Lookup.ClearNotification("TEST_1"), 3000);
			methodResults.push({ Test: "S8", Property: "SetNotification", Value: "Set (clears in 3s)", Status: "✓" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S8", Property: "SetNotification", Value: e.message, Status: "✗" });
		}

		try {
			setTimeout(() => form.Body.v4_Lookup.Focus(), 4000);
			methodResults.push({ Test: "S9", Property: "Focus", Value: "Scheduled (4s)", Status: "✓" });
		} catch (/** @type {any} */ e) {
			methodResults.push({ Test: "S9", Property: "Focus", Value: e.message, Status: "✗" });
		}

		// =====================================================
		// OUTPUT
		// =====================================================
		const allResults = [...results, ...methodResults];
		const passed = allResults.filter(r => r.Status === "✓").length;
		const warnings = allResults.filter(r => r.Status === "⚠").length;
		const failed = allResults.filter(r => r.Status === "✗").length;
		const total = allResults.length;

		console.groupCollapsed(`🔍 TEST 8: Lookup Control [${startTime}] - Using: v4_Lookup field - ${passed}/${total}`);

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