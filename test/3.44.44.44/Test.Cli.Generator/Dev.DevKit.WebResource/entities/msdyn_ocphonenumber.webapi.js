﻿'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdyn_ocphonenumberApi = function (e) {
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
		var _msdyn_ocphonenumber = {
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
			msdyn_appmodule: { a: 'msdyn_appmodule', g: true },
			msdyn_carrierid: { b: 'msdyn_carrierid', a: '_msdyn_carrierid_value', c: 'msdyn_occarriers', d: 'msdyn_occarrier' },
			msdyn_countryisocode: { a: 'msdyn_countryisocode' },
			msdyn_name: { a: 'msdyn_name' },
			msdyn_Objective: { a: 'msdyn_objective' },
			msdyn_occommunicationprovidersettingId: { b: 'msdyn_occommunicationprovidersettingId', a: '_msdyn_occommunicationprovidersettingid_value', c: 'msdyn_occommunicationprovidersettings', d: 'msdyn_occommunicationprovidersetting' },
			msdyn_ocphonenumberId: { a: 'msdyn_ocphonenumberid' },
			msdyn_ocphonenumbersource: { a: 'msdyn_ocphonenumbersource' },
			msdyn_phoneinboundenabled: { a: 'msdyn_phoneinboundenabled' },
			msdyn_phonenumber: { a: 'msdyn_phonenumber' },
			msdyn_phonenumbertype: { a: 'msdyn_phonenumbertype' },
			msdyn_phoneoutboundenabled: { a: 'msdyn_phoneoutboundenabled' },
			msdyn_smsinboundenabled: { a: 'msdyn_smsinboundenabled' },
			msdyn_smsoutboundenabled: { a: 'msdyn_smsoutboundenabled' },
			msdyn_teamsresourceaccount: { a: 'msdyn_teamsresourceaccount' },
			msdyn_type: { a: 'msdyn_type' },
			OverriddenCreatedOn_UtcDateOnly: { a: 'overriddencreatedon' },
			OverwriteTime_UtcDateAndTime: { a: 'overwritetime', r: true },
			OwnerId_systemuser: { b: 'ownerid', a: '_ownerid_value', c: 'systemusers', d: 'systemuser' },
			OwnerId_team: { b: 'ownerid', a: '_ownerid_value', c: 'teams', d: 'team' },
			OwningBusinessUnit: { b: 'owningbusinessunit', a: '_owningbusinessunit_value', c: 'businessunits', d: 'businessunit', r: true },
			OwningTeam: { b: 'owningteam', a: '_owningteam_value', c: 'teams', d: 'team', r: true },
			OwningUser: { b: 'owninguser', a: '_owninguser_value', c: 'systemusers', d: 'systemuser', r: true },
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
		var msdyn_ocphonenumber = {};
		msdyn_ocphonenumber.ODataEntity = e;
		msdyn_ocphonenumber.FormattedValue = {};
		for (var field in _msdyn_ocphonenumber) {
			var a = _msdyn_ocphonenumber[field].a;
			var b = _msdyn_ocphonenumber[field].b;
			var c = _msdyn_ocphonenumber[field].c;
			var d = _msdyn_ocphonenumber[field].d;
			var g = _msdyn_ocphonenumber[field].g;
			var r = _msdyn_ocphonenumber[field].r;
			webApiField(msdyn_ocphonenumber, field, e, a, b, c, d, r, u, g);
		}
		msdyn_ocphonenumber.Entity = u;
		msdyn_ocphonenumber.EntityName = 'msdyn_ocphonenumber';
		msdyn_ocphonenumber.EntityCollectionName = 'msdyn_ocphonenumbers';
		msdyn_ocphonenumber['@odata.etag'] = e['@odata.etag'];
		msdyn_ocphonenumber.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdyn_ocphonenumber.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdyn_ocphonenumber;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_ocphonenumber = {
		ComponentState : {
			Deleted: 2,
			Deleted_Unpublished: 3,
			Published: 0,
			Unpublished: 1
		},
		msdyn_appmodule : {
			Service: 192350000
		},
		msdyn_Objective : {
			Conversation: 192350000,
			Lead: 192350001
		},
		msdyn_ocphonenumbersource : {
			Direct_Offer: 192350000,
			Direct_Routing: 192350001
		},
		msdyn_phonenumbertype : {
			ACS: 0,
			Teams: 1
		},
		msdyn_type : {
			Geo: 192350000,
			Short_code: 192350002,
			Toll_free: 192350001
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