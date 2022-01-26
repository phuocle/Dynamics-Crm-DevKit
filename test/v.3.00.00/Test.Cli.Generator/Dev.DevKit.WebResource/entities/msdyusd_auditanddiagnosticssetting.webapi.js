'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdyusd_auditanddiagnosticssettingApi = function (e) {
		var EMPTY_STRING = '';
		var f = '@OData.Community.Display.V1.FormattedValue';
		function webApiField(entity, logicalName, schemaName, entityLogicalCollectionName, entityLogicalName, readOnly, upsertEntity, isMultiOptionSet) {
			var l = '@Microsoft.Dynamics.CRM.lookuplogicalname';
			var property = {};
			var getFormattedValue = function () {
				if (entity[logicalName + f] === undefined || entity[logicalName + f] === null) {
					return EMPTY_STRING;
				}
				if (entityLogicalCollectionName !== undefined && entityLogicalCollectionName.length > 0) {
					if (entity[logicalName + l] === entityLogicalName) {
						return entity[logicalName + f];
					}
					return EMPTY_STRING;
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
					value = value.replace('{', EMPTY_STRING).replace('}', EMPTY_STRING);
					upsertEntity[schemaName + '@odata.bind'] = '/' + entityLogicalCollectionName + '(' + value + ')';
				} else {
					upsertEntity[logicalName] = value;
				}
				entity[logicalName] = value;
			};
			Object.defineProperty(property, 'FormattedValue', {
				get: getFormattedValue
			});
			if (readOnly) {
				Object.defineProperty(property, 'Value', {
					get: getValue
				});
			}
			else {
				Object.defineProperty(property, 'Value', {
					get: getValue,
					set: setValue
				});
			}
			return property;
		}
		var msdyusd_auditanddiagnosticssetting = {
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdyusd_ATEnabled: { a: 'msdyusd_ATEnabled' },
			msdyusd_ATforActionCalls: { a: 'msdyusd_ATforActionCalls' },
			msdyusd_ATforAgentLogin: { a: 'msdyusd_ATforAgentLogin' },
			msdyusd_ATforAgentScripts: { a: 'msdyusd_ATforAgentScripts' },
			msdyusd_ATforCustomerSession: { a: 'msdyusd_ATforCustomerSession' },
			msdyusd_ATforEvents: { a: 'msdyusd_ATforEvents' },
			msdyusd_ATforHostedControl: { a: 'msdyusd_ATforHostedControl' },
			msdyusd_ATforSubActionCalls: { a: 'msdyusd_ATforSubActionCalls' },
			msdyusd_ATforUIIAction: { a: 'msdyusd_ATforUIIAction' },
			msdyusd_ATforWindowsNavRules: { a: 'msdyusd_ATforWindowsNavRules' },
			msdyusd_auditanddiagnosticssettingId: { a: 'msdyusd_auditanddiagnosticssettingid' },
			msdyusd_CacheSize: { a: 'msdyusd_CacheSize' },
			msdyusd_CrashDumpEnabled: { a: 'msdyusd_CrashDumpEnabled' },
			msdyusd_DGTEnabled: { a: 'msdyusd_DGTEnabled' },
			msdyusd_DGTVerbosityLevel: { a: 'msdyusd_DGTVerbosityLevel' },
			msdyusd_EnableCaching: { a: 'msdyusd_EnableCaching' },
			msdyusd_ExitMonitoringEnabled: { a: 'msdyusd_ExitMonitoringEnabled' },
			msdyusd_IsDefault: { a: 'msdyusd_isdefault' },
			msdyusd_LogsDirectory: { a: 'msdyusd_LogsDirectory' },
			msdyusd_MaxDiagnosticLogsSizeInMB: { a: 'msdyusd_MaxDiagnosticLogsSizeInMB' },
			msdyusd_name: { a: 'msdyusd_name' },
			msdyusd_ODDShortcut: { a: 'msdyusd_ODDShortcut' },
			msdyusd_ODPerfBeginShortcut: { a: 'msdyusd_odperfbeginshortcut' },
			msdyusd_ODPerfEndShortcut: { a: 'msdyusd_odperfendshortcut' },
			msdyusd_userschemasettings: { a: 'msdyusd_userschemasettings' },
			msdyusd_WEREnabled: { a: 'msdyusd_WEREnabled' },
			OverriddenCreatedOn_UtcDateOnly: { a: 'overriddencreatedon' },
			OwnerId_systemuser: { b: 'ownerid', a: '_ownerid_value', c: 'systemusers', d: 'systemuser' },
			OwnerId_team: { b: 'ownerid', a: '_ownerid_value', c: 'teams', d: 'team' },
			OwningBusinessUnit: { b: 'owningbusinessunit', a: '_owningbusinessunit_value', c: 'businessunits', d: 'businessunit', r: true },
			OwningTeam: { b: 'owningteam', a: '_owningteam_value', c: 'teams', d: 'team', r: true },
			OwningUser: { b: 'owninguser', a: '_owninguser_value', c: 'systemusers', d: 'systemuser', r: true },
			processid: { a: 'processid' },
			stageid: { a: 'stageid' },
			statecode: { a: 'statecode' },
			statuscode: { a: 'statuscode' },
			TimeZoneRuleVersionNumber: { a: 'timezoneruleversionnumber' },
			traversedpath: { a: 'traversedpath' },
			UTCConversionTimeZoneCode: { a: 'utcconversiontimezonecode' },
			VersionNumber: { a: 'versionnumber', r: true }
		};
		if (e === undefined) e = {};
		var u = {};
		for (var field in msdyusd_auditanddiagnosticssetting) {
			var a = msdyusd_auditanddiagnosticssetting[field].a;
			var b = msdyusd_auditanddiagnosticssetting[field].b;
			var c = msdyusd_auditanddiagnosticssetting[field].c;
			var d = msdyusd_auditanddiagnosticssetting[field].d;
			var g = msdyusd_auditanddiagnosticssetting[field].g;
			var r = msdyusd_auditanddiagnosticssetting[field].r;
			msdyusd_auditanddiagnosticssetting[field] = webApiField(e, a, b, c, d, r, u, g);
		}
		msdyusd_auditanddiagnosticssetting.Entity = u;
		msdyusd_auditanddiagnosticssetting.EntityName = 'msdyusd_auditanddiagnosticssetting';
		msdyusd_auditanddiagnosticssetting.EntityCollectionName = 'msdyusd_auditanddiagnosticssettings';
		msdyusd_auditanddiagnosticssetting['@odata.etag'] = e['@odata.etag'];
		msdyusd_auditanddiagnosticssetting.getAliasedValue = function (alias, isMultiOptionSet) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdyusd_auditanddiagnosticssetting.getAliasedFormattedValue = function (alias, isMultiOptionSet) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return EMPTY_STRING;
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdyusd_auditanddiagnosticssetting;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyusd_auditanddiagnosticssetting = {
		msdyusd_DGTVerbosityLevel : {
			Error: 100000000,
			Information: 100000002,
			Verbose: 100000003,
			Warning: 100000001
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