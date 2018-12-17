///<reference path='devkit.intellisense.js' />
LuckeyMonkey.FormOpportunity = function (executionContext, defaultWebResourceName) {
	var opportunity = intellisense.Form;
	opportunity.Utility = intellisense.Utility;
	var tab = {};
	tab.Summary = {
		///<field name='AddTabStateChange' type='Function'></field>
		AddTabStateChange: intellisense.FunctionTabAddTabStateChange,
		///<field name='DisplayState' type='OptionSet.TabDisplayState'>[GetSet] a value that indicates whether the tab is collapsed or expanded.</field>
		DisplayState: '',
		///<field name='Focus' type='Function'></field>
		Focus: intellisense.FunctionControlFocus,
		///<field name='Label' type='String'>[GetSet] the tab label.</field>
		Label: '',
		///<field name='Name' type='String'>[Get] returns the name of the tab.</field>
		Name: '',
		///<field name='Parent' type='Object'>[Get] returns the formContext.ui object containing the tab.</field>
		Parent: '',
		///<field name='Visible' type='Boolean'>[GetSet] a value that indicates whether the tab is currently visible or not.</field>
		Visible: '',
		///<field name='RemoveTabStateChange' type='Function'></field>
		RemoveTabStateChange: intellisense.FunctionTabRemoveTabStateChange,
		///<field name='Section' type='Object'>A section contains methods to manage how it appears as well as accessing the tab that contains the section.</field>
		Section: {
			opportunity_information: intellisense.FormSection,
			Opportunity_details: intellisense.FormSection,
			Notes_pane: intellisense.FormSection,
			Summary_section_6: intellisense.FormSection,
			Social_pane: intellisense.FormSection
		}
	};
	tab.Product_Line_Items = {
		///<field name='AddTabStateChange' type='Function'></field>
		AddTabStateChange: intellisense.FunctionTabAddTabStateChange,
		///<field name='DisplayState' type='OptionSet.TabDisplayState'>[GetSet] a value that indicates whether the tab is collapsed or expanded.</field>
		DisplayState: '',
		///<field name='Focus' type='Function'></field>
		Focus: intellisense.FunctionControlFocus,
		///<field name='Label' type='String'>[GetSet] the tab label.</field>
		Label: '',
		///<field name='Name' type='String'>[Get] returns the name of the tab.</field>
		Name: '',
		///<field name='Parent' type='Object'>[Get] returns the formContext.ui object containing the tab.</field>
		Parent: '',
		///<field name='Visible' type='Boolean'>[GetSet] a value that indicates whether the tab is currently visible or not.</field>
		Visible: '',
		///<field name='RemoveTabStateChange' type='Function'></field>
		RemoveTabStateChange: intellisense.FunctionTabRemoveTabStateChange,
		///<field name='Section' type='Object'>A section contains methods to manage how it appears as well as accessing the tab that contains the section.</field>
		Section: {
			opportunityproducts: intellisense.FormSection,
			suggestionsection: intellisense.FormSection,
			DynamicProperties: intellisense.FormSection,
			totals: intellisense.FormSection
		}
	};
	tab.QUOTES = {
		///<field name='AddTabStateChange' type='Function'></field>
		AddTabStateChange: intellisense.FunctionTabAddTabStateChange,
		///<field name='DisplayState' type='OptionSet.TabDisplayState'>[GetSet] a value that indicates whether the tab is collapsed or expanded.</field>
		DisplayState: '',
		///<field name='Focus' type='Function'></field>
		Focus: intellisense.FunctionControlFocus,
		///<field name='Label' type='String'>[GetSet] the tab label.</field>
		Label: '',
		///<field name='Name' type='String'>[Get] returns the name of the tab.</field>
		Name: '',
		///<field name='Parent' type='Object'>[Get] returns the formContext.ui object containing the tab.</field>
		Parent: '',
		///<field name='Visible' type='Boolean'>[GetSet] a value that indicates whether the tab is currently visible or not.</field>
		Visible: '',
		///<field name='RemoveTabStateChange' type='Function'></field>
		RemoveTabStateChange: intellisense.FunctionTabRemoveTabStateChange,
		///<field name='Section' type='Object'>A section contains methods to manage how it appears as well as accessing the tab that contains the section.</field>
		Section: {
			opportunityquotes: intellisense.FormSection
		}
	};
	var body = {
		///<field name='Tab' type='Object'>A tab is a group of sections on a page</field>
		Tab: tab,
		///<field name='BudgetAmount' type='Money'></field>
		BudgetAmount: intellisense.FieldNumber,
		///<field name='CurrentSituation' type='String'></field>
		CurrentSituation: intellisense.FieldString,
		///<field name='CustomerNeed' type='String'></field>
		CustomerNeed: intellisense.FieldString,
		///<field name='Description' type='String'></field>
		Description: intellisense.FieldString,
		///<field name='DiscountAmount' type='Money'></field>
		DiscountAmount: intellisense.FieldNumber,
		///<field name='DiscountPercentage' type='Decimal'></field>
		DiscountPercentage: intellisense.FieldNumber,
		///<field name='FreightAmount' type='Money'></field>
		FreightAmount: intellisense.FieldNumber,
		///<field name='IsRevenueSystemCalculated' type='Boolean'></field>
		IsRevenueSystemCalculated: intellisense.FieldBoolean,
		///<field name='Name' type='String'></field>
		Name: intellisense.FieldString,
		///<field name='ParentAccountId' type='Lookup'></field>
		ParentAccountId: intellisense.FieldLookup,
		///<field name='ParentContactId' type='Lookup'></field>
		ParentContactId: intellisense.FieldLookup,
		///<field name='PriceLevelId' type='Lookup'></field>
		PriceLevelId: intellisense.FieldLookup,
		///<field name='ProposedSolution' type='String'></field>
		ProposedSolution: intellisense.FieldString,
		///<field name='PurchaseProcess' type='OptionSet'></field>
		PurchaseProcess: intellisense.FieldOptionSet,
		///<field name='PurchaseTimeframe' type='OptionSet'></field>
		PurchaseTimeframe: intellisense.FieldOptionSet,
		///<field name='TotalAmount' type='Money'></field>
		TotalAmount: intellisense.FieldNumber,
		///<field name='TotalAmountLessFreight' type='Money'></field>
		TotalAmountLessFreight: intellisense.FieldNumber,
		///<field name='TotalLineItemAmount' type='Money'></field>
		TotalLineItemAmount: intellisense.FieldNumber,
		///<field name='TotalTax' type='Money'></field>
		TotalTax: intellisense.FieldNumber,
		///<field name='TransactionCurrencyId' type='Lookup'></field>
		TransactionCurrencyId: intellisense.FieldLookup
	};
	opportunity.Body = body;
	var header = {
		///<field name='EstimatedCloseDate' type='DateTime'></field>
		EstimatedCloseDate: intellisense.FieldDateTime,
		///<field name='EstimatedValue' type='Money'></field>
		EstimatedValue: intellisense.FieldNumber,
		///<field name='OwnerId' type='Lookup'></field>
		OwnerId: intellisense.FieldLookup,
		///<field name='StatusCode' type='OptionSet'></field>
		StatusCode: intellisense.FieldOptionSet
	};
	opportunity.Header = header;
	var footer = {

	};
	opportunity.Footer = footer;
	var process = intellisense.Process;
	var _OpportunitytoInvoiceB2B = {
		///<field name='ActualCloseDate' type='DateTime'></field>
		ActualCloseDate: intellisense.FieldDateTime,
		///<field name='ConfirmInterest' type='Boolean'></field>
		ConfirmInterest: intellisense.FieldBoolean,
		///<field name='DevelopProposal' type='Boolean'></field>
		DevelopProposal: intellisense.FieldBoolean,
		///<field name='DiscountPercentage' type='Decimal'></field>
		DiscountPercentage: intellisense.FieldNumber,
		///<field name='EvaluateFit' type='Boolean'></field>
		EvaluateFit: intellisense.FieldBoolean,
		///<field name='IdentifyCompetitors' type='Boolean'></field>
		IdentifyCompetitors: intellisense.FieldBoolean,
		///<field name='InitialCommunication' type='OptionSet'></field>
		InitialCommunication: intellisense.FieldOptionSet,
		///<field name='Need' type='OptionSet'></field>
		Need: intellisense.FieldOptionSet,
		///<field name='PresentFinalProposal' type='Boolean'></field>
		PresentFinalProposal: intellisense.FieldBoolean,
		///<field name='PriceLevelId' type='Lookup'></field>
		PriceLevelId: intellisense.FieldLookup,
		///<field name='StatusCode' type='OptionSet'></field>
		StatusCode: intellisense.FieldOptionSet,
		///<field name='StatusCode_1' type='OptionSet'></field>
		StatusCode_1: intellisense.FieldOptionSet,
		///<field name='StatusCode_2' type='OptionSet'></field>
		StatusCode_2: intellisense.FieldOptionSet,
		///<field name='TotalAmount' type='Money'></field>
		TotalAmount: intellisense.FieldNumber,
		///<field name='TotalAmount_1' type='Money'></field>
		TotalAmount_1: intellisense.FieldNumber,
		///<field name='TotalDiscountAmount' type='Money'></field>
		TotalDiscountAmount: intellisense.FieldNumber
	}
	process.OpportunitytoInvoiceB2B = _OpportunitytoInvoiceB2B;
	var _Collaborativeselling = {
		///<field name='ConfirmInterest' type='Boolean'></field>
		ConfirmInterest: intellisense.FieldBoolean,
		///<field name='CustomerNeed' type='String'></field>
		CustomerNeed: intellisense.FieldString,
		///<field name='EstimatedCloseDate' type='DateTime'></field>
		EstimatedCloseDate: intellisense.FieldDateTime,
		///<field name='EstimatedValue' type='Money'></field>
		EstimatedValue: intellisense.FieldNumber,
		///<field name='IdentifyPursuitTeam' type='Boolean'></field>
		IdentifyPursuitTeam: intellisense.FieldBoolean,
		///<field name='Name' type='String'></field>
		Name: intellisense.FieldString,
		///<field name='ParentAccountId' type='Lookup'></field>
		ParentAccountId: intellisense.FieldLookup
	}
	process.Collaborativeselling = _Collaborativeselling;
	var _OpportunitySalesProcess = {
		///<field name='BudgetAmount' type='Money'></field>
		BudgetAmount: intellisense.FieldNumber,
		///<field name='CompleteFinalProposal' type='Boolean'></field>
		CompleteFinalProposal: intellisense.FieldBoolean,
		///<field name='CompleteInternalReview' type='Boolean'></field>
		CompleteInternalReview: intellisense.FieldBoolean,
		///<field name='CustomerNeed' type='String'></field>
		CustomerNeed: intellisense.FieldString,
		///<field name='DecisionMaker' type='Boolean'></field>
		DecisionMaker: intellisense.FieldBoolean,
		///<field name='Description' type='String'></field>
		Description: intellisense.FieldString,
		///<field name='DevelopProposal' type='Boolean'></field>
		DevelopProposal: intellisense.FieldBoolean,
		///<field name='FileDebrief' type='Boolean'></field>
		FileDebrief: intellisense.FieldBoolean,
		///<field name='FinalDecisionDate' type='DateTime'></field>
		FinalDecisionDate: intellisense.FieldDateTime,
		///<field name='IdentifyCompetitors' type='Boolean'></field>
		IdentifyCompetitors: intellisense.FieldBoolean,
		///<field name='IdentifyCustomerContacts' type='Boolean'></field>
		IdentifyCustomerContacts: intellisense.FieldBoolean,
		///<field name='IdentifyPursuitTeam' type='Boolean'></field>
		IdentifyPursuitTeam: intellisense.FieldBoolean,
		///<field name='ParentAccountId' type='Lookup'></field>
		ParentAccountId: intellisense.FieldLookup,
		///<field name='ParentContactId' type='Lookup'></field>
		ParentContactId: intellisense.FieldLookup,
		///<field name='PresentFinalProposal' type='Boolean'></field>
		PresentFinalProposal: intellisense.FieldBoolean,
		///<field name='PresentProposal' type='Boolean'></field>
		PresentProposal: intellisense.FieldBoolean,
		///<field name='ProposedSolution' type='String'></field>
		ProposedSolution: intellisense.FieldString,
		///<field name='PurchaseProcess' type='OptionSet'></field>
		PurchaseProcess: intellisense.FieldOptionSet,
		///<field name='PurchaseTimeframe' type='OptionSet'></field>
		PurchaseTimeframe: intellisense.FieldOptionSet,
		///<field name='SendThankYouNote' type='Boolean'></field>
		SendThankYouNote: intellisense.FieldBoolean
	}
	process.OpportunitySalesProcess = _OpportunitySalesProcess;
	opportunity.Process = process;
	var quickForm = {

	};
	opportunity.QuickForm = quickForm;
	var navigation = {
		navActivities: intellisense.FormNavigation,
		navOrders: intellisense.FormNavigation,
		navRelationship: intellisense.FormNavigation,
		navInvoices: intellisense.FormNavigation,
		navComp: intellisense.FormNavigation,
		navDocument: intellisense.FormNavigation,
		navAsyncOperations: intellisense.FormNavigation,
		navConnections: intellisense.FormNavigation,
		navAudit: intellisense.FormNavigation,
		navProcessSessions: intellisense.FormNavigation
	};
	opportunity.Navigation = navigation;
	opportunity.OptionSet = {};
	///<field name='BudgetStatus' type='PickList'></field>
	opportunity.OptionSet.BudgetStatus = {
		///<field name='No_Committed_Budget' type='PickListValue'>No_Committed_Budget = 0</field>
		No_Committed_Budget: 0,
		///<field name='May_Buy' type='PickListValue'>May_Buy = 1</field>
		May_Buy: 1,
		///<field name='Can_Buy' type='PickListValue'>Can_Buy = 2</field>
		Can_Buy: 2,
		///<field name='Will_Buy' type='PickListValue'>Will_Buy = 3</field>
		Will_Buy: 3
	};
	///<field name='InitialCommunication' type='PickList'></field>
	opportunity.OptionSet.InitialCommunication = {
		///<field name='Contacted' type='PickListValue'>Contacted = 0</field>
		Contacted: 0,
		///<field name='Not_Contacted' type='PickListValue'>Not_Contacted = 1</field>
		Not_Contacted: 1
	};
	///<field name='Need' type='PickList'></field>
	opportunity.OptionSet.Need = {
		///<field name='Must_have' type='PickListValue'>Must_have = 0</field>
		Must_have: 0,
		///<field name='Should_have' type='PickListValue'>Should_have = 1</field>
		Should_have: 1,
		///<field name='Good_to_have' type='PickListValue'>Good_to_have = 2</field>
		Good_to_have: 2,
		///<field name='No_need' type='PickListValue'>No_need = 3</field>
		No_need: 3
	};
	///<field name='OpportunityRatingCode' type='PickList'></field>
	opportunity.OptionSet.OpportunityRatingCode = {
		///<field name='Hot' type='PickListValue'>Hot = 1</field>
		Hot: 1,
		///<field name='Warm' type='PickListValue'>Warm = 2</field>
		Warm: 2,
		///<field name='Cold' type='PickListValue'>Cold = 3</field>
		Cold: 3
	};
	///<field name='PricingErrorCode' type='PickList'></field>
	opportunity.OptionSet.PricingErrorCode = {
		///<field name='None' type='PickListValue'>None = 0</field>
		None: 0,
		///<field name='Detail_Error' type='PickListValue'>Detail_Error = 1</field>
		Detail_Error: 1,
		///<field name='Missing_Price_Level' type='PickListValue'>Missing_Price_Level = 2</field>
		Missing_Price_Level: 2,
		///<field name='Inactive_Price_Level' type='PickListValue'>Inactive_Price_Level = 3</field>
		Inactive_Price_Level: 3,
		///<field name='Missing_Quantity' type='PickListValue'>Missing_Quantity = 4</field>
		Missing_Quantity: 4,
		///<field name='Missing_Unit_Price' type='PickListValue'>Missing_Unit_Price = 5</field>
		Missing_Unit_Price: 5,
		///<field name='Missing_Product' type='PickListValue'>Missing_Product = 6</field>
		Missing_Product: 6,
		///<field name='Invalid_Product' type='PickListValue'>Invalid_Product = 7</field>
		Invalid_Product: 7,
		///<field name='Missing_Pricing_Code' type='PickListValue'>Missing_Pricing_Code = 8</field>
		Missing_Pricing_Code: 8,
		///<field name='Invalid_Pricing_Code' type='PickListValue'>Invalid_Pricing_Code = 9</field>
		Invalid_Pricing_Code: 9,
		///<field name='Missing_UOM' type='PickListValue'>Missing_UOM = 10</field>
		Missing_UOM: 10,
		///<field name='Product_Not_In_Price_Level' type='PickListValue'>Product_Not_In_Price_Level = 11</field>
		Product_Not_In_Price_Level: 11,
		///<field name='Missing_Price_Level_Amount' type='PickListValue'>Missing_Price_Level_Amount = 12</field>
		Missing_Price_Level_Amount: 12,
		///<field name='Missing_Price_Level_Percentage' type='PickListValue'>Missing_Price_Level_Percentage = 13</field>
		Missing_Price_Level_Percentage: 13,
		///<field name='Missing_Price' type='PickListValue'>Missing_Price = 14</field>
		Missing_Price: 14,
		///<field name='Missing_Current_Cost' type='PickListValue'>Missing_Current_Cost = 15</field>
		Missing_Current_Cost: 15,
		///<field name='Missing_Standard_Cost' type='PickListValue'>Missing_Standard_Cost = 16</field>
		Missing_Standard_Cost: 16,
		///<field name='Invalid_Price_Level_Amount' type='PickListValue'>Invalid_Price_Level_Amount = 17</field>
		Invalid_Price_Level_Amount: 17,
		///<field name='Invalid_Price_Level_Percentage' type='PickListValue'>Invalid_Price_Level_Percentage = 18</field>
		Invalid_Price_Level_Percentage: 18,
		///<field name='Invalid_Price' type='PickListValue'>Invalid_Price = 19</field>
		Invalid_Price: 19,
		///<field name='Invalid_Current_Cost' type='PickListValue'>Invalid_Current_Cost = 20</field>
		Invalid_Current_Cost: 20,
		///<field name='Invalid_Standard_Cost' type='PickListValue'>Invalid_Standard_Cost = 21</field>
		Invalid_Standard_Cost: 21,
		///<field name='Invalid_Rounding_Policy' type='PickListValue'>Invalid_Rounding_Policy = 22</field>
		Invalid_Rounding_Policy: 22,
		///<field name='Invalid_Rounding_Option' type='PickListValue'>Invalid_Rounding_Option = 23</field>
		Invalid_Rounding_Option: 23,
		///<field name='Invalid_Rounding_Amount' type='PickListValue'>Invalid_Rounding_Amount = 24</field>
		Invalid_Rounding_Amount: 24,
		///<field name='Price_Calculation_Error' type='PickListValue'>Price_Calculation_Error = 25</field>
		Price_Calculation_Error: 25,
		///<field name='Invalid_Discount_Type' type='PickListValue'>Invalid_Discount_Type = 26</field>
		Invalid_Discount_Type: 26,
		///<field name='Discount_Type_Invalid_State' type='PickListValue'>Discount_Type_Invalid_State = 27</field>
		Discount_Type_Invalid_State: 27,
		///<field name='Invalid_Discount' type='PickListValue'>Invalid_Discount = 28</field>
		Invalid_Discount: 28,
		///<field name='Invalid_Quantity' type='PickListValue'>Invalid_Quantity = 29</field>
		Invalid_Quantity: 29,
		///<field name='Invalid_Pricing_Precision' type='PickListValue'>Invalid_Pricing_Precision = 30</field>
		Invalid_Pricing_Precision: 30,
		///<field name='Missing_Product_Default_UOM' type='PickListValue'>Missing_Product_Default_UOM = 31</field>
		Missing_Product_Default_UOM: 31,
		///<field name='Missing_Product_UOM_Schedule_' type='PickListValue'>Missing_Product_UOM_Schedule_ = 32</field>
		Missing_Product_UOM_Schedule_: 32,
		///<field name='Inactive_Discount_Type' type='PickListValue'>Inactive_Discount_Type = 33</field>
		Inactive_Discount_Type: 33,
		///<field name='Invalid_Price_Level_Currency' type='PickListValue'>Invalid_Price_Level_Currency = 34</field>
		Invalid_Price_Level_Currency: 34,
		///<field name='Price_Attribute_Out_Of_Range' type='PickListValue'>Price_Attribute_Out_Of_Range = 35</field>
		Price_Attribute_Out_Of_Range: 35,
		///<field name='Base_Currency_Attribute_Overflow' type='PickListValue'>Base_Currency_Attribute_Overflow = 36</field>
		Base_Currency_Attribute_Overflow: 36,
		///<field name='Base_Currency_Attribute_Underflow' type='PickListValue'>Base_Currency_Attribute_Underflow = 37</field>
		Base_Currency_Attribute_Underflow: 37
	};
	///<field name='PriorityCode' type='PickList'></field>
	opportunity.OptionSet.PriorityCode = {
		///<field name='Default_Value' type='PickListValue'>Default_Value = 1</field>
		Default_Value: 1
	};
	///<field name='PurchaseProcess' type='PickList'></field>
	opportunity.OptionSet.PurchaseProcess = {
		///<field name='Individual' type='PickListValue'>Individual = 0</field>
		Individual: 0,
		///<field name='Committee' type='PickListValue'>Committee = 1</field>
		Committee: 1,
		///<field name='Unknown' type='PickListValue'>Unknown = 2</field>
		Unknown: 2
	};
	///<field name='PurchaseTimeframe' type='PickList'></field>
	opportunity.OptionSet.PurchaseTimeframe = {
		///<field name='Immediate' type='PickListValue'>Immediate = 0</field>
		Immediate: 0,
		///<field name='This_Quarter' type='PickListValue'>This_Quarter = 1</field>
		This_Quarter: 1,
		///<field name='Next_Quarter' type='PickListValue'>Next_Quarter = 2</field>
		Next_Quarter: 2,
		///<field name='This_Year' type='PickListValue'>This_Year = 3</field>
		This_Year: 3,
		///<field name='Unknown' type='PickListValue'>Unknown = 4</field>
		Unknown: 4
	};
	///<field name='SalesStage' type='PickList'></field>
	opportunity.OptionSet.SalesStage = {
		///<field name='Qualify' type='PickListValue'>Qualify = 0</field>
		Qualify: 0,
		///<field name='Develop' type='PickListValue'>Develop = 1</field>
		Develop: 1,
		///<field name='Propose' type='PickListValue'>Propose = 2</field>
		Propose: 2,
		///<field name='Close' type='PickListValue'>Close = 3</field>
		Close: 3
	};
	///<field name='SalesStageCode' type='PickList'></field>
	opportunity.OptionSet.SalesStageCode = {
		///<field name='Default_Value' type='PickListValue'>Default_Value = 1</field>
		Default_Value: 1
	};
	///<field name='StateCode' type='PickList'></field>
	opportunity.OptionSet.StateCode = {
		///<field name='Open' type='PickListValue'>Open = 0</field>
		Open: 0,
		///<field name='Won' type='PickListValue'>Won = 1</field>
		Won: 1,
		///<field name='Lost' type='PickListValue'>Lost = 2</field>
		Lost: 2
	};
	///<field name='StatusCode' type='PickList'></field>
	opportunity.OptionSet.StatusCode = {
		///<field name='In_Progress' type='PickListValue'>In_Progress = 1</field>
		In_Progress: 1,
		///<field name='On_Hold' type='PickListValue'>On_Hold = 2</field>
		On_Hold: 2,
		///<field name='Won' type='PickListValue'>Won = 3</field>
		Won: 3,
		///<field name='Canceled' type='PickListValue'>Canceled = 4</field>
		Canceled: 4,
		///<field name='Out_Sold' type='PickListValue'>Out_Sold = 5</field>
		Out_Sold: 5
	};
	///<field name='TimeLine' type='PickList'></field>
	opportunity.OptionSet.TimeLine = {
		///<field name='Immediate' type='PickListValue'>Immediate = 0</field>
		Immediate: 0,
		///<field name='This_Quarter' type='PickListValue'>This_Quarter = 1</field>
		This_Quarter: 1,
		///<field name='Next_Quarter' type='PickListValue'>Next_Quarter = 2</field>
		Next_Quarter: 2,
		///<field name='This_Year' type='PickListValue'>This_Year = 3</field>
		This_Year: 3,
		///<field name='Not_known' type='PickListValue'>Not_known = 4</field>
		Not_known: 4
	};
	return opportunity;
};
//{'JsForm':['Opportunity'],'JsWebApi':false,'IsDebugForm':false,'IsDebugWebApi':false}