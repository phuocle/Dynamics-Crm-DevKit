'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msevtmgt_EventRegistrationApi = function (e) {
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
		var _msevtmgt_eventregistration = {
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdynmkt_linkedregistrationid: { a: 'msdynmkt_linkedregistrationid' },
			msevtmgt_Area: { a: 'msevtmgt_area' },
			msevtmgt_CompanySize: { a: 'msevtmgt_companysize' },
			msevtmgt_ContactId: { b: 'msevtmgt_ContactId', a: '_msevtmgt_contactid_value', c: 'contacts', d: 'contact' },
			msevtmgt_correlationid: { a: 'msevtmgt_correlationid' },
			msevtmgt_createdFromApi: { a: 'msevtmgt_createdfromapi' },
			msevtmgt_EventId: { b: 'msevtmgt_EventId', a: '_msevtmgt_eventid_value', c: 'msevtmgt_events', d: 'msevtmgt_event' },
			msevtmgt_EventRegistrationId: { a: 'msevtmgt_eventregistrationid' },
			msevtmgt_eventregistrationticketid: { a: 'msevtmgt_eventregistrationticketid' },
			msevtmgt_Industry: { a: 'msevtmgt_industry' },
			msevtmgt_internalregistrationstatus: { a: 'msevtmgt_internalregistrationstatus' },
			msevtmgt_iscanceled: { a: 'msevtmgt_iscanceled' },
			msevtmgt_Memo: { a: 'msevtmgt_memo' },
			msevtmgt_Name: { a: 'msevtmgt_name' },
			msevtmgt_originaltimestamp_TimezoneDateAndTime: { a: 'msevtmgt_originaltimestamp' },
			msevtmgt_PrimaryRole: { a: 'msevtmgt_primaryrole' },
			msevtmgt_publishingstate: { a: 'msevtmgt_publishingstate' },
			msevtmgt_qrcode: { a: 'msevtmgt_qrcode' },
			msevtmgt_registeredby: { b: 'msevtmgt_registeredby', a: '_msevtmgt_registeredby_value', c: 'contacts', d: 'contact' },
			msevtmgt_registrationnotificationseen: { a: 'msevtmgt_registrationnotificationseen' },
			msevtmgt_registrationoperation: { a: 'msevtmgt_registrationoperation' },
			msevtmgt_registrationstatus: { a: 'msevtmgt_registrationstatus' },
			msevtmgt_SyncedWithProvider: { a: 'msevtmgt_syncedwithprovider' },
			msevtmgt_TimesCheckedIn: { a: 'msevtmgt_timescheckedin' },
			msevtmgt_WebinarRegistrationID: { a: 'msevtmgt_webinarregistrationid' },
			msevtmgt_YearsInIndustry: { a: 'msevtmgt_yearsinindustry' },
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
		var msevtmgt_eventregistration = {};
		msevtmgt_eventregistration.ODataEntity = e;
		msevtmgt_eventregistration.FormattedValue = {};
		for (var field in _msevtmgt_eventregistration) {
			var a = _msevtmgt_eventregistration[field].a;
			var b = _msevtmgt_eventregistration[field].b;
			var c = _msevtmgt_eventregistration[field].c;
			var d = _msevtmgt_eventregistration[field].d;
			var g = _msevtmgt_eventregistration[field].g;
			var r = _msevtmgt_eventregistration[field].r;
			webApiField(msevtmgt_eventregistration, field, e, a, b, c, d, r, u, g);
		}
		msevtmgt_eventregistration.Entity = u;
		msevtmgt_eventregistration.EntityName = 'msevtmgt_eventregistration';
		msevtmgt_eventregistration.EntityCollectionName = 'msevtmgt_eventregistrations';
		msevtmgt_eventregistration['@odata.etag'] = e['@odata.etag'];
		msevtmgt_eventregistration.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msevtmgt_eventregistration.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msevtmgt_eventregistration;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msevtmgt_EventRegistration = {
		msevtmgt_Area : {
			Administration: 100000000,
			Customer_service: 100000001,
			Executivemanagement: 100000002,
			Finance: 100000004,
			HR: 100000005,
			IT: 100000006,
			Legal: 100000007,
			Logistics: 100000003,
			Marketing: 100000008,
			Sales: 100000009
		},
		msevtmgt_CompanySize : {
			_10001_or_more: 100000008,
			_1001_to_2500: 100000005,
			_101_to_250: 100000002,
			_2501_to_5000: 100000006,
			_251_to_500: 100000003,
			_50_or_less: 100000000,
			_5001_to_10000: 100000007,
			_501_to_1000: 100000004,
			_51_to_100: 100000001
		},
		msevtmgt_Industry : {
			Architecture_and_engineering: 100000000,
			Financial_services: 100000001,
			Manufacturing: 100000002,
			Media_entertainment: 100000003,
			Other: 100000008,
			Professional_services: 100000004,
			Public_sector: 100000005,
			Retail: 100000006,
			Wholesale_and_distribution: 100000007
		},
		msevtmgt_internalregistrationstatus : {
			New: 100000000,
			Ready: 100000001
		},
		msevtmgt_PrimaryRole : {
			Attendee: 100000000,
			Journalist: 100000001,
			Other: 100000002
		},
		msevtmgt_publishingstate : {
			Failed_to_publish: 100000003,
			Parent_webinar_failed: 100000002,
			Pending: 100000000,
			Published: 100000001,
			Webinar_provider_error: 100000004
		},
		msevtmgt_SyncedWithProvider : {
			No: 100000001,
			Yes: 100000002
		},
		msevtmgt_YearsInIndustry : {
			_1_to_5_years: 100000001,
			_5_to_10_years: 100000002,
			Over_10_years: 100000003,
			Under_one_year: 100000000
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