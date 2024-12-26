'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdynmkt_formsettingApi = function (e) {
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
		var _msdynmkt_formsetting = {
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdynmkt_createanewcontact_choice: { a: 'msdynmkt_createanewcontact_choice' },
			msdynmkt_defaultformtargetaudience: { b: 'msdynmkt_defaultformtargetaudience', a: '_msdynmkt_defaultformtargetaudience_value', c: 'msdynmkt_formtargetaudiences', d: 'msdynmkt_formtargetaudience' },
			msdynmkt_defaulttargetaudience: { a: 'msdynmkt_defaulttargetaudience' },
			msdynmkt_Doubleoptin: { a: 'msdynmkt_doubleoptin' },
			msdynmkt_Duplicaterecords: { a: 'msdynmkt_duplicaterecords' },
			msdynmkt_Errornotification: { a: 'msdynmkt_errornotification' },
			msdynmkt_formsettingId: { a: 'msdynmkt_formsettingid' },
			msdynmkt_formtype: { a: 'msdynmkt_formtype' },
			msdynmkt_Howtomatchexistingcontact: { a: 'msdynmkt_howtomatchexistingcontact' },
			msdynmkt_linkedleadtoparentcontact_choice: { a: 'msdynmkt_linkedleadtoparentcontact_choice' },
			msdynmkt_matchexistingcontact_choice: { a: 'msdynmkt_matchexistingcontact_choice' },
			msdynmkt_Name: { a: 'msdynmkt_name' },
			msdynmkt_parentcontactwithsubmitteddata_choice: { a: 'msdynmkt_parentcontactwithsubmitteddata_choice' },
			msdynmkt_Postsubmissionactions: { a: 'msdynmkt_postsubmissionactions' },
			msdynmkt_Prefillfields: { a: 'msdynmkt_prefillfields' },
			msdynmkt_Redirectaftersubmission: { a: 'msdynmkt_redirectaftersubmission' },
			msdynmkt_Thankyouemail: { a: 'msdynmkt_thankyouemail' },
			msdynmkt_Thankyounotification: { a: 'msdynmkt_thankyounotification' },
			msdynmkt_Updatematchedcontactwithsubmitteddata: { a: 'msdynmkt_updatematchedcontactwithsubmitteddata' },
			msdynmkt_updateparentcontactwithsubmitteddata_choi: { a: 'msdynmkt_updateparentcontactwithsubmitteddata_choi' },
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
		var msdynmkt_formsetting = {};
		msdynmkt_formsetting.ODataEntity = e;
		msdynmkt_formsetting.FormattedValue = {};
		for (var field in _msdynmkt_formsetting) {
			var a = _msdynmkt_formsetting[field].a;
			var b = _msdynmkt_formsetting[field].b;
			var c = _msdynmkt_formsetting[field].c;
			var d = _msdynmkt_formsetting[field].d;
			var g = _msdynmkt_formsetting[field].g;
			var r = _msdynmkt_formsetting[field].r;
			webApiField(msdynmkt_formsetting, field, e, a, b, c, d, r, u, g);
		}
		msdynmkt_formsetting.Entity = u;
		msdynmkt_formsetting.EntityName = 'msdynmkt_formsetting';
		msdynmkt_formsetting.EntityCollectionName = 'msdynmkt_formsettings';
		msdynmkt_formsetting['@odata.etag'] = e['@odata.etag'];
		msdynmkt_formsetting.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdynmkt_formsetting.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdynmkt_formsetting;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdynmkt_formsetting = {
		msdynmkt_createanewcontact_choice : {
			Contact: 100000001,
			Lead: 100000000,
			Lead_Contact: 100000002
		},
		msdynmkt_defaulttargetaudience : {
			Contact: 100000001,
			Lead: 100000000,
			Lead_Contact: 100000002
		},
		msdynmkt_Duplicaterecords : {
			Always_create_new_record: 100000001,
			Match_existing_contact_using_email: 100000000
		},
		msdynmkt_formtype : {
			Marketing_form: 534120000,
			Registration_form: 534120001
		},
		msdynmkt_Howtomatchexistingcontact : {
			Always_create_new_record: 100000001,
			Match_existing_contact_using_email: 100000000
		},
		msdynmkt_linkedleadtoparentcontact_choice : {
			Contact: 100000001,
			Lead: 100000000,
			Lead_Contact: 100000002
		},
		msdynmkt_matchexistingcontact_choice : {
			Always_create_new_record: 100000001,
			Match_existing_contact_using_email: 100000000
		},
		msdynmkt_Postsubmissionactions : {
			Thank_you_message: 100000000
		},
		msdynmkt_Updatematchedcontactwithsubmitteddata : {
			Contact: 100000001,
			Lead: 100000000,
			Lead_Contact: 100000002
		},
		msdynmkt_updateparentcontactwithsubmitteddata_choi : {
			Contact: 100000001,
			Lead: 100000000,
			Lead_Contact: 100000002
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