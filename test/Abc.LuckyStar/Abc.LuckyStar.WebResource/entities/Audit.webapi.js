'use strict';
/** @namespace LuckyStar */
var LuckyStar;
(function (LuckyStar) {
	'use strict';
	LuckyStar.AuditApi = function (e) {
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
		var audit = {
			Action: { a: 'action', r: true },
			AttributeMask: { a: 'attributemask', r: true },
			AuditId: { a: 'auditid', r: true },
			CallingUserId: { b: 'callinguserid', a: '_callinguserid_value', c: 'systemusers', d: 'systemuser', r: true },
			ChangeData: { a: 'changedata', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			ObjectId: { b: 'objectid', a: '_objectid_value', c: '', d: '', r: true },
			Operation: { a: 'operation', r: true },
			RegardingObjectId: { b: 'regardingobjectid', a: '_regardingobjectid_value', c: '', d: '' },
			TransactionId: { a: 'transactionid', r: true },
			UserAdditionalInfo: { a: 'useradditionalinfo' }
		};
		if (e === undefined) e = {};
		var u = {};
		for (var field in audit) {
			var a = audit[field].a;
			var b = audit[field].b;
			var c = audit[field].c;
			var d = audit[field].d;
			var g = audit[field].g;
			var r = audit[field].r;
			audit[field] = webApiField(e, a, b, c, d, r, u, g);
		}
		audit.Entity = u;
		audit.EntityName = 'audit';
		audit.EntityCollectionName = 'audits';
		audit['@odata.etag'] = e['@odata.etag'];
		audit.getAliasedValue = function (alias, isMultiOptionSet) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		audit.getAliasedFormattedValue = function (alias, isMultiOptionSet) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return EMPTY_STRING;
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return audit;
	};
})(LuckyStar || (LuckyStar = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.Audit = {
		Action : {
			Unknown: 0,
			Create: 1,
			Update: 2,
			Delete: 3,
			Activate: 4,
			Deactivate: 5,
			Cascade: 11,
			Merge: 12,
			Assign: 13,
			Share: 14,
			Retrieve: 15,
			Close: 16,
			Cancel: 17,
			Complete: 18,
			Resolve: 20,
			Reopen: 21,
			Fulfill: 22,
			Paid: 23,
			Qualify: 24,
			Disqualify: 25,
			Submit: 26,
			Reject: 27,
			Approve: 28,
			Invoice: 29,
			Hold: 30,
			Add_Member: 31,
			Remove_Member: 32,
			Associate_Entities: 33,
			Disassociate_Entities: 34,
			Add_Members: 35,
			Remove_Members: 36,
			Add_Item: 37,
			Remove_Item: 38,
			Add_Substitute: 39,
			Remove_Substitute: 40,
			Set_State: 41,
			Renew: 42,
			Revise: 43,
			Win: 44,
			Lose: 45,
			Internal_Processing: 46,
			Reschedule: 47,
			Modify_Share: 48,
			Unshare: 49,
			Book: 50,
			Generate_Quote_From_Opportunity: 51,
			Add_To_Queue: 52,
			Assign_Role_To_Team: 53,
			Remove_Role_From_Team: 54,
			Assign_Role_To_User: 55,
			Remove_Role_From_User: 56,
			Add_Privileges_to_Role: 57,
			Remove_Privileges_From_Role: 58,
			Replace_Privileges_In_Role: 59,
			Import_Mappings: 60,
			Clone: 61,
			Send_Direct_Email: 62,
			Enabled_for_organization: 63,
			User_Access_via_Web: 64,
			User_Access_via_Web_Services: 65,
			Delete_Entity: 100,
			Delete_Attribute: 101,
			Audit_Change_at_Entity_Level: 102,
			Audit_Change_at_Attribute_Level: 103,
			Audit_Change_at_Org_Level: 104,
			Entity_Audit_Started: 105,
			Attribute_Audit_Started: 106,
			Audit_Enabled: 107,
			Entity_Audit_Stopped: 108,
			Attribute_Audit_Stopped: 109,
			Audit_Disabled: 110,
			Audit_Log_Deletion: 111,
			User_Access_Audit_Started: 112,
			User_Access_Audit_Stopped: 113
		},
		Operation : {
			Create: 1,
			Update: 2,
			Delete: 3,
			Access: 4
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