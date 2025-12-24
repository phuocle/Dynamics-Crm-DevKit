//@ts-check
///<reference path="Account.d.ts" />
"use strict";
var formAccount = (function () {
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
			// @ts-ignore - AttributeType comparison is valid at runtime
			results.push({ Test: "R3", Property: "AttributeType", Value: form.Body.v4_String.AttributeType, Status: form.Body.v4_String.AttributeType === "string" ? "✓" : "⚠" });
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