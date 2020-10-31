'use strict';
/** @namespace LuckyMokey */
var LuckyMokey;
(function (LuckyMokey) {
	'use strict';
	LuckyMokey.adobe_agreementtemplateApi = function (e) {
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
		var adobe_agreementtemplate = {
			adobe_activetemplate: { a: 'adobe_activetemplate' },
			adobe_addpostsignredirecturl: { a: 'adobe_addpostsignredirecturl' },
			adobe_agreementname: { a: 'adobe_agreementname' },
			adobe_agreementtemplateId: { a: 'adobe_agreementtemplateid' },
			adobe_ApplySettings: { a: 'adobe_applysettings' },
			adobe_assigntoallusers: { a: 'adobe_assigntoallusers' },
			adobe_authoring: { a: 'adobe_authoring' },
			adobe_automaticreminder: { a: 'adobe_automaticreminder' },
			adobe_autosending: { a: 'adobe_autosending' },
			adobe_currentagreementid: { a: 'adobe_currentagreementid' },
			adobe_datamapping: { b: 'adobe_datamapping', a: '_adobe_datamapping_value', c: 'adobe_agreementmappingtemplates', d: 'adobe_agreementmappingtemplate' },
			adobe_datamappingentity: { a: 'adobe_datamappingentity' },
			adobe_daystoexpire: { a: 'adobe_daystoexpire' },
			adobe_defaulttemplate: { a: 'adobe_defaulttemplate' },
			adobe_Expires: { a: 'adobe_expires' },
			adobe_forceanyorder: { a: 'adobe_forceanyorder' },
			adobe_hostsigning: { a: 'adobe_hostsigning' },
			adobe_identityverification: { a: 'adobe_identityverification' },
			adobe_message: { a: 'adobe_message' },
			adobe_migrationguid: { a: 'adobe_migrationguid' },
			adobe_name: { a: 'adobe_name' },
			adobe_noteids: { a: 'adobe_noteids' },
			adobe_plugintrigger: { a: 'adobe_plugintrigger' },
			adobe_postsigningredirecturl: { a: 'adobe_postsigningredirecturl' },
			adobe_postsignredirectdelay: { a: 'adobe_postsignredirectdelay' },
			adobe_postsignredirecturl: { a: 'adobe_postsignredirecturl' },
			adobe_primaryentity: { a: 'adobe_primaryentity' },
			adobe_securesignedpdf: { a: 'adobe_securesignedpdf' },
			adobe_selectedlanguage: { a: 'adobe_selectedlanguage' },
			adobe_selfsigning: { a: 'adobe_selfsigning' },
			adobe_sendersigningoptions: { a: 'adobe_sendersigningoptions' },
			adobe_sendersignsfirst: { a: 'adobe_sendersignsfirst' },
			adobe_sendersignsonly: { a: 'adobe_sendersignsonly' },
			adobe_sequentialsigning: { a: 'adobe_sequentialsigning' },
			adobe_signaturetypeesign: { a: 'adobe_signaturetypeesign' },
			adobe_signedpdfpassword: { a: 'adobe_signedpdfpassword' },
			adobe_signingpassword: { a: 'adobe_signingpassword' },
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
		for (var field in adobe_agreementtemplate) {
			var a = adobe_agreementtemplate[field].a;
			var b = adobe_agreementtemplate[field].b;
			var c = adobe_agreementtemplate[field].c;
			var d = adobe_agreementtemplate[field].d;
			var g = adobe_agreementtemplate[field].g;
			var r = adobe_agreementtemplate[field].r;
			adobe_agreementtemplate[field] = webApiField(e, a, b, c, d, r, u, g);
		}
		adobe_agreementtemplate.Entity = u;
		adobe_agreementtemplate.EntityName = 'adobe_agreementtemplate';
		adobe_agreementtemplate.EntityCollectionName = 'adobe_agreementtemplates';
		adobe_agreementtemplate['@odata.etag'] = e['@odata.etag'];
		adobe_agreementtemplate.getAliasedValue = function (alias, isMultiOptionSet) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		adobe_agreementtemplate.getAliasedFormattedValue = function (alias, isMultiOptionSet) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return EMPTY_STRING;
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return adobe_agreementtemplate;
	};
})(LuckyMokey || (LuckyMokey = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.adobe_agreementtemplate = {
		adobe_automaticreminder : {
			Never: 648770000,
			Every_Day_Until_Signed: 648770001,
			Every_Week_Until_Signed: 648770002
		},
		adobe_identityverification : {
			EMAIL: 648770003,
			PHONE: 648770004,
			PASSWORD: 648770000,
			KNOWLEDGE_BASE: 648770001,
			WEB_IDENTITY: 648770002
		},
		adobe_sendersigningoptions : {
			I_sign_first: 648770000,
			I_sign_last: 648770001,
			Only_I_sign: 648770002
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