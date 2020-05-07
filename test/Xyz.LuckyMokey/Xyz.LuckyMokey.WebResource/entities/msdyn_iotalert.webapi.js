'use strict';
/** @namespace LuckyMokey */
var LuckyMokey;
(function (LuckyMokey) {
	'use strict';
	LuckyMokey.msdyn_iotalertApi = function (e) {
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
		var msdyn_iotalert = {
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdyn_AlertData: { a: 'msdyn_alertdata' },
			msdyn_alertpriorityscore: { a: 'msdyn_alertpriorityscore' },
			msdyn_AlertTime_UtcDateAndTime: { a: 'msdyn_alerttime' },
			msdyn_AlertToken: { a: 'msdyn_alerttoken' },
			msdyn_alerttype: { a: 'msdyn_alerttype' },
			msdyn_AlertURL: { a: 'msdyn_alerturl' },
			msdyn_case: { b: 'msdyn_case', a: '_msdyn_case_value', c: 'incidents', d: 'incident' },
			msdyn_CustomerAsset: { b: 'msdyn_CustomerAsset', a: '_msdyn_customerasset_value', c: 'msdyn_customerassets', d: 'msdyn_customerasset' },
			msdyn_Description: { a: 'msdyn_description' },
			msdyn_Device: { b: 'msdyn_Device', a: '_msdyn_device_value', c: 'msdyn_iotdevices', d: 'msdyn_iotdevice' },
			msdyn_DeviceID: { a: 'msdyn_deviceid' },
			msdyn_iotalertId: { a: 'msdyn_iotalertid' },
			msdyn_LastCommandSent: { b: 'msdyn_LastCommandSent', a: '_msdyn_lastcommandsent_value', c: 'msdyn_iotdevicecommands', d: 'msdyn_iotdevicecommand' },
			msdyn_LastCommandSentTime_UtcDateAndTime: { a: 'msdyn_lastcommandsenttime' },
			msdyn_ParentAlert: { b: 'msdyn_ParentAlert', a: '_msdyn_parentalert_value', c: 'msdyn_iotalerts', d: 'msdyn_iotalert' },
			msdyn_ParentAlertToken: { a: 'msdyn_parentalerttoken' },
			msdyn_suggestedpriority: { a: 'msdyn_suggestedpriority' },
			msdyn_Workorder: { b: 'msdyn_Workorder', a: '_msdyn_workorder_value', c: 'msdyn_workorders', d: 'msdyn_workorder' },
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
		for (var field in msdyn_iotalert) {
			var a = msdyn_iotalert[field].a;
			var b = msdyn_iotalert[field].b;
			var c = msdyn_iotalert[field].c;
			var d = msdyn_iotalert[field].d;
			var g = msdyn_iotalert[field].g;
			var r = msdyn_iotalert[field].r;
			msdyn_iotalert[field] = webApiField(e, a, b, c, d, r, u, g);
		}
		msdyn_iotalert.Entity = u;
		msdyn_iotalert.EntityName = 'msdyn_iotalert';
		msdyn_iotalert.EntityCollectionName = 'msdyn_iotalerts';
		msdyn_iotalert['@odata.etag'] = e['@odata.etag'];
		msdyn_iotalert.getAliasedValue = function (alias, isMultiOptionSet) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdyn_iotalert.getAliasedFormattedValue = function (alias, isMultiOptionSet) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return EMPTY_STRING;
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdyn_iotalert;
	};
})(LuckyMokey || (LuckyMokey = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_iotalert = {
		msdyn_alerttype : {
			Anomaly: 192350000,
			Info: 192350001,
			Preventive_Maintenance: 192350002,
			Test: 192350003
		},
		msdyn_suggestedpriority : {
			Calculating: 192350000,
			High: 192350001,
			Low: 192350002,
			No_Suggestions: 192350003
		},
		statecode : {
			Active: 0,
			Inactive: 1,
			InProgress: 2,
			Closed: 3
		},
		statuscode : {
			Active: 1,
			Inactive: 2,
			In_Progress_Case_Created: 3,
			In_Progress_Work_Order_Created: 4,
			In_Progress_Command_Sent: 5,
			Closed: 6,
			In_Progress_Command_Failed: 7
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