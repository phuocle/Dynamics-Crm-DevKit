'use strict';
/** @namespace LuckyMokey */
var LuckyMokey;
(function (LuckyMokey) {
	'use strict';
	LuckyMokey.adobe_agreementApi = function (e) {
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
		var adobe_agreement = {
			adobe_add_recipient_from_parent_entity: { a: 'adobe_add_recipient_from_parent_entity' },
			adobe_addpostsignredirecturl: { a: 'adobe_addpostsignredirecturl' },
			adobe_adobe_agreementsystemuserlookup: { b: 'adobe_adobe_agreementsystemuserlookup', a: '_adobe_adobe_agreementsystemuserlookup_value', c: 'systemusers', d: 'systemuser' },
			adobe_agreementAccountlookup: { b: 'adobe_agreementAccountlookup', a: '_adobe_agreementaccountlookup_value', c: 'accounts', d: 'account' },
			adobe_agreementcontactlookup: { b: 'adobe_agreementcontactlookup', a: '_adobe_agreementcontactlookup_value', c: 'contacts', d: 'contact' },
			adobe_agreementcontractlookup: { b: 'adobe_agreementcontractlookup', a: '_adobe_agreementcontractlookup_value', c: 'contracts', d: 'contract' },
			adobe_agreementexpires: { a: 'adobe_agreementexpires' },
			adobe_AgreementFormId: { b: 'adobe_AgreementFormId', a: '_adobe_agreementformid_value', c: 'adobe_agreementmappingtemplates', d: 'adobe_agreementmappingtemplate' },
			adobe_agreementId: { a: 'adobe_agreementid' },
			adobe_agreementInvoicelookup: { b: 'adobe_agreementInvoicelookup', a: '_adobe_agreementinvoicelookup_value', c: 'invoices', d: 'invoice' },
			adobe_agreementleadlookup: { b: 'adobe_agreementleadlookup', a: '_adobe_agreementleadlookup_value', c: 'leads', d: 'lead' },
			adobe_agreementmessage: { a: 'adobe_agreementmessage' },
			adobe_agreementopportunitylookup: { b: 'adobe_agreementopportunitylookup', a: '_adobe_agreementopportunitylookup_value', c: 'opportunities', d: 'opportunity' },
			adobe_agreementQuotelookup: { b: 'adobe_agreementQuotelookup', a: '_adobe_agreementquotelookup_value', c: 'quotes', d: 'quote' },
			adobe_agreementsalesorderlookup: { b: 'adobe_agreementsalesorderlookup', a: '_adobe_agreementsalesorderlookup_value', c: 'salesorders', d: 'salesorder' },
			adobe_audittrailcontent: { a: 'adobe_audittrailcontent' },
			adobe_authoringurl: { a: 'adobe_authoringurl' },
			adobe_automaticreminder: { a: 'adobe_automaticreminder' },
			adobe_combineddocumenturl: { a: 'adobe_combineddocumenturl' },
			adobe_creationdata: { a: 'adobe_creationdata' },
			adobe_creationtype: { a: 'adobe_creationtype' },
			adobe_crmversion: { a: 'adobe_crmversion' },
			adobe_currentsignerurl: { a: 'adobe_currentsignerurl' },
			adobe_datesent_UtcDateAndTime: { a: 'adobe_datesent' },
			adobe_datesigned_UtcDateAndTime: { a: 'adobe_datesigned' },
			adobe_dateupdated_UtcDateAndTime: { a: 'adobe_dateupdated' },
			adobe_daysuntilexpires: { a: 'adobe_daysuntilexpires' },
			adobe_documentimagesurls: { a: 'adobe_documentimagesurls' },
			adobe_emailid: { a: 'adobe_emailid' },
			adobe_esagreementid: { a: 'adobe_esagreementid' },
			adobe_esagreementstatus: { a: 'adobe_esagreementstatus' },
			adobe_exceptionmessage: { a: 'adobe_exceptionmessage' },
			adobe_hostsigning: { a: 'adobe_hostsigning' },
			adobe_identityverification: { a: 'adobe_identityverification' },
			adobe_isattachmentadded: { a: 'adobe_isattachmentadded' },
			adobe_isaudittrailattached: { a: 'adobe_isaudittrailattached' },
			adobe_isPostAddedToParentEntity: { a: 'adobe_ispostaddedtoparententity' },
			adobe_isQuickCreate: { a: 'adobe_isquickcreate' },
			adobe_isrecipientadded: { a: 'adobe_isrecipientadded' },
			adobe_issignedpdfattached: { a: 'adobe_issignedpdfattached' },
			adobe_legacyid: { a: 'adobe_legacyid' },
			adobe_librarydocuments: { a: 'adobe_librarydocuments' },
			adobe_librarydocumentslong: { a: 'adobe_librarydocumentslong' },
			adobe_migrationguid: { a: 'adobe_migrationguid' },
			adobe_missingtemplatedocument: { a: 'adobe_missingtemplatedocument' },
			adobe_missingtemplaterecipient: { a: 'adobe_missingtemplaterecipient' },
			adobe_name: { a: 'adobe_name' },
			adobe_oquickcreateentityptionset: { a: 'adobe_oquickcreateentityptionset' },
			adobe_parentaccountId: { b: 'adobe_parentaccountId', a: '_adobe_parentaccountid_value', c: 'accounts', d: 'account' },
			adobe_parentcontactid: { b: 'adobe_parentcontactid', a: '_adobe_parentcontactid_value', c: 'contacts', d: 'contact' },
			adobe_parentcontractid: { b: 'adobe_parentcontractid', a: '_adobe_parentcontractid_value', c: 'contracts', d: 'contract' },
			adobe_ParentInvoiceId: { b: 'adobe_ParentInvoiceId', a: '_adobe_parentinvoiceid_value', c: 'invoices', d: 'invoice' },
			adobe_parentleadid: { b: 'adobe_parentleadid', a: '_adobe_parentleadid_value', c: 'leads', d: 'lead' },
			adobe_parentopportunityid: { b: 'adobe_parentopportunityid', a: '_adobe_parentopportunityid_value', c: 'opportunities', d: 'opportunity' },
			adobe_ParentOrderId: { b: 'adobe_ParentOrderId', a: '_adobe_parentorderid_value', c: 'salesorders', d: 'salesorder' },
			adobe_parentquoteid: { b: 'adobe_parentquoteid', a: '_adobe_parentquoteid_value', c: 'quotes', d: 'quote' },
			adobe_parentuserid: { b: 'adobe_parentuserid', a: '_adobe_parentuserid_value', c: 'systemusers', d: 'systemuser' },
			adobe_plugintrigger: { a: 'adobe_plugintrigger' },
			adobe_plugintriggerasync: { a: 'adobe_plugintriggerasync' },
			adobe_postsigningredirecturl: { a: 'adobe_postsigningredirecturl' },
			adobe_postsignredirectdelay: { a: 'adobe_postsignredirectdelay' },
			adobe_postsignredirecturl: { a: 'adobe_postsignredirecturl' },
			adobe_quickcreatelookuptemplatelist: { b: 'adobe_quickcreatelookuptemplatelist', a: '_adobe_quickcreatelookuptemplatelist_value', c: 'adobe_agreementtemplates', d: 'adobe_agreementtemplate' },
			adobe_ReaderRoleOnly: { a: 'adobe_readerroleonly' },
			adobe_recipientdata: { a: 'adobe_recipientdata' },
			adobe_reviewsigningorder: { a: 'adobe_reviewsigningorder' },
			adobe_securesignedpdf: { a: 'adobe_securesignedpdf' },
			adobe_selecteddatamap: { a: 'adobe_selecteddatamap' },
			adobe_selectedlanguage: { a: 'adobe_selectedlanguage' },
			adobe_selectedlibraryid: { a: 'adobe_selectedlibraryid' },
			adobe_senderId: { b: 'adobe_senderId', a: '_adobe_senderid_value', c: 'systemusers', d: 'systemuser' },
			adobe_sendersigning: { a: 'adobe_sendersigning' },
			adobe_sendersigningoptions: { a: 'adobe_sendersigningoptions' },
			adobe_sendersigningorder: { a: 'adobe_sendersigningorder' },
			adobe_sendersignsonly: { a: 'adobe_sendersignsonly' },
			adobe_sendfromlibrary: { a: 'adobe_sendfromlibrary' },
			adobe_sendfromlibrarycheckboxvalue: { a: 'adobe_sendfromlibrarycheckboxvalue' },
			adobe_signaturetype: { a: 'adobe_signaturetype' },
			adobe_signedpdfpassword: { a: 'adobe_signedpdfpassword' },
			adobe_signingorder: { a: 'adobe_signingorder' },
			adobe_signingpassword: { a: 'adobe_signingpassword' },
			adobe_subject: { a: 'adobe_subject' },
			adobe_templateid: { a: 'adobe_templateid' },
			adobe_triggeragreementupdate_UtcDateAndTime: { a: 'adobe_triggeragreementupdate' },
			adobe_useauthoring: { a: 'adobe_useauthoring' },
			adobe_useragent: { a: 'adobe_useragent' },
			adobe_usermessagequickcreateform: { a: 'adobe_usermessagequickcreateform' },
			adobe_waitingforsendersignature: { a: 'adobe_waitingforsendersignature' },
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
		for (var field in adobe_agreement) {
			var a = adobe_agreement[field].a;
			var b = adobe_agreement[field].b;
			var c = adobe_agreement[field].c;
			var d = adobe_agreement[field].d;
			var g = adobe_agreement[field].g;
			var r = adobe_agreement[field].r;
			adobe_agreement[field] = webApiField(e, a, b, c, d, r, u, g);
		}
		adobe_agreement.Entity = u;
		adobe_agreement.EntityName = 'adobe_agreement';
		adobe_agreement.EntityCollectionName = 'adobe_agreements';
		adobe_agreement['@odata.etag'] = e['@odata.etag'];
		adobe_agreement.getAliasedValue = function (alias, isMultiOptionSet) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		adobe_agreement.getAliasedFormattedValue = function (alias, isMultiOptionSet) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return EMPTY_STRING;
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return adobe_agreement;
	};
})(LuckyMokey || (LuckyMokey = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.adobe_agreement = {
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
		adobe_oquickcreateentityptionset : {
			Opportunity: 648770000,
			Contact: 648770001,
			Lead: 648770002,
			Account: 648770003,
			Contract: 648770004,
			Invoice: 648770005,
			Order: 648770006,
			Quote: 648770007,
			User: 648770008
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