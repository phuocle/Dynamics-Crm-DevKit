'use strict';
/** @namespace LuckyMokey */
var LuckyMokey;
(function (LuckyMokey) {
	'use strict';
	LuckyMokey.adobe_templaterecipientApi = function (e) {
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
		var adobe_templaterecipient = {
			adobe_accountoptions: { a: 'adobe_accountoptions' },
			adobe_addrecipientmanually: { a: 'adobe_addrecipientmanually' },
			adobe_contactleadoptions: { a: 'adobe_contactleadoptions' },
			adobe_countrycode: { a: 'adobe_countrycode' },
			adobe_customentityoptions: { a: 'adobe_customentityoptions' },
			adobe_displayedorder: { a: 'adobe_displayedorder' },
			adobe_dynamicrecipient: { a: 'adobe_dynamicrecipient' },
			adobe_email: { a: 'adobe_email' },
			adobe_emaildisplay: { a: 'adobe_emaildisplay' },
			adobe_fullname: { a: 'adobe_fullname' },
			adobe_identityverification: { a: 'adobe_identityverification' },
			adobe_multiplerecipients: { a: 'adobe_multiplerecipients' },
			adobe_name: { a: 'adobe_name' },
			adobe_opportunityoptions: { a: 'adobe_opportunityoptions' },
			adobe_overridedefaultverification: { a: 'adobe_overridedefaultverification' },
			adobe_password: { a: 'adobe_password' },
			adobe_phonenumber: { a: 'adobe_phonenumber' },
			adobe_primarycontactonly: { a: 'adobe_primarycontactonly' },
			adobe_primaryentity: { a: 'adobe_primaryentity' },
			adobe_primaryentityschema: { a: 'adobe_primaryentityschema' },
			adobe_recipientorderint: { a: 'adobe_recipientorderint' },
			adobe_recipientrole: { a: 'adobe_recipientrole' },
			adobe_recipienttype: { a: 'adobe_recipienttype' },
			adobe_relatedcontact: { b: 'adobe_relatedcontact', a: '_adobe_relatedcontact_value', c: 'contacts', d: 'contact' },
			adobe_relatedentity: { a: 'adobe_relatedentity' },
			adobe_relatedlead: { b: 'adobe_relatedlead', a: '_adobe_relatedlead_value', c: 'leads', d: 'lead' },
			adobe_relateduser: { b: 'adobe_relateduser', a: '_adobe_relateduser_value', c: 'systemusers', d: 'systemuser' },
			adobe_sequentialorder: { a: 'adobe_sequentialorder' },
			adobe_templateId: { b: 'adobe_templateId', a: '_adobe_templateid_value', c: 'adobe_agreementtemplates', d: 'adobe_agreementtemplate' },
			adobe_templaterecipientId: { a: 'adobe_templaterecipientid' },
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
		for (var field in adobe_templaterecipient) {
			var a = adobe_templaterecipient[field].a;
			var b = adobe_templaterecipient[field].b;
			var c = adobe_templaterecipient[field].c;
			var d = adobe_templaterecipient[field].d;
			var g = adobe_templaterecipient[field].g;
			var r = adobe_templaterecipient[field].r;
			adobe_templaterecipient[field] = webApiField(e, a, b, c, d, r, u, g);
		}
		adobe_templaterecipient.Entity = u;
		adobe_templaterecipient.EntityName = 'adobe_templaterecipient';
		adobe_templaterecipient.EntityCollectionName = 'adobe_templaterecipients';
		adobe_templaterecipient['@odata.etag'] = e['@odata.etag'];
		adobe_templaterecipient.getAliasedValue = function (alias, isMultiOptionSet) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		adobe_templaterecipient.getAliasedFormattedValue = function (alias, isMultiOptionSet) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return EMPTY_STRING;
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return adobe_templaterecipient;
	};
})(LuckyMokey || (LuckyMokey = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.adobe_templaterecipient = {
		adobe_accountoptions : {
			Lead_Contact_Only: 648770000,
			All_Contacts_associated_with_Account: 648770001
		},
		adobe_customentityoptions : {
			Lead_Contact_Only: 648770000,
			All_Contacts_associated_with_Entity: 648770001,
			Lead_Contact_from_associated_Account: 648770002,
			All_Contacts_from_associated_Account: 648770003
		},
		adobe_identityverification : {
			EMAIL: 648770003,
			PHONE: 648770004,
			PASSWORD: 648770000,
			KNOWLEDGE_BASE: 648770001,
			WEB_IDENTITY: 648770002
		},
		adobe_opportunityoptions : {
			Lead_Contact_Only: 648770000,
			All_Contacts_Associated_With_Opportunity: 648770001
		},
		adobe_recipientrole : {
			SIGNER: 648770000,
			APPROVER: 648770001,
			CC: 648770002
		},
		adobe_recipienttype : {
			New: 648770000,
			Contact: 648770001,
			Lead: 648770002,
			User: 648770003
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