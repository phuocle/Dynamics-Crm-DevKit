'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdyn_omnichannelconfigurationApi = function (e) {
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
		var _msdyn_omnichannelconfiguration = {
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdyn_defaultAgentInputLanguage: { a: 'msdyn_defaultagentinputlanguage' },
			msdyn_dnd_presence_lookup: { b: 'msdyn_dnd_presence_lookup', a: '_msdyn_dnd_presence_lookup_value', c: 'msdyn_presences', d: 'msdyn_presence' },
			msdyn_enable_advance_entity_routing: { a: 'msdyn_enable_advance_entity_routing' },
			msdyn_enable_agent_reject_notifications: { a: 'msdyn_enable_agent_reject_notifications' },
			msdyn_enable_missed_notifications: { a: 'msdyn_enable_missed_notifications' },
			msdyn_enable_new_consult_exp: { a: 'msdyn_enable_new_consult_exp' },
			msdyn_enable_supervisor_assign: { a: 'msdyn_enable_supervisor_assign' },
			msdyn_enable_supervisor_monitor: { a: 'msdyn_enable_supervisor_monitor' },
			msdyn_enable_supervisor_transfer: { a: 'msdyn_enable_supervisor_transfer' },
			msdyn_enable_unified_routing_diagnostic: { a: 'msdyn_enable_unified_routing_diagnostic' },
			msdyn_enable_visitorjourney: { a: 'msdyn_enable_visitorjourney' },
			msdyn_enablemarkdown: { a: 'msdyn_enablemarkdown' },
			msdyn_enablenewconversationform: { a: 'msdyn_enablenewconversationform' },
			msdyn_EnableRealTimeTranslation: { a: 'msdyn_enablerealtimetranslation' },
			msdyn_enablesoundnotifications: { a: 'msdyn_enablesoundnotifications' },
			msdyn_inactive_presence_lookup: { b: 'msdyn_inactive_presence_lookup', a: '_msdyn_inactive_presence_lookup_value', c: 'msdyn_presences', d: 'msdyn_presence' },
			msdyn_isdefaultpersonamapped: { a: 'msdyn_isdefaultpersonamapped' },
			msdyn_ispersonalizationofsoundenabled: { a: 'msdyn_ispersonalizationofsoundenabled' },
			msdyn_isPersonalMessagesEnabled: { a: 'msdyn_ispersonalmessagesenabled' },
			msdyn_ispersonasecurityrolemappingenabled: { a: 'msdyn_ispersonasecurityrolemappingenabled' },
			msdyn_IsSkillBasedRoutingEnabled: { a: 'msdyn_isskillbasedroutingenabled' },
			msdyn_IsUpdateSkillsEnabled: { a: 'msdyn_isupdateskillsenabled' },
			msdyn_maskforagent: { a: 'msdyn_maskforagent' },
			msdyn_maskforcustomer: { a: 'msdyn_maskforcustomer' },
			msdyn_name: { a: 'msdyn_name' },
			msdyn_omnichannelconfigurationId: { a: 'msdyn_omnichannelconfigurationid' },
			msdyn_SoundFormControl: { a: 'msdyn_soundformcontrol' },
			msdyn_translationwebresourceurl: { a: 'msdyn_translationwebresourceurl' },
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
		var msdyn_omnichannelconfiguration = {};
		msdyn_omnichannelconfiguration.ODataEntity = e;
		msdyn_omnichannelconfiguration.FormattedValue = {};
		for (var field in _msdyn_omnichannelconfiguration) {
			var a = _msdyn_omnichannelconfiguration[field].a;
			var b = _msdyn_omnichannelconfiguration[field].b;
			var c = _msdyn_omnichannelconfiguration[field].c;
			var d = _msdyn_omnichannelconfiguration[field].d;
			var g = _msdyn_omnichannelconfiguration[field].g;
			var r = _msdyn_omnichannelconfiguration[field].r;
			webApiField(msdyn_omnichannelconfiguration, field, e, a, b, c, d, r, u, g);
		}
		msdyn_omnichannelconfiguration.Entity = u;
		msdyn_omnichannelconfiguration.EntityName = 'msdyn_omnichannelconfiguration';
		msdyn_omnichannelconfiguration.EntityCollectionName = 'msdyn_omnichannelconfigurations';
		msdyn_omnichannelconfiguration['@odata.etag'] = e['@odata.etag'];
		msdyn_omnichannelconfiguration.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdyn_omnichannelconfiguration.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdyn_omnichannelconfiguration;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_omnichannelconfiguration = {
		msdyn_defaultAgentInputLanguage : {
			Arabic_Saudi_Arabia: 1025,
			Basque_Spain: 1069,
			Bulgarian_Bulgaria: 1026,
			Catalan_Spain: 1027,
			Chinese_China: 2052,
			Chinese_Hong_Kong: 3076,
			Croatian_Croatia: 1050,
			Czech_Czech_Republic: 1029,
			Danish_Denmark: 1030,
			Dutch_Netherlands: 1043,
			English_United_States: 1033,
			Estonian_Estonia: 1061,
			Finnish_Finland: 1035,
			French_France: 1036,
			Galician_Spain: 1110,
			German_Germany: 1031,
			Greek_Greece: 1032,
			Hebrew_Israel: 1037,
			Hindi_India: 1081,
			Hungarian_Hungary: 1038,
			Indonesian_Indonesia: 1057,
			Italian_Italy: 1040,
			Japanese_Japan: 1041,
			Kazakh_Kazakhstan: 1087,
			Korean_Korea: 1042,
			Latvian_Latvia: 1062,
			Lithuanian_Lithuania: 1063,
			Malay_Malaysia: 1086,
			Norwegian_Bokmal_Norway: 1044,
			Polish_Poland: 1045,
			Portuguese_Brazil: 1046,
			Portuguese_Portugal: 2070,
			Romanian_Romania: 1048,
			Russian_Russia: 1049,
			Serbian_Cyrillic_Serbia: 3098,
			Serbian_Latin_Serbia: 2074,
			Slovak_Slovakia: 1051,
			Slovenian_Slovenia: 1060,
			Spanish_Spain: 3082,
			Swedish_Sweden: 1053,
			Thai_Thailand: 1054,
			Turkish_Turkey: 1055,
			Ukrainian_Ukraine: 1058,
			Vietnamese_Vietnam: 1066
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