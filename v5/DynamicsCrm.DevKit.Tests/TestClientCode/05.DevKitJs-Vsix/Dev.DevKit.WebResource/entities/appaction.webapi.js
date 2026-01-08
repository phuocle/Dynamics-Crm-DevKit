'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	DevKit.appactionApi = function (e) {
		const f = '@OData.Community.Display.V1.FormattedValue';
		function webApiField(obj, field, entity, logicalName, schemaName, entityLogicalCollectionName, entityLogicalName, readOnly, upsertEntity, type) {
			const l = '@Microsoft.Dynamics.CRM.lookuplogicalname';
			const getFormattedValue = function () {
				if (entity?.[logicalName + f] === undefined || entity?.[logicalName + f] === null) {
					return '';
				}
				if (entityLogicalCollectionName !== undefined && entityLogicalCollectionName.length > 0) {
					if (entity?.[logicalName + l] === entityLogicalName) {
						return entity?.[logicalName + f];
					}
					return '';
				}
				if (type === 'MultiOptionSet') {
					return entity?.[logicalName + f]?.toString()?.split(';').map(function (item) { return item?.trim(); });
				}
				return entity?.[logicalName + f];
			};
			const getValue = function () {
				if (entity?.[logicalName] === undefined || entity?.[logicalName] === null) {
					return null;
				}
				if (entityLogicalCollectionName !== undefined && entityLogicalCollectionName.length > 0) {
					if (entity?.[logicalName + l] === undefined || entity?.[logicalName + l] === entityLogicalName) {
						return returnGet(entity?.[logicalName], type);
					}
					return null;
				}
				if (type === 'MultiOptionSet') {
					return entity?.[logicalName]?.toString()?.split(',').map(function (item) { return parseInt(item, 10); });
				}
				return returnGet(entity?.[logicalName], type);
			};
			const returnGet = function (data, type) {
				if (data === null || data === undefined) return null;
				if (type === null || type === undefined) return data;
				const typeParsers = {
					DateTime: function (value) {
						if (value === null || value === undefined) return null;
						if (value instanceof Date) return isNaN(value.getTime()) ? null : value;
						const trimmedString = String(value).trim();
						if (trimmedString === '') return null;
						const timestamp = Date.parse(trimmedString);
						if (isNaN(timestamp)) return null;
						const parsedDate = new Date(timestamp);
						return isNaN(parsedDate.getTime()) ? null : parsedDate;
					},
					Integer: function (value) {
						const parsed = parseInt(value, 10);
						return isNaN(parsed) ? null : parsed;
					},
					Number: function (value) {
						const parsed = Number(value);
						return isNaN(parsed) ? null : parsed;
					},
					Boolean: function (value) {
						if (value === null || value === undefined) return null;
						if (typeof value === 'boolean') return value;
						if (typeof value === 'number') return value !== 0;
						const stringValue = String(value).trim().toLowerCase();
						const trueValues = ["true", "1", "yes", "y"];
						const falseValues = ["false", "0", "no", "n"];
						if (trueValues.includes(stringValue)) return true;
						if (falseValues.includes(stringValue)) return false;
						return false;
					}
				};
				const parser = typeParsers[type];
				return parser ? parser(data) : data;
			};
			const setValue = function (value) {
				if (type === 'MultiOptionSet') value = value?.join(',');
				if (entityLogicalCollectionName !== undefined && entityLogicalCollectionName?.length > 0) {
					if (value === null) {
						upsertEntity[schemaName + '@odata.bind'] = null;
					}
					else {
						const cleanValue = typeof value === 'string' ? value.replace(/[{}]/g, '') : value;
						upsertEntity[schemaName + '@odata.bind'] = '/' + entityLogicalCollectionName + '(' + cleanValue + ')';
					}
				} else {
					upsertEntity[logicalName] = value;
				}
				entity[logicalName] = value;
			};
			Object.defineProperty(obj.FormattedValue, field, {
				get: getFormattedValue
			});
			if (readOnly) {
				Object.defineProperty(obj, field, {
					get: getValue
				});
			}
			else {
				Object.defineProperty(obj, field, {
					get: getValue,
					set: setValue
				});
			}
		}
		const _appaction = {
			appactionId: { a: 'appactionid' },
			AppModuleId: { b: 'appmoduleid', a: '_appmoduleid_value', c: 'appmodules', d: 'appmodule' },
			ButtonAccessibilityText: { a: 'buttonaccessibilitytext' },
			ButtonLabelText: { a: 'buttonlabeltext' },
			ButtonSequencePriority: { a: 'buttonsequencepriority', g: 'Number' },
			ButtonTooltipDescription: { a: 'buttontooltipdescription' },
			ButtonTooltipTitle: { a: 'buttontooltiptitle' },
			ClientType: { a: 'clienttype', g: 'MultiOptionSet' },
			ComponentIdUnique: { a: 'componentidunique', r: true },
			ComponentState: { a: 'componentstate', r: true, g: 'Integer' },
			Context: { a: 'context', g: 'Integer' },
			ContextEntity: { b: 'contextentity', a: '_contextentity_value', c: 'entities', d: 'entity' },
			ContextValue: { a: 'contextvalue' },
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true, g: 'DateTime' },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			FontIcon: { a: 'fonticon' },
			GroupTitle: { a: 'grouptitle' },
			Hidden: { a: 'hidden', g: 'Boolean' },
			IconWebResourceId: { b: 'iconwebresourceid', a: '_iconwebresourceid_value', c: 'webresources', d: 'webresource' },
			ImportSequenceNumber: { a: 'importsequencenumber', g: 'Integer' },
			IsCustomizable: { a: 'iscustomizable' },
			IsDisabled: { a: 'isdisabled', g: 'Boolean' },
			isGroupTitleHidden: { a: 'isgrouptitlehidden', g: 'Boolean' },
			IsManaged: { a: 'ismanaged', r: true, g: 'Boolean' },
			Location: { a: 'location', g: 'Integer' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true, g: 'DateTime' },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			name: { a: 'name' },
			OnClickEventFormulaComponentLibrary: { a: 'onclickeventformulacomponentlibrary' },
			OnClickEventFormulaComponentLibraryId: { b: 'onclickeventformulacomponentlibraryid', a: '_onclickeventformulacomponentlibraryid_value', c: 'canvasapps', d: 'canvasapp' },
			OnClickEventFormulaComponentName: { a: 'onclickeventformulacomponentname' },
			OnClickEventFormulaFunctionName: { a: 'onclickeventformulafunctionname' },
			OnClickEventJavaScriptFunctionName: { a: 'onclickeventjavascriptfunctionname' },
			OnClickEventJavaScriptParameters: { a: 'onclickeventjavascriptparameters' },
			OnClickEventJavaScriptWebResourceId: { b: 'onclickeventjavascriptwebresourceid', a: '_onclickeventjavascriptwebresourceid_value', c: 'webresources', d: 'webresource' },
			OnClickEventType: { a: 'onclickeventtype', g: 'Integer' },
			OrganizationId: { b: 'organizationid', a: '_organizationid_value', c: 'organizations', d: 'organization', r: true },
			Origin: { a: 'origin', g: 'Integer' },
			OverriddenCreatedOn_UtcDateOnly: { a: 'overriddencreatedon', g: 'DateTime' },
			OverwriteTime_UtcDateAndTime: { a: 'overwritetime', r: true, g: 'DateTime' },
			ParentAppActionId: { b: 'parentappactionid', a: '_parentappactionid_value', c: 'appactions', d: 'appaction' },
			Sequence: { a: 'sequence', g: 'Number' },
			SolutionId: { a: 'solutionid', r: true },
			statecode: { a: 'statecode', g: 'Integer' },
			statuscode: { a: 'statuscode', g: 'Integer' },
			SupportingSolutionId: { a: 'supportingsolutionid', r: true },
			TimeZoneRuleVersionNumber: { a: 'timezoneruleversionnumber', g: 'Integer' },
			Type: { a: 'type', g: 'Integer' },
			UniqueName: { a: 'uniquename' },
			UTCConversionTimeZoneCode: { a: 'utcconversiontimezonecode', g: 'Integer' },
			VersionNumber: { a: 'versionnumber', r: true, g: 'Integer' },
			VisibilityFormulaComponentLibrary: { a: 'visibilityformulacomponentlibrary' },
			VisibilityFormulaComponentLibraryId: { b: 'visibilityformulacomponentlibraryid', a: '_visibilityformulacomponentlibraryid_value', c: 'canvasapps', d: 'canvasapp' },
			VisibilityFormulaComponentName: { a: 'visibilityformulacomponentname' },
			VisibilityFormulaFunctionName: { a: 'visibilityformulafunctionname' },
			VisibilityType: { a: 'visibilitytype', g: 'Integer' }
		};
		if (e === undefined) e = {};
		const u = {};
		const appaction = {};
		appaction.ODataEntity = e;
		appaction.FormattedValue = {};
		for (const field in _appaction) {
			const fieldConfig = _appaction[field];
			webApiField(appaction, field, e, fieldConfig.a, fieldConfig.b, fieldConfig.c, fieldConfig.d, fieldConfig.r, u, fieldConfig.g);
		}
		appaction.Entity = u;
		appaction.EntityName = 'appaction';
		appaction.EntityCollectionName = 'appactions';
		appaction['@odata.etag'] = e?.['@odata.etag'];
		appaction.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e?.[alias] === undefined || e?.[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e?.[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e?.[alias];
		};
		appaction.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e?.[alias + f] === undefined || e?.[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e?.[alias + f]?.toString()?.split(';').map(function (item) { return item?.trim(); });
			}
			return e?.[alias + f];
		};
		return appaction;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.appaction = {
		ClientType: { Browser: 0, Mail_App: 2, Mobile: 1 },
		ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
		Context: { All: 0, Entity: 1 },
		Location: { Associated_Grid: 3, Dashboard: 6, Form: 0, Global_Header: 5, Main_Grid: 1, Quick_Form: 4, Sub_Grid: 2 },
		OnClickEventType: { Formula: 1, JavaScript: 2, None: 0 },
		Origin: { Default: 0, Enhanced_Migrated: 2, Migrated: 1 },
		statecode: { Active: 0, Inactive: 1 },
		statuscode: { Active: 1, Inactive: 2 },
		Type: { Dropdown_Button: 1, Group: 3, Split_Button: 2, Standard_Button: 0 },
		VisibilityType: { Classic_Rules: 2, Formula: 1, None: 0 },
		RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
	};
})(OptionSet || (OptionSet = {}));