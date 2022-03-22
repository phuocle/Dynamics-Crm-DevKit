'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdyusd_toolbarbuttonApi = function (e) {
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
					value = value.replace('{', '').replace('}', '');
					upsertEntity[schemaName + '@odata.bind'] = '/' + entityLogicalCollectionName + '(' + value + ')';
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
		var _msdyusd_toolbarbutton = {
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdyusd_Buttons: { b: 'msdyusd_Buttons', a: '_msdyusd_buttons_value', c: 'msdyusd_toolbarbuttons', d: 'msdyusd_toolbarbutton' },
			msdyusd_ButtonText: { a: 'msdyusd_buttontext' },
			msdyusd_EnableCondition: { a: 'msdyusd_enablecondition' },
			msdyusd_EnabledCondition: { a: 'msdyusd_enabledcondition' },
			msdyusd_Image: { a: 'msdyusd_image' },
			msdyusd_name: { a: 'msdyusd_name' },
			msdyusd_order: { a: 'msdyusd_order' },
			msdyusd_ScriptCondition: { a: 'msdyusd_scriptcondition' },
			msdyusd_shortcutkey: { a: 'msdyusd_shortcutkey' },
			msdyusd_showtab: { b: 'msdyusd_showtab', a: '_msdyusd_showtab_value', c: 'uii_hostedapplications', d: 'uii_hostedapplication' },
			msdyusd_toolbarbuttonId: { a: 'msdyusd_toolbarbuttonid' },
			msdyusd_ToolbarId: { b: 'msdyusd_ToolbarId', a: '_msdyusd_toolbarid_value', c: 'msdyusd_toolbarstrips', d: 'msdyusd_toolbarstrip' },
			msdyusd_Tooltip: { a: 'msdyusd_tooltip' },
			msdyusd_VisibleCondition: { a: 'msdyusd_visiblecondition' },
			msdyusd_WebResourceUrl: { a: 'msdyusd_webresourceurl' },
			OverriddenCreatedOn_UtcDateOnly: { a: 'overriddencreatedon' },
			OwnerId_systemuser: { b: 'ownerid', a: '_ownerid_value', c: 'systemusers', d: 'systemuser' },
			OwnerId_team: { b: 'ownerid', a: '_ownerid_value', c: 'teams', d: 'team' },
			OwningBusinessUnit: { b: 'owningbusinessunit', a: '_owningbusinessunit_value', c: 'businessunits', d: 'businessunit', r: true },
			OwningTeam: { b: 'owningteam', a: '_owningteam_value', c: 'teams', d: 'team', r: true },
			OwningUser: { b: 'owninguser', a: '_owninguser_value', c: 'systemusers', d: 'systemuser', r: true },
			statecode: { a: 'statecode' },
			statuscode: { a: 'statuscode' },
			TimeZoneRuleVersionNumber: { a: 'timezoneruleversionnumber' },
			UTCConversionTimeZoneCode: { a: 'utcconversiontimezonecode' },
			VersionNumber: { a: 'versionnumber', r: true }
		};
		if (e === undefined) e = {};
		var u = {};
		var msdyusd_toolbarbutton = {};
		msdyusd_toolbarbutton.ODataEntity = e;
		msdyusd_toolbarbutton.FormattedValue = {};
		for (var field in _msdyusd_toolbarbutton) {
			var a = _msdyusd_toolbarbutton[field].a;
			var b = _msdyusd_toolbarbutton[field].b;
			var c = _msdyusd_toolbarbutton[field].c;
			var d = _msdyusd_toolbarbutton[field].d;
			var g = _msdyusd_toolbarbutton[field].g;
			var r = _msdyusd_toolbarbutton[field].r;
			webApiField(msdyusd_toolbarbutton, field, e, a, b, c, d, r, u, g);
		}
		msdyusd_toolbarbutton.Entity = u;
		msdyusd_toolbarbutton.EntityName = 'msdyusd_toolbarbutton';
		msdyusd_toolbarbutton.EntityCollectionName = 'msdyusd_toolbarbuttons';
		msdyusd_toolbarbutton['@odata.etag'] = e['@odata.etag'];
		msdyusd_toolbarbutton.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdyusd_toolbarbutton.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return EMPTY_STRING;
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdyusd_toolbarbutton;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyusd_toolbarbutton = {
		msdyusd_EnableCondition : {
			Always: 803750000,
			Customer_Session: 803750001,
			Script_Expression: 803750002
		},
		statecode : {
			Active: 0,
			Inactive: 1
		},
		statuscode : {
			Active: 1,
			Inactive: 2
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