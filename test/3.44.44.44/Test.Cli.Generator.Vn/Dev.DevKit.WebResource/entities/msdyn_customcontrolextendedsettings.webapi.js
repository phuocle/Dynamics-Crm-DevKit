'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdyn_customcontrolextendedsettingsApi = function (e) {
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
		var _msdyn_customcontrolextendedsettings = {
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdyn_copilothub_settings: { a: 'msdyn_copilothub_settings' },
			msdyn_customcontrolextendedsettingsId: { a: 'msdyn_customcontrolextendedsettingsid' },
			msdyn_name: { a: 'msdyn_name' },
			msdyn_rte_userpersonalizationsettings: { a: 'msdyn_rte_userpersonalizationsettings' },
			msdyn_timeline_displaylayoutoption: { a: 'msdyn_timeline_displaylayoutoption' },
			msdyn_timelineWall_bookmarks: { a: 'msdyn_timelineWall_bookmarks' },
			msdyn_timelineWall_isAutoExpanded: { a: 'msdyn_timelineWall_isAutoExpanded' },
			msdyn_timelineWall_isFilterPaneOpen: { a: 'msdyn_timelineWall_isFilterPaneOpen' },
			msdyn_timelineWall_isSortOrderNewerToOlder: { a: 'msdyn_timelineWall_isSortOrderNewerToOlder' },
			msdyn_timelineWall_searchTermApplied: { a: 'msdyn_timelineWall_searchTermApplied' },
			msdyn_timelineWall_userFilters: { a: 'msdyn_timelineWall_userFilters' },
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
		var msdyn_customcontrolextendedsettings = {};
		msdyn_customcontrolextendedsettings.ODataEntity = e;
		msdyn_customcontrolextendedsettings.FormattedValue = {};
		for (var field in _msdyn_customcontrolextendedsettings) {
			var a = _msdyn_customcontrolextendedsettings[field].a;
			var b = _msdyn_customcontrolextendedsettings[field].b;
			var c = _msdyn_customcontrolextendedsettings[field].c;
			var d = _msdyn_customcontrolextendedsettings[field].d;
			var g = _msdyn_customcontrolextendedsettings[field].g;
			var r = _msdyn_customcontrolextendedsettings[field].r;
			webApiField(msdyn_customcontrolextendedsettings, field, e, a, b, c, d, r, u, g);
		}
		msdyn_customcontrolextendedsettings.Entity = u;
		msdyn_customcontrolextendedsettings.EntityName = 'msdyn_customcontrolextendedsettings';
		msdyn_customcontrolextendedsettings.EntityCollectionName = 'msdyn_customcontrolextendedsettingses';
		msdyn_customcontrolextendedsettings['@odata.etag'] = e['@odata.etag'];
		msdyn_customcontrolextendedsettings.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdyn_customcontrolextendedsettings.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdyn_customcontrolextendedsettings;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_customcontrolextendedsettings = {
		statecode : {
			Hien_hoat: 0,
			Khong_hoat_dong: 1
		},
		statuscode : {
			Hien_hoat: 1,
			Khong_hoat_dong: 2
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