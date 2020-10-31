'use strict';
/** @namespace LuckyMokey */
var LuckyMokey;
(function (LuckyMokey) {
	'use strict';
	LuckyMokey.FeedbackApi = function (e) {
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
		var feedback = {
			ClosedBy: { b: 'closedby', a: '_closedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ClosedOn_UtcDateAndTime: { a: 'closedon', r: true },
			Comments: { a: 'comments' },
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedByContact: { b: 'createdbycontact', a: '_createdbycontact_value', c: 'contacts', d: 'contact' },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOnBehalfByContact: { b: 'createdonbehalfbycontact', a: '_createdonbehalfbycontact_value', c: 'contacts', d: 'contact' },
			ExchangeRate: { a: 'exchangerate', r: true },
			FeedbackId: { a: 'feedbackid' },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			MaxRating: { a: 'maxrating' },
			MinRating: { a: 'minrating' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			NormalizedRating: { a: 'normalizedrating', r: true },
			OverriddenCreatedOn_UtcDateOnly: { a: 'overriddencreatedon' },
			OwnerId_systemuser: { b: 'ownerid', a: '_ownerid_value', c: 'systemusers', d: 'systemuser' },
			OwnerId_team: { b: 'ownerid', a: '_ownerid_value', c: 'teams', d: 'team' },
			OwningBusinessUnit: { b: 'owningbusinessunit', a: '_owningbusinessunit_value', c: 'businessunits', d: 'businessunit', r: true },
			OwningTeam: { b: 'owningteam', a: '_owningteam_value', c: 'teams', d: 'team', r: true },
			OwningUser: { b: 'owninguser', a: '_owninguser_value', c: 'systemusers', d: 'systemuser', r: true },
			Rating: { a: 'rating' },
			ContactId: { b: 'ContactId', a: '_regardingobjectid_value', c: 'contacts', d: 'contact' },
			FeedbackId: { b: 'FeedbackId', a: '_regardingobjectid_value', c: 'feedback', d: 'feedback' },
			KnowledgeArticleId: { b: 'KnowledgeArticleId', a: '_regardingobjectid_value', c: 'knowledgearticles', d: 'knowledgearticle' },
			regardingobjectid_msdyn_liveconversation: { b: 'regardingobjectid_msdyn_liveconversation', a: '_regardingobjectid_value', c: 'msdyn_liveconversations', d: 'msdyn_liveconversation' },
			regardingobjectid_msdyn_ocliveworkitem: { b: 'regardingobjectid_msdyn_ocliveworkitem', a: '_regardingobjectid_value', c: 'msdyn_ocliveworkitems', d: 'msdyn_ocliveworkitem' },
			regardingobjectid_msdyn_ocsession: { b: 'regardingobjectid_msdyn_ocsession', a: '_regardingobjectid_value', c: 'msdyn_ocsessions', d: 'msdyn_ocsession' },
			regardingobjectid_msfp_surveyinvite: { b: 'regardingobjectid_msfp_surveyinvite', a: '_regardingobjectid_value', c: 'msfp_surveyinvites', d: 'msfp_surveyinvite' },
			regardingobjectid_msfp_surveyresponse: { b: 'regardingobjectid_msfp_surveyresponse', a: '_regardingobjectid_value', c: 'msfp_surveyresponses', d: 'msfp_surveyresponse' },
			Source: { a: 'source' },
			StateCode: { a: 'statecode' },
			StatusCode: { a: 'statuscode' },
			Title: { a: 'title' },
			TransactionCurrencyId: { b: 'transactioncurrencyid', a: '_transactioncurrencyid_value', c: 'transactioncurrencies', d: 'transactioncurrency' },
			VersionNumber: { a: 'versionnumber', r: true }
		};
		if (e === undefined) e = {};
		var u = {};
		for (var field in feedback) {
			var a = feedback[field].a;
			var b = feedback[field].b;
			var c = feedback[field].c;
			var d = feedback[field].d;
			var g = feedback[field].g;
			var r = feedback[field].r;
			feedback[field] = webApiField(e, a, b, c, d, r, u, g);
		}
		feedback.Entity = u;
		feedback.EntityName = 'feedback';
		feedback.EntityCollectionName = 'feedback';
		feedback['@odata.etag'] = e['@odata.etag'];
		feedback.getAliasedValue = function (alias, isMultiOptionSet) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		feedback.getAliasedFormattedValue = function (alias, isMultiOptionSet) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return EMPTY_STRING;
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return feedback;
	};
})(LuckyMokey || (LuckyMokey = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.Feedback = {
		Source : {
			Internal: 0,
			Portal: 1
		},
		StateCode : {
			Open: 0,
			Closed: 1
		},
		StatusCode : {
			Proposed: 1,
			Accepted: 2,
			Closed: 3,
			Rejected: 4
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