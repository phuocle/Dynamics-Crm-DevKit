﻿'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdynmkt_pushnotificationApi = function (e) {
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
		var _msdynmkt_pushnotification = {
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
			msdynmkt_appname: { a: 'msdynmkt_appname' },
			msdynmkt_compliance: { b: 'msdynmkt_compliance', a: '_msdynmkt_compliance_value', c: 'msdynmkt_compliancesettings4s', d: 'msdynmkt_compliancesettings4' },
			msdynmkt_description: { a: 'msdynmkt_description' },
			msdynmkt_imageid: { a: 'msdynmkt_imageid' },
			msdynmkt_link: { a: 'msdynmkt_link' },
			msdynmkt_message: { a: 'msdynmkt_message' },
			msdynmkt_messagedesignation: { a: 'msdynmkt_messagedesignation' },
			msdynmkt_name: { a: 'msdynmkt_name' },
			msdynmkt_onclickbehavior: { a: 'msdynmkt_onclickbehavior' },
			msdynmkt_placeholders: { a: 'msdynmkt_placeholders' },
			msdynmkt_purpose: { b: 'msdynmkt_purpose', a: '_msdynmkt_purpose_value', c: 'msdynmkt_purposes', d: 'msdynmkt_purpose' },
			msdynmkt_pushnotificationId: { a: 'msdynmkt_pushnotificationid' },
			msdynmkt_recipient: { a: 'msdynmkt_recipient' },
			msdynmkt_subtitle: { a: 'msdynmkt_subtitle' },
			msdynmkt_title: { a: 'msdynmkt_title' },
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
		var msdynmkt_pushnotification = {};
		msdynmkt_pushnotification.ODataEntity = e;
		msdynmkt_pushnotification.FormattedValue = {};
		for (var field in _msdynmkt_pushnotification) {
			var a = _msdynmkt_pushnotification[field].a;
			var b = _msdynmkt_pushnotification[field].b;
			var c = _msdynmkt_pushnotification[field].c;
			var d = _msdynmkt_pushnotification[field].d;
			var g = _msdynmkt_pushnotification[field].g;
			var r = _msdynmkt_pushnotification[field].r;
			webApiField(msdynmkt_pushnotification, field, e, a, b, c, d, r, u, g);
		}
		msdynmkt_pushnotification.Entity = u;
		msdynmkt_pushnotification.EntityName = 'msdynmkt_pushnotification';
		msdynmkt_pushnotification.EntityCollectionName = 'msdynmkt_pushnotifications';
		msdynmkt_pushnotification['@odata.etag'] = e['@odata.etag'];
		msdynmkt_pushnotification.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdynmkt_pushnotification.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdynmkt_pushnotification;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdynmkt_pushnotification = {
		ComponentState : {
			Deleted: 2,
			Deleted_Unpublished: 3,
			Published: 0,
			Unpublished: 1
		},
		msdynmkt_messagedesignation : {
			Commercial: 534120000,
			Transactional: 534120001
		},
		msdynmkt_onclickbehavior : {
			Open_Customer_Voice_survey: 534120002,
			Open_in_browser: 534120001,
			Open_the_app: 534120000
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