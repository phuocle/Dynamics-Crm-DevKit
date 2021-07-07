'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.FormOpportunity_AI_for_Sales = function(executionContext, defaultWebResourceName) {
		var formContext = null;
		if (executionContext !== undefined) {
			if (executionContext.getFormContext === undefined) {
				formContext = executionContext;
			}
			else {
				formContext = executionContext.getFormContext();
			}
		}
		var form = devKit.LoadForm(formContext);
		var body = {
			ActionCards: {},
			BudgetAmount: {},
			Competitors: {},
			CurrentSituation: {},
			CustomerNeed: {},
			Description: {},
			DiscountAmount: {},
			DiscountPercentage: {},
			DynamicPropertiesList_LinkControl: {},
			FreightAmount: {},
			IsRevenueSystemCalculated: {},
			msdyn_OrderType: {},
			Name: {},
			notescontrol: {},
			opportunityproductsGrid: {},
			ParentAccountId: {},
			ParentContactId: {},
			PriceLevelId: {},
			ProductSuggestions_LinkControl: {},
			ProposedSolution: {},
			PurchaseProcess: {},
			PurchaseTimeframe: {},
			Pursuit_Team: {},
			quote: {},
			Stakeholders: {},
			TotalAmount: {},
			TotalAmountLessFreight: {},
			TotalLineItemAmount: {},
			TotalTax: {},
			TransactionCurrencyId: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			Product_Line_Items: {
				Section: {
					DynamicProperties: {},
					opportunityproducts: {},
					suggestionsection: {},
					totals: {}
				}
			},
			QUOTES: {
				Section: {
					opportunityquotes: {}
				}
			},
			Summary: {
				Section: {
					Notes_pane: {},
					Opportunity_details: {},
					opportunity_information: {},
					Social_pane: {},
					Summary_section_6: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var header = {
			EstimatedCloseDate: {},
			EstimatedValue: {},
			OwnerId: {},
			StatusCode: {}
		};
		devKit.LoadFields(formContext, header, "header_");
		form.Header = header;
		var process = devKit.LoadProcess(formContext);
		var _Opportunity_Sales_Process = {
			BudgetAmount: {},
			CompleteFinalProposal: {},
			CompleteInternalReview: {},
			CustomerNeed: {},
			DecisionMaker: {},
			Description: {},
			DevelopProposal: {},
			FileDebrief: {},
			FinalDecisionDate: {},
			IdentifyCompetitors: {},
			IdentifyCustomerContacts: {},
			IdentifyPursuitTeam: {},
			ParentAccountId: {},
			ParentContactId: {},
			PresentFinalProposal: {},
			PresentProposal: {},
			ProposedSolution: {},
			PurchaseProcess: {},
			PurchaseTimeframe: {},
			SendThankYouNote: {}
		}
		devKit.LoadFields(formContext, _Opportunity_Sales_Process, "header_process_");
		process.Opportunity_Sales_Process = _Opportunity_Sales_Process;
		form.Process = process;
		var quickForm = {

		};
		devKit.LoadQuickForms(formContext, quickForm);
		form.QuickForm = quickForm;
		var grid = {
			Stakeholders: {},
			Pursuit_Team: {},
			Competitors: {},
			opportunityproductsGrid: {},
			quote: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		var navigation = {
			navActivities: {},
			navAsyncOperations: {},
			navAudit: {},
			navComp: {},
			navConnections: {},
			navDocument: {},
			navInvoices: {},
			navOrders: {},
			navProcessSessions: {},
			navRelationship: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		return form;
	};
	DevKit.FormOpportunity_Field_Service_Information = function(executionContext, defaultWebResourceName) {
		var formContext = null;
		if (executionContext !== undefined) {
			if (executionContext.getFormContext === undefined) {
				formContext = executionContext;
			}
			else {
				formContext = executionContext.getFormContext();
			}
		}
		var form = devKit.LoadForm(formContext);
		var body = {
			BudgetAmount: {},
			CloseProbability: {},
			Competitors: {},
			CurrentSituation: {},
			CustomerNeed: {},
			Description: {},
			DiscountAmount: {},
			DiscountPercentage: {},
			FreightAmount: {},
			IsRevenueSystemCalculated: {},
			msdyn_OrderType: {},
			msdyn_WorkOrderType: {},
			Name: {},
			notescontrol: {},
			opportunityproductsGrid: {},
			OpportunityRatingCode: {},
			OpportunityServicesGrid: {},
			ParentAccountId: {},
			ParentContactId: {},
			PriceLevelId: {},
			ProposedSolution: {},
			PurchaseProcess: {},
			PurchaseTimeframe: {},
			Pursuit_Team: {},
			quote: {},
			SalesStageCode: {},
			Stakeholders: {},
			TotalAmount: {},
			TotalAmountLessFreight: {},
			TotalLineItemAmount: {},
			TotalTax: {},
			TransactionCurrencyId: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			opportunity_line_items: {
				Section: {
					opportunityproducts: {},
					ServiceMaintenanceLines: {},
					totals: {}
				}
			},
			QUOTES: {
				Section: {
					opportunityquotes: {},
					QUOTES_section_2: {}
				}
			},
			Summary: {
				Section: {
					Notes_pane: {},
					Opportunity_details: {},
					opportunity_information: {},
					Social_pane: {}
				}
			},
			tab_4: {
				Section: {
					tab_4_section_2: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var header = {
			EstimatedCloseDate: {},
			EstimatedValue: {},
			OwnerId: {},
			StatusCode: {}
		};
		devKit.LoadFields(formContext, header, "header_");
		form.Header = header;
		var process = devKit.LoadProcess(formContext);
		var _Opportunity_Sales_Process = {
			BudgetAmount: {},
			CompleteFinalProposal: {},
			CompleteInternalReview: {},
			CustomerNeed: {},
			DecisionMaker: {},
			Description: {},
			DevelopProposal: {},
			FileDebrief: {},
			FinalDecisionDate: {},
			IdentifyCompetitors: {},
			IdentifyCustomerContacts: {},
			IdentifyPursuitTeam: {},
			ParentAccountId: {},
			ParentContactId: {},
			PresentFinalProposal: {},
			PresentProposal: {},
			ProposedSolution: {},
			PurchaseProcess: {},
			PurchaseTimeframe: {},
			SendThankYouNote: {}
		}
		devKit.LoadFields(formContext, _Opportunity_Sales_Process, "header_process_");
		process.Opportunity_Sales_Process = _Opportunity_Sales_Process;
		form.Process = process;
		var quickForm = {

		};
		devKit.LoadQuickForms(formContext, quickForm);
		form.QuickForm = quickForm;
		var grid = {
			Stakeholders: {},
			Pursuit_Team: {},
			Competitors: {},
			opportunityproductsGrid: {},
			OpportunityServicesGrid: {},
			quote: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		var navigation = {
			nav_msdyn_opportunity_msdyn_workorder: {},
			navActivities: {},
			navAudit: {},
			navComp: {},
			navConnections: {},
			navDocument: {},
			navInvoices: {},
			navOrders: {},
			navProcessSessions: {},
			navRelationship: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		return form;
	};
	DevKit.FormOpportunity_Project_Information = function(executionContext, defaultWebResourceName) {
		var formContext = null;
		if (executionContext !== undefined) {
			if (executionContext.getFormContext === undefined) {
				formContext = executionContext;
			}
			else {
				formContext = executionContext.getFormContext();
			}
		}
		var form = devKit.LoadForm(formContext);
		var body = {
			BudgetAmount: {},
			CloseProbability: {},
			Competitors: {},
			CurrentSituation: {},
			CustomerNeed: {},
			Description: {},
			DiscountAmount: {},
			DiscountPercentage: {},
			DynamicPropertiesList_LinkControl: {},
			FreightAmount: {},
			IsRevenueSystemCalculated: {},
			msdyn_AccountManagerId: {},
			msdyn_ContractOrganizationalUnitId: {},
			msdyn_OrderType: {},
			Name: {},
			notescontrol: {},
			opportunityproductsGrid: {},
			OpportunityRatingCode: {},
			ParentAccountId: {},
			ParentContactId: {},
			PriceLevelId: {},
			ProductSuggestions_LinkControl: {},
			ProjectLinesGrid: {},
			ProposedSolution: {},
			PurchaseProcess: {},
			PurchaseTimeframe: {},
			Pursuit_Team: {},
			quote: {},
			Stakeholders: {},
			TotalAmount: {},
			TotalAmountLessFreight: {},
			TotalLineItemAmount: {},
			TotalTax: {},
			TransactionCurrencyId: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			OpportunityLinesTab: {
				Section: {
					OpportunityLinesSection: {},
					OpportunityLinesTab_section_3: {},
					totals: {}
				}
			},
			Product_Line_Items: {
				Section: {
					DynamicProperties: {},
					opportunityproducts: {},
					suggestionsection: {}
				}
			},
			QUOTES: {
				Section: {
					opportunityquotes: {}
				}
			},
			Summary: {
				Section: {
					Notes_pane: {},
					Opportunity_details: {},
					opportunity_information: {},
					Social_pane: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var header = {
			EstimatedCloseDate: {},
			EstimatedValue: {},
			OwnerId: {},
			StatusCode: {}
		};
		devKit.LoadFields(formContext, header, "header_");
		form.Header = header;
		var process = devKit.LoadProcess(formContext);
		var _Opportunity_Sales_Process = {
			BudgetAmount: {},
			CompleteFinalProposal: {},
			CompleteInternalReview: {},
			CustomerNeed: {},
			DecisionMaker: {},
			Description: {},
			DevelopProposal: {},
			FileDebrief: {},
			FinalDecisionDate: {},
			IdentifyCompetitors: {},
			IdentifyCustomerContacts: {},
			IdentifyPursuitTeam: {},
			ParentAccountId: {},
			ParentContactId: {},
			PresentFinalProposal: {},
			PresentProposal: {},
			ProposedSolution: {},
			PurchaseProcess: {},
			PurchaseTimeframe: {},
			SendThankYouNote: {}
		}
		devKit.LoadFields(formContext, _Opportunity_Sales_Process, "header_process_");
		process.Opportunity_Sales_Process = _Opportunity_Sales_Process;
		form.Process = process;
		var quickForm = {

		};
		devKit.LoadQuickForms(formContext, quickForm);
		form.QuickForm = quickForm;
		var grid = {
			Stakeholders: {},
			Pursuit_Team: {},
			Competitors: {},
			ProjectLinesGrid: {},
			opportunityproductsGrid: {},
			quote: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		var navigation = {
			nav_msdyn_opportunity_msdyn_opportunitypricelist_Opportunity: {},
			navActivities: {},
			navAudit: {},
			navComp: {},
			navConnections: {},
			navInvoices: {},
			navOrders: {},
			navProducts: {},
			navRelationship: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		return form;
	};
	DevKit.FormOpportunity = function(executionContext, defaultWebResourceName) {
		var formContext = null;
		if (executionContext !== undefined)
		{
			if (executionContext.getFormContext === undefined) {
				formContext = executionContext;
			}
			else {
				formContext = executionContext.getFormContext();
			}
		}
		var form = devKit.LoadForm(formContext);
		var body = {
			BudgetAmount: {},
			CustomerNeed: {},
			EstimatedCloseDate: {},
			EstimatedValue: {},
			msdyn_ContractOrganizationalUnitId: {},
			msdyn_OrderType: {},
			Name: {},
			ParentAccountId: {},
			ParentContactId: {}
		}
		devKit.LoadFields(formContext, body);
		var tab = {
			newOpportunity: {
				Section: {
					quickOpportunity_column1: {},
					quickOpportunity_column2: {},
					quickOpportunity_column3: {}
				}
			}
		}
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		return form;
	}
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.Opportunity = {
		BudgetStatus : {
			Can_Buy: 2,
			May_Buy: 1,
			No_Committed_Budget: 0,
			Will_Buy: 3
		},
		InitialCommunication : {
			Contacted: 0,
			Not_Contacted: 1
		},
		msdyn_forecastcategory : {
			Best_case: 100000002,
			Committed: 100000003,
			Lost: 100000006,
			Omitted: 100000004,
			Pipeline: 100000001,
			Won: 100000005
		},
		msdyn_OrderType : {
			Item_based: 192350000,
			Service_Maintenance_Based: 690970002,
			Work_based: 192350001
		},
		Need : {
			Good_to_have: 2,
			Must_have: 0,
			No_need: 3,
			Should_have: 1
		},
		OpportunityRatingCode : {
			Cold: 3,
			Hot: 1,
			Warm: 2
		},
		PricingErrorCode : {
			Base_Currency_Attribute_Overflow: 36,
			Base_Currency_Attribute_Underflow: 37,
			Detail_Error: 1,
			Discount_Type_Invalid_State: 27,
			Inactive_Discount_Type: 33,
			Inactive_Price_Level: 3,
			Invalid_Current_Cost: 20,
			Invalid_Discount: 28,
			Invalid_Discount_Type: 26,
			Invalid_Price: 19,
			Invalid_Price_Level_Amount: 17,
			Invalid_Price_Level_Currency: 34,
			Invalid_Price_Level_Percentage: 18,
			Invalid_Pricing_Code: 9,
			Invalid_Pricing_Precision: 30,
			Invalid_Product: 7,
			Invalid_Quantity: 29,
			Invalid_Rounding_Amount: 24,
			Invalid_Rounding_Option: 23,
			Invalid_Rounding_Policy: 22,
			Invalid_Standard_Cost: 21,
			Missing_Current_Cost: 15,
			Missing_Price: 14,
			Missing_Price_Level: 2,
			Missing_Price_Level_Amount: 12,
			Missing_Price_Level_Percentage: 13,
			Missing_Pricing_Code: 8,
			Missing_Product: 6,
			Missing_Product_Default_UOM: 31,
			Missing_Product_UOM_Schedule_: 32,
			Missing_Quantity: 4,
			Missing_Standard_Cost: 16,
			Missing_Unit_Price: 5,
			Missing_UOM: 10,
			None: 0,
			Price_Attribute_Out_Of_Range: 35,
			Price_Calculation_Error: 25,
			Product_Not_In_Price_Level: 11,
			Transaction_currency_is_not_set_for_the_product_price_list_item: 38
		},
		PriorityCode : {
			Default_Value: 1
		},
		PurchaseProcess : {
			Committee: 1,
			Individual: 0,
			Unknown: 2
		},
		PurchaseTimeframe : {
			Immediate: 0,
			Next_Quarter: 2,
			This_Quarter: 1,
			This_Year: 3,
			Unknown: 4
		},
		SalesStage : {
			Close: 3,
			Develop: 1,
			Propose: 2,
			Qualify: 0
		},
		SalesStageCode : {
			Default_Value: 1
		},
		SkipPriceCalculation : {
			DoPriceCalcAlways: 0,
			SkipPriceCalcOnRetrieve: 1
		},
		StateCode : {
			Lost: 2,
			Open: 0,
			Won: 1
		},
		StatusCode : {
			Canceled: 4,
			In_Progress: 1,
			On_Hold: 2,
			Out_Sold: 5,
			Won: 3
		},
		TimeLine : {
			Immediate: 0,
			Next_Quarter: 2,
			Not_known: 4,
			This_Quarter: 1,
			This_Year: 3
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