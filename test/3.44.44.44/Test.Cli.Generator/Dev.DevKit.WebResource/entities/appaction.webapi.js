'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.appactionApi = function (e) {
		var f = '@OData.Community.Display.V1.FormattedValue';
		function webApiField(obj, field, entity, logicalName, schemaName, entityLogicalCollectionName, entityLogicalName, readOnly, upsertEntity, isMultiOptionSet) {
			var l = '@Microsoft.Dynamics.CRM.lookuplogicalname';
			var getFormattedValue = function () {
				if (entity[logicalName + f] === undefined || entity[logicalName + f] === null) {
					return '';
				}
				if (entityLogicalCollectionName !== undefined && entityLogicalCollectionName.length > 0) {
					if (entity[logicalName + l] === entityLogicalName) {
						return entity[logicalName + f];
					}
					return '';
				}
				if (isMultiOptionSet) {
					return entity[logicalName + f].toString().split(';').map(function (item) { return item.trim(); });
				}
				return entity[logicalName + f];
			};
			var getValue = function () {
				if (entity[logicalName] === undefined || entity[logicalName] === null) {
					return null;
				}
				if (entityLogicalCollectionName !== undefined && entityLogicalCollectionName.length > 0) {
					if (entity[logicalName + l] === undefined || entity[logicalName + l] === entityLogicalName) {
						return entity[logicalName];
					}
					return null;
				}
				if (isMultiOptionSet) {
					return entity[logicalName].toString().split(',').map(function (item) { return parseInt(item, 10); });
				}
				return entity[logicalName];
			};
			var setValue = function (value) {
				if (isMultiOptionSet) value = value.join(',');
				if (entityLogicalCollectionName !== undefined && entityLogicalCollectionName.length > 0) {
					if (value === null) {
						upsertEntity[schemaName + '@odata.bind'] = null;
					}
					else {
						value = value.replace('{', '').replace('}', '');
						upsertEntity[schemaName + '@odata.bind'] = '/' + entityLogicalCollectionName + '(' + value + ')';
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
		var _appaction = {
			appactionId: { a: 'appactionid' },
			AppModuleId: { b: 'appmoduleid', a: '_appmoduleid_value', c: 'appmodules', d: 'appmodule' },
			ButtonAccessibilityText: { a: 'buttonaccessibilitytext' },
			ButtonLabelText: { a: 'buttonlabeltext' },
			ButtonSequencePriority: { a: 'buttonsequencepriority' },
			ButtonTooltipDescription: { a: 'buttontooltipdescription' },
			ButtonTooltipTitle: { a: 'buttontooltiptitle' },
			ClientType: { a: 'clienttype', g: true },
			ComponentIdUnique: { a: 'componentidunique', r: true },
			ComponentState: { a: 'componentstate', r: true },
			Context: { a: 'context' },
			ContextEntity: { b: 'contextentity', a: '_contextentity_value', c: 'entities', d: 'entity' },
			ContextValue: { a: 'contextvalue' },
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			FontIcon: { a: 'fonticon' },
			GroupTitle: { a: 'grouptitle' },
			Hidden: { a: 'hidden' },
			IconWebResourceId: { b: 'iconwebresourceid', a: '_iconwebresourceid_value', c: 'webresources', d: 'webresource' },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			IsCustomizable: { a: 'iscustomizable' },
			IsDisabled: { a: 'isdisabled' },
			isGroupTitleHidden: { a: 'isgrouptitlehidden' },
			IsManaged: { a: 'ismanaged', r: true },
			Location: { a: 'location' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			name: { a: 'name' },
			OnClickEventFormulaComponentLibrary: { a: 'onclickeventformulacomponentlibrary' },
			OnClickEventFormulaComponentLibraryId: { b: 'onclickeventformulacomponentlibraryid', a: '_onclickeventformulacomponentlibraryid_value', c: 'canvasapps', d: 'canvasapp' },
			OnClickEventFormulaComponentName: { a: 'onclickeventformulacomponentname' },
			OnClickEventFormulaFunctionName: { a: 'onclickeventformulafunctionname' },
			OnClickEventJavaScriptFunctionName: { a: 'onclickeventjavascriptfunctionname' },
			OnClickEventJavaScriptParameters: { a: 'onclickeventjavascriptparameters' },
			OnClickEventJavaScriptWebResourceId: { b: 'onclickeventjavascriptwebresourceid', a: '_onclickeventjavascriptwebresourceid_value', c: 'webresources', d: 'webresource' },
			OnClickEventType: { a: 'onclickeventtype' },
			OrganizationId: { b: 'organizationid', a: '_organizationid_value', c: 'organizations', d: 'organization', r: true },
			Origin: { a: 'origin' },
			OverriddenCreatedOn_UtcDateOnly: { a: 'overriddencreatedon' },
			OverwriteTime_UtcDateAndTime: { a: 'overwritetime', r: true },
			ParentAppActionId: { b: 'parentappactionid', a: '_parentappactionid_value', c: 'appactions', d: 'appaction' },
			Sequence: { a: 'sequence' },
			SolutionId: { a: 'solutionid', r: true },
			statecode: { a: 'statecode' },
			statuscode: { a: 'statuscode' },
			SupportingSolutionId: { a: 'supportingsolutionid', r: true },
			TimeZoneRuleVersionNumber: { a: 'timezoneruleversionnumber' },
			Type: { a: 'type' },
			UniqueName: { a: 'uniquename' },
			UTCConversionTimeZoneCode: { a: 'utcconversiontimezonecode' },
			VersionNumber: { a: 'versionnumber', r: true },
			VisibilityFormulaComponentLibrary: { a: 'visibilityformulacomponentlibrary' },
			VisibilityFormulaComponentLibraryId: { b: 'visibilityformulacomponentlibraryid', a: '_visibilityformulacomponentlibraryid_value', c: 'canvasapps', d: 'canvasapp' },
			VisibilityFormulaComponentName: { a: 'visibilityformulacomponentname' },
			VisibilityFormulaFunctionName: { a: 'visibilityformulafunctionname' },
			VisibilityType: { a: 'visibilitytype' }
		};
		if (e === undefined) e = {};
		var u = {};
		var appaction = {};
		appaction.ODataEntity = e;
		appaction.FormattedValue = {};
		for (var field in _appaction) {
			var a = _appaction[field].a;
			var b = _appaction[field].b;
			var c = _appaction[field].c;
			var d = _appaction[field].d;
			var g = _appaction[field].g;
			var r = _appaction[field].r;
			webApiField(appaction, field, e, a, b, c, d, r, u, g);
		}
		appaction.Entity = u;
		appaction.EntityName = 'appaction';
		appaction.EntityCollectionName = 'appactions';
		appaction['@odata.etag'] = e['@odata.etag'];
		appaction.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		appaction.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return appaction;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.appaction = {
		ClientType : {
			Browser: 0,
			Mail_App: 2,
			Mobile: 1
		},
		ComponentState : {
			Deleted: 2,
			Deleted_Unpublished: 3,
			Published: 0,
			Unpublished: 1
		},
		Context : {
			All: 0,
			Entity: 1
		},
		Location : {
			Associated_Grid: 3,
			Dashboard: 6,
			Form: 0,
			Global_Header: 5,
			Main_Grid: 1,
			Quick_Form: 4,
			Sub_Grid: 2
		},
		OnClickEventType : {
			Formula: 1,
			JavaScript: 2,
			None: 0
		},
		Origin : {
			Default: 0,
			Enhanced_Migrated: 2,
			Migrated: 1
		},
		statecode : {
			Active: 0,
			Inactive: 1
		},
		statuscode : {
			Active: 1,
			Inactive: 2
		},
		Type : {
			Dropdown_Button: 1,
			Group: 3,
			Split_Button: 2,
			Standard_Button: 0
		},
		VisibilityType : {
			Classic_Rules: 2,
			Formula: 1,
			None: 0
		},
		RollupState : {
			NotCalculated: 0,
			Calculated: 1,
			OverflowError: 2,
			OtherError: 3,
			RetryLimitExceeded: 4,
			HierarchicalRecursionLimitReached: 5,
			LoopDetected: 6
		}
	};
})(OptionSet || (OptionSet = {}));