'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdyn_smsnumberApi = function (e) {
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
		var _msdyn_smsnumber = {
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdyn_Description: { a: 'msdyn_description' },
			msdyn_enablefileattachmentsforagents: { a: 'msdyn_enablefileattachmentsforagents' },
			msdyn_enablefileattachmentsforcustomers: { a: 'msdyn_enablefileattachmentsforcustomers' },
			msdyn_FormattedPhoneNumber: { a: 'msdyn_formattedphonenumber' },
			msdyn_LiveWorkStreamId: { b: 'msdyn_LiveWorkStreamId', a: '_msdyn_liveworkstreamid_value', c: 'msdyn_liveworkstreams', d: 'msdyn_liveworkstream' },
			msdyn_number: { a: 'msdyn_number' },
			msdyn_ocwidgetlanguage: { b: 'msdyn_ocwidgetlanguage', a: '_msdyn_ocwidgetlanguage_value', c: 'msdyn_oclanguages', d: 'msdyn_oclanguage' },
			msdyn_operatinghourid: { b: 'msdyn_operatinghourid', a: '_msdyn_operatinghourid_value', c: 'msdyn_operatinghours', d: 'msdyn_operatinghour' },
			msdyn_PhoneNumberId: { b: 'msdyn_PhoneNumberId', a: '_msdyn_phonenumberid_value', c: 'msdyn_ocphonenumbers', d: 'msdyn_ocphonenumber' },
			msdyn_PostConversationSurvey: { b: 'msdyn_PostConversationSurvey', a: '_msdyn_postconversationsurvey_value', c: 'msfp_surveies', d: 'msfp_survey' },
			msdyn_PostConversationSurveyEnable: { a: 'msdyn_postconversationsurveyenable' },
			msdyn_PostConversationSurveyMessageText: { a: 'msdyn_postconversationsurveymessagetext' },
			msdyn_PostConversationSurveyMode: { a: 'msdyn_postconversationsurveymode' },
			msdyn_Provider: { a: 'msdyn_provider' },
			msdyn_smsnumberId: { a: 'msdyn_smsnumberid' },
			msdyn_Type: { a: 'msdyn_type' },
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
		var msdyn_smsnumber = {};
		msdyn_smsnumber.ODataEntity = e;
		msdyn_smsnumber.FormattedValue = {};
		for (var field in _msdyn_smsnumber) {
			var a = _msdyn_smsnumber[field].a;
			var b = _msdyn_smsnumber[field].b;
			var c = _msdyn_smsnumber[field].c;
			var d = _msdyn_smsnumber[field].d;
			var g = _msdyn_smsnumber[field].g;
			var r = _msdyn_smsnumber[field].r;
			webApiField(msdyn_smsnumber, field, e, a, b, c, d, r, u, g);
		}
		msdyn_smsnumber.Entity = u;
		msdyn_smsnumber.EntityName = 'msdyn_smsnumber';
		msdyn_smsnumber.EntityCollectionName = 'msdyn_smsnumbers';
		msdyn_smsnumber['@odata.etag'] = e['@odata.etag'];
		msdyn_smsnumber.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdyn_smsnumber.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return EMPTY_STRING;
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdyn_smsnumber;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_smsnumber = {
		msdyn_PostConversationSurveyMode : {
			Insert_survey_in_conversation: 192350000,
			Send_survey_link_to_conversation: 192350001
		},
		msdyn_Provider : {
			TeleSign_App: 192350000
		},
		msdyn_Type : {
			Long_code: 192350000,
			Short_code: 192350001,
			Toll_free: 192350002
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