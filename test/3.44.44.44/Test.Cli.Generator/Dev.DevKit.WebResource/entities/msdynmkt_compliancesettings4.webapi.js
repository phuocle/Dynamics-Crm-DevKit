'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdynmkt_compliancesettings4Api = function (e) {
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
		var _msdynmkt_compliancesettings4 = {
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
			msdynmkt_compliancesettings4Id: { a: 'msdynmkt_compliancesettings4id' },
			msdynmkt_consentlink: { a: 'msdynmkt_consentlink' },
			msdynmkt_consentlinktype: { a: 'msdynmkt_consentlinktype' },
			msdynmkt_ConsentProviderId: { b: 'msdynmkt_ConsentProviderId', a: '_msdynmkt_consentproviderid_value', c: 'msdynmkt_consentproviders', d: 'msdynmkt_consentprovider' },
			msdynmkt_DOIConfirmationText: { a: 'msdynmkt_doiconfirmationtext' },
			msdynmkt_DOIConfirmationType: { a: 'msdynmkt_doiconfirmationtype' },
			msdynmkt_DOIConfirmationURL: { a: 'msdynmkt_doiconfirmationurl' },
			msdynmkt_DOIFailureReason: { a: 'msdynmkt_doifailurereason' },
			msdynmkt_doijobstatus: { a: 'msdynmkt_doijobstatus' },
			msdynmkt_DOIStatus: { a: 'msdynmkt_doistatus' },
			msdynmkt_emaildescription: { a: 'msdynmkt_emaildescription' },
			msdynmkt_extendedentityId: { b: 'msdynmkt_extendedentityId', a: '_msdynmkt_extendedentityid_value', c: 'msdynmkt_consentproviderdefaultconfigurations', d: 'msdynmkt_consentproviderdefaultconfiguration' },
			msdynmkt_gettrackingconsents: { a: 'msdynmkt_gettrackingconsents' },
			msdynmkt_globaldoienabled: { a: 'msdynmkt_globaldoienabled' },
			msdynmkt_jurisdiction: { a: 'msdynmkt_jurisdiction' },
			msdynmkt_legaladdress: { a: 'msdynmkt_legaladdress' },
			msdynmkt_migrationtimestamp_UtcDateOnly: { a: 'msdynmkt_migrationtimestamp' },
			msdynmkt_name: { a: 'msdynmkt_name' },
			msdynmkt_quiettimesetting: { b: 'msdynmkt_quiettimesetting', a: '_msdynmkt_quiettimesetting_value', c: 'msdynmkt_quiettimesettings', d: 'msdynmkt_quiettimesetting' },
			msdynmkt_ssc_allowemaildescription: { a: 'msdynmkt_ssc_allowemaildescription' },
			msdynmkt_ssc_allowsmsdescription: { a: 'msdynmkt_ssc_allowsmsdescription' },
			msdynmkt_ssc_allowtrackingdescription: { a: 'msdynmkt_ssc_allowtrackingdescription' },
			msdynmkt_ssc_consentchangereason: { a: 'msdynmkt_ssc_consentchangereason' },
			msdynmkt_ssc_description: { a: 'msdynmkt_ssc_description' },
			msdynmkt_ssc_emailtitle: { a: 'msdynmkt_ssc_emailtitle' },
			msdynmkt_ssc_errorpagetext: { a: 'msdynmkt_ssc_errorpagetext' },
			msdynmkt_ssc_legaltext: { a: 'msdynmkt_ssc_legaltext' },
			msdynmkt_ssc_smsdescription: { a: 'msdynmkt_ssc_smsdescription' },
			msdynmkt_ssc_smstitle: { a: 'msdynmkt_ssc_smstitle' },
			msdynmkt_ssc_submitbuttonlabel: { a: 'msdynmkt_ssc_submitbuttonlabel' },
			msdynmkt_ssc_thankyoupagetext: { a: 'msdynmkt_ssc_thankyoupagetext' },
			msdynmkt_ssc_title: { a: 'msdynmkt_ssc_title' },
			msdynmkt_ssc_trackingdescription: { a: 'msdynmkt_ssc_trackingdescription' },
			msdynmkt_ssc_trackingtitle: { a: 'msdynmkt_ssc_trackingtitle' },
			msdynmkt_subscriptioncenter: { a: 'msdynmkt_subscriptioncenter' },
			msdynmkt_TrackingConsentPurpose: { b: 'msdynmkt_TrackingConsentPurpose', a: '_msdynmkt_trackingconsentpurpose_value', c: 'msdynmkt_purposes', d: 'msdynmkt_purpose' },
			msdynmkt_uionly_link_existing_profile: { a: 'msdynmkt_uionly_link_existing_profile' },
			msdynmkt_uionly_linked_profile: { b: 'msdynmkt_uionly_linked_profile', a: '_msdynmkt_uionly_linked_profile_value', c: 'msdynmkt_compliancesettings4s', d: 'msdynmkt_compliancesettings4' },
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
		var msdynmkt_compliancesettings4 = {};
		msdynmkt_compliancesettings4.ODataEntity = e;
		msdynmkt_compliancesettings4.FormattedValue = {};
		for (var field in _msdynmkt_compliancesettings4) {
			var a = _msdynmkt_compliancesettings4[field].a;
			var b = _msdynmkt_compliancesettings4[field].b;
			var c = _msdynmkt_compliancesettings4[field].c;
			var d = _msdynmkt_compliancesettings4[field].d;
			var g = _msdynmkt_compliancesettings4[field].g;
			var r = _msdynmkt_compliancesettings4[field].r;
			webApiField(msdynmkt_compliancesettings4, field, e, a, b, c, d, r, u, g);
		}
		msdynmkt_compliancesettings4.Entity = u;
		msdynmkt_compliancesettings4.EntityName = 'msdynmkt_compliancesettings4';
		msdynmkt_compliancesettings4.EntityCollectionName = 'msdynmkt_compliancesettings4s';
		msdynmkt_compliancesettings4['@odata.etag'] = e['@odata.etag'];
		msdynmkt_compliancesettings4.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdynmkt_compliancesettings4.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdynmkt_compliancesettings4;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdynmkt_compliancesettings4 = {
		ComponentState : {
			Deleted: 2,
			Deleted_Unpublished: 3,
			Published: 0,
			Unpublished: 1
		},
		msdynmkt_consentlinktype : {
			External_link: 534120002,
			Preference_center: 534120003,
			Preference_page: 534120000,
			Subscription_center: 534120001
		},
		msdynmkt_DOIConfirmationType : {
			Text: 534120000,
			Url: 534120001
		},
		msdynmkt_doijobstatus : {
			Email_Create_Failed: 8,
			Email_Created: 1,
			Email_Publish_Failed: 9,
			Email_Published: 2,
			Failed: 7,
			Journey_Create_Failed: 10,
			Journey_Created: 3,
			Journey_Publish_Failed: 11,
			Journey_Published: 5,
			Journey_Publishing_Started: 4,
			Processing_Completed: 6,
			Request_Accepted: 0
		},
		msdynmkt_DOIStatus : {
			DeprecatedEnabled: 534120002,
			Enabled: 534120001,
			Not_enabled: 534120000
		},
		msdynmkt_extendedentityIdType : {
		},
		msdynmkt_jurisdiction : {
			GDPRCCPA: 534120000,
			Other: 534120001
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