'use strict';
/** @namespace LuckyMokey */
var LuckyMokey;
(function (LuckyMokey) {
	'use strict';
	LuckyMokey.msdyn_ocsystemmessageApi = function (e) {
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
		var msdyn_ocsystemmessage = {
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdyn_messagedescription: { a: 'msdyn_messagedescription' },
			msdyn_messagereceiver: { a: 'msdyn_messagereceiver' },
			msdyn_messagetext: { a: 'msdyn_messagetext' },
			msdyn_name: { a: 'msdyn_name' },
			msdyn_ocsystemmessageId: { a: 'msdyn_ocsystemmessageid' },
			msdyn_streamsource: { a: 'msdyn_streamsource' },
			msdyn_systemmessageeventtype: { a: 'msdyn_systemmessageeventtype' },
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
		for (var field in msdyn_ocsystemmessage) {
			var a = msdyn_ocsystemmessage[field].a;
			var b = msdyn_ocsystemmessage[field].b;
			var c = msdyn_ocsystemmessage[field].c;
			var d = msdyn_ocsystemmessage[field].d;
			var g = msdyn_ocsystemmessage[field].g;
			var r = msdyn_ocsystemmessage[field].r;
			msdyn_ocsystemmessage[field] = webApiField(e, a, b, c, d, r, u, g);
		}
		msdyn_ocsystemmessage.Entity = u;
		msdyn_ocsystemmessage.EntityName = 'msdyn_ocsystemmessage';
		msdyn_ocsystemmessage.EntityCollectionName = 'msdyn_ocsystemmessages';
		msdyn_ocsystemmessage['@odata.etag'] = e['@odata.etag'];
		msdyn_ocsystemmessage.getAliasedValue = function (alias, isMultiOptionSet) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdyn_ocsystemmessage.getAliasedFormattedValue = function (alias, isMultiOptionSet) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return EMPTY_STRING;
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdyn_ocsystemmessage;
	};
})(LuckyMokey || (LuckyMokey = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_ocsystemmessage = {
		msdyn_messagereceiver : {
			Agent: 192350000,
			Customer: 192350001
		},
		msdyn_streamsource : {
			Entity_Records: 192350000,
			Live_chat: 192360000,
			Voice: 192370000,
			Video: 192380000,
			Co_browse: 192390000,
			Screen_sharing: 192400000,
			SMS: 192340000,
			Facebook: 192330000
		},
		msdyn_systemmessageeventtype : {
			AgentAccepted: 192350000,
			ConsultAccepted: 192350001,
			TransferAccepted: 192350002,
			ConsultInitiated: 192350003,
			ConsultFailed: 192350004,
			TransferInitiated: 192350005,
			TransferFailed: 192350006,
			ConsultRejected: 192350007,
			TransferRejected: 192350008,
			ConsultTimedOut: 192350009,
			TransferTimedOut: 192350010,
			TransferToQueueInitiated: 192350011,
			TransferToQueueFailed: 192350012,
			AgentDisconnected: 192350013,
			AgentEnded: 192350014,
			SessionClosed: 192350015,
			ConsultSessionClosed: 192350016,
			AgentAssignmentReady: 192350017,
			AgentAssignmentFailure: 192350018,
			CustomerEnded: 192350019,
			CustomerDisconnected: 192350020,
			CustomerQueuePosition_LiveChat: 192350021,
			MessageFailedToSendToCustomer: 192350022,
			OutsideOperationHours: 192350023,
			CustomerQueuePosition_Next: 192350024
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