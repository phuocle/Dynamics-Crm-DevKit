'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdyncrm_marketingemailtestsendApi = function (e) {
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
		var _msdyncrm_marketingemailtestsend = {
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdyncrm_abtestid: { a: 'msdyncrm_abtestid' },
			msdyncrm_abtestvariantid: { a: 'msdyncrm_abtestvariantid' },
			msdyncrm_email_contenttype: { a: 'msdyncrm_email_contenttype' },
			msdyncrm_emailbody: { a: 'msdyncrm_emailbody' },
			msdyncrm_emailid: { a: 'msdyncrm_emailid' },
			msdyncrm_entityname: { a: 'msdyncrm_entityname' },
			msdyncrm_from: { a: 'msdyncrm_from' },
			msdyncrm_fromexpression: { a: 'msdyncrm_fromexpression' },
			msdyncrm_htmlpart: { a: 'msdyncrm_htmlpart' },
			msdyncrm_keywords: { a: 'msdyncrm_keywords' },
			msdyncrm_marketingemailtestsendId: { a: 'msdyncrm_marketingemailtestsendid' },
			msdyncrm_marketinglistid: { a: 'msdyncrm_marketinglistid' },
			msdyncrm_messagedesignation: { a: 'msdyncrm_messagedesignation' },
			msdyncrm_messagetype: { a: 'msdyncrm_messagetype' },
			msdyncrm_replytoexpression: { a: 'msdyncrm_replytoexpression' },
			msdyncrm_subject: { a: 'msdyncrm_subject' },
			msdyncrm_testcontactid: { b: 'msdyncrm_testcontactid', a: '_msdyncrm_testcontactid_value', c: 'contacts', d: 'contact' },
			msdyncrm_testcontentsettingsid: { b: 'msdyncrm_testcontentsettingsid', a: '_msdyncrm_testcontentsettingsid_value', c: 'msdyncrm_contentsettingses', d: 'msdyncrm_contentsettings' },
			msdyncrm_testsendemailaddress: { a: 'msdyncrm_testsendemailaddress' },
			msdyncrm_textpart: { a: 'msdyncrm_textpart' },
			msdyncrm_toexpression: { a: 'msdyncrm_toexpression' },
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
		var msdyncrm_marketingemailtestsend = {};
		msdyncrm_marketingemailtestsend.ODataEntity = e;
		msdyncrm_marketingemailtestsend.FormattedValue = {};
		for (var field in _msdyncrm_marketingemailtestsend) {
			var a = _msdyncrm_marketingemailtestsend[field].a;
			var b = _msdyncrm_marketingemailtestsend[field].b;
			var c = _msdyncrm_marketingemailtestsend[field].c;
			var d = _msdyncrm_marketingemailtestsend[field].d;
			var g = _msdyncrm_marketingemailtestsend[field].g;
			var r = _msdyncrm_marketingemailtestsend[field].r;
			webApiField(msdyncrm_marketingemailtestsend, field, e, a, b, c, d, r, u, g);
		}
		msdyncrm_marketingemailtestsend.Entity = u;
		msdyncrm_marketingemailtestsend.EntityName = 'msdyncrm_marketingemailtestsend';
		msdyncrm_marketingemailtestsend.EntityCollectionName = 'msdyncrm_marketingemailtestsends';
		msdyncrm_marketingemailtestsend['@odata.etag'] = e['@odata.etag'];
		msdyncrm_marketingemailtestsend.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdyncrm_marketingemailtestsend.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdyncrm_marketingemailtestsend;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyncrm_marketingemailtestsend = {
		msdyncrm_email_contenttype : {
			Confirmation_request: 1,
			Default: 0
		},
		msdyncrm_messagedesignation : {
			Commercial: 0,
			Transactional: 1
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