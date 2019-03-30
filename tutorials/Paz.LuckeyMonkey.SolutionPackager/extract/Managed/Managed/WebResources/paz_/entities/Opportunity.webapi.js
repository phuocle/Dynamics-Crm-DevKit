'use strict';
var LuckeyMonkey;
(function (LuckeyMonkey) {
	'use strict';
	LuckeyMonkey.OpportunityApi = function (e) {
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
		var opportunity = {
			AccountId: { b: 'accountid', a: '_accountid_value', c: 'accounts', d: 'account', r: true },
			ActualCloseDate_DateOnly: { a: 'actualclosedate' },
			ActualValue: { a: 'actualvalue' },
			ActualValue_Base: { a: 'actualvalue_base', r: true },
			adx_AcceptedDate_UtcDateOnly: { a: 'adx_accepteddate' },
			adx_DealRegistrationRequestId: { b: 'adx_DealRegistrationRequestId', a: '_adx_dealregistrationrequestid_value', c: 'adx_dealregistrationrequests', d: 'adx_dealregistrationrequest' },
			adx_DeliveredDate_UtcDateOnly: { a: 'adx_delivereddate' },
			adx_ExpiryDate_UtcDateOnly: { a: 'adx_expirydate' },
			adx_FeedbackYet: { a: 'adx_feedbackyet' },
			adx_LeadTypeId: { b: 'adx_LeadTypeId', a: '_adx_leadtypeid_value', c: 'adx_leadtypes', d: 'adx_leadtype' },
			adx_OpportunitySource: { a: 'adx_opportunitysource' },
			adx_OpportuntiyProductsfromLead: { a: 'adx_opportuntiyproductsfromlead' },
			adx_PartnerCollaboration: { a: 'adx_partnercollaboration' },
			adx_PartnerCreated: { a: 'adx_partnercreated' },
			adx_ReadyforDistribution: { a: 'adx_readyfordistribution' },
			adx_ReasonforReturn: { a: 'adx_reasonforreturn' },
			adx_ReferenceCode: { a: 'adx_referencecode' },
			adx_TerritoryId: { b: 'adx_TerritoryId', a: '_adx_territoryid_value', c: 'territories', d: 'territory' },
			adx_WonDate_UtcDateOnly: { a: 'adx_wondate' },
			BudgetAmount: { a: 'budgetamount' },
			BudgetAmount_Base: { a: 'budgetamount_base', r: true },
			BudgetStatus: { a: 'budgetstatus' },
			CampaignId: { b: 'campaignid', a: '_campaignid_value', c: 'campaigns', d: 'campaign' },
			CaptureProposalFeedback: { a: 'captureproposalfeedback' },
			CloseProbability: { a: 'closeprobability' },
			CompleteFinalProposal: { a: 'completefinalproposal' },
			CompleteInternalReview: { a: 'completeinternalreview' },
			ConfirmInterest: { a: 'confirminterest' },
			ContactId: { b: 'contactid', a: '_contactid_value', c: 'contacts', d: 'contact', r: true },
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			CurrentSituation: { a: 'currentsituation' },
			customerid_account: { b: 'customerid_account', a: '_customerid_value', c: 'accounts', d: 'account' },
			customerid_contact: { b: 'customerid_contact', a: '_customerid_value', c: 'contacts', d: 'contact' },
			CustomerNeed: { a: 'customerneed' },
			CustomerPainPoints: { a: 'customerpainpoints' },
			cxlvhlp_chatactivityid: { a: 'cxlvhlp_chatactivityid' },
			DecisionMaker: { a: 'decisionmaker' },
			Description: { a: 'description' },
			DevelopProposal: { a: 'developproposal' },
			DiscountAmount: { a: 'discountamount' },
			DiscountAmount_Base: { a: 'discountamount_base', r: true },
			DiscountPercentage: { a: 'discountpercentage' },
			EmailAddress: { a: 'emailaddress' },
			EstimatedCloseDate_DateOnly: { a: 'estimatedclosedate' },
			EstimatedValue: { a: 'estimatedvalue' },
			EstimatedValue_Base: { a: 'estimatedvalue_base', r: true },
			EvaluateFit: { a: 'evaluatefit' },
			ExchangeRate: { a: 'exchangerate', r: true },
			FileDebrief: { a: 'filedebrief' },
			FinalDecisionDate_DateOnly: { a: 'finaldecisiondate' },
			FreightAmount: { a: 'freightamount' },
			FreightAmount_Base: { a: 'freightamount_base', r: true },
			IdentifyCompetitors: { a: 'identifycompetitors' },
			IdentifyCustomerContacts: { a: 'identifycustomercontacts' },
			IdentifyPursuitTeam: { a: 'identifypursuitteam' },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			InitialCommunication: { a: 'initialcommunication' },
			int_Forecast: { a: 'int_forecast' },
			int_forecast_Base: { a: 'int_forecast_base', r: true },
			IsPrivate: { a: 'isprivate', r: true },
			IsRevenueSystemCalculated: { a: 'isrevenuesystemcalculated' },
			LastOnHoldTime_UtcDateAndTime: { a: 'lastonholdtime' },
			li_CompanyId: { a: 'li_companyid' },
			li_isinfluenced: { a: 'li_isinfluenced' },
			li_MemberToken: { a: 'li_membertoken' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msa_partnerid: { b: 'msa_partnerid', a: '_msa_partnerid_value', c: 'accounts', d: 'account' },
			msa_partneroppid: { b: 'msa_partneroppid', a: '_msa_partneroppid_value', c: 'contacts', d: 'contact' },
			msdyn_AccountManagerId: { b: 'msdyn_AccountManagerId', a: '_msdyn_accountmanagerid_value', c: 'systemusers', d: 'systemuser' },
			msdyn_ContractOrganizationalUnitId: { b: 'msdyn_ContractOrganizationalUnitId', a: '_msdyn_contractorganizationalunitid_value', c: 'msdyn_organizationalunits', d: 'msdyn_organizationalunit' },
			msdyn_OrderType: { a: 'msdyn_ordertype' },
			msdyn_WorkOrderType: { b: 'msdyn_WorkOrderType', a: '_msdyn_workordertype_value', c: 'msdyn_workordertypes', d: 'msdyn_workordertype' },
			Name: { a: 'name' },
			Need: { a: 'need' },
			OnHoldTime: { a: 'onholdtime', r: true },
			OpportunityId: { a: 'opportunityid' },
			OpportunityRatingCode: { a: 'opportunityratingcode' },
			OriginatingLeadId: { b: 'originatingleadid', a: '_originatingleadid_value', c: 'leads', d: 'lead' },
			OverriddenCreatedOn_UtcDateOnly: { a: 'overriddencreatedon' },
			OwnerId_systemuser: { b: 'ownerid', a: '_ownerid_value', c: 'systemusers', d: 'systemuser' },
			OwnerId_team: { b: 'ownerid', a: '_ownerid_value', c: 'teams', d: 'team' },
			OwningBusinessUnit: { b: 'owningbusinessunit', a: '_owningbusinessunit_value', c: 'businessunits', d: 'businessunit', r: true },
			OwningTeam: { b: 'owningteam', a: '_owningteam_value', c: 'teams', d: 'team', r: true },
			OwningUser: { b: 'owninguser', a: '_owninguser_value', c: 'systemusers', d: 'systemuser', r: true },
			ParentAccountId: { b: 'parentaccountid', a: '_parentaccountid_value', c: 'accounts', d: 'account' },
			ParentContactId: { b: 'parentcontactid', a: '_parentcontactid_value', c: 'contacts', d: 'contact' },
			ParticipatesInWorkflow: { a: 'participatesinworkflow' },
			PresentFinalProposal: { a: 'presentfinalproposal' },
			PresentProposal: { a: 'presentproposal' },
			PriceLevelId: { b: 'pricelevelid', a: '_pricelevelid_value', c: 'pricelevels', d: 'pricelevel' },
			PricingErrorCode: { a: 'pricingerrorcode' },
			PriorityCode: { a: 'prioritycode' },
			ProcessId: { a: 'processid' },
			ProposedSolution: { a: 'proposedsolution' },
			PurchaseProcess: { a: 'purchaseprocess' },
			PurchaseTimeframe: { a: 'purchasetimeframe' },
			PursuitDecision: { a: 'pursuitdecision' },
			QualificationComments: { a: 'qualificationcomments' },
			QuoteComments: { a: 'quotecomments' },
			ResolveFeedback: { a: 'resolvefeedback' },
			SalesStage: { a: 'salesstage' },
			SalesStageCode: { a: 'salesstagecode' },
			ScheduleFollowup_Prospect_UtcDateOnly: { a: 'schedulefollowup_prospect' },
			ScheduleFollowup_Qualify_UtcDateOnly: { a: 'schedulefollowup_qualify' },
			ScheduleProposalMeeting_UtcDateOnly: { a: 'scheduleproposalmeeting' },
			SendThankYouNote: { a: 'sendthankyounote' },
			SLAId: { b: 'slaid', a: '_slaid_value', c: 'slas', d: 'sla' },
			SLAInvokedId: { b: 'slainvokedid', a: '_slainvokedid_value', c: 'slas', d: 'sla', r: true },
			StageId: { a: 'stageid' },
			StateCode: { a: 'statecode' },
			StatusCode: { a: 'statuscode' },
			StepId: { a: 'stepid' },
			StepName: { a: 'stepname' },
			TeamsFollowed: { a: 'teamsfollowed' },
			TimeLine: { a: 'timeline' },
			TimeSpentByMeOnEmailAndMeetings: { a: 'timespentbymeonemailandmeetings', r: true },
			TimeZoneRuleVersionNumber: { a: 'timezoneruleversionnumber' },
			TotalAmount: { a: 'totalamount' },
			TotalAmount_Base: { a: 'totalamount_base', r: true },
			TotalAmountLessFreight: { a: 'totalamountlessfreight' },
			TotalAmountLessFreight_Base: { a: 'totalamountlessfreight_base', r: true },
			TotalDiscountAmount: { a: 'totaldiscountamount' },
			TotalDiscountAmount_Base: { a: 'totaldiscountamount_base', r: true },
			TotalLineItemAmount: { a: 'totallineitemamount' },
			TotalLineItemAmount_Base: { a: 'totallineitemamount_base', r: true },
			TotalLineItemDiscountAmount: { a: 'totallineitemdiscountamount' },
			TotalLineItemDiscountAmount_Base: { a: 'totallineitemdiscountamount_base', r: true },
			TotalTax: { a: 'totaltax' },
			TotalTax_Base: { a: 'totaltax_base', r: true },
			TransactionCurrencyId: { b: 'transactioncurrencyid', a: '_transactioncurrencyid_value', c: 'transactioncurrencies', d: 'transactioncurrency' },
			TraversedPath: { a: 'traversedpath' },
			UTCConversionTimeZoneCode: { a: 'utcconversiontimezonecode' },
			VersionNumber: { a: 'versionnumber', r: true }
		};
		if (arguments.length > 1) {
			for (var i = 1; i < arguments.length; i++) {
				Object.assign(opportunity, arguments[i]);
			}
		}
		if (e === undefined) e = {};
		var u = {};
		for (var field in opportunity) {
			var a = opportunity[field].a;
			var b = opportunity[field].b;
			var c = opportunity[field].c;
			var d = opportunity[field].d;
			var r = opportunity[field].r;
			opportunity[field] = webApiField(e, a, b, c, d, r, u);
		}
		opportunity.Entity = u;
		opportunity.EntityName = 'opportunity';
		opportunity.EntityCollectionName = 'opportunities';
		var optionSet = {
			adx_OpportunitySource : {
				Distributed: 100000000,
				Partner_Created: 100000001
			},
			adx_ReasonforReturn : {
				No_Interest: 100000000,
				No_Response: 100000001,
				Purchase_Timeframe__12_months: 100000002,
				Purchased_from_Competitor: 100000003,
				Purchased_from_other_Partner: 100000004,
				No_Funding: 100000005,
				Bad_Contact_Info: 100000006
			},
			BudgetStatus : {
				No_Committed_Budget: 0,
				May_Buy: 1,
				Can_Buy: 2,
				Will_Buy: 3
			},
			InitialCommunication : {
				Contacted: 0,
				Not_Contacted: 1
			},
			msdyn_OrderType : {
				Work_based: 192350001,
				Item_based: 192350000,
				Service_Maintenance_Based: 690970002
			},
			Need : {
				Must_have: 0,
				Should_have: 1,
				Good_to_have: 2,
				No_need: 3
			},
			OpportunityRatingCode : {
				Hot: 1,
				Warm: 2,
				Cold: 3
			},
			PricingErrorCode : {
				None: 0,
				Detail_Error: 1,
				Missing_Price_Level: 2,
				Inactive_Price_Level: 3,
				Missing_Quantity: 4,
				Missing_Unit_Price: 5,
				Missing_Product: 6,
				Invalid_Product: 7,
				Missing_Pricing_Code: 8,
				Invalid_Pricing_Code: 9,
				Missing_UOM: 10,
				Product_Not_In_Price_Level: 11,
				Missing_Price_Level_Amount: 12,
				Missing_Price_Level_Percentage: 13,
				Missing_Price: 14,
				Missing_Current_Cost: 15,
				Missing_Standard_Cost: 16,
				Invalid_Price_Level_Amount: 17,
				Invalid_Price_Level_Percentage: 18,
				Invalid_Price: 19,
				Invalid_Current_Cost: 20,
				Invalid_Standard_Cost: 21,
				Invalid_Rounding_Policy: 22,
				Invalid_Rounding_Option: 23,
				Invalid_Rounding_Amount: 24,
				Price_Calculation_Error: 25,
				Invalid_Discount_Type: 26,
				Discount_Type_Invalid_State: 27,
				Invalid_Discount: 28,
				Invalid_Quantity: 29,
				Invalid_Pricing_Precision: 30,
				Missing_Product_Default_UOM: 31,
				Missing_Product_UOM_Schedule_: 32,
				Inactive_Discount_Type: 33,
				Invalid_Price_Level_Currency: 34,
				Price_Attribute_Out_Of_Range: 35,
				Base_Currency_Attribute_Overflow: 36,
				Base_Currency_Attribute_Underflow: 37,
				Transaction_currency_is_not_set_for_the_product_price_list_item: 38
			},
			PriorityCode : {
				Default_Value: 1
			},
			PurchaseProcess : {
				Individual: 0,
				Committee: 1,
				Unknown: 2
			},
			PurchaseTimeframe : {
				Immediate: 0,
				This_Quarter: 1,
				Next_Quarter: 2,
				This_Year: 3,
				Unknown: 4
			},
			SalesStage : {
				Qualify: 0,
				Develop: 1,
				Propose: 2,
				Close: 3
			},
			SalesStageCode : {
				_1_Prospect: 1,
				_2_Contacting: 100000000,
				_3_Interest_Confirmed: 100000001,
				_4_Quoting: 100000002,
				_5_Closing: 100000003
			},
			StateCode : {
				Open: 0,
				Won: 1,
				Lost: 2
			},
			StatusCode : {
				Delivered: 100000001,
				Accepted: 100000003,
				Declined: 100000006,
				Returned: 756150000,
				Expired: 100000007,
				Purchased: 100000004,
				In_Progress: 1,
				On_Hold: 2,
				Open_for_Bidding: 200000,
				Won: 3,
				Canceled: 4,
				Out_Sold: 5
			},
			TimeLine : {
				Immediate: 0,
				This_Quarter: 1,
				Next_Quarter: 2,
				This_Year: 3,
				Not_known: 4
			}
		};
		opportunity.OptionSet = optionSet;
		return opportunity;
	};
})(LuckeyMonkey || (LuckeyMonkey = {}));