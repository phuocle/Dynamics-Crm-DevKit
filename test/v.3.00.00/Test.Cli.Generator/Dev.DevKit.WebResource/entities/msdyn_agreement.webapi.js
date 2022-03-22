'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdyn_agreementApi = function (e) {
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
		var _msdyn_agreement = {
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdyn_AgreementDetails: { a: 'msdyn_agreementdetails' },
			msdyn_agreementId: { a: 'msdyn_agreementid' },
			msdyn_AgreementRecordGeneration_UtcDateAndTime: { a: 'msdyn_agreementrecordgeneration' },
			msdyn_AutoNumbering: { a: 'msdyn_autonumbering' },
			msdyn_BillingAccount: { b: 'msdyn_BillingAccount', a: '_msdyn_billingaccount_value', c: 'accounts', d: 'account' },
			msdyn_ChildIndex: { a: 'msdyn_childindex' },
			msdyn_DateCanceled_UtcDateOnly: { a: 'msdyn_datecanceled' },
			msdyn_Description: { a: 'msdyn_description' },
			msdyn_Duration: { a: 'msdyn_duration' },
			msdyn_EndDate_UtcDateOnly: { a: 'msdyn_enddate' },
			msdyn_name: { a: 'msdyn_name' },
			msdyn_OriginatingAgreement: { b: 'msdyn_OriginatingAgreement', a: '_msdyn_originatingagreement_value', c: 'msdyn_agreements', d: 'msdyn_agreement' },
			msdyn_PriceList: { b: 'msdyn_PriceList', a: '_msdyn_pricelist_value', c: 'pricelevels', d: 'pricelevel' },
			msdyn_ProcessStartedOn_TimezoneDateAndTime: { a: 'msdyn_processstartedon' },
			msdyn_SalesTaxCode: { b: 'msdyn_SalesTaxCode', a: '_msdyn_salestaxcode_value', c: 'msdyn_taxcodes', d: 'msdyn_taxcode' },
			msdyn_ServiceAccount: { b: 'msdyn_ServiceAccount', a: '_msdyn_serviceaccount_value', c: 'accounts', d: 'account' },
			msdyn_ServiceTerritory: { b: 'msdyn_ServiceTerritory', a: '_msdyn_serviceterritory_value', c: 'territories', d: 'territory' },
			msdyn_StartDate_UtcDateOnly: { a: 'msdyn_startdate' },
			msdyn_SubStatus: { b: 'msdyn_SubStatus', a: '_msdyn_substatus_value', c: 'msdyn_agreementsubstatuses', d: 'msdyn_agreementsubstatus' },
			msdyn_SystemStatus: { a: 'msdyn_systemstatus' },
			msdyn_Taxable: { a: 'msdyn_taxable' },
			OverriddenCreatedOn_UtcDateOnly: { a: 'overriddencreatedon' },
			OwnerId_systemuser: { b: 'ownerid', a: '_ownerid_value', c: 'systemusers', d: 'systemuser' },
			OwnerId_team: { b: 'ownerid', a: '_ownerid_value', c: 'teams', d: 'team' },
			OwningBusinessUnit: { b: 'owningbusinessunit', a: '_owningbusinessunit_value', c: 'businessunits', d: 'businessunit', r: true },
			OwningTeam: { b: 'owningteam', a: '_owningteam_value', c: 'teams', d: 'team', r: true },
			OwningUser: { b: 'owninguser', a: '_owninguser_value', c: 'systemusers', d: 'systemuser', r: true },
			processid: { a: 'processid' },
			stageid: { a: 'stageid' },
			statecode: { a: 'statecode' },
			statuscode: { a: 'statuscode' },
			TimeZoneRuleVersionNumber: { a: 'timezoneruleversionnumber' },
			traversedpath: { a: 'traversedpath' },
			UTCConversionTimeZoneCode: { a: 'utcconversiontimezonecode' },
			VersionNumber: { a: 'versionnumber', r: true }
		};
		if (e === undefined) e = {};
		var u = {};
		var msdyn_agreement = {};
		msdyn_agreement.ODataEntity = e;
		msdyn_agreement.FormattedValue = {};
		for (var field in _msdyn_agreement) {
			var a = _msdyn_agreement[field].a;
			var b = _msdyn_agreement[field].b;
			var c = _msdyn_agreement[field].c;
			var d = _msdyn_agreement[field].d;
			var g = _msdyn_agreement[field].g;
			var r = _msdyn_agreement[field].r;
			webApiField(msdyn_agreement, field, e, a, b, c, d, r, u, g);
		}
		msdyn_agreement.Entity = u;
		msdyn_agreement.EntityName = 'msdyn_agreement';
		msdyn_agreement.EntityCollectionName = 'msdyn_agreements';
		msdyn_agreement['@odata.etag'] = e['@odata.etag'];
		msdyn_agreement.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdyn_agreement.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return EMPTY_STRING;
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdyn_agreement;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_agreement = {
		msdyn_SystemStatus : {
			Active: 690970001,
			Canceled: 690970003,
			Estimate: 690970000,
			Expired: 690970002
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