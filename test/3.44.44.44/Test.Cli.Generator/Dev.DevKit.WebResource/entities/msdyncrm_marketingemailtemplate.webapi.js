'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdyncrm_marketingemailtemplateApi = function (e) {
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
		var _msdyncrm_marketingemailtemplate = {
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
			msdyncrm_automaticallygeneratetextpart: { a: 'msdyncrm_automaticallygeneratetextpart' },
			msdyncrm_category: { a: 'msdyncrm_category' },
			msdyncrm_description: { a: 'msdyncrm_description' },
			msdyncrm_designerhtml: { a: 'msdyncrm_designerhtml' },
			msdyncrm_email_contenttype: { a: 'msdyncrm_email_contenttype' },
			msdyncrm_email_template_market_type_optionset: { a: 'msdyncrm_email_template_market_type_optionset' },
			msdyncrm_email_template_optimizedfor_optionset: { a: 'msdyncrm_email_template_optimizedfor_optionset' },
			msdyncrm_email_template_purpose_optionset: { a: 'msdyncrm_email_template_purpose_optionset' },
			msdyncrm_email_template_visual_style_optionset: { a: 'msdyncrm_email_template_visual_style_optionset' },
			msdyncrm_emailbody: { a: 'msdyncrm_emailbody' },
			msdyncrm_formtosave: { a: 'msdyncrm_formtosave', r: true },
			msdyncrm_FromEmail: { a: 'msdyncrm_fromemail' },
			msdyncrm_FromName: { a: 'msdyncrm_fromname' },
			msdyncrm_Label: { a: 'msdyncrm_label' },
			msdyncrm_Language: { a: 'msdyncrm_language' },
			msdyncrm_marketingemailtemplateId: { a: 'msdyncrm_marketingemailtemplateid' },
			msdyncrm_marketingprovided: { a: 'msdyncrm_marketingprovided' },
			msdyncrm_messagedesignation: { a: 'msdyncrm_messagedesignation' },
			msdyncrm_name: { a: 'msdyncrm_name' },
			msdyncrm_previewhtml: { a: 'msdyncrm_previewhtml' },
			msdyncrm_previewtext: { a: 'msdyncrm_previewtext' },
			msdyncrm_ReplyToEmail: { a: 'msdyncrm_replytoemail' },
			msdyncrm_sourceemailid: { a: 'msdyncrm_sourceemailid' },
			msdyncrm_subcategory: { a: 'msdyncrm_subcategory' },
			msdyncrm_subject: { a: 'msdyncrm_subject' },
			msdyncrm_Tag: { a: 'msdyncrm_tag' },
			msdyncrm_textpart: { a: 'msdyncrm_textpart' },
			EntityImage: { a: 'msdyncrm_thumbnailimage' },
			EntityImage_Timestamp: { a: 'msdyncrm_thumbnailimage_timestamp', r: true },
			EntityImage_URL: { a: 'msdyncrm_thumbnailimage_url', r: true },
			msdyncrm_thumbnailimage: { a: 'msdyncrm_thumbnailimage' },
			msdyncrm_thumbnailimage_Timestamp: { a: 'msdyncrm_thumbnailimage_timestamp', r: true },
			msdyncrm_thumbnailimage_URL: { a: 'msdyncrm_thumbnailimage_url', r: true },
			msdyncrm_thumbnailimageId: { a: 'msdyncrm_thumbnailimageid', r: true },
			msdyncrm_To: { a: 'msdyncrm_to' },
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
		var msdyncrm_marketingemailtemplate = {};
		msdyncrm_marketingemailtemplate.ODataEntity = e;
		msdyncrm_marketingemailtemplate.FormattedValue = {};
		for (var field in _msdyncrm_marketingemailtemplate) {
			var a = _msdyncrm_marketingemailtemplate[field].a;
			var b = _msdyncrm_marketingemailtemplate[field].b;
			var c = _msdyncrm_marketingemailtemplate[field].c;
			var d = _msdyncrm_marketingemailtemplate[field].d;
			var g = _msdyncrm_marketingemailtemplate[field].g;
			var r = _msdyncrm_marketingemailtemplate[field].r;
			webApiField(msdyncrm_marketingemailtemplate, field, e, a, b, c, d, r, u, g);
		}
		msdyncrm_marketingemailtemplate.Entity = u;
		msdyncrm_marketingemailtemplate.EntityName = 'msdyncrm_marketingemailtemplate';
		msdyncrm_marketingemailtemplate.EntityCollectionName = 'msdyncrm_marketingemailtemplates';
		msdyncrm_marketingemailtemplate['@odata.etag'] = e['@odata.etag'];
		msdyncrm_marketingemailtemplate.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdyncrm_marketingemailtemplate.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdyncrm_marketingemailtemplate;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyncrm_marketingemailtemplate = {
		msdyncrm_category : {
			Custom_templates: 1,
			Gallery: 0
		},
		msdyncrm_email_contenttype : {
			Confirmation_request: 1,
			Default: 0
		},
		msdyncrm_email_template_market_type_optionset : {
			B2B: 0,
			B2B_B2C: 2,
			B2C: 1
		},
		msdyncrm_email_template_optimizedfor_optionset : {
			Desktop: 2,
			Mobile: 1,
			Wide_reach: 0
		},
		msdyncrm_email_template_purpose_optionset : {
			Abandoned_shopping_cart: 15,
			Anniversary: 21,
			Announcement: 2,
			Birthday: 3,
			Blog_promotion: 4,
			Content_promotion: 5,
			Double_opt_in_email_based_confirmation: 23,
			Event_countdown: 6,
			Event_or_webinar_invitation: 7,
			Feedback_request: 20,
			Follow_up: 8,
			Holiday_greetings: 9,
			Hospitality: 11,
			Information: 10,
			Lead_nurturing: 22,
			Newsletter: 12,
			Post_purchase: 13,
			Promotional_up_sellcross_sell: 14,
			Structural: 0,
			Thank_you: 16,
			Upcoming_event: 17,
			Welcome: 18,
			Win_backre_engage: 19
		},
		msdyncrm_email_template_visual_style_optionset : {
			Colorful: 2,
			Dark: 3,
			Light: 1,
			Other: 0
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
		msdyncrm_messagedesignation : {
			Commercial: 0,
			Transactional: 1
		},
		msdyncrm_subcategory : {
			Deals: 1,
			EventsWebinars: 3,
			Follow_up: 2,
			Informational: 4,
			Layouts: 6,
			New_product: 0,
			Transactional: 5
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