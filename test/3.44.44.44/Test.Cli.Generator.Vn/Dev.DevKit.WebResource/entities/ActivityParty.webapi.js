﻿'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.ActivityPartyApi = function (e) {
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
					if (value === null) {
						upsertEntity[schemaName + '@odata.bind'] = null;
					}
					else {
						value = value.replace('{', '').replace('}', '');
						upsertEntity[schemaName + '@odata.bind'] = '/' + entityLogicalCollectionName + '(' + value + ')';
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
		var _activityparty = {
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
			OwnerId_systemuser: { b: 'ownerid', a: '_ownerid_value', c: 'systemusers', d: 'systemuser', r: true },
			OwnerId_team: { b: 'ownerid', a: '_ownerid_value', c: 'teams', d: 'team', r: true },
			OwningBusinessUnit: { a: 'owningbusinessunit', r: true },
			OwningUser: { a: 'owninguser', r: true },
			ParticipationTypeMask: { a: 'participationtypemask' },
			partyid_account: { b: 'partyid_account', a: '_partyid_value', c: 'accounts', d: 'account' },
			partyid_contact: { b: 'partyid_contact', a: '_partyid_value', c: 'contacts', d: 'contact' },
			partyid_knowledgearticle: { b: 'partyid_knowledgearticle', a: '_partyid_value', c: 'knowledgearticles', d: 'knowledgearticle' },
			partyid_queue: { b: 'partyid_queue', a: '_partyid_value', c: 'queues', d: 'queue' },
			partyid_systemuser: { b: 'partyid_systemuser', a: '_partyid_value', c: 'systemusers', d: 'systemuser' },
			ScheduledEnd_UtcDateOnly: { a: 'scheduledend', r: true },
			ScheduledStart_UtcDateOnly: { a: 'scheduledstart', r: true },
			UnresolvedPartyName: { a: 'unresolvedpartyname' },
			VersionNumber: { a: 'versionnumber', r: true }
		};
		if (e === undefined) e = {};
		var u = {};
		var activityparty = {};
		activityparty.ODataEntity = e;
		activityparty.FormattedValue = {};
		for (var field in _activityparty) {
			var a = _activityparty[field].a;
			var b = _activityparty[field].b;
			var c = _activityparty[field].c;
			var d = _activityparty[field].d;
			var g = _activityparty[field].g;
			var r = _activityparty[field].r;
			webApiField(activityparty, field, e, a, b, c, d, r, u, g);
		}
		activityparty.Entity = u;
		activityparty.EntityName = 'activityparty';
		activityparty.EntityCollectionName = 'activityparties';
		activityparty['@odata.etag'] = e['@odata.etag'];
		activityparty.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		activityparty.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
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
			Ban_ghi_chu_Lap_lai: 1,
			Khong_Lap_lai: 0,
			Ngoai_le_Lap_lai: 3,
			Ngoai_le_Tuong_lai_Lap_lai: 4,
			Phien_ban_Lap_lai: 2
		},
		ParticipationTypeMask : {
			Chu_so_huu: 9,
			Co_lien_quan: 13,
			Khach_hang: 11,
			Lien_quan_den: 8,
			Nguoi_gui: 1,
			Nguoi_nhan_trong_muc_BCC: 4,
			Nguoi_nhan_trong_muc_CC: 3,
			Nguoi_nhan_trong_muc_Den: 2,
			Nguoi_tham_gia_bat_buoc: 5,
			Nguoi_tham_gia_cuoc_tro_chuyen: 12,
			Nguoi_tham_gia_khong_bat_buoc: 6,
			Nguoi_to_chuc: 7,
			Nguon_luc: 10
		},
		PartyObjectTypeCode : {
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