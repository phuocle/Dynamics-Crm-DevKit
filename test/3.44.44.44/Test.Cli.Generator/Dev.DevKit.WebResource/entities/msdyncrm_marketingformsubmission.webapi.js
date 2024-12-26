'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdyncrm_marketingformsubmissionApi = function (e) {
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
		var _msdyncrm_marketingformsubmission = {
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdyncrm_contactmatchingresult: { a: 'msdyncrm_contactmatchingresult' },
			msdyncrm_customerjourneyid: { b: 'msdyncrm_customerjourneyid', a: '_msdyncrm_customerjourneyid_value', c: 'msdyncrm_customerjourneies', d: 'msdyncrm_customerjourney' },
			msdyncrm_customerjourneyid_value: { a: 'msdyncrm_customerjourneyid_value' },
			msdyncrm_eventid_value: { a: 'msdyncrm_eventid_value' },
			msdyncrm_failuredescription: { a: 'msdyncrm_failuredescription' },
			msdyncrm_failuretechnicaldetails: { a: 'msdyncrm_failuretechnicaldetails' },
			msdyncrm_formname: { a: 'msdyncrm_formname' },
			msdyncrm_leadmatchingresult: { a: 'msdyncrm_leadmatchingresult' },
			msdyncrm_marketingemailid: { b: 'msdyncrm_marketingemailid', a: '_msdyncrm_marketingemailid_value', c: 'msdyncrm_marketingemails', d: 'msdyncrm_marketingemail' },
			msdyncrm_marketingemailid_value: { a: 'msdyncrm_marketingemailid_value' },
			msdyncrm_marketingformid: { b: 'msdyncrm_marketingformid', a: '_msdyncrm_marketingformid_value', c: 'msdyncrm_marketingforms', d: 'msdyncrm_marketingform' },
			msdyncrm_marketingformid_value: { a: 'msdyncrm_marketingformid_value' },
			msdyncrm_marketingformsubmissionId: { a: 'msdyncrm_marketingformsubmissionid' },
			msdyncrm_marketingpageid: { b: 'msdyncrm_marketingpageid', a: '_msdyncrm_marketingpageid_value', c: 'msdyncrm_marketingpages', d: 'msdyncrm_marketingpage' },
			msdyncrm_marketingpageid_value: { a: 'msdyncrm_marketingpageid_value' },
			msdyncrm_matchedcontactid: { b: 'msdyncrm_matchedcontactid', a: '_msdyncrm_matchedcontactid_value', c: 'contacts', d: 'contact' },
			msdyncrm_matchedleadid: { b: 'msdyncrm_matchedleadid', a: '_msdyncrm_matchedleadid_value', c: 'leads', d: 'lead' },
			msdyncrm_originalcontactid: { b: 'msdyncrm_originalcontactid', a: '_msdyncrm_originalcontactid_value', c: 'contacts', d: 'contact' },
			msdyncrm_originalcontactid_value: { a: 'msdyncrm_originalcontactid_value' },
			msdyncrm_pageurl: { a: 'msdyncrm_pageurl' },
			msdyncrm_processingstep: { a: 'msdyncrm_processingstep' },
			msdyncrm_registrationid_value: { a: 'msdyncrm_registrationid_value' },
			msdyncrm_sessionid_value: { a: 'msdyncrm_sessionid_value' },
			msdyncrm_submittedvalues: { a: 'msdyncrm_submittedvalues', r: true },
			msdyncrm_timestamp_submission: { a: 'msdyncrm_timestamp_submission' },
			msdyncrm_visitorid_value: { a: 'msdyncrm_visitorid_value' },
			msdyncrm_websiteid_value: { a: 'msdyncrm_websiteid_value' },
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
		var msdyncrm_marketingformsubmission = {};
		msdyncrm_marketingformsubmission.ODataEntity = e;
		msdyncrm_marketingformsubmission.FormattedValue = {};
		for (var field in _msdyncrm_marketingformsubmission) {
			var a = _msdyncrm_marketingformsubmission[field].a;
			var b = _msdyncrm_marketingformsubmission[field].b;
			var c = _msdyncrm_marketingformsubmission[field].c;
			var d = _msdyncrm_marketingformsubmission[field].d;
			var g = _msdyncrm_marketingformsubmission[field].g;
			var r = _msdyncrm_marketingformsubmission[field].r;
			webApiField(msdyncrm_marketingformsubmission, field, e, a, b, c, d, r, u, g);
		}
		msdyncrm_marketingformsubmission.Entity = u;
		msdyncrm_marketingformsubmission.EntityName = 'msdyncrm_marketingformsubmission';
		msdyncrm_marketingformsubmission.EntityCollectionName = 'msdyncrm_marketingformsubmissions';
		msdyncrm_marketingformsubmission['@odata.etag'] = e['@odata.etag'];
		msdyncrm_marketingformsubmission.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdyncrm_marketingformsubmission.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdyncrm_marketingformsubmission;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyncrm_marketingformsubmission = {
		statecode : {
			Active: 0,
			Inactive: 1
		},
		statuscode : {
			Failure: 192350001,
			Finished: 192350003,
			Inactive: 2,
			Pending: 192350000,
			Success: 192350002
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