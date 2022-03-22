'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdyn_ocsmschannelsettingApi = function (e) {
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
		var _msdyn_ocsmschannelsetting = {
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdyn_enablefileattachmentforagents: { a: 'msdyn_enablefileattachmentforagents' },
			msdyn_enablefileattachmentforcustomers: { a: 'msdyn_enablefileattachmentforcustomers' },
			msdyn_inboundurl: { a: 'msdyn_inboundurl' },
			msdyn_language: { b: 'msdyn_language', a: '_msdyn_language_value', c: 'msdyn_oclanguages', d: 'msdyn_oclanguage' },
			msdyn_liveworkstreamid: { b: 'msdyn_liveworkstreamid', a: '_msdyn_liveworkstreamid_value', c: 'msdyn_liveworkstreams', d: 'msdyn_liveworkstream' },
			msdyn_name: { a: 'msdyn_name' },
			msdyn_ocsmschannelsettingId: { a: 'msdyn_ocsmschannelsettingid' },
			msdyn_operatinghourid: { b: 'msdyn_operatinghourid', a: '_msdyn_operatinghourid_value', c: 'msdyn_operatinghours', d: 'msdyn_operatinghour' },
			msdyn_PhoneNumberId: { b: 'msdyn_PhoneNumberId', a: '_msdyn_phonenumberid_value', c: 'msdyn_ocphonenumbers', d: 'msdyn_ocphonenumber' },
			msdyn_postconversationsurvey: { b: 'msdyn_postconversationsurvey', a: '_msdyn_postconversationsurvey_value', c: 'msfp_surveies', d: 'msfp_survey' },
			msdyn_postconversationsurveyenable: { a: 'msdyn_postconversationsurveyenable' },
			msdyn_postconversationsurveymessagetext: { a: 'msdyn_postconversationsurveymessagetext' },
			msdyn_postconversationsurveymode: { a: 'msdyn_postconversationsurveymode' },
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
		var msdyn_ocsmschannelsetting = {};
		msdyn_ocsmschannelsetting.ODataEntity = e;
		msdyn_ocsmschannelsetting.FormattedValue = {};
		for (var field in _msdyn_ocsmschannelsetting) {
			var a = _msdyn_ocsmschannelsetting[field].a;
			var b = _msdyn_ocsmschannelsetting[field].b;
			var c = _msdyn_ocsmschannelsetting[field].c;
			var d = _msdyn_ocsmschannelsetting[field].d;
			var g = _msdyn_ocsmschannelsetting[field].g;
			var r = _msdyn_ocsmschannelsetting[field].r;
			webApiField(msdyn_ocsmschannelsetting, field, e, a, b, c, d, r, u, g);
		}
		msdyn_ocsmschannelsetting.Entity = u;
		msdyn_ocsmschannelsetting.EntityName = 'msdyn_ocsmschannelsetting';
		msdyn_ocsmschannelsetting.EntityCollectionName = 'msdyn_ocsmschannelsettings';
		msdyn_ocsmschannelsetting['@odata.etag'] = e['@odata.etag'];
		msdyn_ocsmschannelsetting.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdyn_ocsmschannelsetting.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return EMPTY_STRING;
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdyn_ocsmschannelsetting;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_ocsmschannelsetting = {
		msdyn_postconversationsurveymode : {
			Insert_survey_in_conversation: 192350000,
			Send_survey_link_to_conversation: 192350001
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