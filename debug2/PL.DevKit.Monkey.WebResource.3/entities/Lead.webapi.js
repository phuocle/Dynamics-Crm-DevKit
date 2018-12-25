'use strict';
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.LeadApi = function (entity) {
		var EMPTY_STRING = '';
        function webApiField(entity, logicalName, schemaName, entityLogicalCollectionName, entityLogicalName, readOnly, upsertEntity) {
            var f = '@OData.Community.Display.V1.FormattedValue';
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
                return entity[logicalName];
            };
            var setValue = function (value) {
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
		var lead = {
			AccountId: { schemaName: 'accountid', logicalName: '_accountid_value', entityLogicalCollectionName: 'accounts', entityLogicalName: 'account', readOnly: true },
			Address1_AddressId: { logicalName: 'address1_addressid' },
			Address1_AddressTypeCode: { logicalName: 'address1_addresstypecode' },
			Address1_City: { logicalName: 'address1_city' },
			Address1_Composite: { logicalName: 'address1_composite', readOnly: true },
			Address1_Country: { logicalName: 'address1_country' },
			Address1_County: { logicalName: 'address1_county' },
			Address1_Fax: { logicalName: 'address1_fax' },
			Address1_Latitude: { logicalName: 'address1_latitude' },
			Address1_Line1: { logicalName: 'address1_line1' },
			Address1_Line2: { logicalName: 'address1_line2' },
			Address1_Line3: { logicalName: 'address1_line3' },
			Address1_Longitude: { logicalName: 'address1_longitude' },
			Address1_Name: { logicalName: 'address1_name' },
			Address1_PostalCode: { logicalName: 'address1_postalcode' },
			Address1_PostOfficeBox: { logicalName: 'address1_postofficebox' },
			Address1_ShippingMethodCode: { logicalName: 'address1_shippingmethodcode' },
			Address1_StateOrProvince: { logicalName: 'address1_stateorprovince' },
			Address1_Telephone1: { logicalName: 'address1_telephone1' },
			Address1_Telephone2: { logicalName: 'address1_telephone2' },
			Address1_Telephone3: { logicalName: 'address1_telephone3' },
			Address1_UPSZone: { logicalName: 'address1_upszone' },
			Address1_UTCOffset: { logicalName: 'address1_utcoffset' },
			Address2_AddressId: { logicalName: 'address2_addressid' },
			Address2_AddressTypeCode: { logicalName: 'address2_addresstypecode' },
			Address2_City: { logicalName: 'address2_city' },
			Address2_Composite: { logicalName: 'address2_composite', readOnly: true },
			Address2_Country: { logicalName: 'address2_country' },
			Address2_County: { logicalName: 'address2_county' },
			Address2_Fax: { logicalName: 'address2_fax' },
			Address2_Latitude: { logicalName: 'address2_latitude' },
			Address2_Line1: { logicalName: 'address2_line1' },
			Address2_Line2: { logicalName: 'address2_line2' },
			Address2_Line3: { logicalName: 'address2_line3' },
			Address2_Longitude: { logicalName: 'address2_longitude' },
			Address2_Name: { logicalName: 'address2_name' },
			Address2_PostalCode: { logicalName: 'address2_postalcode' },
			Address2_PostOfficeBox: { logicalName: 'address2_postofficebox' },
			Address2_ShippingMethodCode: { logicalName: 'address2_shippingmethodcode' },
			Address2_StateOrProvince: { logicalName: 'address2_stateorprovince' },
			Address2_Telephone1: { logicalName: 'address2_telephone1' },
			Address2_Telephone2: { logicalName: 'address2_telephone2' },
			Address2_Telephone3: { logicalName: 'address2_telephone3' },
			Address2_UPSZone: { logicalName: 'address2_upszone' },
			Address2_UTCOffset: { logicalName: 'address2_utcoffset' },
			BudgetAmount: { logicalName: 'budgetamount' },
			BudgetAmount_Base: { logicalName: 'budgetamount_base', readOnly: true },
			BudgetStatus: { logicalName: 'budgetstatus' },
			CampaignId: { schemaName: 'campaignid', logicalName: '_campaignid_value', entityLogicalCollectionName: 'campaigns', entityLogicalName: 'campaign' },
			CompanyName: { logicalName: 'companyname' },
			ConfirmInterest: { logicalName: 'confirminterest' },
			ContactId: { schemaName: 'contactid', logicalName: '_contactid_value', entityLogicalCollectionName: 'contacts', entityLogicalName: 'contact', readOnly: true },
			CreatedBy: { schemaName: 'createdby', logicalName: '_createdby_value', entityLogicalCollectionName: 'systemusers', entityLogicalName: 'systemuser', readOnly: true },
			CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true },
			CreatedOnBehalfBy: { schemaName: 'createdonbehalfby', logicalName: '_createdonbehalfby_value', entityLogicalCollectionName: 'systemusers', entityLogicalName: 'systemuser', readOnly: true },
			customerid_account: { schemaName: 'customerid_account', logicalName: '_customerid_value', entityLogicalCollectionName: 'accounts', entityLogicalName: 'account' },
			customerid_contact: { schemaName: 'customerid_contact', logicalName: '_customerid_value', entityLogicalCollectionName: 'contacts', entityLogicalName: 'contact' },
			DecisionMaker: { logicalName: 'decisionmaker' },
			Description: { logicalName: 'description' },
			DoNotBulkEMail: { logicalName: 'donotbulkemail' },
			DoNotEMail: { logicalName: 'donotemail' },
			DoNotFax: { logicalName: 'donotfax' },
			DoNotPhone: { logicalName: 'donotphone' },
			DoNotPostalMail: { logicalName: 'donotpostalmail' },
			DoNotSendMM: { logicalName: 'donotsendmm' },
			EMailAddress1: { logicalName: 'emailaddress1' },
			EMailAddress2: { logicalName: 'emailaddress2' },
			EMailAddress3: { logicalName: 'emailaddress3' },
			EntityImageId: { logicalName: 'entityimageid', readOnly: true },
			EstimatedAmount: { logicalName: 'estimatedamount' },
			EstimatedAmount_Base: { logicalName: 'estimatedamount_base', readOnly: true },
			EstimatedCloseDate_DateOnly: { logicalName: 'estimatedclosedate' },
			EstimatedValue: { logicalName: 'estimatedvalue' },
			EvaluateFit: { logicalName: 'evaluatefit' },
			ExchangeRate: { logicalName: 'exchangerate', readOnly: true },
			Fax: { logicalName: 'fax' },
			FirstName: { logicalName: 'firstname' },
			FollowEmail: { logicalName: 'followemail' },
			FullName: { logicalName: 'fullname', readOnly: true },
			ImportSequenceNumber: { logicalName: 'importsequencenumber' },
			IndustryCode: { logicalName: 'industrycode' },
			InitialCommunication: { logicalName: 'initialcommunication' },
			IsAutoCreate: { logicalName: 'isautocreate', readOnly: true },
			IsPrivate: { logicalName: 'isprivate', readOnly: true },
			JobTitle: { logicalName: 'jobtitle' },
			LastName: { logicalName: 'lastname' },
			LastOnHoldTime_UtcDateAndTime: { logicalName: 'lastonholdtime' },
			LastUsedInCampaign_UtcDateOnly: { logicalName: 'lastusedincampaign' },
			LeadId: { logicalName: 'leadid' },
			LeadQualityCode: { logicalName: 'leadqualitycode' },
			LeadSourceCode: { logicalName: 'leadsourcecode' },
			MasterId: { schemaName: 'masterid', logicalName: '_masterid_value', entityLogicalCollectionName: 'leads', entityLogicalName: 'lead', readOnly: true },
			Merged: { logicalName: 'merged', readOnly: true },
			MiddleName: { logicalName: 'middlename' },
			MobilePhone: { logicalName: 'mobilephone' },
			ModifiedBy: { schemaName: 'modifiedby', logicalName: '_modifiedby_value', entityLogicalCollectionName: 'systemusers', entityLogicalName: 'systemuser', readOnly: true },
			ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true },
			ModifiedOnBehalfBy: { schemaName: 'modifiedonbehalfby', logicalName: '_modifiedonbehalfby_value', entityLogicalCollectionName: 'systemusers', entityLogicalName: 'systemuser', readOnly: true },
			msdyn_gdproptout: { logicalName: 'msdyn_gdproptout' },
			Need: { logicalName: 'need' },
			NumberOfEmployees: { logicalName: 'numberofemployees' },
			OnHoldTime: { logicalName: 'onholdtime', readOnly: true },
			OriginatingCaseId: { schemaName: 'originatingcaseid', logicalName: '_originatingcaseid_value', entityLogicalCollectionName: 'incidents', entityLogicalName: 'incident' },
			OverriddenCreatedOn_UtcDateOnly: { logicalName: 'overriddencreatedon' },
			OwnerId_systemuser: { schemaName: 'ownerid', logicalName: '_ownerid_value', entityLogicalCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
			OwnerId_team: { schemaName: 'ownerid', logicalName: '_ownerid_value', entityLogicalCollectionName: 'teams', entityLogicalName: 'team' },
			OwningBusinessUnit: { schemaName: 'owningbusinessunit', logicalName: '_owningbusinessunit_value', entityLogicalCollectionName: 'businessunits', entityLogicalName: 'businessunit', readOnly: true },
			OwningTeam: { schemaName: 'owningteam', logicalName: '_owningteam_value', entityLogicalCollectionName: 'teams', entityLogicalName: 'team', readOnly: true },
			OwningUser: { schemaName: 'owninguser', logicalName: '_owninguser_value', entityLogicalCollectionName: 'systemusers', entityLogicalName: 'systemuser', readOnly: true },
			Pager: { logicalName: 'pager' },
			ParentAccountId: { schemaName: 'parentaccountid', logicalName: '_parentaccountid_value', entityLogicalCollectionName: 'accounts', entityLogicalName: 'account' },
			ParentContactId: { schemaName: 'parentcontactid', logicalName: '_parentcontactid_value', entityLogicalCollectionName: 'contacts', entityLogicalName: 'contact' },
			ParticipatesInWorkflow: { logicalName: 'participatesinworkflow' },
			PreferredContactMethodCode: { logicalName: 'preferredcontactmethodcode' },
			PriorityCode: { logicalName: 'prioritycode' },
			ProcessId: { logicalName: 'processid' },
			PurchaseProcess: { logicalName: 'purchaseprocess' },
			PurchaseTimeFrame: { logicalName: 'purchasetimeframe' },
			QualificationComments: { logicalName: 'qualificationcomments' },
			QualifyingOpportunityId: { schemaName: 'qualifyingopportunityid', logicalName: '_qualifyingopportunityid_value', entityLogicalCollectionName: 'opportunities', entityLogicalName: 'opportunity' },
			RelatedObjectId: { schemaName: 'relatedobjectid', logicalName: '_relatedobjectid_value', entityLogicalCollectionName: 'campaignresponses', entityLogicalName: 'campaignresponse' },
			Revenue: { logicalName: 'revenue' },
			Revenue_Base: { logicalName: 'revenue_base', readOnly: true },
			SalesStage: { logicalName: 'salesstage' },
			SalesStageCode: { logicalName: 'salesstagecode' },
			Salutation: { logicalName: 'salutation' },
			ScheduleFollowUp_Prospect_UtcDateOnly: { logicalName: 'schedulefollowup_prospect' },
			ScheduleFollowUp_Qualify_UtcDateOnly: { logicalName: 'schedulefollowup_qualify' },
			SIC: { logicalName: 'sic' },
			SLAId: { schemaName: 'slaid', logicalName: '_slaid_value', entityLogicalCollectionName: 'slas', entityLogicalName: 'sla' },
			SLAInvokedId: { schemaName: 'slainvokedid', logicalName: '_slainvokedid_value', entityLogicalCollectionName: 'slas', entityLogicalName: 'sla', readOnly: true },
			StageId: { logicalName: 'stageid' },
			StateCode: { logicalName: 'statecode' },
			StatusCode: { logicalName: 'statuscode' },
			Subject: { logicalName: 'subject' },
			TeamsFollowed: { logicalName: 'teamsfollowed' },
			Telephone1: { logicalName: 'telephone1' },
			Telephone2: { logicalName: 'telephone2' },
			Telephone3: { logicalName: 'telephone3' },
			TimeSpentByMeOnEmailAndMeetings: { logicalName: 'timespentbymeonemailandmeetings', readOnly: true },
			TimeZoneRuleVersionNumber: { logicalName: 'timezoneruleversionnumber' },
			TransactionCurrencyId: { schemaName: 'transactioncurrencyid', logicalName: '_transactioncurrencyid_value', entityLogicalCollectionName: 'transactioncurrencies', entityLogicalName: 'transactioncurrency' },
			TraversedPath: { logicalName: 'traversedpath' },
			UTCConversionTimeZoneCode: { logicalName: 'utcconversiontimezonecode' },
			VersionNumber: { logicalName: 'versionnumber', readOnly: true },
			WebSiteUrl: { logicalName: 'websiteurl' },
			YomiCompanyName: { logicalName: 'yomicompanyname' },
			YomiFirstName: { logicalName: 'yomifirstname' },
			YomiFullName: { logicalName: 'yomifullname', readOnly: true },
			YomiLastName: { logicalName: 'yomilastname' },
			YomiMiddleName: { logicalName: 'yomimiddlename' }
		};
		if (arguments.length > 1) {
			for (var i = 1; i < arguments.length; i++) {
				Object.assign(lead, arguments[i]);
			}
		}
		if (entity === undefined) entity = {};
		var upsertEntity = {};
		for (var field in lead) {
			var logicalName = lead[field].logicalName;
			var schemaName = lead[field].schemaName;
			var entityLogicalCollectionName = lead[field].entityLogicalCollectionName;
			var entityLogicalName = lead[field].entityLogicalName;
			var readOnly = lead[field].readOnly;
			lead[field] = webApiField(entity, logicalName, schemaName, entityLogicalCollectionName, entityLogicalName, readOnly, upsertEntity);
		}
		lead.Entity = upsertEntity;
		lead.EntityName = 'lead';
		lead.EntityCollectionName = 'leads';
		var optionSet = {
			Address1_AddressTypeCode : {
				Default_Value: 1
			},
			Address1_ShippingMethodCode : {
				Default_Value: 1
			},
			Address2_AddressTypeCode : {
				Default_Value: 1
			},
			Address2_ShippingMethodCode : {
				Default_Value: 1
			},
			BudgetStatus : {
				No_Committed_Budget: 0,
				May_Buy: 1,
				Can_Buy: 2,
				Will_Buy: 3
			},
			IndustryCode : {
				Accounting: 1,
				Agriculture_and_Non_petrol_Natural_Resource_Extraction: 2,
				Broadcasting_Printing_and_Publishing: 3,
				Brokers: 4,
				Building_Supply_Retail: 5,
				Business_Services: 6,
				Consulting: 7,
				Consumer_Services: 8,
				Design_Direction_and_Creative_Management: 9,
				Distributors_Dispatchers_and_Processors: 10,
				Doctors_Offices_and_Clinics: 11,
				Durable_Manufacturing: 12,
				Eating_and_Drinking_Places: 13,
				Entertainment_Retail: 14,
				Equipment_Rental_and_Leasing: 15,
				Financial: 16,
				Food_and_Tobacco_Processing: 17,
				Inbound_Capital_Intensive_Processing: 18,
				Inbound_Repair_and_Services: 19,
				Insurance: 20,
				Legal_Services: 21,
				Non_Durable_Merchandise_Retail: 22,
				Outbound_Consumer_Service: 23,
				Petrochemical_Extraction_and_Distribution: 24,
				Service_Retail: 25,
				SIG_Affiliations: 26,
				Social_Services: 27,
				Special_Outbound_Trade_Contractors: 28,
				Specialty_Realty: 29,
				Transportation: 30,
				Utility_Creation_and_Distribution: 31,
				Vehicle_Retail: 32,
				Wholesale: 33
			},
			InitialCommunication : {
				Contacted: 0,
				Not_Contacted: 1
			},
			LeadQualityCode : {
				Hot: 1,
				Warm: 2,
				Cold: 3
			},
			LeadSourceCode : {
				Advertisement: 1,
				Employee_Referral: 2,
				External_Referral: 3,
				Partner: 4,
				Public_Relations: 5,
				Seminar: 6,
				Trade_Show: 7,
				Web: 8,
				Word_of_Mouth: 9,
				Other: 10
			},
			Need : {
				Must_have: 0,
				Should_have: 1,
				Good_to_have: 2,
				No_need: 3
			},
			PreferredContactMethodCode : {
				Any: 1,
				Email: 2,
				Phone: 3,
				Fax: 4,
				Mail: 5
			},
			PriorityCode : {
				Default_Value: 1
			},
			PurchaseProcess : {
				Individual: 0,
				Committee: 1,
				Unknown: 2
			},
			PurchaseTimeFrame : {
				Immediate: 0,
				This_Quarter: 1,
				Next_Quarter: 2,
				This_Year: 3,
				Unknown: 4
			},
			SalesStage : {
				Qualify: 0
			},
			SalesStageCode : {
				Default_Value: 1
			},
			StateCode : {
				Open: 0,
				Qualified: 1,
				Disqualified: 2
			},
			StatusCode : {
				New: 1,
				Contacted: 2,
				Qualified: 3,
				Lost: 4,
				Cannot_Contact: 5,
				No_Longer_Interested: 6,
				Canceled: 7
			}
		};
		lead.OptionSet = optionSet;
		return lead;
	};
})(DevKit || (DevKit = {}));