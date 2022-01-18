'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.ActivityPartyApi = function (e) {
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
		var activityparty = {
			ActivityId: { b: 'activityid', a: '_activityid_value', c: 'activitypointers', d: 'activitypointer' },
			ActivityPartyId: { a: 'activitypartyid' },
			AddressUsed: { a: 'addressused' },
			AddressUsedEmailColumnNumber: { a: 'addressusedemailcolumnnumber', r: true },
			DoNotEmail: { a: 'donotemail', r: true },
			DoNotFax: { a: 'donotfax', r: true },
			DoNotPhone: { a: 'donotphone', r: true },
			DoNotPostalMail: { a: 'donotpostalmail', r: true },
			Effort: { a: 'effort' },
			ExchangeEntryId: { a: 'exchangeentryid' },
			InstanceTypeCode: { a: 'instancetypecode', r: true },
			IsPartyDeleted: { a: 'ispartydeleted', r: true },
			OwnerId_systemuser: { b: 'ownerid', a: '_ownerid_value', c: 'systemusers', d: 'systemuser' },
			OwnerId_team: { b: 'ownerid', a: '_ownerid_value', c: 'teams', d: 'team', r: true },
			OwningBusinessUnit: { a: 'owningbusinessunit', r: true },
			OwningUser: { a: 'owninguser', r: true },
			ParticipationTypeMask: { a: 'participationtypemask' },
			partyid_account: { b: 'partyid_account', a: '_partyid_value', c: 'accounts', d: 'account' },
			partyid_bulkoperation: { b: 'partyid_bulkoperation', a: '_partyid_value', c: 'bulkoperations', d: 'bulkoperation' },
			partyid_campaign: { b: 'partyid_campaign', a: '_partyid_value', c: 'campaigns', d: 'campaign' },
			partyid_campaignactivity: { b: 'partyid_campaignactivity', a: '_partyid_value', c: 'campaignactivities', d: 'campaignactivity' },
			partyid_contact: { b: 'partyid_contact', a: '_partyid_value', c: 'contacts', d: 'contact' },
			partyid_contract: { b: 'partyid_contract', a: '_partyid_value', c: 'contracts', d: 'contract' },
			partyid_entitlement: { b: 'partyid_entitlement', a: '_partyid_value', c: 'entitlements', d: 'entitlement' },
			partyid_equipment: { b: 'partyid_equipment', a: '_partyid_value', c: 'equipments', d: 'equipment' },
			partyid_incident: { b: 'partyid_incident', a: '_partyid_value', c: 'incidents', d: 'incident' },
			partyid_invoice: { b: 'partyid_invoice', a: '_partyid_value', c: 'invoices', d: 'invoice' },
			partyid_knowledgearticle: { b: 'partyid_knowledgearticle', a: '_partyid_value', c: 'knowledgearticles', d: 'knowledgearticle' },
			partyid_lead: { b: 'partyid_lead', a: '_partyid_value', c: 'leads', d: 'lead' },
			partyid_opportunity: { b: 'partyid_opportunity', a: '_partyid_value', c: 'opportunities', d: 'opportunity' },
			partyid_queue: { b: 'partyid_queue', a: '_partyid_value', c: 'queues', d: 'queue' },
			partyid_quote: { b: 'partyid_quote', a: '_partyid_value', c: 'quotes', d: 'quote' },
			partyid_salesorder: { b: 'partyid_salesorder', a: '_partyid_value', c: 'salesorders', d: 'salesorder' },
			partyid_systemuser: { b: 'partyid_systemuser', a: '_partyid_value', c: 'systemusers', d: 'systemuser' },
			ResourceSpecId: { b: 'resourcespecid', a: '_resourcespecid_value', c: 'resourcespecs', d: 'resourcespec' },
			ScheduledEnd_UtcDateOnly: { a: 'scheduledend', r: true },
			ScheduledStart_UtcDateOnly: { a: 'scheduledstart', r: true },
			VersionNumber: { a: 'versionnumber', r: true }
		};
		if (e === undefined) e = {};
		var u = {};
		for (var field in activityparty) {
			var a = activityparty[field].a;
			var b = activityparty[field].b;
			var c = activityparty[field].c;
			var d = activityparty[field].d;
			var g = activityparty[field].g;
			var r = activityparty[field].r;
			activityparty[field] = webApiField(e, a, b, c, d, r, u, g);
		}
		activityparty.Entity = u;
		activityparty.EntityName = 'activityparty';
		activityparty.EntityCollectionName = 'activityparties';
		activityparty['@odata.etag'] = e['@odata.etag'];
		activityparty.getAliasedValue = function (alias, isMultiOptionSet) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		activityparty.getAliasedFormattedValue = function (alias, isMultiOptionSet) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return EMPTY_STRING;
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return activityparty;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.ActivityParty = {
		InstanceTypeCode : {
			Not_Recurring: 0,
			Recurring_Exception: 3,
			Recurring_Future_Exception: 4,
			Recurring_Instance: 2,
			Recurring_Master: 1
		},
		ParticipationTypeMask : {
			BCC_Recipient: 4,
			CC_Recipient: 3,
			Customer: 11,
			Optional_attendee: 6,
			Organizer: 7,
			Owner: 9,
			Regarding: 8,
			Required_attendee: 5,
			Resource: 10,
			Sender: 1,
			To_Recipient: 2
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