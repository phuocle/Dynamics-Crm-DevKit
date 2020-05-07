'use strict';
/** @namespace LuckyMokey */
var LuckyMokey;
(function (LuckyMokey) {
	'use strict';
	LuckyMokey.adobe_integrationsettingsApi = function (e) {
		var EMPTY_STRING = '';
		var f = '@OData.Community.Display.V1.FormattedValue';
        function webApiField(entity, logicalName, schemaName, entityLogicalCollectionName, entityLogicalName, readOnly, upsertEntity, isMultiOptionSet) {
            var l = '@Microsoft.Dynamics.CRM.lookuplogicalname';
            var property = {};
            var getFormattedValue = function () {
                if (entity[logicalName + f] === undefined || entity[logicalName + f] === null) {
                    return EMPTY_STRING;
                }
                if (entityLogicalCollectionName !== undefined && entityLogicalCollectionName.length > 0) {
                    if (entity[logicalName + l] === entityLogicalName) {
                        return entity[logicalName + f];
                    }
                    return EMPTY_STRING;
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
                    value = value.replace('{', EMPTY_STRING).replace('}', EMPTY_STRING);
                    upsertEntity[schemaName + '@odata.bind'] = '/' + entityLogicalCollectionName + '(' + value + ')';
                } else {
                    upsertEntity[logicalName] = value;
                }
                entity[logicalName] = value;
            };
            Object.defineProperty(property, 'FormattedValue', {
                get: getFormattedValue
            });
            if (readOnly) {
                Object.defineProperty(property, 'Value', {
                    get: getValue
                });
            }
            else {
                Object.defineProperty(property, 'Value', {
                    get: getValue,
                    set: setValue
                });
            }
            return property;
        }
		var adobe_integrationsettings = {
			adobe_ActivateandSetupAdobeSign: { a: 'adobe_activateandsetupadobesign' },
			adobe_apiaccesspoint: { a: 'adobe_apiaccesspoint' },
			adobe_AttachAuditTrail: { a: 'adobe_attachaudittrail' },
			adobe_AttachCombinedAgreement: { a: 'adobe_attachcombinedagreement' },
			adobe_AttachImages: { a: 'adobe_attachimages' },
			adobe_AttachSignedAgreement: { a: 'adobe_attachsignedagreement' },
			adobe_AutoProvisionUser: { a: 'adobe_autoprovisionuser' },
			adobe_crmversion: { a: 'adobe_crmversion' },
			adobe_data0: { a: 'adobe_data0' },
			adobe_data1: { a: 'adobe_data1' },
			adobe_data2: { a: 'adobe_data2' },
			adobe_data3: { a: 'adobe_data3' },
			adobe_EnableLinkedInSalesNavigator: { a: 'adobe_enablelinkedinsalesnavigator' },
			adobe_expiration: { a: 'adobe_expiration' },
			adobe_integrationsettingsId: { a: 'adobe_integrationsettingsid' },
			adobe_keynotvalid: { a: 'adobe_keynotvalid' },
			adobe_migratedagreements: { a: 'adobe_migratedagreements' },
			adobe_migrateddatamappings: { a: 'adobe_migrateddatamappings' },
			adobe_migratedusertemplates: { a: 'adobe_migratedusertemplates' },
			adobe_name: { a: 'adobe_name' },
			adobe_newagreements: { a: 'adobe_newagreements' },
			adobe_OAuthCode: { a: 'adobe_oauthcode' },
			adobe_serverurl: { a: 'adobe_serverurl' },
			adobe_settings_unique_id: { a: 'adobe_settings_unique_id' },
			adobe_SetupFirstDataMapping: { a: 'adobe_setupfirstdatamapping' },
			adobe_SetupFirstTemplate: { a: 'adobe_setupfirsttemplate' },
			adobe_timestamp_UtcDateAndTime: { a: 'adobe_timestamp' },
			adobe_versionnumber: { a: 'adobe_versionnumber', r: true },
			adobe_xEchoSignTest: { a: 'adobe_xechosigntest' },
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
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
		for (var field in adobe_integrationsettings) {
			var a = adobe_integrationsettings[field].a;
			var b = adobe_integrationsettings[field].b;
			var c = adobe_integrationsettings[field].c;
			var d = adobe_integrationsettings[field].d;
			var g = adobe_integrationsettings[field].g;
			var r = adobe_integrationsettings[field].r;
			adobe_integrationsettings[field] = webApiField(e, a, b, c, d, r, u, g);
		}
		adobe_integrationsettings.Entity = u;
		adobe_integrationsettings.EntityName = 'adobe_integrationsettings';
		adobe_integrationsettings.EntityCollectionName = 'adobe_integrationsettingses';
		adobe_integrationsettings['@odata.etag'] = e['@odata.etag'];
		adobe_integrationsettings.getAliasedValue = function (alias, isMultiOptionSet) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		adobe_integrationsettings.getAliasedFormattedValue = function (alias, isMultiOptionSet) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return EMPTY_STRING;
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return adobe_integrationsettings;
	};
})(LuckyMokey || (LuckyMokey = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.adobe_integrationsettings = {
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