﻿'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdyn_agreementbookingservicetaskApi = function (e) {
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
		var _msdyn_agreementbookingservicetask = {
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdyn_Agreement: { b: 'msdyn_Agreement', a: '_msdyn_agreement_value', c: 'msdyn_agreements', d: 'msdyn_agreement' },
			msdyn_AgreementBookingIncident: { b: 'msdyn_AgreementBookingIncident', a: '_msdyn_agreementbookingincident_value', c: 'msdyn_agreementbookingincidents', d: 'msdyn_agreementbookingincident' },
			msdyn_agreementbookingservicetaskId: { a: 'msdyn_agreementbookingservicetaskid' },
			msdyn_AgreementBookingSetup: { b: 'msdyn_AgreementBookingSetup', a: '_msdyn_agreementbookingsetup_value', c: 'msdyn_agreementbookingsetups', d: 'msdyn_agreementbookingsetup' },
			msdyn_CustomerAsset: { b: 'msdyn_CustomerAsset', a: '_msdyn_customerasset_value', c: 'msdyn_customerassets', d: 'msdyn_customerasset' },
			msdyn_Description: { a: 'msdyn_description' },
			msdyn_EstimatedDuration: { a: 'msdyn_estimatedduration' },
			msdyn_Inspection: { b: 'msdyn_Inspection', a: '_msdyn_inspection_value', c: 'msdyn_inspections', d: 'msdyn_inspection' },
			msdyn_InspectionEnabled: { a: 'msdyn_inspectionenabled' },
			msdyn_InternalFlags: { a: 'msdyn_internalflags' },
			msdyn_IsCopied: { a: 'msdyn_iscopied' },
			msdyn_LineOrder: { a: 'msdyn_lineorder' },
			msdyn_name: { a: 'msdyn_name' },
			msdyn_TaskType: { b: 'msdyn_TaskType', a: '_msdyn_tasktype_value', c: 'msdyn_servicetasktypes', d: 'msdyn_servicetasktype' },
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
		var msdyn_agreementbookingservicetask = {};
		msdyn_agreementbookingservicetask.ODataEntity = e;
		msdyn_agreementbookingservicetask.FormattedValue = {};
		for (var field in _msdyn_agreementbookingservicetask) {
			var a = _msdyn_agreementbookingservicetask[field].a;
			var b = _msdyn_agreementbookingservicetask[field].b;
			var c = _msdyn_agreementbookingservicetask[field].c;
			var d = _msdyn_agreementbookingservicetask[field].d;
			var g = _msdyn_agreementbookingservicetask[field].g;
			var r = _msdyn_agreementbookingservicetask[field].r;
			webApiField(msdyn_agreementbookingservicetask, field, e, a, b, c, d, r, u, g);
		}
		msdyn_agreementbookingservicetask.Entity = u;
		msdyn_agreementbookingservicetask.EntityName = 'msdyn_agreementbookingservicetask';
		msdyn_agreementbookingservicetask.EntityCollectionName = 'msdyn_agreementbookingservicetasks';
		msdyn_agreementbookingservicetask['@odata.etag'] = e['@odata.etag'];
		msdyn_agreementbookingservicetask.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdyn_agreementbookingservicetask.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return EMPTY_STRING;
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdyn_agreementbookingservicetask;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_agreementbookingservicetask = {
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