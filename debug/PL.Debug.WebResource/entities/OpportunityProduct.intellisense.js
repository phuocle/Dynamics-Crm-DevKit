///<reference path='devkit.intellisense.js' />
Debug.FormOpportunityProduct = function (executionContext, defaultWebResourceName) {
	var opportunityproduct = intellisense.Form;
	opportunityproduct.Utility = intellisense.Utility;
	var tab = {};
	tab.general = {
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
			opportunity_product_information: intellisense.FormSection,
			pricing: intellisense.FormSection
		}
	};
	var body = {
		///<field name='Tab' type='Object'>A tab is a group of sections on a page</field>
		Tab: tab,
		///<field name='BaseAmount' type='Money'></field>
		BaseAmount: intellisense.FieldNumber,
		///<field name='ExtendedAmount' type='Money'></field>
		ExtendedAmount: intellisense.FieldNumber,
		///<field name='IsPriceOverridden' type='Boolean'></field>
		IsPriceOverridden: intellisense.FieldBoolean,
		///<field name='IsProductOverridden' type='Boolean'></field>
		IsProductOverridden: intellisense.FieldBoolean,
		///<field name='ManualDiscountAmount' type='Money'></field>
		ManualDiscountAmount: intellisense.FieldNumber,
		///<field name='PricePerUnit' type='Money'></field>
		PricePerUnit: intellisense.FieldNumber,
		///<field name='ProductDescription' type='String'></field>
		ProductDescription: intellisense.FieldString,
		///<field name='ProductId' type='Lookup'></field>
		ProductId: intellisense.FieldLookup,
		///<field name='Quantity' type='Decimal'></field>
		Quantity: intellisense.FieldNumber,
		///<field name='Tax' type='Money'></field>
		Tax: intellisense.FieldNumber,
		///<field name='UoMId' type='Lookup'></field>
		UoMId: intellisense.FieldLookup,
		///<field name='VolumeDiscountAmount' type='Money'></field>
		VolumeDiscountAmount: intellisense.FieldNumber
	};
	opportunityproduct.Body = body;
	var header = {

	};
	opportunityproduct.Header = header;
	var footer = {

	};
	opportunityproduct.Footer = footer;
	var quickForm = {

	};
	opportunityproduct.QuickForm = quickForm;
	var navigation = {

	};
	opportunityproduct.Navigation = navigation;
	opportunityproduct.OptionSet = {};
	///<field name='OpportunityStateCode' type='PickList'></field>
	opportunityproduct.OptionSet.OpportunityStateCode = {
	};
	///<field name='PricingErrorCode' type='PickList'></field>
	opportunityproduct.OptionSet.PricingErrorCode = {
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
	///<field name='ProductTypeCode' type='PickList'></field>
	opportunityproduct.OptionSet.ProductTypeCode = {
		///<field name='Product' type='PickListValue'>Product = 1</field>
		Product: 1,
		///<field name='Bundle' type='PickListValue'>Bundle = 2</field>
		Bundle: 2,
		///<field name='Required_Bundle_Product' type='PickListValue'>Required_Bundle_Product = 3</field>
		Required_Bundle_Product: 3,
		///<field name='Optional_Bundle_Product' type='PickListValue'>Optional_Bundle_Product = 4</field>
		Optional_Bundle_Product: 4,
		///<field name='Project_based_Service' type='PickListValue'>Project_based_Service = 5</field>
		Project_based_Service: 5
	};
	///<field name='PropertyConfigurationStatus' type='PickList'></field>
	opportunityproduct.OptionSet.PropertyConfigurationStatus = {
		///<field name='Edit' type='PickListValue'>Edit = 0</field>
		Edit: 0,
		///<field name='Rectify' type='PickListValue'>Rectify = 1</field>
		Rectify: 1,
		///<field name='Not_Configured' type='PickListValue'>Not_Configured = 2</field>
		Not_Configured: 2
	};
	return opportunityproduct;
};
Debug.OpportunityProductApi = function (entity) {
	return {
		///<field name='BaseAmount' type='Money'>Edm.Decimal</field>
		BaseAmount: intellisense.EntityValue,
		///<field name='BaseAmount_Base' type='Money'>ReadOnly - Edm.Decimal</field>
		BaseAmount_Base: intellisense.EntityValue,
		///<field name='CreatedBy' type='Lookup'>ReadOnly - Edm.Guid</field>
		CreatedBy: intellisense.EntityValue,
		///<field name='CreatedOn_UtcDateAndTime' type='DateTime'>ReadOnly - Edm.DateTimeOffset</field>
		CreatedOn_UtcDateAndTime: intellisense.EntityValue,
		///<field name='CreatedOnBehalfBy' type='Lookup'>ReadOnly - Edm.Guid</field>
		CreatedOnBehalfBy: intellisense.EntityValue,
		///<field name='Description' type='Memo'>Edm.String</field>
		Description: intellisense.EntityValue,
		///<field name='EntityImageId' type='Uniqueidentifier'>ReadOnly - Edm.Guid</field>
		EntityImageId: intellisense.EntityValue,
		///<field name='ExchangeRate' type='Decimal'>ReadOnly - Edm.Decimal</field>
		ExchangeRate: intellisense.EntityValue,
		///<field name='ExtendedAmount' type='Money'>Edm.Decimal</field>
		ExtendedAmount: intellisense.EntityValue,
		///<field name='ExtendedAmount_Base' type='Money'>ReadOnly - Edm.Decimal</field>
		ExtendedAmount_Base: intellisense.EntityValue,
		///<field name='ImportSequenceNumber' type='Integer'>Edm.Int32</field>
		ImportSequenceNumber: intellisense.EntityValue,
		///<field name='IsPriceOverridden' type='Boolean'>Edm.Boolean</field>
		IsPriceOverridden: intellisense.EntityValue,
		///<field name='IsProductOverridden' type='Boolean'>Edm.Boolean</field>
		IsProductOverridden: intellisense.EntityValue,
		///<field name='LineItemNumber' type='Integer'>Edm.Int32</field>
		LineItemNumber: intellisense.EntityValue,
		///<field name='ManualDiscountAmount' type='Money'>Edm.Decimal</field>
		ManualDiscountAmount: intellisense.EntityValue,
		///<field name='ManualDiscountAmount_Base' type='Money'>ReadOnly - Edm.Decimal</field>
		ManualDiscountAmount_Base: intellisense.EntityValue,
		///<field name='ModifiedBy' type='Lookup'>ReadOnly - Edm.Guid</field>
		ModifiedBy: intellisense.EntityValue,
		///<field name='ModifiedOn_UtcDateAndTime' type='DateTime'>ReadOnly - Edm.DateTimeOffset</field>
		ModifiedOn_UtcDateAndTime: intellisense.EntityValue,
		///<field name='ModifiedOnBehalfBy' type='Lookup'>ReadOnly - Edm.Guid</field>
		ModifiedOnBehalfBy: intellisense.EntityValue,
		///<field name='OpportunityId' type='Lookup'>Edm.Guid</field>
		OpportunityId: intellisense.EntityValue,
		///<field name='OpportunityProductId' type='Uniqueidentifier'>Edm.Guid</field>
		OpportunityProductId: intellisense.EntityValue,
		///<field name='OpportunityProductName' type='String'>Edm.String</field>
		OpportunityProductName: intellisense.EntityValue,
		///<field name='OpportunityStateCode' type='OptionSet'>ReadOnly - Edm.Int32 - this.OptionSet.OpportunityStateCode</field>
		OpportunityStateCode: intellisense.EntityValue,
		///<field name='OverriddenCreatedOn_UtcDateOnly' type='DateTime'>Edm.DateTimeOffset</field>
		OverriddenCreatedOn_UtcDateOnly: intellisense.EntityValue,
		///<field name='OwnerId_systemuser' type='Lookup'></field>
		OwnerId_systemuser: intellisense.EntityValue,
		///<field name='OwnerId_team' type='Lookup'></field>
		OwnerId_team: intellisense.EntityValue,
		///<field name='OwningBusinessUnit' type='Lookup'>ReadOnly - Edm.Guid</field>
		OwningBusinessUnit: intellisense.EntityValue,
		///<field name='OwningTeam' type='Lookup'>ReadOnly - Edm.Guid</field>
		OwningTeam: intellisense.EntityValue,
		///<field name='OwningUser' type='Lookup'>ReadOnly - Edm.Guid</field>
		OwningUser: intellisense.EntityValue,
		///<field name='ParentBundleId' type='Uniqueidentifier'>Edm.Guid</field>
		ParentBundleId: intellisense.EntityValue,
		///<field name='ParentBundleIdRef' type='Lookup'>Edm.Guid</field>
		ParentBundleIdRef: intellisense.EntityValue,
		///<field name='PricePerUnit' type='Money'>Edm.Decimal</field>
		PricePerUnit: intellisense.EntityValue,
		///<field name='PricePerUnit_Base' type='Money'>ReadOnly - Edm.Decimal</field>
		PricePerUnit_Base: intellisense.EntityValue,
		///<field name='PricingErrorCode' type='OptionSet'>Edm.Int32 - this.OptionSet.PricingErrorCode</field>
		PricingErrorCode: intellisense.EntityValue,
		///<field name='ProductAssociationId' type='Uniqueidentifier'>Edm.Guid</field>
		ProductAssociationId: intellisense.EntityValue,
		///<field name='ProductDescription' type='String'>Edm.String</field>
		ProductDescription: intellisense.EntityValue,
		///<field name='ProductId' type='Lookup'>Edm.Guid</field>
		ProductId: intellisense.EntityValue,
		///<field name='ProductName' type='String'>Edm.String</field>
		ProductName: intellisense.EntityValue,
		///<field name='ProductTypeCode' type='OptionSet'>Edm.Int32 - this.OptionSet.ProductTypeCode</field>
		ProductTypeCode: intellisense.EntityValue,
		///<field name='PropertyConfigurationStatus' type='OptionSet'>Edm.Int32 - this.OptionSet.PropertyConfigurationStatus</field>
		PropertyConfigurationStatus: intellisense.EntityValue,
		///<field name='Quantity' type='Decimal'>Edm.Decimal</field>
		Quantity: intellisense.EntityValue,
		///<field name='SequenceNumber' type='Integer'>Edm.Int32</field>
		SequenceNumber: intellisense.EntityValue,
		///<field name='Tax' type='Money'>Edm.Decimal</field>
		Tax: intellisense.EntityValue,
		///<field name='Tax_Base' type='Money'>ReadOnly - Edm.Decimal</field>
		Tax_Base: intellisense.EntityValue,
		///<field name='TimeZoneRuleVersionNumber' type='Integer'>Edm.Int32</field>
		TimeZoneRuleVersionNumber: intellisense.EntityValue,
		///<field name='TransactionCurrencyId' type='Lookup'>Edm.Guid</field>
		TransactionCurrencyId: intellisense.EntityValue,
		///<field name='UoMId' type='Lookup'>Edm.Guid</field>
		UoMId: intellisense.EntityValue,
		///<field name='UTCConversionTimeZoneCode' type='Integer'>Edm.Int32</field>
		UTCConversionTimeZoneCode: intellisense.EntityValue,
		///<field name='VersionNumber' type='BigInt'>ReadOnly - </field>
		VersionNumber: intellisense.EntityValue,
		///<field name='VolumeDiscountAmount' type='Money'>ReadOnly - Edm.Decimal</field>
		VolumeDiscountAmount: intellisense.EntityValue,
		///<field name='VolumeDiscountAmount_Base' type='Money'>ReadOnly - Edm.Decimal</field>
		VolumeDiscountAmount_Base: intellisense.EntityValue,
		///<field name='Entity' type='Object'></field>
		Entity: null,
		///<field name='EntityName' type='String'></field>
		EntityName: null,
		///<field name='EntityCollectionName' type='String'></field>
		EntityCollectionName: null,
		///<field name='OptionSet' type='Object'></field>
		OptionSet: {
			///<field name='OpportunityStateCode' type='PickList'></field>
			OpportunityStateCode: {
			},
			///<field name='PricingErrorCode' type='PickList'></field>
			PricingErrorCode: {
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
			},
			///<field name='ProductTypeCode' type='PickList'></field>
			ProductTypeCode: {
				///<field name='Product' type='PickListValue'>Product = 1</field>
				Product: 1,
				///<field name='Bundle' type='PickListValue'>Bundle = 2</field>
				Bundle: 2,
				///<field name='Required_Bundle_Product' type='PickListValue'>Required_Bundle_Product = 3</field>
				Required_Bundle_Product: 3,
				///<field name='Optional_Bundle_Product' type='PickListValue'>Optional_Bundle_Product = 4</field>
				Optional_Bundle_Product: 4,
				///<field name='Project_based_Service' type='PickListValue'>Project_based_Service = 5</field>
				Project_based_Service: 5
			},
			///<field name='PropertyConfigurationStatus' type='PickList'></field>
			PropertyConfigurationStatus: {
				///<field name='Edit' type='PickListValue'>Edit = 0</field>
				Edit: 0,
				///<field name='Rectify' type='PickListValue'>Rectify = 1</field>
				Rectify: 1,
				///<field name='Not_Configured' type='PickListValue'>Not_Configured = 2</field>
				Not_Configured: 2
			}
		}
	};
};
//{'JsForm':['Opportunity Product'],'JsWebApi':true,'IsDebugForm':false,'IsDebugWebApi':false}