'use strict';
/** @namespace LuckyMokey */
var LuckyMokey;
(function (LuckyMokey) {
	'use strict';
	LuckyMokey.msdyn_liveconversationApi = function (e) {
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
		var msdyn_liveconversation = {
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdyn_activeagentassignedon_UtcDateAndTime: { a: 'msdyn_activeagentassignedon' },
			msdyn_activeagentid: { b: 'msdyn_activeagentid', a: '_msdyn_activeagentid_value', c: 'systemusers', d: 'systemuser' },
			msdyn_cdsqueueid: { b: 'msdyn_cdsqueueid', a: '_msdyn_cdsqueueid_value', c: 'queues', d: 'queue' },
			msdyn_channel: { a: 'msdyn_channel', g: true },
			msdyn_closedon_UtcDateAndTime: { a: 'msdyn_closedon' },
			msdyn_createdon_UtcDateAndTime: { a: 'msdyn_createdon' },
			msdyn_customer_msdyn_liveconversation_account: { b: 'msdyn_customer_msdyn_liveconversation_account', a: '_msdyn_customer_value', c: 'accounts', d: 'account' },
			msdyn_customer_msdyn_liveconversation_contact: { b: 'msdyn_customer_msdyn_liveconversation_contact', a: '_msdyn_customer_value', c: 'contacts', d: 'contact' },
			msdyn_customersentimentlabel: { a: 'msdyn_customersentimentlabel' },
			msdyn_escalationcount: { a: 'msdyn_escalationcount' },
			msdyn_initiatedon_UtcDateAndTime: { a: 'msdyn_initiatedon' },
			msdyn_liveconversationId: { a: 'msdyn_liveconversationid' },
			msdyn_liveworkstreamid: { b: 'msdyn_liveworkstreamid', a: '_msdyn_liveworkstreamid_value', c: 'msdyn_liveworkstreams', d: 'msdyn_liveworkstream' },
			msdyn_modifiedon_UtcDateAndTime: { a: 'msdyn_modifiedon' },
			msdyn_oclastsessionid: { a: 'msdyn_oclastsessionid' },
			msdyn_queueid: { b: 'msdyn_queueid', a: '_msdyn_queueid_value', c: 'msdyn_omnichannelqueues', d: 'msdyn_omnichannelqueue' },
			msdyn_startedon_UtcDateAndTime: { a: 'msdyn_startedon' },
			msdyn_statecode: { a: 'msdyn_statecode' },
			msdyn_statuscode: { a: 'msdyn_statuscode' },
			msdyn_statusupdatedon_UtcDateAndTime: { a: 'msdyn_statusupdatedon' },
			msdyn_subject: { a: 'msdyn_subject' },
			msdyn_title: { a: 'msdyn_title' },
			msdyn_transfercount: { a: 'msdyn_transfercount' },
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
		for (var field in msdyn_liveconversation) {
			var a = msdyn_liveconversation[field].a;
			var b = msdyn_liveconversation[field].b;
			var c = msdyn_liveconversation[field].c;
			var d = msdyn_liveconversation[field].d;
			var g = msdyn_liveconversation[field].g;
			var r = msdyn_liveconversation[field].r;
			msdyn_liveconversation[field] = webApiField(e, a, b, c, d, r, u, g);
		}
		msdyn_liveconversation.Entity = u;
		msdyn_liveconversation.EntityName = 'msdyn_liveconversation';
		msdyn_liveconversation.EntityCollectionName = 'msdyn_liveconversations';
		msdyn_liveconversation['@odata.etag'] = e['@odata.etag'];
		msdyn_liveconversation.getAliasedValue = function (alias, isMultiOptionSet) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdyn_liveconversation.getAliasedFormattedValue = function (alias, isMultiOptionSet) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return EMPTY_STRING;
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdyn_liveconversation;
	};
})(LuckyMokey || (LuckyMokey = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_liveconversation = {
		msdyn_channel : {
			Entity_Records: 192350000,
			Live_chat: 192360000,
			Voice: 192370000,
			Video: 192380000,
			Co_browse: 192390000,
			Screen_sharing: 192400000,
			SMS: 192340000,
			Facebook: 192330000
		},
		msdyn_customersentimentlabel : {
			NA: 0,
			Very_negative: 7,
			Negative: 8,
			Slightly_negative: 9,
			Neutral: 10,
			Slightly_positive: 11,
			Positive: 12,
			Very_positive: 13
		},
		msdyn_statecode : {
			Open: 0,
			Active: 1,
			Waiting: 2,
			Closed: 3,
			Wrap_up: 4
		},
		msdyn_statuscode : {
			Open: 1,
			Active: 2,
			Waiting: 3,
			Closed: 4,
			Wrap_up: 5
		},
		statecode : {
			Open: 0,
			Active: 1,
			Waiting: 2,
			Closed: 3,
			Wrap_up: 4
		},
		statuscode : {
			Open: 1,
			Active: 2,
			Waiting: 3,
			Closed: 4,
			Wrap_up: 5
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