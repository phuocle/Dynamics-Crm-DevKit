'use strict';
/** @namespace DevKit */
// @ts-ignore
var DevKit;
(function (/** @type {any} */ DevKit) {
	if (DevKit === undefined) DevKit = {};
	DevKit.AuditApi = function (e) {
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
		const _audit = {
			Action: { a: 'action', r: true, g: 'Integer' },
			AdditionalInfo: { a: 'additionalinfo' },
			AttributeMask: { a: 'attributemask', r: true },
			AuditId: { a: 'auditid', r: true },
			CallingUserId: { b: 'callinguserid', a: '_callinguserid_value', c: 'systemusers', d: 'systemuser', r: true },
			ChangeData: { a: 'changedata', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true, g: 'DateTime' },
			Operation: { a: 'operation', r: true, g: 'Integer' },
			TimeToLiveInSeconds: { a: 'timetoliveinseconds', r: true, g: 'Integer' },
			TransactionId: { a: 'transactionid', r: true },
			UserAdditionalInfo: { a: 'useradditionalinfo' },
			VersionNumber: { a: 'versionnumber', r: true, g: 'Integer' }
		};
		if (e === undefined) e = {};
		const u = {};
		const audit = {};
		audit.ODataEntity = e;
		audit.FormattedValue = {};
		for (const field in _audit) {
			const fieldConfig = _audit[field];
			webApiField(audit, field, e, fieldConfig.a, fieldConfig.b, fieldConfig.c, fieldConfig.d, fieldConfig.r, u, fieldConfig.g);
		}
		audit.Entity = u;
		audit.EntityName = 'audit';
		audit.EntityCollectionName = 'audits';
		audit['@odata.etag'] = e?.['@odata.etag'];
		audit.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e?.[alias] === undefined || e?.[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e?.[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e?.[alias];
		};
		audit.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e?.[alias + f] === undefined || e?.[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e?.[alias + f]?.toString()?.split(';').map(function (item) { return item?.trim(); });
			}
			return e?.[alias + f];
		};
		return audit;
	};
})(DevKit || (DevKit = /** @type {any} */ ({})));
/** @namespace OptionSet */
// @ts-ignore
var OptionSet;
(function (/** @type {any} */ OptionSet) {
	OptionSet.Audit = {
		Action: { Activate: 4, Add_Item: 37, Add_Member: 31, Add_Members: 35, Add_Privileges_to_Role: 57, Add_Substitute: 39, Add_To_Queue: 52, ApplicationBasedAccessAllowed: 122, ApplicationBasedAccessDenied: 121, Approve: 28, Archive: 115, Assign: 13, Assign_Role_To_Team: 53, Assign_Role_To_User: 55, Associate_Entities: 33, Attribute_Audit_Started: 106, Attribute_Audit_Stopped: 109, Audit_Change_at_Attribute_Level: 103, Audit_Change_at_Entity_Level: 102, Audit_Change_at_Org_Level: 104, Audit_Disabled: 110, Audit_Enabled: 107, Audit_Log_Deletion: 111, Book: 50, Cancel: 17, Cascade: 11, Clone: 61, Close: 16, Complete: 18, Create: 1, Create_AI_assisted: 123, Deactivate: 5, Delete: 3, Delete_Attribute: 101, Delete_Entity: 100, Disassociate_Entities: 34, Disqualify: 25, Enabled_for_organization: 63, Entity_Audit_Started: 105, Entity_Audit_Stopped: 108, Fulfill: 22, Generate_Quote_From_Opportunity: 51, Hold: 30, Import_Mappings: 60, Internal_Processing: 46, Invoice: 29, IPFirewallAcccesAllowed: 119, IPFirewallAcccesDenied: 118, Lose: 45, Merge: 12, Modify_Share: 48, Paid: 23, Qualify: 24, Read_Unmasked: 125, Reject: 27, Remove_Item: 38, Remove_Member: 32, Remove_Members: 36, Remove_Privileges_From_Role: 58, Remove_Role_From_Team: 54, Remove_Role_From_User: 56, Remove_Substitute: 40, Renew: 42, Reopen: 21, Replace_Privileges_In_Role: 59, Reschedule: 47, Resolve: 20, Restore: 120, Retain: 116, Retrieve: 15, Revise: 43, RollbackRetain: 117, Send_Direct_Email: 62, Set_State: 41, Share: 14, Submit: 26, Unknown: 0, Unshare: 49, Update: 2, Update_AI_assisted: 124, Upsert: 6, User_Access_Audit_Started: 112, User_Access_Audit_Stopped: 113, User_Access_via_Web: 64, User_Access_via_Web_Services: 65, Win: 44 },
		ObjectTypeCode: { },
		Operation: { Access: 4, Archive: 115, Create: 1, CustomOperation: 200, Delete: 3, Restore: 118, Retain: 116, RollbackRetain: 117, Update: 2, Upsert: 5 },
		RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
	};
})(OptionSet || (OptionSet = /** @type {any} */ ({})));