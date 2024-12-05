'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdynmkt_marketingformsubmissionApi = function (e) {
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
		var _msdynmkt_marketingformsubmission = {
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdynmkt_compliancesettings4id: { b: 'msdynmkt_compliancesettings4id', a: '_msdynmkt_compliancesettings4id_value', c: 'msdynmkt_compliancesettings4s', d: 'msdynmkt_compliancesettings4' },
			msdynmkt_contactableemail: { a: 'msdynmkt_contactableemail' },
			msdynmkt_createdentity: { b: 'msdynmkt_createdentity', a: '_msdynmkt_createdentity_value', c: 'msdynmkt_createdentitylinks', d: 'msdynmkt_createdentitylink' },
			msdynmkt_customerjourneyid: { b: 'msdynmkt_customerjourneyid', a: '_msdynmkt_customerjourneyid_value', c: 'msdynmkt_journeies', d: 'msdynmkt_journey' },
			msdynmkt_emailid: { b: 'msdynmkt_emailid', a: '_msdynmkt_emailid_value', c: 'msdynmkt_emails', d: 'msdynmkt_email' },
			msdynmkt_eventregistration: { b: 'msdynmkt_eventregistration', a: '_msdynmkt_eventregistration_value', c: 'msevtmgt_eventregistrations', d: 'msevtmgt_eventregistration' },
			msdynmkt_failuredescription: { a: 'msdynmkt_failuredescription' },
			msdynmkt_linkedsubmissionid: { a: 'msdynmkt_linkedsubmissionid' },
			msdynmkt_marketingformid: { b: 'msdynmkt_marketingformid', a: '_msdynmkt_marketingformid_value', c: 'msdynmkt_marketingforms', d: 'msdynmkt_marketingform' },
			msdynmkt_marketingformsubmissionId: { a: 'msdynmkt_marketingformsubmissionid' },
			msdynmkt_marketingformsubmissiontype: { a: 'msdynmkt_marketingformsubmissiontype' },
			msdynmkt_name: { a: 'msdynmkt_name' },
			msdynmkt_pageurl: { a: 'msdynmkt_pageurl' },
			msdynmkt_submittedvalues: { a: 'msdynmkt_submittedvalues', r: true },
			msdynmkt_trackingid: { a: 'msdynmkt_trackingid' },
			OverriddenCreatedOn_UtcDateOnly: { a: 'overriddencreatedon' },
			OwnerId_systemuser: { b: 'ownerid', a: '_ownerid_value', c: 'systemusers', d: 'systemuser' },
			OwnerId_team: { b: 'ownerid', a: '_ownerid_value', c: 'teams', d: 'team' },
			OwningBusinessUnit: { b: 'owningbusinessunit', a: '_owningbusinessunit_value', c: 'businessunits', d: 'businessunit', r: true },
			OwningTeam: { b: 'owningteam', a: '_owningteam_value', c: 'teams', d: 'team', r: true },
			OwningUser: { b: 'owninguser', a: '_owninguser_value', c: 'systemusers', d: 'systemuser', r: true },
			statecode: { a: 'statecode' },
			statuscode: { a: 'statuscode' },
			TimeZoneRuleVersionNumber: { a: 'timezoneruleversionnumber' },
			UTCConversionTimeZoneCode: { a: 'utcconversiontimezonecode' },
			VersionNumber: { a: 'versionnumber', r: true }
		};
		if (e === undefined) e = {};
		var u = {};
		var msdynmkt_marketingformsubmission = {};
		msdynmkt_marketingformsubmission.ODataEntity = e;
		msdynmkt_marketingformsubmission.FormattedValue = {};
		for (var field in _msdynmkt_marketingformsubmission) {
			var a = _msdynmkt_marketingformsubmission[field].a;
			var b = _msdynmkt_marketingformsubmission[field].b;
			var c = _msdynmkt_marketingformsubmission[field].c;
			var d = _msdynmkt_marketingformsubmission[field].d;
			var g = _msdynmkt_marketingformsubmission[field].g;
			var r = _msdynmkt_marketingformsubmission[field].r;
			webApiField(msdynmkt_marketingformsubmission, field, e, a, b, c, d, r, u, g);
		}
		msdynmkt_marketingformsubmission.Entity = u;
		msdynmkt_marketingformsubmission.EntityName = 'msdynmkt_marketingformsubmission';
		msdynmkt_marketingformsubmission.EntityCollectionName = 'msdynmkt_marketingformsubmissions';
		msdynmkt_marketingformsubmission['@odata.etag'] = e['@odata.etag'];
		msdynmkt_marketingformsubmission.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdynmkt_marketingformsubmission.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdynmkt_marketingformsubmission;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdynmkt_marketingformsubmission = {
		msdynmkt_marketingformsubmissiontype : {
			Form_Capture: 624650001,
			Form_Embed: 624650000,
			Form_Standalone: 624650002
		},
		statecode : {
			Active: 0,
			Inactive: 1
		},
		statuscode : {
			Confirmation_Pending: 575440004,
			Failure: 575440001,
			Failure_after_Confirmation: 575440005,
			Finished: 575440003,
			Inactive: 2,
			Pending: 575440000,
			Success: 575440002,
			Warning: 575440006
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