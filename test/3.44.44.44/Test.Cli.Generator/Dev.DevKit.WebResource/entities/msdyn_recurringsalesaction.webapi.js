'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdyn_recurringsalesactionApi = function (e) {
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
		var _msdyn_recurringsalesaction = {
			ComponentIdUnique: { a: 'componentidunique', r: true },
			ComponentState: { a: 'componentstate', r: true },
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			IsCustomizable: { a: 'iscustomizable' },
			IsManaged: { a: 'ismanaged', r: true },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdyn_CustomActionName: { a: 'msdyn_customactionname' },
			msdyn_FailureCount: { a: 'msdyn_failurecount' },
			msdyn_FeatureName: { a: 'msdyn_featurename' },
			msdyn_IsRecurrencePatternSchedule: { a: 'msdyn_isrecurrencepatternschedule' },
			msdyn_LastExecutionInfo: { a: 'msdyn_lastexecutioninfo' },
			msdyn_Payload: { a: 'msdyn_payload' },
			msdyn_RecordState: { a: 'msdyn_recordstate' },
			msdyn_recurringsalesactionId: { a: 'msdyn_recurringsalesactionid' },
			msdyn_RetryCount: { a: 'msdyn_retrycount' },
			msdyn_Schedule: { a: 'msdyn_schedule' },
			msdyn_StartDate_TimezoneDateAndTime: { a: 'msdyn_startdate' },
			msdyn_TriggerName: { a: 'msdyn_triggername' },
			msdyn_WorkloadName: { a: 'msdyn_workloadname' },
			OrganizationId: { b: 'organizationid', a: '_organizationid_value', c: 'organizations', d: 'organization', r: true },
			OverriddenCreatedOn_UtcDateOnly: { a: 'overriddencreatedon' },
			OverwriteTime_UtcDateAndTime: { a: 'overwritetime', r: true },
			SolutionId: { a: 'solutionid', r: true },
			statecode: { a: 'statecode' },
			statuscode: { a: 'statuscode' },
			SupportingSolutionId: { a: 'supportingsolutionid', r: true },
			TimeZoneRuleVersionNumber: { a: 'timezoneruleversionnumber' },
			UTCConversionTimeZoneCode: { a: 'utcconversiontimezonecode' },
			VersionNumber: { a: 'versionnumber', r: true }
		};
		if (e === undefined) e = {};
		var u = {};
		var msdyn_recurringsalesaction = {};
		msdyn_recurringsalesaction.ODataEntity = e;
		msdyn_recurringsalesaction.FormattedValue = {};
		for (var field in _msdyn_recurringsalesaction) {
			var a = _msdyn_recurringsalesaction[field].a;
			var b = _msdyn_recurringsalesaction[field].b;
			var c = _msdyn_recurringsalesaction[field].c;
			var d = _msdyn_recurringsalesaction[field].d;
			var g = _msdyn_recurringsalesaction[field].g;
			var r = _msdyn_recurringsalesaction[field].r;
			webApiField(msdyn_recurringsalesaction, field, e, a, b, c, d, r, u, g);
		}
		msdyn_recurringsalesaction.Entity = u;
		msdyn_recurringsalesaction.EntityName = 'msdyn_recurringsalesaction';
		msdyn_recurringsalesaction.EntityCollectionName = 'msdyn_recurringsalesactions';
		msdyn_recurringsalesaction['@odata.etag'] = e['@odata.etag'];
		msdyn_recurringsalesaction.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdyn_recurringsalesaction.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdyn_recurringsalesaction;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_recurringsalesaction = {
		ComponentState : {
			Deleted: 2,
			Deleted_Unpublished: 3,
			Published: 0,
			Unpublished: 1
		},
		msdyn_FeatureName : {
			Digital_selling_task_maintenance_job: 13,
			OOB_Suggestions_Athena_Sync_Status: 14,
			Predictive_Forecasting: 16,
			Recurrent_Assignment: 3,
			Recurrent_Duplicate_Detection: 4,
			Relationship_Analytics: 15,
			Restore_Missing_RSA_Triggers: 8,
			Sales_Accelerator_Mail_Notification_to_Admin: 5,
			Sales_analytics_provisioning_trigger: 12,
			Sales_Cxp_provisioning_trigger: 11,
			Scheduled_Assignment: 1,
			Scheduled_DataHygiene_Validation: 7,
			Scheduled_DataHygiene_Validation_Trigger: 6,
			Scheduled_Maintenance: 2,
			Scheduled_Scoring: 0,
			Sync_CRUD_Data_to_CDS: 10,
			Sync_CRUD_Data_to_CDS_Validation: 9
		},
		msdyn_RecordState : {
			Created: 0,
			Missing: 1
		},
		statecode : {
			Active: 0,
			Inactive: 1
		},
		statuscode : {
			Active: 1,
			Inactive: 2,
			Missing: 3
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