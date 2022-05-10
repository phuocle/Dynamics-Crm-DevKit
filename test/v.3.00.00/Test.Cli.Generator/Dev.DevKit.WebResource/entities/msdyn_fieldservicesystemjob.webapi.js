'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdyn_fieldservicesystemjobApi = function (e) {
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
		var _msdyn_fieldservicesystemjob = {
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdyn_ConditionCode: { a: 'msdyn_conditioncode' },
			msdyn_ExceptionMessage: { a: 'msdyn_exceptionmessage' },
			msdyn_ExceptionTrace: { a: 'msdyn_exceptiontrace' },
			msdyn_fieldservicesystemjobId: { a: 'msdyn_fieldservicesystemjobid' },
			msdyn_InputParameter: { a: 'msdyn_inputparameter' },
			msdyn_InputParameterType: { a: 'msdyn_inputparametertype' },
			msdyn_jobname: { a: 'msdyn_jobname' },
			msdyn_JobStatus: { a: 'msdyn_jobstatus' },
			msdyn_JobType: { a: 'msdyn_jobtype' },
			msdyn_OutputParameter: { a: 'msdyn_outputparameter' },
			msdyn_OutputParameterType: { a: 'msdyn_outputparametertype' },
			msdyn_OwnerId: { b: 'msdyn_OwnerId', a: '_msdyn_ownerid_value', c: 'systemusers', d: 'systemuser' },
			OrganizationId: { b: 'organizationid', a: '_organizationid_value', c: 'organizations', d: 'organization', r: true },
			OverriddenCreatedOn_UtcDateOnly: { a: 'overriddencreatedon' },
			statecode: { a: 'statecode' },
			statuscode: { a: 'statuscode' },
			TimeZoneRuleVersionNumber: { a: 'timezoneruleversionnumber' },
			UTCConversionTimeZoneCode: { a: 'utcconversiontimezonecode' },
			VersionNumber: { a: 'versionnumber', r: true }
		};
		if (e === undefined) e = {};
		var u = {};
		var msdyn_fieldservicesystemjob = {};
		msdyn_fieldservicesystemjob.ODataEntity = e;
		msdyn_fieldservicesystemjob.FormattedValue = {};
		for (var field in _msdyn_fieldservicesystemjob) {
			var a = _msdyn_fieldservicesystemjob[field].a;
			var b = _msdyn_fieldservicesystemjob[field].b;
			var c = _msdyn_fieldservicesystemjob[field].c;
			var d = _msdyn_fieldservicesystemjob[field].d;
			var g = _msdyn_fieldservicesystemjob[field].g;
			var r = _msdyn_fieldservicesystemjob[field].r;
			webApiField(msdyn_fieldservicesystemjob, field, e, a, b, c, d, r, u, g);
		}
		msdyn_fieldservicesystemjob.Entity = u;
		msdyn_fieldservicesystemjob.EntityName = 'msdyn_fieldservicesystemjob';
		msdyn_fieldservicesystemjob.EntityCollectionName = 'msdyn_fieldservicesystemjobs';
		msdyn_fieldservicesystemjob['@odata.etag'] = e['@odata.etag'];
		msdyn_fieldservicesystemjob.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdyn_fieldservicesystemjob.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdyn_fieldservicesystemjob;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_fieldservicesystemjob = {
		msdyn_InputParameterType : {
			Json: 690970001,
			String_List: 690970000,
			Xml: 690970002
		},
		msdyn_JobStatus : {
			Completed: 690970002,
			Failed: 690970003,
			In_Progress: 690970001,
			Pending: 690970000
		},
		msdyn_OutputParameterType : {
			Json: 690970001,
			String_List: 690970000,
			Xml: 690970002
		},
		statecode : {
			Active: 0,
			Inactive: 1
		},
		statuscode : {
			Active: 1,
			Inactive: 2
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