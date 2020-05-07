'use strict';
/** @namespace LuckyMokey */
var LuckyMokey;
(function (LuckyMokey) {
	'use strict';
	LuckyMokey.msdyn_liveworkstreamApi = function (e) {
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
		var msdyn_liveworkstream = {
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdyn_AllowedPresences: { a: 'msdyn_allowedpresences', g: true },
			msdyn_APIKey: { a: 'msdyn_apikey' },
			msdyn_apikeyversionnumber: { a: 'msdyn_apikeyversionnumber' },
			msdyn_AssignWorkItemAfterDecline: { a: 'msdyn_assignworkitemafterdecline' },
			msdyn_AutoCloseAfterInactivity: { a: 'msdyn_autocloseafterinactivity' },
			msdyn_CapacityRequired: { a: 'msdyn_capacityrequired' },
			msdyn_ConnectorsURL: { a: 'msdyn_connectorsurl' },
			msdyn_CustomerID: { a: 'msdyn_customerid' },
			msdyn_enableautomatedmessages: { a: 'msdyn_enableautomatedmessages' },
			msdyn_EntityRoutingConfigurationId: { b: 'msdyn_EntityRoutingConfigurationId', a: '_msdyn_entityroutingconfigurationid_value', c: 'msdyn_entityroutingconfigurations', d: 'msdyn_entityroutingconfiguration' },
			msdyn_FallBackLanguage: { a: 'msdyn_fallbacklanguage' },
			msdyn_FollowUpAfterWaiting: { a: 'msdyn_followupafterwaiting' },
			msdyn_handlingtimethreshold: { a: 'msdyn_handlingtimethreshold' },
			msdyn_LastValidationOn_TimezoneDateAndTime: { a: 'msdyn_lastvalidationon' },
			msdyn_LastValidationStatus: { a: 'msdyn_lastvalidationstatus' },
			msdyn_liveworkstreamId: { a: 'msdyn_liveworkstreamid' },
			msdyn_matchinglogic: { a: 'msdyn_matchinglogic' },
			msdyn_MaxConcurrentConnection: { a: 'msdyn_maxconcurrentconnection' },
			msdyn_name: { a: 'msdyn_name' },
			msdyn_Notification: { a: 'msdyn_notification' },
			msdyn_notificationscenarioplaceholder: { a: 'msdyn_notificationscenarioplaceholder' },
			msdyn_recordidentificationrule: { a: 'msdyn_recordidentificationrule' },
			msdyn_RecordIdentificationValidationRule: { a: 'msdyn_recordidentificationvalidationrule' },
			msdyn_Screenpoptimeout: { a: 'msdyn_screenpoptimeout' },
			msdyn_Screenpoptimeout_optionSet: { a: 'msdyn_screenpoptimeout_optionSet' },
			msdyn_sessionscenarioplaceholder: { a: 'msdyn_sessionscenarioplaceholder' },
			msdyn_skillattachmentrulescount: { a: 'msdyn_skillattachmentrulescount', r: true },
			msdyn_skillattachmentrulescount_Date_UtcDateAndTime: { a: 'msdyn_skillattachmentrulescount_date', r: true },
			msdyn_skillattachmentrulescount_State: { a: 'msdyn_skillattachmentrulescount_state', r: true },
			msdyn_smsprovider: { a: 'msdyn_smsprovider' },
			msdyn_streamsource: { a: 'msdyn_streamsource' },
			msdyn_TelesignInboundURL: { a: 'msdyn_telesigninboundurl' },
			msdyn_TwilioInboundURL: { a: 'msdyn_twilioinboundurl' },
			msdyn_waitingtimethreshold: { a: 'msdyn_waitingtimethreshold' },
			msdyn_workdistributionmode: { a: 'msdyn_workdistributionmode' },
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
		for (var field in msdyn_liveworkstream) {
			var a = msdyn_liveworkstream[field].a;
			var b = msdyn_liveworkstream[field].b;
			var c = msdyn_liveworkstream[field].c;
			var d = msdyn_liveworkstream[field].d;
			var g = msdyn_liveworkstream[field].g;
			var r = msdyn_liveworkstream[field].r;
			msdyn_liveworkstream[field] = webApiField(e, a, b, c, d, r, u, g);
		}
		msdyn_liveworkstream.Entity = u;
		msdyn_liveworkstream.EntityName = 'msdyn_liveworkstream';
		msdyn_liveworkstream.EntityCollectionName = 'msdyn_liveworkstreams';
		msdyn_liveworkstream['@odata.etag'] = e['@odata.etag'];
		msdyn_liveworkstream.getAliasedValue = function (alias, isMultiOptionSet) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdyn_liveworkstream.getAliasedFormattedValue = function (alias, isMultiOptionSet) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return EMPTY_STRING;
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdyn_liveworkstream;
	};
})(LuckyMokey || (LuckyMokey = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_liveworkstream = {
		msdyn_AllowedPresences : {
			Available: 192360000,
			Busy: 192360001,
			Busy_DND: 192360002,
			Away: 192360003,
			Offline: 192360004
		},
		msdyn_matchinglogic : {
			Exact_Match: 192350000,
			Closest_Match: 192350001
		},
		msdyn_Notification : {
			Directly_open_session: 100000000,
			Screen_pop_with_timeout: 100000001,
			Screen_pop_with_decline: 100000002
		},
		msdyn_Screenpoptimeout_optionSet : {
			_30: 30,
			_60: 60,
			_90: 90,
			_120: 120,
			_150: 150,
			_180: 180,
			_210: 210,
			_240: 240,
			_270: 270,
			_300: 300
		},
		msdyn_smsprovider : {
			TeleSign: 192350000
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
		msdyn_workdistributionmode : {
			Push: 192350000,
			Pick: 192350001
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