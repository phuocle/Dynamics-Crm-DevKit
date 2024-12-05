'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdynmkt_emailApi = function (e) {
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
		var _msdynmkt_email = {
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
			msdynmkt_brandprofiledata: { a: 'msdynmkt_brandprofiledata' },
			msdynmkt_brandprofileid: { b: 'msdynmkt_brandprofileid', a: '_msdynmkt_brandprofileid_value', c: 'msdynmkt_brandprofiles', d: 'msdynmkt_brandprofile' },
			msdynmkt_compliancesettings: { b: 'msdynmkt_compliancesettings', a: '_msdynmkt_compliancesettings_value', c: 'msdynmkt_compliancesettingses', d: 'msdynmkt_compliancesettings' },
			msdynmkt_compliancesettings3: { b: 'msdynmkt_compliancesettings3', a: '_msdynmkt_compliancesettings3_value', c: 'msdynmkt_compliancesettings3s', d: 'msdynmkt_compliancesettings3' },
			msdynmkt_compliancesettings4: { b: 'msdynmkt_compliancesettings4', a: '_msdynmkt_compliancesettings4_value', c: 'msdynmkt_compliancesettings4s', d: 'msdynmkt_compliancesettings4' },
			msdynmkt_compliancesettingscompanyaddress: { a: 'msdynmkt_compliancesettingscompanyaddress' },
			msdynmkt_conditionalcontent: { a: 'msdynmkt_conditionalcontent' },
			msdynmkt_description: { a: 'msdynmkt_description' },
			msdynmkt_designerhtml: { a: 'msdynmkt_designerhtml' },
			msdynmkt_emailbody: { a: 'msdynmkt_emailbody' },
			msdynmkt_emailcontentlanguage: { a: 'msdynmkt_emailcontentlanguage' },
			msdynmkt_emailcontenttype: { a: 'msdynmkt_emailcontenttype' },
			msdynmkt_emailId: { a: 'msdynmkt_emailid' },
			msdynmkt_eventtype: { a: 'msdynmkt_eventtype' },
			msdynmkt_fromemail: { a: 'msdynmkt_fromemail' },
			msdynmkt_fromname: { a: 'msdynmkt_fromname' },
			msdynmkt_intendeduse: { a: 'msdynmkt_intendeduse' },
			msdynmkt_isteamswebinaremail: { a: 'msdynmkt_isteamswebinaremail' },
			msdynmkt_messagedesignation: { a: 'msdynmkt_messagedesignation' },
			msdynmkt_name: { a: 'msdynmkt_name' },
			msdynmkt_obmmigrationinfo: { a: 'msdynmkt_obmmigrationinfo' },
			msdynmkt_placeholders: { a: 'msdynmkt_placeholders' },
			msdynmkt_previewhtml: { a: 'msdynmkt_previewhtml' },
			msdynmkt_previewtext: { a: 'msdynmkt_previewtext' },
			msdynmkt_profiletype: { a: 'msdynmkt_profiletype' },
			msdynmkt_purpose: { b: 'msdynmkt_purpose', a: '_msdynmkt_purpose_value', c: 'msdynmkt_purposes', d: 'msdynmkt_purpose' },
			msdynmkt_replytoemail: { a: 'msdynmkt_replytoemail' },
			msdynmkt_senderid: { b: 'msdynmkt_senderid', a: '_msdynmkt_senderid_value', c: 'msdynmkt_brandsenders', d: 'msdynmkt_brandsender' },
			msdynmkt_subject: { a: 'msdynmkt_subject' },
			msdynmkt_templateid: { b: 'msdynmkt_templateid', a: '_msdynmkt_templateid_value', c: 'msdynmkt_emailtemplates', d: 'msdynmkt_emailtemplate' },
			msdynmkt_testconfiguration: { a: 'msdynmkt_testconfiguration' },
			msdynmkt_textpart: { a: 'msdynmkt_textpart' },
			msdynmkt_to: { a: 'msdynmkt_to' },
			msdynmkt_topic: { b: 'msdynmkt_topic', a: '_msdynmkt_topic_value', c: 'msdynmkt_topics', d: 'msdynmkt_topic' },
			msdynmkt_virtualeventid: { a: 'msdynmkt_virtualeventid' },
			msdynmkt_webinaremailtemplatetype: { a: 'msdynmkt_webinaremailtemplatetype' },
			msdynmkt_webinarid: { a: 'msdynmkt_webinarid' },
			msdynmkt_webinartitle: { a: 'msdynmkt_webinartitle' },
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
		var msdynmkt_email = {};
		msdynmkt_email.ODataEntity = e;
		msdynmkt_email.FormattedValue = {};
		for (var field in _msdynmkt_email) {
			var a = _msdynmkt_email[field].a;
			var b = _msdynmkt_email[field].b;
			var c = _msdynmkt_email[field].c;
			var d = _msdynmkt_email[field].d;
			var g = _msdynmkt_email[field].g;
			var r = _msdynmkt_email[field].r;
			webApiField(msdynmkt_email, field, e, a, b, c, d, r, u, g);
		}
		msdynmkt_email.Entity = u;
		msdynmkt_email.EntityName = 'msdynmkt_email';
		msdynmkt_email.EntityCollectionName = 'msdynmkt_emails';
		msdynmkt_email['@odata.etag'] = e['@odata.etag'];
		msdynmkt_email.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdynmkt_email.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdynmkt_email;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdynmkt_email = {
		ComponentState : {
			Deleted: 2,
			Deleted_Unpublished: 3,
			Published: 0,
			Unpublished: 1
		},
		msdynmkt_emailcontentlanguage : {
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
		msdynmkt_emailcontenttype : {
			Default: 534120000,
			Double_opt_in_confirmation: 534120001
		},
		msdynmkt_intendeduse : {
			Confirmation_Request: 534120001,
			Default: 534120000
		},
		msdynmkt_messagedesignation : {
			Commercial: 534120000,
			Transactional: 534120001
		},
		statecode : {
			Active: 0,
			Inactive: 1
		},
		statuscode : {
			Draft: 1,
			Inactive: 100,
			Ready_to_send: 2,
			Ready_to_send_editing: 3
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