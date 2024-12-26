'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdynmkt_emailtemplateApi = function (e) {
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
		var _msdynmkt_emailtemplate = {
			ComponentIdUnique: { a: 'componentidunique', r: true },
			ComponentState: { a: 'componentstate', r: true },
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			EntityImage: { a: 'entityimage' },
			EntityImage_Timestamp: { a: 'entityimage_timestamp', r: true },
			EntityImage_URL: { a: 'entityimage_url', r: true },
			EntityImageId: { a: 'entityimageid', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			IsCustomizable: { a: 'iscustomizable' },
			IsManaged: { a: 'ismanaged', r: true },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdynmkt_automaticallygeneratetextpart: { a: 'msdynmkt_automaticallygeneratetextpart' },
			msdynmkt_category: { a: 'msdynmkt_category' },
			msdynmkt_compliancesettings: { b: 'msdynmkt_compliancesettings', a: '_msdynmkt_compliancesettings_value', c: 'msdynmkt_compliancesettingses', d: 'msdynmkt_compliancesettings' },
			msdynmkt_compliancesettings3: { b: 'msdynmkt_compliancesettings3', a: '_msdynmkt_compliancesettings3_value', c: 'msdynmkt_compliancesettings3s', d: 'msdynmkt_compliancesettings3' },
			msdynmkt_compliancesettings4: { b: 'msdynmkt_compliancesettings4', a: '_msdynmkt_compliancesettings4_value', c: 'msdynmkt_compliancesettings4s', d: 'msdynmkt_compliancesettings4' },
			msdynmkt_compliancesettingscompanyaddress: { a: 'msdynmkt_compliancesettingscompanyaddress' },
			msdynmkt_conditionalcontent: { a: 'msdynmkt_conditionalcontent' },
			msdynmkt_contenttype: { a: 'msdynmkt_contenttype' },
			msdynmkt_description: { a: 'msdynmkt_description' },
			msdynmkt_designerhtml: { a: 'msdynmkt_designerhtml' },
			msdynmkt_emailbody: { a: 'msdynmkt_emailbody' },
			msdynmkt_emailtemplateId: { a: 'msdynmkt_emailtemplateid' },
			msdynmkt_entityimage: { a: 'msdynmkt_entityimage' },
			msdynmkt_entityimage_Timestamp: { a: 'msdynmkt_entityimage_timestamp', r: true },
			msdynmkt_entityimage_URL: { a: 'msdynmkt_entityimage_url', r: true },
			msdynmkt_entityimageId: { a: 'msdynmkt_entityimageid', r: true },
			msdynmkt_formtosave: { a: 'msdynmkt_formtosave' },
			msdynmkt_fromemail: { a: 'msdynmkt_fromemail' },
			msdynmkt_fromname: { a: 'msdynmkt_fromname' },
			msdynmkt_label: { a: 'msdynmkt_label' },
			msdynmkt_language: { a: 'msdynmkt_language' },
			msdynmkt_marketingprovided: { a: 'msdynmkt_marketingprovided' },
			msdynmkt_messagedesignation: { a: 'msdynmkt_messagedesignation' },
			msdynmkt_name: { a: 'msdynmkt_name' },
			msdynmkt_obmmigrationinfo: { a: 'msdynmkt_obmmigrationinfo' },
			msdynmkt_placeholders: { a: 'msdynmkt_placeholders' },
			msdynmkt_previewhtml: { a: 'msdynmkt_previewhtml' },
			msdynmkt_previewtext: { a: 'msdynmkt_previewtext' },
			msdynmkt_purpose: { b: 'msdynmkt_purpose', a: '_msdynmkt_purpose_value', c: 'msdynmkt_purposes', d: 'msdynmkt_purpose' },
			msdynmkt_replytoemail: { a: 'msdynmkt_replytoemail' },
			msdynmkt_sourceemailid: { a: 'msdynmkt_sourceemailid' },
			msdynmkt_subcategory: { a: 'msdynmkt_subcategory' },
			msdynmkt_subject: { a: 'msdynmkt_subject' },
			msdynmkt_textpart: { a: 'msdynmkt_textpart' },
			EntityImage: { a: 'msdynmkt_thumbnailimage' },
			EntityImage_Timestamp: { a: 'msdynmkt_thumbnailimage_timestamp', r: true },
			EntityImage_URL: { a: 'msdynmkt_thumbnailimage_url', r: true },
			msdynmkt_thumbnailimage: { a: 'msdynmkt_thumbnailimage' },
			msdynmkt_thumbnailimage_Timestamp: { a: 'msdynmkt_thumbnailimage_timestamp', r: true },
			msdynmkt_thumbnailimage_URL: { a: 'msdynmkt_thumbnailimage_url', r: true },
			msdynmkt_thumbnailimageId: { a: 'msdynmkt_thumbnailimageid', r: true },
			msdynmkt_topic: { b: 'msdynmkt_topic', a: '_msdynmkt_topic_value', c: 'msdynmkt_topics', d: 'msdynmkt_topic' },
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
		var msdynmkt_emailtemplate = {};
		msdynmkt_emailtemplate.ODataEntity = e;
		msdynmkt_emailtemplate.FormattedValue = {};
		for (var field in _msdynmkt_emailtemplate) {
			var a = _msdynmkt_emailtemplate[field].a;
			var b = _msdynmkt_emailtemplate[field].b;
			var c = _msdynmkt_emailtemplate[field].c;
			var d = _msdynmkt_emailtemplate[field].d;
			var g = _msdynmkt_emailtemplate[field].g;
			var r = _msdynmkt_emailtemplate[field].r;
			webApiField(msdynmkt_emailtemplate, field, e, a, b, c, d, r, u, g);
		}
		msdynmkt_emailtemplate.Entity = u;
		msdynmkt_emailtemplate.EntityName = 'msdynmkt_emailtemplate';
		msdynmkt_emailtemplate.EntityCollectionName = 'msdynmkt_emailtemplates';
		msdynmkt_emailtemplate['@odata.etag'] = e['@odata.etag'];
		msdynmkt_emailtemplate.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdynmkt_emailtemplate.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdynmkt_emailtemplate;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdynmkt_emailtemplate = {
		ComponentState : {
			Deleted: 2,
			Deleted_Unpublished: 3,
			Published: 0,
			Unpublished: 1
		},
		msdynmkt_category : {
			Custom_templates: 1,
			Gallery: 0
		},
		msdynmkt_contenttype : {
			Default: 534120000,
			Double_opt_in_confirmation: 534120001
		},
		msdynmkt_label : {
			Layout_enabled: 731570001,
			New: 731570000
		},
		msdynmkt_language : {
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
			English_United_Kingdom: 2057,
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
			Italian_Italy: 1040,
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
			Turkish_Turkiye: 1055,
			Ukrainian_Ukraine: 1058,
			Vietnamese_Vietnam: 1066
		},
		msdynmkt_messagedesignation : {
			Commercial: 534120000,
			Transactional: 534120001
		},
		msdynmkt_subcategory : {
			Deals: 1,
			EventsWebinars: 3,
			Follow_up: 2,
			Informational: 4,
			Layouts: 6,
			New_product: 0,
			Transactional: 5
		},
		statecode : {
			Active: 0,
			Inactive: 1
		},
		statuscode : {
			Draft: 1,
			Inactive: 100,
			Ready_to_send: 2
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