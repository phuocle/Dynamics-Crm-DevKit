﻿//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormProduct_Association {
		interface tab_product_association_dynamic_properties_Sections {
			product_association_dynamic_properties_section: DevKit.Controls.Section;
		}
		interface tab_product_association_dynamic_properties extends DevKit.Controls.ITab {
			Section: tab_product_association_dynamic_properties_Sections;
		}
		interface Tabs {
			product_association_dynamic_properties: tab_product_association_dynamic_properties;
		}
		interface Body {
			Tab: Tabs;
			/** Select a product to add to the bundle or kit. */
			AssociatedProduct: DevKit.Controls.Lookup;
			/** Select a bundle or a kit. */
			ProductId: DevKit.Controls.Lookup;
			/** Select whether the associated product is required or optional. */
			ProductIsRequired: DevKit.Controls.OptionSet;
			/** Type the quantity of the products added to the bundle or kit. */
			Quantity: DevKit.Controls.Decimal;
			/** Shows the unit of the product association. */
			UoMId: DevKit.Controls.Lookup;
		}
		interface Process extends DevKit.Controls.IProcess {
		}
		interface Grid {
			product_association_dynamic_properties: DevKit.Controls.Grid;
		}
	}
	class FormProduct_Association extends DevKit.IForm {
		/**
		* Product Association [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Product_Association */
		Body: DevKit.FormProduct_Association.Body;
		/** The Process of form Product_Association */
		Process: DevKit.FormProduct_Association.Process;
		/** The Grid of form Product_Association */
		Grid: DevKit.FormProduct_Association.Grid;
		/** The SidePanes of form Product_Association */
		SidePanes: DevKit.SidePanes;
	}
	class ProductAssociationApi {
		/**
		* DynamicsCrm.DevKit ProductAssociationApi
		* @param entity The entity object
		*/
		constructor(entity?: any);
		/**
		 * Get the value of alias
		 * @param alias the alias value
		 * @param isMultiOptionSet true if the alias is multi OptionSet
		 */
		getAliasedValue(alias: string, isMultiOptionSet?: boolean): any;
		/**
		 * Get the formatted value of alias
		 * @param alias the alias value
		 * @param isMultiOptionSet true if the alias is multi OptionSet
		 */
		getAliasedFormattedValue(alias: string, isMultiOptionSet?: boolean): string;
		/** The entity object for Create/Update */
		Entity: unknown;
		/** The OData entity object */
		ODataEntity: unknown;
		/** The entity name */
		EntityName: string;
		/** The entity collection name */
		EntityCollectionName: string;
		/** The @odata.etag is then used to build a cache of the response that is dependant on the fields that are retrieved */
		"@odata.etag": string;
		/** Select a product to add to the bundle or kit. */
		AssociatedProduct: string;
		/** Shows who created the record. */
		readonly CreatedBy: string;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Shows who created the record on behalf of another user. */
		readonly CreatedOnBehalfBy: string;
		/** Internal Use Only */
		DMTImportState: number;
		/** Shows the conversion rate of the record's currency. The exchange rate is used to convert all money fields in the record from the local currency to the system's default currency. */
		readonly ExchangeRate: number;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		/** Shows who last updated the record. */
		readonly ModifiedBy: string;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Shows who created the record on behalf of another user. */
		readonly ModifiedOnBehalfBy: string;
		/** Unique identifier for the organization */
		readonly OrganizationId: string;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Shows the unique identifier of the product association. */
		ProductAssociationId: string;
		/** Select a bundle or a kit. */
		ProductId: string;
		/** Select whether the associated product is required or optional. */
		ProductIsRequired: OptionSet.ProductAssociation.ProductIsRequired;
		/** Shows whether the item has properties that can be customized. */
		PropertyCustomizationStatus: OptionSet.ProductAssociation.PropertyCustomizationStatus;
		/** Type the quantity of the products added to the bundle or kit. */
		Quantity: number;
		/** Shows whether the associated product is active or inactive. */
		statecode: OptionSet.ProductAssociation.statecode;
		/** Select the associated product's status. */
		statuscode: OptionSet.ProductAssociation.statuscode;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Shows the currency associated with the record. */
		TransactionCurrencyId: string;
		/** Shows the unit of the product association. */
		UoMId: string;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
	}
}
declare namespace OptionSet {
	namespace ProductAssociation {
		enum ProductIsRequired {
			/** 0 */
			Optional,
			/** 1 */
			Required
		}
		enum PropertyCustomizationStatus {
			/** 1 */
			Available,
			/** 0 */
			Not_Available
		}
		enum statecode {
			/** 0 */
			Active,
			/** 2 */
			Draft,
			/** 1 */
			Inactive,
			/** 3 */
			Under_Revision
		}
		enum statuscode {
			/** 1 */
			Active,
			/** 0 */
			Draft,
			/** 3 */
			DraftActive,
			/** 2 */
			Inactive
		}
		enum RollupState {
			/** 0 - Attribute value is yet to be calculated */
			NotCalculated,
			/** 1 - Attribute value has been calculated per the last update time in <AttributeSchemaName>_Date attribute */
			Calculated,
			/** 2 - Attribute value calculation lead to overflow error */
			OverflowError,
			/** 3 - Attribute value calculation failed due to an internal error, next run of calculation job will likely fix it */
			OtherError,
			/** 4 - Attribute value calculation failed because the maximum number of retry attempts to calculate the value were exceeded likely due to high number of concurrency and locking conflicts */
			RetryLimitExceeded,
			/** 5 - Attribute value calculation failed because maximum hierarchy depth limit for calculation was reached */
			HierarchicalRecursionLimitReached,
			/** 6 - Attribute value calculation failed because a recursive loop was detected in the hierarchy of the record */
			LoopDetected
		}
	}
}
//{'UseForm':true,'UseWebApi':true,'Version':'3.00.00','WebApiVersion':'2'}