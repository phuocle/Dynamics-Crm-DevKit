'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	DevKit.ActivityPartyApi = function (e) {
		const f = '@OData.Community.Display.V1.FormattedValue';
		function webApiField(obj, field, entity, logicalName, schemaName, entityLogicalCollectionName, entityLogicalName, readOnly, upsertEntity, type) {
			const l = '@Microsoft.Dynamics.CRM.lookuplogicalname';
			const getFormattedValue = function () {
				if (entity?.[logicalName + f] === undefined || entity?.[logicalName + f] === null) {
					return '';
				}
				if (entityLogicalCollectionName !== undefined && entityLogicalCollectionName.length > 0) {
					if (entity?.[logicalName + l] === entityLogicalName) {
						return entity?.[logicalName + f];
					}
					return '';
				}
				if (type === 'MultiOptionSet') {
					return entity?.[logicalName + f]?.toString()?.split(';').map(function (item) { return item?.trim(); });
				}
				return entity?.[logicalName + f];
			};
			const getValue = function () {
				if (entity?.[logicalName] === undefined || entity?.[logicalName] === null) {
					return null;
				}
				if (entityLogicalCollectionName !== undefined && entityLogicalCollectionName.length > 0) {
					if (entity?.[logicalName + l] === undefined || entity?.[logicalName + l] === entityLogicalName) {
						return returnGet(entity?.[logicalName], type);
					}
					return null;
				}
				if (type === 'MultiOptionSet') {
					return entity?.[logicalName]?.toString()?.split(',').map(function (item) { return parseInt(item, 10); });
				}
				return returnGet(entity?.[logicalName], type);
			};
			const returnGet = function (data, type) {
				if (data === null || data === undefined) return null;
				if (type === null || type === undefined) return data;
				const typeParsers = {
					DateTime: function (value) {
						if (value === null || value === undefined) return null;
						if (value instanceof Date) return isNaN(value.getTime()) ? null : value;
						const trimmedString = String(value).trim();
						if (trimmedString === '') return null;
						const timestamp = Date.parse(trimmedString);
						if (isNaN(timestamp)) return null;
						const parsedDate = new Date(timestamp);
						return isNaN(parsedDate.getTime()) ? null : parsedDate;
					},
					Integer: function (value) {
						const parsed = parseInt(value, 10);
						return isNaN(parsed) ? null : parsed;
					},
					Number: function (value) {
						const parsed = Number(value);
						return isNaN(parsed) ? null : parsed;
					},
					Boolean: function (value) {
						if (value === null || value === undefined) return null;
						if (typeof value === 'boolean') return value;
						if (typeof value === 'number') return value !== 0;
						const stringValue = String(value).trim().toLowerCase();
						const trueValues = ["true", "1", "yes", "y"];
						const falseValues = ["false", "0", "no", "n"];
						if (trueValues.includes(stringValue)) return true;
						if (falseValues.includes(stringValue)) return false;
						return false;
					}
				};
				const parser = typeParsers[type];
				return parser ? parser(data) : data;
			};
			const setValue = function (value) {
				if (type === 'MultiOptionSet') value = value?.join(',');
				if (entityLogicalCollectionName !== undefined && entityLogicalCollectionName?.length > 0) {
					if (value === null) {
						upsertEntity[schemaName + '@odata.bind'] = null;
					}
					else {
						const cleanValue = typeof value === 'string' ? value.replace(/[{}]/g, '') : value;
						upsertEntity[schemaName + '@odata.bind'] = '/' + entityLogicalCollectionName + '(' + cleanValue + ')';
					}
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
		const _activityparty = {
			ActivityId: { b: 'activityid', a: '_activityid_value', c: 'activitypointers', d: 'activitypointer' },
			ActivityPartyId: { a: 'activitypartyid' },
			AddressUsed: { a: 'addressused' },
			AddressUsedEmailColumnNumber: { a: 'addressusedemailcolumnnumber', r: true, g: 'Integer' },
			DoNotEmail: { a: 'donotemail', r: true, g: 'Boolean' },
			DoNotFax: { a: 'donotfax', r: true, g: 'Boolean' },
			DoNotPhone: { a: 'donotphone', r: true, g: 'Boolean' },
			DoNotPostalMail: { a: 'donotpostalmail', r: true, g: 'Boolean' },
			Effort: { a: 'effort', g: 'Number' },
			ExchangeEntryId: { a: 'exchangeentryid' },
			ExternalId: { a: 'externalid' },
			ExternalIdType: { a: 'externalidtype' },
			InstanceTypeCode: { a: 'instancetypecode', r: true, g: 'Integer' },
			IsPartyDeleted: { a: 'ispartydeleted', r: true, g: 'Boolean' },
			OwnerId_systemuser: { b: 'ownerid', a: '_ownerid_value', c: 'systemusers', d: 'systemuser', r: true },
			OwnerId_team: { b: 'ownerid', a: '_ownerid_value', c: 'teams', d: 'team', r: true },
			OwningBusinessUnit: { a: 'owningbusinessunit', r: true },
			OwningUser: { a: 'owninguser', r: true },
			ParticipationTypeMask: { a: 'participationtypemask', g: 'Integer' },
			partyid_account: { b: 'partyid_account', a: '_partyid_value', c: 'accounts', d: 'account' },
			partyid_contact: { b: 'partyid_contact', a: '_partyid_value', c: 'contacts', d: 'contact' },
			partyid_knowledgearticle: { b: 'partyid_knowledgearticle', a: '_partyid_value', c: 'knowledgearticles', d: 'knowledgearticle' },
			partyid_queue: { b: 'partyid_queue', a: '_partyid_value', c: 'queues', d: 'queue' },
			partyid_systemuser: { b: 'partyid_systemuser', a: '_partyid_value', c: 'systemusers', d: 'systemuser' },
			ScheduledEnd_UtcDateOnly: { a: 'scheduledend', r: true, g: 'DateTime' },
			ScheduledStart_UtcDateOnly: { a: 'scheduledstart', r: true, g: 'DateTime' },
			UnresolvedPartyName: { a: 'unresolvedpartyname' },
			VersionNumber: { a: 'versionnumber', r: true, g: 'Integer' }
		};
		if (e === undefined) e = {};
		const u = {};
		const activityparty = {};
		activityparty.ODataEntity = e;
		activityparty.FormattedValue = {};
		for (const field in _activityparty) {
			const fieldConfig = _activityparty[field];
			webApiField(activityparty, field, e, fieldConfig.a, fieldConfig.b, fieldConfig.c, fieldConfig.d, fieldConfig.r, u, fieldConfig.g);
		}
		activityparty.Entity = u;
		activityparty.EntityName = 'activityparty';
		activityparty.EntityCollectionName = 'activityparties';
		activityparty['@odata.etag'] = e?.['@odata.etag'];
		activityparty.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e?.[alias] === undefined || e?.[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e?.[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e?.[alias];
		};
		activityparty.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e?.[alias + f] === undefined || e?.[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e?.[alias + f]?.toString()?.split(';').map(function (item) { return item?.trim(); });
			}
			return e?.[alias + f];
		};
		return activityparty;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.ActivityParty = {
		InstanceTypeCode: { Not_Recurring: 0, Recurring_Exception: 3, Recurring_Future_Exception: 4, Recurring_Instance: 2, Recurring_Master: 1 },
		ParticipationTypeMask: { BCC_Recipient: 4, CC_Recipient: 3, Chat_Participant: 12, Customer: 11, Optional_attendee: 6, Organizer: 7, Owner: 9, Regarding: 8, Related: 13, Required_attendee: 5, Resource: 10, Sender: 1, To_Recipient: 2 },
		PartyObjectTypeCode: { },
		RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
	};
})(OptionSet || (OptionSet = {}));