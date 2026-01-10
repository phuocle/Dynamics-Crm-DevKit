//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormSearch_provider_Main_form {
		interface tab__AB87433A_5CC0_4BCF_B306_F697B6B56F37_Sections {
			/** General */
			_2D5C8850_749F_4FCA_807A_E58949695F92: DevKit.Controls.Section;
			/** Details */
			_AB87433A_5CC0_4BCF_B306_F697B6B56F37_SECTION_3: DevKit.Controls.Section;
		}
		/** General */
		interface tab__AB87433A_5CC0_4BCF_B306_F697B6B56F37 extends DevKit.Controls.ITab {
			Section: tab__AB87433A_5CC0_4BCF_B306_F697B6B56F37_Sections;
		}
		interface Tabs {
			/** General */
			_AB87433A_5CC0_4BCF_B306_F697B6B56F37: tab__AB87433A_5CC0_4BCF_B306_F697B6B56F37;
		}
		interface Body {
			Tab: Tabs;
			/** Unique identifier when you create a connector in Microsoft search, please check the documentation above. */
			ConnectionId: DevKit.Controls.String;
			/** This field specifies the description of Search provider record */
			msdyn_Description: DevKit.Controls.String;
			/** The name of the search provider */
			msdyn_Name: DevKit.Controls.String;
			organization: DevKit.Controls.ActionCards;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			/** Search Type */
			SearchType: DevKit.Controls.OptionSet;
			/** Sharepoint URL */
			SharepointURL: DevKit.Controls.String;
			WebResource_Disclaimer: DevKit.Controls.WebResource;
		}
	}
	export class FormSearch_provider_Main_form extends DevKit.IForm {
		/**
		* Search provider Main form [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** The Body section of form Search_provider_Main_form */
		Body: DevKit.FormSearch_provider_Main_form.Body;
	}
	export class msdyn_kmfederatedsearchconfigApi {
		/**
		* DynamicsCrm.DevKit msdyn_kmfederatedsearchconfigApi
		* @param entity The entity object from OData response
		*/
		constructor(entity?: Record<string, any>)
		/**
		 * Get the raw value of an aliased field
		 * @param alias The alias field name
		 * @param isMultiOptionSet True if the field is a multi-option set
		 * @returns The raw value or null if not found
		 */
		getAliasedValue(alias: string, isMultiOptionSet?: boolean): any;
		/**
		 * Get the formatted value of an aliased field
		 * @param alias The alias field name
		 * @param isMultiOptionSet True if the field is a multi-option set
		 * @returns The formatted value or empty string if not found
		 */
		getAliasedFormattedValue(alias: string, isMultiOptionSet?: boolean): string | string[];
		/** The entity object for Create/Update operations*/
		readonly Entity: Record<string, any>;
		/** The OData entity object containing raw data*/
		readonly ODataEntity: Record<string, any>;
		/** The entity name */
		readonly EntityName: string;
		/** The entity collection name */
		readonly EntityCollectionName: string;
		/** The @odata.etag is then used to build a cache of the response that is dependent on the fields that are retrieved */
		readonly "@odata.etag": string;
		/** Unique identifier when you create a connector in Microsoft search, please check the documentation above. */
		ConnectionId: string | null;
		/** Unique identifier of the user who created the record. */
		readonly CreatedBy: string | null;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who created the record. */
		readonly CreatedOnBehalfBy: string | null;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number | null;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string | null;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string | null;
		/** This field specifies the description of Search provider record */
		msdyn_Description: string | null;
		/** Unique identifier for entity instances */
		msdyn_kmfederatedsearchconfigId: string | null;
		/** The name of the search provider */
		msdyn_Name: string | null;
		Organization: string | null;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date | null;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string | null;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string | null;
		/** Unique identifier for the business unit that owns the record */
		readonly OwningBusinessUnit: string | null;
		/** Unique identifier for the team that owns the record. */
		readonly OwningTeam: string | null;
		/** Unique identifier for the user that owns the record. */
		readonly OwningUser: string | null;
		SearchType: OptionSet.msdyn_kmfederatedsearchconfig.SearchType | null;
		SharepointURL: string | null;
		/** Status of the kmfederatedsearchconfig */
		statecode: OptionSet.msdyn_kmfederatedsearchconfig.statecode | null;
		/** Reason for the status of the kmfederatedsearchconfig */
		statuscode: OptionSet.msdyn_kmfederatedsearchconfig.statuscode | null;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number | null;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number | null;
		/** Version Number */
		readonly VersionNumber: number | null;
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
		readonly FormattedValue: {
			/** Unique identifier when you create a connector in Microsoft search, please check the documentation above. */
			readonly ConnectionId: string;
			/** Unique identifier of the user who created the record. */
			readonly CreatedBy: string;
			/** Date and time when the record was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the record. */
			readonly CreatedOnBehalfBy: string;
			/** Sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			/** Unique identifier of the user who modified the record. */
			readonly ModifiedBy: string;
			/** Date and time when the record was modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who modified the record. */
			readonly ModifiedOnBehalfBy: string;
			/** This field specifies the description of Search provider record */
			readonly msdyn_Description: string;
			/** Unique identifier for entity instances */
			readonly msdyn_kmfederatedsearchconfigId: string;
			/** The name of the search provider */
			readonly msdyn_Name: string;
			readonly Organization: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Unique identifier for the business unit that owns the record */
			readonly OwningBusinessUnit: string;
			/** Unique identifier for the team that owns the record. */
			readonly OwningTeam: string;
			/** Unique identifier for the user that owns the record. */
			readonly OwningUser: string;
			readonly SearchType: string;
			readonly SharepointURL: string;
			/** Status of the kmfederatedsearchconfig */
			readonly statecode: string;
			/** Reason for the status of the kmfederatedsearchconfig */
			readonly statuscode: string;
			/** For internal use only. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Time zone code that was in use when the record was created. */
			readonly UTCConversionTimeZoneCode: string;
			/** Version Number */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace msdyn_kmfederatedsearchconfig {
		enum SearchType {
			/** Cross_Organizational_Search = 100000000*/
			Cross_Organizational_Search = 100000000,
			/** Microsoft_Graph_Connector = 100000002*/
			Microsoft_Graph_Connector = 100000002,
			/** Sharepoint = 100000001*/
			Sharepoint = 100000001
		}
		enum statecode {
			/** Active = 0*/
			Active = 0,
			/** Inactive = 1*/
			Inactive = 1
		}
		enum statuscode {
			/** Active = 1*/
			Active = 1,
			/** Inactive = 2*/
			Inactive = 2
		}
		enum RollupState {
			/** NotCalculated = 0 - Attribute value is yet to be calculated */
			NotCalculated,
			/** Calculated = 1 - Attribute value has been calculated per the last update time in <AttributeSchemaName>_Date attribute */
			Calculated,
			/** OverflowError = 2 - Attribute value calculation lead to overflow error */
			OverflowError,
			/** OtherError = 3 - Attribute value calculation failed due to an internal error, next run of calculation job will likely fix it */
			OtherError,
			/** RetryLimitExceeded = 4 - Attribute value calculation failed because the maximum number of retry attempts to calculate the value were exceeded likely due to high number of concurrency and locking conflicts */
			RetryLimitExceeded,
			/** HierarchicalRecursionLimitReached = 5 - Attribute value calculation failed because maximum hierarchy depth limit for calculation was reached */
			HierarchicalRecursionLimitReached,
			/** LoopDetected = 6 - Attribute value calculation failed because a recursive loop was detected in the hierarchy of the record */
			LoopDetected
		}
	}
}