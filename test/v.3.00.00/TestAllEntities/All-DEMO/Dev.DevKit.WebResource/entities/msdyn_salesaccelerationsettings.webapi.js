'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdyn_salesaccelerationsettingsApi = function (e) {
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
		var msdyn_salesaccelerationsettings = {
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdyn_CalendarType: { a: 'msdyn_calendartype' },
			msdyn_DisableWQAutoRefreshOnMarkComplete: { a: 'msdyn_disablewqautorefreshonmarkcomplete' },
			msdyn_EntityConfiguration: { a: 'msdyn_entityconfiguration' },
			msdyn_IsAutoCreatePhoneCallEnabled: { a: 'msdyn_isautocreatephonecallenabled' },
			msdyn_IsSignalRNotificationEnabled: { a: 'msdyn_issignalrnotificationenabled' },
			msdyn_IsWorkScheduleEnabled: { a: 'msdyn_isworkscheduleenabled' },
			msdyn_LinkSequenceStepToActivity: { a: 'msdyn_linksequencesteptoactivity' },
			msdyn_MigrationStatus: { a: 'msdyn_migrationstatus' },
			msdyn_name: { a: 'msdyn_name' },
			msdyn_salesaccelerationsettingsId: { a: 'msdyn_salesaccelerationsettingsid' },
			msdyn_SecurityRoles: { a: 'msdyn_securityroles' },
			msdyn_SecurityRolesAssignmentRules: { a: 'msdyn_securityrolesassignmentrules' },
			msdyn_SecurityRolesNew: { a: 'msdyn_securityrolesnew' },
			OrganizationId: { b: 'organizationid', a: '_organizationid_value', c: 'organizations', d: 'organization', r: true },
			OverriddenCreatedOn_UtcDateOnly: { a: 'overriddencreatedon' },
			statecode: { a: 'statecode' },
			statuscode: { a: 'statuscode' },
			TimeZoneRuleVersionNumber: { a: 'timezoneruleversionnumber' },
			UTCConversionTimeZoneCode: { a: 'utcconversiontimezonecode' },
			VersionNumber: { a: 'versionnumber', r: true }
		};
		if (e === undefined) e = {};
		var u = {};
		for (var field in msdyn_salesaccelerationsettings) {
			var a = msdyn_salesaccelerationsettings[field].a;
			var b = msdyn_salesaccelerationsettings[field].b;
			var c = msdyn_salesaccelerationsettings[field].c;
			var d = msdyn_salesaccelerationsettings[field].d;
			var g = msdyn_salesaccelerationsettings[field].g;
			var r = msdyn_salesaccelerationsettings[field].r;
			msdyn_salesaccelerationsettings[field] = webApiField(e, a, b, c, d, r, u, g);
		}
		msdyn_salesaccelerationsettings.Entity = u;
		msdyn_salesaccelerationsettings.EntityName = 'msdyn_salesaccelerationsettings';
		msdyn_salesaccelerationsettings.EntityCollectionName = 'msdyn_salesaccelerationsettingses';
		msdyn_salesaccelerationsettings['@odata.etag'] = e['@odata.etag'];
		msdyn_salesaccelerationsettings.getAliasedValue = function (alias, isMultiOptionSet) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdyn_salesaccelerationsettings.getAliasedFormattedValue = function (alias, isMultiOptionSet) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return EMPTY_STRING;
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdyn_salesaccelerationsettings;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
		OptionSet.msdyn_salesaccelerationsettings = {
			msdyn_CalendarType : {
				CRM: 0,
				Outlook: 1
			},
			statecode : {
				Closed: 1,
				Open: 0
			},
			statuscode : {
				Assignment_Rules_Published: 3,
				Published: 2,
				Saved: 1
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