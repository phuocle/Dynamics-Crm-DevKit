'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.BulkOperationLogApi = function (e) {
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
					value = value.replace('{', '').replace('}', '');
					upsertEntity[schemaName + '@odata.bind'] = '/' + entityLogicalCollectionName + '(' + value + ')';
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
		var _bulkoperationlog = {
			AdditionalInfo: { a: 'additionalinfo' },
			BulkOperationId: { b: 'bulkoperationid', a: '_bulkoperationid_value', c: 'bulkoperations', d: 'bulkoperation' },
			BulkOperationLogId: { a: 'bulkoperationlogid' },
			CampaignActivityId: { b: 'campaignactivityid', a: '_campaignactivityid_value', c: 'campaignactivities', d: 'campaignactivity' },
			createdobjectid_account: { b: 'createdobjectid_account', a: '_createdobjectid_value', c: 'accounts', d: 'account' },
			createdobjectid_activitypointer: { b: 'createdobjectid_activitypointer', a: '_createdobjectid_value', c: 'activitypointers', d: 'activitypointer' },
			createdobjectid_contact: { b: 'createdobjectid_contact', a: '_createdobjectid_value', c: 'contacts', d: 'contact' },
			createdobjectid_lead: { b: 'createdobjectid_lead', a: '_createdobjectid_value', c: 'leads', d: 'lead' },
			createdobjectid_opportunity: { b: 'createdobjectid_opportunity', a: '_createdobjectid_value', c: 'opportunities', d: 'opportunity' },
			ErrorDescriptionFormatted: { a: 'errordescriptionformatted' },
			ErrorNumber: { a: 'errornumber', r: true },
			ErrorNumberFormatted: { a: 'errornumberformatted' },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			Name: { a: 'name' },
			OverriddenCreatedOn_UtcDateOnly: { a: 'overriddencreatedon' },
			OwnerId_systemuser: { b: 'ownerid', a: '_ownerid_value', c: 'systemusers', d: 'systemuser', r: true },
			OwnerId_team: { b: 'ownerid', a: '_ownerid_value', c: 'teams', d: 'team', r: true },
			OwningTeam: { b: 'owningteam', a: '_owningteam_value', c: 'teams', d: 'team', r: true },
			regardingobjectid_account: { b: 'regardingobjectid_account', a: '_regardingobjectid_value', c: 'accounts', d: 'account' },
			regardingobjectid_contact: { b: 'regardingobjectid_contact', a: '_regardingobjectid_value', c: 'contacts', d: 'contact' },
			regardingobjectid_lead: { b: 'regardingobjectid_lead', a: '_regardingobjectid_value', c: 'leads', d: 'lead' },
			TimeZoneRuleVersionNumber: { a: 'timezoneruleversionnumber' },
			UTCConversionTimeZoneCode: { a: 'utcconversiontimezonecode' },
			VersionNumber: { a: 'versionnumber', r: true }
		};
		if (e === undefined) e = {};
		var u = {};
		var bulkoperationlog = {};
		bulkoperationlog.ODataEntity = e;
		bulkoperationlog.FormattedValue = {};
		for (var field in _bulkoperationlog) {
			var a = _bulkoperationlog[field].a;
			var b = _bulkoperationlog[field].b;
			var c = _bulkoperationlog[field].c;
			var d = _bulkoperationlog[field].d;
			var g = _bulkoperationlog[field].g;
			var r = _bulkoperationlog[field].r;
			webApiField(bulkoperationlog, field, e, a, b, c, d, r, u, g);
		}
		bulkoperationlog.Entity = u;
		bulkoperationlog.EntityName = 'bulkoperationlog';
		bulkoperationlog.EntityCollectionName = 'bulkoperationlogs';
		bulkoperationlog['@odata.etag'] = e['@odata.etag'];
		bulkoperationlog.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		bulkoperationlog.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return bulkoperationlog;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.BulkOperationLog = {
		BulkOperationIdType : {
		},
		CampaignActivityIdType : {
		},
		CreatedObjectIdTypeCode : {
		},
		OwnerIdType : {
		},
		RegardingObjectIdTypeCode : {
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