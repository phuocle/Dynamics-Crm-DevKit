'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdyn_customerfeedbacksurveyApi = function (e) {
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
		var _msdyn_customerfeedbacksurvey = {
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdyn_customerfeedbackbotstatus: { a: 'msdyn_customerfeedbackbotstatus' },
			msdyn_customerfeedbacksurveyId: { a: 'msdyn_customerfeedbacksurveyid' },
			msdyn_customerfeedbacksurveyname: { a: 'msdyn_customerfeedbacksurveyname' },
			msdyn_customerfeedbacksurveyprovider: { a: 'msdyn_customerfeedbacksurveyprovider' },
			msdyn_customerfeedbacksurveyurl: { a: 'msdyn_customerfeedbacksurveyurl' },
			msdyn_customhosturl: { a: 'msdyn_customhosturl' },
			msdyn_microsoftcopilotstudiobot: { b: 'msdyn_microsoftcopilotstudiobot', a: '_msdyn_microsoftcopilotstudiobot_value', c: 'bots', d: 'bot' },
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
		var msdyn_customerfeedbacksurvey = {};
		msdyn_customerfeedbacksurvey.ODataEntity = e;
		msdyn_customerfeedbacksurvey.FormattedValue = {};
		for (var field in _msdyn_customerfeedbacksurvey) {
			var a = _msdyn_customerfeedbacksurvey[field].a;
			var b = _msdyn_customerfeedbacksurvey[field].b;
			var c = _msdyn_customerfeedbacksurvey[field].c;
			var d = _msdyn_customerfeedbacksurvey[field].d;
			var g = _msdyn_customerfeedbacksurvey[field].g;
			var r = _msdyn_customerfeedbacksurvey[field].r;
			webApiField(msdyn_customerfeedbacksurvey, field, e, a, b, c, d, r, u, g);
		}
		msdyn_customerfeedbacksurvey.Entity = u;
		msdyn_customerfeedbacksurvey.EntityName = 'msdyn_customerfeedbacksurvey';
		msdyn_customerfeedbacksurvey.EntityCollectionName = 'msdyn_customerfeedbacksurveies';
		msdyn_customerfeedbacksurvey['@odata.etag'] = e['@odata.etag'];
		msdyn_customerfeedbacksurvey.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdyn_customerfeedbacksurvey.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdyn_customerfeedbacksurvey;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_customerfeedbacksurvey = {
		msdyn_customerfeedbackbotstatus : {
			Disconnected: 357890002,
			InProgress: 357890000,
			Ready: 357890001
		},
		msdyn_customerfeedbacksurveyprovider : {
			Customer_Voice: 600990000,
			Microsoft_Copilot_Studio: 600990001
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