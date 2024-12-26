'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.MailboxTrackingCategoryApi = function (e) {
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
		var _mailboxtrackingcategory = {
			CategoryOnboardingStatus: { a: 'categoryonboardingstatus' },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			ExchangeCategoryColor: { a: 'exchangecategorycolor' },
			ExchangeCategoryId: { a: 'exchangecategoryid' },
			ExchangeCategoryName: { a: 'exchangecategoryname' },
			MailboxId: { b: 'mailboxid', a: '_mailboxid_value', c: 'organizations', d: 'organization' },
			MailboxTrackingCategoryId: { a: 'mailboxtrackingcategoryid', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			OwnerId_systemuser: { b: 'ownerid', a: '_ownerid_value', c: 'systemusers', d: 'systemuser' },
			OwnerId_team: { b: 'ownerid', a: '_ownerid_value', c: 'teams', d: 'team' },
			OwningBusinessUnit: { b: 'owningbusinessunit', a: '_owningbusinessunit_value', c: 'businessunits', d: 'businessunit', r: true },
			OwningTeam: { b: 'owningteam', a: '_owningteam_value', c: 'teams', d: 'team', r: true }
		};
		if (e === undefined) e = {};
		var u = {};
		var mailboxtrackingcategory = {};
		mailboxtrackingcategory.ODataEntity = e;
		mailboxtrackingcategory.FormattedValue = {};
		for (var field in _mailboxtrackingcategory) {
			var a = _mailboxtrackingcategory[field].a;
			var b = _mailboxtrackingcategory[field].b;
			var c = _mailboxtrackingcategory[field].c;
			var d = _mailboxtrackingcategory[field].d;
			var g = _mailboxtrackingcategory[field].g;
			var r = _mailboxtrackingcategory[field].r;
			webApiField(mailboxtrackingcategory, field, e, a, b, c, d, r, u, g);
		}
		mailboxtrackingcategory.Entity = u;
		mailboxtrackingcategory.EntityName = 'mailboxtrackingcategory';
		mailboxtrackingcategory.EntityCollectionName = 'mailboxtrackingcategories';
		mailboxtrackingcategory['@odata.etag'] = e['@odata.etag'];
		mailboxtrackingcategory.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		mailboxtrackingcategory.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return mailboxtrackingcategory;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.MailboxTrackingCategory = {
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