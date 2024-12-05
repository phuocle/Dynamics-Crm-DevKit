'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdyncrm_customerjourneytemplateApi = function (e) {
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
		var _msdyncrm_customerjourneytemplate = {
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			EntityImage: { a: 'entityimage' },
			EntityImage_Timestamp: { a: 'entityimage_timestamp', r: true },
			EntityImage_URL: { a: 'entityimage_url', r: true },
			EntityImageId: { a: 'entityimageid', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdyncrm_customerjourneydesignerstate: { a: 'msdyncrm_customerjourneydesignerstate' },
			msdyncrm_customerjourneyid: { a: 'msdyncrm_customerjourneyid' },
			msdyncrm_customerjourneytemplateId: { a: 'msdyncrm_customerjourneytemplateid' },
			msdyncrm_description: { a: 'msdyncrm_description' },
			msdyncrm_entitytarget: { a: 'msdyncrm_entitytarget' },
			msdyncrm_formtosave: { a: 'msdyncrm_formtosave', r: true },
			msdyncrm_isrecurring: { a: 'msdyncrm_isrecurring' },
			msdyncrm_Label: { a: 'msdyncrm_label' },
			msdyncrm_Language: { a: 'msdyncrm_language' },
			msdyncrm_name: { a: 'msdyncrm_name' },
			msdyncrm_Origin: { b: 'msdyncrm_Origin', a: '_msdyncrm_origin_value', c: 'msdyncrm_customerjourneies', d: 'msdyncrm_customerjourney' },
			msdyncrm_purposeoption: { a: 'msdyncrm_purposeoption' },
			msdyncrm_recurrencecount: { a: 'msdyncrm_recurrencecount' },
			msdyncrm_recurrenceintervaldays: { a: 'msdyncrm_recurrenceintervaldays' },
			msdyncrm_Tag: { a: 'msdyncrm_tag' },
			msdyncrm_validationresults: { a: 'msdyncrm_validationresults' },
			msdyncrm_workflowdefinition: { a: 'msdyncrm_workflowdefinition' },
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
		var msdyncrm_customerjourneytemplate = {};
		msdyncrm_customerjourneytemplate.ODataEntity = e;
		msdyncrm_customerjourneytemplate.FormattedValue = {};
		for (var field in _msdyncrm_customerjourneytemplate) {
			var a = _msdyncrm_customerjourneytemplate[field].a;
			var b = _msdyncrm_customerjourneytemplate[field].b;
			var c = _msdyncrm_customerjourneytemplate[field].c;
			var d = _msdyncrm_customerjourneytemplate[field].d;
			var g = _msdyncrm_customerjourneytemplate[field].g;
			var r = _msdyncrm_customerjourneytemplate[field].r;
			webApiField(msdyncrm_customerjourneytemplate, field, e, a, b, c, d, r, u, g);
		}
		msdyncrm_customerjourneytemplate.Entity = u;
		msdyncrm_customerjourneytemplate.EntityName = 'msdyncrm_customerjourneytemplate';
		msdyncrm_customerjourneytemplate.EntityCollectionName = 'msdyncrm_customerjourneytemplates';
		msdyncrm_customerjourneytemplate['@odata.etag'] = e['@odata.etag'];
		msdyncrm_customerjourneytemplate.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdyncrm_customerjourneytemplate.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdyncrm_customerjourneytemplate;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyncrm_customerjourneytemplate = {
		msdyncrm_entitytarget : {
			Account: 1,
			Contact: 0
		},
		msdyncrm_Label : {
			Layout_enabled: 192350001,
			New: 192350000
		},
		msdyncrm_Language : {
			Arabic_Saudi_Arabia: 1025,
			Basque_Basque: 1069,
			Bulgarian_Bulgaria: 1026,
			Catalan_Catalan: 1027,
			Chinese_Hong_Kong_SAR: 3076,
			Chinese_PRC: 2052,
			Chinese_Taiwan: 1028,
			Croatian_Croatia: 1050,
			Czech_Czech_Republic: 1029,
			Danish: 1030,
			Dutch: 1043,
			English: 1033,
			English_Australia: 3081,
			English_Canada: 4105,
			English_Great_Britain: 2057,
			Estonian_Estonia: 1061,
			Finnish_Finland: 1035,
			French: 1036,
			French_Canada: 3084,
			Galician_Galician: 1110,
			German: 1031,
			Greek_Greece: 1032,
			Hebrew_Israel: 1037,
			Hungarian_Hungary: 1038,
			Indonesian_Indonesia: 1057,
			Italian: 1040,
			Japanese: 1041,
			Korean_Korea: 1042,
			Latvian_Latvia: 1062,
			Lithuanian_Lithuania: 1063,
			Norwegian_Bokmal_Norway: 1044,
			Polish_Poland: 1045,
			Portuguese_Brazil: 1046,
			Portuguese_Portugal: 2070,
			Romanian_Romania: 1048,
			Russian_Russia: 1049,
			Serbian_Cyrillic_Serbia_and_Montenegro: 3098,
			Serbian_Latin_Serbia_and_Montenegro: 2074,
			Slovak_Slovakia: 1051,
			Slovenian_Slovenia: 1060,
			Spanish: 3082,
			Swedish_Sweden: 1053,
			Thai_Thailand: 1054,
			Turkish_Turkey: 1055,
			Ukrainian_Ukraine: 1058,
			Vietnamese_Vietnam: 1066
		},
		msdyncrm_purposeoption : {
			Announcement: 0,
			Email_marketing: 6,
			Event_marketing: 3,
			Large_deals: 4,
			Multipurpose: 1,
			Newsletters: 5,
			Onboarding: 2
		},
		msdyncrm_Tag : {
			Layout_enabled: 192350001,
			New: 192350000
		},
		statecode : {
			Active: 0,
			Inactive: 1
		},
		statuscode : {
			Draft: 192350000,
			Inactive: 2,
			Live: 192350001
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