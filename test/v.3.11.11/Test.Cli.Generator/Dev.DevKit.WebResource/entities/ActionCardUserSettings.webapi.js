'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.ActionCardUserSettingsApi = function (e) {
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
		var _actioncardusersettings = {
			ActionCardUserSettingsId: { a: 'actioncardusersettingsid' },
			BoolCardOption: { a: 'boolcardoption' },
			CardType: { a: 'cardtype' },
			CardTypeId: { b: 'cardtypeid', a: '_cardtypeid_value', c: 'cardtypes', d: 'cardtype' },
			IntCardOption: { a: 'intcardoption' },
			IsEnabled: { a: 'isenabled' },
			OwnerId_systemuser: { b: 'ownerid', a: '_ownerid_value', c: 'systemusers', d: 'systemuser' },
			OwnerId_team: { b: 'ownerid', a: '_ownerid_value', c: 'teams', d: 'team' },
			OwningBusinessUnit: { b: 'owningbusinessunit', a: '_owningbusinessunit_value', c: 'businessunits', d: 'businessunit', r: true },
			OwningTeam: { b: 'owningteam', a: '_owningteam_value', c: 'teams', d: 'team', r: true },
			OwningUser: { b: 'owninguser', a: '_owninguser_value', c: 'systemusers', d: 'systemuser', r: true },
			StringCardOption: { a: 'stringcardoption' },
			VersionNumber: { a: 'versionnumber', r: true }
		};
		if (e === undefined) e = {};
		var u = {};
		var actioncardusersettings = {};
		actioncardusersettings.ODataEntity = e;
		actioncardusersettings.FormattedValue = {};
		for (var field in _actioncardusersettings) {
			var a = _actioncardusersettings[field].a;
			var b = _actioncardusersettings[field].b;
			var c = _actioncardusersettings[field].c;
			var d = _actioncardusersettings[field].d;
			var g = _actioncardusersettings[field].g;
			var r = _actioncardusersettings[field].r;
			webApiField(actioncardusersettings, field, e, a, b, c, d, r, u, g);
		}
		actioncardusersettings.Entity = u;
		actioncardusersettings.EntityName = 'actioncardusersettings';
		actioncardusersettings.EntityCollectionName = 'actioncardusersettingses';
		actioncardusersettings['@odata.etag'] = e['@odata.etag'];
		actioncardusersettings.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		actioncardusersettings.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return actioncardusersettings;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.ActionCardUserSettings = {
		OwnerIdType : {
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