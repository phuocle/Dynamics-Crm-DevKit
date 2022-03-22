//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormCustomerRelationship_Information {
		interface tab_general_Sections {
			information: DevKit.Controls.Section;
		}
		interface tab_general extends DevKit.Controls.ITab {
			Section: tab_general_Sections;
		}
		interface Tabs {
			general: tab_general;
		}
		interface Body {
			Tab: Tabs;
			/** Select the primary account or contact involved in the customer relationship. */
			CustomerId: DevKit.Controls.Lookup;
			/** Type additional information about the primary party's role in the customer relationship, such as the length or quality of the relationship. */
			CustomerRoleDescription: DevKit.Controls.String;
			/** Choose the primary party's role or nature of the relationship the customer has with the second party. The field is read-only until both parties have been selected. Administrators can configure role values under Business Management in the Settings area. */
			CustomerRoleId: DevKit.Controls.Lookup;
			/** Select the secondary account or contact involved in the customer relationship. */
			PartnerId: DevKit.Controls.Lookup;
			/** Type additional information about the secondary party's role in the customer relationship, such as the length or quality of the relationship. */
			PartnerRoleDescription: DevKit.Controls.String;
			/** Choose the secondary party's role or nature of the relationship the customer has with the primary party. The field is read-only until both parties have been selected. Administrators can configure role values under Business Management in the Settings area. */
			PartnerRoleId: DevKit.Controls.Lookup;
		}
		interface Process extends DevKit.Controls.IProcess {
		}
	}
	class FormCustomerRelationship_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form CustomerRelationship_Information */
		Body: DevKit.FormCustomerRelationship_Information.Body;
		/** The Process of form CustomerRelationship_Information */
		Process: DevKit.FormCustomerRelationship_Information.Process;
		/** The SidePanes of form CustomerRelationship_Information */
		SidePanes: DevKit.SidePanes;
	}
	class CustomerRelationshipApi {
		/**
		* DynamicsCrm.DevKit CustomerRelationshipApi
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
		/** Unique identifier of the converse relationship of the customer relationship. */
		ConverseRelationshipId: string;
		/** Shows who created the record. */
		readonly CreatedBy: string;
		/** Shows the date and time when the customer relationship was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Shows who created the record on behalf of another user. */
		readonly CreatedOnBehalfBy: string;
		/** Select the primary account or contact involved in the customer relationship. */
		customerid_account: string;
		/** Select the primary account or contact involved in the customer relationship. */
		customerid_contact: string;
		/** Unique identifier of the customer relationship. */
		CustomerRelationshipId: string;
		/** Type additional information about the primary party's role in the customer relationship, such as the length or quality of the relationship. */
		CustomerRoleDescription: string;
		/** Choose the primary party's role or nature of the relationship the customer has with the second party. The field is read-only until both parties have been selected. Administrators can configure role values under Business Management in the Settings area. */
		CustomerRoleId: string;
		/** Unique identifier of the data import or data migration that created this record. */
		ImportSequenceNumber: number;
		/** Shows who last updated the record. */
		readonly ModifiedBy: string;
		/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Shows who created the record on behalf of another user. */
		readonly ModifiedOnBehalfBy: string;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string;
		/** Unique identifier of the business unit that owns the customer relationship. */
		readonly OwningBusinessUnit: string;
		/** Unique identifier of the team who owns the customer relationship. */
		readonly OwningTeam: string;
		/** Unique identifier of the user who owns the customer relationship. */
		readonly OwningUser: string;
		/** Select the secondary account or contact involved in the customer relationship. */
		partnerid_account: string;
		/** Select the secondary account or contact involved in the customer relationship. */
		partnerid_contact: string;
		/** Type additional information about the secondary party's role in the customer relationship, such as the length or quality of the relationship. */
		PartnerRoleDescription: string;
		/** Choose the secondary party's role or nature of the relationship the customer has with the primary party. The field is read-only until both parties have been selected. Administrators can configure role values under Business Management in the Settings area. */
		PartnerRoleId: string;
		/** For internal use only. */
		readonly UniqueDscId: string;
		readonly VersionNumber: number;
	}
}
declare namespace OptionSet {
	namespace CustomerRelationship {
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